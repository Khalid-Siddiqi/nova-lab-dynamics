import {
  Activity, Pill, Camera, Dna, Brain, Network,
  BarChart3, Droplet, Layers,
} from "lucide-react";
import { Reveal } from "../Reveal";
import { TiltCard } from "../TiltCard";

const areas = [
  { i: Activity, t: "Diabetic Foot Ulcer Detection & Staging", d: "Deep learning pipelines for automated DFU detection and stage classification using clinical imaging data.", feat: true },
  { i: Pill,     t: "Cancer Drug Response Prediction",          d: "Matrix factorization, ensemble methods, and deep learning techniques to predict antineoplastic drug responses in oncology." },
  { i: Camera,   t: "Medical Imaging & Diagnostics",            d: "Computer vision and deep learning for brain cancer detection, classification, and treatment planning.", feat: true },
  { i: Dna,      t: "Bioinformatics & Disease Gene Discovery",  d: "Discovering disease genes in PPI networks using centrality and community detection approaches." },
  { i: Brain,    t: "Explainable AI for Healthcare",            d: "Developing interpretable models and network-driven frameworks for factual explainability in biomedical knowledge graphs." },
  { i: Network,  t: "Complex Networks & Knowledge Graphs in Medicine", d: "Multi-layer network analysis, knowledge graph construction (e.g., DbKB for diabetes), and network dynamics in healthcare." },
  { i: BarChart3, t: "Longitudinal Healthcare Datasets",        d: "Processing and modeling longitudinal patient data for chronic disease management and decision support." },
  { i: Droplet,  t: "Blood Sugar Prediction",                   d: "LSTM-based deep learning models for blood glucose forecasting in diabetes care." },
  { i: Layers,   t: "Multi-modal Clinical Data Analysis",       d: "Integrating diverse clinical data sources — imaging, genomic, and structured records — for holistic AI-driven insights." },
];

export function ResearchAreas() {
  return (
    <section id="expertise" className="relative overflow-hidden py-28" style={{ background: "var(--gradient-section)" }}>
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.18 0.07 265) 1px, transparent 1px), linear-gradient(90deg, oklch(0.18 0.07 265) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-electric">Expertise</div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">Research Areas</h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Our work spans a broad spectrum of Medical AI, driven by real clinical challenges.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a, i) => {
            const Icon = a.i;
            return (
              <Reveal key={a.t} delay={(i % 3) * 100}>
                <TiltCard intensity={a.feat ? 7 : 5}>
                  <div
                    className={`group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1.5 hover:shadow-elevate ${
                      a.feat ? "lg:scale-[1.02]" : ""
                    }`}
                  >
                    <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-electric/0 via-electric/40 to-cyan-soft/0 opacity-0 blur-md transition duration-500 group-hover:opacity-100" />
                    <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-electric/15 blur-3xl opacity-0 transition group-hover:opacity-100" />

                    <div className="relative">
                      <div className="relative inline-grid">
                        <div className="absolute inset-0 rounded-2xl bg-electric/20 blur-lg opacity-0 transition group-hover:opacity-100" />
                        <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-royal/15 to-electric/15 text-royal transition group-hover:from-royal group-hover:to-electric group-hover:text-white">
                          <Icon size={24} className="transition group-hover:scale-110" />
                        </div>
                      </div>

                      <h3 className="mt-6 font-display text-lg font-bold leading-snug text-foreground">{a.t}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.d}</p>

                      <div className="mt-6 h-px w-full overflow-hidden bg-border">
                        <div className="h-full w-0 bg-gradient-to-r from-royal via-electric to-cyan-soft transition-all duration-700 group-hover:w-full" />
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
