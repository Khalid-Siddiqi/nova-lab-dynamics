import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft, ExternalLink, GraduationCap, BookOpen,
  BrainCircuit, ScanEye, ShieldCheck, MessageSquareText, Network, HeartPulse, Linkedin,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";

export const Route = createFileRoute("/team/sumra")({
  head: () => ({
    meta: [
      { title: "Ms. Sumra Khan — Faculty Researcher | MAL | GUTECH" },
      {
        name: "description",
        content:
          "Ms. Sumra Khan, Department of Computer Science at GUTECH, is a Medical AI Lab researcher working on responsible and explainable AI for medical imaging, deep learning, and healthcare informatics.",
      },
      { property: "og:title", content: "Ms. Sumra Khan — Medical AI Lab" },
      {
        property: "og:description",
        content:
          "Faculty Researcher at MAL, GUTECH. Research in Responsible AI, Explainable AI for medical imaging, NLP, deep learning, and density-based clustering.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: SumraProfile,
});

const SCHOLAR_URL = "https://scholar.google.com/citations?user=NMaEzV0AAAAJ&hl=en";

// Citation figures from Google Scholar, November 2026.
const stats = [
  { value: "10+", label: "Years Teaching" },
  { value: "10", label: "Publications" },
  { value: "55", label: "Citations" },
  { value: "4", label: "h-index" },
  { value: "2", label: "i10-index" },
];

const expertise = [
  { icon: ShieldCheck, label: "Responsible AI" },
  { icon: ScanEye, label: "Explainable AI in Medical Imaging" },
  { icon: BrainCircuit, label: "Deep Learning" },
  { icon: MessageSquareText, label: "Natural Language Processing" },
  { icon: Network, label: "Unsupervised & Density-Based Clustering" },
  { icon: HeartPulse, label: "Healthcare Informatics" },
];

const publications = [
  {
    title: "Towards Responsible Multimodal Medical Reasoning via Context-Aligned Vision-Language Models",
    venue: "arXiv preprint arXiv:2604.08815",
    year: 2026,
    authors: "Sumra Khan, S. Chhabriya, A. Zafar, S. Arif, A. Muneer, A. Zafar, S. Raza, et al.",
  },
  {
    title:
      "Beyond Anatomy: Explainable ASD Classification from rs-fMRI via Functional Parcellation and Graph Attention Networks",
    venue: "arXiv preprint arXiv:2603.02518",
    year: 2026,
    authors: "S. H. Madani, N. Bibi, A. R. Jeraj, Sumra Khan, A. Zafar, R. Qureshi",
  },
  {
    title: "Comparative Study of Transfer Learning with VGG16 and VGG19 for Breast Cancer Classification",
    venue: "2024 26th International Multi-Topic Conference (INMIC)",
    year: 2024,
    authors: "Sumra Khan, F. T. Zahra, A. Asif, S. Arif, U. Fatima",
  },
  {
    title: "Density Peaks Clustering Based on Gaussian Fuzzy Neighborhood with Noise Parameter",
    venue: "Expert Systems with Applications, vol. 255, 124782",
    year: 2024,
    authors: "S. M. Waqas, Sumra Khan, K. Talpur, R. A. Khan",
  },
  {
    title:
      "Survey Dataset on Mental Health in Tech Professionals from Open Sourcing Mental Health Surveys (2017–2021)",
    venue: "Data in Brief, vol. 54, 110377",
    year: 2024,
    authors: "F. Rasheed, Sumra Khan, S. M. Waqas, R. A. Khan, S. Arif",
  },
  {
    title: "Harris' Hawks Optimization-Tuned Density-Based Clustering",
    venue: "Sukkur IBA Journal of Emerging Technologies, vol. 6, no. 1",
    year: 2023,
    authors: "K. Talpur, M. S. Omar, S. M. Waqas, Sumra Khan, S. Ahmad",
  },
  {
    title: "Investigating Novice Developers' Code Commenting Trends Using Machine Learning Techniques",
    venue: "Algorithms (MDPI), vol. 16, no. 1, 53",
    year: 2023,
    authors: "T. Niazi, T. Das, G. Ahmed, S. M. Waqas, S. Khan, S. Khan, A. A. Abdelatif, et al.",
  },
  {
    title: "Gender Classification Using Smartphone Sensors and Machine Learning Approaches",
    venue: "2022 Mohammad Ali Jinnah University International Conference on Computing (MAJICC)",
    year: 2022,
    authors: "A. Basit, M. Y. Khan, S. S. Ali, M. Suffian, A. Wajid, Sumra Khan",
  },
  {
    title: "Fuzzy Density-Based Clustering for Medical Diagnosis",
    venue: "International Conference on Soft Computing and Data Mining (SCDM)",
    year: 2022,
    authors: "S. M. Waqas, K. Hussain, S. A. Mostafa, N. M. Nawi, Sumra Khan",
  },
  {
    title: "A Survey of Security Threats in Distributed Operating System",
    venue: "i-Manager's Journal on Computer Science, vol. 8, no. 3",
    year: 2020,
    authors: "Sumra Khan, S. M. Waqas, A. Ahmed",
  },
];

function SumraProfile() {
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
                  Faculty Researcher
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
                  Ms. Sumra Khan
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-4 text-lg font-semibold text-royal">
                  Faculty Researcher, Medical AI Lab (MAL)
                </p>
                <p className="mt-1 text-base text-muted-foreground">
                  Department of Computer Science, GUTECH — Al Ghazali University
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
                      src="/images/Sumra_Khan.jpg"
                      alt="Ms. Sumra Khan"
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

          {/* Contact links */}
          <Reveal delay={240}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="https://www.linkedin.com/in/info-sumra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-electric hover:bg-electric/5 hover:text-electric"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href={SCHOLAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-electric hover:bg-electric/5 hover:text-electric"
              >
                <GraduationCap size={16} />
                Google Scholar
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
                  Ms. Sumra Khan is a computer scientist and educator whose research centres on machine
                  learning and deep learning for healthcare. She joined the Department of Computer Science
                  at GUTECH — Al Ghazali University in September 2026 and is a member of the Medical AI
                  Lab (MAL), where her work on responsible and explainable AI complements the lab's
                  clinician-centred research.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <p>
                  Her research interests span predictive modelling and classification in healthcare,
                  explainable AI for medical image analysis, density-based clustering, and healthcare
                  informatics aimed at improving patient outcomes and enabling personalised medicine.
                  Her recent work includes context-aligned vision-language models for responsible
                  multimodal medical reasoning, and explainable autism spectrum disorder classification
                  from resting-state fMRI using graph attention networks.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <p>
                  She holds an MS in Computer Science from Bahria University, Karachi. Before joining
                  GUTECH, she taught computer science for a decade as a Lecturer at Salim Habib University
                  (2023–2026), Muhammad Ali Jinnah University (2021–2023), and SSAT Degree College
                  (2016–2021), teaching Operating Systems, Programming Fundamentals, Object-Oriented
                  Programming, and Artificial Intelligence.
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
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Publications</h2>
            </Reveal>
            <Reveal delay={100}>
              <a
                href={SCHOLAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-electric px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-electric/90"
              >
                Google Scholar profile <ExternalLink size={14} />
              </a>
            </Reveal>
          </div>

          <div className="mt-10 space-y-4">
            {publications.map((pub, i) => (
              <Reveal key={pub.title} delay={i * 80}>
                <div className="group relative rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-elevate">
                  <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-electric/0 via-electric/20 to-cyan-soft/0 opacity-0 blur-md transition group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-lg font-bold text-foreground leading-snug">
                          {pub.title}
                        </h3>
                        <p className="mt-1.5 text-sm text-muted-foreground">{pub.authors}</p>
                      </div>
                      <div className="shrink-0 text-right">
                        <div className="text-sm font-bold text-foreground">{pub.year}</div>
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
