import { useEffect, useState } from "react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-bg/85 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1240px] flex items-center justify-between h-[72px] px-6 lg:px-10">
        <a
          href="#home"
          className="flex items-center gap-2 font-display font-semibold text-lg"
        >
          <span className="text-accent">&lt;/&gt;</span>
          Shayan Ahmad
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-muted">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative py-1 hover:text-ink transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-brand hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium shadow-glow hover:brightness-110 transition"
        >
          Hire Me <span aria-hidden>→</span>
        </a>

        <button
          className="md:hidden p-2 text-ink"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`h-[2px] bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-[2px] bg-ink transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-[2px] bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-line px-6 py-4 flex flex-col gap-1">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 border-b border-line/60 text-muted hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 text-center rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium"
          >
            Hire Me →
          </a>
        </div>
      )}
    </header>
  );
}
