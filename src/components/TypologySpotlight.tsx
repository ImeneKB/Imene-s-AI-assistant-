import React from 'react';
import { Sparkles, TrendingUp, Clock, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import typologyLogo from '../assets/images/typology_official_logo.png';

export const TypologySpotlight: React.FC = () => {
  const { t } = useLanguage();

  const pillarIcons = [
    <Clock key="clock" className="w-4 h-4 text-[#8C7A62]" />,
    <TrendingUp key="trending" className="w-4 h-4 text-[#8C7A62]" />,
    <Users key="users" className="w-4 h-4 text-[#8C7A62]" />,
    <Sparkles key="sparkles" className="w-4 h-4 text-[#8C7A62]" />,
  ];

  return (
    <section id="typology" className="py-16 sm:py-20 border-b border-[#ECE5D8] bg-[#FAF8F4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#8C7A62]">
            {t.typology.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1F1C18] mt-2 mb-4 tracking-tight">
            {t.typology.title}
          </h2>
          <div className="flex items-center gap-3 text-xs text-[#706554] uppercase tracking-wider">
            <span>{t.typology.period}</span>
            <span aria-hidden="true">·</span>
            <span>{t.typology.location}</span>
            <span aria-hidden="true">·</span>
            <span>{t.typology.sector}</span>
          </div>
        </div>

        {/* 2-Column Split: Logo & Operational Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
          {/* Left Column: Visual Presentation */}
          <div className="lg:col-span-5 bg-white p-4 border border-[#ECE5D8] shadow-xs">
            <div className="relative aspect-4/3 overflow-hidden bg-white border border-[#ECE5D8] flex items-center justify-center p-6 sm:p-8">
              <img
                src={typologyLogo}
                alt="Typology Paris — Logo officiel"
                className="w-full h-full object-contain object-center"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div className="pt-3 text-xs text-[#786E5E] flex justify-between items-center">
              <span className="font-serif italic text-sm text-[#1F1C18]">{t.typology.captionTitle}</span>
              <span className="uppercase tracking-widest text-[10px]">{t.typology.captionSub}</span>
            </div>
          </div>

          {/* Right Column: Mission & Impact Points */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <p className="text-base text-[#4A4338] font-light leading-relaxed">
              {t.typology.description}
            </p>

            {/* Structured Impact Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {t.typology.pillars.map((pillar, idx) => (
                <div key={idx} className="p-4 bg-white border border-[#ECE5D8]">
                  <div className="flex items-center gap-2 mb-1.5 text-xs uppercase tracking-wider font-medium text-[#8C7A62]">
                    {pillarIcons[idx % pillarIcons.length]}
                    <span>{pillar.label}</span>
                  </div>
                  <p className="text-xs text-[#5C5346] leading-relaxed">
                    {pillar.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
