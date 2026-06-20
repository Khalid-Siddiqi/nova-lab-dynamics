import { ChevronDown, Building2, Stethoscope } from "lucide-react";
import { useState } from "react";
import { Reveal } from "../Reveal";
import { TiltCard } from "../TiltCard";

const collabs = [
  {
    code: "IDEC",
    org: "Indus",
    title: "Diabetic Foot Ulcer & Diabetes Care",
    partner: "Indus Diabetes and Endocrinology Centre (IDEC), Indus Hospital, Karachi, Pakistan",
    lead: "Prof. Dr. Abdul Basit",
    desc: "AI-driven analysis of diabetic foot ulcers, longitudinal patient data, and decision-support tools for diabetes management.",
    icon: Stethoscope,
    details: [
      "Multi-stage DFU detection pipeline",
      "Longitudinal patient cohort modeling",
      "Clinician-in-the-loop validation",
    ],
  },
  {
    code: "AKU",
    org: "Hospital",
    title: "Brain Cancer Diagnostics & Research",
    partner: "Aga Khan University Hospital (AKU), Karachi",
    lead: "Dr. Ather Enam",
    desc: "Deep learning and medical imaging for brain cancer detection, classification, and treatment planning.",
    icon: Building2,
    details: [
      "MRI-based tumor segmentation",
      "Multi-class classification of gliomas",
      "Pre-operative planning support",
    ],
  },
];

export function Collaborations() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="ongoing" className="relative py-28">
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
            Two major clinical partnerships currently driving our research forward.
          </p>
        </Reveal>

        {/* connecting line decoration on lg */}
        <div className="relative mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-px w-24 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-electric via-cyan-soft to-electric md:block" />
          {collabs.map((c, i) => {
            const Icon = c.icon;
            const isOpen = open === i;
            return (
              <Reveal key={c.code} delay={i * 120}>
                <TiltCard intensity={6}>
                  <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:shadow-elevate">
                    <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-electric/0 via-electric/30 to-cyan-soft/0 opacity-0 blur-md transition group-hover:opacity-100" />
                    <div className="relative">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="absolute inset-0 rounded-2xl bg-electric/30 blur-lg opacity-0 transition group-hover:opacity-100" />
                          <div className="relative grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-royal to-electric text-white shadow-glow">
                            <Icon size={26} />
                          </div>
                        </div>
                        <div>
                          <div className="font-display text-sm font-bold text-foreground">{c.code}</div>
                          <div className="text-xs text-muted-foreground">{c.org}</div>
                        </div>
                        <div className="ml-auto flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600">
                          <span className="relative grid h-2 w-2 place-items-center">
                            <span className="absolute h-2 w-2 rounded-full bg-emerald-500 animate-pulse-ring" />
                            <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
                          </span>
                          Active
                        </div>
                      </div>

                      <h3 className="mt-6 font-display text-xl font-bold text-foreground">{c.title}</h3>
                      <p className="mt-2 text-sm font-semibold text-royal">Partner: <span className="text-foreground/80 font-normal">{c.partner}</span></p>
                      <p className="mt-1 text-xs text-muted-foreground">Lead Clinician: {c.lead}</p>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>

                      <button
                        onClick={() => setOpen(isOpen ? null : i)}
                        data-cursor="hover"
                        className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-electric"
                      >
                        {isOpen ? "Hide details" : "View details"}
                        <ChevronDown size={14} className={`transition ${isOpen ? "rotate-180" : ""}`} />
                      </button>

                      <div className={`grid transition-all duration-500 ${isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                        <div className="overflow-hidden">
                          <ul className="space-y-2 rounded-xl border border-border bg-secondary/50 p-4">
                            {c.details.map((d) => (
                              <li key={d} className="flex items-center gap-2 text-sm text-foreground/85">
                                <span className="h-1.5 w-1.5 rounded-full bg-electric" />
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>
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
