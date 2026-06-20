import { Award, BookOpen, ExternalLink, Users } from "lucide-react";
import { Reveal } from "../Reveal";
import { TiltCard } from "../TiltCard";

export function Publications() {
  return (
    <section id="research" className="relative overflow-hidden py-28" style={{ background: "var(--gradient-section)" }}>
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-electric/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-royal/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-electric">
            Latest Research
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Highlighted Publication
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            The first research publication produced entirely under the Medical AI Lab at GUTECH.
          </p>
        </Reveal>

        <Reveal delay={220} className="mt-12">
          <TiltCard intensity={4} className="group">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-elevate md:p-12">
              {/* glow border */}
              <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-r from-electric/0 via-electric/40 to-cyan-soft/0 opacity-0 blur-md transition duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                    <Award size={14} /> Accepted at AIiH 2026 — Imperial College London
                  </div>
                  <div className="ml-auto hidden items-center gap-2 text-xs text-muted-foreground md:flex">
                    <BookOpen size={14} /> Conference Paper
                  </div>
                </div>

                <h3 className="mt-6 font-display text-2xl font-bold leading-snug text-foreground md:text-3xl">
                  A Deep Learning Pipeline for Diabetic Foot Ulcer Detection and Stage Classification
                </h3>

                <div className="mt-6 space-y-2 text-sm">
                  <p>
                    <span className="font-semibold text-foreground">Authors: </span>
                    <span className="text-foreground/85">
                      Rauf Ahmed Shams Mallick¹, Khalid Khurshid Siddiqui¹, Muhammad Khurshid Siddiqui², Abdul Basit³
                    </span>
                  </p>
                  <p className="italic text-muted-foreground">
                    ¹ GUTECH, Pakistan; ² Dow University of Health Sciences (DUHS), Pakistan; ³ Indus Diabetes and
                    Endocrinology Center (IDEC), Pakistan
                  </p>
                  <p className="text-muted-foreground">Accepted at AIiH 2026, Imperial College London</p>
                </div>

                {/* stats */}
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    { l: "Venue", v: "AIiH 2026" },
                    { l: "Tier", v: "International" },
                    { l: "Authors", v: "4" },
                    { l: "Status", v: "Accepted" },
                  ].map((s) => (
                    <div key={s.l} className="rounded-xl border border-border bg-secondary/60 p-3">
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
                      <div className="mt-0.5 text-sm font-bold text-foreground">{s.v}</div>
                    </div>
                  ))}
                </div>

                {/* reading progress (decorative) */}
                <div className="mt-8 flex items-center gap-3">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
                    <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-royal via-electric to-cyan-soft" />
                  </div>
                  <span className="text-xs text-muted-foreground">Abstract • 75%</span>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <button
                    data-cursor="hover"
                    className="inline-flex items-center gap-2 rounded-full bg-cta px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:shadow-elevate"
                  >
                    Read Publication <ExternalLink size={14} />
                  </button>
                  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs text-muted-foreground">
                    <Users size={14} /> First publication produced entirely under M.A.L.
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}
