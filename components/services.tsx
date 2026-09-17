"use client"

import { Home, Paintbrush, LayoutGrid, Zap, Hammer, Layers, Sun, Tent, Lightbulb, type LucideIcon } from "lucide-react"
import { motion } from "motion/react"
import { useLanguage } from "@/lib/language-context"

const EASE_OUT = [0.16, 1, 0.3, 1] as const
const VIEWPORT = { once: true, amount: 0, margin: "0px 0px 0px 0px" } as const

type ServiceKey = "residential" | "commercial" | "renovation" | "projectManagement" | "design" | "consulting" | "glamping" | "drywall" | "terraces"

const servicesData: { key: ServiceKey; icon: LucideIcon }[] = [
  { key: "residential", icon: Home },              // Wykończenia pod klucz
  { key: "glamping", icon: Tent },                 // Glamping domki
  { key: "projectManagement", icon: Zap },         // Instalacje elektr. i hydr.
  { key: "drywall", icon: Hammer },                // Płyty G-K i murowanie
  { key: "renovation", icon: Paintbrush },         // Gładzie i malowanie
  { key: "commercial", icon: LayoutGrid },         // Prace Glazurnicze (płytki)
  { key: "design", icon: Layers },                 // Podłogi i panele
  { key: "terraces", icon: Sun },                  // Tarasy ogrodowe
  { key: "consulting", icon: Lightbulb },          // Doradztwo
]

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="py-24 bg-secondary scroll-mt-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <p className="text-primary uppercase tracking-widest text-sm mb-4">{t.services.tagline}</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            {t.services.title} <span className="text-primary">{t.services.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.services.description}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon
            const serviceTranslation = t.services.items[service.key]
            return (
              <motion.div
                key={service.key}
                className="bg-card p-8 group hover:bg-primary transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: EASE_OUT }}
              >
                <Icon className="h-10 w-10 text-primary group-hover:text-primary-foreground transition-colors mb-6" />
                <h3 className="font-serif text-xl text-foreground group-hover:text-primary-foreground transition-colors mb-4">
                  {serviceTranslation.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/80 transition-colors leading-relaxed">
                  {serviceTranslation.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
