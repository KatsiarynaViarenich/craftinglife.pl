import type { Language } from "@/lib/translations";

export const locales: Language[] = ["pl", "uk", "ru", "en"];
export const defaultLocale: Language = "pl";
export const LOCALE_COOKIE = "NEXT_LOCALE";

export function isLocale(value: string): value is Language {
    return (locales as string[]).includes(value);
}

export function localePrefix(locale: Language): string {
    return locale === defaultLocale ? "" : `/${locale}`;
}
