import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Mail,
  Download,
  Linkedin,
  Youtube,
  Instagram,
  Facebook,
  ArrowUpRight,
  Sparkles,
  Check,
  X,
  Send,
  Menu,
} from 'lucide-react'
import profil from './assets/profil.jpeg'

gsap.registerPlugin(ScrollTrigger)

/* ------------------------------------------------------------------ */
/*  CONTENU — facile à éditer (texte imaginé, à personnaliser)        */
/* ------------------------------------------------------------------ */

const NAME = 'DOVONON Samuel Yann Emric'
const SHORT = 'S.D.'
const ROLE = 'Résolveur de problèmes'

const STATS = [
  { value: 'Juriste & Créatif', label: '' },
  { value: '3+ ans', label: "d'expérience" },
  { value: 'Disponible', label: 'en freelance' },
]

const ABOUT = [
  "Juriste de formation, créateur dans l'âme. J'ai passé des années à décortiquer des problèmes complexes — et j'ai compris qu'un bon argument juridique et une bonne histoire de marque obéissent à la même logique : la clarté.",
  "Aujourd'hui, je mets cette rigueur au service de la création. Montage vidéo, copywriting, design : je transforme des idées confuses en messages nets qui captent et convertissent.",
  "Ma conviction : chaque problème a une solution élégante. Il suffit de le cadrer correctement.",
]

const EXPERIENCES = [
  {
    period: '2024 — Présent',
    role: 'Créateur de Contenu & Consultant Marque',
    company: 'Freelance',
    desc: "J'accompagne créateurs et petites marques de A à Z : stratégie de contenu, montage vidéo court-format, copywriting et identité visuelle cohérente.",
  },
  {
    period: '2023 — 2024',
    role: 'Monteur Vidéo & Social Media',
    company: 'Studio créatif',
    desc: 'Production de contenus court-format pour les réseaux : montage rythmé, motion design léger et habillage graphique au service de la portée et de la rétention.',
  },
  {
    period: '2022 — 2023',
    role: 'Rédacteur & Assistant Juridique',
    company: 'Cabinet de droit',
    desc: "Rédaction d'actes et vulgarisation juridique. C'est là que j'ai appris à rendre simple ce qui est complexe — le socle de ma manière de communiquer aujourd'hui.",
  },
]

const SKILLS = [
  { name: 'Montage Vidéo', level: 92 },
  { name: 'Copywriting', level: 88 },
  { name: 'Graphic Design', level: 85 },
  { name: 'Motion Design', level: 78 },
  { name: 'Stratégie de Contenu', level: 80 },
]

const EDUCATION = [
  {
    year: '2024',
    degree: 'Licence en Droit',
    school: 'Université de Lomé — Faculté de Droit et de Science Politique',
    detail:
      "Spécialisation droit des affaires & propriété intellectuelle. Mémoire orienté droit du numérique et création de contenu.",
  },
  {
    year: '2022 — 2023',
    degree: 'Autoformation intensive — Montage, Copywriting & Design',
    school: 'Parcours autodidacte (certifications en ligne)',
    detail:
      "En parallèle de mes études, j'ai bâti mes compétences créatives sur le terrain : montage vidéo, écriture persuasive et design de marque.",
  },
  {
    year: '2021',
    degree: "Entrée à l'université — 1ʳᵉ année de Droit",
    school: 'Faculté de Droit et de Science Politique',
    detail:
      "Premières bases en raisonnement juridique, argumentation et rédaction — des fondations qui structurent encore ma façon de communiquer.",
  },
  {
    year: '2020',
    degree: 'Baccalauréat — Série littéraire',
    school: "Mention obtenue à l'examen national",
    detail:
      "Solide formation en lettres, langues et culture générale : le socle de mon goût pour les mots et les récits.",
  },
]

const CONTACTS = [
  { icon: Mail, label: 'Email', value: 'samd.emric@gmail.com', href: 'mailto:samd.emric@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn', value: 'À compléter', href: '#' },
  { icon: Instagram, label: 'Instagram', value: 'À compléter', href: '#' },
  { icon: Youtube, label: 'YouTube', value: 'À compléter', href: '#' },
]

const NAV_LINKS = [
  { id: 'apropos', label: 'À propos' },
  { id: 'experience', label: 'Expérience' },
  { id: 'competences', label: 'Compétences' },
  { id: 'formation', label: 'Formation' },
  { id: 'contact', label: 'Contact' },
]

const EMAIL = 'samd.emric@gmail.com'

// Logo X (ex-Twitter) — lucide n'a pas la nouvelle marque
function XIcon({ size = 16, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

// Réseaux sociaux du footer — remplace les "#" par tes vraies URLs de profil
const SOCIALS = [
  { label: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/share/1MPRbTyHYK/' },
  { label: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/emricyann' },
  { label: 'X', icon: XIcon, href: 'https://x.com/yann_emric77' },
  {
    label: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/samuel-yann-emric-dovonon-05949a381',
  },
]

const DOMAINES = [
  'Montage Vidéo',
  'Copywriting',
  'Motion Design',
  'Graphic Design',
  'Stratégie de Contenu',
]

const BUDGETS = ['À partir de 3 000 €', 'À partir de 5 000 €', 'À partir de 10 000 €']

/* ------------------------------------------------------------------ */
/*  NAVBAR — "La Signature Flottante"                                  */
/* ------------------------------------------------------------------ */

function Navbar({ onContact }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sentinel = document.getElementById('hero-sentinel')
    if (!sentinel) return
    const obs = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { rootMargin: '-80px 0px 0px 0px' },
    )
    obs.observe(sentinel)
    return () => obs.disconnect()
  }, [])

  const shell = scrolled
    ? 'border border-[rgba(244,164,96,0.16)] bg-void/70 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(238,108,58,0.45)]'
    : 'border border-white/5 bg-void/40 backdrop-blur-md md:border-transparent md:bg-transparent md:backdrop-blur-none'

  return (
    <div className="fixed top-3 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-3xl -translate-x-1/2 sm:top-4 md:w-auto">
      <nav
        className={`flex items-center justify-between gap-3 rounded-full py-2 pl-5 pr-2 transition-all duration-500 ease-magnetic ${shell}`}
      >
        <a
          href="#hero"
          onClick={() => setMenuOpen(false)}
          className="shrink-0 font-mono text-sm font-semibold tracking-tight text-accent"
        >
          {SHORT}
        </a>

        {/* liens desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="lift whitespace-nowrap rounded-full px-3 py-1.5 text-sm text-ghost/70 hover:text-ghost"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {/* CTA desktop */}
          <button
            onClick={onContact}
            className="btn-gradient hidden items-center gap-1.5 rounded-full px-4 py-2 text-sm md:flex"
          >
            <Mail size={15} strokeWidth={2.2} />
            Me contacter
          </button>
          {/* hamburger mobile */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(244,164,96,0.2)] bg-[rgba(24,18,16,0.6)] text-ghost md:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* drawer mobile */}
      {menuOpen && (
        <div className="glass mt-2 flex flex-col gap-1 rounded-3xl p-3 md:hidden">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setMenuOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm text-ghost/80 transition hover:bg-white/5 hover:text-ghost"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false)
              onContact()
            }}
            className="btn-gradient mt-1 flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm"
          >
            <Mail size={16} strokeWidth={2.2} />
            Me contacter
          </button>
        </div>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  HERO — "La Première Impression"                                    */
/* ------------------------------------------------------------------ */

function Hero({ onContact }) {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-anim', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.1,
        delay: 0.15,
      })
      gsap.from('.hero-visual', {
        opacity: 0,
        scale: 0.94,
        duration: 1.1,
        ease: 'power3.out',
        delay: 0.35,
      })
      gsap.from('.hero-card', {
        opacity: 0,
        y: 24,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.7,
      })
      gsap.to('.hero-beam', {
        opacity: 0.85,
        scale: 1.08,
        duration: 5,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={root}
      className="relative flex min-h-[100dvh] items-center overflow-hidden px-6 pt-28 pb-16 sm:pt-32"
    >
      {/* faisceau de lumière chaude (haut droite) */}
      <div className="hero-beam light-beam pointer-events-none absolute -right-32 -top-24 h-[70vh] w-[70vh] opacity-70" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-10">
        {/* ---- Colonne texte ---- */}
        <div className="relative z-10 text-center md:text-left">
          <span className="hero-anim mb-6 inline-flex max-w-full items-center justify-center gap-2 whitespace-normal rounded-3xl border border-[rgba(244,164,96,0.2)] bg-[rgba(24,18,16,0.5)] px-3.5 py-1.5 text-center font-mono text-[10px] uppercase leading-snug tracking-wider text-accent-soft backdrop-blur-sm sm:rounded-full sm:px-4 sm:text-xs">
            <Sparkles size={13} className="shrink-0" />
            Juriste • Créatif • Résolveur de problèmes
          </span>

          <h1 className="hero-anim break-words text-[1.75rem] font-extrabold leading-[1.12] tracking-tight text-ghost xs:text-4xl sm:text-6xl md:text-[4.2rem]">
            DOVONON
            <br />
            <span className="text-gradient text-glow">Samuel Yann Emric</span>
          </h1>

          <p className="hero-anim mt-3 text-lg font-semibold text-accent-soft sm:mt-4 sm:text-xl">
            {ROLE}
          </p>

          <p className="hero-anim mx-auto mt-4 max-w-md text-base leading-relaxed text-muted md:mx-0">
            Juriste de formation devenu créateur digital — je transforme des problèmes complexes en
            messages clairs : montage vidéo, copywriting et design.
          </p>

          {/* CTA */}
          <div className="hero-anim mt-8 flex flex-col items-stretch sm:flex-row sm:items-center sm:justify-center md:justify-start">
            <button
              onClick={onContact}
              className="btn-gradient flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm"
            >
              <Mail size={17} strokeWidth={2.2} />
              Me contacter
            </button>
          </div>

          {/* mini-badges (stats) */}
          <div className="hero-anim mt-8 flex flex-wrap items-center justify-center gap-2 md:justify-start">
            {STATS.map((s) => (
              <span
                key={s.value}
                className="flex items-center gap-2 rounded-full border border-[rgba(244,164,96,0.15)] bg-[rgba(24,18,16,0.5)] px-3.5 py-1.5 font-mono text-[11px] text-muted backdrop-blur-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="text-ghost/90">{s.value}</span> {s.label}
              </span>
            ))}
          </div>
        </div>

        {/* ---- Colonne visuelle ---- */}
        <div className="hero-visual relative mx-auto w-full max-w-sm md:max-w-none">
          {/* halo chaud derrière la photo */}
          <div className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-accent/20 blur-[60px]" />

          <div className="relative overflow-hidden rounded-[2.5rem] border border-[rgba(244,164,96,0.18)] accent-glow">
            <img
              src={profil}
              alt={NAME}
              className="aspect-[4/5] w-full object-cover object-top"
            />
            {/* fondu chaud en bas pour fusionner avec la carte */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/80 via-void/10 to-transparent" />
          </div>

          {/* carte flottante en verre */}
          <div className="hero-card glass absolute -bottom-5 left-4 right-4 rounded-3xl p-4 sm:left-6 sm:right-auto sm:w-64">
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted">Profil</p>
            <p className="mt-1 text-base font-bold text-ghost">S. Y. E. Dovonon</p>
            <div className="mt-3 space-y-1.5">
              <span className="flex items-center gap-2 text-xs text-muted">
                <Check size={14} className="text-accent" /> Créatif depuis 2022
              </span>
              <span className="flex items-center gap-2 text-xs text-muted">
                <Check size={14} className="text-accent" /> Juriste diplômé 2024
              </span>
            </div>
            <a
              href="#contact"
              aria-label="Contact"
              className="magnetic absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-accent-gradient text-[#1a0f08]"
            >
              <Linkedin size={15} />
            </a>
          </div>
        </div>
      </div>

      <span id="hero-sentinel" className="absolute bottom-0 h-px w-px" />
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  À PROPOS — "Le Manifeste Personnel"                                */
/* ------------------------------------------------------------------ */

function About() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-anim', {
        scrollTrigger: { trigger: root.current, start: 'top 75%' },
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.08,
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="apropos"
      ref={root}
      className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32"
    >
      <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <div className="about-anim">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            01 — À propos
          </span>
          <h2 className="mt-4 break-words text-[1.7rem] font-extrabold leading-[1.15] tracking-tight text-ghost xs:text-4xl sm:text-5xl">
            Cadrer le problème,
            <br /> trouver la <span className="text-gradient">clarté</span>.
          </h2>
        </div>

        {/* filet vertical accent + texte */}
        <div className="relative md:border-l md:border-[rgba(244,164,96,0.25)] md:pl-12">
          {ABOUT.map((p, i) => (
            <p
              key={i}
              className="about-anim mb-5 text-lg leading-relaxed text-ghost/80 last:mb-0 sm:text-xl"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  EXPÉRIENCE — "La Timeline Vivante"                                 */
/* ------------------------------------------------------------------ */

function ExperienceCard({ exp, side }) {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
        x: side === 'left' ? -60 : 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
      gsap.fromTo(
        ref.current.querySelector('.timeline-dot'),
        { scale: 0.6 },
        {
          scrollTrigger: { trigger: ref.current, start: 'top 80%' },
          scale: 1.4,
          duration: 0.4,
          ease: 'power2.out',
          yoyo: true,
          repeat: 1,
        },
      )
    }, ref)
    return () => ctx.revert()
  }, [side])

  return (
    <div
      ref={ref}
      className={`relative md:w-1/2 ${
        side === 'left' ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
      }`}
    >
      {/* point sur la timeline */}
      <span
        className={`timeline-dot absolute top-6 hidden h-3 w-3 rounded-full bg-accent-gradient shadow-[0_0_16px_2px_rgba(238,108,58,0.8)] md:block ${
          side === 'left' ? '-right-[7px]' : '-left-[7px]'
        }`}
      />
      <div className="card-hover glass rounded-4xl p-5 sm:p-7">
        <span className="inline-block rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent sm:text-sm">
          {exp.period}
        </span>
        <h3 className="mt-3 text-lg font-bold leading-snug text-ghost sm:text-xl">{exp.role}</h3>
        <p className="mt-1 text-sm font-medium text-accent-soft">{exp.company}</p>
        <p className="mt-3 border-t border-white/5 pt-3 text-base leading-relaxed text-ghost/70">
          {exp.desc}
        </p>
      </div>
    </div>
  )
}

function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <div className="mb-16 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
          02 — Parcours
        </span>
        <h2 className="mt-4 break-words text-[1.7rem] font-extrabold leading-tight tracking-tight text-ghost xs:text-4xl sm:text-5xl">
          La timeline <span className="text-gradient">vivante</span>
        </h2>
      </div>

      <div className="relative">
        {/* ligne centrale */}
        <span className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-accent/50 to-transparent md:block" />
        <div className="flex flex-col gap-6 sm:gap-10">
          {EXPERIENCES.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} side={i % 2 === 0 ? 'left' : 'right'} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  COMPÉTENCES — "Grille de Maîtrise" (anneaux SVG + compteurs)       */
/* ------------------------------------------------------------------ */

function SkillRing({ skill, index }) {
  const ref = useRef(null)
  const numRef = useRef(null)
  const circleRef = useRef(null)
  const R = 52
  const C = 2 * Math.PI * R

  useEffect(() => {
    const ctx = gsap.context(() => {
      const proxy = { v: 0 }
      gsap.to(proxy, {
        scrollTrigger: { trigger: ref.current, start: 'top 85%' },
        v: skill.level,
        duration: 1.6,
        delay: index * 0.12,
        ease: 'power2.out',
        onUpdate: () => {
          if (numRef.current) numRef.current.textContent = Math.round(proxy.v)
        },
      })
      gsap.fromTo(
        circleRef.current,
        { strokeDashoffset: C },
        {
          scrollTrigger: { trigger: ref.current, start: 'top 85%' },
          strokeDashoffset: C * (1 - skill.level / 100),
          duration: 1.6,
          delay: index * 0.12,
          ease: 'power2.out',
        },
      )
      gsap.from(ref.current, {
        scrollTrigger: { trigger: ref.current, start: 'top 85%' },
        y: 24,
        opacity: 0,
        duration: 0.7,
        delay: index * 0.12,
        ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [skill.level, index, C])

  const gradId = `ember-grad-${index}`

  return (
    <div ref={ref} className="card-hover glass flex min-w-0 flex-col items-center rounded-4xl p-4 sm:p-6">
      <div className="relative aspect-square w-full max-w-[120px]">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EC6A3C" />
              <stop offset="100%" stopColor="#F9B98A" />
            </linearGradient>
          </defs>
          <circle cx="60" cy="60" r={R} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
          <circle
            ref={circleRef}
            cx="60"
            cy="60"
            r={R}
            fill="none"
            stroke={`url(#${gradId})`}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={C}
            strokeDashoffset={C}
            style={{ filter: 'drop-shadow(0 0 6px rgba(238,108,58,0.7))' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-mono text-2xl font-medium text-ghost">
          <span ref={numRef}>0</span>
          <span className="text-accent">%</span>
        </div>
      </div>
      <p className="mt-4 text-center text-sm font-medium text-ghost/85">{skill.name}</p>
    </div>
  )
}

function Skills() {
  return (
    <section id="competences" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="mb-16 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
          03 — Compétences
        </span>
        <h2 className="mt-4 break-words text-[1.7rem] font-extrabold leading-tight tracking-tight text-ghost xs:text-4xl sm:text-5xl">
          Le tableau de <span className="text-gradient">bord</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
        {SKILLS.map((s, i) => (
          <SkillRing key={s.name} skill={s} index={i} />
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  FORMATION — "Les Fondations"                                       */
/* ------------------------------------------------------------------ */

function Education() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.edu-card',
        { y: 30, opacity: 0 },
        {
          scrollTrigger: { trigger: root.current, start: 'top 85%' },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.12,
        },
      )
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="formation"
      ref={root}
      className="relative py-24 sm:py-32"
    >
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-14 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            04 — Formation
          </span>
          <h2 className="mt-4 break-words text-[1.7rem] font-extrabold leading-tight tracking-tight text-ghost xs:text-4xl sm:text-5xl">
            Les <span className="text-gradient">fondations</span>
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          {EDUCATION.map((e, i) => (
            <div
              key={i}
              className="edu-card card-hover glass flex flex-col gap-3 rounded-4xl p-6 sm:flex-row sm:gap-8 sm:p-7"
            >
              <span className="shrink-0 font-mono text-base text-accent sm:w-28 sm:pt-1">
                {e.year}
              </span>
              <div className="border-l-2 border-[rgba(244,164,96,0.3)] pl-4 sm:border-l-0 sm:pl-0">
                <h3 className="text-lg font-bold leading-snug text-ghost">{e.degree}</h3>
                <p className="mt-1 text-sm text-accent-soft/80">{e.school}</p>
                {e.detail && (
                  <p className="mt-2 text-base leading-relaxed text-ghost/70">{e.detail}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  CONTACT — "Le Pont"                                                */
/* ------------------------------------------------------------------ */

function Contact({ onContact }) {
  const root = useRef(null)
  // On n'affiche que les coordonnées réellement renseignées (pas les "À compléter")
  const realContacts = CONTACTS.filter((c) => c.value !== 'À compléter')

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-anim', {
        scrollTrigger: { trigger: root.current, start: 'top 75%' },
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.1,
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="contact"
      ref={root}
      className="aura glass relative mx-auto my-12 max-w-6xl overflow-hidden rounded-5xl px-6 py-24 text-center sm:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/30 blur-[100px]" />
      <span className="contact-anim relative font-mono text-xs uppercase tracking-[0.3em] text-accent">
        05 — Contact
      </span>
      <h2 className="contact-anim relative mt-4 break-words text-[1.9rem] font-extrabold leading-tight tracking-tight text-ghost xs:text-4xl sm:text-6xl">
        Travaillons <span className="text-gradient">ensemble</span>
      </h2>
      <p className="contact-anim relative mx-auto mt-4 max-w-xl text-muted">
        Un projet, une idée à clarifier, une vidéo à faire vivre ? Parlons-en.
      </p>

      <div
        className={`relative mx-auto mt-12 grid gap-3 ${
          realContacts.length > 1 ? 'sm:grid-cols-2' : 'max-w-md'
        }`}
      >
        {realContacts.map((c) => {
          const Icon = c.icon
          const external = c.href.startsWith('http')
          return (
            <a
              key={c.label}
              href={c.href}
              target={external ? '_blank' : undefined}
              rel="noreferrer"
              className="contact-anim lift group flex items-center gap-4 rounded-4xl border border-[rgba(244,164,96,0.14)] bg-[rgba(14,10,8,0.5)] p-5 text-left hover:border-accent/50"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Icon size={19} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs uppercase tracking-wider text-ghost/50">
                  {c.label}
                </span>
                <span className="block break-words text-base text-ghost group-hover:text-accent">
                  {c.value}
                </span>
              </span>
              <ArrowUpRight
                size={18}
                className="shrink-0 text-ghost/30 transition group-hover:text-accent"
              />
            </a>
          )
        })}
      </div>

      <div className="relative mt-10 flex flex-col items-center gap-4">
        <button
          onClick={onContact}
          className="btn-gradient inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-sm sm:w-auto"
        >
          <Mail size={18} strokeWidth={2.2} />
          Me contacter
        </button>
        <a
          href="/cv.pdf"
          download
          className="inline-flex items-center gap-1.5 text-sm text-muted underline-offset-4 transition hover:text-accent hover:underline"
        >
          <Download size={15} />
          Télécharger mon CV (PDF)
        </a>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  FOOTER                                                             */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="rounded-t-5xl border-t border-[rgba(244,164,96,0.14)] bg-surface/60 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {SOCIALS.map((s) => {
            const Icon = s.icon
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="lift group flex items-center gap-2 rounded-full border border-[rgba(244,164,96,0.16)] bg-[rgba(14,10,8,0.5)] px-3.5 py-2 text-sm text-ghost/75 hover:border-accent/50 hover:text-ghost"
              >
                <Icon size={16} className="text-accent" />
                {s.label}
              </a>
            )
          })}
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-ghost/60">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
          </span>
          En ligne
        </div>
      </div>
    </footer>
  )
}

/* ------------------------------------------------------------------ */
/*  MODALE CONTACT — formulaire + visuel                               */
/* ------------------------------------------------------------------ */

function ContactModal({ open, onClose }) {
  const panelRef = useRef(null)
  const [form, setForm] = useState({ nom: '', tel: '', domaine: '', budget: '', message: '' })
  const [sent, setSent] = useState(false)

  // Animation d'entrée + reset à l'ouverture
  useEffect(() => {
    if (!open) return
    setSent(false)
    const ctx = gsap.context(() => {
      gsap.fromTo(
        panelRef.current,
        { y: 24, opacity: 0, scale: 0.97 },
        { y: 0, opacity: 1, scale: 1, duration: 0.45, ease: 'power3.out' },
      )
    })
    return () => ctx.revert()
  }, [open])

  // Échap pour fermer + blocage du scroll de fond
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  if (!open) return null

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const sujet = `Demande de contact — ${form.domaine || 'Projet'}`
    const corps = [
      `Nom et prénoms : ${form.nom}`,
      `Numéro : ${form.tel}`,
      `Domaine : ${form.domaine || '—'}`,
      `Budget : ${form.budget || '—'}`,
      '',
      'Message :',
      form.message || '—',
    ].join('\n')
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      sujet,
    )}&body=${encodeURIComponent(corps)}`
    setSent(true)
  }

  const inputClass =
    'w-full rounded-2xl border border-[rgba(244,164,96,0.18)] bg-[rgba(14,10,8,0.6)] px-4 py-3 text-sm text-ghost placeholder:text-muted/60 outline-none transition focus:border-accent/70 focus:ring-2 focus:ring-accent/20'

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Formulaire de contact"
    >
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* panneau */}
      <div
        ref={panelRef}
        className="glass relative grid w-full max-w-3xl overflow-hidden rounded-[2rem] md:grid-cols-[0.85fr_1.15fr]"
      >
        {/* bouton fermer */}
        <button
          onClick={onClose}
          aria-label="Fermer"
          className="magnetic absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-ghost backdrop-blur-sm hover:border-accent/60"
        >
          <X size={17} />
        </button>

        {/* visuel (direction artistique) */}
        <div className="relative hidden md:block">
          <img src={profil} alt="" className="h-full w-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />
          <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="font-mono text-[10px] uppercase tracking-wider text-accent-soft">
              Disponible pour vos projets
            </p>
            <p className="mt-1 text-xl font-extrabold leading-tight text-ghost">
              Parlons de votre <span className="text-gradient">projet</span>.
            </p>
          </div>
        </div>

        {/* formulaire */}
        <div className="p-6 sm:p-8">
          {sent ? (
            <div className="flex h-full min-h-[20rem] flex-col items-center justify-center text-center">
              <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent-gradient text-[#1a0f08]">
                <Check size={26} />
              </span>
              <h3 className="text-xl font-bold text-ghost">Merci !</h3>
              <p className="mt-2 max-w-xs text-sm text-muted">
                Ton client mail vient de s'ouvrir avec le message pré-rempli. Envoie-le et je te
                réponds au plus vite.
              </p>
              <button
                onClick={onClose}
                className="btn-gradient mt-6 rounded-full px-6 py-2.5 text-sm"
              >
                Fermer
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="text-2xl font-extrabold tracking-tight text-ghost">
                  Me <span className="text-gradient">contacter</span>
                </h3>
                <p className="mt-1 text-sm text-muted">
                  Décris ton besoin, je reviens vers toi rapidement.
                </p>
              </div>

              <input
                type="text"
                required
                placeholder="Nom et prénoms"
                value={form.nom}
                onChange={set('nom')}
                className={inputClass}
              />
              <input
                type="tel"
                required
                placeholder="Numéro de téléphone"
                value={form.tel}
                onChange={set('tel')}
                className={inputClass}
              />

              {/* domaine */}
              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted">
                  Domaine
                </p>
                <div className="flex flex-wrap gap-2">
                  {DOMAINES.map((d) => {
                    const active = form.domaine === d
                    return (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, domaine: d }))}
                        className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
                          active
                            ? 'border-transparent bg-accent-gradient text-[#1a0f08]'
                            : 'border-[rgba(244,164,96,0.2)] bg-[rgba(14,10,8,0.5)] text-muted hover:border-accent/50 hover:text-ghost'
                        }`}
                      >
                        {d}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* budget */}
              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted">
                  Budget
                </p>
                <div className="flex flex-wrap gap-2">
                  {BUDGETS.map((b) => {
                    const active = form.budget === b
                    return (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, budget: b }))}
                        className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
                          active
                            ? 'border-transparent bg-accent-gradient text-[#1a0f08]'
                            : 'border-[rgba(244,164,96,0.2)] bg-[rgba(14,10,8,0.5)] text-muted hover:border-accent/50 hover:text-ghost'
                        }`}
                      >
                        {b}
                      </button>
                    )
                  })}
                </div>
              </div>

              <textarea
                rows={3}
                placeholder="Ton message (optionnel)"
                value={form.message}
                onChange={set('message')}
                className={`${inputClass} resize-none`}
              />

              <button
                type="submit"
                className="btn-gradient flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm"
              >
                <Send size={16} />
                Envoyer ma demande
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  APP                                                                */
/* ------------------------------------------------------------------ */

export default function App() {
  const [contactOpen, setContactOpen] = useState(false)
  const openContact = () => setContactOpen(true)

  // Recalcule les positions ScrollTrigger une fois les polices/images chargées,
  // pour éviter qu'une section reste figée en opacité 0.
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(refresh)
    }
    const t1 = setTimeout(refresh, 400)
    const t2 = setTimeout(refresh, 1200)
    return () => {
      window.removeEventListener('load', refresh)
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <>
      <div className="noise-overlay" />
      <Navbar onContact={openContact} />
      <main>
        <Hero onContact={openContact} />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact onContact={openContact} />
      </main>
      <Footer />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  )
}
