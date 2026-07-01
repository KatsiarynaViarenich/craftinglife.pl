"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  const { t } = useLanguage()

  const footerLinks = {
    services: [
      { label: t.services.items.residential.title, href: "#services" },
      { label: t.services.items.glamping.title, href: "#services" },
      { label: t.services.items.projectManagement.title, href: "#services" },
      { label: t.services.items.drywall.title, href: "#services" },
      { label: t.services.items.renovation.title, href: "#services" },
      { label: t.services.items.commercial.title, href: "#services" },
      { label: t.services.items.design.title, href: "#services" },
      { label: t.services.items.terraces.title, href: "#services" },
      { label: t.services.items.consulting.title, href: "#services" },
    ],
    company: [
      { label: t.nav.about, href: "#about" },
      { label: t.nav.portfolio, href: "#projects" },
      { label: t.nav.testimonials, href: "#testimonials" },
      { label: t.nav.contact, href: "#contact" },
    ],
  }

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-serif tracking-tight">
              Crafting Life
            </Link>
            <p className="mt-4 text-background/70 leading-relaxed">
              {t.footer.description}
            </p>
            {/* <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 border border-background/30 flex items-center justify-center hover:bg-background/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div> */}
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg mb-4">{t.footer.services}</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg mb-4">{t.footer.contactInfo}</h4>
            <ul className="space-y-3 text-background/70 text-sm">
              <li>Oboźna 58/1</li>
              <li>52-244 Wrocław</li>
              <li>NIP: 8992579035</li>
              <li className="pt-2">+48 731 997 440 (PL)</li>
              <li>+48 695 846 241 (UA, RU)</li>
              <li>kontakt@craftinglife.pl</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Crafting Life. {t.footer.rights}
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-background/60 hover:text-background transition-colors">
              {t.footer.links.privacy}
            </Link>
            <Link href="/terms" className="text-background/60 hover:text-background transition-colors">
              {t.footer.links.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
