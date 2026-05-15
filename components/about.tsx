"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

type HighlightKey = "licensed" | "safety" | "warranty" | "sustainable"

const highlightKeys: HighlightKey[] = ["licensed", "safety", "warranty", "sustainable"]

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] relative">
              <Image
                src="/images/project-residential.png"
                alt="Our team at work"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-primary p-8 max-w-xs hidden lg:block">
              <p className="font-serif text-5xl text-primary-foreground mb-2">15+</p>
              <p className="text-primary-foreground/80 uppercase tracking-wide text-sm">
                {t.hero.stats.years}
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <p className="text-primary uppercase tracking-widest text-sm mb-4">{t.about.tagline}</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              {t.about.title} <span className="text-primary">{t.about.titleHighlight}</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>{t.about.description}</p>
              <p>{t.about.descriptionSecondary}</p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlightKeys.map((key) => (
                <div key={key} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{t.about.highlights[key]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
