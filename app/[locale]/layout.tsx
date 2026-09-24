import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { DM_Serif_Display, Inter } from 'next/font/google'
import { siteUrl, siteImage } from '@/lib/site'
import { translations, type Language } from '@/lib/translations'
import { locales, defaultLocale, isLocale, localePrefix } from '@/lib/i18n'
import { Providers } from '@/app/providers'
import '../globals.css'

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif"
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

const ogLocales: Record<Language, string> = {
  pl: 'pl_PL',
  uk: 'uk_UA',
  ru: 'ru_RU',
  en: 'en_US',
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const { meta } = translations[locale];

  const languageAlternates = Object.fromEntries(
    locales.map((l) => [l, `${siteUrl}${localePrefix(l)}`])
  );

  return {
    metadataBase: new URL(siteUrl),
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${siteUrl}${localePrefix(locale)}`,
      languages: {
        ...languageAlternates,
        'x-default': `${siteUrl}${localePrefix(defaultLocale)}`,
      },
    },
    generator: 'v0.app',
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
      locale: ogLocales[locale],
      images: [siteImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [siteImage],
    },
    icons: {
      icon: [
        {
          url: '/icon.svg',
          media: '(prefers-color-scheme: light)',
        },
        {
          url: '/icon.svg',
          media: '(prefers-color-scheme: dark)',
        },
        {
          url: '/icon.svg',
          type: 'image/png',
        },
      ],
      apple: '/icon.svg',
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) {
    notFound();
  }
  const locale = rawLocale;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${siteUrl}${localePrefix(locale)}/#business`,
    name: 'Crafting Life',
    url: `${siteUrl}${localePrefix(locale)}`,
    image: `${siteUrl}${siteImage}`,
    telephone: '+48731997440',
    email: 'kontakt@craftinglife.pl',
    priceRange: '$$',
    vatID: 'PL8992579035',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Oboźna 58/1',
      postalCode: '52-244',
      addressLocality: 'Wrocław',
      addressCountry: 'PL',
    },
    areaServed: 'Wrocław',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '23:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/CraftingLifePL/',
      'https://www.instagram.com/craftinglife.pl/',
    ],
  };

  return (
    <html lang={locale} suppressHydrationWarning className={`${dmSerif.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers locale={locale}>
          {children}
        </Providers>
      </body>
    </html>
  )
}
