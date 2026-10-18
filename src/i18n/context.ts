import { createContext, useContext } from "react";
import type { Dictionary, Language } from "./translations";

export type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  text: Dictionary;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
  }
  return context;
}
