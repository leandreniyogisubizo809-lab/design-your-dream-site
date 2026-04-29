import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/", label: "Index" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 flex items-center justify-between h-16">
        <Link to="/" className="font-display text-2xl tracking-tight font-medium">
          Halftone<span className="text-lime">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-foreground/70 hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground font-medium" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 bg-ink text-cream rounded-full px-5 py-2 text-sm hover:bg-ink/90 transition-colors"
        >
          Start a project
          <span aria-hidden>→</span>
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2"
          aria-label="Menu"
        >
          <div className="w-6 h-px bg-foreground mb-1.5" />
          <div className="w-6 h-px bg-foreground" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-lg font-display"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
