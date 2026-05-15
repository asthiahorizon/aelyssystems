'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import {
  ArrowRight, ArrowUpRight, Workflow, Database, Eye, GitBranch, Sparkles, LineChart,
  ClipboardList, Map, ListChecks, Rocket, RefreshCw, FileSpreadsheet, Mail, BrainCircuit,
  Bell, BarChart3, Calculator, Users, Cog, ShieldCheck, Layers, Compass, CheckCircle2,
  Menu, X, Zap, Network, FileText, Bot, MessageSquare, Send, Phone, MapPin, Linkedin,
  Code2, Smartphone, Monitor, Boxes, Globe
} from 'lucide-react'

/* ---------- i18n dictionary ---------- */
const dict = {
  fr: {
    nav: {
      brandTag: 'Swiss · IA & Business Analyse',
      home: 'Accueil', expertise: 'Expertise', automation: 'Automatisation IA',
      ba: 'Business Analyse', dev: 'Développement', method: 'Méthode', contact: 'Contact',
      cta: 'Discuter de votre projet',
    },
    hero: {
      badge: 'Automatisation IA · Business Analyse · Développement métier',
      title1: 'Automatisation IA,', titleHl: 'business analyse', title2: ' et développement métier pour les PME suisses',
      subtitle: 'Aelys Systems aide les petites et moyennes entreprises à clarifier leurs processus, identifier les leviers d’amélioration, automatiser les tâches répétitives et développer des applications métier sur mesure — web, mobile et desktop — adaptées à leur réalité terrain.',
      cta1: 'Planifier un échange', cta2: 'Découvrir l’approche',
      stat1v: '3', stat1l: 'expertises',
      stat2v: '40h+', stat2l: 'gagnées / mois',
      stat3v: '100%', stat3l: 'sur-mesure PME',
      hubLabel: 'Workflow · Aelys', live: 'Live', iaHub: 'IA Hub',
      n1: 'Excel', n2: 'Emails', n3: 'CRM', n4: 'Rapports', n5: 'Alertes', n6: 'Dashboard',
      barLeft: '12 tâches automatisées aujourd’hui', barRight: '+ 8h gagnées',
    },
    problem: {
      eyebrow: 'Le constat',
      title: 'Vos processus fonctionnent, mais ils pourraient être plus fluides',
      desc: 'Dans beaucoup de PME, les équipes jonglent avec des fichiers Excel, des emails, des outils non connectés, des tâches manuelles et des informations dispersées. Cela crée de la perte de temps, des erreurs, des doublons et une difficulté à avoir une vision claire de l’activité. Aelys Systems intervient pour comprendre votre fonctionnement réel, structurer vos processus et mettre en place des automatisations utiles, sans complexifier votre organisation.',
      c: [
        { t: 'Tâches répétitives', d: 'Saisies multiples, traitements manuels et copier-coller chronophages au quotidien.' },
        { t: 'Données dispersées', d: 'Informations éclatées entre fichiers, emails, outils et tableaux non connectés.' },
        { t: 'Manque de visibilité', d: 'Difficulté à avoir une vue claire de l’activité, des indicateurs et de la performance.' },
        { t: 'Processus rigides', d: 'Processus difficiles à faire évoluer lorsque l’organisation change ou grandit.' },
      ],
    },
    expertise: {
      eyebrow: 'Expertise',
      title: 'Une triple expertise : business analyse, automatisation IA et développement métier',
      subtitle: 'Une vision complète, de l’analyse à la mise en œuvre : comprendre, automatiser et développer les outils dont vos équipes ont vraiment besoin.',
      block: 'Bloc',
      ba: { title: 'Business Analyse', desc: 'Aelys Systems analyse vos processus métier de manière structurée afin de comprendre comment l’information circule, où se trouvent les blocages et quelles améliorations peuvent générer un impact concret. L’objectif est de transformer un fonctionnement parfois informel en une vision claire, documentée et optimisable.', points: ['Analyse des processus existants','Cartographie des flux métier','Identification des irritants et pertes de temps','Recueil des besoins utilisateurs','Formalisation des exigences fonctionnelles','Recommandations concrètes et priorisées'] },
      ia: { title: 'Automatisation IA', desc: 'Aelys Systems conçoit des automatisations adaptées aux besoins des PME : traitement de données, génération de documents, synchronisation d’outils, notifications intelligentes, assistants IA internes ou workflows automatisés. L’objectif n’est pas d’ajouter de la technologie pour la technologie, mais de libérer du temps et de fiabiliser les opérations.', points: ['Automatisation de tâches répétitives','Connexion entre outils existants','Workflows intelligents','Intégration d’outils IA','Tableaux de suivi et reporting','Optimisation progressive des processus'] },
      dev: { title: 'Développement métier', desc: 'Aelys Systems conçoit et développe des applications sur mesure — web, mobile et desktop — pour répondre précisément aux besoins de vos équipes. Quand les outils du marché ne suffisent plus, nous créons des solutions robustes, évolutives et parfaitement intégrées à vos processus.', points: ['Applications web sur mesure','Applications mobiles (iOS, Android)','Logiciels desktop métier','Intégrations API & services tiers','Interfaces internes et portails clients','Maintenance et évolutions continues'], tags: ['Web', 'Mobile', 'Desktop'] },
    },
    services: {
      eyebrow: 'Services',
      title: 'Des solutions concrètes pour simplifier votre quotidien',
      subtitle: 'Six leviers concrets pour structurer, fluidifier, automatiser et développer intelligemment votre organisation — sans sur-ingénierie.',
      items: [
        { t: 'Analyse et cartographie des processus', d: 'Comprendre vos processus actuels, visualiser les flux d’information et identifier les zones de friction.' },
        { t: 'Optimisation opérationnelle', d: 'Simplifier les étapes inutiles, réduire les doublons et structurer des processus plus efficaces.' },
        { t: 'Automatisation des workflows', d: 'Automatiser les tâches répétitives entre vos outils : formulaires, CRM, emails, documents, bases de données ou plateformes métier.' },
        { t: 'Intégration IA pour PME', d: 'Mettre en place des assistants IA, des systèmes de génération de contenu, d’analyse de données ou d’aide à la décision.' },
        { t: 'Développement d’applications métier', d: 'Concevoir et développer des applications web, mobiles et desktop sur mesure, parfaitement alignées avec vos processus et vos équipes.' },
        { t: 'Intégrations & connecteurs', d: 'Connecter vos outils existants (CRM, ERP, comptabilité, e-commerce…) via des API et des connecteurs robustes.' },
      ],
    },
    method: {
      eyebrow: 'Méthode',
      title: 'Une approche simple, progressive et orientée résultats',
      subtitle: 'Cinq étapes claires pour transformer vos processus en systèmes fiables et automatisés.',
      stepLabel: 'Étape',
      steps: [
        { t: 'Comprendre', d: 'Analyse de votre organisation, de vos outils, de vos contraintes et de vos objectifs.' },
        { t: 'Cartographier', d: 'Modélisation des processus existants et identification des points de blocage.' },
        { t: 'Prioriser', d: 'Sélection des améliorations et automatisations les plus utiles selon leur impact et leur faisabilité.' },
        { t: 'Déployer', d: 'Mise en place progressive des solutions, avec validation à chaque étape.' },
        { t: 'Améliorer', d: 'Suivi, ajustements et optimisation continue selon les retours terrain.' },
      ],
    },
    why: {
      eyebrow: 'Pourquoi Aelys Systems',
      title: 'Pourquoi travailler avec Aelys Systems ?',
      subtitle: 'Aelys Systems combine une vision métier, une compréhension des réalités des PME et une capacité technique à transformer les idées en solutions concrètes. L’approche est pragmatique, humaine et orientée impact.',
      args: [
        { t: 'Compréhension métier avant la technologie', d: 'Nous écoutons vos équipes, comprenons votre réalité et seulement ensuite choisissons les bons outils.' },
        { t: 'Solutions adaptées aux PME suisses', d: 'Une approche calibrée pour la taille, la culture et les exigences de qualité des entreprises romandes.' },
        { t: 'Automatisation utile, pas inutilement complexe', d: 'Pas de sur-ingénierie. Des solutions ciblées qui apportent une valeur immédiate et mesurable.' },
        { t: 'Accompagnement de l’analyse au déploiement', d: 'Un interlocuteur unique de bout en bout : analyse, design, mise en œuvre et amélioration continue.' },
      ],
    },
    cases: {
      eyebrow: 'Cas d’usage',
      title: 'Exemples d’automatisations possibles',
      subtitle: 'Un aperçu concret de ce que nous pouvons mettre en place pour vous, selon vos outils et votre métier.',
      label: 'Cas',
      items: [
        'Génération automatique de rapports',
        'Création de documents à partir de formulaires',
        'Synchronisation entre CRM, emails et outils internes',
        'Analyse automatique de demandes clients',
        'Suivi de projets et notifications intelligentes',
        'Tableaux de bord pour la direction',
        'Préparation de données pour la comptabilité',
        'Assistants IA internes pour les équipes',
      ],
    },
    cta: {
      badge: 'Premier échange · sans engagement',
      title1: 'Et si vos processus devenaient plus ', titleHl: 'simples, plus clairs et plus intelligents', title2: ' ?',
      desc: 'Discutons de votre organisation, de vos outils actuels et des automatisations qui pourraient réellement vous faire gagner du temps.',
      bullets: ['Échange téléphone ou visio', 'Suisse romande · à distance ou sur site'],
      formTitle: 'Planifier un premier échange', formSub: 'Réponse sous 24h ouvrées.',
      labels: { name: 'Nom *', email: 'Email *', company: 'Entreprise', phone: 'Téléphone', message: 'Votre projet *' },
      ph: { name: 'Jean Dupont', email: 'jean@entreprise.ch', company: 'Votre PME', phone: '+41 …', message: 'Décrivez brièvement vos processus actuels et ce que vous souhaitez améliorer.' },
      submit: 'Planifier un premier échange', sending: 'Envoi en cours…',
      ok: 'Merci, votre demande a bien été reçue. Nous vous répondons sous 24h.',
      errMissing: 'Champs requis manquants',
    },
    footer: {
      desc: 'Automatisation IA, Business Analyse & Développement métier pour PME suisses. Nous transformons vos processus métier en systèmes clairs, automatisés et intelligents, et développons les applications dont vos équipes ont vraiment besoin.',
      nav: 'Navigation', contact: 'Contact', region: 'Suisse romande',
      rights: '© 2025 Aelys Systems. Tous droits réservés.',
      tagline: 'Conçu en Suisse · Pensé pour les PME',
    },
  },
  en: {
    nav: {
      brandTag: 'Swiss · AI & Business Analysis',
      home: 'Home', expertise: 'Expertise', automation: 'AI Automation',
      ba: 'Business Analysis', dev: 'Development', method: 'Method', contact: 'Contact',
      cta: 'Discuss your project',
    },
    hero: {
      badge: 'AI Automation · Business Analysis · Custom Development',
      title1: 'AI automation,', titleHl: 'business analysis', title2: ' and custom development for Swiss SMEs',
      subtitle: 'Aelys Systems helps small and medium businesses clarify their processes, identify improvement opportunities, automate repetitive tasks and build custom business applications — web, mobile and desktop — tailored to their daily reality.',
      cta1: 'Book a call', cta2: 'Discover our approach',
      stat1v: '3', stat1l: 'expertises',
      stat2v: '40h+', stat2l: 'saved / month',
      stat3v: '100%', stat3l: 'tailored to SMEs',
      hubLabel: 'Workflow · Aelys', live: 'Live', iaHub: 'AI Hub',
      n1: 'Excel', n2: 'Emails', n3: 'CRM', n4: 'Reports', n5: 'Alerts', n6: 'Dashboard',
      barLeft: '12 tasks automated today', barRight: '+ 8h saved',
    },
    problem: {
      eyebrow: 'The reality',
      title: 'Your processes work, but they could be much smoother',
      desc: 'In many SMEs, teams juggle Excel files, emails, disconnected tools, manual tasks and scattered information. This creates wasted time, errors, duplicates and makes it hard to get a clear view of the business. Aelys Systems steps in to understand how you really work, structure your processes and implement useful automations — without making your organisation more complex.',
      c: [
        { t: 'Repetitive tasks', d: 'Multiple data entries, manual handling and time-consuming copy-paste every day.' },
        { t: 'Scattered data', d: 'Information spread across files, emails, tools and disconnected spreadsheets.' },
        { t: 'Lack of visibility', d: 'Difficulty getting a clear view of activity, KPIs and overall performance.' },
        { t: 'Rigid processes', d: 'Processes that are hard to evolve when the organisation changes or grows.' },
      ],
    },
    expertise: {
      eyebrow: 'Expertise',
      title: 'A triple expertise: business analysis, AI automation and custom development',
      subtitle: 'A complete vision, from analysis to delivery: understand, automate and build the tools your teams truly need.',
      block: 'Block',
      ba: { title: 'Business Analysis', desc: 'Aelys Systems analyses your business processes in a structured way to understand how information flows, where bottlenecks sit and which improvements can deliver real impact. The goal is to turn sometimes informal ways of working into a clear, documented and optimisable vision.', points: ['Analysis of existing processes','Business flow mapping','Identification of pain points and time losses','User needs gathering','Functional requirements formalisation','Concrete, prioritised recommendations'] },
      ia: { title: 'AI Automation', desc: 'Aelys Systems designs automations tailored to SME needs: data processing, document generation, tool synchronisation, smart notifications, internal AI assistants or automated workflows. The point isn’t to add tech for its own sake, but to free up time and make operations more reliable.', points: ['Automation of repetitive tasks','Connecting your existing tools','Smart workflows','AI tools integration','Tracking dashboards and reporting','Progressive process optimisation'] },
      dev: { title: 'Custom Development', desc: 'Aelys Systems designs and builds custom applications — web, mobile and desktop — to precisely match your teams’ needs. When off-the-shelf tools aren’t enough, we deliver robust, scalable solutions perfectly integrated with your processes.', points: ['Custom web applications','Mobile apps (iOS, Android)','Desktop business software','API & third-party integrations','Internal tools and customer portals','Maintenance and continuous evolution'], tags: ['Web', 'Mobile', 'Desktop'] },
    },
    services: {
      eyebrow: 'Services',
      title: 'Concrete solutions to simplify your day-to-day',
      subtitle: 'Six practical levers to structure, streamline, automate and intelligently grow your organisation — without over-engineering.',
      items: [
        { t: 'Process analysis and mapping', d: 'Understand your current processes, visualise information flows and identify friction zones.' },
        { t: 'Operational optimisation', d: 'Remove unnecessary steps, reduce duplicates and structure more efficient processes.' },
        { t: 'Workflow automation', d: 'Automate repetitive tasks across your tools: forms, CRM, emails, documents, databases or business platforms.' },
        { t: 'AI integration for SMEs', d: 'Roll out AI assistants, content generation systems, data analysis or decision support tools.' },
        { t: 'Custom business apps development', d: 'Design and build custom web, mobile and desktop apps perfectly aligned with your processes and your teams.' },
        { t: 'Integrations & connectors', d: 'Connect your existing tools (CRM, ERP, accounting, e-commerce…) with robust APIs and connectors.' },
      ],
    },
    method: {
      eyebrow: 'Method',
      title: 'A simple, progressive, results-driven approach',
      subtitle: 'Five clear steps to turn your processes into reliable and automated systems.',
      stepLabel: 'Step',
      steps: [
        { t: 'Understand', d: 'We analyse your organisation, tools, constraints and objectives.' },
        { t: 'Map', d: 'We model existing processes and pinpoint bottlenecks.' },
        { t: 'Prioritise', d: 'We pick the most useful improvements and automations based on impact and feasibility.' },
        { t: 'Deliver', d: 'We roll out solutions progressively, with validation at each step.' },
        { t: 'Improve', d: 'We monitor, adjust and optimise continuously based on real feedback.' },
      ],
    },
    why: {
      eyebrow: 'Why Aelys Systems',
      title: 'Why work with Aelys Systems?',
      subtitle: 'Aelys Systems combines a business mindset, a real understanding of SMEs and the technical ability to turn ideas into concrete solutions. The approach is pragmatic, human and impact-oriented.',
      args: [
        { t: 'Business first, technology second', d: 'We listen to your teams, understand your reality, then choose the right tools.' },
        { t: 'Solutions tailored for Swiss SMEs', d: 'An approach calibrated for the size, culture and quality standards of Swiss businesses.' },
        { t: 'Useful automation, never overly complex', d: 'No over-engineering. Targeted solutions that deliver immediate, measurable value.' },
        { t: 'Support from analysis to delivery', d: 'One single point of contact end-to-end: analysis, design, implementation and continuous improvement.' },
      ],
    },
    cases: {
      eyebrow: 'Use cases',
      title: 'Examples of automations we can build',
      subtitle: 'A concrete overview of what we can set up for you, based on your tools and your industry.',
      label: 'Case',
      items: [
        'Automatic report generation',
        'Document creation from forms',
        'Sync between CRM, emails and internal tools',
        'Automated analysis of customer requests',
        'Project tracking and smart notifications',
        'Management dashboards',
        'Data preparation for accounting',
        'Internal AI assistants for your teams',
      ],
    },
    cta: {
      badge: 'First call · no commitment',
      title1: 'What if your processes became ', titleHl: 'simpler, clearer and smarter', title2: '?',
      desc: 'Let’s talk about your organisation, your current tools and the automations that could truly save you time.',
      bullets: ['Phone or video call', 'Switzerland · remote or on-site'],
      formTitle: 'Book a first call', formSub: 'Reply within 24 business hours.',
      labels: { name: 'Name *', email: 'Email *', company: 'Company', phone: 'Phone', message: 'Your project *' },
      ph: { name: 'John Smith', email: 'john@company.ch', company: 'Your company', phone: '+41 …', message: 'Briefly describe your current processes and what you’d like to improve.' },
      submit: 'Book a first call', sending: 'Sending…',
      ok: 'Thank you, your request was received. We’ll get back to you within 24h.',
      errMissing: 'Required fields missing',
    },
    footer: {
      desc: 'AI Automation, Business Analysis & Custom Development for Swiss SMEs. We turn your business processes into clear, automated and intelligent systems, and build the apps your teams really need.',
      nav: 'Navigation', contact: 'Contact', region: 'Switzerland',
      rights: '© 2025 Aelys Systems. All rights reserved.',
      tagline: 'Crafted in Switzerland · Built for SMEs',
    },
  },
}

/* ---------- Reveal-on-scroll hook ---------- */
function useReveal(lang) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [lang])
}

/* ---------- Language switcher ---------- */
function LangSwitch({ lang, setLang }) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-0.5">
      {['fr', 'en'].map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-2.5 py-1 text-[11px] uppercase tracking-wider rounded-full transition-colors ${
            lang === l ? 'bg-white text-aelys-night font-semibold' : 'text-white/60 hover:text-white'
          }`}
          aria-label={`Switch to ${l.toUpperCase()}`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

/* ---------- Header ---------- */
function Header({ t, lang, setLang }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: t.nav.home, href: '#accueil' },
    { label: t.nav.expertise, href: '#expertise' },
    { label: t.nav.automation, href: '#automatisation' },
    { label: t.nav.ba, href: '#business-analyse' },
    { label: t.nav.dev, href: '#developpement' },
    { label: t.nav.method, href: '#methode' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-aelys-night/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between gap-4">
        <a href="#accueil" className="flex items-center gap-2.5 group">
          <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-aelys-royal to-aelys-blue grid place-items-center shadow-soft">
            <div className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
            <Zap className="h-4.5 w-4.5 text-white" strokeWidth={2.2} />
          </div>
          <div className="leading-tight">
            <div className="text-white font-semibold tracking-tight text-[17px]">Aelys Systems</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-aelys-sky/80">{t.nav.brandTag}</div>
          </div>
        </a>

        <nav className="hidden xl:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="px-3 py-2 text-[13px] text-white/70 hover:text-white transition-colors rounded-md hover:bg-white/5">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LangSwitch lang={lang} setLang={setLang} />
          <Button asChild className="bg-white text-aelys-night hover:bg-aelys-ice hover:text-aelys-night rounded-full px-5 h-10 font-medium shadow-soft">
            <a href="#contact">{t.nav.cta} <ArrowRight className="ml-1.5 h-4 w-4" /></a>
          </Button>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <LangSwitch lang={lang} setLang={setLang} />
          <button onClick={() => setOpen(!open)} className="p-2 rounded-md text-white/80 hover:bg-white/5" aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/5 bg-aelys-night/95 backdrop-blur-xl">
          <div className="container mx-auto py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-[15px] text-white/80 hover:text-white hover:bg-white/5 rounded-md">
                {l.label}
              </a>
            ))}
            <Button asChild className="mt-3 bg-white text-aelys-night hover:bg-aelys-ice rounded-full">
              <a href="#contact" onClick={() => setOpen(false)}>{t.nav.cta}</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

/* ---------- Hero ---------- */
function Hero({ t }) {
  return (
    <section id="accueil" className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28">
      <div className="absolute inset-0 bg-gradient-to-b from-aelys-night via-aelys-deep to-aelys-night" />
      <div className="absolute inset-0 bg-grid opacity-[0.7]" />
      <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-aelys-royal/25 blur-[120px] animate-pulse-soft" />
      <div className="absolute -top-10 right-0 h-[380px] w-[380px] rounded-full bg-aelys-electric/20 blur-[120px] animate-float-slow" />
      <div className="absolute bottom-0 left-1/3 h-[260px] w-[260px] rounded-full bg-aelys-sky/10 blur-[100px]" />

      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 reveal">
            <Badge className="bg-white/[0.06] hover:bg-white/[0.08] text-aelys-sky border border-white/10 rounded-full px-3.5 py-1.5 font-medium">
              <Sparkles className="h-3.5 w-3.5 mr-1.5" />
              {t.hero.badge}
            </Badge>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] font-semibold tracking-tight text-white">
              {t.hero.title1} <span className="text-gradient-blue">{t.hero.titleHl}</span>{t.hero.title2}
            </h1>

            <p className="mt-6 max-w-2xl text-[17px] md:text-[18px] leading-relaxed text-white/70">{t.hero.subtitle}</p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3.5">
              <Button asChild size="lg" className="bg-white text-aelys-night hover:bg-aelys-ice rounded-full h-12 px-7 font-medium shadow-soft-lg group">
                <a href="#contact">{t.hero.cta1}<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full h-12 px-7 border-white/15 bg-white/[0.03] hover:bg-white/[0.07] text-white hover:text-white">
                <a href="#methode">{t.hero.cta2}</a>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 max-w-md gap-6">
              {[
                { v: t.hero.stat1v, l: t.hero.stat1l },
                { v: t.hero.stat2v, l: t.hero.stat2l },
                { v: t.hero.stat3v, l: t.hero.stat3l },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-semibold text-white">{s.v}</div>
                  <div className="text-xs uppercase tracking-wider text-white/50 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 reveal">
            <HeroVisual t={t} />
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroVisual({ t }) {
  return (
    <div className="relative">
      <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm p-5 md:p-6 shadow-soft-lg overflow-hidden">
        <div className="absolute -top-20 -right-20 h-64 w-64 bg-aelys-royal/30 blur-3xl rounded-full" />
        <div className="absolute -bottom-16 -left-10 h-56 w-56 bg-aelys-electric/20 blur-3xl rounded-full" />
        <div className="relative flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            </div>
            <span className="text-[11px] uppercase tracking-widest text-white/40 ml-2">{t.hero.hubLabel}</span>
          </div>
          <Badge className="bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 text-[10px] uppercase tracking-wider">{t.hero.live}</Badge>
        </div>

        <div className="relative h-[360px]">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 360" fill="none">
            <defs>
              <linearGradient id="line" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path d="M 60 60 C 140 60, 160 180, 200 180" stroke="url(#line)" strokeWidth="1.4" />
            <path d="M 60 180 C 140 180, 160 180, 200 180" stroke="url(#line)" strokeWidth="1.4" />
            <path d="M 60 300 C 140 300, 160 180, 200 180" stroke="url(#line)" strokeWidth="1.4" />
            <path d="M 200 180 C 280 180, 290 80, 340 80" stroke="url(#line)" strokeWidth="1.4" />
            <path d="M 200 180 C 280 180, 290 180, 340 180" stroke="url(#line)" strokeWidth="1.4" />
            <path d="M 200 180 C 280 180, 290 280, 340 280" stroke="url(#line)" strokeWidth="1.4" />
          </svg>

          <NodeDot icon={<FileSpreadsheet className="h-4 w-4" />} label={t.hero.n1} x="left-0 top-[34px]" />
          <NodeDot icon={<Mail className="h-4 w-4" />} label={t.hero.n2} x="left-0 top-[154px]" />
          <NodeDot icon={<Database className="h-4 w-4" />} label={t.hero.n3} x="left-0 top-[274px]" />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-aelys-royal/40 blur-2xl" />
              <div className="relative h-24 w-24 rounded-2xl bg-gradient-to-br from-aelys-royal to-aelys-blue grid place-items-center border border-white/15 shadow-soft-lg">
                <BrainCircuit className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] uppercase tracking-widest text-aelys-sky">{t.hero.iaHub}</div>
            </div>
          </div>

          <NodeDot icon={<FileText className="h-4 w-4" />} label={t.hero.n4} x="right-0 top-[54px]" right />
          <NodeDot icon={<Bell className="h-4 w-4" />} label={t.hero.n5} x="right-0 top-[154px]" right />
          <NodeDot icon={<BarChart3 className="h-4 w-4" />} label={t.hero.n6} x="right-0 top-[254px]" right />
        </div>

        <div className="mt-5 flex items-center justify-between rounded-xl bg-white/[0.04] border border-white/5 px-4 py-3">
          <div className="flex items-center gap-2 text-[12px] text-white/60">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
            {t.hero.barLeft}
          </div>
          <div className="text-[11px] uppercase tracking-widest text-white/40">{t.hero.barRight}</div>
        </div>
      </div>
    </div>
  )
}

function NodeDot({ icon, label, x, right }) {
  return (
    <div className={`absolute ${x} flex items-center gap-2 ${right ? 'flex-row-reverse' : ''}`}>
      <div className="h-10 w-10 rounded-xl bg-white/[0.05] border border-white/10 grid place-items-center text-white/85">{icon}</div>
      <div className="text-[12px] text-white/70 font-medium">{label}</div>
    </div>
  )
}

/* ---------- Section helpers ---------- */
function SectionTitle({ eyebrow, title, subtitle, dark = false, center = false }) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} reveal`}>
      {eyebrow && (
        <div className={`text-[11px] uppercase tracking-[0.22em] font-medium ${dark ? 'text-aelys-sky' : 'text-aelys-royal'}`}>{eyebrow}</div>
      )}
      <h2 className={`mt-3 text-3xl md:text-[42px] leading-[1.1] font-semibold tracking-tight ${dark ? 'text-white' : 'text-aelys-night'}`}>{title}</h2>
      {subtitle && <p className={`mt-5 text-[16.5px] leading-relaxed ${dark ? 'text-white/70' : 'text-slate-600'}`}>{subtitle}</p>}
    </div>
  )
}

/* ---------- Problématique ---------- */
function Problematique({ t }) {
  const icons = [RefreshCw, Database, Eye, GitBranch]
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="container mx-auto">
        <SectionTitle eyebrow={t.problem.eyebrow} title={t.problem.title} subtitle={t.problem.desc} />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.problem.c.map((item, i) => {
            const Icon = icons[i]
            return (
              <Card key={item.t} className="reveal card-hover border-slate-200/80 bg-white p-6 rounded-2xl shadow-soft hover:shadow-soft-lg hover:border-aelys-royal/40">
                <div className="h-11 w-11 rounded-xl bg-aelys-night text-white grid place-items-center mb-5"><Icon className="h-5 w-5" /></div>
                <div className="text-[11px] uppercase tracking-widest text-aelys-royal mb-1.5">0{i + 1}</div>
                <h3 className="text-[17px] font-semibold text-aelys-night">{item.t}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-slate-600">{item.d}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ---------- Expertise ---------- */
function Expertise({ t }) {
  const blocks = [
    { id: 'business-analyse', data: t.expertise.ba, Icon: Compass, gradient: 'from-aelys-royal to-aelys-blue', glow: 'bg-aelys-royal/15', side: '-right-12' },
    { id: 'automatisation', data: t.expertise.ia, Icon: BrainCircuit, gradient: 'from-aelys-electric to-aelys-royal', glow: 'bg-aelys-electric/20', side: '-left-12' },
    { id: 'developpement', data: t.expertise.dev, Icon: Code2, gradient: 'from-aelys-blue to-aelys-sky', glow: 'bg-aelys-sky/20', side: '-right-12', withTags: true },
  ]
  const tagIcons = [Monitor, Smartphone, Boxes]

  return (
    <section id="expertise" className="relative bg-aelys-night py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-aelys-royal/15 blur-[140px]" />
      <div className="container mx-auto relative">
        <SectionTitle dark eyebrow={t.expertise.eyebrow} title={t.expertise.title} subtitle={t.expertise.subtitle} />

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {blocks.map(({ id, data, Icon, gradient, glow, side, withTags }, i) => (
            <Card key={id} id={id} className="reveal card-hover relative overflow-hidden bg-white/[0.03] border-white/10 backdrop-blur-sm rounded-3xl p-7 md:p-8 hover:border-aelys-sky/30">
              <div className={`absolute -top-12 ${side} h-48 w-48 ${glow} blur-3xl rounded-full`} />
              <div className="flex items-center gap-3 mb-6">
                <div className={`h-11 w-11 rounded-xl bg-gradient-to-br ${gradient} grid place-items-center`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <Badge className="bg-white/5 text-aelys-sky border border-white/10 rounded-full text-[10px] uppercase tracking-widest">
                  {t.expertise.block} 0{i + 1}
                </Badge>
              </div>
              <h3 className="text-2xl md:text-[26px] font-semibold text-white">{data.title}</h3>
              <p className="mt-4 text-[14.5px] leading-relaxed text-white/70">{data.desc}</p>

              {withTags && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {data.tags.map((tag, ti) => {
                    const TagIcon = tagIcons[ti]
                    return (
                      <span key={tag} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[11px] text-white/70">
                        <TagIcon className="h-3 w-3 text-aelys-sky" /> {tag}
                      </span>
                    )
                  })}
                </div>
              )}

              <ul className="mt-6 space-y-2.5">
                {data.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[13.5px] text-white/80">
                    <CheckCircle2 className="h-4 w-4 text-aelys-sky mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Services ---------- */
function Services({ t }) {
  const icons = [Map, Cog, Workflow, BrainCircuit, Code2, Network]
  return (
    <section className="relative bg-aelys-mist py-24 md:py-32">
      <div className="absolute inset-0 bg-grid-dark opacity-50" />
      <div className="container mx-auto relative">
        <SectionTitle eyebrow={t.services.eyebrow} title={t.services.title} subtitle={t.services.subtitle} />
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {t.services.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <Card key={item.t} className="reveal card-hover group relative overflow-hidden rounded-3xl border-slate-200 bg-white p-8 md:p-9 hover:border-aelys-royal/40 shadow-soft hover:shadow-soft-lg">
                <div className="flex items-start justify-between mb-7">
                  <div className="h-12 w-12 rounded-2xl bg-aelys-night text-white grid place-items-center group-hover:bg-gradient-to-br group-hover:from-aelys-royal group-hover:to-aelys-blue transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-aelys-night/20 text-3xl font-semibold tracking-tight">0{i + 1}</span>
                </div>
                <h3 className="text-[20px] md:text-[22px] font-semibold text-aelys-night leading-tight">{item.t}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{item.d}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ---------- Méthode ---------- */
function Methode({ t }) {
  const icons = [ClipboardList, Map, ListChecks, Rocket, LineChart]
  return (
    <section id="methode" className="relative bg-white py-24 md:py-32">
      <div className="container mx-auto">
        <SectionTitle eyebrow={t.method.eyebrow} title={t.method.title} subtitle={t.method.subtitle} />
        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aelys-royal/40 to-transparent" />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-4">
            {t.method.steps.map((step, i) => {
              const Icon = icons[i]
              return (
                <div key={step.t} className="reveal relative">
                  <div className="flex lg:flex-col items-start lg:items-center gap-5 lg:gap-0">
                    <div className="relative shrink-0">
                      <div className="absolute inset-0 rounded-full bg-aelys-royal/20 blur-xl" />
                      <div className="relative h-14 w-14 rounded-full bg-aelys-night text-white grid place-items-center border-4 border-white shadow-soft">
                        <Icon className="h-5.5 w-5.5" />
                      </div>
                    </div>
                    <div className="lg:mt-6 lg:text-center">
                      <div className="text-[11px] uppercase tracking-[0.22em] font-medium text-aelys-royal">{t.method.stepLabel} 0{i + 1}</div>
                      <h3 className="mt-1.5 text-lg font-semibold text-aelys-night">{step.t}</h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-slate-600 lg:px-2">{step.d}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Why Aelys ---------- */
function Why({ t }) {
  const icons = [Users, ShieldCheck, Layers, Network]
  return (
    <section className="relative bg-gradient-to-b from-aelys-night to-aelys-deep py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-aelys-electric/15 blur-[140px]" />
      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionTitle dark eyebrow={t.why.eyebrow} title={t.why.title} subtitle={t.why.subtitle} />
          </div>
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-5">
              {t.why.args.map((arg, i) => {
                const Icon = icons[i]
                return (
                  <Card key={arg.t} className="reveal card-hover relative overflow-hidden bg-white/[0.03] border-white/10 backdrop-blur-sm rounded-2xl p-6 hover:border-aelys-sky/30">
                    <div className="h-10 w-10 rounded-xl bg-white/10 text-aelys-sky grid place-items-center mb-5"><Icon className="h-5 w-5" /></div>
                    <h3 className="text-[16.5px] font-semibold text-white leading-tight">{arg.t}</h3>
                    <p className="mt-2.5 text-[14px] leading-relaxed text-white/65">{arg.d}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Cas d'usage ---------- */
function UseCases({ t }) {
  const icons = [FileText, FileSpreadsheet, Network, MessageSquare, Bell, BarChart3, Calculator, Bot]
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="container mx-auto">
        <SectionTitle eyebrow={t.cases.eyebrow} title={t.cases.title} subtitle={t.cases.subtitle} />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.cases.items.map((title, i) => {
            const Icon = icons[i]
            return (
              <Card key={title} className="reveal card-hover group relative overflow-hidden rounded-2xl border-slate-200 bg-white p-6 hover:border-aelys-royal/40 hover:bg-aelys-mist/60 shadow-soft">
                <div className="h-10 w-10 rounded-xl bg-aelys-mist text-aelys-blue grid place-items-center mb-5 group-hover:bg-aelys-night group-hover:text-white transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-[11px] uppercase tracking-widest text-aelys-royal mb-1.5">{t.cases.label} {String(i + 1).padStart(2, '0')}</div>
                <h3 className="text-[15px] font-semibold text-aelys-night leading-snug">{title}</h3>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ---------- CTA + Contact ---------- */
function CTAContact({ t, lang }) {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', message: '' })
  const [state, setState] = useState({ loading: false, ok: false, error: '' })

  const submit = async (e) => {
    e.preventDefault()
    setState({ loading: true, ok: false, error: '' })
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, lang }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'Error')
      setState({ loading: false, ok: true, error: '' })
      setForm({ name: '', email: '', company: '', phone: '', message: '' })
      // Track conversion if gtag loaded
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', { send_to: 'AW-18155367954', value: 1.0, currency: 'CHF' })
        window.gtag('event', 'contact_submit', { event_category: 'engagement', event_label: lang })
      }
    } catch (err) {
      setState({ loading: false, ok: false, error: err.message })
    }
  }

  return (
    <section id="contact" className="relative bg-aelys-night py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-aelys-royal/20 blur-[150px]" />
      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-6 reveal">
            <Badge className="bg-white/[0.06] text-aelys-sky border border-white/10 rounded-full px-3.5 py-1.5">{t.cta.badge}</Badge>
            <h2 className="mt-6 text-3xl md:text-[44px] leading-[1.1] font-semibold tracking-tight text-white">
              {t.cta.title1}<span className="text-gradient-blue">{t.cta.titleHl}</span>{t.cta.title2}
            </h2>
            <p className="mt-5 text-[16.5px] leading-relaxed text-white/70 max-w-xl">{t.cta.desc}</p>

            <div className="mt-10 space-y-4">
              {[
                { icon: Phone, label: t.cta.bullets[0] },
                { icon: MapPin, label: t.cta.bullets[1] },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 text-white/75">
                  <div className="h-9 w-9 rounded-lg bg-white/[0.05] border border-white/10 grid place-items-center shrink-0">
                    <Icon className="h-4 w-4 text-aelys-sky" />
                  </div>
                  <span className="text-[14.5px]" suppressHydrationWarning>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 reveal">
            <Card className="relative overflow-hidden rounded-3xl border-white/10 bg-white/[0.04] backdrop-blur-sm p-7 md:p-9 shadow-soft-lg">
              <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-aelys-royal/20 blur-3xl" />
              <h3 className="text-xl font-semibold text-white">{t.cta.formTitle}</h3>
              <p className="text-sm text-white/55 mt-1">{t.cta.formSub}</p>

              <form onSubmit={submit} className="mt-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white/80 text-[13px]">{t.cta.labels.name}</Label>
                    <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-1.5 bg-white/[0.04] border-white/10 text-white placeholder:text-white/30 focus-visible:ring-aelys-royal" placeholder={t.cta.ph.name} />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white/80 text-[13px]">{t.cta.labels.email}</Label>
                    <Input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="mt-1.5 bg-white/[0.04] border-white/10 text-white placeholder:text-white/30 focus-visible:ring-aelys-royal" placeholder={t.cta.ph.email} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company" className="text-white/80 text-[13px]">{t.cta.labels.company}</Label>
                    <Input id="company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="mt-1.5 bg-white/[0.04] border-white/10 text-white placeholder:text-white/30 focus-visible:ring-aelys-royal" placeholder={t.cta.ph.company} />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-white/80 text-[13px]">{t.cta.labels.phone}</Label>
                    <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="mt-1.5 bg-white/[0.04] border-white/10 text-white placeholder:text-white/30 focus-visible:ring-aelys-royal" placeholder={t.cta.ph.phone} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message" className="text-white/80 text-[13px]">{t.cta.labels.message}</Label>
                  <Textarea id="message" required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-1.5 bg-white/[0.04] border-white/10 text-white placeholder:text-white/30 focus-visible:ring-aelys-royal"
                    placeholder={t.cta.ph.message} />
                </div>

                <Button type="submit" disabled={state.loading} size="lg"
                  className="w-full bg-white text-aelys-night hover:bg-aelys-ice rounded-full h-12 font-medium shadow-soft-lg">
                  {state.loading ? t.cta.sending : (<>{t.cta.submit} <Send className="ml-2 h-4 w-4" /></>)}
                </Button>

                {state.ok && (
                  <div className="flex items-center gap-2 text-emerald-300 text-sm bg-emerald-400/10 border border-emerald-400/20 rounded-lg px-3 py-2.5">
                    <CheckCircle2 className="h-4 w-4" />
                    {t.cta.ok}
                  </div>
                )}
                {state.error && (
                  <div className="text-red-300 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2.5">{state.error}</div>
                )}
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Footer ---------- */
function Footer({ t }) {
  return (
    <footer className="relative bg-aelys-night border-t border-white/5">
      <div className="container mx-auto py-14">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-aelys-royal to-aelys-blue grid place-items-center">
                <Zap className="h-4.5 w-4.5 text-white" />
              </div>
              <div className="text-white font-semibold tracking-tight text-[17px]">Aelys Systems</div>
            </div>
            <p className="mt-5 text-[14.5px] leading-relaxed text-white/55 max-w-md">{t.footer.desc}</p>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.22em] text-aelys-sky font-medium">{t.footer.nav}</div>
            <ul className="mt-5 space-y-3 text-[14.5px]">
              <li><a href="#accueil" className="text-white/70 hover:text-white">{t.nav.home}</a></li>
              <li><a href="#expertise" className="text-white/70 hover:text-white">{t.nav.expertise}</a></li>
              <li><a href="#developpement" className="text-white/70 hover:text-white">{t.nav.dev}</a></li>
              <li><a href="#methode" className="text-white/70 hover:text-white">{t.nav.method}</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white">{t.nav.contact}</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.22em] text-aelys-sky font-medium">{t.footer.contact}</div>
            <ul className="mt-5 space-y-3 text-[14.5px]">
              <li className="flex items-center gap-2.5 text-white/70">
                <MapPin className="h-4 w-4 text-aelys-sky shrink-0" />
                <span suppressHydrationWarning>{t.footer.region}</span>
              </li>
              <li className="flex items-center gap-2.5 text-white/70">
                <Mail className="h-4 w-4 text-aelys-sky shrink-0" />
                <a href="mailto:info@aelyssystems.ch" className="hover:text-white transition-colors" suppressHydrationWarning>info@aelyssystems.ch</a>
              </li>
              <li className="flex items-center gap-2.5 text-white/70">
                <Linkedin className="h-4 w-4 text-aelys-sky shrink-0" />
                <span suppressHydrationWarning>Aelys Systems</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="text-[13px] text-white/40" suppressHydrationWarning>{t.footer.rights}</div>
          <div className="text-[13px] text-white/40" suppressHydrationWarning>{t.footer.tagline}</div>
        </div>
      </div>
    </footer>
  )
}

/* ---------- Page wrapper ---------- */
function App() {
  const [lang, setLang] = useState('fr')
  useReveal(lang)

  // Persist language preference
  useEffect(() => {
    try {
      const stored = localStorage.getItem('aelys-lang')
      if (stored === 'en' || stored === 'fr') setLang(stored)
    } catch {}
  }, [])

  useEffect(() => {
    try { localStorage.setItem('aelys-lang', lang) } catch {}
    document.documentElement.lang = lang === 'en' ? 'en' : 'fr-CH'
  }, [lang])

  const t = dict[lang]

  return (
    <main className="min-h-screen bg-aelys-night text-white selection:bg-aelys-royal/40 selection:text-white">
      <Header t={t} lang={lang} setLang={setLang} />
      <Hero t={t} />
      <Problematique t={t} />
      <Expertise t={t} />
      <Services t={t} />
      <Methode t={t} />
      <Why t={t} />
      <UseCases t={t} />
      <CTAContact t={t} lang={lang} />
      <Footer t={t} />
    </main>
  )
}

export default App
