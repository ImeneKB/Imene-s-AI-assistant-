import React from 'react';
import { Award, Layers, Languages, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

export const CompetenciesSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="competencies" className="py-16 sm:py-20 border-b border-[#ECE5D8] bg-[#FAF8F4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#8C7A62]">
            {t.competencies.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1F1C18] mt-2 mb-4 tracking-tight">
            {t.competencies.title}
          </h2>
          <p className="text-sm sm:text-base text-[#575045] font-light leading-relaxed">
            {t.competencies.description}
          </p>
        </div>

        {/* 3-Column Grid: Luxe & Marque / Digital & Outils / Langues */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Luxe & Marque */}
          <div className="bg-white p-6 sm:p-7 border border-[#ECE5D8] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#8C7A62] pb-3 border-b border-[#ECE5D8] mb-5">
                <Award className="w-4 h-4 text-[#8C7A62]" />
                <span>{t.competencies.col1Header}</span>
              </div>

              <ul className="space-y-3.5">
                {t.competencies.categories.luxuryItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#38332C]">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#8C7A62] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-[#F2EDE4] text-xs text-[#786D5D]">
              {t.competencies.col1Footer}
            </div>
          </div>

          {/* Column 2: Digital & Outils */}
          <div className="bg-white p-6 sm:p-7 border border-[#ECE5D8] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#8C7A62] pb-3 border-b border-[#ECE5D8] mb-5">
                <Layers className="w-4 h-4 text-[#8C7A62]" />
                <span>{t.competencies.col2Header}</span>
              </div>

              <ul className="space-y-3.5">
                {t.competencies.categories.digitalItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#38332C]">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#8C7A62] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-[#F2EDE4] text-xs text-[#786D5D]">
              {t.competencies.col2Footer}
            </div>
          </div>

          {/* Column 3: Langues & Multilinguisme */}
          <div className="bg-white p-6 sm:p-7 border border-[#ECE5D8] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#8C7A62] pb-3 border-b border-[#ECE5D8] mb-5">
                <Languages className="w-4 h-4 text-[#8C7A62]" />
                <span>{t.competencies.col3Header}</span>
              </div>

              <div className="space-y-4">
                {t.competencies.languages.map((item, idx) => (
                  <div key={idx} className="border-b border-[#F5F0E6] pb-3 last:border-b-0 last:pb-0">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-[#1F1C18]">{item.lang}</span>
                      <span className="text-xs px-2 py-0.5 bg-[#FAF7F0] border border-[#E8DFC8] text-[#8C7A62] font-mono">
                        {item.level}
                      </span>
                    </div>
                    <p className="text-xs text-[#7A7063] font-light">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-[#F2EDE4] text-xs text-[#786D5D]">
              {t.competencies.col3Footer}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
