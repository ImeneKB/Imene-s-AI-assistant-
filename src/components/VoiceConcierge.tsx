import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Mic, MicOff, RefreshCw, Send, Sparkles, AlertCircle } from 'lucide-react';
import { pcmFloat32ToInt16Base64, PcmStreamPlayer } from '../utils/audioUtils.ts';

interface Message {
  id: string;
  sender: 'user' | 'altea';
  text: string;
  audioUrl?: string;
  timestamp: string;
  language?: 'fr' | 'en' | 'ar';
}

const PRESET_PROMPTS = [
  {
    lang: 'fr',
    label: 'Présentation & Stage',
    query: 'Bonjour Altea, pouvez-vous me présenter Imene Khodja Bach et ses objectifs pour son stage de 2027 ?',
  },
  {
    lang: 'fr',
    label: 'Impact chez Typology',
    query: 'Comment Imene a-t-elle amélioré la satisfaction client de 10% et réduit le temps de réponse de 30% chez Typology ?',
  },
  {
    lang: 'en',
    label: 'Luxury Marketing Philosophy',
    query: 'Altea, what is Imene’s philosophy on luxury consumer experience and prestige brand moderation?',
  },
  {
    lang: 'en',
    label: 'Monaco & Global Journey',
    query: 'Tell me about Imene’s international academic background across Monaco, Barcelona, and London.',
  },
  {
    lang: 'ar',
    label: 'نبذة عن إيمان وخبرتها',
    query: 'مرحباً التيا، حدثيني باللغة العربية عن إيمان خوجة باخ وخبرتها في مجال التسويق الفاخر والعلاقات العامة.',
  },
];

export const VoiceConcierge: React.FC<{
  isLiveActive: boolean;
  setIsLiveActive: (active: boolean) => void;
}> = ({ isLiveActive, setIsLiveActive }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'altea',
      text: "Bonjour. Je suis Altea, l'assistante exécutive représentant Imene Khodja Bach. I converse fluently in French, English, and Arabic (العربية). Comment puis-je vous accompagner dans la découverte de son parcours dans la communication et le marketing du luxe ?",
      timestamp: 'Just now',
      language: 'fr',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [statusText, setStatusText] = useState<string>('Ready for dialogue');
  const [activeLangTab, setActiveLangTab] = useState<'all' | 'fr' | 'en' | 'ar'>('all');
  const [audioMuted, setAudioMuted] = useState(false);

  // Live API WebSocket & Audio references
  const wsRef = useRef<WebSocket | null>(null);
  const liveAudioCtxRef = useRef<AudioContext | null>(null);
  const liveMediaStreamRef = useRef<MediaStream | null>(null);
  const liveProcessorRef = useRef<ScriptProcessorNode | null>(null);
  const pcmPlayerRef = useRef<PcmStreamPlayer>(new PcmStreamPlayer());

  // Standard Voice Chat recording references
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const currentAudioElementRef = useRef<HTMLAudioElement | null>(null);

  // Scroll anchor for messages
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading, isSpeaking]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      stopLiveSession();
      if (currentAudioElementRef.current) {
        currentAudioElementRef.current.pause();
      }
    };
  }, []);

  // Sync external header trigger
  useEffect(() => {
    if (isLiveActive && !wsRef.current) {
      startLiveSession();
    } else if (!isLiveActive && wsRef.current) {
      stopLiveSession();
    }
  }, [isLiveActive]);

  // Handle Live API Session
  const startLiveSession = async () => {
    try {
      setStatusText('Connecting to Gemini 3.8 Live...');
      pcmPlayerRef.current.stop();

      const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
      const wsUrl = `${protocol}//${window.location.host}/live`;
      const ws = new WebSocket(wsUrl);
      wsRef.current = ws;

      ws.onopen = async () => {
        setStatusText('Live Session Active · Initializing microphone...');
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            audio: {
              sampleRate: 16000,
              channelCount: 1,
              echoCancellation: true,
              noiseSuppression: true,
            },
          });
          liveMediaStreamRef.current = stream;

          const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
          const audioCtx = new AudioContextClass({ sampleRate: 16000 });
          liveAudioCtxRef.current = audioCtx;

          const source = audioCtx.createMediaStreamSource(stream);
          const processor = audioCtx.createScriptProcessor(4096, 1, 1);
          liveProcessorRef.current = processor;

          processor.onaudioprocess = (e) => {
            if (ws.readyState === WebSocket.OPEN) {
              const inputData = e.inputBuffer.getChannelData(0);
              const base64Pcm = pcmFloat32ToInt16Base64(inputData);
              ws.send(JSON.stringify({ audio: base64Pcm }));
            }
          };

          source.connect(processor);
          processor.connect(audioCtx.destination);
          setStatusText('Listening live · Speak in French, English, or Arabic');
          setIsLiveActive(true);
        } catch (micErr: any) {
          console.error('Mic access error:', micErr);
          setStatusText('Microphone permission required for Live mode');
          stopLiveSession();
        }
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (data.type === 'ready') {
            setStatusText('Gemini 3.8 Live Connected · Speak now');
          } else if (data.type === 'audio' && data.audio) {
            if (!audioMuted) {
              setIsSpeaking(true);
              setStatusText('Altea is speaking (Live)...');
              pcmPlayerRef.current.playChunk(data.audio);
            }
          } else if (data.type === 'interrupted') {
            pcmPlayerRef.current.stop();
            setIsSpeaking(false);
            setStatusText('Listening live...');
          } else if (data.type === 'error') {
            setStatusText(`Notice: ${data.error}`);
          }
        } catch (e) {
          console.error('WS parse error:', e);
        }
      };

      ws.onclose = () => {
        setStatusText('Live session disconnected');
        stopLiveSession();
      };

      ws.onerror = (err) => {
        console.error('Live WS error:', err);
        setStatusText('Live session error');
        stopLiveSession();
      };
    } catch (err: any) {
      console.error('Live connect failed:', err);
      setStatusText('Could not connect to Live service');
      stopLiveSession();
    }
  };

  const stopLiveSession = () => {
    if (wsRef.current) {
      try {
        wsRef.current.close();
      } catch (e) {
        // ignore
      }
      wsRef.current = null;
    }

    if (liveProcessorRef.current) {
      try {
        liveProcessorRef.current.disconnect();
      } catch (e) {
        // ignore
      }
      liveProcessorRef.current = null;
    }

    if (liveMediaStreamRef.current) {
      liveMediaStreamRef.current.getTracks().forEach((t) => t.stop());
      liveMediaStreamRef.current = null;
    }

    if (liveAudioCtxRef.current) {
      try {
        liveAudioCtxRef.current.close();
      } catch (e) {
        // ignore
      }
      liveAudioCtxRef.current = null;
    }

    pcmPlayerRef.current.stop();
    setIsSpeaking(false);
    setIsLiveActive(false);
    setStatusText('Live session ended');
  };

  // Play audio response from base64 WAV
  const playWavAudio = (base64Audio: string) => {
    if (audioMuted) return;

    if (currentAudioElementRef.current) {
      currentAudioElementRef.current.pause();
      currentAudioElementRef.current = null;
    }

    try {
      const audio = new Audio(`data:audio/wav;base64,${base64Audio}`);
      currentAudioElementRef.current = audio;
      setIsSpeaking(true);
      setStatusText('Altea is speaking...');

      audio.onended = () => {
        setIsSpeaking(false);
        setStatusText('Ready for dialogue');
      };
      audio.onerror = () => {
        setIsSpeaking(false);
        setStatusText('Ready for dialogue');
      };

      audio.play().catch((err) => {
        console.warn('Playback error:', err);
        setIsSpeaking(false);
      });
    } catch (e) {
      console.error('Audio initialization error:', e);
      setIsSpeaking(false);
    }
  };

  // Detect predominant language of text for UI badge
  const detectLanguage = (text: string): 'ar' | 'fr' | 'en' => {
    // Check Arabic characters range \u0600-\u06FF
    if (/[\u0600-\u06FF]/.test(text)) return 'ar';
    // Check common French words / accents
    if (/[éèêëàâôûçîï]|\b(je|vous|nous|pour|dans|avec|est|une|des|le|la|les)\b/i.test(text)) return 'fr';
    return 'en';
  };

  // Send query via Executive Voice API (Gemini 3.8 Flash + Flash Lite TTS)
  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      language: detectLanguage(textToSend),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);
    setStatusText('Altea is synthesizing response...');

    try {
      // Build history for context
      const history = messages.slice(-6).map((m) => ({
        role: m.sender === 'user' ? ('user' as const) : ('assistant' as const),
        content: m.text,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          history,
          speak: !audioMuted,
        }),
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const data = await res.json();
      const replyText = data.text || 'Je suis à votre écoute pour toute précision.';
      const alteaMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'altea',
        text: replyText,
        audioUrl: data.audioBase64 || undefined,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        language: detectLanguage(replyText),
      };

      setMessages((prev) => [...prev, alteaMsg]);

      if (data.audioBase64 && !audioMuted) {
        playWavAudio(data.audioBase64);
      } else {
        setStatusText('Ready for dialogue');
      }
    } catch (err: any) {
      console.error('Message error:', err);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'altea',
          text: "Veuillez m'excuser, une brève hésitation est survenue. N'hésitez pas à reformuler votre question ou à contacter Imene directement à imenekhodjabach@gmail.com.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          language: 'fr',
        },
      ]);
      setStatusText('Ready for dialogue');
    } finally {
      setIsLoading(false);
    }
  };

  // Push-to-talk recording for standard chat
  const startRecording = async () => {
    try {
      audioChunksRef.current = [];
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        stream.getTracks().forEach((track) => track.stop());

        // Convert blob to base64
        const reader = new FileReader();
        reader.readAsDataURL(audioBlob);
        reader.onloadend = async () => {
          const base64Audio = (reader.result as string).split(',')[1];
          if (base64Audio) {
            setStatusText('Transcribing your voice...');
            setIsLoading(true);
            try {
              const transRes = await fetch('/api/transcribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  audioBase64: base64Audio,
                  mimeType: 'audio/webm',
                }),
              });
              const transData = await transRes.json();
              if (transData.text && transData.text.trim()) {
                await handleSendMessage(transData.text.trim());
              } else {
                setStatusText('Voice not recognized. Please retry or type.');
                setIsLoading(false);
              }
            } catch (err) {
              console.error('Transcription failed:', err);
              setStatusText('Transcription error');
              setIsLoading(false);
            }
          }
        };
      };

      mediaRecorder.start();
      setIsRecording(true);
      setStatusText('Listening... Speak now, then click to send');
    } catch (err) {
      console.error('Mic access error:', err);
      setStatusText('Microphone permission required');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const filteredPrompts = PRESET_PROMPTS.filter((p) =>
    activeLangTab === 'all' ? true : p.lang === activeLangTab
  );

  return (
    <section id="assistant" className="py-12 sm:py-16 border-b border-[#ECE5D8] bg-[#FAF8F4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header kicker and editorial title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#8C7A62]">
            Executive Voice Concierge · Live & Interactive
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1F1C18] mt-2 mb-4 tracking-tight">
            Converse with Altea
          </h2>
          <p className="text-sm sm:text-base text-[#575045] font-light leading-relaxed">
            Representing Imene Khodja Bach with poise, depth, and precision. Fluent in French,
            English, and Arabic with calm, authentic phonetic mastery.
          </p>
        </div>

        {/* Assistant Main Console: 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Visual Aura, State, and Live Controls (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-[#ECE5D8] p-6 sm:p-8 flex flex-col items-center text-center shadow-xs">
            {/* Visual Minimalist Audio Orb */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center my-4">
              {/* Outer atmospheric aura rings */}
              <div
                className={`absolute inset-0 rounded-full border border-[#DCD3C2] transition-all duration-700 ${
                  isSpeaking
                    ? 'scale-110 opacity-70 animate-pulse border-[#9E7D4B]'
                    : isRecording || isLiveActive
                    ? 'scale-105 opacity-50 border-[#8F2D2D]'
                    : 'scale-95 opacity-30'
                }`}
              />
              <div
                className={`absolute inset-4 rounded-full border border-[#E9E2D5] transition-all duration-500 ${
                  isSpeaking ? 'scale-105 opacity-80' : 'scale-90 opacity-40'
                }`}
              />

              {/* Core Minimalist Sphere */}
              <div
                className={`w-32 h-32 sm:w-36 sm:h-36 rounded-full flex flex-col items-center justify-center transition-all duration-500 shadow-md ${
                  isSpeaking
                    ? 'bg-gradient-to-b from-[#FAF5EC] to-[#E9DFCE] text-[#84683C] scale-105 ring-2 ring-[#B8A07A]/40'
                    : isLiveActive
                    ? 'bg-gradient-to-b from-[#FCF4F4] to-[#F3DFDF] text-[#8F2D2D] ring-2 ring-[#8F2D2D]/30'
                    : isRecording
                    ? 'bg-[#F9ECEC] text-[#8F2D2D] ring-2 ring-[#8F2D2D]/20 animate-pulse'
                    : 'bg-[#F5F2EB] text-[#423C34]'
                }`}
              >
                <Sparkles className="w-6 h-6 mb-1 opacity-80" />
                <span className="font-serif text-lg tracking-wider font-medium">ALTEA</span>
                <span className="text-[10px] font-sans uppercase tracking-widest text-[#7C7162]">
                  {isSpeaking ? 'Speaking' : isLiveActive ? 'Live 3.8' : isRecording ? 'Listening' : 'Ready'}
                </span>
              </div>
            </div>

            {/* Status Line */}
            <div className="text-xs tracking-wider uppercase text-[#736859] mb-6 flex items-center gap-2">
              <span
                className={`w-2 h-2 rounded-full ${
                  isSpeaking
                    ? 'bg-[#9E7D4B] animate-ping'
                    : isLiveActive
                    ? 'bg-[#8F2D2D]'
                    : isRecording
                    ? 'bg-[#8F2D2D] animate-ping'
                    : 'bg-[#2A8550]'
                }`}
              />
              <span>{statusText}</span>
            </div>

            {/* Dual Interaction Mode Switch / Buttons */}
            <div className="w-full space-y-3">
              {/* Primary: Gemini 3.8 Live API Toggle */}
              <button
                onClick={() => {
                  if (isLiveActive) {
                    stopLiveSession();
                  } else {
                    startLiveSession();
                  }
                }}
                className={`w-full py-3 px-4 text-xs uppercase tracking-widest font-medium transition-all flex items-center justify-center gap-2 border ${
                  isLiveActive
                    ? 'bg-[#8F2D2D] text-white border-[#8F2D2D] hover:bg-[#782424]'
                    : 'bg-[#1F1C18] text-[#FAF8F4] border-[#1F1C18] hover:bg-[#38332C]'
                }`}
              >
                <Mic className="w-4 h-4" />
                {isLiveActive ? 'End Live API Session' : 'Start Gemini 3.8 Live Stream'}
              </button>

              {/* Secondary: Push-to-Talk or Mute Audio toggle */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onMouseDown={startRecording}
                  onMouseUp={stopRecording}
                  onTouchStart={startRecording}
                  onTouchEnd={stopRecording}
                  disabled={isLiveActive}
                  className={`py-2.5 px-3 text-xs uppercase tracking-wider font-medium border border-[#DCD3C2] transition-colors flex items-center justify-center gap-1.5 ${
                    isLiveActive
                      ? 'opacity-40 cursor-not-allowed bg-[#F7F4EE] text-[#9A8F80]'
                      : isRecording
                      ? 'bg-[#8F2D2D] text-white border-[#8F2D2D]'
                      : 'bg-white hover:bg-[#F9F7F2] text-[#423C34]'
                  }`}
                  title="Hold to speak, release to send"
                >
                  {isRecording ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
                  <span>{isRecording ? 'Listening...' : 'Hold to Speak'}</span>
                </button>

                <button
                  onClick={() => {
                    setAudioMuted(!audioMuted);
                    if (!audioMuted && currentAudioElementRef.current) {
                      currentAudioElementRef.current.pause();
                    }
                  }}
                  className="py-2.5 px-3 text-xs uppercase tracking-wider font-medium border border-[#DCD3C2] bg-white hover:bg-[#F9F7F2] text-[#423C34] transition-colors flex items-center justify-center gap-1.5"
                >
                  {audioMuted ? <VolumeX className="w-3.5 h-3.5 text-[#8F2D2D]" /> : <Volume2 className="w-3.5 h-3.5" />}
                  <span>{audioMuted ? 'Muted' : 'Audio On'}</span>
                </button>
              </div>
            </div>

            {/* Language Accents Notice */}
            <div className="mt-6 pt-5 border-t border-[#ECE5D8] w-full text-left text-xs text-[#6F6456] leading-relaxed">
              <span className="font-serif italic text-sm text-[#1F1C18] block mb-1">
                Phonetic & Accent Specifications:
              </span>
              <div className="flex flex-col gap-1 text-[11px]">
                <span>· <strong>English</strong>: Neutral international accent, calm executive cadence.</span>
                <span>· <strong>Français</strong>: Accent parisien soigné, vocabulaire luxe et courtoisie.</span>
                <span dir="rtl" className="text-right font-arabic">· <strong>العربية</strong>: نطق فصيح ومهذب مع نبرة هادئة ورصينة.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Transcript & Prompt Starters (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#ECE5D8] p-6 sm:p-8 flex flex-col shadow-xs min-h-[540px]">
            {/* Language filter for sample questions */}
            <div className="flex items-center justify-between pb-4 border-b border-[#ECE5D8] mb-4">
              <div className="text-xs uppercase tracking-widest font-medium text-[#7A6E5D]">
                Suggested Questions
              </div>
              <div className="flex items-center gap-1 text-xs">
                {(['all', 'fr', 'en', 'ar'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setActiveLangTab(lang)}
                    className={`px-2.5 py-1 transition-colors uppercase tracking-wider text-[11px] ${
                      activeLangTab === lang
                        ? 'bg-[#1F1C18] text-white font-medium'
                        : 'text-[#6F6456] hover:text-[#1F1C18]'
                    }`}
                  >
                    {lang === 'all' ? 'All' : lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Prompt Starters Buttons */}
            <div className="flex flex-wrap gap-2 mb-6">
              {filteredPrompts.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(item.query)}
                  disabled={isLoading}
                  className="text-left text-xs px-3 py-1.5 bg-[#FAF8F4] border border-[#E4DC CE] border-[#E2D9C8] hover:border-[#9E7D4B] hover:bg-white text-[#423C34] transition-colors leading-snug"
                >
                  <span className="text-[10px] uppercase tracking-wider text-[#8C7A62] block mb-0.5">
                    {item.label}
                  </span>
                  <span className={item.lang === 'ar' ? 'font-arabic text-sm' : ''}>{item.query}</span>
                </button>
              ))}
            </div>

            {/* Dialogue Transcript Feed */}
            <div className="flex-1 overflow-y-auto max-h-[340px] pr-2 space-y-4 mb-4 border-t border-[#F2EDE4] pt-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div className="flex items-center gap-2 mb-1 text-[11px] uppercase tracking-wider text-[#8C7A62]">
                    <span>{msg.sender === 'altea' ? 'Altea · Executive Assistant' : 'You'}</span>
                    <span>·</span>
                    <span>{msg.timestamp}</span>
                    {msg.language && (
                      <>
                        <span>·</span>
                        <span className="font-semibold text-[#6E614F]">{msg.language.toUpperCase()}</span>
                      </>
                    )}
                  </div>
                  <div
                    className={`max-w-[88%] p-3.5 text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#1F1C18] text-[#FAF8F4]'
                        : 'bg-[#FBF9F5] border border-[#ECE5D8] text-[#24211E]'
                    }`}
                  >
                    <p className={`whitespace-pre-wrap ${msg.language === 'ar' ? 'font-arabic text-base text-right' : ''}`} dir={msg.language === 'ar' ? 'rtl' : 'ltr'}>
                      {msg.text}
                    </p>

                    {/* Audio replay button for Altea messages */}
                    {msg.sender === 'altea' && msg.audioUrl && (
                      <div className="mt-2.5 pt-2 border-t border-[#EAE3D5] flex items-center gap-2">
                        <button
                          onClick={() => msg.audioUrl && playWavAudio(msg.audioUrl)}
                          className="inline-flex items-center gap-1.5 text-xs text-[#7A633F] hover:text-[#5E4B2E] transition-colors font-medium tracking-wide"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                          <span>Replay Vocal Response</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex items-center gap-2 text-xs text-[#8C7A62] italic py-2">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Altea is composing answer...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputText);
              }}
              className="pt-3 border-t border-[#ECE5D8] flex items-center gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask Altea about Imene's experience at Typology, skills, Monaco..."
                className="flex-1 px-4 py-2.5 text-sm bg-[#FAF8F4] border border-[#DCD3C2] focus:border-[#1F1C18] focus:outline-hidden text-[#1F1C18] placeholder-[#9E9486] transition-colors"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !inputText.trim()}
                className="px-5 py-2.5 bg-[#1F1C18] hover:bg-[#38332C] text-[#FAF8F4] text-xs uppercase tracking-widest font-medium transition-colors disabled:opacity-40 flex items-center gap-1.5"
              >
                <span>Send</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
