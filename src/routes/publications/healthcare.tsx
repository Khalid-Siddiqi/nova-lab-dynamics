import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft, ExternalLink, GraduationCap, Award, BookOpen, Filter, Search, X, Lightbulb, FlaskConical,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/publications/healthcare")({
  head: () => ({
    meta: [
      { title: "Healthcare & Medical AI Publications — M.A.L. | GUTECH" },
      {
        name: "description",
        content:
          "Browse the Medical AI Lab's publications in healthcare AI, including cancer drug response, diabetes, bioinformatics, medical IoT, and more.",
      },
      { property: "og:title", content: "Healthcare & Medical AI Publications — M.A.L." },
      {
        property: "og:description",
        content:
          "18+ publications spanning cancer drug response, diabetes & blood sugar, diagnostic imaging, medical IoT, bioinformatics, COVID-19, and mental health.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: HealthcarePublications,
});

interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  category: string;
  featured?: boolean;
  /** "leadership" = prior research expertise / foundational work by lab leadership */
  /** "mal" = conducted directly under the Medical AI Lab */
  group: "leadership" | "mal";
}

const categories = [
  "All",
  "Cancer Drug Response",
  "Diabetes & Blood Sugar",
  "Diagnostic Imaging",
  "Medical IoT",
  "Bioinformatics",
  "COVID-19",
  "Mental Health",
] as const;

type Category = (typeof categories)[number];

// ────────────────────────────────────────────────────────────────────
// Group definitions
// ────────────────────────────────────────────────────────────────────
const groups = [
  {
    key: "leadership" as const,
    label: "Research Leadership & Foundational Expertise",
    icon: Lightbulb,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-l-amber-500",
    description:
      "The Medical AI Lab is built upon years of research experience in Artificial Intelligence, Medical Imaging, Healthcare Informatics, and Machine Learning. The publications in this section represent the scholarly contributions of the lab director and affiliated researchers that provide the scientific foundation for the lab's vision and research direction.",
  },
  {
    key: "mal" as const,
    label: "Medical AI Lab Research Outputs",
    icon: FlaskConical,
    color: "text-electric",
    bgColor: "bg-electric/10",
    borderColor: "border-l-electric",
    description:
      "This section highlights publications, datasets, software platforms, and ongoing research activities conducted directly under the Medical AI Lab since its establishment.",
  },
] as const;

type GroupKey = (typeof groups)[number]["key"];

// ────────────────────────────────────────────────────────────────────
// Publication data
// ────────────────────────────────────────────────────────────────────
const publications: Publication[] = [
  // ── MAL Research Outputs (conducted under M.A.L.) ──
  {
    id: "DFU-2026",
    title: "A Deep Learning Pipeline for Diabetic Foot Ulcer Detection and Stage Classification",
    authors: "Rauf Ahmed Shams Mallick¹, Khalid Khurshid Siddiqui¹, Muhammad Khurshid Siddiqui², Abdul Basit³",
    venue: "AIiH 2026, Imperial College London",
    year: 2026,
    category: "Diabetes & Blood Sugar",
    featured: true,
    group: "mal",
  },

  // ── Research Leadership & Foundational Expertise ──

  // Cancer Drug Response
  {
    id: "DRPO-2024",
    title: "DRPO: A Drug Repositioning Approach Based on Disease Module for Cancer Treatment",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "Alexandria Engineering Journal",
    year: 2024,
    category: "Cancer Drug Response",
    group: "leadership",
  },
  {
    id: "cancer-mf-2024",
    title: "Matrix Factorization-Based Drug Response Prediction in Cancer Cell Lines",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "Computers in Biology and Medicine",
    year: 2024,
    category: "Cancer Drug Response",
    group: "leadership",
  },
  {
    id: "cancer-ensemble-2024",
    title: "Ensemble Deep Learning for Antineoplastic Drug Sensitivity Prediction",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "IEEE/ACM Transactions on Computational Biology and Bioinformatics",
    year: 2024,
    category: "Cancer Drug Response",
    group: "leadership",
  },
  {
    id: "cancer-2023",
    title: "Deep Learning Approaches for Cancer Drug Response Prediction: A Comprehensive Review",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "Briefings in Bioinformatics",
    year: 2023,
    category: "Cancer Drug Response",
    group: "leadership",
  },

  // Diabetes & Blood Sugar
  {
    id: "blood-sugar-2024",
    title: "LSTM-Based Blood Glucose Forecasting for Diabetes Management",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "Journal of Biomedical Informatics",
    year: 2024,
    category: "Diabetes & Blood Sugar",
    group: "leadership",
  },
  {
    id: "dbkb-2024",
    title: "DbKB: A Diabetes Knowledge Base for Explainable AI in Healthcare",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "Data in Brief",
    year: 2024,
    category: "Diabetes & Blood Sugar",
    group: "leadership",
  },

  // Diagnostic Imaging
  {
    id: "brain-mri-2024",
    title: "Deep Learning-Based Brain Tumor Segmentation and Classification Using Multi-Modal MRI",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "Neurocomputing",
    year: 2024,
    category: "Diagnostic Imaging",
    group: "leadership",
  },
  {
    id: "DFU-detection-2024",
    title: "Automated Detection of Diabetic Foot Ulcers Using Convolutional Neural Networks",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "Computers in Biology and Medicine",
    year: 2024,
    category: "Diagnostic Imaging",
    group: "leadership",
  },
  {
    id: "lung-xray-2023",
    title: "Chest X-Ray Abnormality Detection Using Transfer Learning",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "IEEE Access",
    year: 2023,
    category: "Diagnostic Imaging",
    group: "leadership",
  },

  // Medical IoT
  {
    id: "wban-2024",
    title: "Wireless Body Area Networks for Remote Health Monitoring: An AI Perspective",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "IEEE Internet of Things Journal",
    year: 2024,
    category: "Medical IoT",
    group: "leadership",
  },
  {
    id: "iot-diabetes-2023",
    title: "IoT-Enabled Continuous Glucose Monitoring with Predictive Alerts",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "Sensors (MDPI)",
    year: 2023,
    category: "Medical IoT",
    group: "leadership",
  },

  // Bioinformatics
  {
    id: "gene-2024",
    title: "Disease Gene Discovery in PPI Networks Using Centrality and Community Detection",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "BMC Bioinformatics",
    year: 2024,
    category: "Bioinformatics",
    group: "leadership",
  },
  {
    id: "knowledge-graph-2024",
    title: "Knowledge Graph Construction for Chronic Disease Research",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "Database: The Journal of Biological Databases and Curation",
    year: 2024,
    category: "Bioinformatics",
    group: "leadership",
  },
  {
    id: "neuPD-2024",
    title: "NeuPD: A Novel Approach for Neurological Disorder Diagnosis Using Deep Learning",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "Diagnostics (MDPI)",
    year: 2024,
    category: "Bioinformatics",
    group: "leadership",
  },
  {
    id: "explainable-bio-2023",
    title: "Explainable AI for Gene-Disease Association Prediction",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "Frontiers in Genetics",
    year: 2023,
    category: "Bioinformatics",
    group: "leadership",
  },

  // COVID-19
  {
    id: "covid-twitter-2024",
    title: "COVID-19 Twitter Sentiment Classification using Hybrid Deep Learning Model",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "IEEE Access",
    year: 2024,
    category: "COVID-19",
    group: "leadership",
  },
  {
    id: "covid-chest-2023",
    title: "COVID-19 Detection from Chest X-Rays Using Deep Learning: A Multi-Center Study",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "IEEE Reviews in Biomedical Engineering",
    year: 2023,
    category: "COVID-19",
    group: "leadership",
  },

  // Mental Health
  {
    id: "mental-health-2024",
    title: "AI-Driven Mental Health Assessment Using Social Media Linguistic Analysis",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "JMIR Mental Health",
    year: 2024,
    category: "Mental Health",
    group: "leadership",
  },
];

// ────────────────────────────────────────────────────────────────────
// Helpers
// ────────────────────────────────────────────────────────────────────
const leadershipPubs = publications.filter((p) => p.group === "leadership");
const malPubs = publications.filter((p) => p.group === "mal");

const categoryCounts = {
  "All": publications.length,
  "Cancer Drug Response": publications.filter((p) => p.category === "Cancer Drug Response").length,
  "Diabetes & Blood Sugar": publications.filter((p) => p.category === "Diabetes & Blood Sugar").length,
  "Diagnostic Imaging": publications.filter((p) => p.category === "Diagnostic Imaging").length,
  "Medical IoT": publications.filter((p) => p.category === "Medical IoT").length,
  "Bioinformatics": publications.filter((p) => p.category === "Bioinformatics").length,
  "COVID-19": publications.filter((p) => p.category === "COVID-19").length,
  "Mental Health": publications.filter((p) => p.category === "Mental Health").length,
};

const groupCounts = {
  leadership: leadershipPubs.length,
  mal: malPubs.length,
};

// ────────────────────────────────────────────────────────────────────
// Component
// ────────────────────────────────────────────────────────────────────
function HealthcarePublications() {
  const [activeGroup, setActiveGroup] = useState<GroupKey>("leadership");
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const currentGroupPubs = activeGroup === "leadership" ? leadershipPubs : malPubs;

  const filtered =
    activeCategory === "All"
      ? currentGroupPubs
      : currentGroupPubs.filter((p) => p.category === activeCategory);

  const groupDef = groups.find((g) => g.key === activeGroup)!;

  return (
    <main className="relative">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden pt-32 pb-16"
        style={{ background: "var(--gradient-section)" }}
      >
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

          <Reveal>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-electric">
              Research Output
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Healthcare & Medical AI
              <br />
              <span className="text-gradient">Publications</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Peer-reviewed research spanning cancer drug response, diabetes, diagnostic imaging,
              bioinformatics, medical IoT, and more — encompassing both foundational expertise and
              current Medical AI Lab research.
            </p>
          </Reveal>

          {/* Stats bar */}
          <Reveal delay={160}>
            <div className="mt-10 grid grid-cols-3 gap-3 rounded-3xl border border-border bg-card p-6 sm:grid-cols-4">
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-gradient md:text-3xl">
                  {publications.length}
                </div>
                <div className="mt-1 text-xs font-medium text-muted-foreground">
                  Total Publications
                </div>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-gradient md:text-3xl">
                  {groupCounts.leadership}
                </div>
                <div className="mt-1 text-xs font-medium text-muted-foreground">
                  Foundational Expertise
                </div>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-gradient md:text-3xl">
                  {groupCounts.mal}
                </div>
                <div className="mt-1 text-xs font-medium text-muted-foreground">
                  M.A.L. Research Outputs
                </div>
              </div>
              <div className="text-center col-span-3 sm:col-span-1">
                <div className="font-display text-2xl font-bold text-gradient md:text-3xl">
                  {categoryCounts["Cancer Drug Response"]}
                </div>
                <div className="mt-1 text-xs font-medium text-muted-foreground">
                  Cancer Research
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Group Tabs ── */}
      <section className="relative border-b border-border py-6">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap gap-3">
            {groups.map((g) => {
              const Icon = g.icon;
              const isActive = activeGroup === g.key;
              return (
                <button
                  key={g.key}
                  onClick={() => {
                    setActiveGroup(g.key);
                    setActiveCategory("All");
                  }}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all",
                    isActive
                      ? "bg-card border border-electric/40 shadow-sm text-foreground"
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground border border-transparent"
                  )}
                >
                  <Icon size={16} className={isActive ? g.color : "text-muted-foreground"} />
                  {g.label}
                  <span
                    className={cn(
                      "ml-1 rounded-full px-2 py-0.5 text-[11px] font-bold",
                      isActive ? cn(g.bgColor, g.color) : "bg-muted text-muted-foreground"
                    )}
                  >
                    {groupCounts[g.key]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Group Description ── */}
      <Reveal>
        <section className="relative py-8 border-b border-border/50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div
                  className={cn(
                    "mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                    groupDef.bgColor
                  )}
                >
                  <groupDef.icon size={20} className={groupDef.color} />
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold text-foreground">
                    {groupDef.label}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {groupDef.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Filter Tabs (categories) ── */}
      <section className="relative py-6 border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center gap-2">
            <div className="mr-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <Filter size={14} />
              Filter:
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs font-semibold transition-all",
                  activeCategory === cat
                    ? "bg-electric text-white shadow-sm"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                )}
              >
                {cat}
                <span className="ml-1.5 opacity-70">
                  ({currentGroupPubs.filter((p) => cat === "All" || p.category === cat).length})
                </span>
              </button>
            ))}
            {activeCategory !== "All" && (
              <button
                onClick={() => setActiveCategory("All")}
                className="ml-2 inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold text-muted-foreground transition hover:text-foreground"
              >
                <X size={14} />
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── Publications List ── */}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl font-bold text-foreground">
                {activeCategory === "All" ? groupDef.label : activeCategory}
              </h2>
              <span className="text-sm text-muted-foreground">
                {filtered.length} result{filtered.length !== 1 ? "s" : ""}
              </span>
            </div>
          </Reveal>

          <div className="mt-8 space-y-4">
            {filtered.map((pub, i) => {
              const g = groups.find((x) => x.key === pub.group)!;
              return (
                <Reveal key={pub.id} delay={i * 40}>
                  <TiltCard intensity={3}>
                    <div
                      className={cn(
                        "group relative rounded-3xl border bg-card p-6 transition-all hover:shadow-elevate",
                        pub.featured
                          ? "border-l-4 border-l-amber-500 border-border shadow-md"
                          : "border-border hover:-translate-y-0.5"
                      )}
                    >
                      <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-electric/0 via-electric/15 to-cyan-soft/0 opacity-0 blur-md transition group-hover:opacity-100" />

                      <div className="relative">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            {/* Group badge */}
                            <div
                              className={cn(
                                "mb-2 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider",
                                g.bgColor,
                                g.color
                              )}
                            >
                              <g.icon size={12} />
                              {pub.group === "mal"
                                ? "M.A.L. Research Output"
                                : "Foundational Research"}
                            </div>

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
                          </div>
                        </div>

                        <div className="mt-4 flex flex-wrap items-center gap-3">
                          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-royal">
                            <GraduationCap size={12} />
                            {pub.venue}
                          </span>
                          <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                            {pub.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="mt-12 text-center">
              <div className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm text-muted-foreground">
                <Search size={14} />
                No publications found in this category.
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <section
        className="relative py-20"
        style={{ background: "var(--gradient-section)" }}
      >
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Meet Our Researchers
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 max-w-lg mx-auto text-muted-foreground">
              Learn more about the team driving this research at the Medical AI Lab.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/team/rauf"
                className="inline-flex items-center gap-2 rounded-full bg-electric px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:shadow-elevate"
              >
                Dr. Rauf's Profile
              </Link>
              <Link
                to="/team/khalid"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:border-electric hover:bg-electric/5"
              >
                Khalid's Profile
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