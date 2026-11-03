import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, PageHeader } from "@/components/site/Page";
import { Placeholder, Unconfirmed } from "@/components/site/Placeholder";
import { collaborations } from "@/content/collaborations";
import { getProject } from "@/content/projects";

export const Route = createFileRoute("/collaborations")({
  head: () => ({
    meta: [
      { title: "Collaborations | Medical AI Lab, GUTECH" },
      {
        name: "description",
        content:
          "How the Medical AI Lab works with hospitals: the problem each partner brought, what each side contributed, and what we have built together.",
      },
    ],
  }),
  component: CollaborationsPage,
});

function StoryList({ items, missing }: { items: string[] | null; missing: string }) {
  if (!items) return <Placeholder className="mt-3">{missing}</Placeholder>;
  return (
    <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-foreground/85">
      {items.map((i) => (
        <li key={i} className="flex gap-2">
          <span aria-hidden className="text-muted-foreground">
            –
          </span>
          {i}
        </li>
      ))}
    </ul>
  );
}

function CollaborationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Collaborations"
        title="Clinical and university teams, working on the same problem"
      >
        Each partnership starts with a problem a partner brought to us. Here is what they
        contributed, what we contributed, and what we have built or learned together.
      </PageHeader>

      <Container className="space-y-16 py-14">
        {collaborations.map((c) => (
          <article key={c.slug} id={c.slug} className="scroll-mt-28">
            <div className="flex flex-wrap items-center gap-5">
              <img
                src={c.logo}
                alt=""
                className="h-20 w-20 rounded-md border border-border bg-white object-contain p-2"
              />
              <div>
                <h2 className="font-display text-3xl font-semibold text-foreground">{c.partner}</h2>
                <p className="mt-1 text-muted-foreground">
                  {c.unit}
                  {c.since ? (
                    ` · since ${c.since}`
                  ) : (
                    <Unconfirmed>start date to be added</Unconfirmed>
                  )}
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_380px]">
              <div>
                <section>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    The problem they brought
                  </h3>
                  {c.problem ? (
                    <p className="mt-3 text-lg leading-relaxed text-foreground/85">{c.problem}</p>
                  ) : (
                    <Placeholder className="mt-3">
                      Describe the problem the partner brought, in their words.
                    </Placeholder>
                  )}
                </section>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <section className="rounded-lg border border-border bg-card p-5">
                    <h3 className="font-semibold text-foreground">
                      What their experts contributed
                    </h3>
                    <StoryList
                      items={c.partnerContributed}
                      missing="List what the partner's clinicians and staff contributed."
                    />
                  </section>
                  <section className="rounded-lg border border-border bg-card p-5">
                    <h3 className="font-semibold text-foreground">What the lab contributed</h3>
                    <StoryList items={c.labContributed} missing="List what the lab contributed." />
                  </section>
                </div>

                <section className="mt-6 rounded-lg border border-border bg-sand p-5">
                  <h3 className="font-semibold text-foreground">
                    What we have built or learned together
                  </h3>
                  <StoryList
                    items={c.builtOrLearned}
                    missing="Describe what the partnership has produced or taught both sides so far."
                  />
                </section>

                {c.projects.length > 0 && (
                  <p className="mt-6 text-sm">
                    <span className="text-muted-foreground">Projects: </span>
                    {c.projects.map((slug, i) => {
                      const p = getProject(slug);
                      return p ? (
                        <span key={slug}>
                          {i > 0 && ", "}
                          <Link
                            to="/projects/$slug"
                            params={{ slug }}
                            className="font-semibold text-link"
                          >
                            {p.name}
                          </Link>
                        </span>
                      ) : null;
                    })}
                  </p>
                )}
              </div>

              <div>
                {c.photo ? (
                  <figure>
                    <img
                      src={c.photo.src}
                      alt={c.photo.alt}
                      className="w-full rounded-md border border-border object-cover"
                    />
                    <figcaption className="mt-2 text-sm text-muted-foreground">
                      {c.photo.caption}
                    </figcaption>
                  </figure>
                ) : (
                  <Placeholder>
                    Add an approved photo of the two teams working together.
                  </Placeholder>
                )}
              </div>
            </div>
          </article>
        ))}
      </Container>
    </>
  );
}
