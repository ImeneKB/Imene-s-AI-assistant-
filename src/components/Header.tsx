import React from 'react';

interface HeaderProps {
  onStartVoice: () => void;
  isLiveActive: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onStartVoice, isLiveActive }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F4]/90 backdrop-blur-md border-b border-[#ECE5D8] transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-xl sm:text-2xl font-serif tracking-widest text-[#1F1C18] whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity"
        >
          ALTEA <span className="text-xs font-sans tracking-widest uppercase text-[#8C7A62] ml-2 font-normal">· IMENE KHODJA BACH</span>
        </a>

        {/* Zone 2: 4 concise single-line nav links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest font-medium text-[#655E53]">
          <a href="#about" className="hover:text-[#1F1C18] transition-colors whitespace-nowrap shrink-0">
            About Imene
          </a>
          <a href="#typology" className="hover:text-[#1F1C18] transition-colors whitespace-nowrap shrink-0">
            Typology Case
          </a>
          <a href="#education" className="hover:text-[#1F1C18] transition-colors whitespace-nowrap shrink-0">
            Academics & Monaco
          </a>
          <a href="#competencies" className="hover:text-[#1F1C18] transition-colors whitespace-nowrap shrink-0">
            Competencies
          </a>
          <a href="#contact" className="hover:text-[#1F1C18] transition-colors whitespace-nowrap shrink-0">
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onStartVoice}
            className={`px-4 sm:px-5 py-2 text-xs uppercase tracking-widest font-medium transition-all duration-200 border whitespace-nowrap shrink-0 ${
              isLiveActive
                ? 'bg-[#8F2D2D] text-white border-[#8F2D2D] hover:bg-[#782424]'
                : 'bg-[#1F1C18] text-[#F9F7F2] border-[#1F1C18] hover:bg-[#38332C]'
            }`}
          >
            {isLiveActive ? 'End Live Session' : 'Speak with Altea'}
          </button>
        </div>
      </div>
    </header>
  );
};
