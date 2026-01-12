import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  companyLogoImg: string;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  /* =========================
     AI MEDICAL CHATBOT
  ========================== */
  {
    id: "ai-medical-chatbot",
    companyName: "AI-Based Medical Chatbot",
    type: "Personal",
    category: ["Backend", "Web Dev"],
    shortDescription:
      "AI-powered medical chatbot that predicts infectious diseases based on symptom inputs using NLP and machine learning.",
    techStack: ["Python", "SQL"],
    companyLogoImg: "/projects/medical-ai-chatbot/medical-ai-chatbot.png",

    pagesInfoArr: [
      {
        title: "Chatbot Interface & Prediction Flow",
        description:
          "Conversational interface that collects symptoms and predicts possible infectious diseases.",
        imgArr: [
          "/projects/medical-ai-chatbot/medical-ai-chatbot.png",
        ],
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "This project focuses on building an AI-driven medical chatbot that assists users by predicting infectious diseases based on reported symptoms.",
        "The system combines natural language processing and machine learning techniques to provide interpretable and responsible predictions.",
      ],
      bullets: [
        "Built an AI-based medical chatbot using Python.",
        "Applied NLP techniques to understand user symptoms.",
        "Performed data preprocessing and feature extraction on healthcare datasets.",
        "Focused on accuracy, interpretability, and responsible AI usage.",
      ],
    },
  },

  /* =========================
     TRAINERZ – DOCKER PLATFORM
  ========================== */
  {
    id: "trainerz-container-analytics",
    companyName: "Trainerz – Container Analytics Platform",
    type: "Professional",
    category: ["Backend", "Web Dev"],
    shortDescription:
      "Docker-based container management and analytics platform developed at Deepcept AI for monitoring containers and system metrics.",
    techStack: ["Python", "Docker", "SQL"],
    companyLogoImg: "/projects/docker/docker-login page.png",

    pagesInfoArr: [
      {
        title: "Container Monitoring Dashboard",
        description:
          "Dashboard displaying container status, logs, and backend-driven usage metrics.",
        imgArr: [
          "/projects/docker/docker project.png",
        ],
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "Trainerz is a Docker-based platform built at Deepcept AI to manage, monitor, and analyze containerized workloads.",
        "The project focuses on backend engineering, system observability, and analytics derived from container metrics and logs.",
      ],
      bullets: [
        "Developed backend services using Python.",
        "Used Docker for container lifecycle management.",
        "Implemented analytics based on container usage and logs.",
        "Worked in a real-world production engineering environment.",
      ],
    },
  },

  /* =========================
     FUNNEL & COHORT ANALYTICS
  ========================== */
  {
    id: "funnel-cohort-analysis",
    companyName: "Customer Funnel & Cohort Analysis Dashboard",
    type: "Personal",
    category: ["Backend", "Web Dev"],
    shortDescription:
      "Data analytics project focused on funnel and cohort analysis to identify user drop-offs and retention patterns.",
    techStack: ["SQL", "Python"],
    companyLogoImg:
      "/projects/customer-churn-dashboard/Customer Analysis Dashboard.png",

    pagesInfoArr: [
      {
        title: "Analytics Dashboard",
        description:
          "Interactive dashboard visualizing churn, funnels, and cohort behavior.",
        imgArr: [
          "/projects/customer-churn-dashboard/Customer Analysis Dashboard.png",
        ],
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "This project analyzes customer behavior using funnel and cohort analysis techniques.",
        "The goal was to identify conversion drop-offs, retention trends, and derive actionable insights from raw data.",
      ],
      bullets: [
        "Performed funnel analysis to identify conversion bottlenecks.",
        "Conducted cohort analysis to study user retention.",
        "Designed analytics dashboards for business insights.",
        "Translated raw data into actionable decisions.",
      ],
    },
  },
];

/* ⭐ Featured projects shown on homepage */
export const featuredProjects = Projects;
