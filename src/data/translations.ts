export type Language = 'fr' | 'en' | 'ar';

export interface TranslationContent {
  header: {
    title: string;
    subtitle: string;
    nav: {
      about: string;
      typology: string;
      academics: string;
      competencies: string;
      contact: string;
    };
    liveButton: {
      idle: string;
      active: string;
    };
  };
  hero: {
    kicker: string;
    name: string;
    program: string;
    bioLead: string;
    bioHighlight: string;
    bioEnd: string;
    location: string;
    languagesList: string[];
    btnSpeak: string;
    btnContact: string;
    portraitAlt: string;
    portraitLabel: string;
    portraitSub: string;
    kpis: {
      stat: string;
      label: string;
      context: string;
    }[];
  };
  voice: {
    kicker: string;
    title: string;
    subtitle: string;
    welcomeMsg: string;
    placeholder: string;
    statusReady: string;
    statusSynthesizing: string;
    statusSpeaking: string;
    statusListening: string;
    btnSend: string;
    presetsLabel: string;
    tabs: {
      all: string;
      fr: string;
      en: string;
      ar: string;
    };
    presetPrompts: {
      lang: 'fr' | 'en' | 'ar';
      label: string;
      query: string;
    }[];
  };
  typology: {
    kicker: string;
    title: string;
    period: string;
    location: string;
    sector: string;
    description: string;
    captionTitle: string;
    captionSub: string;
    pillars: {
      label: string;
      text: string;
    }[];
  };
  education: {
    kicker: string;
    title: string;
    description: string;
    degreesHeader: string;
    volunteeringHeader: string;
    volunteeringTitle: string;
    volunteeringPeriod: string;
    volunteeringDesc: string;
    internationalHeader: string;
    archCaptionTitle: string;
    archCaptionSub: string;
    degrees: {
      degree: string;
      institution: string;
      period: string;
      location: string;
      track?: string;
    }[];
    international: {
      institution: string;
      location: string;
      type: string;
      period: string;
    }[];
  };
  competencies: {
    kicker: string;
    title: string;
    description: string;
    col1Header: string;
    col1Footer: string;
    col2Header: string;
    col2Footer: string;
    col3Header: string;
    col3Footer: string;
    categories: {
      luxuryItems: string[];
      digitalItems: string[];
    };
    languages: {
      lang: string;
      level: string;
      note: string;
    }[];
  };
  contact: {
    kicker: string;
    title: string;
    description: string;
    btnSpeak: string;
    btnEmail: string;
    copied: string;
    locationTitle: string;
    locationSub: string;
    phoneTitle: string;
    phoneSub: string;
    internshipTitle: string;
    internshipSub: string;
  };
  footer: {
    title: string;
    subtitle: string;
    nav: {
      about: string;
      assistant: string;
      typology: string;
      contact: string;
    };
    meta: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  fr: {
    header: {
      title: 'ALTEA',
      subtitle: '· IMENE KHODJA BACH',
      nav: {
        about: 'À Propos',
        typology: 'Typology',
        academics: 'Formation & Monaco',
        competencies: 'Compétences',
        contact: 'Contact',
      },
      liveButton: {
        idle: 'Dialogue avec Altea',
        active: 'Terminer la Session',
      },
    },
    hero: {
      kicker: 'Candidature Master · Communication, Luxe & Marketing du Prestige',
      name: 'Imene Khodja Bach',
      program: 'ESCE Business School Paris · Programme Grande École',
      bioLead: 'Actuellement en Master Communication, Luxe et Marketing du Prestige à l’ESCE, je recherche un ',
      bioHighlight: 'stage de 6 mois à partir de janvier 2027',
      bioEnd: '. Forte d’une expérience probante chez TYPOLOGY et d’échanges académiques à Monaco, Barcelone et Londres, je mets mes compétences en relation presse, médias et marketing digital au service de vos départements de prestige.',
      location: 'Paris, France',
      languagesList: [
        'Français (Maternelle)',
        'Arabe (Maternelle)',
        'Anglais (Courant)',
        'Espagnol (Débutant)',
      ],
      btnSpeak: 'Dialogue avec Altea',
      btnContact: 'Coordonnées & Stage 2027',
      portraitAlt: 'Imene Khodja Bach — Portrait',
      portraitLabel: 'Imene Khodja Bach',
      portraitSub: 'Paris · 2026/2027',
      kpis: [
        {
          stat: '-30%',
          label: 'Temps de Réponse',
          context: 'Réduction du délai moyen sur les réseaux sociaux grâce à la refonte du tri & de l’escalade chez Typology.',
        },
        {
          stat: '+10%',
          label: 'Satisfaction Client',
          context: 'Hausse en 6 mois chez Typology grâce à un engagement proactif et la désescalade bienveillante.',
        },
        {
          stat: '100+',
          label: 'Interactions / Jour',
          context: 'Gestion quotidienne des commentaires, messages privés et suivis de commandes avec rigueur.',
        },
        {
          stat: '3',
          label: 'Capitales Européennes',
          context: 'Cursus international à Monaco (IUM), Barcelone (EU Business School) et Londres (Omnes).',
        },
      ],
    },
    voice: {
      kicker: 'Executive Voice Concierge · Live & Interactif',
      title: 'Conversez avec Altea',
      subtitle: 'Altea est l’assistante exécutive d’Imene Khodja Bach. Posez vos questions par écrit ou vocalement en Français, Anglais ou Arabe.',
      welcomeMsg: "Bonjour. Je suis Altea, l'assistante exécutive représentant Imene Khodja Bach. Je m'exprime couramment en Français, Anglais et Arabe. Comment puis-je vous accompagner dans la découverte de son parcours dans la communication et le marketing du luxe ?",
      placeholder: 'Interrogez Altea sur Typology, les études à Monaco, les compétences ou le stage 2027...',
      statusReady: 'Prête pour le dialogue',
      statusSynthesizing: 'Altea synthétise sa réponse...',
      statusSpeaking: 'Altea s’exprime...',
      statusListening: 'Altea vous écoute... Parlez puis cliquez pour envoyer',
      btnSend: 'Envoyer',
      presetsLabel: 'Suggestions de questions :',
      tabs: {
        all: 'Toutes les langues',
        fr: 'Français',
        en: 'English',
        ar: 'العربية',
      },
      presetPrompts: [
        {
          lang: 'fr',
          label: 'Présentation & Stage',
          query: 'Bonjour Altea, pouvez-vous me présenter Imene Khodja Bach et ses objectifs pour son stage de 2027 ?',
        },
        {
          lang: 'fr',
          label: 'Impact chez Typology',
          query: 'Comment Imene a-t-elle amélioré la satisfaction client de 10% et réduit le temps de réponse de 30% chez Typology ?',
        },
        {
          lang: 'en',
          label: 'Luxury Marketing Philosophy',
          query: 'Altea, what is Imene’s philosophy on luxury consumer experience and prestige brand moderation?',
        },
        {
          lang: 'en',
          label: 'Monaco & Global Journey',
          query: 'Tell me about Imene’s international academic background across Monaco, Barcelona, and London.',
        },
        {
          lang: 'ar',
          label: 'نبذة عن إيمان وخبرتها',
          query: 'مرحباً التيا، حدثيني باللغة العربية عن إيمان خوجة باخ وخبرتها في مجال التسويق الفاخر والعلاقات العامة.',
        },
      ],
    },
    typology: {
      kicker: 'Expérience Professionnelle de Référence · Paris',
      title: 'TYPOLOGY — Modération Réseaux Sociaux & Expérience Client',
      period: 'Juillet 2024 – Décembre 2024',
      location: 'Paris, France',
      sector: 'Cosmétique Clean & Luxe Accessible',
      description: 'Au sein de l’équipe marketing et service client de la prestigieuse maison parisienne TYPOLOGY, Imene Khodja Bach a incarné la voix de la marque auprès d’une communauté exigeante. Elle a veillé au respect scrupuleux du ton épuré et de la cohérence de marque sur l’ensemble des plateformes sociales.',
      captionTitle: 'Typology Paris',
      captionSub: 'Identité & Expérience de Marque',
      pillars: [
        {
          label: 'Temps de Réponse: -30%',
          text: 'Refonte complète du processus de tri et d’escalade des demandes sur Zendesk et Shopify, réduisant le délai moyen de prise en charge de 30 %.',
        },
        {
          label: 'Satisfaction Client: +10%',
          text: 'Augmentation mesurable de 10 % du score de satisfaction en six mois par un engagement empathique, proactif et la désescalade bienveillante.',
        },
        {
          label: '100+ Demandes Quotidiennes',
          text: 'Gestion à haut débit des commentaires publics, messages privés et suivis de commandes avec un souci constant d’excellence et d’élégance.',
        },
        {
          label: 'Rapports pour la Direction',
          text: 'Analyse des avis clients et rédaction de synthèses mensuelles stratégiques sur la satisfaction produit destinées au comité de direction.',
        },
      ],
    },
    education: {
      kicker: 'Parcours Académique & Dimension Internationale',
      title: 'Formation d’Excellence & Échanges Européens',
      description: 'Un cursus structuré au sein de l’ESCE Grande École à Paris, enrichi par des immersions académiques de premier plan à Monaco, Barcelone et Londres.',
      degreesHeader: 'Diplômes & Grande École',
      volunteeringHeader: 'Engagement Social & Bénévolat',
      volunteeringTitle: 'Mentor Jeunesse & Bénévole — AFEV Paris',
      volunteeringPeriod: '01/2022 – 05/2022',
      volunteeringDesc: 'Accompagnement scolaire individualisé d’une jeune élève (lecture, écriture) et organisation de sorties culturelles (musées, expositions d’art à Paris) pour stimuler son ouverture d’esprit et son éveil culturel.',
      internationalHeader: 'Immersions Internationales',
      archCaptionTitle: 'Paris · Monaco · Barcelone · Londres',
      archCaptionSub: 'Ouverture Multiculturelle',
      degrees: [
        {
          degree: 'Master en Communication, Luxe & Marketing du Prestige',
          institution: 'ESCE Business School',
          period: '09/2025 – 09/2027',
          location: 'Paris, France',
          track: 'Programme Grande École — Spécialisation Luxe & Prestige',
        },
        {
          degree: 'Licence en Commerce International — Parcours Expert, Europe',
          institution: 'ESCE Business School',
          period: '09/2022 – 05/2025',
          location: 'Paris, France',
          track: 'Commerce international, marketing stratégique, négociation multiculturelle',
        },
      ],
      international: [
        {
          institution: 'Université Internationale de Monaco (IUM)',
          location: 'Monaco',
          type: 'Échange Académique Master Luxe',
          period: '01/2026 – 06/2026',
        },
        {
          institution: 'EU Business School',
          location: 'Barcelone, Espagne',
          type: 'Échange Académique International',
          period: '01/2024 – 05/2024',
        },
        {
          institution: 'Omnes Education London School',
          location: 'Londres, Royaume-Uni',
          type: 'École d’été internationale (Summer School)',
          period: '06/2023',
        },
      ],
    },
    competencies: {
      kicker: 'Expertises Clés & Savoir-Faire',
      title: 'Compétences Spécialisées',
      description: 'Une combinaison d’acuité stratégique dans l’industrie du prestige, de maîtrise des outils opérationnels digitaux et d’aisance trilingue naturelle.',
      col1Header: 'Luxe & Marketing de Marque',
      col1Footer: 'Cohérence de marque, storytelling de prestige et parcours client premium.',
      col2Header: 'Digital, Outils & CRM',
      col2Footer: 'Maîtrise des flux de requêtes omnicanales et analyse des retours d’expérience.',
      col3Header: 'Aisance Linguistique & Internationale',
      col3Footer: 'Facilité d’intégration dans des équipes multiculturelles et agences mondiales.',
      categories: {
        luxuryItems: [
          'Gestion de Marque de Luxe',
          'Comportement du Consommateur de Luxe',
          'Expérience Client d’Excellence',
          'Médias & Relations Publiques (RP)',
          'Études Marketing & Benchmark Concurrentiel',
        ],
        digitalItems: [
          'CRM & Service Client',
          'Zendesk',
          'Shopify',
          'Gestion des Réseaux Sociaux',
          'Suite Microsoft Office & Reporting',
        ],
      },
      languages: [
        { lang: 'Français', level: 'Langue Maternelle', note: 'Maîtrise éditoriale & rédactionnelle' },
        { lang: 'Arabe', level: 'Langue Maternelle', note: 'Bilinguisme authentique & culturel' },
        { lang: 'Anglais', level: 'Courant', note: 'Usage professionnel & international' },
        { lang: 'Espagnol', level: 'Débutant', note: 'Échange académique à Barcelone' },
      ],
    },
    contact: {
      kicker: 'Opportunité & Disponibilité · Stage 2027',
      title: 'À la Recherche d’un Stage de 6 Mois à Partir de Janvier 2027',
      description: 'Particulièrement intéressée par les métiers des médias, de la communication, des relations presse et du marketing digital dans l’univers du prestige et des marques de luxe. Je souhaite mettre mon dynamisme, mon empathie client et ma rigueur au service de vos équipes.',
      btnSpeak: 'Poser une question à Altea',
      btnEmail: 'Envoyer un Email Direct',
      copied: 'Copié dans le presse-papier !',
      locationTitle: 'Localisation',
      locationSub: 'Paris, France · Déplacements possibles',
      phoneTitle: 'Téléphone',
      phoneSub: 'Disponible pour un premier échange',
      internshipTitle: 'Disponibilité',
      internshipSub: 'Janvier 2027 · Durée de 6 mois',
    },
    footer: {
      title: 'ALTEA',
      subtitle: '· Assistante Exécutive Vocale d’Imene Khodja Bach',
      nav: {
        about: 'Profil',
        assistant: 'Assistant Vocal',
        typology: 'Typology',
        contact: 'Contact',
      },
      meta: 'Paris, France · ESCE Business School · 2026/2027',
    },
  },
  en: {
    header: {
      title: 'ALTEA',
      subtitle: '· IMENE KHODJA BACH',
      nav: {
        about: 'About',
        typology: 'Typology Case',
        academics: 'Academics & Monaco',
        competencies: 'Competencies',
        contact: 'Contact',
      },
      liveButton: {
        idle: 'Speak with Altea',
        active: 'End Live Session',
      },
    },
    hero: {
      kicker: 'Master Candidate · Communication, Luxury & Prestige Marketing',
      name: 'Imene Khodja Bach',
      program: 'ESCE Business School Paris · Grande École Master Program',
      bioLead: 'Currently pursuing my Master’s in Communication, Luxury & Prestige Marketing at ESCE Paris, I am seeking a ',
      bioHighlight: '6-month capstone internship starting in January 2027',
      bioEnd: '. Drawing from proven high-touch experience at TYPOLOGY and European academic exchanges in Monaco, Barcelona, and London, I leverage public relations, media, and digital marketing expertise to elevate luxury brand prestige.',
      location: 'Paris, France',
      languagesList: [
        'French (Native)',
        'Arabic (Native)',
        'English (Fluent)',
        'Spanish (Elementary)',
      ],
      btnSpeak: 'Dialogue with Altea',
      btnContact: 'Contact & 2027 Internship',
      portraitAlt: 'Imene Khodja Bach — Portrait',
      portraitLabel: 'Imene Khodja Bach',
      portraitSub: 'Paris · 2026/2027',
      kpis: [
        {
          stat: '-30%',
          label: 'Response Time',
          context: 'Reduced average response time on social media via triage & escalation redesign at Typology.',
        },
        {
          stat: '+10%',
          label: 'Client Satisfaction',
          context: '6-month CSAT increase through empathetic, proactive community engagement.',
        },
        {
          stat: '100+',
          label: 'Inquiries / Day',
          context: 'Rigorous daily handling of VIP comments, private messages, and order resolutions.',
        },
        {
          stat: '3',
          label: 'European Hubs',
          context: 'International academic terms in Monaco (IUM), Barcelona (EU Business School), and London (Omnes).',
        },
      ],
    },
    voice: {
      kicker: 'Executive Voice Concierge · Live & Interactive',
      title: 'Converse with Altea',
      subtitle: 'Altea is the executive AI assistant representing Imene Khodja Bach. Ask questions via voice or text in French, English, or Arabic.',
      welcomeMsg: 'Hello. I am Altea, the executive voice assistant representing Imene Khodja Bach. I speak fluent English, French, and Arabic. How may I assist you in discovering her background in luxury communication and prestige brand marketing?',
      placeholder: 'Ask Altea about Imene’s impact at Typology, Monaco studies, skills, or the 2027 internship...',
      statusReady: 'Ready for dialogue',
      statusSynthesizing: 'Altea is synthesizing response...',
      statusSpeaking: 'Altea is speaking...',
      statusListening: 'Altea is listening... Speak now, then click to send',
      btnSend: 'Send',
      presetsLabel: 'Suggested questions:',
      tabs: {
        all: 'All Languages',
        fr: 'Français',
        en: 'English',
        ar: 'العربية',
      },
      presetPrompts: [
        {
          lang: 'en',
          label: 'Presentation & 2027 Internship',
          query: 'Hello Altea, could you introduce Imene Khodja Bach and her objectives for her 2027 internship?',
        },
        {
          lang: 'en',
          label: 'Impact at Typology',
          query: 'How did Imene improve client satisfaction by 10% and reduce response times by 30% at Typology?',
        },
        {
          lang: 'en',
          label: 'Luxury Marketing Philosophy',
          query: 'Altea, what is Imene’s philosophy on luxury consumer experience and prestige brand moderation?',
        },
        {
          lang: 'en',
          label: 'Monaco & Global Journey',
          query: 'Tell me about Imene’s international academic background across Monaco, Barcelona, and London.',
        },
        {
          lang: 'fr',
          label: 'Présentation en Français',
          query: 'Bonjour Altea, pouvez-vous me présenter le parcours d’Imene en communication de luxe ?',
        },
      ],
    },
    typology: {
      kicker: 'Key Professional Reference · Paris',
      title: 'TYPOLOGY — Social Media Moderation & Client Experience',
      period: 'July 2024 – December 2024',
      location: 'Paris, France',
      sector: 'Clean Cosmetics & Accessible Luxury',
      description: 'Within the marketing and customer experience teams of prestige Parisian house TYPOLOGY, Imene Khodja Bach embodied the brand voice across discerning global communities. She safeguarded rigorous tone-of-voice alignment and brand elegance across all digital touchpoints.',
      captionTitle: 'Typology Paris',
      captionSub: 'Brand Identity & Prestige Experience',
      pillars: [
        {
          label: 'Response Time: -30%',
          text: 'Complete overhaul of ticketing triage and escalation pathways on Zendesk and Shopify, slashing average turnaround times by 30%.',
        },
        {
          label: 'Customer Satisfaction: +10%',
          text: 'Measurable 10% rise in customer satisfaction in six months through empathetic, proactive listening and refined issue resolution.',
        },
        {
          label: '100+ Daily Inquiries',
          text: 'High-volume management of public feedback, direct messages, and complex order inquiries with consistent poise and attention to detail.',
        },
        {
          label: 'Executive Reporting',
          text: 'In-depth review of customer feedback and monthly strategic satisfaction memos delivered directly to the executive committee.',
        },
      ],
    },
    education: {
      kicker: 'Academic Journey & Global Dimension',
      title: 'Academic Excellence & European Exchanges',
      description: 'A structured Grande École curriculum at ESCE Paris, enriched by high-caliber academic exchanges in Monaco, Barcelona, and London.',
      degreesHeader: 'Degrees & Grande École',
      volunteeringHeader: 'Social Engagement & Volunteering',
      volunteeringTitle: 'Youth Mentor & Volunteer — AFEV Paris',
      volunteeringPeriod: '01/2022 – 05/2022',
      volunteeringDesc: 'Individualized academic mentoring for a young student (reading, writing) and organizing cultural outings to Parisian museums and art exhibitions to stimulate curiosity and cultural enrichment.',
      internationalHeader: 'International Immersions',
      archCaptionTitle: 'Paris · Monaco · Barcelona · London',
      archCaptionSub: 'Multicultural Horizon',
      degrees: [
        {
          degree: 'Master in Communication, Luxury & Prestige Marketing',
          institution: 'ESCE Business School',
          period: '09/2025 – 09/2027',
          location: 'Paris, France',
          track: 'Grande École Program — Luxury & Prestige Specialization',
        },
        {
          degree: 'Bachelor in International Business — European Expert Track',
          institution: 'ESCE Business School',
          period: '09/2022 – 05/2025',
          location: 'Paris, France',
          track: 'International trade, strategic marketing, multicultural negotiation',
        },
      ],
      international: [
        {
          institution: 'International University of Monaco (IUM)',
          location: 'Monaco',
          type: 'Master Luxury Academic Exchange',
          period: '01/2026 – 06/2026',
        },
        {
          institution: 'EU Business School',
          location: 'Barcelona, Spain',
          type: 'International Academic Exchange',
          period: '01/2024 – 05/2024',
        },
        {
          institution: 'Omnes Education London School',
          location: 'London, United Kingdom',
          type: 'International Summer School',
          period: '06/2023',
        },
      ],
    },
    competencies: {
      kicker: 'Core Expertise & Savoir-Faire',
      title: 'Specialized Competencies',
      description: 'A blend of strategic luxury brand acumen, hands-on digital CRM execution, and innate trilingual fluency.',
      col1Header: 'Luxury & Brand Marketing',
      col1Footer: 'Focus on brand consistency, luxury storytelling, and elevated customer journeys.',
      col2Header: 'Digital Tools & CRM',
      col2Footer: 'Mastery of omnichannel support queues, data workflows, and experience analytics.',
      col3Header: 'Linguistic & Global Fluency',
      col3Footer: 'Natural ease across multicultural marketing teams, agencies, and worldwide clients.',
      categories: {
        luxuryItems: [
          'Luxury Brand Management',
          'Luxury Consumer Behaviour',
          'Client Experience Excellence',
          'Media & Public Relations (PR)',
          'Market Research & Competitive Benchmarking',
        ],
        digitalItems: [
          'CRM & Customer Support',
          'Zendesk',
          'Shopify',
          'Social Media Management',
          'Microsoft Office Suite & Reporting',
        ],
      },
      languages: [
        { lang: 'French', level: 'Native Language', note: 'Editorial & copywriting distinction' },
        { lang: 'Arabic', level: 'Native Language', note: 'Authentic bilingual cultural fluency' },
        { lang: 'English', level: 'Fluent', note: 'Full professional & international proficiency' },
        { lang: 'Spanish', level: 'Elementary', note: 'Acquired during Barcelona academic term' },
      ],
    },
    contact: {
      kicker: 'Opportunity & Availability · 2027 Internship',
      title: 'Seeking a 6-Month Internship Starting in January 2027',
      description: 'Particularly driven by careers in media, brand communication, public relations, and digital marketing within prestige and luxury maisons. Eager to bring dynamic energy, client empathy, and operational rigor to your teams.',
      btnSpeak: 'Ask Altea a Question',
      btnEmail: 'Send Direct Email',
      copied: 'Copied to clipboard!',
      locationTitle: 'Location',
      locationSub: 'Paris, France · Open to travel',
      phoneTitle: 'Telephone',
      phoneSub: 'Available for initial discussions',
      internshipTitle: 'Availability',
      internshipSub: 'January 2027 · 6-Month Duration',
    },
    footer: {
      title: 'ALTEA',
      subtitle: '· Executive Voice Assistant for Imene Khodja Bach',
      nav: {
        about: 'Profile',
        assistant: 'Voice Assistant',
        typology: 'Typology',
        contact: 'Contact',
      },
      meta: 'Paris, France · ESCE Business School · 2026/2027',
    },
  },
  ar: {
    header: {
      title: 'ألتيا',
      subtitle: '· إيمان خوجة باخ',
      nav: {
        about: 'عن إيمان',
        typology: 'تجربة تيبولوجي',
        academics: 'المسار الأكاديمي',
        competencies: 'الكفاءات',
        contact: 'تواصل',
      },
      liveButton: {
        idle: 'تحدث مع ألتيا',
        active: 'إنهاء الجلسة',
      },
    },
    hero: {
      kicker: 'طالبة ماجستير · الاتصال، الرفاهية والتسويق الفاخر',
      name: 'إيمان خوجة باخ',
      program: 'كلية إدارة الأعمال ESCE باريس · برنامج النخبة Grande École',
      bioLead: 'طالبة ماجستير في الاتصال، الرفاهية والتسويق الفاخر بباريس، أبحث عن ',
      bioHighlight: 'تدريب تخرج لمدة 6 أشهر ابتداءً من يناير 2027',
      bioEnd: '. بفضل تجربة متميزة لدى دار TYPOLOGY ودراسات أكاديمية رفيعة في موناكو وبرشلونة ولندن، أوظف خبراتي في العلاقات العامة، الإعلام والتسويق الرقمي لخدمة التميز للعلامات الفاخرة.',
      location: 'باريس، فرنسا',
      languagesList: [
        'الفرنسية (لغة أم)',
        'العربية (لغة أم)',
        'الإنجليزية (طلاقة تامة)',
        'الإسبانية (مستوى مبتدئ)',
      ],
      btnSpeak: 'تواصل مع ألتيا',
      btnContact: 'بيانات الاتصال وتدريب 2027',
      portraitAlt: 'إيمان خوجة باخ — صورة شخصية',
      portraitLabel: 'إيمان خوجة باخ',
      portraitSub: 'باريس · 2026/2027',
      kpis: [
        {
          stat: '-30%',
          label: 'وقت الاستجابة',
          context: 'تقليص متوسط وقت الرد على الشبكات الاجتماعية بفضل إعادة هيكلة التصنيف والتصعيد في Typology.',
        },
        {
          stat: '+10%',
          label: 'رضا العملاء',
          context: 'ارتفاع رضا العملاء خلال 6 أشهر بفضل التواصل الإنساني الاستباقي والحلول الدقيقة.',
        },
        {
          stat: '+100',
          label: 'تفاعل يومياً',
          context: 'إدارة يومية دقيقة لأكثر من 100 تعليق وطلب مع متابعة دورية لأعلى معايير الخدمة.',
        },
        {
          stat: '3',
          label: 'عواصم أوروبية',
          context: 'دراسة دولية في جامعة موناكو (IUM)، برشلونة (EU Business School) ولندن (Omnes).',
        },
      ],
    },
    voice: {
      kicker: 'المساعد الصوتي التنفيذي · تفاعلي ومباشر',
      title: 'تحدث مع ألتيا',
      subtitle: 'ألتيا هي المساعدة التنفيذية الذكية التي تمثل إيمان خوجة باخ. اطرح أسئلتك كتابة أو صوتاً باللغات العربية، الفرنسية أو الإنجليزية.',
      welcomeMsg: 'مرحباً بكم. أنا ألتيا، المساعدة التنفيذية الممثلة لإيمان خوجة باخ. أتحدث بطلاقة بالعربية، الفرنسية والإنجليزية. كيف يمكنني إفادتكم حول مسيرتها في الاتصال والتسويق الفاخر؟',
      placeholder: 'اسأل ألتيا عن تيبولوجي، دراسة موناكو، المهارات أو تدريب 2027...',
      statusReady: 'جاهزة للحوار',
      statusSynthesizing: 'ألتيا تقوم بصياغة الإجابة...',
      statusSpeaking: 'ألتيا تتحدث الآن...',
      statusListening: 'ألتيا تستمع إليك... تحدث الآن ثم انقر للإرسال',
      btnSend: 'إرسال',
      presetsLabel: 'أسئلة مقترحة:',
      tabs: {
        all: 'جميع اللغات',
        fr: 'Français',
        en: 'English',
        ar: 'العربية',
      },
      presetPrompts: [
        {
          lang: 'ar',
          label: 'نبذة عن إيمان وتدريب 2027',
          query: 'مرحباً ألتيا، حدثيني عن إيمان خوجة باخ وأهدافها لتدريب عام 2027 في مجال الرفاهية.',
        },
        {
          lang: 'ar',
          label: 'تجربة دار تيبولوجي Typology',
          query: 'كيف نجحت إيمان في رفع رضا العملاء بنسبة 10% وتقليص وقت الاستجابة بنسبة 30% في دار Typology؟',
        },
        {
          lang: 'ar',
          label: 'المسار الدولي وموناكو',
          query: 'ما هو المسار الأكاديمي الدولي لإيمان بين موناكو، برشلونة ولندن؟',
        },
        {
          lang: 'fr',
          label: 'Présentation & Stage',
          query: 'Bonjour Altea, pouvez-vous me présenter Imene Khodja Bach et ses objectifs pour son stage de 2027 ?',
        },
        {
          lang: 'en',
          label: 'Luxury Marketing Philosophy',
          query: 'Altea, what is Imene’s philosophy on luxury consumer experience and prestige brand moderation?',
        },
      ],
    },
    typology: {
      kicker: 'الخبرة المهنية المرجعية · باريس',
      title: 'دار TYPOLOGY — إدارة التواصل الاجتماعي وتجربة العملاء',
      period: 'يوليو 2024 – ديسمبر 2024',
      location: 'باريس، فرنسا',
      sector: 'مستحضرات التجميل النظيفة والرفاهية العصرية',
      description: 'ضمن فريقي التسويق وخدمة العملاء في دار TYPOLOGY الباريسية المرموقة، مثّلت إيمان خوجة باخ صوت العلامة لدى مجتمع راقٍ من العملاء، وحرصت على الالتزام الكامل بنبرة العلامة الدقيقة والهادئة على مختلف المنصات الرقمية.',
      captionTitle: 'Typology Paris',
      captionSub: 'هوية وتجربة العلامة الفاخرة',
      pillars: [
        {
          label: 'وقت الاستجابة: -30%',
          text: 'إعادة تصميم شاملة لمنظومة فرز الطلبات وتصعيدها عبر Zendesk وShopify، مما قلّص متوسط زمن المعالجة بنسبة 30%.',
        },
        {
          label: 'رضا العملاء: +10%',
          text: 'زيادة موثقة بنسبة 10% في مؤشر رضا العملاء خلال ستة أشهر من خلال التواصل الاستباقي وحل الاستفسارات بعناية فائقة.',
        },
        {
          label: 'أكثر من 100 طلب يومياً',
          text: 'إدارة متواصلة للتعليقات والرسائل الخاصة ومتابعة الشحنات مع الحفاظ الدائم على معايير الأناقة والتميز.',
        },
        {
          label: 'تقارير للإدارة العليا',
          text: 'تحليل دقيق لآراء العملاء وصياغة مذكرات شهرية استراتيجية حول الأداء ورضا المستهلك لتقديمها لمجلس الإدارة.',
        },
      ],
    },
    education: {
      kicker: 'المسار الأكاديمي والبعد الدولي',
      title: 'تعليم متميز وتبادل أكاديمي أوروبي',
      description: 'مسار دراسي رصين في كلية ESCE بباريس، عززته تجارب أكاديمية دولية رائدة في موناكو وبرشلونة ولندن.',
      degreesHeader: 'الشهادات وبرامج النخبة',
      volunteeringHeader: 'العمل التطوعي والمسؤولية المجتمعية',
      volunteeringTitle: 'توجيه وتدريب للشباب — جمعية AFEV باريس',
      volunteeringPeriod: '01/2022 – 05/2022',
      volunteeringDesc: 'مرافقة تعليمية فردية لطالبة لتعزيز مهارات القراءة والكتابة، وتنظيم جولات ثقافية في متاحف ومعارض باريس لتوسيع مداركها الثقافية.',
      internationalHeader: 'الانفتاح الأكاديمي الدولي',
      archCaptionTitle: 'باريس · موناكو · برشلونة · لندن',
      archCaptionSub: 'انفتاح متعدد الثقافات',
      degrees: [
        {
          degree: 'ماجستير في الاتصال، الفخامة والتسويق الراقي',
          institution: 'كلية ESCE لإدارة الأعمال',
          period: '09/2025 – 09/2027',
          location: 'باريس، فرنسا',
          track: 'برنامج Grande École — تخصص الرفاهية والماركات الفاخرة',
        },
        {
          degree: 'بكالوريوس في التجارة الدولية — مسار الخبراء، أوروبا',
          institution: 'كلية ESCE لإدارة الأعمال',
          period: '09/2022 – 05/2025',
          location: 'باريس، فرنسا',
          track: 'التجارة الدولية، التسويق الاستراتيجي، والتفاوض متعدد الثقافات',
        },
      ],
      international: [
        {
          institution: 'جامعة موناكو الدولية (IUM)',
          location: 'موناكو',
          type: 'برنامج تبادل ماجستير الرفاهية',
          period: '01/2026 – 06/2026',
        },
        {
          institution: 'كلية إدارة الأعمال الأوروبية (EU Business School)',
          location: 'برشلونة، إسبانيا',
          type: 'تبادل أكاديمي دولي',
          period: '01/2024 – 05/2024',
        },
        {
          institution: 'Omnes Education London School',
          location: 'لندن، المملكة المتحدة',
          type: 'مدرسة صيفية دولية',
          period: '06/2023',
        },
      ],
    },
    competencies: {
      kicker: 'الكفاءات والخبرات المتخصصة',
      title: 'المهارات والخبرات العملية',
      description: 'مزيج فريد من الرؤية الاستراتيجية في قطاع الفخامة، والتمكن الرقمي العملي، والطلاقة اللغوية الثلاثية الأصيلة.',
      col1Header: 'إدارة العلامات والتسويق الفاخر',
      col1Footer: 'التركيز على انسجام العلامة وسرد القصص الفاخرة وتجربة العميل الراقية.',
      col2Header: 'الرقميات وأدوات إدارة العملاء (CRM)',
      col2Footer: 'إتقان تدفقات خدمة العملاء الرقمية وتحليل تجارب المستهلك.',
      col3Header: 'الطلاقة اللغوية والدولية',
      col3Footer: 'سهولة التكيف والعمل ضمن فرق دولية ووكالات تسويق عالمية.',
      categories: {
        luxuryItems: [
          'إدارة العلامات التجارية الفاخرة',
          'سلوك مستهلك المنتجات الراقية',
          'تجربة عميل استثنائية (Client Experience)',
          'الإعلام والعلاقات العامة (PR)',
          'الدراسات التسويقية والمقارنات التنافسية',
        ],
        digitalItems: [
          'إدارة علاقات العملاء (CRM) والخدمة',
          'منصة Zendesk',
          'منصة التجارة الإلكترونية Shopify',
          'إدارة منصات التواصل الاجتماعي',
          'حزمة مايكروسوفت أوفيس وإعداد التقارير',
        ],
      },
      languages: [
        { lang: 'الفرنسية', level: 'لغة أم', note: 'كتابة وتحرير بأسلوب أدبي راقٍ' },
        { lang: 'العربية', level: 'لغة أم', note: 'طلاقة ثقافية وفصحى متميزة' },
        { lang: 'الإنجليزية', level: 'طلاقة كاملة', note: 'استخدام احترافي ودولي متقدم' },
        { lang: 'الإسبانية', level: 'مستوى مبتدئ', note: 'مكتسبة خلال الإقامة في برشلونة' },
      ],
    },
    contact: {
      kicker: 'فرص وتدريب عام 2027',
      title: 'البحث عن تدريب تخرج لمدة 6 أشهر ابتداءً من يناير 2027',
      description: 'اهتمام خاص بمجالات الإعلام، الاتصال المؤسسي، العلاقات العامة والتسويق الرقمي في قطاع الرفاهية والعلامات المرموقة. أطمح لتكريس شغفي، تعاطفي مع العملاء ودقتي لخدمة فرق عملكم.',
      btnSpeak: 'اطرح سؤالاً على ألتيا',
      btnEmail: 'إرسال بريد إلكتروني مباشر',
      copied: 'تم النسخ بنجاح !',
      locationTitle: 'المقر',
      locationSub: 'باريس، فرنسا · إمكانية التنقل',
      phoneTitle: 'الهاتف',
      phoneSub: 'متاحة للتواصل الأولي',
      internshipTitle: 'الموعد والمدة',
      internshipSub: 'يناير 2027 · تدريب لمدة 6 أشهر',
    },
    footer: {
      title: 'ألتيا',
      subtitle: '· المساعدة التنفيذية الذكية لإيمان خوجة باخ',
      nav: {
        about: 'الملف الشخصي',
        assistant: 'المساعد الصوتي',
        typology: 'تيبولوجي',
        contact: 'تواصل',
      },
      meta: 'باريس، فرنسا · كلية ESCE لإدارة الأعمال · 2026/2027',
    },
  },
};
