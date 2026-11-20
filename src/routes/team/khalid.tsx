import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft, ExternalLink, GraduationCap, Award, BookOpen,
  Brain, Activity, Eye, Shield, BarChart3, Dna, Linkedin, Mail,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";

export const Route = createFileRoute("/team/khalid")({
  head: () => ({
    meta: [
      { title: "Khalid Khurshid Siddiqui — Research Assistant, Medical AI | MAL | GUTECH" },
      {
        name: "description",
        content:
          "Khalid Khurshid Siddiqui is a Research Assistant at the Medical AI Lab, GUTECH. Focused on Medical AI, Computer Vision, MLOps, and DFU prognosis.",
      },
      { property: "og:title", content: "Khalid Khurshid Siddiqui — Medical AI Lab" },
      {
        property: "og:description",
        content:
          "Research Assistant at MAL, GUTECH. Specializing in Medical AI, Computer Vision, MLOps, and Diabetic Foot Ulcer prognosis.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: KhalidProfile,
});

const expertise = [
  { icon: Brain, label: "Medical AI" },
  { icon: Eye, label: "Computer Vision" },
  { icon: Activity, label: "MLOps" },
  { icon: Shield, label: "Explainable AI" },
  { icon: BarChart3, label: "Sequential Task Analysis" },
  { icon: Dna, label: "DFU Prognosis" },
];

const contributions = [
  "Co-authored the lab's first international publication (AIiH 2026 — Imperial College London) on deep learning for diabetic foot ulcer detection and staging",
  "Developed clinician-centered annotation platforms enabling domain experts to label medical imaging datasets efficiently",
  "Implements MLOps pipelines for secure clinical API deployment and model lifecycle management",
  "Designs and deploys multi-modal AI systems integrating imaging data with clinical workflows",
];

function KhalidProfile() {
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
                  Research Assistant
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
                  Khalid Khurshid Siddiqui
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-4 text-lg font-semibold text-royal">
                  Research Assistant &mdash; Medical AI
                </p>
                <p className="mt-1 text-base text-muted-foreground">
                  BS Computer Science, FAST NUCES (2025)
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
                      src="/images/Khalid_Khurshid_Siddiqui.jpg"
                      alt="Khalid Khurshid Siddiqui"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          </div>

          {/* Contact links */}
          <Reveal delay={200}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="https://www.linkedin.com/in/khalid-khurshid-siddiqui-b0b827238/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-electric hover:bg-electric/5 hover:text-electric"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href="mailto:khalid20031016@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-electric hover:bg-electric/5 hover:text-electric"
              >
                <Mail size={16} />
                khalid20031016@gmail.com
              </a>
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
                  Khalid Khurshid Siddiqui is an AI Engineer and researcher focused on Medical AI,
                  Deep Learning, and multi-modal AI solutions. At the Medical AI Lab (MAL), he
                  develops clinician-centered AI systems that bridge the gap between healthcare and
                  machine learning, ensuring that every model translates into real clinical value.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <p>
                  His current research focuses on diabetic foot ulcer (DFU) analysis, where he applies
                  state-of-the-art deep learning techniques for detection, staging, and longitudinal
                  prognosis. He also works on human activity recognition (HAR) and sequential task
                  analysis utilizing LSTM networks and MediaPipe handpose methodologies, translating
                  complex imaging datasets into active clinical workflows.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <p>
                  Khalid holds a BS in Computer Science from FAST NUCES (2025), where he built a strong
                  foundation in AI, software engineering, and data science. His technical expertise spans
                  computer vision, MLOps, and explainable AI, and he is passionate about deploying
                  production-grade AI systems that operate securely and reliably in clinical environments.
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

      {/* Key Contributions */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Key Contributions</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Impactful work driving the lab's research and engineering initiatives.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {contributions.map((c, i) => (
              <Reveal key={c} delay={i * 80}>
                <div className="group relative rounded-3xl border border-border bg-card p-6 transition-all hover:shadow-elevate hover:-translate-y-0.5">
                  <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-electric/0 via-electric/20 to-cyan-soft/0 opacity-0 blur-md transition group-hover:opacity-100" />
                  <div className="relative flex items-start gap-4">
                    <div className="shrink-0 mt-1 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-royal/15 to-electric/15 text-electric">
                      <Award size={18} />
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/85">{c}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20" style={{ background: "var(--gradient-section)" }}>
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Explore Our Research
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 max-w-lg mx-auto text-muted-foreground">
              Discover the full breadth of healthcare AI research being conducted at MAL.
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