"use client";

import { create } from "zustand";
import { translations, type Language } from "./Translations";

// Definimos un tipo para la estructura de las traducciones
export type TranslationsType = typeof translations["pt"];

type I18nStore = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: <T = string>(path: string) => T;
  other: Language;
};

export const dictionary: Record<Language, string> = {
  en: "English",
  pt: "Português",
};

// Guardar el idioma en localStorage para que persista entre sesiones
const storedLanguage: Language | null =
  typeof window !== "undefined" ? (localStorage.getItem("language") as Language | null) : null;

export const useI18n = create<I18nStore>((set, get) => ({
  language: storedLanguage || "pt",
  other: storedLanguage === "en" ? "pt" : "en",
  setLanguage: (language: Language) => {
    set({ language, other: language === "pt" ? "en" : "pt" });
    try {
      localStorage.setItem("language", language);
    } catch (e) {
      console.log(e);
    }
  },
  t: <T = string>(path: string): T => {
    const language = get().language;
    const keys = path.split(".");
    let result: unknown = translations[language] as TranslationsType;
    for (const key of keys) {
      if (result && typeof result === "object" && key in result) {
        result = (result as Record<string, unknown>)[key];
      } else {
        // Si no se encuentra la clave, devolvemos el path (o podrías devolver un valor por defecto)
        return path as unknown as T;
      }
    }
    return result as T;
  },
}));
