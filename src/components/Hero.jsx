import { useState } from "react";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";

// Icons only (no text labels). `label` is used for accessibility.
const TECH = [
  { label: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { label: "CSS3", Icon: SiCss, color: "#1572B6" },
  { label: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { label: "React", Icon: SiReact, color: "#61DAFB" },
  { label: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { label: "Express", Icon: SiExpress, color: "#E2E8F0" },
  { label: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { label: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
  { label: "Git", Icon: SiGit, color: "#F05032" },
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-20 lg:pt-44 lg:pb-28">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left */}
        <div className="animate-fadeUp">
          <span className="inline-block text-xs font-mono text-purple-soft bg-purple/10 border border-line rounded-md px-3 py-1.5 mb-6">
            MERN Stack Developer
          </span>

          <h1 className="font-display text-5xl sm:text-6xl font-bold leading-[1.05]">
            Hi, I'm <span className="text-gradient">Shayan</span>
          </h1>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-1">
            I build things for the web.
          </h2>

          <p className="mt-6 text-muted max-w-[48ch] leading-relaxed">
            I'm a passionate web developer specializing in building modern, fast
            and scalable full-stack applications with clean code and great user
            experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-brand px-6 py-3.5 font-medium shadow-glow hover:brightness-110 transition"
            >
              View My Work <FiArrowRight aria-hidden />
            </a>
            <a
              href="/Shayan-CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-accent/50 px-6 py-3.5 font-medium hover:bg-accent/10 transition"
            >
              Download CV <FiDownload aria-hidden />
            </a>
          </div>

          <div className="mt-10">
            <p className="text-xs tracking-widest text-accent/80 mb-4">
              TECHNOLOGIES I WORK WITH
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-4">
              {TECH.map(({ label, Icon, color }) => (
                <li
                  key={label}
                  title={label}
                  className="transition hover:-translate-y-1 hover:drop-shadow-[0_0_10px_rgba(124,58,237,0.6)]"
                >
                  <Icon size={34} color={color} aria-label={label} role="img" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex justify-start lg:justify-center min-h-[380px]">
          <div className="absolute top-4 right-8 sm:right-20 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full bg-gradient-to-br from-purple to-accent opacity-40 blur-2xl animate-float" />
          <div className="absolute top-2 right-0 w-24 h-24 dotted-grid opacity-40" />

          <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] overflow-hidden">
            <img
              src="../public/hero.jpg"
              alt="Shayan, MERN stack developer"
              className="w-full h-full rounded-full object-cover object-center"
            />
          </div>

          <div className="hidden sm:block absolute top-0 -right-2 lg:-right-4 glass rounded-xl px-4 py-3 font-mono text-[11px] leading-relaxed text-muted shadow-glow animate-float">
            <div className="flex justify-between mb-2">
              <span className="flex gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-soft" />
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
              </span>
            </div>
            <div className="text-muted/70">// build something great</div>
            <div>
              <span className="text-purple-soft">const</span> developer = {"{"}
            </div>
            <div className="pl-3">
              passion: <span className="text-accent">'development'</span>
            </div>
            <div className="pl-3">
              stack: [<span className="text-accent">'MongoDB'</span>,{" "}
              <span className="text-accent">'Express'</span>,
            </div>
            <div className="pl-6">
              <span className="text-accent">'React'</span>,{" "}
              <span className="text-accent">'Node.js'</span>,
              {/* <span className="text-accent">'Flutter'</span>], */}
            </div>
            <div className="pl-3">
              goal: <span className="text-accent">'ship real products'</span>
            </div>
            <div>{"};"}</div>
          </div>

          <div className="hidden lg:block absolute bottom-14 left-0 -rotate-6 font-display italic text-purple-soft">
            Let's Build!
            <svg
              width="40"
              height="28"
              viewBox="0 0 40 28"
              fill="none"
              className="mt-1 ml-6"
              aria-hidden
            >
              <path
                d="M2 2 C 6 22, 24 26, 36 16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M30 14 L37 16 L33 22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
