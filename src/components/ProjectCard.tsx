import type { Project } from "../data/projects";
import { useLanguage } from "../i18n/context";
import ProjectImage from "./ProjectImage";
import ProjectLinks from "./ProjectLinks";
import TechBadge from "./TechBadge";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { language, text } = useLanguage();

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900/70 to-zinc-900/40 shadow-sm transition duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:content-[''] hover:-translate-y-1 hover:border-green-400/70 hover:shadow-xl hover:shadow-green-500/5 focus-within:border-green-400/70 motion-reduce:hover:translate-y-0">
      <ProjectImage project={project} />

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold">{project.title[language]}</h3>

        <div className="mt-3 flex-1">
          <p className="leading-relaxed text-zinc-400">
            {project.description[language]}
          </p>

          {project.focus && (
            <p className="mt-3 text-sm leading-relaxed text-zinc-500">
              <span className="font-medium text-zinc-400">
                {text.projects.focusLabel}:{" "}
              </span>
              {project.focus[language]}
            </p>
          )}
        </div>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li key={tech}>
              <TechBadge name={tech} size="sm" />
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}
