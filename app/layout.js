import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const SITE_URL = 'https://aelyssystems.ch'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Aelys Systems — Automatisation IA, Business Analyse & Développement métier pour PME suisses',
    template: '%s | Aelys Systems',
  },
  description:
    'Aelys Systems aide les PME suisses à clarifier leurs processus, automatiser intelligemment leurs opérations et développer des applications métier sur mesure (web, mobile, desktop) grâce à l’IA et à une vraie démarche de business analyse.',
  keywords: [
    'Automatisation IA',
    'Business Analyse',
    'Développement web',
    'Développement mobile',
    'Application desktop',
    'PME suisses',
    'Optimisation des processus',
    'Workflow automatisé',
    'Suisse romande',
    'Aelys Systems',
    'Transformation digitale',
    'Lausanne',
    'Genève',
  ],
  authors: [{ name: 'Aelys Systems' }],
  creator: 'Aelys Systems',
  publisher: 'Aelys Systems',
  category: 'Technology',
  alternates: {
    canonical: '/',
    languages: {
      'fr-CH': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_CH',
    url: SITE_URL,
    siteName: 'Aelys Systems',
    title: 'Aelys Systems — Automatisation IA & Business Analyse pour PME suisses',
    description:
      'Aelys Systems transforme les processus métier des PME suisses en systèmes clairs, automatisés et intelligents grâce à l’IA, la business analyse et le développement sur mesure.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aelys Systems — Automatisation IA & Business Analyse pour PME suisses',
    description:
      'Aelys Systems transforme les processus métier des PME suisses en systèmes clairs, automatisés et intelligents.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  verification: {
    // google: 'YOUR_GOOGLE_SITE_VERIFICATION_TOKEN',
  },
}

export const viewport = {
  themeColor: '#0A1633',
  width: 'device-width',
  initialScale: 1,
}

// JSON-LD structured data for Organization
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Aelys Systems',
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  email: 'info@aelyssystems.ch',
  description:
    'Automatisation IA, Business Analyse et Développement métier pour PME suisses.',
  areaServed: {
    '@type': 'Country',
    name: 'Switzerland',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CH',
    addressRegion: 'Suisse romande',
  },
  sameAs: [],
}

const jsonLdWebsite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Aelys Systems',
  url: SITE_URL,
  inLanguage: 'fr-CH',
}

const jsonLdServices = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Aelys Systems',
  url: SITE_URL,
  serviceType: [
    'Automatisation IA',
    'Business Analyse',
    'Développement métier (web, mobile, desktop)',
  ],
  areaServed: 'Suisse',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr-CH" className={`${inter.variable}`}>
      <head>
        <link rel="canonical" href={SITE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdServices) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#0A1633] text-white">{children}</body>
    </html>
  )
}
