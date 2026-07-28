export interface TranslationData {
  nav: {
    home: string;
    about: string;
    visionMission: string;
    howItWorks: string;
    domains: string;
    project: string;
    values: string;
    contact: string;
  };
  hero: {
    verse: string;
    tagline: string;
    cta: string;
  };
  about: {
    title: string;
    content: string;
  };
  vision: {
    title: string;
    content: string;
  };
  mission: {
    title: string;
    content: string;
  };
  howItWorks: {
    title: string;
    steps: {
      groups: { title: string; description: string };
      leadership: { title: string; description: string };
      tracking: { title: string; description: string };
      voting: { title: string; description: string };
    };
  };
  domains: {
    title: string;
    items: {
      quran: string;
      dailyHabits: string;
      islamicStudies: string;
      arabicLanguage: string;
      selfDevelopment: string;
      languages: string;
      programming: string;
      sports: string;
    };
  };
  project: {
    title: string;
    teaser: string;
    comingSoon: string;
    features: {
      taskTracking: string;
      groupCreation: string;
      motivationScore: string;
      progressStats: string;
      votingSystem: string;
      quranReader: string;
      progressDashboard: string;
    };
  };
  values: {
    title: string;
    items: {
      sincerity: string;
      commitment: string;
      honesty: string;
      discipline: string;
      cooperation: string;
      seekingKnowledge: string;
      perseverance: string;
      ambition: string;
    };
  };
  closing: {
    verse: string;
    statement: string;
  };
  footer: {
    copyright: string;
    email: string;
    socialPlaceholder: string;
  };
  meta: {
    title: string;
    description: string;
  };
}
