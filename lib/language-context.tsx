"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { translations, type Language, type Translations } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pl");
  const [pendingLanguage, setPendingLanguage] = useState<Language | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language | null;
    if (saved && saved in translations) {
      setLanguageState(saved);
    } else {
      setLanguageState("pl");
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    if (!isTransitioning || pendingLanguage === null) return;

    // use an opacity cross-fade like testimonials but keep a short timing (300ms)
    const fadeOutId = window.setTimeout(() => {
      setLanguageState(pendingLanguage);
      localStorage.setItem("language", pendingLanguage);
      setPendingLanguage(null);
      // small delay to allow DOM update before fading back in
      window.setTimeout(() => setIsTransitioning(false), 10);
    }, 300);

    return () => window.clearTimeout(fadeOutId);
  }, [isTransitioning, pendingLanguage]);

  const setLanguage = (lang: Language) => {
    if (lang === language || pendingLanguage === lang) return;
    setPendingLanguage(lang);
    setIsTransitioning(true);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={`transition-opacity duration-300 ease-in-out ${isTransitioning ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
