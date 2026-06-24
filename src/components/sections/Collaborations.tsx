import { CheckCircle2, Target, Microscope, Users } from "lucide-react";
import { Reveal } from "../Reveal";
import { TiltCard } from "../TiltCard";

const collabs = [
  {
    code: "IDEC",
    org: "Indus Hospital & Health Network (IHHN)",
    title: "AI-Based Diabetic Foot Ulcer Prognosis",
    partner: "Indus Diabetes & Endocrinology Centre (IDEC), Karachi",
    tagline: "Predicting longitudinal healing trajectories before complications escalate.",
    // 1. Replaced 'icon' with 'logo' path
    logo: "public\\images\\indus_logo_1.png", // <-- Update this to your actual Indus logo file name
    accent: "from-royal to-electric",
    focus: [
      "Longitudinal prognostic modeling of DFU healing vs. amputation risk",
      "Time-series tissue velocity tracking (Day 1 to Resolution) using YOLOv11",
      "Predictive treatment pathway recommendations utilizing ConvNeXt",
      "Clinician-in-the-loop API deployment for point-of-care prognosis",
    ],
    impact: [
      { icon: Target, label: "Goal", text: "Reduce diabetic amputations through predictive, data-driven early intervention." },
      { icon: Microscope, label: "Approach", text: "MultiModal Diabetic Foot Ulcer Reasoning (MMDFUR) for time-series prognosis." },
      { icon: Users, label: "Scope", text: "Embedded with IDEC endocrinologists to track long-term patient recovery." },
    ],
  },
  {
    code: "AKU",
    org: "Aga Khan University Hospital",
    title: "Neuro-Oncology Radiomics & Survivability",
    partner: "Aga Khan University Hospital (AKU), Karachi",
    tagline: "Extracting complex imaging biomarkers to predict post-treatment outcomes.",
    // 1. Replaced 'icon' with 'logo' path
    logo: "public\\images\\aku_logo_2.jfif", // <-- Update this to your actual AKU logo file name
    accent: "from-electric to-cyan-soft",
    focus: [
      "High-throughput 3D radiomic feature extraction from structural MRI",
      "Longitudinal survivability prediction and risk modeling",
      "Rigorous clinical validation utilizing survival metrics (C-Index)",
      "Parallelized data pipelines for large-scale heterogeneous datasets",
    ],
    impact: [
      { icon: Target, label: "Goal", text: "Provide neuro-oncologists with quantifiable, AI-driven risk scores for complex gliomas." },
      { icon: Microscope, label: "Approach", text: "Dimensionality reduction and interpretable deep learning architectures." },
      { icon: Users, label: "Scope", text: "Bridging the gap between computational feature extraction and neurosurgical planning." },
    ],
  },
];

export function Collaborations() {
  return (
    <section id="ongoing" className="relative py-28" style={{ background: "var(--gradient-section)" }}>
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-electric">
            Translational AI
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Active Clinical Partnerships
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Two flagship research initiatives currently driving our lab — directly embedded 
            within hospital workflows to transition computational models into bedside decision-support tools.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {collabs.map((c, i) => {
            return (
              <Reveal key={c.code} delay={i * 120}>
                <TiltCard intensity={5}>
                  <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:shadow-elevate md:p-10">
                    <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-electric/0 via-electric/30 to-cyan-soft/0 opacity-0 blur-md transition group-hover:opacity-100" />
                    <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-electric/15 blur-3xl opacity-0 transition duration-700 group-hover:opacity-100" />

                    <div className="relative">
                      <div className="flex items-start gap-5">
                        
                        {/* --- NEW LOGO CONTAINER --- */}
                        <div className="relative shrink-0">
                          {/* Glow effect behind logo */}
                          <div className="absolute inset-0 rounded-2xl bg-electric/30 blur-lg opacity-0 transition group-hover:opacity-100" />
                          
                          {/* Clean white box with object-contain for the hospital logos */}
                          <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-border bg-white shadow-glow p-3">
                            <img 
                              src={c.logo} 
                              alt={`${c.code} Logo`}
                              className="h-full w-full object-contain"
                            />
                          </div>
                        </div>
                        {/* --------------------------- */}

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-display text-base font-bold text-foreground">{c.code}</span>
                            <span className="text-xs text-muted-foreground">· {c.org}</span>
                            <span className="ml-auto inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-600">
                              <span className="relative grid h-2 w-2 place-items-center">
                                <span className="absolute h-2 w-2 rounded-full bg-emerald-500 animate-pulse-ring" />
                                <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
                              </span>
                              Active
                            </span>
                          </div>
                          <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-foreground md:text-[1.7rem]">
                            {c.title}
                          </h3>
                          <p className="mt-2 text-sm font-semibold text-royal">{c.partner}</p>
                          <p className="mt-3 text-base italic leading-relaxed text-foreground/80">
                            “{c.tagline}”
                          </p>
                        </div>
                      </div>

                      <div className="mt-8 grid gap-4 sm:grid-cols-3">
                        {c.impact.map((b) => {
                          const BIcon = b.icon;
                          return (
                            <div key={b.label} className="rounded-2xl border border-border bg-secondary/50 p-4">
                              <div className="flex items-center gap-2 text-electric">
                                <BIcon size={16} />
                                <span className="text-[11px] font-bold uppercase tracking-wider">{b.label}</span>
                              </div>
                              <p className="mt-2 text-xs leading-relaxed text-foreground/80">{b.text}</p>
                            </div>
                          );
                        })}
                      </div>

                      <div className="mt-8">
                        <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                          Methodology & Scope
                        </div>
                        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                          {c.focus.map((d) => (
                            <li key={d} className="flex items-start gap-2.5 text-sm text-foreground/85">
                              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-electric" />
                              <span className="leading-relaxed">{d}</span>
                            </li>
                          ))}
                        </ul>
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