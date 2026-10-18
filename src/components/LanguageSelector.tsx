import { useLanguage } from "../i18n/context";
import type { Language } from "../i18n/translations";

const options = [
  { code: "es", label: "ES", ariaKey: "languageOptionEs" },
  { code: "en", label: "EN", ariaKey: "languageOptionEn" },
] as const satisfies readonly {
  code: Language;
  label: string;
  ariaKey: "languageOptionEs" | "languageOptionEn";
}[];

type LanguageSelectorProps = {
  className?: string;
};

export default function LanguageSelector({
  className,
}: LanguageSelectorProps) {
  const { language, setLanguage, text } = useLanguage();

  return (
    <div
      role="group"
      aria-label={text.a11y.languageSelector}
      className={[
        "inline-flex items-center rounded-lg border border-zinc-800 bg-zinc-900/60 p-0.5",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {options.map((option) => {
        const isActive = language === option.code;

        return (
          <button
            key={option.code}
            type="button"
            onClick={() => setLanguage(option.code)}
            aria-pressed={isActive}
            aria-label={text.a11y[option.ariaKey]}
            className={[
              "rounded-md px-2.5 py-1 text-xs font-semibold uppercase tracking-wide transition",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400",
              isActive
                ? "bg-green-500 text-black"
                : "text-zinc-300 hover:text-green-400",
            ].join(" ")}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
