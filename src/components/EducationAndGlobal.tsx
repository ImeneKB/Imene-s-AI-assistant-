import React from 'react';
import { GraduationCap, Globe2, HeartHandshake } from 'lucide-react';
import { IMENE_PROFILE } from '../data/imeneProfile.ts';
import archImg from '../assets/images/monaco_paris_architecture_1791558677423.jpg';

export const EducationAndGlobal: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-20 border-b border-[#ECE5D8] bg-[#FAF8F4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#8C7A62]">
            Parcours Académique & Dimension Internationale
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1F1C18] mt-2 mb-4 tracking-tight">
            Formation d&apos;Excellence & Échanges Européens
          </h2>
          <p className="text-sm sm:text-base text-[#575045] font-light leading-relaxed">
            Un cursus structuré au sein de l&apos;ESCE Grande École à Paris, enrichi par des immersions
            académiques de premier plan à Monaco, Barcelone et Londres.
          </p>
        </div>

        {/* 2-Column Grid: Degrees on Left, International & Volunteering on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Diplomas & Formation (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#8C7A62] pb-3 border-b border-[#ECE5D8]">
              <GraduationCap className="w-4 h-4 text-[#8C7A62]" />
              <span>Diplômes & Grande École</span>
            </div>

            {IMENE_PROFILE.education.map((edu, idx) => (
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
                <span>Engagement Social & Bénévolat</span>
              </div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-serif text-xl font-normal text-[#1F1C18]">
                  Mentor Jeunesse & Bénévole — AFEV Paris
                </h3>
                <span className="text-xs text-[#7A6E5D] font-mono">01/2022 – 05/2022</span>
              </div>
              <p className="text-xs text-[#5C5346] leading-relaxed mt-2">
                Accompagnement scolaire individualisé d&apos;une jeune élève (lecture, écriture) et
                organisation de sorties culturelles (musées, expositions d&apos;art à Paris) pour stimuler
                son ouverture d&apos;esprit et son éveil culturel.
              </p>
            </div>
          </div>

          {/* Right Column: International Academic Hubs & Architecture Visual (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#8C7A62] pb-3 border-b border-[#ECE5D8]">
              <Globe2 className="w-4 h-4 text-[#8C7A62]" />
              <span>Immersions Internationales</span>
            </div>

            <div className="space-y-4">
              {IMENE_PROFILE.international.map((exp, idx) => (
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

            {/* Architectural Visual Banner */}
            <div className="bg-white p-3 border border-[#ECE5D8] shadow-xs">
              <div className="relative aspect-16/9 overflow-hidden bg-[#F0EBE1]">
                <img
                  src={archImg}
                  alt="Paris & Monaco — Luxury Architectural Aesthetics"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="pt-2 text-xs text-[#786E5E] flex justify-between items-center">
                <span className="font-serif italic text-sm text-[#1F1C18]">Paris · Monaco · Barcelone · Londres</span>
                <span className="uppercase tracking-widest text-[10px]">Ouverture Multiculturelle</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
