"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { motion } from "motion/react"
import { useLanguage } from "@/lib/language-context"

const EASE_OUT = [0.16, 1, 0.3, 1] as const
const VIEWPORT = { once: true, amount: 0, margin: "0px 0px 0px 0px" } as const

export function Contact() {
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.info.call,
      value: "+48 731 997 440 (PL)\n+48 695 846 241 (UA, RU)"
    },
    {
      icon: Mail,
      label: t.contact.info.email,
      value: "kontakt@craftinglife.pl",
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
    <section id="contact" className="py-24 bg-secondary scroll-mt-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <p className="text-primary uppercase tracking-widest text-sm mb-4">{t.contact.tagline}</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            {t.contact.title} <span className="text-primary">{t.contact.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            className="bg-card p-8 md:p-12 shadow-sm mb-12 rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.1 }}
          >
            <h3 className="font-serif text-3xl text-foreground mb-4 text-center">{t.contact.info.title}</h3>
            <p className="text-muted-foreground mb-12 text-center max-w-2xl mx-auto">{t.contact.info.description}</p>

            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((item, index) => {
                const isPhone = item.icon === Phone
                const iconCircle = (
                  <motion.div
                    className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full mb-6"
                    animate={isPhone ? { rotate: [0, -12, 12, -8, 8, 0] } : undefined}
                    transition={isPhone ? { duration: 0.6, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" } : undefined}
                  >
                    <item.icon className="h-8 w-8 text-primary" />
                  </motion.div>
                )

                return (
                  <motion.div
                    key={item.label}
                    className="flex flex-col items-center text-center p-6 bg-primary/5 rounded-2xl transition-colors duration-300 hover:bg-primary/10 hover:shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VIEWPORT}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: EASE_OUT }}
                  >
                    {isPhone ? (
                      <a href="tel:+48731997440" aria-label={item.label} className="rounded-full">
                        {iconCircle}
                      </a>
                    ) : (
                      iconCircle
                    )}
                    <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">
                      {item.label}
                    </p>
                    <p className="text-foreground text-lg font-medium mb-1 break-words" style={{ whiteSpace: "pre-line" }}>
                      {item.value}
                    </p>
                    {item.sublabel && (
                      <p className="text-muted-foreground text-sm">{item.sublabel}</p>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
          {/* 
          <div className="bg-card p-8 flex flex-col items-center justify-center text-center max-w-lg mx-auto rounded-2xl shadow-sm border border-border/50">
            <MapPin className="h-8 w-8 text-primary mb-3" />
            <p className="text-foreground font-medium text-lg">Ulica Oboźna 58/1</p>
            <p className="text-muted-foreground">52-244 Wrocław</p>
            <p className="text-muted-foreground mt-2">NIP: 8992579035</p>
          </div> */}
        </div>
      </div>
    </section>
  )
}
