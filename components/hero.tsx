"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center bg-foreground">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-building.png"
          alt="Modern building exterior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl">
          <p className="text-primary-foreground uppercase tracking-widest text-sm mb-6">
            {t.hero.tagline}
          </p>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-background/95 leading-tight mb-8">
            <span className="block">{t.hero.title}</span>
            <span className="block">{t.hero.titleHighlight}</span>
          </h1>

          <p className="text-background/90 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="uppercase tracking-wide bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="#projects">
                {t.hero.ctaSecondary}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="uppercase tracking-wide"
            >
              <Link href="#contact">
                {t.hero.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="font-serif text-3xl md:text-4xl text-primary">15+</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">{t.hero.stats.years}</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl md:text-4xl text-primary">200+</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">{t.hero.stats.projects}</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl md:text-4xl text-primary">7</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">{t.hero.stats.countries}</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl md:text-4xl text-primary">2</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">{t.hero.stats.warranty}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
