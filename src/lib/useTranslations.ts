"use client";

import { create } from "zustand";
import { translations, type Language } from "./Translations";

type I18nStore = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  other: Language;
};

export const dictionary = {
  en: "English",
  pt: "Português",
};

//  guardar el idioma en localStorage para que persista entre sesiones
const storedLanguage = localStorage.getItem("language") as Language;

export const useI18n = create<I18nStore>((set, get) => {
  return {
    language: storedLanguage || "pt",
    other: storedLanguage === "pt" ? "en" : "pt",
    setLanguage: (language) => {
      set({ language, other: language === "pt" ? "en" : "pt" });
      try {
        localStorage.setItem("language", language);
      } catch (e) {
        console.log(e);
      }
    },
    t: (path: string) => {
      const language = get().language;
      return (
        path
          .split(".")
          .reduce((obj, key) => obj[key], translations[language] as any) || path
      );
    },
  };
});
