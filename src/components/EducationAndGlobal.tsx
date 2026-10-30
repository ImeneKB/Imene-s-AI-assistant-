import React from 'react';
import { GraduationCap, Globe2, HeartHandshake, Compass, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

export const EducationAndGlobal: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-16 sm:py-20 border-b border-[#ECE5D8] bg-[#FAF8F4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#8C7A62]">
            {t.education.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1F1C18] mt-2 mb-4 tracking-tight">
            {t.education.title}
          </h2>
          <p className="text-sm sm:text-base text-[#575045] font-light leading-relaxed">
            {t.education.description}
          </p>
        </div>

        {/* 2-Column Grid: Degrees on Left, International & Volunteering on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Diplomas & Formation (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#8C7A62] pb-3 border-b border-[#ECE5D8]">
              <GraduationCap className="w-4 h-4 text-[#8C7A62]" />
              <span>{t.education.degreesHeader}</span>
            </div>

            {t.education.degrees.map((edu, idx) => (
              <div key={idx} className="bg-white p-6 border border-[#ECE5D8] shadow-xs">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs uppercase tracking-wider font-medium text-[#8C7A62]">
                    {edu.institution} · {edu.location}
                  </span>
                  <span className="text-xs text-[#7A6E5D] font-mono tabular-nums">
                    {edu.period}
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1F1C18] mb-2 leading-snug">
                  {edu.degree}
                </h3>
                {edu.track && (
                  <p className="text-xs text-[#5C5346] leading-relaxed pt-2 border-t border-[#F2EDE4]">
                    {edu.track}
                  </p>
                )}
              </div>
            ))}

            {/* Volunteering Spotlight */}
            <div className="bg-white p-6 border border-[#ECE5D8] shadow-xs">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-medium text-[#8C7A62] mb-2">
                <HeartHandshake className="w-4 h-4 text-[#8C7A62]" />
                <span>{t.education.volunteeringHeader}</span>
              </div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-serif text-xl font-normal text-[#1F1C18]">
                  {t.education.volunteeringTitle}
                </h3>
                <span className="text-xs text-[#7A6E5D] font-mono">{t.education.volunteeringPeriod}</span>
              </div>
              <p className="text-xs text-[#5C5346] leading-relaxed mt-2">
                {t.education.volunteeringDesc}
              </p>
            </div>
          </div>

          {/* Right Column: International Academic Hubs & Visual */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#8C7A62] pb-3 border-b border-[#ECE5D8]">
              <Globe2 className="w-4 h-4 text-[#8C7A62]" />
              <span>{t.education.internationalHeader}</span>
            </div>

            <div className="space-y-4">
              {t.education.international.map((exp, idx) => (
                <div key={idx} className="bg-white p-5 border border-[#ECE5D8] shadow-xs">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-serif text-lg font-normal text-[#1F1C18]">
                        {exp.institution}
                      </h4>
                      <div className="text-xs text-[#706554] mt-0.5">
                        {exp.location} · {exp.type}
                      </div>
                    </div>
                    <span className="text-xs text-[#8C7A62] font-mono tabular-nums">
                      {exp.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Global Perspectives & Multicultural Acuity Card */}
            <div className="bg-white p-6 sm:p-7 border border-[#ECE5D8] shadow-xs relative">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#ECE5D8]">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#8C7A62]" />
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#8C7A62]">
                    {t.education.globalVisionTitle}
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-widest font-mono text-[#8C7A62] bg-[#FAF8F4] px-2.5 py-1 border border-[#ECE5D8]">
                  {t.education.globalVisionSubtitle}
                </span>
              </div>

              <blockquote className="font-serif italic text-base sm:text-lg text-[#1F1C18] leading-snug mb-5">
                {t.education.globalVisionQuote}
              </blockquote>

              <div className="space-y-3.5 pt-2 border-t border-[#F5EFE6]">
                {t.education.globalPillars.map((pillar, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8C7A62] mt-1.5 shrink-0" />
                    <div>
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="text-xs font-semibold text-[#1F1C18]">
                          {pillar.title}
                        </span>
                        <span className="text-[11px] text-[#8C7A62] font-mono">
                          · {pillar.subtitle}
                        </span>
                      </div>
                      <p className="text-xs text-[#5C5346] leading-relaxed mt-0.5">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-[#ECE5D8] flex items-center justify-between text-xs text-[#7A6E5D] flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#8C7A62]" />
                  <span className="text-[11px] uppercase tracking-wider font-medium text-[#1F1C18]">
                    {t.education.globalBadge}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#8C7A62] bg-[#FAF8F4] px-2 py-0.5 border border-[#ECE5D8]">
                  TOEIC 920 · C1
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
