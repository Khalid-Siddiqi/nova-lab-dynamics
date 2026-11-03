import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/site/Page";
import { ImagePlaceholder } from "@/components/site/Placeholder";
import { ProjectCard } from "@/components/site/ProjectCard";
import { StageTrack } from "@/components/site/StageIndicator";
import { Citation } from "@/components/site/Citation";
import { getProject, projects } from "@/content/projects";
import { collaborations } from "@/content/collaborations";
import { labPublications } from "@/content/publications";
import { NewsCarousel } from "@/components/site/NewsCarousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ title: "Medical AI Lab (MAL) | GUTECH, Al-Ghazali University, Karachi" }],
  }),
  component: Home,
});

const steps = [
  {
    title: "A problem from practice",
    text: "Our work starts with something a clinician or care team runs into in their daily work.",
  },
  {
    title: "Study it together",
    text: "We sit with the people who face it, learn how they handle it today, and agree on what would help.",
  },
  {
    title: "Build a tool",
    text: "Researchers, engineers, and students build something the team can try, combining medical imaging and AI with their experience.",
  },
  {
    title: "Test it with its users",
    text: "We check whether it actually helps the people who will use it, and report what we measured.",
  },
];

function Home() {
  const dfu = getProject("dfu-care")!;

  return (
    <>
      <NewsCarousel />

      {/* Hero + featured example */}
      <section className="border-b border-border bg-sand">
        <Container className="pt-14 pb-14 md:pt-20">
          <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Medical AI Lab · GUTECH, Al-Ghazali University, Karachi
          </div>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-semibold leading-[1.1] text-foreground sm:text-5xl md:text-6xl">
            Solving Healthcare Problems with{" "}
            <span className="text-link no-underline">Domain-Driven AI</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80 md:text-xl">
            At GUTECH’s Medical AI Lab, clinicians, researchers, engineers, and students work
            together on problems they encounter in healthcare. We combine medical imaging and AI
            with the experience of the people doing the work to build and test tools they can use.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/collaborate"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Bring Us a Problem <ArrowRight size={18} />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-md border-2 border-primary px-6 py-3 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Explore Our Work
            </Link>
          </div>

          {/* DFU Care as a concrete example */}
          <article
            aria-labelledby="featured-dfu"
            className="mt-14 grid gap-8 rounded-xl border border-border bg-card p-6 shadow-sm md:grid-cols-[1.1fr_1fr] md:p-10"
          >
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                An example of our work
              </div>
              <h2
                id="featured-dfu"
                className="mt-2 font-display text-3xl font-semibold text-foreground"
              >
                {dfu.name}
              </h2>
              <p className="mt-5 font-display text-xl italic leading-snug text-foreground md:text-2xl">
                “{dfu.question}”
              </p>
              <p className="mt-5 text-base leading-relaxed text-foreground/80">{dfu.summary}</p>
              <div className="mt-7 max-w-md">
                <StageTrack stage={dfu.stage} confirmed={dfu.stageConfirmed} />
              </div>
              <Link
                to="/projects/$slug"
                params={{ slug: dfu.slug }}
                className="mt-8 inline-flex items-center gap-2 font-semibold text-link hover:gap-3 transition-all"
              >
                See how the project works <ArrowRight size={18} />
              </Link>
            </div>
            <div className="self-center">
              {dfu.screenshot ? (
                <figure>
                  <img
                    src={dfu.screenshot.src}
                    alt={dfu.screenshot.alt}
                    className="w-full rounded-md border border-border"
                  />
                  <figcaption className="mt-2 text-sm text-muted-foreground">
                    {dfu.screenshot.caption}
                  </figcaption>
                </figure>
              ) : (
                <ImagePlaceholder label="Approved screenshot of the DFU Care tool" />
              )}
            </div>
          </article>
        </Container>
      </section>

      {/* How we work */}
      <section className="py-16 md:py-20">
        <Container>
          <SectionHeading>How we work</SectionHeading>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="border-t-2 border-primary pt-4">
                <div className="text-sm font-semibold text-muted-foreground">Step {i + 1}</div>
                <h3 className="mt-1 font-display text-xl font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-foreground/80">{s.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Two kinds of visitor */}
      <section className="pb-16 md:pb-20">
        <Container className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-navy-deep p-8 text-primary-foreground">
            <h2 className="font-display text-2xl font-semibold">Clinicians and domain experts</h2>
            <p className="mt-3 leading-relaxed text-primary-foreground/80">
              Does your team face a problem like the ones we work on? You don't need to know what an
              AI solution would look like. Tell us what you face and how you handle it today.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 font-semibold">
              <Link to="/collaborate" className="underline underline-offset-4">
                Bring us a problem
              </Link>
              <Link to="/collaborations" className="underline underline-offset-4">
                See how partnerships work
              </Link>
            </div>
          </div>
          <div className="rounded-lg border border-border bg-card p-8">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Researchers and students
            </h2>
            <p className="mt-3 leading-relaxed text-foreground/80">
              Find a project, read the work behind it, and see who contributed. Each project page
              links to its publications and the people working on it.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 font-semibold">
              <Link to="/projects" className="text-link">
                Projects
              </Link>
              <Link to="/publications" className="text-link">
                Publications
              </Link>
              <Link to="/team" className="text-link">
                Team
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Projects */}
      <section className="border-t border-border bg-sand py-16 md:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading>Projects & products</SectionHeading>
            <Link to="/projects" className="font-semibold text-link">
              All projects
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* Partners */}
      <section className="py-16 md:py-20">
        <Container>
          <SectionHeading>Working with</SectionHeading>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {collaborations.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/collaborations"
                  hash={c.slug}
                  className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 hover:shadow-md transition-shadow"
                >
                  <img
                    src={c.logo}
                    alt=""
                    className="h-14 w-14 shrink-0 rounded-md object-contain"
                  />
                  <span>
                    <span className="block font-semibold text-foreground">{c.partner}</span>
                    <span className="block text-sm text-muted-foreground">{c.unit}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Latest publication */}
      <section className="border-t border-border py-16 md:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading>Latest publication</SectionHeading>
            <Link to="/publications" className="font-semibold text-link">
              All publications
            </Link>
          </div>
          {labPublications[0] && <Citation pub={labPublications[0]} />}
        </Container>
      </section>
    </>
  );
}
