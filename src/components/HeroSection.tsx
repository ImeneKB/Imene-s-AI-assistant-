import React from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import portraitImg from '../assets/images/imene_portrait_1791558655629.jpg';

interface HeroSectionProps {
  onSpeakClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSpeakClick }) => {
  const { t, isRtl } = useLanguage();

  return (
    <section id="about" className="pt-12 sm:pt-16 pb-16 border-b border-[#ECE5D8] bg-[#FAF8F4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Split Screen 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch mb-16">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div>
              <div className="inline-block text-xs uppercase tracking-[0.25em] text-[#8C7A62] font-medium mb-3">
                {t.hero.kicker}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#1F1C18] leading-[1.08] tracking-tight mb-6">
                {t.hero.name}
              </h1>

              <div className="text-sm uppercase tracking-widest text-[#786D5E] font-medium mb-6">
                {t.hero.program}
              </div>

              <p className="text-base sm:text-lg text-[#524B40] font-light leading-relaxed mb-6 max-w-2xl">
                {t.hero.bioLead}
                <strong className="font-normal text-[#1F1C18]">{t.hero.bioHighlight}</strong>
                {t.hero.bioEnd}
              </p>

              {/* Languages & Location metadata */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#706554] mb-8 pt-4 border-t border-[#ECE5D8]">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#8C7A62]" />
                  <span>{t.hero.location}</span>
                </div>
                {t.hero.languagesList.map((langItem, idx) => (
                  <React.Fragment key={idx}>
                    <span aria-hidden="true" className="text-[#CCC1B0]">·</span>
                    <span>{langItem}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onSpeakClick}
                className="px-6 py-3.5 bg-[#1F1C18] text-[#FAF8F4] text-xs uppercase tracking-widest font-medium hover:bg-[#38332C] transition-colors flex items-center gap-2"
              >
                <span>{t.hero.btnSpeak}</span>
                <ArrowUpRight className={`w-4 h-4 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
              </button>

              <a
                href="#contact"
                className="px-6 py-3.5 border border-[#1F1C18] text-[#1F1C18] text-xs uppercase tracking-widest font-medium hover:bg-white transition-colors"
              >
                {t.hero.btnContact}
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Portrait */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full max-w-md bg-white p-4 sm:p-5 border border-[#ECE5D8] shadow-xs">
              <div className="relative aspect-square overflow-hidden bg-[#F0EBE1]">
                <img
                  src={portraitImg}
                  alt={t.hero.portraitAlt}
                  className="w-full h-full object-cover object-top filter contrast-[1.02]"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#F4EFE6] text-[#423C34]">
                          <span class="font-serif text-2xl mb-1">${t.hero.portraitLabel}</span>
                          <span class="text-xs uppercase tracking-widest text-[#8C7A62]">${t.hero.kicker}</span>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
              <div className="pt-4 flex items-center justify-between text-xs text-[#706554]">
                <span className="font-serif italic text-sm text-[#1F1C18]">{t.hero.portraitLabel}</span>
                <span className="uppercase tracking-widest text-[10px]">{t.hero.portraitSub}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Key Metrics Strip */}
        <div className="border-t border-b border-[#ECE5D8] py-8 bg-[#FAF8F4]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.hero.kpis.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-serif text-3xl sm:text-4xl text-[#1F1C18] font-normal tracking-tight mb-1 tabular-nums">
                  {item.stat}
                </span>
                <span className="text-xs uppercase tracking-widest font-medium text-[#8C7A62] mb-1">
                  {item.label}
                </span>
                <span className="text-xs text-[#6B6152] font-light leading-relaxed">
                  {item.context}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
