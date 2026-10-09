import React from 'react';
import { Sparkles, CheckCircle2, TrendingUp, Clock, Users } from 'lucide-react';
import typologyImg from '../assets/images/typology_luxury_skincare_1791558666879.jpg';

export const TypologySpotlight: React.FC = () => {
  return (
    <section id="typology" className="py-16 sm:py-20 border-b border-[#ECE5D8] bg-[#FAF8F4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#8C7A62]">
            Expérience Professionnelle de Référence · Paris
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1F1C18] mt-2 mb-4 tracking-tight">
            TYPOLOGY — Modération Réseaux Sociaux & Expérience Client
          </h2>
          <div className="flex items-center gap-3 text-xs text-[#706554] uppercase tracking-wider">
            <span>Juillet 2024 – Décembre 2024</span>
            <span aria-hidden="true">·</span>
            <span>Paris, France</span>
            <span aria-hidden="true">·</span>
            <span>Cosmétique Clean & Luxe Accessible</span>
          </div>
        </div>

        {/* 2-Column Split: Skincare Image & Operational Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
          {/* Left Column: Visual Presentation */}
          <div className="lg:col-span-5 bg-white p-4 border border-[#ECE5D8] shadow-xs">
            <div className="relative aspect-4/3 overflow-hidden bg-[#F0EBE1]">
              <img
                src={typologyImg}
                alt="Typology Paris — Clean luxury skincare"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div className="pt-3 text-xs text-[#786E5E] flex justify-between items-center">
              <span className="font-serif italic text-sm text-[#1F1C18]">Typology Paris</span>
              <span className="uppercase tracking-widest text-[10px]">Expérience Digitale de Luxe</span>
            </div>
          </div>

          {/* Right Column: Mission & Impact Points */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <p className="text-base text-[#4A4338] font-light leading-relaxed">
              Au sein de l&apos;équipe marketing et service client de la prestigieuse marque parisienne
              TYPOLOGY, Imene Khodja Bach a incarné la voix de la marque auprès d&apos;une communauté
              exigeante. Elle a veillé au respect scrupuleux du ton épuré et de la cohérence de marque sur
              l&apos;ensemble des plateformes sociales.
            </p>

            {/* Structured Impact Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white border border-[#ECE5D8]">
                <div className="flex items-center gap-2 mb-1.5 text-xs uppercase tracking-wider font-medium text-[#8C7A62]">
                  <Clock className="w-4 h-4 text-[#8C7A62]" />
                  <span>Temps de Réponse: -30%</span>
                </div>
                <p className="text-xs text-[#5C5346] leading-relaxed">
                  Refonte complète du processus de tri et d&apos;escalade des demandes sur Zendesk et
                  Shopify, réduisant le délai moyen de prise en charge de 30 %.
                </p>
              </div>

              <div className="p-4 bg-white border border-[#ECE5D8]">
                <div className="flex items-center gap-2 mb-1.5 text-xs uppercase tracking-wider font-medium text-[#8C7A62]">
                  <TrendingUp className="w-4 h-4 text-[#8C7A62]" />
                  <span>Satisfaction Client: +10%</span>
                </div>
                <p className="text-xs text-[#5C5346] leading-relaxed">
                  Augmentation mesurable de 10 % du score de satisfaction en six mois par un engagement
                  empathique, proactif et la désescalade bienveillante.
                </p>
              </div>

              <div className="p-4 bg-white border border-[#ECE5D8]">
                <div className="flex items-center gap-2 mb-1.5 text-xs uppercase tracking-wider font-medium text-[#8C7A62]">
                  <Users className="w-4 h-4 text-[#8C7A62]" />
                  <span>100+ Demandes Quotidiennes</span>
                </div>
                <p className="text-xs text-[#5C5346] leading-relaxed">
                  Gestion à haut débit des commentaires publics, messages privés et suivis de commandes
                  avec un souci constant d&apos;excellence et d&apos;élégance.
                </p>
              </div>

              <div className="p-4 bg-white border border-[#ECE5D8]">
                <div className="flex items-center gap-2 mb-1.5 text-xs uppercase tracking-wider font-medium text-[#8C7A62]">
                  <Sparkles className="w-4 h-4 text-[#8C7A62]" />
                  <span>Rapports pour la Direction</span>
                </div>
                <p className="text-xs text-[#5C5346] leading-relaxed">
                  Analyse des avis clients et rédaction de synthèses mensuelles stratégiques sur la
                  performance produit destinées au comité de direction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
