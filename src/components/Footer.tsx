import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#FAF8F4] text-[#695F50] text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#ECE5D8] pt-8">
        <div>
          <span className="font-serif text-base text-[#1F1C18] tracking-widest mr-2">ALTEA</span>
          <span className="uppercase tracking-wider text-[11px] text-[#8C7A62]">
            · Assistante Exécutive Vocale d&apos;Imene Khodja Bach
          </span>
        </div>

        <div className="flex items-center gap-6 text-[11px] uppercase tracking-widest">
          <a href="#about" className="hover:text-[#1F1C18] transition-colors">
            Profil
          </a>
          <a href="#assistant" className="hover:text-[#1F1C18] transition-colors">
            Assistant Vocal
          </a>
          <a href="#typology" className="hover:text-[#1F1C18] transition-colors">
            Typology
          </a>
          <a href="#contact" className="hover:text-[#1F1C18] transition-colors">
            Contact
          </a>
        </div>

        <div className="text-[11px] text-[#8C7A62]">
          Paris, France · ESCE Business School · 2026/2027
        </div>
      </div>
    </footer>
  );
};
