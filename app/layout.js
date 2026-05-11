import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Aelys Systems — Automatisation IA & Business Analyse pour PME suisses',
  description: 'Aelys Systems aide les PME suisses à clarifier leurs processus, identifier les leviers d’amélioration et automatiser intelligemment leurs opérations grâce à l’IA et à une vraie démarche de business analyse.',
  keywords: ['Automatisation IA', 'Business Analyse', 'PME suisses', 'Optimisation des processus', 'Workflow', 'Suisse', 'Aelys Systems'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable}`}>
      <body className="font-sans antialiased bg-[#0A1633] text-white">{children}</body>
    </html>
  )
}
