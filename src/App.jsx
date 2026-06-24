import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Download,
  Mail,
  Phone,
  Linkedin,
  Github,
  Youtube,
  Instagram,
  ArrowUpRight,
  Scale,
  Sparkles,
  MapPin,
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
  { value: 'Juriste & Créatif', label: 'profil' },
  { value: '3+ ans', label: "d'expérience" },
  { value: 'Cotonou', label: 'basé à' },
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
    school: "Université d'Abomey-Calavi — Faculté de Droit et de Science Politique",
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

/* ------------------------------------------------------------------ */
/*  NAVBAR — "La Signature Flottante"                                  */
/* ------------------------------------------------------------------ */

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

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

  return (
    <nav
      className={`fixed top-3 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-2xl -translate-x-1/2 transition-all duration-500 ease-magnetic sm:top-4 sm:w-auto ${
        scrolled
          ? 'border border-white/10 bg-void/70 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(245,165,36,0.4)]'
          : 'border border-white/5 bg-void/30 backdrop-blur-md sm:border-transparent sm:bg-transparent sm:backdrop-blur-none'
      } flex items-center justify-between gap-3 rounded-full py-2 pl-5 pr-2 sm:gap-2`}
    >
      <a
        href="#hero"
        className="shrink-0 font-mono text-sm font-semibold tracking-tight text-accent"
      >
        {SHORT}
      </a>
      <div className="hidden items-center gap-1 md:flex">
        {NAV_LINKS.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className="lift rounded-full px-3 py-1.5 text-sm text-ghost/70 hover:text-ghost"
          >
            {l.label}
          </a>
        ))}
      </div>
      <a
        href="/cv.pdf"
        download
        className="magnetic flex shrink-0 items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-void shadow-[0_0_20px_-2px_rgba(245,165,36,0.6)]"
      >
        <Download size={15} strokeWidth={2.2} />
        <span className="hidden sm:inline">Télécharger CV</span>
        <span className="sm:hidden">CV</span>
      </a>
    </nav>
  )
}

/* ------------------------------------------------------------------ */
/*  HERO — "La Première Impression"                                    */
/* ------------------------------------------------------------------ */

function Hero() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-anim', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.12,
        delay: 0.15,
      })
      gsap.to('.hero-glow', {
        opacity: 0.55,
        scale: 1.1,
        duration: 4,
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
      className="aura relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      {/* halos décoratifs */}
      <div className="hero-glow pointer-events-none absolute left-1/2 top-1/3 h-[50vh] w-[50vh] -translate-x-1/2 rounded-full bg-accent/30 opacity-30 blur-[120px]" />

      {/* photo */}
      <div className="hero-anim relative mb-8">
        <div className="absolute -inset-1 rounded-full bg-accent/40 blur-md" />
        <img
          src={profil}
          alt={NAME}
          className="accent-glow relative h-32 w-32 rounded-full border-2 border-accent/60 object-cover object-top sm:h-40 sm:w-40"
        />
      </div>

      {/* nom */}
      <h1 className="hero-anim max-w-4xl text-[2rem] font-extrabold leading-[1.08] tracking-tight text-ghost text-glow xs:text-4xl sm:text-6xl md:text-7xl">
        {NAME}
      </h1>

      {/* titre serif italique */}
      <p className="hero-anim mt-3 font-serif text-xl italic text-accent sm:mt-4 sm:text-4xl">
        {ROLE}
      </p>

      {/* stats monospace */}
      <div className="hero-anim mt-7 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2 font-mono text-[11px] text-ghost/60 sm:mt-8 sm:gap-x-3 sm:text-sm">
        {STATS.map((s, i) => (
          <span key={s.label} className="flex items-center gap-2.5 sm:gap-3">
            {i > 0 && <span className="text-accent/50">•</span>}
            <span>
              <span className="text-ghost/90">{s.value}</span> {s.label}
            </span>
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="hero-anim mt-9 flex w-full max-w-xs flex-col items-stretch gap-3 sm:mt-10 sm:w-auto sm:max-w-none sm:flex-row sm:items-center">
        <a
          href="/cv.pdf"
          download
          className="magnetic flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-void shadow-[0_0_30px_-4px_rgba(245,165,36,0.7)]"
        >
          <Download size={17} strokeWidth={2.2} />
          Télécharger CV
        </a>
        <a
          href="#contact"
          className="magnetic flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-ghost backdrop-blur-sm hover:border-accent/50"
        >
          Me contacter
        </a>
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
          <h2 className="mt-4 font-serif text-4xl italic leading-tight text-ghost sm:text-5xl">
            Cadrer le problème,
            <br /> trouver la clarté.
          </h2>
        </div>

        {/* filet vertical accent + texte */}
        <div className="relative md:border-l md:border-accent/30 md:pl-12">
          {ABOUT.map((p, i) => (
            <p
              key={i}
              className="about-anim mb-5 text-lg leading-relaxed text-ghost/75 last:mb-0 sm:text-xl"
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
        className={`timeline-dot absolute top-6 hidden h-3 w-3 rounded-full bg-accent shadow-[0_0_16px_2px_rgba(245,165,36,0.8)] md:block ${
          side === 'left' ? '-right-[7px]' : '-left-[7px]'
        }`}
      />
      <div className="card-hover rounded-4xl border border-white/10 bg-graphite/80 p-7 backdrop-blur-sm">
        <span className="font-mono text-sm text-accent">{exp.period}</span>
        <h3 className="mt-2 text-xl font-bold text-ghost">{exp.role}</h3>
        <p className="mt-0.5 text-sm text-ghost/60">{exp.company}</p>
        <p className="mt-3 text-[15px] leading-relaxed text-ghost/75">{exp.desc}</p>
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
        <h2 className="mt-4 font-serif text-4xl italic text-ghost sm:text-5xl">
          La timeline vivante
        </h2>
      </div>

      <div className="relative">
        {/* ligne centrale */}
        <span className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-accent/40 to-transparent md:block" />
        <div className="flex flex-col gap-10">
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

  return (
    <div
      ref={ref}
      className="card-hover flex flex-col items-center rounded-4xl border border-white/10 bg-graphite/60 p-6 backdrop-blur-sm"
    >
      <div className="relative h-32 w-32">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r={R} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
          <circle
            ref={circleRef}
            cx="60"
            cy="60"
            r={R}
            fill="none"
            stroke="#F5A524"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={C}
            strokeDashoffset={C}
            style={{ filter: 'drop-shadow(0 0 6px rgba(245,165,36,0.7))' }}
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
        <h2 className="mt-4 font-serif text-4xl italic text-ghost sm:text-5xl">
          Le tableau de bord
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
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
      className="relative bg-graphite/40 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-14 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            04 — Formation
          </span>
          <h2 className="mt-4 font-serif text-4xl italic text-ghost sm:text-5xl">
            Les fondations
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          {EDUCATION.map((e, i) => (
            <div
              key={i}
              className="edu-card card-hover flex flex-col gap-3 rounded-4xl border border-white/10 bg-void/60 p-6 sm:flex-row sm:gap-8 sm:p-7"
            >
              <span className="shrink-0 font-mono text-base text-accent sm:w-28 sm:pt-1">
                {e.year}
              </span>
              <div className="border-l-2 border-accent/30 pl-4 sm:border-l-0 sm:pl-0">
                <h3 className="text-lg font-bold leading-snug text-ghost">{e.degree}</h3>
                <p className="mt-0.5 text-sm text-ghost/55">{e.school}</p>
                {e.detail && (
                  <p className="mt-2 text-[15px] leading-relaxed text-ghost/70">{e.detail}</p>
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

function Contact() {
  const root = useRef(null)

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
      className="aura relative mx-auto my-12 max-w-6xl overflow-hidden rounded-5xl border border-accent/20 bg-graphite/60 px-6 py-24 text-center sm:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/30 blur-[100px]" />
      <span className="contact-anim relative font-mono text-xs uppercase tracking-[0.3em] text-accent">
        05 — Contact
      </span>
      <h2 className="contact-anim relative mt-4 font-serif text-4xl italic text-ghost sm:text-6xl">
        Travaillons ensemble
      </h2>
      <p className="contact-anim relative mx-auto mt-4 max-w-xl text-ghost/70">
        Un projet, une idée à clarifier, une vidéo à faire vivre ? Parlons-en.
      </p>

      <div className="relative mt-12 grid gap-3 sm:grid-cols-2">
        {CONTACTS.map((c) => {
          const Icon = c.icon
          return (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="contact-anim lift group flex items-center gap-4 rounded-4xl border border-white/10 bg-void/50 p-5 text-left hover:border-accent/50"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Icon size={19} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs uppercase tracking-wider text-ghost/50">
                  {c.label}
                </span>
                <span className="block break-words text-[15px] text-ghost group-hover:text-accent">
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

      <a
        href="/cv.pdf"
        download
        className="magnetic relative mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-void shadow-[0_0_40px_-6px_rgba(245,165,36,0.8)]"
      >
        <Download size={18} strokeWidth={2.2} />
        Télécharger mon CV
      </a>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  FOOTER                                                             */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="rounded-t-5xl border-t border-white/10 bg-graphite/60 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-semibold text-ghost">{NAME}</p>
          <p className="text-sm text-ghost/50">
            Fait avec le vibe coding · {new Date().getFullYear()}
          </p>
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
/*  APP                                                                */
/* ------------------------------------------------------------------ */

export default function App() {
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
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
