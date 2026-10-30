import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Calendar, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { IMENE_PROFILE } from '../data/imeneProfile.ts';

interface ContactSectionProps {
  onSpeakWithAltea: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onSpeakWithAltea }) => {
  const { t, isRtl } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(IMENE_PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(IMENE_PROFILE.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 border-b border-[#ECE5D8] bg-[#FAF8F4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="bg-white border border-[#ECE5D8] p-8 sm:p-12 lg:p-16 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Opportunity & Pitch */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#8C7A62]">
                {t.contact.kicker}
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1F1C18] tracking-tight leading-tight">
                {t.contact.title}
              </h2>

              <p className="text-base text-[#524B40] font-light leading-relaxed">
                {t.contact.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onSpeakWithAltea}
                  className="px-6 py-3.5 bg-[#1F1C18] text-[#FAF8F4] text-xs uppercase tracking-widest font-medium hover:bg-[#38332C] transition-colors flex items-center gap-2"
                >
                  <span>{t.contact.btnSpeak}</span>
                  <ArrowUpRight className={`w-4 h-4 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
                </button>

                <a
                  href={`mailto:${IMENE_PROFILE.email}?subject=Opportunité de Stage 2027 — Imene Khodja Bach`}
                  className="px-6 py-3.5 border border-[#1F1C18] text-[#1F1C18] text-xs uppercase tracking-widest font-medium hover:bg-[#FAF8F4] transition-colors"
                >
                  {t.contact.btnEmail}
                </a>
              </div>
            </div>

            {/* Right Column: Direct Coordinates Card */}
            <div className="lg:col-span-5 bg-[#FAF8F4] border border-[#ECE5D8] p-6 sm:p-8 space-y-6">
              {/* Email direct */}
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#E8DFC8]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white border border-[#ECE5D8] flex items-center justify-center text-[#8C7A62] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#8C7A62] font-semibold">
                      Email
                    </span>
                    <a
                      href={`mailto:${IMENE_PROFILE.email}`}
                      className="block text-sm font-medium text-[#1F1C18] hover:underline"
                    >
                      {IMENE_PROFILE.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="text-xs text-[#8C7A62] hover:text-[#1F1C18] p-1.5 transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Téléphone direct */}
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#E8DFC8]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white border border-[#ECE5D8] flex items-center justify-center text-[#8C7A62] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#8C7A62] font-semibold">
                      {t.contact.phoneTitle}
                    </span>
                    <a
                      href={`tel:${IMENE_PROFILE.phone}`}
                      className="block text-sm font-medium text-[#1F1C18] hover:underline tabular-nums"
                      dir="ltr"
                    >
                      {IMENE_PROFILE.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="text-xs text-[#8C7A62] hover:text-[#1F1C18] p-1.5 transition-colors"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Localisation */}
              <div className="flex items-start gap-3 pb-5 border-b border-[#E8DFC8]">
                <div className="w-8 h-8 rounded-full bg-white border border-[#ECE5D8] flex items-center justify-center text-[#8C7A62] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#8C7A62] font-semibold">
                    {t.contact.locationTitle}
                  </span>
                  <p className="text-sm font-medium text-[#1F1C18]">{t.contact.locationSub}</p>
                </div>
              </div>

              {/* Disponibilité */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white border border-[#ECE5D8] flex items-center justify-center text-[#8C7A62] shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#8C7A62] font-semibold">
                    {t.contact.internshipTitle}
                  </span>
                  <p className="text-sm font-medium text-[#1F1C18]">{t.contact.internshipSub}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
