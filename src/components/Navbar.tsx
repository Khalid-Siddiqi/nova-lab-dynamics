import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "ongoing", label: "Research Projects" },
  { id: "approach", label: "Approach" },
  { id: "research", label: "Latest Research" },
  { id: "team", label: "Team" },
  { id: "expertise", label: "Expertise" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${
          scrolled
            ? "glass-dark mx-4 border-white/10 shadow-elevate"
            : "bg-transparent"
        }`}
      >
        {/* INCREASED GAP: gap-2.5 -> gap-3 */}
        <button onClick={() => scrollTo("home")} className="flex items-center gap-3 text-left group">
          
          {/* INCREASED LOGO SIZE: h-14 w-14 */}
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full shadow-glow transition duration-300 group-hover:shadow-elevate">
            <img
              src="/images/logo.png"
              alt="Medical AI Lab Logo"
              className="h-full w-full object-cover"
            />
          </div>
          
          <div className="leading-tight">
            {/* INCREASED TEXT SIZE: text-sm -> text-base */}
            <div className="font-display text-base font-bold text-white">Medical AI Lab (MAL)</div>
            <div className="text-[10px] uppercase tracking-widest text-white/60">
              GUTECH — Al Ghazali University
            </div>
          </div>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              data-cursor="hover"
              className="group relative rounded-full px-3.5 py-1.5 text-xs font-medium text-white/75 transition hover:text-white"
            >
              {l.label}
              <span
                className={`absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-electric to-cyan-soft transition-transform duration-300 group-hover:scale-x-100 ${
                  active === l.id ? "scale-x-100" : ""
                }`}
              />
            </button>
          ))}
        </nav>

        {/* FIXED MOBILE MENU SIZE: back to h-10 w-10 so it's not huge */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-full text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="mx-4 mt-2 rounded-3xl glass-dark p-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className={`rounded-xl px-4 py-2.5 text-left text-sm font-medium text-white/85 transition hover:bg-white/10 ${
                  active === l.id ? "bg-white/10" : ""
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}