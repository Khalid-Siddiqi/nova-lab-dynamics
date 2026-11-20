import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, ExternalLink } from "lucide-react";
import { Reveal } from "../Reveal";
import { TiltCard } from "../TiltCard";

const team = [
  {
    name: "Dr. Rauf Ahmed Shams Malick",
    role: "Lab Director",
    title: "Professor & Chairman, Computer Science, GUTECH · Principal Investigator",
    bio: "Over 20 years pioneering AI research, data science, and digital transformation in healthcare.",
    photo: "/images/Dr_Rauf.avif",
    badge: "Lab Director",
    route: "/team/rauf",
  },
  {
    name: "Ms. Sumra Khan",
    role: "Faculty Researcher",
    title: "Department of Computer Science, GUTECH · Faculty Researcher",
    bio: "Researcher in responsible and explainable AI for medical imaging, deep learning, and healthcare informatics.",
    photo: "/images/Sumra_Khan.jpg",
    badge: "Faculty Researcher",
    route: "/team/sumra",
  },
  {
    name: "Khalid Khurshid Siddiqui",
    role: "Research Assistant, Medical AI",
    title: "Research Assistant, Medical AI",
    bio: "AI Engineer building clinician-centered solutions for real-world healthcare challenges.",
    photo: "/images/Khalid_Khurshid_Siddiqui.jpg",
    badge: "Researcher",
    route: "/team/khalid",
  },
];

export function Team() {
  return (
    <section id="team" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-electric">
            Our People
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">Team</h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Meet the researchers driving innovation at MAL
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((p, i) => (
            <Reveal key={p.name} delay={i * 140}>
              <Link to={p.route} className="block">
                <TiltCard intensity={5}>
                  <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-elevate">
                    <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-electric/0 via-cyan-soft/30 to-electric/0 opacity-0 blur-md transition duration-500 group-hover:opacity-100" />
                    <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-electric/15 blur-3xl opacity-0 transition group-hover:opacity-100" />

                    <div className="relative flex flex-col items-center text-center">
                      {/* avatar */}
                        <div className="relative">
                          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-royal via-electric to-cyan-soft opacity-70 blur-md transition group-hover:opacity-100 animate-gradient-pan" />
                          <div className="relative h-32 w-32 overflow-hidden rounded-full bg-gradient-to-br from-navy-deep to-royal shadow-elevate">
                            <img
                              src={p.photo}
                              alt={p.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                          {p.badge}
                        </span>
                      </div>

                      <h3 className="mt-8 font-display text-xl font-bold text-foreground">{p.name}</h3>
                      <p className="mt-1 text-sm font-semibold text-royal">{p.title}</p>
                      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">{p.bio}</p>

                      <div className="mt-6 flex items-center gap-2">
                        {[Linkedin, Mail, ExternalLink].map((Icon, ix) => (
                          <button
                            key={ix}
                            data-cursor="hover"
                            aria-label="contact link"
                            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-secondary/60 text-muted-foreground transition hover:border-electric hover:bg-electric/10 hover:text-electric"
                          >
                            <Icon size={16} />
                          </button>
                        ))}
                      </div>

                      <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-electric transition group-hover:gap-2">
                        View full profile <ExternalLink size={12} />
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
