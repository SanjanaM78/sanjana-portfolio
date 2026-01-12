import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "deepcept-ai",
    position: "AI & Software Engineering Intern",
    company: "Deepcept AI",
    location: "Bangalore, India (Remote / On-site)",

    description: [
      "Worked on building full-stack analytical applications supporting data automation, backend processing, and performance optimization.",
      "Contributed to AI-driven and data-focused systems spanning analytics, backend services, and containerized environments.",
    ],

    achievements: [
      "Built and enhanced Tainerz, a Docker-based container management platform using Python and Flask.",
      "Implemented log-based analytics to monitor container usage, performance, and system efficiency.",
      "Worked on backend data processing pipelines to support analytics and automation workflows.",
      "Collaborated with engineering teams to translate system metrics into actionable insights.",
    ],

    skills: [
      "Python",
      "SQL",
      "Docker",
      "Flask",
      "Databricks",
      "Git",
      "CI/CD",
    ],

    
    logo: "/experience/deepcept ai logo.png",
  },
];

