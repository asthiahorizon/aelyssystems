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
  Code2, Smartphone, Monitor, Boxes
} from 'lucide-react'

/* ---------- Reveal-on-scroll hook ---------- */
function useReveal() {
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
  }, [])
}

/* ---------- Header ---------- */
function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Automatisation IA', href: '#automatisation' },
    { label: 'Business Analyse', href: '#business-analyse' },
    { label: 'Développement', href: '#developpement' },
    { label: 'Méthode', href: '#methode' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-aelys-night/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between">
        <a href="#accueil" className="flex items-center gap-2.5 group">
          <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-aelys-royal to-aelys-blue grid place-items-center shadow-soft">
            <div className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
            <Zap className="h-4.5 w-4.5 text-white" strokeWidth={2.2} />
          </div>
          <div className="leading-tight">
            <div className="text-white font-semibold tracking-tight text-[17px]">Aelys Systems</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-aelys-sky/80">Swiss · IA & Business Analyse</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3.5 py-2 text-[13.5px] text-white/70 hover:text-white transition-colors rounded-md hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild className="bg-white text-aelys-night hover:bg-aelys-ice hover:text-aelys-night rounded-full px-5 h-10 font-medium shadow-soft">
            <a href="#contact">
              Discuter de votre projet <ArrowRight className="ml-1.5 h-4 w-4" />
            </a>
          </Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-md text-white/80 hover:bg-white/5"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/5 bg-aelys-night/95 backdrop-blur-xl">
          <div className="container mx-auto py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-[15px] text-white/80 hover:text-white hover:bg-white/5 rounded-md"
              >
                {l.label}
              </a>
            ))}
            <Button asChild className="mt-3 bg-white text-aelys-night hover:bg-aelys-ice rounded-full">
              <a href="#contact" onClick={() => setOpen(false)}>Discuter de votre projet</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28">
      {/* Background layers */}
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
              Automatisation IA · Business Analyse · Développement métier
            </Badge>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] font-semibold tracking-tight text-white">
              Automatisation IA, <span className="text-gradient-blue">business analyse</span> et développement métier pour les PME suisses
            </h1>

            <p className="mt-6 max-w-2xl text-[17px] md:text-[18px] leading-relaxed text-white/70">
              Aelys Systems aide les petites et moyennes entreprises à clarifier leurs processus,
              identifier les leviers d’amélioration, automatiser les tâches répétitives et développer
              des applications métier sur mesure — web, mobile et desktop — adaptées à leur réalité terrain.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3.5">
              <Button asChild size="lg" className="bg-white text-aelys-night hover:bg-aelys-ice rounded-full h-12 px-7 font-medium shadow-soft-lg group">
                <a href="#contact">
                  Planifier un échange
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full h-12 px-7 border-white/15 bg-white/[0.03] hover:bg-white/[0.07] text-white hover:text-white">
                <a href="#methode">Découvrir l’approche</a>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 max-w-md gap-6">
              {[
                { v: '3', l: 'expertises' },
                { v: '40h+', l: 'gagnées / mois' },
                { v: '100%', l: 'sur-mesure PME' },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-semibold text-white">{s.v}</div>
                  <div className="text-xs uppercase tracking-wider text-white/50 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual: abstract automation diagram */}
          <div className="lg:col-span-5 reveal">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroVisual() {
  return (
    <div className="relative">
      <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm p-5 md:p-6 shadow-soft-lg overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute -top-20 -right-20 h-64 w-64 bg-aelys-royal/30 blur-3xl rounded-full" />
        <div className="absolute -bottom-16 -left-10 h-56 w-56 bg-aelys-electric/20 blur-3xl rounded-full" />

        <div className="relative flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            </div>
            <span className="text-[11px] uppercase tracking-widest text-white/40 ml-2">Workflow · Aelys</span>
          </div>
          <Badge className="bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 text-[10px] uppercase tracking-wider">Live</Badge>
        </div>

        {/* Node graph */}
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

          {/* Source nodes */}
          <NodeDot icon={<FileSpreadsheet className="h-4 w-4" />} label="Excel" x="left-0 top-[34px]" />
          <NodeDot icon={<Mail className="h-4 w-4" />} label="Emails" x="left-0 top-[154px]" />
          <NodeDot icon={<Database className="h-4 w-4" />} label="CRM" x="left-0 top-[274px]" />

          {/* Central AI hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-aelys-royal/40 blur-2xl" />
              <div className="relative h-24 w-24 rounded-2xl bg-gradient-to-br from-aelys-royal to-aelys-blue grid place-items-center border border-white/15 shadow-soft-lg">
                <BrainCircuit className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] uppercase tracking-widest text-aelys-sky">
                IA Hub
              </div>
            </div>
          </div>

          {/* Destination nodes */}
          <NodeDot icon={<FileText className="h-4 w-4" />} label="Rapports" x="right-0 top-[54px]" right />
          <NodeDot icon={<Bell className="h-4 w-4" />} label="Alertes" x="right-0 top-[154px]" right />
          <NodeDot icon={<BarChart3 className="h-4 w-4" />} label="Dashboard" x="right-0 top-[254px]" right />
        </div>

        {/* Footer bar */}
        <div className="mt-5 flex items-center justify-between rounded-xl bg-white/[0.04] border border-white/5 px-4 py-3">
          <div className="flex items-center gap-2 text-[12px] text-white/60">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
            12 tâches automatisées aujourd’hui
          </div>
          <div className="text-[11px] uppercase tracking-widest text-white/40">+ 8h gagnées</div>
        </div>
      </div>
    </div>
  )
}

function NodeDot({ icon, label, x, right }) {
  return (
    <div className={`absolute ${x} flex items-center gap-2 ${right ? 'flex-row-reverse' : ''}`}>
      <div className="h-10 w-10 rounded-xl bg-white/[0.05] border border-white/10 grid place-items-center text-white/85">
        {icon}
      </div>
      <div className="text-[12px] text-white/70 font-medium">{label}</div>
    </div>
  )
}

/* ---------- Logos trust strip ---------- */
function TrustStrip() {
  const items = ['Lausanne', 'Genève', 'Fribourg', 'Neuchâtel', 'Sion', 'Vevey', 'Yverdon', 'Bulle']
  return (
    <div className="relative bg-aelys-night border-y border-white/5 py-6 overflow-hidden">
      <div className="container mx-auto flex items-center gap-6">
        <div className="shrink-0 text-[11px] uppercase tracking-[0.2em] text-white/40">
          Au service des PME de
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...items, ...items].map((c, i) => (
              <span key={i} className="text-white/45 text-sm tracking-wide font-medium">{c} · CH</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------- Section helpers ---------- */
function SectionTitle({ eyebrow, title, subtitle, dark = false, center = false }) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} reveal`}>
      {eyebrow && (
        <div className={`text-[11px] uppercase tracking-[0.22em] font-medium ${dark ? 'text-aelys-sky' : 'text-aelys-royal'}`}>
          {eyebrow}
        </div>
      )}
      <h2 className={`mt-3 text-3xl md:text-[42px] leading-[1.1] font-semibold tracking-tight ${dark ? 'text-white' : 'text-aelys-night'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-[16.5px] leading-relaxed ${dark ? 'text-white/70' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

/* ---------- Problématique ---------- */
function Problematique() {
  const items = [
    { icon: RefreshCw, title: 'Tâches répétitives', desc: 'Saisies multiples, traitements manuels et copier-coller chronophages au quotidien.' },
    { icon: Database, title: 'Données dispersées', desc: 'Informations éclatées entre fichiers, emails, outils et tableaux non connectés.' },
    { icon: Eye, title: 'Manque de visibilité', desc: 'Difficulté à avoir une vue claire de l’activité, des indicateurs et de la performance.' },
    { icon: GitBranch, title: 'Processus rigides', desc: 'Processus difficiles à faire évoluer lorsque l’organisation change ou grandit.' },
  ]
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="container mx-auto">
        <SectionTitle
          eyebrow="Le constat"
          title="Vos processus fonctionnent, mais ils pourraient être plus fluides"
          subtitle="Dans beaucoup de PME, les équipes jonglent avec des fichiers Excel, des emails, des outils non connectés, des tâches manuelles et des informations dispersées. Cela crée de la perte de temps, des erreurs, des doublons et une difficulté à avoir une vision claire de l’activité. Aelys Systems intervient pour comprendre votre fonctionnement réel, structurer vos processus et mettre en place des automatisations utiles, sans complexifier votre organisation."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <Card key={title} className="reveal card-hover border-slate-200/80 bg-white p-6 rounded-2xl shadow-soft hover:shadow-soft-lg hover:border-aelys-royal/40">
              <div className="h-11 w-11 rounded-xl bg-aelys-night text-white grid place-items-center mb-5">
                <Icon className="h-5 w-5" />
              </div>
              <div className="text-[11px] uppercase tracking-widest text-aelys-royal mb-1.5">0{i + 1}</div>
              <h3 className="text-[17px] font-semibold text-aelys-night">{title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-slate-600">{desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Expertise dual ---------- */
function Expertise() {
  const ba = [
    'Analyse des processus existants',
    'Cartographie des flux métier',
    'Identification des irritants et pertes de temps',
    'Recueil des besoins utilisateurs',
    'Formalisation des exigences fonctionnelles',
    'Recommandations concrètes et priorisées',
  ]
  const ia = [
    'Automatisation de tâches répétitives',
    'Connexion entre outils existants',
    'Workflows intelligents',
    'Intégration d’outils IA',
    'Tableaux de suivi et reporting',
    'Optimisation progressive des processus',
  ]
  const dev = [
    'Applications web sur mesure',
    'Applications mobiles (iOS, Android)',
    'Logiciels desktop métier',
    'Intégrations API & services tiers',
    'Interfaces internes et portails clients',
    'Maintenance et évolutions continues',
  ]
  return (
    <section id="expertise" className="relative bg-aelys-night py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-aelys-royal/15 blur-[140px]" />
      <div className="container mx-auto relative">
        <SectionTitle
          dark
          eyebrow="Expertise"
          title="Une triple expertise : business analyse, automatisation IA et développement métier"
          subtitle="Une vision complète, de l’analyse à la mise en œuvre : comprendre, automatiser et développer les outils dont vos équipes ont vraiment besoin."
        />

        <div id="business-analyse" className="mt-14 grid lg:grid-cols-3 gap-6">
          <Card className="reveal card-hover relative overflow-hidden bg-white/[0.03] border-white/10 backdrop-blur-sm rounded-3xl p-7 md:p-8 hover:border-aelys-sky/30">
            <div className="absolute -top-12 -right-12 h-48 w-48 bg-aelys-royal/15 blur-3xl rounded-full" />
            <div className="flex items-center gap-3 mb-6">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-aelys-royal to-aelys-blue grid place-items-center">
                <Compass className="h-5 w-5 text-white" />
              </div>
              <Badge className="bg-white/5 text-aelys-sky border border-white/10 rounded-full text-[10px] uppercase tracking-widest">
                Bloc 01
              </Badge>
            </div>
            <h3 className="text-2xl md:text-[26px] font-semibold text-white">Business Analyse</h3>
            <p className="mt-4 text-[14.5px] leading-relaxed text-white/70">
              Aelys Systems analyse vos processus métier de manière structurée afin de comprendre comment
              l’information circule, où se trouvent les blocages et quelles améliorations peuvent générer
              un impact concret. L’objectif est de transformer un fonctionnement parfois informel en une
              vision claire, documentée et optimisable.
            </p>
            <ul className="mt-6 space-y-2.5">
              {ba.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[13.5px] text-white/80">
                  <CheckCircle2 className="h-4 w-4 text-aelys-sky mt-0.5 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </Card>

          <Card id="automatisation" className="reveal card-hover relative overflow-hidden bg-white/[0.03] border-white/10 backdrop-blur-sm rounded-3xl p-7 md:p-8 hover:border-aelys-sky/30">
            <div className="absolute -top-12 -left-12 h-48 w-48 bg-aelys-electric/20 blur-3xl rounded-full" />
            <div className="flex items-center gap-3 mb-6">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-aelys-electric to-aelys-royal grid place-items-center">
                <BrainCircuit className="h-5 w-5 text-white" />
              </div>
              <Badge className="bg-white/5 text-aelys-sky border border-white/10 rounded-full text-[10px] uppercase tracking-widest">
                Bloc 02
              </Badge>
            </div>
            <h3 className="text-2xl md:text-[26px] font-semibold text-white">Automatisation IA</h3>
            <p className="mt-4 text-[14.5px] leading-relaxed text-white/70">
              Aelys Systems conçoit des automatisations adaptées aux besoins des PME : traitement de
              données, génération de documents, synchronisation d’outils, notifications intelligentes,
              assistants IA internes ou workflows automatisés. L’objectif n’est pas d’ajouter de la
              technologie pour la technologie, mais de libérer du temps et de fiabiliser les opérations.
            </p>
            <ul className="mt-6 space-y-2.5">
              {ia.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[13.5px] text-white/80">
                  <CheckCircle2 className="h-4 w-4 text-aelys-sky mt-0.5 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </Card>

          <Card id="developpement" className="reveal card-hover relative overflow-hidden bg-white/[0.03] border-white/10 backdrop-blur-sm rounded-3xl p-7 md:p-8 hover:border-aelys-sky/30">
            <div className="absolute -top-12 -right-12 h-48 w-48 bg-aelys-sky/20 blur-3xl rounded-full" />
            <div className="flex items-center gap-3 mb-6">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-aelys-blue to-aelys-sky grid place-items-center">
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <Badge className="bg-white/5 text-aelys-sky border border-white/10 rounded-full text-[10px] uppercase tracking-widest">
                Bloc 03
              </Badge>
            </div>
            <h3 className="text-2xl md:text-[26px] font-semibold text-white">Développement métier</h3>
            <p className="mt-4 text-[14.5px] leading-relaxed text-white/70">
              Aelys Systems conçoit et développe des applications sur mesure — web, mobile et desktop —
              pour répondre précisément aux besoins de vos équipes. Quand les outils du marché ne suffisent
              plus, nous créons des solutions robustes, évolutives et parfaitement intégrées à vos
              processus.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[11px] text-white/70">
                <Monitor className="h-3 w-3 text-aelys-sky" /> Web
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[11px] text-white/70">
                <Smartphone className="h-3 w-3 text-aelys-sky" /> Mobile
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[11px] text-white/70">
                <Boxes className="h-3 w-3 text-aelys-sky" /> Desktop
              </span>
            </div>
            <ul className="mt-6 space-y-2.5">
              {dev.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[13.5px] text-white/80">
                  <CheckCircle2 className="h-4 w-4 text-aelys-sky mt-0.5 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}

/* ---------- Services ---------- */
function Services() {
  const services = [
    { icon: Map, title: 'Analyse et cartographie des processus', desc: 'Comprendre vos processus actuels, visualiser les flux d’information et identifier les zones de friction.' },
    { icon: Cog, title: 'Optimisation opérationnelle', desc: 'Simplifier les étapes inutiles, réduire les doublons et structurer des processus plus efficaces.' },
    { icon: Workflow, title: 'Automatisation des workflows', desc: 'Automatiser les tâches répétitives entre vos outils : formulaires, CRM, emails, documents, bases de données ou plateformes métier.' },
    { icon: BrainCircuit, title: 'Intégration IA pour PME', desc: 'Mettre en place des assistants IA, des systèmes de génération de contenu, d’analyse de données ou d’aide à la décision.' },
    { icon: Code2, title: 'Développement d’applications métier', desc: 'Concevoir et développer des applications web, mobiles et desktop sur mesure, parfaitement alignées avec vos processus et vos équipes.' },
    { icon: Network, title: 'Intégrations & connecteurs', desc: 'Connecter vos outils existants (CRM, ERP, comptabilité, e-commerce…) via des API et des connecteurs robustes.' },
  ]
  return (
    <section className="relative bg-aelys-mist py-24 md:py-32">
      <div className="absolute inset-0 bg-grid-dark opacity-50" />
      <div className="container mx-auto relative">
        <SectionTitle
          eyebrow="Services"
          title="Des solutions concrètes pour simplifier votre quotidien"
          subtitle="Six leviers concrets pour structurer, fluidifier, automatiser et développer intelligemment votre organisation — sans sur-ingénierie."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <Card key={title} className="reveal card-hover group relative overflow-hidden rounded-3xl border-slate-200 bg-white p-8 md:p-9 hover:border-aelys-royal/40 shadow-soft hover:shadow-soft-lg">
              <div className="flex items-start justify-between mb-7">
                <div className="h-12 w-12 rounded-2xl bg-aelys-night text-white grid place-items-center group-hover:bg-gradient-to-br group-hover:from-aelys-royal group-hover:to-aelys-blue transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-aelys-night/20 text-3xl font-semibold tracking-tight">
                  0{i + 1}
                </span>
              </div>
              <h3 className="text-[20px] md:text-[22px] font-semibold text-aelys-night leading-tight">
                {title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{desc}</p>
              <div className="mt-6 flex items-center text-[13px] font-medium text-aelys-royal">
                <span>En savoir plus</span>
                <ArrowUpRight className="h-4 w-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Méthode ---------- */
function Methode() {
  const steps = [
    { icon: ClipboardList, title: 'Comprendre', desc: 'Analyse de votre organisation, de vos outils, de vos contraintes et de vos objectifs.' },
    { icon: Map, title: 'Cartographier', desc: 'Modélisation des processus existants et identification des points de blocage.' },
    { icon: ListChecks, title: 'Prioriser', desc: 'Sélection des améliorations et automatisations les plus utiles selon leur impact et leur faisabilité.' },
    { icon: Rocket, title: 'Déployer', desc: 'Mise en place progressive des solutions, avec validation à chaque étape.' },
    { icon: LineChart, title: 'Améliorer', desc: 'Suivi, ajustements et optimisation continue selon les retours terrain.' },
  ]
  return (
    <section id="methode" className="relative bg-white py-24 md:py-32">
      <div className="container mx-auto">
        <SectionTitle
          eyebrow="Méthode"
          title="Une approche simple, progressive et orientée résultats"
          subtitle="Cinq étapes claires pour transformer vos processus en systèmes fiables et automatisés."
        />

        <div className="mt-16 relative">
          {/* desktop horizontal line */}
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aelys-royal/40 to-transparent" />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="reveal relative">
                <div className="flex lg:flex-col items-start lg:items-center gap-5 lg:gap-0">
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 rounded-full bg-aelys-royal/20 blur-xl" />
                    <div className="relative h-14 w-14 rounded-full bg-aelys-night text-white grid place-items-center border-4 border-white shadow-soft">
                      <Icon className="h-5.5 w-5.5" />
                    </div>
                  </div>
                  <div className="lg:mt-6 lg:text-center">
                    <div className="text-[11px] uppercase tracking-[0.22em] font-medium text-aelys-royal">
                      Étape 0{i + 1}
                    </div>
                    <h3 className="mt-1.5 text-lg font-semibold text-aelys-night">{title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-slate-600 lg:px-2">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Why Aelys ---------- */
function Why() {
  const args = [
    { icon: Users, title: 'Compréhension métier avant la technologie', desc: 'Nous écoutons vos équipes, comprenons votre réalité et seulement ensuite choisissons les bons outils.' },
    { icon: ShieldCheck, title: 'Solutions adaptées aux PME suisses', desc: 'Une approche calibrée pour la taille, la culture et les exigences de qualité des entreprises romandes.' },
    { icon: Layers, title: 'Automatisation utile, pas inutilement complexe', desc: 'Pas de sur-ingénierie. Des solutions ciblées qui apportent une valeur immédiate et mesurable.' },
    { icon: Network, title: 'Accompagnement de l’analyse au déploiement', desc: 'Un interlocuteur unique de bout en bout : analyse, design, mise en œuvre et amélioration continue.' },
  ]
  return (
    <section className="relative bg-gradient-to-b from-aelys-night to-aelys-deep py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-aelys-electric/15 blur-[140px]" />
      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionTitle
              dark
              eyebrow="Pourquoi Aelys Systems"
              title="Pourquoi travailler avec Aelys Systems ?"
              subtitle="Aelys Systems combine une vision métier, une compréhension des réalités des PME et une capacité technique à transformer les idées en solutions concrètes. L’approche est pragmatique, humaine et orientée impact."
            />
          </div>
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-5">
              {args.map(({ icon: Icon, title, desc }) => (
                <Card key={title} className="reveal card-hover relative overflow-hidden bg-white/[0.03] border-white/10 backdrop-blur-sm rounded-2xl p-6 hover:border-aelys-sky/30">
                  <div className="h-10 w-10 rounded-xl bg-white/10 text-aelys-sky grid place-items-center mb-5">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-[16.5px] font-semibold text-white leading-tight">{title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-white/65">{desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Cas d’usage ---------- */
function UseCases() {
  const cases = [
    { icon: FileText, title: 'Génération automatique de rapports' },
    { icon: FileSpreadsheet, title: 'Création de documents à partir de formulaires' },
    { icon: Network, title: 'Synchronisation entre CRM, emails et outils internes' },
    { icon: MessageSquare, title: 'Analyse automatique de demandes clients' },
    { icon: Bell, title: 'Suivi de projets et notifications intelligentes' },
    { icon: BarChart3, title: 'Tableaux de bord pour la direction' },
    { icon: Calculator, title: 'Préparation de données pour la comptabilité' },
    { icon: Bot, title: 'Assistants IA internes pour les équipes' },
  ]
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="container mx-auto">
        <SectionTitle
          eyebrow="Cas d’usage"
          title="Exemples d’automatisations possibles"
          subtitle="Un aperçu concret de ce que nous pouvons mettre en place pour vous, selon vos outils et votre métier."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cases.map(({ icon: Icon, title }, i) => (
            <Card key={title} className="reveal card-hover group relative overflow-hidden rounded-2xl border-slate-200 bg-white p-6 hover:border-aelys-royal/40 hover:bg-aelys-mist/60 shadow-soft">
              <div className="h-10 w-10 rounded-xl bg-aelys-mist text-aelys-blue grid place-items-center mb-5 group-hover:bg-aelys-night group-hover:text-white transition-colors">
                <Icon className="h-5 w-5" />
              </div>
              <div className="text-[11px] uppercase tracking-widest text-aelys-royal mb-1.5">Cas {String(i + 1).padStart(2, '0')}</div>
              <h3 className="text-[15px] font-semibold text-aelys-night leading-snug">{title}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Final CTA + Contact form ---------- */
function CTAContact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', message: '' })
  const [state, setState] = useState({ loading: false, ok: false, error: '' })

  const submit = async (e) => {
    e.preventDefault()
    setState({ loading: true, ok: false, error: '' })
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'Erreur lors de l’envoi')
      setState({ loading: false, ok: true, error: '' })
      setForm({ name: '', email: '', company: '', phone: '', message: '' })
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
            <Badge className="bg-white/[0.06] text-aelys-sky border border-white/10 rounded-full px-3.5 py-1.5">
              Premier échange · gratuit · sans engagement
            </Badge>
            <h2 className="mt-6 text-3xl md:text-[44px] leading-[1.1] font-semibold tracking-tight text-white">
              Et si vos processus devenaient plus <span className="text-gradient-blue">simples, plus clairs et plus intelligents</span> ?
            </h2>
            <p className="mt-5 text-[16.5px] leading-relaxed text-white/70 max-w-xl">
              Discutons de votre organisation, de vos outils actuels et des automatisations qui pourraient
              réellement vous faire gagner du temps.
            </p>

            <div className="mt-10 space-y-4">
              {[
                { icon: Phone, label: 'Échange visio de 30 minutes' },
                { icon: MapPin, label: 'Suisse romande · à distance ou sur site' },
                { icon: CheckCircle2, label: 'Première analyse offerte' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 text-white/75">
                  <div className="h-9 w-9 rounded-lg bg-white/[0.05] border border-white/10 grid place-items-center">
                    <Icon className="h-4 w-4 text-aelys-sky" />
                  </div>
                  <span className="text-[14.5px]">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 reveal">
            <Card className="relative overflow-hidden rounded-3xl border-white/10 bg-white/[0.04] backdrop-blur-sm p-7 md:p-9 shadow-soft-lg">
              <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-aelys-royal/20 blur-3xl" />
              <h3 className="text-xl font-semibold text-white">Planifier un premier échange</h3>
              <p className="text-sm text-white/55 mt-1">Réponse sous 24h ouvrées.</p>

              <form onSubmit={submit} className="mt-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white/80 text-[13px]">Nom *</Label>
                    <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-1.5 bg-white/[0.04] border-white/10 text-white placeholder:text-white/30 focus-visible:ring-aelys-royal" placeholder="Jean Dupont" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white/80 text-[13px]">Email *</Label>
                    <Input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="mt-1.5 bg-white/[0.04] border-white/10 text-white placeholder:text-white/30 focus-visible:ring-aelys-royal" placeholder="jean@entreprise.ch" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company" className="text-white/80 text-[13px]">Entreprise</Label>
                    <Input id="company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="mt-1.5 bg-white/[0.04] border-white/10 text-white placeholder:text-white/30 focus-visible:ring-aelys-royal" placeholder="Votre PME" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-white/80 text-[13px]">Téléphone</Label>
                    <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="mt-1.5 bg-white/[0.04] border-white/10 text-white placeholder:text-white/30 focus-visible:ring-aelys-royal" placeholder="+41 ..." />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message" className="text-white/80 text-[13px]">Votre projet *</Label>
                  <Textarea id="message" required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-1.5 bg-white/[0.04] border-white/10 text-white placeholder:text-white/30 focus-visible:ring-aelys-royal"
                    placeholder="Décrivez brièvement vos processus actuels et ce que vous souhaitez améliorer." />
                </div>

                <Button type="submit" disabled={state.loading} size="lg"
                  className="w-full bg-white text-aelys-night hover:bg-aelys-ice rounded-full h-12 font-medium shadow-soft-lg">
                  {state.loading ? 'Envoi en cours…' : (
                    <>Planifier un premier échange <Send className="ml-2 h-4 w-4" /></>
                  )}
                </Button>

                {state.ok && (
                  <div className="flex items-center gap-2 text-emerald-300 text-sm bg-emerald-400/10 border border-emerald-400/20 rounded-lg px-3 py-2.5">
                    <CheckCircle2 className="h-4 w-4" />
                    Merci, votre demande a bien été reçue. Nous vous répondons sous 24h.
                  </div>
                )}
                {state.error && (
                  <div className="text-red-300 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2.5">
                    {state.error}
                  </div>
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
function Footer() {
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
            <p className="mt-5 text-[14.5px] leading-relaxed text-white/55 max-w-md">
              Automatisation IA, Business Analyse & Développement métier pour PME suisses. Nous transformons vos
              processus métier en systèmes clairs, automatisés et intelligents, et développons les
              applications dont vos équipes ont vraiment besoin.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.22em] text-aelys-sky font-medium">Navigation</div>
            <ul className="mt-5 space-y-3 text-[14.5px]">
              <li><a href="#accueil" className="text-white/70 hover:text-white">Accueil</a></li>
              <li><a href="#expertise" className="text-white/70 hover:text-white">Expertise</a></li>
              <li><a href="#developpement" className="text-white/70 hover:text-white">Développement</a></li>
              <li><a href="#methode" className="text-white/70 hover:text-white">Méthode</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.22em] text-aelys-sky font-medium">Contact</div>
            <ul className="mt-5 space-y-3 text-[14.5px]">
              <li className="flex items-center gap-2.5 text-white/70">
                <MapPin className="h-4 w-4 text-aelys-sky" /> Suisse romande
              </li>
              <li className="flex items-center gap-2.5 text-white/70">
                <Mail className="h-4 w-4 text-aelys-sky" /> hello@aelys-systems.ch
              </li>
              <li className="flex items-center gap-2.5 text-white/70">
                <Linkedin className="h-4 w-4 text-aelys-sky" /> Aelys Systems
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="text-[13px] text-white/40">© 2025 Aelys Systems. Tous droits réservés.</div>
          <div className="text-[13px] text-white/40">Conçu en Suisse · Pensé pour les PME</div>
        </div>
      </div>
    </footer>
  )
}

/* ---------- Page wrapper ---------- */
function App() {
  useReveal()
  return (
    <main className="min-h-screen bg-aelys-night text-white selection:bg-aelys-royal/40 selection:text-white">
      <Header />
      <Hero />
      <TrustStrip />
      <Problematique />
      <Expertise />
      <Services />
      <Methode />
      <Why />
      <UseCases />
      <CTAContact />
      <Footer />
    </main>
  )
}

export default App
