import { getTechPalette } from "../data/techPalette";

type TechBadgeSize = "sm" | "md" | "lg";

type TechBadgeProps = {
  name: string;
  color?: string;
  size?: TechBadgeSize;
  learning?: boolean;
  emphasis?: boolean;
};

const sizeClasses: Record<TechBadgeSize, string> = {
  sm: "gap-1 px-2.5 py-0.5 text-xs",
  md: "gap-1.5 px-3 py-1 text-sm",
  lg: "gap-2 px-3.5 py-1.5 text-sm",
};

export default function TechBadge({
  name,
  color,
  size = "md",
  learning = false,
  emphasis = false,
}: TechBadgeProps) {
  const palette = getTechPalette(color ?? name);

  return (
    <span
      className={[
        "inline-flex items-center rounded-lg border bg-[#F8FAFC] shadow-sm",
        "transition duration-200 motion-reduce:transition-none",
        "hover:-translate-y-0.5 hover:bg-white hover:shadow-md motion-reduce:hover:translate-y-0",
        sizeClasses[size],
        emphasis ? "font-semibold" : "font-medium",
        learning
          ? "border-dashed border-slate-300 text-slate-700"
          : `${palette.border} ${palette.text}`,
      ].join(" ")}
    >
      <span
        aria-hidden="true"
        className={
          learning
            ? "h-2 w-2 shrink-0 rounded-full border border-slate-400 bg-transparent"
            : `h-2 w-2 shrink-0 rounded-full ${palette.dot}`
        }
      />
      {name}
    </span>
  );
}
