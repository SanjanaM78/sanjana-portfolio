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
    githubLink: "https://github.com/SanjanaM78/medical-chatbot",
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
    githubLink: "https://github.com/SanjanaM78/tainerz",

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

    githubLink: "https://github.com/SanjanaM78/customer-churn-analysis",
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
 /* =========================
     ab-testing-analysis
  ========================== */
  {
  id: "ab-testing-analysis",
  companyName: "A/B Testing Analysis",
  type: "Personal",
  category: ["Backend"],
  shortDescription:
    "Conducted A/B testing to analyze user behavior and optimize conversion rates using statistical hypothesis testing.",
  techStack: ["Python", "SQL"],
  githubLink: "https://github.com/SanjanaM78/ab-testing-website-conversion",

  companyLogoImg: "/projects/ab-testing/ab-testing.png",

  pagesInfoArr: [
    {
      title: "A/B Testing Dashboard",
      description:
        "Visual comparison of control vs variant performance and statistical results.",
      imgArr: ["/projects/ab-testing/ab-testing.png"],
    },
  ],

  descriptionDetails: {
    paragraphs: [
      "This project focuses on evaluating product performance using A/B testing methodologies.",
      "It involves hypothesis testing, statistical analysis, and interpreting results for decision making.",
    ],
    bullets: [
      "Performed hypothesis testing on user data.",
      "Analyzed conversion rates between variants.",
      "Derived data-driven product improvements.",
    ],
  },
},
 /* =========================
     Ai-image-caption-generator
  ========================== */
  {
  id: "ai-image-caption-generator",
  companyName: "AI Image Caption Generator",
  type: "Personal",
  category: ["Backend", "Web Dev"],

  shortDescription:
    "End-to-end deep learning web app that generates captions for images using CNN (VGG16) and LSTM with real-time prediction via Flask.",

  techStack: ["Python"],

  githubLink:
    "https://github.com/SanjanaM78/Ai-image-caption-generator",

  companyLogoImg: "/projects/ai-caption/ai-caption.png",

  pagesInfoArr: [
    {
      title: "Image Upload & Caption Output",
      description:
        "Users can upload any image and the model generates meaningful captions instantly with tone selection.",
      imgArr: [
        "/projects/ai-caption/ai-caption.png",
      ],
    },
  ],

  descriptionDetails: {
    paragraphs: [
      "Built an end-to-end AI image captioning system integrating computer vision and natural language processing.",
      "Used CNN (VGG16) for feature extraction and LSTM for sequence generation, deployed via a Flask web application.",
    ],
    bullets: [
      "Implemented CNN (VGG16) for image feature extraction.",
      "Used LSTM network for caption generation.",
      "Integrated model with Flask for real-time predictions.",
      "Used Flickr8k dataset for training and evaluation.",
      "Designed dark-themed UI with HTML, CSS, and JavaScript.",
    ],
  },
},



];

/* ⭐ Featured projects shown on homepage */
export const featuredProjects = Projects;
