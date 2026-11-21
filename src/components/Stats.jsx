import { FiBookOpen, FiLayers, FiCode, FiAward } from "react-icons/fi";

const STATS = [
  {
    value: "1+",
    label: "Years Learning",
    note: "Studying CS and building since 2025.",
    Icon: FiBookOpen,
  },
  {
    value: "3+",
    label: "Major Projects",
    note: "Web and mobile apps built end to end.",
    Icon: FiLayers,
  },
  {
    value: "MERN",
    label: "Core Stack",
    note: "MongoDB, Express, React and Node.js. Flutter",
    Icon: FiCode,
  },
  {
    value: "100%",
    label: "Hands-On Delivery",
    note: "Working, documented and demo-ready.",
    Icon: FiAward,
  },
];

export default function Stats() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {STATS.map(({ value, label, note, Icon }) => (
        <div
          key={label}
          className="glass rounded-xl p-5 flex gap-4 items-start hover:shadow-glow transition-shadow"
        >
          <div className="shrink-0 w-12 h-12 rounded-lg bg-purple/20 border border-line flex items-center justify-center text-purple-soft shadow-glow">
            <Icon size={22} aria-hidden />
          </div>
          <div>
            <p className="font-display text-2xl font-semibold leading-none">
              {value}
            </p>
            <p className="text-sm mt-1.5">{label}</p>
            <p className="text-xs text-muted mt-1.5 leading-relaxed">{note}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
