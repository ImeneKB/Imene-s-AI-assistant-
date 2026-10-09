import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Calendar, ArrowUpRight } from 'lucide-react';
import { IMENE_PROFILE } from '../data/imeneProfile.ts';

interface ContactSectionProps {
  onSpeakWithAltea: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onSpeakWithAltea }) => {
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
                Opportunité & Disponibilité · Stage 2027
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1F1C18] tracking-tight leading-tight">
                À la Recherche d&apos;un Stage de 6 Mois à Partir de Janvier 2027
              </h2>

              <p className="text-base text-[#524B40] font-light leading-relaxed">
                Particulièrement intéressée par les métiers des médias, de la communication, des
                relations presse et du marketing digital dans l&apos;univers du prestige et des marques de
                luxe. Je souhaite mettre mon dynamisme, mon empathie client et ma rigueur au service de
                vos équipes.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onSpeakWithAltea}
                  className="px-6 py-3.5 bg-[#1F1C18] text-[#FAF8F4] text-xs uppercase tracking-widest font-medium hover:bg-[#38332C] transition-colors flex items-center gap-2"
                >
                  <span>Poser une question à Altea</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href={`mailto:${IMENE_PROFILE.email}?subject=Opportunité de Stage 2027 — Imene Khodja Bach`}
                  className="px-6 py-3.5 border border-[#1F1C18] text-[#1F1C18] text-xs uppercase tracking-widest font-medium hover:bg-[#FAF8F4] transition-colors"
                >
                  Envoyer un Email Direct
                </a>
              </div>
            </div>

            {/* Right Column: Contact Cards */}
            <div className="lg:col-span-5 bg-[#FAF8F4] border border-[#ECE5D8] p-6 sm:p-8 space-y-6">
              <div className="text-xs uppercase tracking-widest font-semibold text-[#8C7A62] pb-3 border-b border-[#ECE5D8]">
                Coordonnées Officielles
              </div>

              {/* Email Card */}
              <div className="space-y-1">
                <div className="text-[11px] uppercase tracking-wider text-[#8C7A62] flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Adresse Email</span>
                </div>
                <div className="flex items-center justify-between gap-2 pt-1">
                  <a
                    href={`mailto:${IMENE_PROFILE.email}`}
                    className="font-serif text-lg sm:text-xl text-[#1F1C18] hover:text-[#8C7A62] transition-colors truncate"
                  >
                    {IMENE_PROFILE.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 text-[#736859] hover:text-[#1F1C18] transition-colors"
                    title="Copier l'email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-[#2A8550]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Phone Card */}
              <div className="space-y-1 pt-4 border-t border-[#ECE5D8]">
                <div className="text-[11px] uppercase tracking-wider text-[#8C7A62] flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Téléphone</span>
                </div>
                <div className="flex items-center justify-between gap-2 pt-1">
                  <a
                    href={`tel:${IMENE_PROFILE.phone.replace(/\s+/g, '')}`}
                    className="font-serif text-lg sm:text-xl text-[#1F1C18] hover:text-[#8C7A62] transition-colors tabular-nums"
                  >
                    {IMENE_PROFILE.phone}
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    className="p-1.5 text-[#736859] hover:text-[#1F1C18] transition-colors"
                    title="Copier le numéro"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-[#2A8550]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Location Card */}
              <div className="space-y-1 pt-4 border-t border-[#ECE5D8]">
                <div className="text-[11px] uppercase tracking-wider text-[#8C7A62] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Localisation</span>
                </div>
                <div className="font-serif text-lg sm:text-xl text-[#1F1C18] pt-1">
                  {IMENE_PROFILE.location}
                </div>
              </div>

              {/* Availability Notice */}
              <div className="pt-4 border-t border-[#ECE5D8] flex items-center gap-2 text-xs text-[#6B6152]">
                <Calendar className="w-3.5 h-3.5 text-[#8C7A62] shrink-0" />
                <span>Disponible pour entretiens et opportunités dès à présent.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
