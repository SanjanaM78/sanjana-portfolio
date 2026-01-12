import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "SQL",
    description:
      "Design complex queries, joins, CTEs, and window functions to build analytics-ready datasets and business metrics.",
    rating: 5,
    icon: Icons.database,
  },
  {
    name: "Python",
    description:
      "Use Python for data analysis, automation, preprocessing, and analytics workflows using pandas, NumPy, and PySpark.",
    rating: 4,
    icon: Icons.python,
  },
  {
    name: "Data Modeling",
    description:
      "Build scalable, production-grade data models optimized for analytics, reporting, and downstream BI consumption.",
    rating: 4,
    icon: Icons.dataModeling,
  },
  {
    name: "BI & Data Visualization",
    description:
      "Create intuitive dashboards and reports that communicate insights clearly to technical and non-technical stakeholders",
    rating: 4,
    icon: Icons.analytics,
  },
  {
    name: "Databases (PostgreSQL / MySQL)",
    description:
      "Work with relational databases to store, query, and optimize structured data for analytics use cases.",
    rating: 4,
    icon: Icons.database,
  },
  {
    name: "GIT",
    description:
      "Use Git for version control, collaboration, and managing analytics codebases across data pipelines and projects.",
    rating: 3,
    icon: Icons.gitBranch,
  },
  {
    name: "Docker",
    description:
      "Use Docker to containerize analytics workflows and data applications for consistent, reproducible environments.",
    rating: 3,
    icon: Icons.docker,
  },
  {
    name: "Databricks",
    description:
      "Process and analyze large-scale datasets using Spark and PySpark to enable fast, distributed analytics workflows.",
    rating: 3,
    icon: Icons.cpu,
  },
  {
    name: "GOOGLE ANALYTICS",
    description:
      "Use Google Analytics to analyze user behavior, track events, and derive insights from web and product usage data.",
    rating: 3,
    icon: Icons.analytics,
  },
  {
    name: "HTML 5",
    description:
      "Structure web content beautifully with the latest version of HyperText Markup Language.",
    rating: 4,
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description:
      "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
    rating: 4,
    icon: Icons.css3,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
