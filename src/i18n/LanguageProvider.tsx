import { useCallback, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { LanguageContext } from "./context";
import type { LanguageContextValue } from "./context";
import {
  defaultLanguage,
  isLanguage,
  STORAGE_KEY,
  translations,
} from "./translations";
import type { Language } from "./translations";

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return defaultLanguage;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLanguage(stored)) return stored;
  } catch {
    // El acceso a localStorage puede fallar (modo privado); se ignora.
  }

  const browserLanguages =
    window.navigator.languages ?? [window.navigator.language];
  for (const candidate of browserLanguages) {
    const code = candidate.slice(0, 2).toLowerCase();
    if (isLanguage(code)) return code;
  }

  return defaultLanguage;
}

function setMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Si no se puede persistir, el idioma sigue funcionando en memoria.
    }
  }, [language]);

  useEffect(() => {
    const { title, description, ogLocale } = translations[language].meta;

    document.documentElement.lang = language;
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:locale", ogLocale);
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({ language, setLanguage, text: translations[language] }),
    [language, setLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
