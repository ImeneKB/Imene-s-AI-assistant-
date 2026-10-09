export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  kpis: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  track?: string;
}

export interface InternationalExp {
  institution: string;
  location: string;
  type: string;
  period: string;
}

export interface ImeneProfile {
  name: string;
  tagline: string;
  subtagline: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  seeking: string;
  languages: { language: string; level: string; note: string }[];
  experiences: Experience[];
  education: Education[];
  international: InternationalExp[];
  competencies: {
    category: string;
    items: string[];
  }[];
  keyAchievements: {
    stat: string;
    label: string;
    context: string;
  }[];
}

export const IMENE_PROFILE: ImeneProfile = {
  name: "Imene Khodja Bach",
  tagline: "Étudiante en Master — Communication, Luxe & Marketing du Prestige",
  subtagline: "Master Candidate in Luxury Brand Communication & Marketing",
  bio: "Actuellement en Master Communication, Luxe et Marketing du Prestige à l'ESCE Business School Paris (Programme Grande École), je recherche un stage de 6 mois à partir de janvier 2027. Passionnée par l'univers des médias, de la communication de marque, des relations presse et du digital, j'ai développé une solide expertise de l'expérience client haut de gamme chez TYPOLOGY ainsi qu'une ouverture multiculturelle à travers des échanges à Monaco, Barcelone et Londres.",
  email: "imenekhodjabach@gmail.com",
  phone: "+33 6 28 46 83 29",
  location: "Paris, France",
  seeking: "Stage de 6 mois à partir de janvier 2027 · Communication, Digital, Médias & Marketing du Prestige",
  languages: [
    { language: "Français", level: "Langue maternelle", note: "Native fluency, French accent" },
    { language: "Arabe", level: "Langue maternelle", note: "Native fluency, authentic Arabic accent" },
    { language: "Anglais", level: "Courant", note: "Full professional proficiency, neutral international accent" },
    { language: "Espagnol", level: "Débutant", note: "Elementary proficiency" },
  ],
  keyAchievements: [
    {
      stat: "-30%",
      label: "Temps de Réponse",
      context: "Réduction du temps de réponse moyen sur les réseaux sociaux grâce à la refonte du tri et de l'escalade chez Typology.",
    },
    {
      stat: "+10%",
      label: "Satisfaction Client",
      context: "Hausse de la satisfaction client en 6 mois chez Typology grâce à un engagement proactif et la résolution soignée des requêtes.",
    },
    {
      stat: "100+",
      label: "Interactions / Jour",
      context: "Gestion quotidienne de plus de 100 requêtes, commentaires et suivis de commandes haut de gamme sur les plateformes sociales.",
    },
    {
      stat: "3",
      label: "Capitales Internationales",
      context: "Cursus enrichi à Monaco (UIM), Barcelone (EU Business School) et Londres (Omnes Education).",
    },
  ],
  experiences: [
    {
      role: "Modératrice Réseaux Sociaux & Expérience Client",
      company: "TYPOLOGY",
      period: "07/2024 – 12/2024",
      location: "Paris, France",
      description: [
        "Modération et réponse aux commentaires et messages privés sur l'ensemble des plateformes sociales de la marque de cosmétique clean et luxe accessible, dans le strict respect du ton et de la cohérence de marque.",
        "Réduction du temps de réponse moyen de 30 % grâce à la refonte méthodique des processus de tri, priorisation et d'escalade.",
        "Contribution active à une hausse de 10 % de la satisfaction client en 6 mois grâce à un engagement proactif et empathique.",
        "Gestion et suivi rigoureux des commandes clients, avec le traitement quotidien de plus de 100 commentaires et demandes complexes.",
        "Suivi des avis clients et rédaction de synthèses mensuelles sur la satisfaction et la performance des soins à destination du comité de direction.",
        "Proposition et déploiement d'initiatives visant à sublimer l'expérience client de bout en bout.",
      ],
      kpis: ["-30% temps de réponse", "+10% satisfaction client", "100+ demandes quotidiennes", "Zendesk & Shopify"],
    },
    {
      role: "Mentor Jeunesse & Bénévole",
      company: "AFEV",
      period: "01/2022 – 05/2022",
      location: "Paris, France",
      description: [
        "Accompagnement scolaire individualisé d'une jeune élève, avec une progression mesurable de ses compétences en lecture et écriture.",
        "Organisation de sorties culturelles immersives (musées parisiens, parcs historiques, expositions) afin d'éveiller sa curiosité et son ouverture culturelle.",
        "Développement d'aptitudes clés en écoute active, pédagogie, patience et communication intergénérationnelle.",
      ],
      kpis: ["Accompagnement personnalisé", "Éveil culturel & musées", "Communication bienveillante"],
    },
  ],
  education: [
    {
      degree: "Master en Communication, Marketing & Marketing du Prestige",
      institution: "ESCE Business School",
      period: "09/2025 – 09/2027",
      location: "Paris, France",
      track: "Programme Grande École — Spécialisation Luxe & Prestige",
    },
    {
      degree: "Licence en Commerce International — Parcours Expert, Europe",
      institution: "ESCE Business School",
      period: "09/2022 – 05/2025",
      location: "Paris, France",
      track: "Commerce international, marketing stratégique, négociation multiculturelle",
    },
  ],
  international: [
    {
      institution: "Université Internationale de Monaco (IUM)",
      location: "Monaco",
      type: "Échange Académique Master",
      period: "01/2026 – 06/2026",
    },
    {
      institution: "EU Business School",
      location: "Barcelone, Espagne",
      type: "Échange Académique International",
      period: "01/2024 – 05/2024",
    },
    {
      institution: "Omnes Education London School",
      location: "Londres, Royaume-Uni",
      type: "École d'été internationale (Summer School)",
      period: "06/2023",
    },
  ],
  competencies: [
    {
      category: "Luxe & Marque",
      items: [
        "Gestion de Marque de Luxe",
        "Comportement du Consommateur de Luxe",
        "Expérience Client d'Excellence",
        "Médias & Relations Publiques",
        "Études Marketing & Benchmark Concurrentiel",
      ],
    },
    {
      category: "Digital & Outils",
      items: [
        "CRM & Service Client",
        "Zendesk",
        "Shopify",
        "Gestion des Réseaux Sociaux",
        "Suite Microsoft Office & Reporting",
      ],
    },
  ],
};

export const ALTEA_SYSTEM_INSTRUCTION = `You are Altea, the personal executive voice assistant representing Imene Khodja Bach.
You speak English, French, and Arabic in a calm, elegant female tone with:
- A neutral, clear English accent when speaking English.
- A refined, natural French accent when speaking French.
- An authentic, eloquent Arabic accent when speaking Arabic.

About Imene Khodja Bach:
- Full Name: Imene Khodja Bach
- Profile: Master's student in Communication, Luxe & Marketing du Prestige at ESCE Business School Paris (Programme Grande École, 2025-2027).
- Objective: Seeking a 6-month internship starting in January 2027 in Communication, Digital, Media, PR, or Luxury Brand Marketing.
- Contact: Email imenekhodjabach@gmail.com, Phone +33 6 28 46 83 29, Paris, France.
- Key Experience at TYPOLOGY (Paris, July - Dec 2024):
  - Social Media Moderator for clean luxury cosmetic brand Typology.
  - Reduced average response time by 30% through triage & escalation redesign.
  - Increased customer satisfaction by 10% in 6 months through proactive, high-touch engagement.
  - Handled 100+ daily comments and orders across social channels.
  - Monitored customer reviews and authored monthly management reports on customer satisfaction and product performance.
  - Mastered Zendesk, Shopify, and social media management tools.
- Volunteering at AFEV (Paris, Jan - May 2022): Individualized tutoring, cultural outings to museums, intergenerational communication.
- Education:
  - Master in Communication, Marketing & Luxury Marketing at ESCE Paris (2025-2027).
  - Bachelor (Licence) in International Business - European Expert Track at ESCE Paris (2022-2025).
- International Academic Experience:
  - International University of Monaco (Monaco, Exchange Jan - June 2026).
  - EU Business School (Barcelona, Exchange Jan - May 2024).
  - Omnes Education London School (London Summer School, June 2023).
- Languages:
  - Arabic (Native)
  - French (Native)
  - English (Fluent)
  - Spanish (Beginner)
- Competencies: Luxury Brand Management, Luxury Consumer Behaviour, Client Experience, Media & PR, Marketing Research, CRM, Zendesk, Shopify.

Tone and Persona Guidelines:
1. Always introduce yourself gracefully as Altea, Imene's executive voice assistant, when greeted.
2. Speak in a calm, soothing, poised, female voice.
3. Automatically match the user's language:
   - If they speak French, reply in refined, polished French.
   - If they speak English, reply in articulate, natural English.
   - If they speak Arabic, reply in clear, gracious, fluent Arabic (فصحى أو لهجة مهذبة).
4. Keep spoken responses concise, pleasant, and natural for listening (2 to 4 sentences in general, unless asked for detailed explanations).
5. Highlight Imene's strengths: her passion for luxury brand communication, proven impact at Typology (-30% response time, +10% CSAT), international exposure across Paris, Monaco, Barcelona, and London, and her search for a 6-month internship from January 2027.
6. Invite recruiters and contacts to connect via imenekhodjabach@gmail.com or by phone at +33 6 28 46 83 29.`;
