import { CheckCircle2, Target, Microscope, Users, Footprints, Brain, Handshake, Mail } from "lucide-react";
import { Reveal } from "../Reveal";
import { CONTACT_EMAIL } from "./Contact";
import { TiltCard } from "../TiltCard";

const collabs = [
  {
    code: "DFU",
    icon: Footprints,
    title: "AI-Based Diabetic Foot Ulcer Prognosis",
    collaborator: "Indus Diabetes & Endocrinology Center (IDEC), Indus Hospital & Health Network",
    tagline: "Predicting longitudinal healing trajectories before complications escalate.",
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
      { icon: Users, label: "Scope", text: "Developed with IDEC endocrinologists to track long-term patient recovery." },
    ],
  },
  {
    code: "GLIOMA",
    icon: Brain,
    title: "Neuro-Oncology Radiomics & Survivability",
    collaborator: "Centre of Oncological Research in Surgery (COORS), Aga Khan University Hospital",
    tagline: "Extracting complex imaging biomarkers to predict post-treatment outcomes.",
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

const collaborators = [
  { name: "Indus Hospital & Health Network", logo: "/images/indus_logo_1.png" },
  { name: "Aga Khan University Hospital", logo: "/images/aku_logo_2.jfif" },
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
            Active Research Projects
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Two flagship projects led by the Medical AI Lab, developed in collaboration with clinical
            experts so that our models are shaped by real clinical needs and can grow into bedside
            decision-support tools.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {collabs.map((c, i) => {
            const ProjectIcon = c.icon;
            return (
              <Reveal key={c.code} delay={i * 120}>
                <TiltCard intensity={5}>
                  <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:shadow-elevate md:p-10">
                    <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-electric/0 via-electric/30 to-cyan-soft/0 opacity-0 blur-md transition group-hover:opacity-100" />
                    <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-electric/15 blur-3xl opacity-0 transition duration-700 group-hover:opacity-100" />

                    <div className="relative">
                      <div className="flex items-start gap-5">
                        
                        {/* Project icon */}
                        <div className="relative shrink-0">
                          <div className="absolute inset-0 rounded-2xl bg-electric/30 blur-lg opacity-0 transition group-hover:opacity-100" />
                          <div className={`relative grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${c.accent} text-white shadow-glow`}>
                            <ProjectIcon size={28} />
                          </div>
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-electric">
                              MAL Research Project
                            </span>
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
                          <p className="mt-2 text-sm text-muted-foreground">
                            In collaboration with clinicians at{" "}
                            <span className="font-semibold text-royal">{c.collaborator}</span>
                          </p>
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

        {/* Clinical collaborators: acknowledged separately from the projects themselves */}
        <Reveal delay={200}>
          <div className="mt-14 rounded-3xl border border-border bg-card p-8 md:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-md">
                <div className="flex items-center gap-2 text-electric">
                  <Handshake size={16} />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Clinical Collaborators</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  MAL is a research lab at GUTECH — Al Ghazali University. We are grateful to the
                  clinicians at these institutions who collaborate with us on the projects above.
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Collaboration with the Medical AI Lab")}`}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-electric px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-electric/90"
                >
                  <Mail size={14} />
                  Collaborate with us
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-6">
                {collaborators.map((p) => (
                  <div key={p.name} className="flex items-center gap-3">
                    <div className="grid h-14 w-14 place-items-center rounded-xl border border-border bg-white p-2">
                      <img src={p.logo} alt={`${p.name} logo`} className="h-full w-full object-contain" />
                    </div>
                    <div className="text-sm font-semibold leading-snug text-foreground">{p.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}