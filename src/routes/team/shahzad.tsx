import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft, ExternalLink, GraduationCap, BookOpen,
  BrainCircuit, Microscope, Dna, ScanEye, Pill, Network, Linkedin,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";

export const Route = createFileRoute("/team/shahzad")({
  head: () => ({
    meta: [
      { title: "Dr. Muhammad Shahzad — Senior Researcher | MAL | GUTECH" },
      {
        name: "description",
        content:
          "Dr. Muhammad Shahzad, Assistant Professor of Computer Science at GUTECH and Senior Researcher at the Medical AI Lab, works on AI in medicine, precision oncology, computational cancer genomics and explainable AI.",
      },
      { property: "og:title", content: "Dr. Muhammad Shahzad — Medical AI Lab" },
      {
        property: "og:description",
        content:
          "Senior Researcher at MAL, GUTECH. Leads the lab's ANA pattern-recognition project with the Immunology Department of Indus Hospital & Health Network.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: ShahzadProfile,
});

const SCHOLAR_URL = "https://scholar.google.com/citations?user=0GgW5ZsAAAAJ&hl=en";

// Citation figures from Google Scholar, November 2026.
const stats = [
  { value: "22+", label: "Years Experience" },
  { value: "12", label: "Publications" },
  { value: "68", label: "Citations" },
  { value: "4", label: "h-index" },
  { value: "2", label: "i10-index" },
];

const expertise = [
  { icon: BrainCircuit, label: "AI in Medicine" },
  { icon: Microscope, label: "Precision Oncology" },
  { icon: Dna, label: "Computational Cancer Genomics" },
  { icon: Pill, label: "Drug Response Prediction" },
  { icon: ScanEye, label: "Explainable AI" },
  { icon: Network, label: "Bioinformatics" },
];

const publications = [
  {
    title:
      "DeepCMS: A Feature Selection-Driven Model for Cancer Molecular Subtyping with a Case Study on Testicular Germ Cell Tumors",
    venue: "Diagnostics (MDPI), vol. 15, no. 21, 2730",
    year: 2025,
    authors: "M. W. Khan, G. Ahmed, Muhammad Shahzad, A. Namoun, S. Hussain, M. H. Alanazi",
  },
  {
    title: "DRPO: A Deep Learning Technique for Drug Response Prediction in Oncology Cell Lines",
    venue: "Alexandria Engineering Journal, vol. 105, 88–97",
    year: 2024,
    authors: "Muhammad Shahzad, A. Z. U. A. Kadani, M. A. Tahir, R. A. S. Malick, R. Jiang",
  },
  {
    title: "Identification of Biological Markers in Cancer Disease Using Explainable Artificial Intelligence",
    venue: "International Journal of Imaging Systems and Technology, vol. 34, no. 2, e23060",
    year: 2024,
    authors: "Muhammad Shahzad, R. Lohana, K. Aurangzeb, I. I. Ali, M. S. Anwar, M. Murtaza, et al.",
  },
  {
    title: "Classification of Clinically Actionable Genetic Mutations in Cancer Patients",
    venue: "Frontiers in Molecular Biosciences, vol. 10, 1277862",
    year: 2024,
    authors: "Muhammad Shahzad, M. Rafi, W. Alhalabi, N. Minaz Ali, M. S. Anwar, S. Jamal, et al.",
  },
  {
    title: "NeuPD — A Neural Network-Based Approach to Predict Antineoplastic Drug Response",
    venue: "Diagnostics (MDPI), vol. 13, no. 12, 2043",
    year: 2023,
    authors: "Muhammad Shahzad, M. A. Tahir, M. Alhussein, A. Mobin, R. A. Shams Malick, et al.",
  },
  {
    title: "Explainable AI in Drug Sensitivity Prediction on Cancer Cell Lines",
    venue: "2022 International Conference on Emerging Trends in Smart Technologies (ICETST)",
    year: 2022,
    authors: "I. S. Gillani, Muhammad Shahzad, A. Mobin, M. R. Munawar, M. U. Awan, M. Asif",
  },
  {
    title: "Virtual Data Integration of Heterogeneous Genomic Biological Knowledge Base",
    venue: "Bahria University Journal of Information & Communication Technologies",
    year: 2015,
    authors: "Muhammad Shahzad, K. Ahsan, M. A. Hussain",
  },
  {
    title: "Visualizing Protein Structures in Virtual Interactive Interface",
    venue: "Journal of Medical and Bioengineering, vol. 4, no. 5",
    year: 2015,
    authors: "K. Ahsan, Muhammad Shahzad",
  },
  {
    title: "Gene Ontology Tools: A Comparative Study",
    venue: "Journal of Basic & Applied Sciences, vol. 11, 619–629",
    year: 2015,
    authors: "Muhammad Shahzad, K. Ahsan, A. Nadeem, M. Sarim",
  },
  {
    title: "Comparison of Big Data Analytics Tools: A Bioinformatics Case Study",
    venue: "FUUAST Journal of Biology, vol. 4, no. 1, 113–118",
    year: 2014,
    authors: "Muhammad Shahzad, K. Ahsan",
  },
  {
    title: "DNA Innovate: Visualizing DNA Sequences",
    venue: "2009 International Conference on Information and Communication Technologies (ICICT)",
    year: 2009,
    authors: "Muhammad Shahzad, N. Alia, S. Mahmood",
  },
  {
    title: "Efficient Image Enhancement Techniques",
    venue: "Journal of Information & Communication Technology, vol. 3, no. 1, 50–55",
    year: 2009,
    authors: "Muhammad Shahzad, S. Latif, Q. Akhter, F. Bibi",
  },
];

function ShahzadProfile() {
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
                  Senior Researcher
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
                  Dr. Muhammad Shahzad
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-4 text-lg font-semibold text-royal">
                  Senior Researcher, Medical AI Lab (MAL)
                </p>
                <p className="mt-1 text-base text-muted-foreground">
                  Assistant Professor, Department of Computer Science, GUTECH — Al Ghazali University
                </p>
                <p className="mt-1 text-base text-muted-foreground">
                  Project Lead, ANA Pattern Recognition with the Immunology Department, Indus Hospital & Health Network
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
                      src="/images/Dr_Shahzad.jpg"
                      alt="Dr. Muhammad Shahzad"
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
                href="https://www.linkedin.com/in/muhammad-shahzad-ph-d-87151116/"
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
                  Dr. Muhammad Shahzad is an Assistant Professor of Computer Science at GUTECH — Al
                  Ghazali University and a Senior Researcher at the Medical AI Lab (MAL), where he leads
                  the lab's ANA immunofluorescence pattern-recognition project with the Immunology
                  Department of Indus Hospital & Health Network. His research spans AI in medicine,
                  precision oncology, computational cancer genomics and explainable AI.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <p>
                  He earned his PhD in Computer Science from FAST — National University of Computer and
                  Emerging Sciences in 2023, with a thesis on predicting drug response in cancer cell
                  lines using deep learning. During his PhD he was a visiting research scholar at
                  InfoLab21, Lancaster University, UK, under the International Research Support
                  Initiative Program (IRSIP), where he applied deep learning to predict drug response
                  across a panel of cancer cell lines. He also holds two master's degrees in computer
                  science, from Hamdard University and the Federal Urdu University of Arts, Science &
                  Technology, and a BS in Computer Science from Shah Abdul Latif University, Khairpur.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <p>
                  Over 22 years of teaching and research, he has worked at FAST-NUCES, PAK-KIET, Usman
                  Institute of Technology, MAJU, SZABIST and Baqai Medical University, teaching Applied
                  Machine Learning, Data Science Tools and Techniques, Bioinformatics, Theory of
                  Automata, Compiler Construction and Programming Fundamentals. He has supervised
                  research on drug response prediction, biological marker identification and
                  explainable AI, published in journals including Diagnostics, Frontiers in Molecular
                  Biosciences, the International Journal of Imaging Systems and Technology and the
                  Alexandria Engineering Journal.
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
