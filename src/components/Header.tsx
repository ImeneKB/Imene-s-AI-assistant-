import React from 'react';
import { useLanguage, Language } from '../context/LanguageContext.tsx';

interface HeaderProps {
  onStartVoice: () => void;
  isLiveActive: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onStartVoice, isLiveActive }) => {
  const { language, setLanguage, t, isRtl } = useLanguage();

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F4]/90 backdrop-blur-md border-b border-[#ECE5D8] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Wordmark */}
        <a
          href="#"
          className="text-xl sm:text-2xl font-serif tracking-widest text-[#1F1C18] whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity"
        >
          {t.header.title}{' '}
          <span className="text-xs font-sans tracking-widest uppercase text-[#8C7A62] ml-2 font-normal hidden sm:inline">
            {t.header.subtitle}
          </span>
        </a>

        {/* Zone 2: Nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-widest font-medium text-[#655E53]">
          <a href="#about" className="hover:text-[#1F1C18] transition-colors whitespace-nowrap shrink-0">
            {t.header.nav.about}
          </a>
          <a href="#typology" className="hover:text-[#1F1C18] transition-colors whitespace-nowrap shrink-0">
            {t.header.nav.typology}
          </a>
          <a href="#education" className="hover:text-[#1F1C18] transition-colors whitespace-nowrap shrink-0">
            {t.header.nav.academics}
          </a>
          <a href="#competencies" className="hover:text-[#1F1C18] transition-colors whitespace-nowrap shrink-0">
            {t.header.nav.competencies}
          </a>
          <a href="#contact" className="hover:text-[#1F1C18] transition-colors whitespace-nowrap shrink-0">
            {t.header.nav.contact}
          </a>
        </nav>

        {/* Zone 3: Language Switcher & Primary Action */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Language Switcher Buttons */}
          <div
            className="flex items-center border border-[#ECE5D8] bg-white p-0.5 shadow-2xs"
            role="group"
            aria-label="Language selection"
          >
            {(['fr', 'en', 'ar'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLanguage(l)}
                className={`px-2.5 py-1 text-[11px] sm:text-xs font-medium transition-all duration-150 ${
                  language === l
                    ? 'bg-[#1F1C18] text-[#FAF8F4]'
                    : 'text-[#655E53] hover:text-[#1F1C18] hover:bg-[#FAF8F4]'
                } ${l === 'ar' ? 'font-serif' : 'font-sans uppercase tracking-wider'}`}
                title={`Switch to ${l === 'fr' ? 'Français' : l === 'en' ? 'English' : 'العربية'}`}
              >
                {l === 'ar' ? 'عربي' : l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Speak with Altea CTA */}
          <button
            onClick={onStartVoice}
            className={`px-3 sm:px-5 py-2 text-xs uppercase tracking-widest font-medium transition-all duration-200 border whitespace-nowrap shrink-0 ${
              isLiveActive
                ? 'bg-[#8F2D2D] text-white border-[#8F2D2D] hover:bg-[#782424]'
                : 'bg-[#1F1C18] text-[#F9F7F2] border-[#1F1C18] hover:bg-[#38332C]'
            }`}
          >
            {isLiveActive ? t.header.liveButton.active : t.header.liveButton.idle}
          </button>
        </div>
      </div>
    </header>
  );
};
