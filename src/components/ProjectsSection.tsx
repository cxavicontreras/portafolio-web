import { featuredProjects, secondaryProjects } from "../data/projects";
import { useLanguage } from "../i18n/context";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const { text } = useLanguage();

  return (
    <section
      id="proyectos"
      aria-labelledby="proyectos-titulo"
      className="relative isolate mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_12%,rgba(74,222,128,0.05),transparent_45%)]"
      />

      <div className="mb-12 max-w-2xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-400">
          {text.projects.eyebrow}
        </p>

        <h2 id="proyectos-titulo" className="text-3xl font-bold sm:text-4xl">
          {text.projects.heading}
        </h2>

        <p className="mt-4 text-zinc-400">{text.projects.description}</p>
      </div>

      {featuredProjects.length > 0 && (
        <div className="space-y-8">
          {featuredProjects.map((project) => (
            <FeaturedProject key={project.id} project={project} />
          ))}
        </div>
      )}

      {secondaryProjects.length > 0 && (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {secondaryProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}
