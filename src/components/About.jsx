import { FiArrowRight } from "react-icons/fi";
import Stats from "./Stats.jsx";

export default function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10 py-20 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
        <div>
          <span className="inline-block text-xs font-mono text-accent bg-accent/10 rounded px-2.5 py-1">
            ABOUT ME
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-5 leading-tight">
            I'm passionate about creating digital solutions.
          </h2>
          <p className="text-muted mt-5 leading-relaxed max-w-[50ch]">
            I'm a Computer Science student at the University of Swabi, finishing
            my degree with the 2022–2026 cohort. I love turning ideas into real
            products — from a MongoDB schema to a shipped, demo-ready interface
            — with a focus on clean code, performance and user-friendly
            experiences.
          </p>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 mt-7 rounded-lg border border-accent/50 px-5 py-3 text-sm font-medium hover:bg-accent/10 transition"
          >
            Learn More About Me <FiArrowRight aria-hidden />
          </a>
        </div>
        <Stats />
      </div>
    </section>
  );
}
