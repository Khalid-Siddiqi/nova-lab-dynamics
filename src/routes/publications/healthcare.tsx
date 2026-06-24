import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft, ExternalLink, GraduationCap, Award, BookOpen, Filter, Search, X,
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
  citations?: number;
  category: string;
  featured?: boolean;
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

const publications: Publication[] = [
  // Cancer Drug Response
  {
    id: "DRPO-2024",
    title: "DRPO: A Drug Repositioning Approach Based on Disease Module for Cancer Treatment",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "Alexandria Engineering Journal",
    year: 2024,
    citations: 22,
    category: "Cancer Drug Response",
  },
  {
    id: "cancer-mf-2024",
    title: "Matrix Factorization-Based Drug Response Prediction in Cancer Cell Lines",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "Computers in Biology and Medicine",
    year: 2024,
    citations: 18,
    category: "Cancer Drug Response",
  },
  {
    id: "cancer-ensemble-2024",
    title: "Ensemble Deep Learning for Antineoplastic Drug Sensitivity Prediction",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "IEEE/ACM Transactions on Computational Biology and Bioinformatics",
    year: 2024,
    citations: 14,
    category: "Cancer Drug Response",
  },
  {
    id: "cancer-2023",
    title: "Deep Learning Approaches for Cancer Drug Response Prediction: A Comprehensive Review",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "Briefings in Bioinformatics",
    year: 2023,
    citations: 45,
    category: "Cancer Drug Response",
  },

  // Diabetes & Blood Sugar
  {
    id: "DFU-2026",
    title: "A Deep Learning Pipeline for Diabetic Foot Ulcer Detection and Stage Classification",
    authors: "Rauf Ahmed Shams Mallick¹, Khalid Khurshid Siddiqui¹, Muhammad Khurshid Siddiqui², Abdul Basit³",
    venue: "AIiH 2026, Imperial College London",
    year: 2026,
    category: "Diabetes & Blood Sugar",
    featured: true,
  },
  {
    id: "blood-sugar-2024",
    title: "LSTM-Based Blood Glucose Forecasting for Diabetes Management",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "Journal of Biomedical Informatics",
    year: 2024,
    citations: 11,
    category: "Diabetes & Blood Sugar",
  },
  {
    id: "dbkb-2024",
    title: "DbKB: A Diabetes Knowledge Base for Explainable AI in Healthcare",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "Data in Brief",
    year: 2024,
    citations: 12,
    category: "Diabetes & Blood Sugar",
  },

  // Diagnostic Imaging
  {
    id: "brain-mri-2024",
    title: "Deep Learning-Based Brain Tumor Segmentation and Classification Using Multi-Modal MRI",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "Neurocomputing",
    year: 2024,
    citations: 28,
    category: "Diagnostic Imaging",
  },
  {
    id: "DFU-detection-2024",
    title: "Automated Detection of Diabetic Foot Ulcers Using Convolutional Neural Networks",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "Computers in Biology and Medicine",
    year: 2024,
    citations: 16,
    category: "Diagnostic Imaging",
  },
  {
    id: "lung-xray-2023",
    title: "Chest X-Ray Abnormality Detection Using Transfer Learning",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "IEEE Access",
    year: 2023,
    citations: 33,
    category: "Diagnostic Imaging",
  },

  // Medical IoT
  {
    id: "wban-2024",
    title: "Wireless Body Area Networks for Remote Health Monitoring: An AI Perspective",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "IEEE Internet of Things Journal",
    year: 2024,
    citations: 9,
    category: "Medical IoT",
  },
  {
    id: "iot-diabetes-2023",
    title: "IoT-Enabled Continuous Glucose Monitoring with Predictive Alerts",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "Sensors (MDPI)",
    year: 2023,
    citations: 21,
    category: "Medical IoT",
  },

  // Bioinformatics
  {
    id: "gene-2024",
    title: "Disease Gene Discovery in PPI Networks Using Centrality and Community Detection",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "BMC Bioinformatics",
    year: 2024,
    citations: 19,
    category: "Bioinformatics",
  },
  {
    id: "knowledge-graph-2024",
    title: "Knowledge Graph Construction for Chronic Disease Research",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "Database: The Journal of Biological Databases and Curation",
    year: 2024,
    citations: 8,
    category: "Bioinformatics",
  },
  {
    id: "neuPD-2024",
    title: "NeuPD: A Novel Approach for Neurological Disorder Diagnosis Using Deep Learning",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "Diagnostics (MDPI)",
    year: 2024,
    citations: 15,
    category: "Bioinformatics",
  },
  {
    id: "explainable-bio-2023",
    title: "Explainable AI for Gene-Disease Association Prediction",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "Frontiers in Genetics",
    year: 2023,
    citations: 24,
    category: "Bioinformatics",
  },

  // COVID-19
  {
    id: "covid-twitter-2024",
    title: "COVID-19 Twitter Sentiment Classification using Hybrid Deep Learning Model",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "IEEE Access",
    year: 2024,
    citations: 37,
    category: "COVID-19",
  },
  {
    id: "covid-chest-2023",
    title: "COVID-19 Detection from Chest X-Rays Using Deep Learning: A Multi-Center Study",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "IEEE Reviews in Biomedical Engineering",
    year: 2023,
    citations: 52,
    category: "COVID-19",
  },

  // Mental Health
  {
    id: "mental-health-2024",
    title: "AI-Driven Mental Health Assessment Using Social Media Linguistic Analysis",
    authors: "Rauf Ahmed Shams Malick, et al.",
    venue: "JMIR Mental Health",
    year: 2024,
    citations: 7,
    category: "Mental Health",
  },
];

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

function HealthcarePublications() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = activeCategory === "All"
    ? publications
    : publications.filter((p) => p.category === activeCategory);

  return (
    <main className="relative">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      {/* Hero */}
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
              bioinformatics, medical IoT, and more.
            </p>
          </Reveal>

          {/* Stats bar */}
          <Reveal delay={160}>
            <div className="mt-10 grid grid-cols-2 gap-3 rounded-3xl border border-border bg-card p-6 sm:grid-cols-4">
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-gradient md:text-3xl">{publications.length}</div>
                <div className="mt-1 text-xs font-medium text-muted-foreground">Total Publications</div>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-gradient md:text-3xl">{categoryCounts["Cancer Drug Response"]}</div>
                <div className="mt-1 text-xs font-medium text-muted-foreground">Cancer Research</div>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-gradient md:text-3xl">{categoryCounts["Diabetes & Blood Sugar"]}</div>
                <div className="mt-1 text-xs font-medium text-muted-foreground">Diabetes & Blood Sugar</div>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-gradient md:text-3xl">{categoryCounts["Bioinformatics"]}</div>
                <div className="mt-1 text-xs font-medium text-muted-foreground">Bioinformatics</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="relative py-10 border-b border-border">
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
                <span className="ml-1.5 opacity-70">({categoryCounts[cat]})</span>
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

      {/* Publications List */}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl font-bold text-foreground">
                {activeCategory === "All" ? "All Publications" : activeCategory}
              </h2>
              <span className="text-sm text-muted-foreground">
                {filtered.length} result{filtered.length !== 1 ? "s" : ""}
              </span>
            </div>
          </Reveal>

          <div className="mt-8 space-y-4">
            {filtered.map((pub, i) => (
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

                      <div className="mt-4 flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-royal">
                          <GraduationCap size={12} />
                          {pub.venue}
                        </span>
                        <span
                          className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          {pub.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
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

      {/* Footer CTA */}
      <section className="relative py-20" style={{ background: "var(--gradient-section)" }}>
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