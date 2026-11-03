import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Container, SectionHeading } from "@/components/site/Page";
import { Placeholder } from "@/components/site/Placeholder";
import { Citation } from "@/components/site/Citation";
import { getPerson } from "@/content/people";
import { projects } from "@/content/projects";
import { publications } from "@/content/publications";

export const Route = createFileRoute("/team/$slug")({
  loader: ({ params }) => {
    const person = getPerson(params.slug);
    if (!person) throw notFound();
    return person;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} | Medical AI Lab, GUTECH` },
          {
            name: "description",
            content: `${loaderData.role}. ${loaderData.contribution ?? ""}`.trim(),
          },
        ]
      : [],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  const person = Route.useLoaderData();
  const personProjects = projects.filter((p) => p.team.includes(person.slug));
  const pubs = publications
    .filter((p) => p.authors.some((a) => a.member === person.slug))
    .sort((a, b) => b.year - a.year);

  return (
    <>
      <div className="border-b border-border bg-sand">
        <Container className="py-12 md:py-16">
          <Link
            to="/team"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft size={16} /> Team
          </Link>
          <div className="mt-6 flex flex-col gap-8 sm:flex-row sm:items-center">
            {person.photo && (
              <img
                src={person.photo}
                alt={person.name}
                className="h-40 w-40 shrink-0 rounded-lg object-cover"
              />
            )}
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {person.group}
              </div>
              <h1 className="mt-1 font-display text-4xl font-semibold text-foreground md:text-5xl">
                {person.name}
              </h1>
              <p className="mt-2 text-lg text-foreground/85">{person.role}</p>
              <p className="text-muted-foreground">{person.affiliation}</p>
              {person.links.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                  {person.links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        target={l.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="text-link"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </Container>
      </div>

      <Container className="grid gap-12 py-12 lg:grid-cols-[1fr_320px]">
        <div className="space-y-12">
          <section>
            <SectionHeading>Contribution to the lab</SectionHeading>
            {person.contribution ? (
              <p className="mt-3 text-lg leading-relaxed text-foreground/85">
                {person.contribution}
              </p>
            ) : (
              <Placeholder className="mt-3">
                One sentence on this person's contribution.
              </Placeholder>
            )}
          </section>

          {person.bio && (
            <section>
              <SectionHeading>About</SectionHeading>
              <div className="mt-3 space-y-4 text-base leading-relaxed text-foreground/85">
                {person.bio.map((para) => (
                  <p key={para.slice(0, 32)}>{para}</p>
                ))}
              </div>
            </section>
          )}

          <section>
            <SectionHeading>Publications</SectionHeading>
            {pubs.length > 0 ? (
              <div className="divide-y divide-border">
                {pubs.map((p) => (
                  <Citation key={p.id} pub={p} />
                ))}
              </div>
            ) : (
              <p className="mt-3 text-muted-foreground">No publications listed yet.</p>
            )}
          </section>
        </div>

        <aside className="space-y-5">
          <div className="rounded-lg border border-border bg-card p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Projects
            </h2>
            {personProjects.length > 0 ? (
              <ul className="mt-3 space-y-2">
                {personProjects.map((p) => (
                  <li key={p.slug}>
                    <Link
                      to="/projects/$slug"
                      params={{ slug: p.slug }}
                      className="font-semibold text-link"
                    >
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm text-muted-foreground">None listed yet.</p>
            )}
          </div>

          {person.interests && (
            <div className="rounded-lg border border-border bg-card p-5">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Research interests
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {person.interests.map((i) => (
                  <li key={i} className="rounded-full bg-muted px-3 py-1 text-sm text-foreground">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {person.background && (
            <div className="rounded-lg border border-border bg-card p-5">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Background
              </h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/85">
                {person.background.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </Container>
    </>
  );
}
