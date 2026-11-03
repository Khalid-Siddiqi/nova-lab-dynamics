import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHeader, SectionHeading } from "@/components/site/Page";
import { Citation } from "@/components/site/Citation";
import { labPublications, priorPublications } from "@/content/publications";

export const Route = createFileRoute("/publications/")({
  head: () => ({
    meta: [
      { title: "Publications | Medical AI Lab, GUTECH" },
      {
        name: "description",
        content:
          "Lab publications and selected prior work by Medical AI Lab members, with original author order, affiliations, and DOI links.",
      },
    ],
  }),
  component: PublicationsPage,
});

function PublicationsPage() {
  return (
    <>
      <PageHeader eyebrow="Publications" title="Papers and the work behind them">
        Papers are grouped by where the research was carried out, even if they were published later.
        Authors appear in their original order;{" "}
        <span className="font-semibold text-foreground underline decoration-link decoration-2 underline-offset-4">
          underlined names
        </span>{" "}
        are lab members.
      </PageHeader>

      <Container className="py-14">
        <nav aria-label="Sections" className="flex flex-wrap gap-3 text-sm font-semibold">
          <a
            href="#lab"
            className="rounded-full border border-border bg-card px-4 py-2 hover:bg-accent"
          >
            Lab Publications ({labPublications.length})
          </a>
          <a
            href="#prior"
            className="rounded-full border border-border bg-card px-4 py-2 hover:bg-accent"
          >
            Selected Prior Work by Our Members ({priorPublications.length})
          </a>
        </nav>

        <section className="mt-12 scroll-mt-28" id="lab">
          <SectionHeading>Lab Publications</SectionHeading>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Research carried out at the Medical AI Lab.
          </p>
          <div className="mt-2 divide-y divide-border">
            {labPublications.map((p) => (
              <Citation key={p.id} pub={p} />
            ))}
          </div>
        </section>

        <section className="mt-16 scroll-mt-28" id="prior">
          <SectionHeading>Selected Prior Work by Our Members</SectionHeading>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Research our members carried out before joining the lab, or elsewhere. It shows the
            experience they bring to the lab's projects.
          </p>
          <div className="mt-2 divide-y divide-border">
            {priorPublications.map((p) => (
              <Citation key={p.id} pub={p} />
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
