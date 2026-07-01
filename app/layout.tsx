import type { Metadata } from 'next'
import { DM_Serif_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { siteUrl, siteName, siteDescription, siteImage } from '@/lib/site'
import { Providers } from '@/app/providers'
import './globals.css'

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif"
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteName,
  description: siteDescription,
  keywords: ['wykończenia mieszkań', 'remonty', 'pod klucz', 'craftinglife', 'crafting life', 'budownictwo', 'usługi budowlane', 'wrocław', 'wrocław remonty', 'wrocław wykończenia mieszkań'],
  robots: {
    index: true,
    follow: true,
  },
  generator: 'v0.app',
  openGraph: {
    title: siteName,
    description: siteDescription,
    type: 'website',
    locale: 'pl_PL',
    images: [siteImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" suppressHydrationWarning className={`${dmSerif.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        <Providers>
          {children}
        </Providers>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
