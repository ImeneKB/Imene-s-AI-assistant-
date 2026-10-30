import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 bg-[#FAF8F4] text-[#695F50] text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#ECE5D8] pt-8">
        <div>
          <span className="font-serif text-base text-[#1F1C18] tracking-widest mr-2">{t.footer.title}</span>
          <span className="uppercase tracking-wider text-[11px] text-[#8C7A62]">
            {t.footer.subtitle}
          </span>
        </div>

        <div className="flex items-center gap-6 text-[11px] uppercase tracking-widest">
          <a href="#about" className="hover:text-[#1F1C18] transition-colors">
            {t.footer.nav.about}
          </a>
          <a href="#assistant" className="hover:text-[#1F1C18] transition-colors">
            {t.footer.nav.assistant}
          </a>
          <a href="#typology" className="hover:text-[#1F1C18] transition-colors">
            {t.footer.nav.typology}
          </a>
          <a href="#contact" className="hover:text-[#1F1C18] transition-colors">
            {t.footer.nav.contact}
          </a>
        </div>

        <div className="text-[11px] text-[#8C7A62]">
          {t.footer.meta}
        </div>
      </div>
    </footer>
  );
};
