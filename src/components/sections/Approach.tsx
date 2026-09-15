import { Reveal } from "../Reveal";

const steps = [
  { n: 1, t: "Deep clinical immersion & problem discovery" },
  { n: 2, t: "Domain-driven data acquisition & curation" },
  { n: 3, t: "Targeted AI system design & development" },
  { n: 4, t: "Deployment & continuous clinical validation" },
];

export function Approach() {
  return (
    <section id="approach" className="relative py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-electric">
              Our Philosophy
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Problem Solvers First,
              <br />
              <span className="text-gradient">AI Engineers Second</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                At MAL, we believe meaningful AI starts with understanding the
                problem. We collaborate closely with clinicians, absorb deep
                domain knowledge, and only then design and deploy targeted AI
                systems. This philosophy guides every project we undertake.
              </p>
              <p>
                Our team doesn't just build models — we build solutions rooted
                in real clinical workflows, ensuring our research translates
                directly to patient impact.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="relative">
          {/* connecting line */}
          <div className="absolute left-[1.875rem] top-6 bottom-6 w-px bg-gradient-to-b from-electric via-royal/40 to-transparent" />
          <ul className="space-y-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <li className="group relative flex items-center gap-5 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-elevate">
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 rounded-full bg-electric/30 blur-md opacity-0 transition group-hover:opacity-100" />
                    <div className="relative grid h-14 w-14 place-items-center rounded-full bg-cta text-base font-bold text-white shadow-glow animate-gradient-pan">
                      {s.n}
                    </div>
                  </div>
                  <span className="text-base font-semibold text-foreground">{s.t}</span>
                  <div className="ml-auto h-2 w-2 rounded-full bg-electric opacity-0 transition group-hover:opacity-100" />
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
