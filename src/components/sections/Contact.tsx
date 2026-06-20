import { Mail, MapPin, Send } from "lucide-react";
import { Reveal } from "../Reveal";
import { MagneticButton } from "../MagneticButton";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-hero py-28 text-white">
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-electric/30 blur-3xl animate-float" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-royal/30 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-soft">
              Contact
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
              Let's build the future of <span className="text-gradient">healthcare AI</span> together.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-md text-white/75">
              Interested in collaborating, joining the lab, or learning more about our research?
              Reach out — we'd love to hear from you.
            </p>
          </Reveal>

          <Reveal delay={220} className="mt-10 space-y-4">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-cta shadow-glow">
                <Mail size={18} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-white/60">Email</div>
                <div className="text-sm font-semibold">medical.ai.lab@gutech.edu.pk</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-cta shadow-glow">
                <MapPin size={18} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-white/60">Location</div>
                <div className="text-sm font-semibold">GUTECH — Ghazali University, Karachi, Pakistan</div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl"
          >
            <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-electric/0 via-electric/30 to-cyan-soft/0 opacity-60 blur-md" />
            <div className="relative space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <Field label="Name" placeholder="Dr. Jane Doe" />
                <Field label="Affiliation" placeholder="Institution" />
              </div>
              <Field label="Email" placeholder="you@university.edu" type="email" />
              <Field label="Topic" placeholder="Collaboration, research interest..." />
              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-wider text-white/60">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project or area of interest..."
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-electric focus:bg-white/10"
                />
              </div>
              <MagneticButton className="w-full justify-center">
                Send Message <Send size={14} />
              </MagneticButton>
            </div>
          </form>
        </Reveal>
      </div>

      <div className="relative mt-24 border-t border-white/10 pt-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-xs text-white/60 sm:flex-row">
          <div>© {new Date().getFullYear()} Medical AI Lab (M.A.L.) — GUTECH</div>
          <div>Ghazali University School of Technology · Karachi, Pakistan</div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-wider text-white/60">{label}</label>
      <input
        {...rest}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-electric focus:bg-white/10"
      />
    </div>
  );
}
