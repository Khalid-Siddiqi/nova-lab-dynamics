import type { ReactNode } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Container, SectionHeading } from "@/components/site/Page";
import { ImagePlaceholder, Placeholder } from "@/components/site/Placeholder";
import { StageBadge, StageTrack } from "@/components/site/StageIndicator";
import { Outcomes } from "@/components/site/Outcomes";
import { Citation } from "@/components/site/Citation";
import { getProject } from "@/content/projects";
import { getCollaboration } from "@/content/collaborations";
import { getPerson } from "@/content/people";
import { getPublication } from "@/content/publications";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} | Medical AI Lab, GUTECH` },
          { name: "description", content: loaderData.summary },
        ]
      : [],
  }),
  component: ProjectPage,
});

function Block({
  title,
  value,
  missing,
}: {
  title: string;
  value: string | null;
  missing: string;
}) {
  return (
    <section className="border-t border-border py-6">
      <h3 className="font-display text-xl font-semibold text-foreground">{title}</h3>
      {value ? (
        <p className="mt-2 text-base leading-relaxed text-foreground/85">{value}</p>
      ) : (
        <Placeholder className="mt-3">{missing}</Placeholder>
      )}
    </section>
  );
}

function SideBox({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function ProjectPage() {
  const project = Route.useLoaderData();
  const partner = project.collaboration ? getCollaboration(project.collaboration) : undefined;
  const team = project.team.map(getPerson).filter((p) => p !== undefined);
  const pubs = project.publications.map(getPublication).filter((p) => p !== undefined);

  return (
    <>
      <div className="border-b border-border bg-sand">
        <Container className="py-12 md:py-16">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft size={16} /> All projects
          </Link>
          <div className="mt-6">
            <StageBadge stage={project.stage} confirmed={project.stageConfirmed} />
          </div>
          <h1 className="mt-4 font-display text-4xl font-semibold text-foreground md:text-5xl">
            {project.name}
          </h1>
          {partner && (
            <p className="mt-2 text-muted-foreground">
              With{" "}
              <Link to="/collaborations" hash={partner.slug} className="text-link">
                {partner.partner}
              </Link>
            </p>
          )}
          <p className="mt-6 max-w-3xl font-display text-2xl italic leading-snug text-foreground">
            “{project.question}”
          </p>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-foreground/80">
            {project.summary}
          </p>
        </Container>
      </div>

      <Container className="grid gap-12 py-12 lg:grid-cols-[1fr_320px]">
        <div>
          <div className="max-w-md">
            <StageTrack stage={project.stage} confirmed={project.stageConfirmed} />
          </div>

          <div className="mt-8">
            <Block
              title="Who faces the problem"
              value={project.whoFacesIt}
              missing="Describe the people who encounter this problem in their work."
            />
            <Block
              title="How they handle it today"
              value={project.howHandledToday}
              missing="Describe, with the clinical team, how this is handled today and where it falls short."
            />
            <Block
              title="What we are building"
              value={project.whatWeAreBuilding}
              missing="Describe the tool in plain language."
            />
            <Block
              title="How intended users help test it"
              value={project.howUsersTest}
              missing="Describe how the people who will use the tool are involved in testing it: sessions, feedback rounds, pilot plans."
            />
          </div>

          <section className="mt-6 border-t border-border pt-6">
            <SectionHeading>Aims and results</SectionHeading>
            <div className="mt-5">
              <Outcomes designedTo={project.designedTo} measured={project.measured} />
            </div>
          </section>

          <section className="mt-12">
            <SectionHeading>Screenshots and figures</SectionHeading>
            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              {project.screenshot ? (
                <figure>
                  <img
                    src={project.screenshot.src}
                    alt={project.screenshot.alt}
                    className="w-full rounded-md border border-border"
                  />
                  <figcaption className="mt-2 text-sm text-muted-foreground">
                    {project.screenshot.caption}
                  </figcaption>
                </figure>
              ) : (
                <ImagePlaceholder label={`Approved screenshot of ${project.name}`} />
              )}
              {project.figures.map((f) => (
                <figure key={f.src}>
                  <img
                    src={f.src}
                    alt={f.alt}
                    className="aspect-[16/10] w-full rounded-md border border-border bg-white object-contain"
                  />
                  <figcaption className="mt-2 text-sm text-muted-foreground">
                    {f.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          {pubs.length > 0 && (
            <section className="mt-12">
              <SectionHeading>Publications</SectionHeading>
              <div className="divide-y divide-border">
                {pubs.map((p) => (
                  <Citation key={p.id} pub={p} showProject={false} />
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="space-y-5">
          <SideBox title="People">
            <ul className="space-y-4">
              {team.map((person) => (
                <li key={person.slug} className="flex gap-3">
                  {person.photo && (
                    <img
                      src={person.photo}
                      alt=""
                      className="h-12 w-12 shrink-0 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <Link
                      to="/team/$slug"
                      params={{ slug: person.slug }}
                      className="font-semibold text-link"
                    >
                      {person.name}
                    </Link>
                    <div className="text-sm text-muted-foreground">{person.role}</div>
                  </div>
                </li>
              ))}
            </ul>
            <Placeholder className="mt-4">
              Add other contributors, including clinical collaborators.
            </Placeholder>
          </SideBox>

          <SideBox title="Demo">
            {project.demo ? (
              <a href={project.demo.href} target="_blank" rel="noreferrer" className="text-link">
                {project.demo.label}
              </a>
            ) : (
              <p className="text-sm text-muted-foreground">No public demo yet.</p>
            )}
          </SideBox>

          <SideBox title="Have a similar problem?">
            <p className="text-sm text-foreground/80">
              If your team faces something like this, we would like to hear about it.
            </p>
            <Link to="/collaborate" className="mt-3 inline-block font-semibold text-link">
              Bring us a problem
            </Link>
          </SideBox>
        </aside>
      </Container>
    </>
  );
}
