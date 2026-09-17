"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "motion/react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { CountUp } from "@/components/count-up"

const EASE_OUT = [0.16, 1, 0.3, 1] as const

const heroContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const heroItem = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE_OUT } },
}

export function Hero() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-30, 30])

  return (
    <section ref={sectionRef} className="relative min-h-[100dvh] flex flex-col bg-foreground overflow-hidden">
      <motion.div style={{ y: parallaxY }} className="absolute -inset-y-16 inset-x-0 z-0">
        <Image
          src="/images/hero-building.png"
          alt={t.hero.imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      <div className="container mx-auto px-6 pt-32 pb-16 relative z-10 flex-grow flex flex-col justify-center">
        <motion.div
          className="max-w-4xl"
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={heroItem}
            className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-background leading-tight mb-8"
          >
            <span className="block">{t.hero.title}</span>
          </motion.p>

          <motion.h1
            variants={heroItem}
            className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-background leading-tight mb-8"
          >
            <span className="block">{t.hero.titleHighlight}</span>
          </motion.h1>

          <motion.div variants={heroItem} className="border-l-4 border-primary pl-5 sm:pl-6 mb-8">
            <p className="text-background/90 text-lg md:text-xl max-w-xl text-background/70 leading-relaxed">
              {t.hero.description}
            </p>
          </motion.div>

          <motion.div
            variants={heroItem}
            className="flex flex-wrap items-center gap-3 text-background/90 text-base md:text-lg mb-10 font-medium tracking-wide"
          >
            <span>{t.hero.location}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-background/95 shrink-0"></span>
            <span>{t.hero.phone}</span>
          </motion.div>

          <motion.div variants={heroItem} className="flex flex-col sm:flex-row gap-4">
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
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <div className="relative left-0 right-0 z-20 bg-background/95 backdrop-blur-sm border-t border-border/10">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <CountUp end={13} duration={1.5} className="font-serif text-3xl md:text-4xl text-primary" />
              <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">{t.hero.stats.years}</p>
            </div>
            <div className="text-center">
              <CountUp end={200} suffix="+" duration={1.8} className="font-serif text-3xl md:text-4xl text-primary" />
              <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">{t.hero.stats.projects}</p>
            </div>
            <div className="text-center">
              <CountUp end={7} duration={1.4} className="font-serif text-3xl md:text-4xl text-primary" />
              <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">{t.hero.stats.countries}</p>
            </div>
            <div className="text-center">
              <CountUp end={2} duration={1.4} className="font-serif text-3xl md:text-4xl text-primary" />
              <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">{t.hero.stats.warranty}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
