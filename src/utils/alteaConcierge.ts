import { IMENE_PROFILE } from '../data/imeneProfile.ts';

export type SupportedLanguage = 'fr' | 'en' | 'ar';

export function detectLanguage(text: string): SupportedLanguage {
  // Check Arabic characters range \u0600-\u06FF
  if (/[\u0600-\u06FF]/.test(text)) return 'ar';
  // Check common French words or accents
  if (/[éèêëàâôûçîï]|\b(je|vous|nous|pour|dans|avec|est|une|des|le|la|les|bonjour|merci|stage|paris|formation)\b/i.test(text)) {
    return 'fr';
  }
  return 'en';
}

/**
 * Text-to-speech utilizing the browser's native Web Speech Synthesis.
 * Automatically chooses the most natural voice for the target language.
 */
export function speakWithBrowserSpeech(
  text: string,
  lang: SupportedLanguage,
  onStart?: () => void,
  onEnd?: () => void
): boolean {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return false;
  }

  try {
    window.speechSynthesis.cancel(); // Stop any pending utterances

    // Clean text of markdown asterisks or special characters for pleasant speech
    const cleanText = text
      .replace(/[*_#`~]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1.0;
    utterance.pitch = 1.05;

    const voices = window.speechSynthesis.getVoices();

    if (lang === 'fr') {
      utterance.lang = 'fr-FR';
      const frVoice = voices.find(
        (v) => (v.lang.startsWith('fr') && /female|amelie|thomas|audrey|marie/i.test(v.name)) || v.lang.startsWith('fr')
      );
      if (frVoice) utterance.voice = frVoice;
    } else if (lang === 'ar') {
      utterance.lang = 'ar-SA';
      const arVoice = voices.find((v) => v.lang.startsWith('ar'));
      if (arVoice) utterance.voice = arVoice;
    } else {
      utterance.lang = 'en-US';
      const enVoice = voices.find(
        (v) => (v.lang.startsWith('en') && /female|samantha|victoria|karen|serena/i.test(v.name)) || v.lang.startsWith('en')
      );
      if (enVoice) utterance.voice = enVoice;
    }

    if (onStart) utterance.onstart = onStart;
    if (onEnd) utterance.onend = onEnd;
    utterance.onerror = () => {
      if (onEnd) onEnd();
    };

    window.speechSynthesis.speak(utterance);
    return true;
  } catch (err) {
    console.warn('Speech synthesis error:', err);
    if (onEnd) onEnd();
    return false;
  }
}

/**
 * Knowledge Engine for Altea representing Imene Khodja Bach.
 * Delivers articulate, graceful, and factual responses across French, English, and Arabic.
 */
export function generateAlteaResponse(
  prompt: string,
  _history?: { role: string; content: string }[]
): { text: string; language: SupportedLanguage } {
  const lang = detectLanguage(prompt);
  const q = prompt.toLowerCase();

  // 1. TYPOLOGY PARIS EXPERIENCE
  if (
    q.includes('typology') ||
    q.includes('satisfaction') ||
    q.includes('temps de réponse') ||
    q.includes('modération') ||
    q.includes('csat') ||
    q.includes('zendesk') ||
    q.includes('shopify') ||
    q.includes('response time') ||
    q.includes('moderation') ||
    q.includes('تtopology') ||
    q.includes('تيبولوجي')
  ) {
    if (lang === 'fr') {
      return {
        language: 'fr',
        text: "Chez TYPOLOGY, marque pionnière de cosmétique clean et luxe accessible à Paris, Imene Khodja Bach a exercé en tant que Modératrice Réseaux Sociaux et Expérience Client de juillet à décembre 2024. Elle a refondu le système de tri et d'escalade sur Zendesk et Shopify, ce qui a permis de réduire le délai moyen de réponse de 30 % et d'accroître la satisfaction client de 10 % en seulement six mois. Elle gérait plus de 100 requêtes et commentaires exigeants par jour tout en rédigeant les synthèses mensuelles de satisfaction pour la direction.",
      };
    }
    if (lang === 'ar') {
      return {
        language: 'ar',
        text: "في دار TYPOLOGY الرائدة في مستحضرات التجميل الفاخرة والنظيفة في باريس، عملت إيمان خوجة باخ كمشرفة على وسائل التواصل الاجتماعي وتجربة العملاء (يوليو - ديسمبر 2024). نجحت في تقليص وقت الاستجابة بنسبة 30% بفضل إعادة هيكلة نظام التصنيف والتصعيد عبر منصتي Zendesk وShopify، كما رفعت نسبة رضا العملاء بمقدار 10% خلال 6 أشهر مع إدارة أكثر من 100 تفاعل يومي وتقديم تقارير دورية للإدارة العليا.",
      };
    }
    return {
      language: 'en',
      text: "At TYPOLOGY Paris, a leader in clean luxury skincare, Imene Khodja Bach served as Social Media Moderator & Client Experience Specialist from July to December 2024. By redesigning triage and escalation workflows across Zendesk and Shopify, she reduced average response times by 30% and boosted client satisfaction by 10% in six months, while handling 100+ daily VIP interactions and authoring executive satisfaction reports.",
    };
  }

  // 2. INTERNSHIP & STAGE 2027
  if (
    q.includes('stage') ||
    q.includes('internship') ||
    q.includes('2027') ||
    q.includes('recherche') ||
    q.includes('disponibilité') ||
    q.includes('disponible') ||
    q.includes('objectif') ||
    q.includes('looking for') ||
    q.includes('تدريب') ||
    q.includes('وظيفة')
  ) {
    if (lang === 'fr') {
      return {
        language: 'fr',
        text: "Imene recherche activement un stage de fin d'études de 6 mois à partir de janvier 2027 dans les domaines de la Communication de Marque, du Marketing Digital, des Relations Presse (RP) ou de l'Événementiel de Prestige. Forte de son Master à l'ESCE Paris et de ses expériences chez TYPOLOGY et à Monaco, elle est prête à apporter une valeur stratégique et opérationnelle immédiate à une grande maison.",
      };
    }
    if (lang === 'ar') {
      return {
        language: 'ar',
        text: "تبحث إيمان خوجة باخ عن تدريب تخرج لمدة 6 أشهر يبدأ في يناير 2027 في مجالات الاتصال المؤسسي، التسويق الرقمي الفاخر، أو العلاقات العامة والإعلام. تسعى للانضمام إلى علامة مرموقة أو دار فاخرة حيث يمكنها توظيف مهاراتها الاستراتيجية المكتسبة من ESCE باريس وموناكو وتجربتها في TYPOLOGY.",
      };
    }
    return {
      language: 'en',
      text: "Imene is seeking a 6-month capstone internship starting in January 2027, focusing on Luxury Brand Communication, Digital Marketing, Public Relations, or High-End Event Coordination. With her Master's from ESCE Paris and international training in Monaco, London, and Barcelona, she is primed to deliver immediate elegance and operational excellence to a prestige house.",
    };
  }

  // 3. INTERNATIONAL JOURNEY (MONACO, BARCELONA, LONDON)
  if (
    q.includes('monaco') ||
    q.includes('ium') ||
    q.includes('barcelon') ||
    q.includes('espagne') ||
    q.includes('london') ||
    q.includes('londres') ||
    q.includes('international') ||
    q.includes('omnes') ||
    q.includes('موناكو') ||
    q.includes('برشلونة') ||
    q.includes('لندن')
  ) {
    if (lang === 'fr') {
      return {
        language: 'fr',
        text: "Le parcours international d'Imene est exceptionnel : elle effectue un échange Master à l'Université Internationale de Monaco (IUM) de janvier à juin 2026, au cœur de l'écosystème du grand luxe de la Riviera. Elle a également étudié à l'EU Business School de Barcelone en 2024 et suivi l'école d'été d'Omnes Education à Londres en 2023. Cette triple immersion européenne nourrit sa compréhension fine des marchés multiculturels.",
      };
    }
    if (lang === 'ar') {
      return {
        language: 'ar',
        text: "يتميز مسار إيمان الدولي بثراء فريد: تشارك في برنامج تبادل أكاديمي لمرحلة الماجستير في جامعة موناكو الدولية (IUM) من يناير إلى يونيو 2026 في قلب عاصمة الرفاهية الأوروبية. كما درست في كلية إدارة الأعمال الأوروبية (EU Business School) ببرشلونة عام 2024، وأكملت برنامجاً صيفياً في Omnes Education بلندن عام 2023.",
      };
    }
    return {
      language: 'en',
      text: "Imene's academic journey spans premier European luxury capitals: an exchange at the International University of Monaco (IUM) from January to June 2026 in the heart of the Riviera's luxury ecosystem, an international semester at EU Business School Barcelona in 2024, and Omnes Education London School in 2023. This multicultural background enriches her global marketing perspective.",
    };
  }

  // 4. EDUCATION & ESCE
  if (
    q.includes('esce') ||
    q.includes('master') ||
    q.includes('licence') ||
    q.includes('formation') ||
    q.includes('education') ||
    q.includes('études') ||
    q.includes('diplôme') ||
    q.includes('degree') ||
    q.includes('university') ||
    q.includes('جامعة') ||
    q.includes('دراسة')
  ) {
    if (lang === 'fr') {
      return {
        language: 'fr',
        text: "Imene est étudiante au sein du Programme Grande École de l'ESCE Business School Paris. Elle prépare un Master en Communication, Luxe et Marketing du Prestige (2025-2027), après avoir brillamment obtenu sa Licence en Commerce International — Parcours Expert Europe (2022-2025), alliant rigueur managériale et sensibilité esthétique.",
      };
    }
    if (lang === 'ar') {
      return {
        language: 'ar',
        text: "تدرس إيمان في برنامج Grande École المرموق في كلية ESCE لإدارة الأعمال بباريس. تُحضر حالياً درجة الماجستير في الاتصال، الرفاهية والتسويق الفاخر (2025-2027)، بعد نيلها درجة البكالوريوس في التجارة الدولية - مسار الخبراء الأوروبيين (2022-2025).",
      };
    }
    return {
      language: 'en',
      text: "Imene is pursuing the prestigious Grande École Program at ESCE Business School Paris, completing her Master's in Communication, Luxury & Prestige Marketing (2025–2027). She previously earned her Bachelor's in International Business (European Expert Track, 2022–2025), combining strategic business rigor with luxury brand acumen.",
    };
  }

  // 5. PHILOSOPHY OF LUXURY & PRESTIGE
  if (
    q.includes('philosophie') ||
    q.includes('philosophy') ||
    q.includes('luxe') ||
    q.includes('luxury') ||
    q.includes('prestige') ||
    q.includes('vision') ||
    q.includes('falsafa') ||
    q.includes('فلسفة')
  ) {
    if (lang === 'fr') {
      return {
        language: 'fr',
        text: "Pour Imene, le luxe moderne repose sur l'harmonie entre authenticité, discrétion et excellence relationnelle. Forte de son expérience chez TYPOLOGY, elle conçoit chaque interaction client comme une signature de marque qui prolonge l'univers du produit et cultive un attachement durable et raffiné.",
      };
    }
    if (lang === 'ar') {
      return {
        language: 'ar',
        text: "ترتكز فلسفة إيمان في التسويق الفاخر على الموازنة الدقيقة بين الأصالة، الأناقة الهادئة والتميز في خدمة العملاء. وتؤمن بأن كل محادثة مع العميل هي تجربة تمنح العلامة تميزاً وتزيد من ولائه للدار.",
      };
    }
    return {
      language: 'en',
      text: "Imene's luxury marketing philosophy centers on the synergy between brand authenticity, understated elegance, and proactive empathy. Her work at TYPOLOGY proved that high-touch digital moderation and impeccable tone of voice elevate the entire client relationship into a true prestige experience.",
    };
  }

  // 6. LANGUAGES & FLUENCY
  if (
    q.includes('langue') ||
    q.includes('language') ||
    q.includes('anglais') ||
    q.includes('arabe') ||
    q.includes('english') ||
    q.includes('arabic') ||
    q.includes('french') ||
    q.includes('espagnol') ||
    q.includes('لغات')
  ) {
    if (lang === 'fr') {
      return {
        language: 'fr',
        text: "Imene est trilingue : le Français et l'Arabe sont ses langues maternelles, parlées et écrites avec une parfaite maîtrise. Elle maîtrise également l'Anglais avec une fluidité professionnelle complète, et possède des notions d'Espagnol développées lors de son séjour académique à Barcelone.",
      };
    }
    if (lang === 'ar') {
      return {
        language: 'ar',
        text: "إيمان تتقن ثلاث لغات بطلاقة تامة: العربية والفرنسية كلغات أم، والإنجليزية بطلاقة مهنية كاملة، بالإضافة إلى أساسيات اللغة الإسبانية المكتسبة خلال دراستها في برشلونة.",
      };
    }
    return {
      language: 'en',
      text: "Imene is trilingual: French and Arabic are her native languages, spoken and written with native distinction. She also possesses full professional fluency in English, alongside foundational Spanish acquired during her academic term in Barcelona.",
    };
  }

  // 7. VOLUNTEERING & AFEV
  if (
    q.includes('afev') ||
    q.includes('bénévolat') ||
    q.includes('volunteering') ||
    q.includes('mentor') ||
    q.includes('association') ||
    q.includes('تطوع')
  ) {
    if (lang === 'fr') {
      return {
        language: 'fr',
        text: "De janvier à mai 2022, Imene s'est engagée auprès de l'association AFEV à Paris comme mentore jeunesse. Elle y a assuré un accompagnement scolaire personnalisé pour une jeune élève et a organisé des sorties culturelles dans des musées parisiens, développant de précieuses qualités d'écoute active, de pédagogie et de bienveillance.",
      };
    }
    if (lang === 'ar') {
      return {
        language: 'ar',
        text: "تطوعت إيمان مع جمعية AFEV في باريس (يناير - مايو 2022) لتقديم الدعم التعليمي الفردي والتوجيه الثقافي لطلاب المدارس، ونظمت جولات في المتاحف والمعارض الباريسية، مما عزز لديها مهارات التواصل الإنساني والاستماع الفعال.",
      };
    }
    return {
      language: 'en',
      text: "From January to May 2022, Imene volunteered as a Youth Mentor with AFEV Paris. She provided individualized academic tutoring and organized cultural museum outings for an elementary school student, honing her active listening, pedagogy, and human-centric communication.",
    };
  }

  // 8. CONTACT & RECRUITMENT
  if (
    q.includes('contact') ||
    q.includes('email') ||
    q.includes('mail') ||
    q.includes('téléphone') ||
    q.includes('phone') ||
    q.includes('joindre') ||
    q.includes('cv') ||
    q.includes('recruter') ||
    q.includes('hire') ||
    q.includes('تواصل')
  ) {
    if (lang === 'fr') {
      return {
        language: 'fr',
        text: "Vous pouvez contacter Imene Khodja Bach directement par e-mail à imenekhodjabach@gmail.com ou par téléphone au +33 6 28 46 83 29. Elle est basée à Paris et sera ravie d'échanger avec vous au sujet de projets de stage pour janvier 2027.",
      };
    }
    if (lang === 'ar') {
      return {
        language: 'ar',
        text: "يمكنكم التواصل مع إيمان خوجة باخ مباشرة عبر البريد الإلكتروني: imenekhodjabach@gmail.com أو عبر الهاتف: 29 83 46 28 6 33+. وهي مقيمة في باريس ومستعدة لمناقشة فرص التدريب لعام 2027.",
      };
    }
    return {
      language: 'en',
      text: "You can reach Imene Khodja Bach directly via email at imenekhodjabach@gmail.com or by phone at +33 6 28 46 83 29. She is based in Paris and welcomes conversations regarding 2027 internship opportunities.",
    };
  }

  // 9. DEFAULT / GENERAL PRESENTATION
  if (lang === 'fr') {
    return {
      language: 'fr',
      text: "Bonjour ! Je suis Altea, l'assistante exécutive d'Imene Khodja Bach. Actuellement en Master Communication & Marketing du Luxe à l'ESCE Paris avec un échange à Monaco, Imene a prouvé son excellence chez TYPOLOGY (-30% temps de réponse, +10% satisfaction). Elle recherche un stage de 6 mois à partir de janvier 2027. Que souhaitez-vous découvrir de son parcours ?",
    };
  }
  if (lang === 'ar') {
    return {
      language: 'ar',
      text: "مرحباً بكم! أنا ألتيا، المساعدة التنفيذية لإيمان خوجة باخ. تدرس إيمان الماجستير في الاتصال والتسويق الفاخر بـ ESCE باريس وموناكو، وأثبتت تميزها في TYPOLOGY. تبحث حالياً عن تدريب لمدة 6 أشهر يبدأ في يناير 2027. كيف يمكنني إفادتكم حول خبراتها ومسيرتها؟",
    };
  }
  return {
    language: 'en',
    text: "Hello! I am Altea, executive assistant to Imene Khodja Bach. A Master's candidate in Luxury Brand Communication at ESCE Paris with an upcoming term in Monaco, Imene demonstrated high-impact results at TYPOLOGY (-30% response time, +10% CSAT). She is seeking a 6-month internship starting in January 2027. How may I assist you today?",
  };
}
