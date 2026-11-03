import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHeader } from "@/components/site/Page";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projects, stages } from "@/content/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects & Products | Medical AI Lab, GUTECH" },
      {
        name: "description",
        content:
          "Tools the Medical AI Lab is building and testing with the clinicians who will use them.",
      },
    ],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Projects & Products"
        title="Each project starts with a question from practice"
      >
        For every project we explain who faces the problem, how they handle it today, what we are
        building, and how the people who will use it help test it.
      </PageHeader>

      <Container className="py-14">
        <p className="text-sm text-muted-foreground">Stages: {stages.join(" → ")}</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Container>
    </>
  );
}
