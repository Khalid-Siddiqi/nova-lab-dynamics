import { Droplet, Shield, Hourglass } from "lucide-react";
import { Reveal } from "../Reveal";

const items = [
  {
    icon: Droplet,
    title: "Blood Cancer Diagnostics & Research",
    partner: "Indus Hospital, Karachi — Blood Cancer Department",
    desc: "Developing AI-powered diagnostic tools for hematological malignancies, leveraging deep learning on blood smear and flow cytometry data to accelerate detection and classification of blood cancers.",
    status: "In Discussion",
    progress: 35,
  },
  {
    icon: Shield,
    title: "Autoimmune Disease Research",
    partner: "Indus Hospital, Karachi — Autoimmune Diseases Department",
    desc: "Building AI models to analyze complex autoimmune disease patterns, predict flares, and support clinical decision-making for conditions such as lupus, rheumatoid arthritis, and other systemic autoimmune disorders.",
    status: "In Discussion",
    progress: 45,
  },
];

export function Upcoming() {
  return (
    <section id="upcoming" className="relative py-28" style={{ background: "var(--gradient-section)" }}>
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-electric">
            On The Horizon
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Upcoming Collaborations
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            New partnerships in development that will expand the reach of our research.
          </p>
        </Reveal>

        <div className="relative mt-14">
          {/* timeline rail */}
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-electric via-royal/40 to-transparent md:left-1/2" />

          <div className="space-y-8">
            {items.map((it, i) => {
              const Icon = it.icon;
              const right = i % 2 === 1;
              return (
                <Reveal key={it.title} delay={i * 120}>
                  <div className={`relative grid items-center gap-4 md:grid-cols-2 ${right ? "md:[&>*:first-child]:order-2" : ""}`}>
                    {/* dot */}
                    <div className="absolute left-6 top-8 grid h-4 w-4 -translate-x-1/2 place-items-center md:left-1/2">
                      <span className="absolute h-4 w-4 rounded-full bg-electric/40 animate-pulse-ring" />
                      <span className="relative h-3 w-3 rounded-full bg-electric ring-4 ring-background" />
                    </div>

                    <div className={`pl-12 md:pl-0 ${right ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                      <div className={`inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700`}>
                        <Hourglass size={12} />
                        {it.status}
                      </div>
                      <div className="mt-2 text-xs text-muted-foreground">Estimated kickoff Q3 — Q4</div>
                    </div>

                    <div className={`pl-12 md:pl-12 ${right ? "md:pl-0 md:pr-12" : ""}`}>
                      <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-elevate">
                        <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-electric/0 via-electric/30 to-cyan-soft/0 opacity-0 blur-md transition group-hover:opacity-100" />
                        <div className="relative">
                          <div className="flex items-center gap-4">
                            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-royal to-electric text-white shadow-glow">
                              <Icon size={20} />
                            </div>
                            <h3 className="font-display text-lg font-bold text-foreground">{it.title}</h3>
                          </div>
                          <p className="mt-3 text-sm font-semibold text-royal">{it.partner}</p>
                          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>

                          <div className="mt-5">
                            <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-muted-foreground">
                              <span>Collaboration in progress</span>
                              <span>{it.progress}%</span>
                            </div>
                            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-royal via-electric to-cyan-soft transition-all duration-1000"
                                style={{ width: `${it.progress}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
