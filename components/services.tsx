"use client"

import { Building2, Home, Paintbrush, Factory, Ruler, HardHat, type LucideIcon } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

type ServiceKey = "residential" | "commercial" | "renovation" | "projectManagement" | "design" | "consulting"

const servicesData: { key: ServiceKey; icon: LucideIcon }[] = [
  { key: "residential", icon: Home },
  { key: "commercial", icon: Building2 },
  { key: "renovation", icon: Paintbrush },
  { key: "projectManagement", icon: HardHat },
  { key: "design", icon: Ruler },
  { key: "consulting", icon: Factory },
]

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-widest text-sm mb-4">{t.services.tagline}</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            {t.services.title} <span className="text-primary">{t.services.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.services.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = service.icon
            const serviceTranslation = t.services.items[service.key]
            return (
              <div 
                key={service.key}
                className="bg-card p-8 group hover:bg-primary transition-colors duration-300"
              >
                <Icon className="h-10 w-10 text-primary group-hover:text-primary-foreground transition-colors mb-6" />
                <h3 className="font-serif text-xl text-foreground group-hover:text-primary-foreground transition-colors mb-4">
                  {serviceTranslation.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/80 transition-colors leading-relaxed">
                  {serviceTranslation.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
