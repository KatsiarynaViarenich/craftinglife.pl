"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

export default function PrivacyPolicy() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-6 py-32 max-w-4xl">
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
          {t.privacyPage.title}
        </h1>
        
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl text-foreground font-semibold mb-4">{t.privacyPage.sections["1"].title}</h2>
            <p>{t.privacyPage.sections["1"].content}</p>
          </section>

          <section>
            <h2 className="text-xl text-foreground font-semibold mb-4">{t.privacyPage.sections["2"].title}</h2>
            <p>{t.privacyPage.sections["2"].content}</p>
          </section>

          <section>
            <h2 className="text-xl text-foreground font-semibold mb-4">{t.privacyPage.sections["3"].title}</h2>
            <p>{t.privacyPage.sections["3"].content}</p>
          </section>

          <div className="p-6 bg-secondary mt-12 border-l-4 border-primary">
            <h3 className="font-semibold text-foreground mb-2">{t.privacyPage.contactBox.title}</h3>
            <p>{t.privacyPage.contactBox.content}</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
