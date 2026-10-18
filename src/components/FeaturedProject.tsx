import type { Project } from "../data/projects";
import { useLanguage } from "../i18n/context";
import { CheckIcon } from "./icons";
import ProjectImage from "./ProjectImage";
import ProjectLinks from "./ProjectLinks";
import TechBadge from "./TechBadge";

type FeaturedProjectProps = {
  project: Project;
};

export default function FeaturedProject({ project }: FeaturedProjectProps) {
  const { language, text } = useLanguage();
  const highlights = project.highlights?.[language];

  return (
    <article className="group relative grid overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900/70 to-zinc-900/40 shadow-sm transition duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:content-[''] hover:border-green-400/70 hover:shadow-xl hover:shadow-green-500/5 focus-within:border-green-400/70 lg:grid-cols-2">
      <ProjectImage
        project={project}
        variant="featured"
        overlay={
          <span className="absolute left-4 top-4 z-10 rounded-full border border-green-500/40 bg-zinc-950/80 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-green-400 backdrop-blur">
            {text.projects.featuredBadge}
          </span>
        }
      />

      <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
        <h3 className="text-2xl font-bold sm:text-3xl">
          {project.title[language]}
        </h3>

        <p className="mt-4 leading-relaxed text-zinc-400">
          {project.description[language]}
        </p>

        {highlights && highlights.length > 0 && (
          <ul className="mt-6 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-zinc-300">
                <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-green-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li key={tech}>
              <TechBadge name={tech} size="sm" />
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <ProjectLinks project={project} size="lg" />
        </div>
      </div>
    </article>
  );
}
