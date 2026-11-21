import { FiCode, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/shayanx4849", Icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shayan-ahmad-b0232b448/",
    Icon: FaLinkedinIn,
  },
  { label: "Twitter / X", href: "#", Icon: FaXTwitter },
  { label: "Email", href: "mailto:shayanx4849@gmail.com", Icon: FiMail },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10 py-10 grid md:grid-cols-3 gap-8 items-center">
        <div className="flex items-center gap-4">
          <a
            href="#home"
            className="flex items-center gap-2 font-display font-semibold"
          >
            <FiCode className="text-accent" aria-hidden /> Shayan Ahmad
          </a>
          <span className="text-xs text-muted">Build · Design · Innovate</span>
        </div>

        <ul className="flex flex-wrap gap-5 text-xs text-muted md:justify-center">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-ink transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex gap-4 md:justify-end">
          {SOCIALS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                className="text-ink/80 hover:text-accent transition-colors"
              >
                <Icon size={18} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-10 py-5 flex flex-wrap justify-between gap-2 text-xs text-muted">
          <span>© 2026 Shayan Ahmad. All rights reserved.</span>
          <span>Better Code · Better Tomorrow</span>
        </div>
      </div>
    </footer>
  );
}
