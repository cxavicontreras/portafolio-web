export type TechPalette = {
  border: string;
  text: string;
  dot: string;
};

const fallback: TechPalette = {
  border: "border-zinc-300",
  text: "text-zinc-700",
  dot: "bg-zinc-400",
};

const palettes: Record<string, TechPalette> = {
  react: {
    border: "border-cyan-400",
    text: "text-cyan-900",
    dot: "bg-cyan-500",
  },
  typescript: {
    border: "border-blue-400",
    text: "text-blue-900",
    dot: "bg-blue-500",
  },
  javascript: {
    border: "border-amber-400",
    text: "text-amber-900",
    dot: "bg-amber-500",
  },
  "tailwind css": {
    border: "border-teal-400",
    text: "text-teal-900",
    dot: "bg-teal-500",
  },
  html5: {
    border: "border-orange-400",
    text: "text-orange-900",
    dot: "bg-orange-500",
  },
  css3: {
    border: "border-sky-400",
    text: "text-sky-900",
    dot: "bg-sky-500",
  },
  css: {
    border: "border-sky-400",
    text: "text-sky-900",
    dot: "bg-sky-500",
  },
  git: {
    border: "border-orange-500",
    text: "text-orange-900",
    dot: "bg-orange-600",
  },
  github: {
    border: "border-slate-400",
    text: "text-slate-800",
    dot: "bg-slate-600",
  },
  java: {
    border: "border-red-500",
    text: "text-red-900",
    dot: "bg-red-600",
  },
  "spring boot": {
    border: "border-green-500",
    text: "text-green-900",
    dot: "bg-green-600",
  },
  "c#": {
    border: "border-violet-400",
    text: "text-violet-900",
    dot: "bg-violet-500",
  },
  "sql server": {
    border: "border-rose-500",
    text: "text-rose-900",
    dot: "bg-rose-600",
  },
};

export function getTechPalette(name: string): TechPalette {
  return palettes[name.trim().toLowerCase()] ?? fallback;
}
