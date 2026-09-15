"use client";

import { createContext, useContext, type ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import { translations, type Language, type Translations } from "./translations";
import { defaultLocale, locales, LOCALE_COOKIE } from "./i18n";
import { navigateWithTransition } from "./view-transition";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function stripLocalePrefix(pathname: string): string {
  const [, maybeLocale, ...rest] = pathname.split("/");
  if ((locales as string[]).includes(maybeLocale) && maybeLocale !== defaultLocale) {
    const remainder = rest.join("/");
    return remainder ? `/${remainder}` : "/";
  }
  return pathname;
}

export function LanguageProvider({ children, locale }: { children: ReactNode; locale: Language }) {
  const router = useRouter();
  const pathname = usePathname();

  const setLanguage = (lang: Language) => {
    if (lang === locale) return;
    const bare = stripLocalePrefix(pathname);
    const prefix = lang === defaultLocale ? "" : `/${lang}`;
    const target = `${prefix}${bare === "/" ? "" : bare}` || "/";
    document.cookie = `${LOCALE_COOKIE}=${lang}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
    navigateWithTransition(() => {
      router.push(target);
    });
  };

  const t = translations[locale] as unknown as Translations;

  return (
    <LanguageContext.Provider value={{ language: locale, setLanguage, t }}>
      {children}
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
