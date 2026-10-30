import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { VoiceConcierge } from './components/VoiceConcierge.tsx';
import { TypologySpotlight } from './components/TypologySpotlight.tsx';
import { EducationAndGlobal } from './components/EducationAndGlobal.tsx';
import { CompetenciesSection } from './components/CompetenciesSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { LanguageProvider, useLanguage } from './context/LanguageContext.tsx';

function MainApp() {
  const [isLiveActive, setIsLiveActive] = useState(false);
  const { isRtl } = useLanguage();

  const handleStartVoice = () => {
    setIsLiveActive(true);
    const el = document.getElementById('assistant');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToAssistant = () => {
    const el = document.getElementById('assistant');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen bg-[#FAF8F4] text-[#211F1D] flex flex-col selection:bg-[#EAE1D2] selection:text-[#181614] ${
        isRtl ? 'font-serif' : 'font-sans'
      }`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Top Bar with Language Switcher */}
      <Header onStartVoice={handleStartVoice} isLiveActive={isLiveActive} />

      <main className="flex-1">
        {/* Editorial Split Hero Section & Full-Width KPIs */}
        <HeroSection onSpeakClick={handleScrollToAssistant} />

        {/* Central Voice Concierge Experience */}
        <VoiceConcierge isLiveActive={isLiveActive} setIsLiveActive={setIsLiveActive} />

        {/* In-depth Typology Case Study */}
        <TypologySpotlight />

        {/* Academics & International Hubs (Monaco, Barcelona, London) */}
        <EducationAndGlobal />

        {/* Competencies, Digital Tools & Trilingual Fluency */}
        <CompetenciesSection />

        {/* Contact & 2027 Internship Inquiries */}
        <ContactSection onSpeakWithAltea={handleScrollToAssistant} />
      </main>

      {/* Refined Minimalist Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
