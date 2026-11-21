import { FiMonitor, FiServer, FiTool } from "react-icons/fi";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiTailwindcss,
  SiFigma,
  SiFlutter,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const GROUPS = [
  {
    title: "Frontend Development",
    GroupIcon: FiMonitor,
    items: [
      { name: "React.js", Icon: SiReact, color: "#61DAFB", pct: 90 },
      {
        name: "JavaScript / TypeScript",
        Icon: SiJavascript,
        color: "#F7DF1E",
        pct: 88,
      },
      { name: "HTML / CSS", Icon: SiHtml5, color: "#E34F26", pct: 92 },
    ],
  },
  {
    title: "Backend Development",
    GroupIcon: FiServer,
    items: [
      {
        name: "Node.js / Express",
        Icon: SiNodedotjs,
        color: "#5FA04E",
        pct: 85,
      },
      { name: "REST APIs", Icon: TbApi, color: "#A78BFA", pct: 82 },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248", pct: 80 },
    ],
  },
  {
    title: "Tools & Others",
    GroupIcon: FiTool,
    items: [
      { name: "Git & GitHub", Icon: SiGit, color: "#F05032", pct: 90 },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8", pct: 88 },
      { name: "Flutter / Figma", Icon: SiFlutter, color: "#54C5F8", pct: 75 },
    ],
  },
];

function Bar({ name, Icon, color, pct }) {
  return (
    <div className="mb-5 last:mb-0">
      <div className="flex items-center justify-between text-sm mb-2">
        <span className="flex items-center gap-2 text-ink/90">
          <Icon size={16} color={color} aria-hidden /> {name}
        </span>
        <span className="text-muted font-mono text-xs">{pct}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-brand animate-growBar"
          style={{ "--bar-width": `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs tracking-widest text-purple-soft">
              MY SKILLS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3">
              Technologies I Master
            </h2>
          </div>
          <p className="text-muted text-sm max-w-[45ch] sm:text-right">
            I work with modern technologies to build fast, scalable and
            user-friendly web and mobile applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {GROUPS.map(({ title, GroupIcon, items }) => (
            <div
              key={title}
              className="glass rounded-xl p-6 hover:shadow-glow transition-shadow"
            >
              <h3 className="flex items-center gap-3 font-display font-medium mb-6">
                <span className="text-accent">
                  <GroupIcon size={22} aria-hidden />
                </span>
                {title}
              </h3>
              {items.map((it) => (
                <Bar key={it.name} {...it} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
