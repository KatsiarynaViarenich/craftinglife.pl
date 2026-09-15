"use client";

import { ReactNode } from "react";
import { LanguageProvider } from "@/lib/language-context";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ViewTransitionNav } from "@/components/view-transition-nav";
import type { Language } from "@/lib/translations";

export function Providers({ children, locale }: { children: ReactNode; locale: Language }) {
  return (
    <LanguageProvider locale={locale}>
      <SmoothScroll />
      <ViewTransitionNav />
      {children}
    </LanguageProvider>
  );
}
