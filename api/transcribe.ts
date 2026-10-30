export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { audioBase64, mimeType = 'audio/webm' } = req.body || {};

  if (!audioBase64) {
    return res.status(400).json({ error: 'Audio data is required' });
  }

  const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

  if (apiKey) {
    try {
      const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
      const apiRes = await fetch(geminiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [
                {
                  text: 'Transcribe the following speech accurately. Return ONLY the transcription text, in the language spoken (French, English, or Arabic). Do not add any notes, formatting, or commentary.',
                },
                {
                  inline_data: {
                    mime_type: mimeType,
                    data: audioBase64,
                  },
                },
              ],
            },
          ],
        }),
      });

      if (apiRes.ok) {
        const data = await apiRes.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || '';
        return res.status(200).json({ text });
      }
    } catch (err: any) {
      console.warn('Transcription error:', err);
    }
  }

  return res.status(200).json({ text: '', fallback: true });
}
