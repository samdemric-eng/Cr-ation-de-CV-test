/**
 * Génère public/cv.pdf — CV de DOVONON Samuel Yann Emric.
 * Style "Ember" : fond clair imprimable + accents orange.
 * Lancer : npm run cv
 */
import PDFDocument from 'pdfkit'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

/* ----------------------------- Contenu ----------------------------- */
const NAME = 'DOVONON Samuel Yann Emric'
const ROLE = 'Entrepreneur, Créateur de Contenu & Développeur'
const TAGLINE = 'Juriste de formation • Vidéo, Design & Copywriting'

const ABOUT = [
  "Juriste de formation, créateur dans l'âme. J'ai passé des années à décortiquer des problèmes complexes — et j'ai compris qu'un bon argument juridique et une bonne histoire de marque obéissent à la même logique : la clarté.",
  "Aujourd'hui, je mets cette rigueur au service de la création : montage vidéo, copywriting et design, pour transformer des idées confuses en messages nets qui captent et convertissent.",
]

const EXPERIENCES = [
  {
    period: '2024 — Présent',
    role: 'Créateur de Contenu & Consultant Marque',
    company: 'Freelance',
    desc: "Accompagnement de créateurs et petites marques de A à Z : stratégie de contenu, montage vidéo court-format, copywriting et identité visuelle cohérente.",
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
    desc: "Rédaction d'actes et vulgarisation juridique : apprendre à rendre simple ce qui est complexe — le socle de ma manière de communiquer aujourd'hui.",
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
    degree: 'Autoformation — Montage, Copywriting & Design',
    school: 'Parcours autodidacte (certifications en ligne)',
    detail: "Compétences créatives bâties sur le terrain, en parallèle des études.",
  },
  {
    year: '2021',
    degree: "Entrée à l'université — 1ère année de Droit",
    school: 'Faculté de Droit et de Science Politique',
    detail: "Bases en raisonnement juridique, argumentation et rédaction.",
  },
  {
    year: '2020',
    degree: 'Baccalauréat — Série littéraire',
    school: "Mention obtenue à l'examen national",
    detail: 'Solide formation en lettres, langues et culture générale.',
  },
]

const EMAIL = 'samd.emric@gmail.com'
const LINKS = [
  'instagram.com/emricyann',
  'x.com/yann_emric77',
  'linkedin.com/in/samuel-yann-emric-dovonon-05949a381',
]

/* ----------------------------- Couleurs ---------------------------- */
const INK = '#1A1722'
const ACCENT = '#E06A33'
const PEACH = '#F2A35C'
const MUTED = '#6B635C'
const TRACK = '#ECE5DE'
const LIGHT = '#F7F3EE'

/* ------------------------------ Mise en page ----------------------- */
const M = 44 // marge
const W = 595.28 // largeur A4
const CW = W - M * 2 // largeur contenu

const doc = new PDFDocument({ size: 'A4', margin: 0, bufferPages: true })
const out = path.join(root, 'public', 'cv.pdf')
doc.pipe(fs.createWriteStream(out))

// fond clair global (page 1)
doc.rect(0, 0, W, 841.89).fill(LIGHT)

/* ------------------------------ En-tête ---------------------------- */
const headerH = 150
doc.rect(0, 0, W, headerH).fill(INK)
// liseré accent en bas du header
doc.rect(0, headerH, W, 4).fill(ACCENT)

doc.fillColor('#F6EDE6').font('Helvetica-Bold').fontSize(25)
doc.text(NAME, M, 40, { width: CW })
doc.fillColor(PEACH).font('Helvetica-Oblique').fontSize(13)
doc.text(ROLE, M, 76, { width: CW })
doc.fillColor('#C9C2BB').font('Helvetica').fontSize(9.5)
doc.text(TAGLINE, M, 98)
doc.fillColor('#B7AFA8').fontSize(9)
doc.text(`${EMAIL}   |   ${LINKS.join('   |   ')}`, M, 118, { width: CW })

/* ------------------------------ Helpers ---------------------------- */
let y = headerH + 26

function ensure(space) {
  if (y + space > 800) {
    doc.addPage({ size: 'A4', margin: 0 })
    doc.rect(0, 0, W, 841.89).fill(LIGHT)
    y = M
  }
}

function section(title) {
  ensure(40)
  doc.rect(M, y + 1, 18, 3).fill(ACCENT)
  doc.fillColor(ACCENT).font('Helvetica-Bold').fontSize(12)
  doc.text(title.toUpperCase(), M + 26, y - 2, { characterSpacing: 1.5 })
  y += 20
  doc.moveTo(M, y).lineTo(W - M, y).lineWidth(0.5).strokeColor(TRACK).stroke()
  y += 12
}

function paragraph(text, opts = {}) {
  const size = opts.size || 9.5
  const color = opts.color || '#3A3530'
  doc.fillColor(color).font(opts.font || 'Helvetica').fontSize(size)
  const h = doc.heightOfString(text, { width: CW, lineGap: 2 })
  ensure(h + 4)
  doc.text(text, M, y, { width: CW, lineGap: 2 })
  y += h + (opts.gap ?? 6)
}

/* ------------------------------ Profil ----------------------------- */
section('Profil')
ABOUT.forEach((p) => paragraph(p))
y += 4

/* ---------------------------- Expérience --------------------------- */
section('Expérience')
EXPERIENCES.forEach((e, i) => {
  ensure(64)
  doc.fillColor(ACCENT).font('Helvetica-Bold').fontSize(9)
  doc.text(e.period.toUpperCase(), M, y, { characterSpacing: 0.5 })
  doc.fillColor(INK).font('Helvetica-Bold').fontSize(11.5)
  doc.text(e.role, M, y + 12)
  doc.fillColor(MUTED).font('Helvetica-Oblique').fontSize(9.5)
  doc.text(e.company, M, y + 26)
  y += 40
  paragraph(e.desc, { gap: i === EXPERIENCES.length - 1 ? 6 : 12 })
})

/* ---------------------------- Compétences -------------------------- */
section('Compétences')
SKILLS.forEach((s) => {
  ensure(26)
  doc.fillColor(INK).font('Helvetica').fontSize(9.5).text(s.name, M, y)
  doc.fillColor(MUTED).text(`${s.level}%`, M, y, { width: CW, align: 'right' })
  const by = y + 14
  doc.roundedRect(M, by, CW, 6, 3).fill(TRACK)
  // barre dégradée orange -> pêche
  const grad = doc.linearGradient(M, by, M + CW, by)
  grad.stop(0, ACCENT).stop(1, PEACH)
  doc.roundedRect(M, by, (CW * s.level) / 100, 6, 3).fill(grad)
  y = by + 16
})
y += 4

/* ----------------------------- Formation --------------------------- */
section('Formation')
EDUCATION.forEach((e) => {
  ensure(50)
  doc.fillColor(ACCENT).font('Helvetica-Bold').fontSize(9).text(e.year, M, y)
  doc.fillColor(INK).font('Helvetica-Bold').fontSize(10.5).text(e.degree, M + 90, y)
  doc.fillColor(MUTED).font('Helvetica-Oblique').fontSize(9).text(e.school, M + 90, y + 14, {
    width: CW - 90,
  })
  const dh = doc.heightOfString(e.school, { width: CW - 90 })
  doc.fillColor('#4A453F').font('Helvetica').fontSize(9).text(e.detail, M + 90, y + 14 + dh + 2, {
    width: CW - 90,
    lineGap: 1,
  })
  const detH = doc.heightOfString(e.detail, { width: CW - 90 })
  y += 14 + dh + 2 + detH + 12
})

/* ----------------------------- Contact ----------------------------- */
section('Contact')
doc.fillColor(INK).font('Helvetica-Bold').fontSize(10).text('Email : ', M, y, { continued: true })
doc.font('Helvetica').fillColor('#3A3530').text(EMAIL)
y = doc.y + 4
LINKS.forEach((l) => {
  doc.fillColor(ACCENT).font('Helvetica').fontSize(9.5).text('• ', M, y, { continued: true })
  doc.fillColor('#3A3530').text(l)
  y = doc.y + 2
})

/* ------------------------------ Pied ------------------------------- */
const range = doc.bufferedPageRange()
for (let i = 0; i < range.count; i++) {
  doc.switchToPage(i)
  doc
    .fillColor('#A79E97')
    .font('Helvetica')
    .fontSize(8)
    .text(`${NAME} — ${ROLE}`, M, 812, { width: CW, align: 'left' })
  doc.text(`${i + 1}/${range.count}`, M, 812, { width: CW, align: 'right' })
}

doc.end()
console.log('CV PDF généré ->', out)
