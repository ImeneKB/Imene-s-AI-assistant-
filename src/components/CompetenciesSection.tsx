import React from 'react';
import { Award, Layers, Languages, Check } from 'lucide-react';
import { IMENE_PROFILE } from '../data/imeneProfile.ts';

export const CompetenciesSection: React.FC = () => {
  return (
    <section id="competencies" className="py-16 sm:py-20 border-b border-[#ECE5D8] bg-[#FAF8F4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#8C7A62]">
            Expertises Clés & Savoir-Faire
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1F1C18] mt-2 mb-4 tracking-tight">
            Compétences Spécialisées
          </h2>
          <p className="text-sm sm:text-base text-[#575045] font-light leading-relaxed">
            Une combinaison d&apos;acuité stratégique dans l&apos;industrie du prestige, de maîtrise des
            outils opérationnels digitaux et d&apos;aisance trilingue naturelle.
          </p>
        </div>

        {/* 3-Column Grid: Luxe & Marque / Digital & Outils / Langues */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Luxe & Marque */}
          <div className="bg-white p-6 sm:p-7 border border-[#ECE5D8] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#8C7A62] pb-3 border-b border-[#ECE5D8] mb-5">
                <Award className="w-4 h-4 text-[#8C7A62]" />
                <span>Luxe & Marketing de Marque</span>
              </div>

              <ul className="space-y-3.5">
                {IMENE_PROFILE.competencies[0].items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#38332C]">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#8C7A62] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-[#F2EDE4] text-xs text-[#786D5D]">
              Accent mis sur la cohérence de marque, le storytelling et le parcours client premium.
            </div>
          </div>

          {/* Column 2: Digital & Outils */}
          <div className="bg-white p-6 sm:p-7 border border-[#ECE5D8] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#8C7A62] pb-3 border-b border-[#ECE5D8] mb-5">
                <Layers className="w-4 h-4 text-[#8C7A62]" />
                <span>Digital, Outils & CRM</span>
              </div>

              <ul className="space-y-3.5">
                {IMENE_PROFILE.competencies[1].items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#38332C]">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#8C7A62] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-[#F2EDE4] text-xs text-[#786D5D]">
              Pratique quotidienne de Zendesk, Shopify, CMS e-commerce et reporting managérial.
            </div>
          </div>

          {/* Column 3: Langues & Communication */}
          <div className="bg-white p-6 sm:p-7 border border-[#ECE5D8] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#8C7A62] pb-3 border-b border-[#ECE5D8] mb-5">
                <Languages className="w-4 h-4 text-[#8C7A62]" />
                <span>Compétences Linguistiques</span>
              </div>

              <div className="space-y-4">
                {IMENE_PROFILE.languages.map((lang, idx) => (
                  <div key={idx} className="pb-3 border-b border-[#F7F4EE] last:border-b-0">
                    <div className="flex justify-between items-baseline">
                      <span className="font-serif text-lg text-[#1F1C18]">{lang.language}</span>
                      <span className="text-xs text-[#8C7A62] uppercase tracking-wider font-medium">
                        {lang.level}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#786D5D] mt-0.5">{lang.note}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-[#F2EDE4] text-xs text-[#786D5D]">
              Capacité à échanger avec aisance auprès d&apos;interlocuteurs internationaux et multiculturels.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
