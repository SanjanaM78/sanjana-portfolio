import type { ValidPages } from "./constants";

type PageConfig = {
  title: string;
  description: string;
  metadata: {
    title: string;
    description: string;
  };
};

export const pagesConfig: Record<ValidPages, PageConfig> = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Sanjana Mahadeva's portfolio website.",
    },
  },

  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Sanjana Mahadeva's key skills that define her professional identity.",
    },
  },

  projects: {
    title: "Projects",
    description: "Showcasing impactful projects and technical achievements.",
    metadata: {
      title: "Projects",
      description:
        "Projects by Sanjana Mahadeva showcasing analytics and engineering work.",
    },
  },

  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Sanjana Mahadeva's professional journey and experience timeline.",
    },
  },

  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Sanjana Mahadeva.",
    },
  },

  resume: {
    title: "Resume",
    description: "Download my resume.",
    metadata: {
      title: "Resume",
      description: "Resume of Sanjana Mahadeva.",
    },
  },

  contributions: {
    title: "Contributions",
    description: "Open-source and community contributions.",
    metadata: {
      title: "Contributions",
      description:
        "Open-source and community contributions by Sanjana Mahadeva.",
    },
  },
};