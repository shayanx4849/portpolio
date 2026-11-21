import { FiArrowRight } from "react-icons/fi";
import ProjectPreview from "./ProjectPreview.jsx";

export default function ProjectCard({
  title,
  description,
  tech,
  preview,
  Icon,
  href,
}) {
  return (
    <article className="group glass rounded-xl overflow-hidden hover:-translate-y-1.5 hover:shadow-glow transition-all duration-300">
      <div className="relative h-44 bg-gradient-to-br from-purple/25 via-bg-secondary to-accent/10 flex items-center justify-center overflow-hidden">
        <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-purple/30 border border-line flex items-center justify-center text-purple-soft">
          <Icon size={18} aria-hidden />
        </div>
        <div className="w-full flex justify-center transition-transform duration-500 group-hover:scale-105">
          <ProjectPreview variant={preview} />
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display font-semibold">{title}</h3>
        <p className="text-muted text-sm mt-2 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((t) => (
            <span
              key={t}
              className="text-[11px] text-accent bg-accent/10 border border-accent/20 rounded px-2 py-1"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={href}
          className="inline-flex items-center gap-2 mt-5 rounded-md border border-accent/50 px-4 py-2 text-sm font-medium group-hover:bg-accent/15 group-hover:brightness-125 transition"
        >
          View Project <FiArrowRight aria-hidden />
        </a>
      </div>
    </article>
  );
}
