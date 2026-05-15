"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Contact() {
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.info.call,
      value: "+48 731 997 440 (PL)",
      sublabel: "+48 695 846 241 (UA, RU)"
    },
    {
      icon: Mail,
      label: t.contact.info.email,
      value: "kontakt@alt-remonty.pl",
      sublabel: t.contact.info.emailResponse
    },
    {
      icon: Clock,
      label: "Godziny otwarcia",
      value: "Pon. - Pt. 9:00 - 23:00",
      sublabel: "Sob. 9:00 - 17:00"
    },
  ]

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-widest text-sm mb-4">{t.contact.tagline}</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            {t.contact.title} <span className="text-primary">{t.contact.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.contact.description}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card p-8 md:p-12 shadow-sm mb-12 rounded-2xl">
            <h3 className="font-serif text-3xl text-foreground mb-4 text-center">{t.contact.info.title}</h3>
            <p className="text-muted-foreground mb-12 text-center max-w-2xl mx-auto">{t.contact.info.description}</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex flex-col items-center text-center p-8 bg-primary/5 rounded-2xl transition-all duration-300 hover:bg-primary/10 hover:shadow-md hover:-translate-y-1">
                  <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full mb-6">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">
                    {item.label}
                  </p>
                  <p className="text-foreground text-lg font-medium mb-1">
                    {item.value}
                  </p>
                  {item.sublabel && (
                    <p className="text-muted-foreground text-sm">{item.sublabel}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card p-8 flex flex-col items-center justify-center text-center max-w-lg mx-auto rounded-2xl shadow-sm border border-border/50">
            <MapPin className="h-8 w-8 text-primary mb-3" />
            <p className="text-foreground font-medium text-lg">Ulica Oboźna 58/1</p>
            <p className="text-muted-foreground">52-244 Wrocław</p>
            <p className="text-muted-foreground mt-2">NIP: 8992579035</p>
          </div>
        </div>
      </div>
    </section>
  )
}
