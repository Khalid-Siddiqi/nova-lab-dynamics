import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft, ExternalLink, GraduationCap, Award, BookOpen, Users, Quote,
  Brain, Activity, Dna, Network, BarChart3, Shield,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";

export const Route = createFileRoute("/team/rauf")({
  head: () => ({
    meta: [
      { title: "Dr. Rauf Ahmed Shams Malick — Principal Investigator | M.A.L. | GUTECH" },
      {
        name: "description",
        content:
          "Dr. Rauf Ahmed Shams Malick, Professor & Chairman CS at GUTECH, leads the Medical AI Lab. 20+ years in healthcare AI, deep learning, and clinical decision support.",
      },
      { property: "og:title", content: "Dr. Rauf Ahmed Shams Malick — Medical AI Lab" },
      {
        property: "og:description",
        content:
          "Principal Investigator & Lab Leader at M.A.L., GUTECH. Specializing in Medical AI, Cancer Drug Response, Bioinformatics, and Explainable AI.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: RaufProfile,
});

const stats = [
  { value: "20+", label: "Years Research" },
  { value: "40+", label: "MS Supervised" },
  { value: "2", label: "PhD Supervised" },
  { value: "18+", label: "Healthcare AI Publications" },
  { value: "406+", label: "Citations" },
];

const expertise = [
  { icon: Brain, label: "Medical AI" },
  { icon: Activity, label: "Clinical Decision Support" },
  { icon: BarChart3, label: "Cancer Drug Response" },
  { icon: Dna, label: "Bioinformatics" },
  { icon: Shield, label: "Explainable AI" },
  { icon: Network, label: "Knowledge Graphs" },
];

const publications = [
  {
    title: "COVID-19 Twitter Sentiment Classification using Hybrid Deep Learning Model",
    venue: "IEEE Access",
    year: 2024,
    citations: 37,
    authors: "Rauf Ahmed Shams Malick, et al.",
  },
  {
    title: "DRPO: A Drug Repositioning Approach Based on Disease Module",
    venue: "Alexandria Engineering Journal",
    year: 2024,
    citations: 22,
    authors: "Rauf Ahmed Shams Malick, et al.",
  },
  {
    title: "NeuPD: A Novel Approach for Neurological Disorder Diagnosis Using Deep Learning",
    venue: "Diagnostics (MDPI)",
    year: 2024,
    citations: 15,
    authors: "Rauf Ahmed Shams Malick, et al.",
  },
  {
    title: "DbKB: A Diabetes Knowledge Base for Explainable AI in Healthcare",
    venue: "Data in Brief",
    year: 2024,
    citations: 12,
    authors: "Rauf Ahmed Shams Malick, et al.",
  },
  {
    title: "A Deep Learning Pipeline for Diabetic Foot Ulcer Detection and Stage Classification",
    venue: "AIiH 2026, Imperial College London",
    year: 2026,
    citations: 0,
    authors: "Rauf Ahmed Shams Malick¹, Khalid Khurshid Siddiqui¹, et al.",
    featured: true,
  },
];

function RaufProfile() {
  return (
    <main className="relative">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16" style={{ background: "var(--gradient-section)" }}>
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-electric/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-royal/15 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
            {/* Main content */}
            <div>
              <Reveal>
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-electric">
                  Principal Investigator
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
                  Dr. Rauf Ahmed Shams Malick
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-4 text-lg font-semibold text-royal">
                  Principal Investigator & Lab Leader, M.A.L.
                </p>
                <p className="mt-1 text-base text-muted-foreground">
                  Professor & Chairman, Department of Computer Science, GUTECH — Al Ghazali University
                </p>
              </Reveal>
            </div>

            {/* Photo */}
            <Reveal delay={120} className="flex justify-center lg:justify-end">
              <TiltCard intensity={5}>
                <div className="group relative">
                  <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-royal via-electric to-cyan-soft opacity-60 blur-xl transition group-hover:opacity-100 animate-gradient-pan" />
                  <div className="relative h-64 w-64 overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-deep to-royal shadow-elevate md:h-72 md:w-72">
                    <img
                      src="/images/Dr_Rauf.avif"
                      alt="Dr. Rauf Ahmed Shams Malick"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          </div>

          {/* Stats row */}
          <Reveal delay={200}>
            <div className="mt-12 grid grid-cols-2 gap-3 rounded-3xl border border-border bg-card p-6 sm:grid-cols-5">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-2xl font-bold text-gradient md:text-3xl">{s.value}</div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bio Section */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Biography</h2>
            </Reveal>

            <div className="mt-8 space-y-6 text-base leading-relaxed text-foreground/85">
              <Reveal delay={60}>
                <p>
                  Dr. Rauf Ahmed Shams Malick is a data-intensive problem solver who targets healthcare 
                  challenges with a relentless focus on understanding the problem first. His philosophy is 
                  simple: gain deep domain knowledge, immerse in the clinical context, and only then build 
                  AI solutions that genuinely meet the needs of clinicians and patients. This approach 
                  underpins every project at the Medical AI Lab (M.A.L.).
                </p>
              </Reveal>
              <Reveal delay={120}>
                <p>
                  He earned his academic foundation from FAST-NU Karachi and has since held key academic 
                  and research positions at the Centre for Complex Systems and AI, DHA Suffa University, 
                  and serves on the Board of Studies at KSBL, MAJU, and FAST-NU. His leadership in 
                  curriculum development and research mentorship has shaped a generation of AI practitioners 
                  in Pakistan.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <p>
                  His research excellence has taken him to prestigious international institutions including 
                  IPAM at UCLA, the National Institute of Genetics (NIG) in Japan, and the HEJ Research 
                  Institute of Chemistry. He has supervised over 40 MS and 2 PhD students. His current 
                  research focuses on diabetic foot ulcer prognosis, cancer drug response prediction, 
                  brain tumor analysis, and knowledge graph construction for chronic diseases.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <p>
                  Looking ahead, Dr. Malick envisions M.A.L. as a globally recognized hub for developing 
                  clinician-centered AI systems that operate effectively in resource-constrained environments, 
                  ultimately bridging the gap between computational research and real-world patient impact 
                  across the developing world.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="relative py-20" style={{ background: "var(--gradient-section)" }}>
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Areas of Expertise</h2>
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-3">
            {expertise.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <Reveal key={exp.label} delay={i * 60}>
                  <div className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-all hover:border-electric hover:bg-electric/5 hover:shadow-md">
                    <Icon size={16} className="text-electric transition group-hover:scale-110" />
                    {exp.label}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="relative py-20">
        <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Reveal>
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Selected Publications</h2>
            </Reveal>
            <Reveal delay={100}>
              <Link
                to="/publications/healthcare"
                className="inline-flex items-center gap-2 rounded-full bg-electric px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-electric/90"
              >
                View all publications <ExternalLink size={14} />
              </Link>
            </Reveal>
          </div>

          <div className="mt-10 space-y-4">
            {publications.map((pub, i) => (
              <Reveal key={pub.title} delay={i * 80}>
                <div
                  className={`group relative rounded-3xl border bg-card p-6 transition-all hover:shadow-elevate ${
                    pub.featured
                      ? "border-l-4 border-l-amber-500 border-border shadow-md"
                      : "border-border hover:-translate-y-0.5"
                  }`}
                >
                  <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-electric/0 via-electric/20 to-cyan-soft/0 opacity-0 blur-md transition group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        {pub.featured && (
                          <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-600">
                            <Award size={12} />
                            First M.A.L. Publication
                          </div>
                        )}
                        <h3 className="font-display text-lg font-bold text-foreground leading-snug">
                          {pub.title}
                        </h3>
                        <p className="mt-1.5 text-sm text-muted-foreground">{pub.authors}</p>
                      </div>
                      <div className="shrink-0 text-right">
                        <div className="text-sm font-bold text-foreground">{pub.year}</div>
                        {pub.citations !== undefined && (
                          <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground">
                            <BookOpen size={11} />
                            {pub.citations} citations
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-xs font-medium text-royal">
                      <GraduationCap size={12} />
                      {pub.venue}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative py-20" style={{ background: "var(--gradient-section)" }}>
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Explore Our Research
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 max-w-lg mx-auto text-muted-foreground">
              Discover the full breadth of healthcare AI research being conducted at M.A.L.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/publications/healthcare"
                className="inline-flex items-center gap-2 rounded-full bg-electric px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:shadow-elevate"
              >
                <BookOpen size={16} />
                Browse Healthcare Publications
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:border-electric hover:bg-electric/5"
              >
                <ArrowLeft size={16} />
                Back to Home
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}