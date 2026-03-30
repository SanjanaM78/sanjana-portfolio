import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { ProjectInterface } from "@/config/projects";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative p-6 max-w-sm bg-background border border-border rounded-lg hover:shadow-lg transition">

      {/* Project Image */}
      <div className="relative w-full h-[200px]">
        <Image
          className="rounded-lg border border-border object-cover"
          src={project.companyLogoImg}
          alt={project.companyName}
          fill
        />
      </div>

      {/* Content */}
      <div className="pt-5 space-y-3">
        <h5 className="text-2xl font-bold tracking-tight text-foreground">
          {project.companyName}
        </h5>

        <p className="line-clamp-3 font-normal text-muted-foreground">
          {project.shortDescription}
        </p>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          <ChipContainer textArr={project.category} />
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-3 flex-wrap">

          {/* Read More */}
          <Link href={`/projects/${project.id}`}>
            <Button variant="default">
              Read more
              <Icons.chevronRight className="w-4 ml-1" />
            </Button>
          </Link>

          {/* GitHub Button */}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">
                View Code ↗
                <Icons.gitHub className="w-4 ml-1" />
              </Button>
            </a>
          )}
        </div>
      </div>

      {/* Project Type Icon */}
      <div className="absolute bottom-4 right-4 p-3 rounded-full bg-background border border-border">
        {project.type === "Personal" ? (
          <Icons.userFill className="h-4 w-4" />
        ) : (
          <Icons.work className="h-4 w-4" />
        )}
      </div>
    </div>
  );
}
