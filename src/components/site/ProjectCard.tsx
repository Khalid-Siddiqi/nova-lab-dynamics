import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { getCollaboration } from "@/content/collaborations";
import { StageBadge } from "./StageIndicator";

export function ProjectCard({ project }: { project: Project }) {
  const partner = project.collaboration ? getCollaboration(project.collaboration) : undefined;
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md"
    >
      <StageBadge stage={project.stage} confirmed={project.stageConfirmed} />
      <h3 className="mt-4 font-display text-xl font-semibold text-foreground">{project.name}</h3>
      {partner && <p className="mt-1 text-sm text-muted-foreground">With {partner.partner}</p>}
      <p className="mt-4 flex-1 font-display text-lg italic leading-snug text-foreground/85">
        “{project.question}”
      </p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-link group-hover:gap-2.5 transition-all">
        Read about the project <ArrowRight size={16} />
      </span>
    </Link>
  );
}
