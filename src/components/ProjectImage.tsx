import type { ReactNode } from "react";
import type { Project } from "../data/projects";
import { useLanguage } from "../i18n/context";

type ProjectImageProps = {
  project: Project;
  variant?: "card" | "featured";
  overlay?: ReactNode;
};

export default function ProjectImage({
  project,
  variant = "card",
  overlay,
}: ProjectImageProps) {
  const { language } = useLanguage();
  const featured = variant === "featured";

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-zinc-950/80 ${
        featured
          ? "aspect-[3/2] p-5 sm:p-7 lg:aspect-auto lg:h-full lg:p-9"
          : "aspect-[3/2] p-4 sm:p-5"
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(74,222,128,0.08),transparent_60%)]"
      />

      <img
        src={project.image}
        alt={project.imageAlt[language]}
        loading="lazy"
        decoding="async"
        className="relative max-h-full max-w-full rounded-xl object-contain shadow-lg shadow-black/40 ring-1 ring-white/10 transition duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />

      {overlay}
    </div>
  );
}
