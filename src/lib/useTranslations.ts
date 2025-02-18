"use client"

import { create } from "zustand"
import { translations, type Language } from "./Translations"

type I18nStore = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
  other: Language
}

export const dictionary = {
  en: "English",
  pt: "Português"
}

export const useI18n = create<I18nStore>((set, get) => ({
  language: "pt",
  other: "en",
  setLanguage: (language) => set({ language, other: language === "pt" ? "en" : "pt" }),
  t: (path: string) => {
    const language = get().language
    return path.split(".").reduce((obj, key) => obj[key], translations[language] as any) || path
  },
}))

