import { Building2, Stethoscope, CheckCircle2, Target, Microscope, Users } from "lucide-react";
import { Reveal } from "../Reveal";
import { TiltCard } from "../TiltCard";

const collabs = [
  {
    code: "IDEC",
    org: "Indus Hospital",
    title: "AI-based Diabetic Foot Ulcer Prognosis",
    partner: "Indus Diabetes and Endocrinology Centre (IDEC), Indus Hospital, Karachi",
    tagline: "Predicting healing trajectories before complications escalate.",
    icon: Stethoscope,
    accent: "from-royal to-electric",
    focus: [
      "Multi-stage DFU detection & severity grading pipeline",
      "Prognostic modeling of healing vs. amputation risk",
      "Longitudinal patient cohort tracking & outcome prediction",
      "Clinician-in-the-loop validation at point of care",
    ],
    impact: [
      { icon: Target, label: "Goal", text: "Reduce diabetic amputations through earlier, data-driven intervention." },
      { icon: Microscope, label: "Approach", text: "Vision transformers on serial wound imagery paired with structured clinical metadata." },
      { icon: Users, label: "Scope", text: "Built with and for endocrinologists and podiatrists treating thousands of diabetic patients." },
    ],
  },
  {
    code: "AKU",
    org: "Aga Khan University Hospital",
    title: "Brain Cancer Diagnostics",
    partner: "Aga Khan University Hospital (AKU), Karachi",
    tagline: "Sharper, faster, more confident neuro-oncology decisions.",
    icon: Building2,
    accent: "from-electric to-cyan-soft",
    focus: [
      "MRI-based brain tumor segmentation across modalities",
      "Multi-class classification of gliomas and metastatic lesions",
      "Pre-operative planning support for neurosurgical teams",
      "Radiomic biomarkers for treatment response monitoring",
    ],
    impact: [
      { icon: Target, label: "Goal", text: "Cut time-to-diagnosis and elevate diagnostic confidence in complex brain tumor cases." },
      { icon: Microscope, label: "Approach", text: "3D deep learning on multi-sequence MRI with explainable, clinician-readable outputs." },
      { icon: Users, label: "Scope", text: "Embedded with neurosurgery and radiology teams at one of South Asia's leading hospitals." },
    ],
  },
];

export function Collaborations() {
  return (
    <section id="ongoing" className="relative py-28" style={{ background: "var(--gradient-section)" }}>
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-electric">
            Ongoing Work
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Active Collaborations
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Two flagship clinical partnerships currently driving our research — each embedded
            inside real hospital workflows, solving problems that matter at the bedside.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {collabs.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.code} delay={i * 120}>
                <TiltCard intensity={5}>
                  <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:shadow-elevate md:p-10">
                    <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-electric/0 via-electric/30 to-cyan-soft/0 opacity-0 blur-md transition group-hover:opacity-100" />
                    <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-electric/15 blur-3xl opacity-0 transition duration-700 group-hover:opacity-100" />

                    <div className="relative">
                      <div className="flex items-start gap-5">
                        <div className="relative shrink-0">
                          <div className="absolute inset-0 rounded-2xl bg-electric/30 blur-lg opacity-0 transition group-hover:opacity-100" />
                          <div className={`relative grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br ${c.accent} text-white shadow-glow`}>
                            <Icon size={34} />
                          </div>
                        </div>
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
                          What we are building
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
