import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import ExperienceCard from "@/components/experience/experience-card";
import ProjectCard from "@/components/projects/project-card";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { featuredProjects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { featuredSkills } from "@/config/skills";
import { cn } from "@/lib/utils";
import profileImg from "@/public/profile-img.jpeg";

export const metadata: Metadata = {
  title: `${pagesConfig.home.metadata.title}`,
  description:
    "Sanjana Mahadeva - Bridging the gap between raw data engineering and actionable insights through scalable, production-grade data models.",
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function IndexPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    
    jobTitle: "Analytics Engineer | Data & Product Analytics",
    sameAs: [siteConfig.links.github],
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Portfolio Website",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* HERO */}
      <section className="space-y-6 pb-8 pt-6 mb-0 md:pb-12 md:py-20 lg:py-32 h-screen flex items-center">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center -mt-20">
          <Image
            src={profileImg}
            height={100}
            width={100}
            sizes="100vw"
            className="bg-primary rounded-full mb-0 h-auto md:mb-2 w-[60%] max-w-[16rem] border-8 border-primary"
            alt="Sanjana Mahadeva Portfolio"
            priority
          />
          <AnimatedText
            as="h1"
            delay={0.2}
            className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Sanjana Mahadeva
          </AnimatedText>
          <AnimatedText
            as="h3"
            delay={0.4}
            className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl"
          >
            Analytics Engineer | Data & Product Analytics
          </AnimatedText>
          <div className="mt-4 max-w-[42rem] text-center">
            <p className="leading-normal text-muted-foreground text-sm sm:text-base">
              Bridging the gap between raw data engineering and actionable
              insights by building scalable, production-grade data models
            </p>
          </div>

          <div className="flex flex-col mt-10 items-center justify-center sm:flex-row sm:space-x-4 gap-3">
            <AnimatedText delay={0.6}>
              <Link
                href={"/resume"}
                target="_blank"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                <Icons.post className="w-4 h-4 mr-2" /> Resume
              </Link>
            </AnimatedText>
            <AnimatedText delay={0.8}>
              <Link
                href={"/contact"}
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  })
                )}
              >
                <Icons.contact className="w-4 h-4 mr-2" /> Contact
              </Link>
            </AnimatedText>
          </div>
          <AnimatedText delay={1.2}>
            <Icons.chevronDown className="h-6 w-6 mt-10" />
          </AnimatedText>
        </div>
      </section>

      {/* SKILLS */}
      <AnimatedSection className="container space-y-6 bg-muted py-10" id="skills">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText as="h2" className="font-heading text-3xl md:text-6xl">
            {pagesConfig.skills.title}
          </AnimatedText>
          <AnimatedText as="p" delay={0.2} className="text-muted-foreground">
            {pagesConfig.skills.description}
          </AnimatedText>
        </div>
        <SkillsCard skills={featuredSkills} />
      </AnimatedSection>

      {/* PROJECTS */}
      <AnimatedSection
        direction="right"
        className="container space-y-6 py-10 my-14"
        id="projects"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText as="h2" className="font-heading text-3xl md:text-6xl">
            {pagesConfig.projects.title}
          </AnimatedText>
          <AnimatedText as="p" delay={0.2} className="text-muted-foreground">
            {pagesConfig.projects.description}
          </AnimatedText>
        </div>

        <div className="mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={0.1 * (index + 1)}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      {/* EXPERIENCE */}
      <AnimatedSection
        direction="left"
        className="container space-y-6 py-10 my-14"
        id="experience"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText as="h2" className="font-heading text-3xl md:text-6xl">
            {pagesConfig.experience.title}
          </AnimatedText>
          <AnimatedText as="p" delay={0.2} className="text-muted-foreground">
            {pagesConfig.experience.description}
          </AnimatedText>
        </div>

        <div className="mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-3">
          {experiences.map((experience, index) => (
            <AnimatedSection key={experience.id} delay={0.1 * (index + 1)}>
              <ExperienceCard experience={experience} />
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
