import { useEffect, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { MagneticButton } from "../MagneticButton";


export function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
      el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
    };
    el.addEventListener("mousemove", move);
    return () => el.removeEventListener("mousemove", move);
  }, []);

  // Floating particles (CSS only)
  const particles = Array.from({ length: 22 });

  return (
    <section
      id="home"
      ref={wrapRef}
      // pt-32 keeps the content clear of the fixed navbar (about 108px tall) on short phone screens
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-hero animate-gradient-pan pt-32 pb-16"
    >
      {/* mouse light */}
      <div className="mouse-glow pointer-events-none absolute inset-0" />

      {/* Grid pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / 0.08) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.08) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent 80%)",
        }}
      />

      {/* Floating orbs */}
      <div className="pointer-events-none absolute -left-32 top-32 h-96 w-96 rounded-full bg-electric/40 blur-3xl animate-float" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-[28rem] w-[28rem] rounded-full bg-royal/40 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="pointer-events-none absolute left-1/3 top-10 h-72 w-72 rounded-full bg-cyan-soft/30 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      {/* Particles */}
      {particles.map((_, i) => {
        const left = (i * 37) % 100;
        const delay = (i % 7) * 0.7;
        const size = 2 + (i % 4);
        return (
          <span
            key={i}
            className="pointer-events-none absolute rounded-full bg-cyan-soft"
            style={{
              left: `${left}%`,
              bottom: `-10px`,
              width: size,
              height: size,
              opacity: 0.7,
              animation: `drift ${10 + (i % 5)}s linear infinite`,
              animationDelay: `${delay}s`,
              ["--dx" as never]: `${(i % 2 === 0 ? 1 : -1) * (40 + (i % 60))}px`,
              ["--dy" as never]: `-${600 + (i % 200)}px`,
            }}
          />
        );
      })}

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur animate-fade-up">
          <Sparkles size={14} className="text-cyan-soft" />
          AI Research • GUTECH — Al Ghazali University 
        </div>

        <h1 className="font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-[5.25rem] animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Solving Healthcare
          <br />
          Problems with
          <br />
          <span className="text-gradient inline-block">Domain-Driven AI</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base text-white/75 md:text-lg animate-fade-up" style={{ animationDelay: "0.25s" }}>
          We immerse ourselves in clinical expertise, then build AI solutions that
          make a real difference.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <MagneticButton onClick={() => document.getElementById("research")?.scrollIntoView({ behavior: "smooth" })}>
            Explore Our Research <ArrowRight size={16} />
          </MagneticButton>
          <MagneticButton variant="ghost" onClick={() => document.getElementById("approach")?.scrollIntoView({ behavior: "smooth" })}>
            Our Philosophy
          </MagneticButton>
        </div>

      </div>

      {/* Bottom gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}
