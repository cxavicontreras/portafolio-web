import type { Project } from "../data/projects";
import { useLanguage } from "../i18n/context";
import { ExternalLinkIcon, GitHubIcon } from "./icons";

type ProjectLinksProps = {
  project: Project;
  size?: "md" | "lg";
};

export default function ProjectLinks({
  project,
  size = "md",
}: ProjectLinksProps) {
  const { language, text } = useLanguage();

  const base =
    "flex flex-1 items-center justify-center gap-2 rounded-xl font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400";
  const padding = size === "lg" ? "px-5 py-3" : "px-4 py-3";

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={text.projects.demoAria(project.title[language])}
          className={`${base} ${padding} bg-green-500 text-black hover:bg-green-400`}
        >
          <ExternalLinkIcon className="h-4 w-4" />
          {text.projects.liveDemo}
        </a>
      )}

      {project.github && project.github.trim() && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={text.projects.sourceAria(project.title[language])}
          className={`${base} ${padding} border border-zinc-700 hover:border-green-400 hover:text-green-400`}
        >
          <GitHubIcon className="h-4 w-4" />
          {text.projects.sourceCode}
        </a>
      )}
    </div>
  );
}
