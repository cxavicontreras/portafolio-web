import type { Project } from "../data/projects";
import { useLanguage } from "../i18n/context";
import { ExternalLinkIcon } from "./icons";

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
    "flex w-full items-center justify-center gap-2 rounded-xl font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400";
  const padding = size === "lg" ? "px-5 py-3" : "px-4 py-3";

  if (!project.demo) {
    return null;
  }

  return (
    <div className="flex">
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
    </div>
  );
}
