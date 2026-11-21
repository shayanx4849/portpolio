import {
  FiArrowRight,
  FiShield,
  FiShoppingBag,
  FiShoppingCart,
} from "react-icons/fi";
import ProjectCard from "./ProjectCard.jsx";

const PROJECTS = [
  {
    title: "MediVerify AI",
    description:
      "Medicine verification platform for the Pakistani market, pairing a MERN backend with the Gemini API to check authenticity.",
    tech: ["MongoDB", "Express", "React", "Gemini API"],
    preview: "verify",
    Icon: FiShield,
    href: "#",
  },
  {
    title: "Swabi Food Court",
    description:
      "Flutter + Firebase app for Swabi restaurants with customer, business and admin roles, surprise bags, deals and one-time scanner codes for order completion.",
    tech: ["Flutter", "Firebase", "Role-based Auth"],
    preview: "food",
    Icon: FiShoppingBag,
    href: "https://github.com/shayanx4849/swabi-food-court",
  },
  {
    title: "ShopZone",
    description:
      "Cross-platform e-commerce app built with Flutter and a Node/Express/MongoDB backend, delivered with a full defended thesis.",
    tech: ["Flutter", "Node.js", "Express", "MongoDB"],
    preview: "shop",
    Icon: FiShoppingCart,
    href: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs tracking-widest text-accent">
              FEATURED PROJECTS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3">
              Some of My Recent Work
            </h2>
          </div>
          <a
            href="#"
            className="text-sm text-accent hover:brightness-125 transition inline-flex items-center gap-1.5"
          >
            View All Projects <FiArrowRight aria-hidden />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
