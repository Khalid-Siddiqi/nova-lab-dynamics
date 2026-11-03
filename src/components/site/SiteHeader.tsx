import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";

const nav = [
  { to: "/projects", label: "Projects & Products" },
  { to: "/collaborations", label: "Collaborations" },
  { to: "/team", label: "Team" },
  { to: "/publications", label: "Publications" },
  { to: "/news", label: "News & Events" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isActive = (to: string) => pathname === to || pathname.startsWith(`${to}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/images/logo.png"
            alt=""
            className="h-11 w-11 shrink-0 rounded-full object-cover"
          />
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold text-foreground">
              {site.name}
            </span>
            <span className="block text-xs text-muted-foreground">{site.institution}</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent ${
                isActive(item.to)
                  ? "text-foreground underline underline-offset-8"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/collaborate"
            className="ml-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Collaborate With Us
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-md text-foreground hover:bg-accent lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="border-t border-border px-4 pb-4 lg:hidden"
        >
          <ul className="flex flex-col py-2">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-3 text-base font-medium hover:bg-accent ${
                    isActive(item.to) ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/collaborate"
            onClick={() => setOpen(false)}
            className="block rounded-md bg-primary px-4 py-3 text-center text-base font-semibold text-primary-foreground"
          >
            Collaborate With Us
          </Link>
        </nav>
      )}
    </header>
  );
}
