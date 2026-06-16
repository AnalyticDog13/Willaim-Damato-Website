import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Thread from '../components/Thread.jsx'
import Reveal from '../components/Reveal.jsx'
import './Home.css'

const EMAIL = 'will@williamdamato.com'

/* ---- Content ---- */
const services = [
  {
    title: 'Brand & web identity',
    body: 'A visual language built for the screen — type, color, motion, and tone that make a company unmistakable before a word is read.',
    tags: ['Art direction', 'Design systems', 'Naming'],
  },
  {
    title: 'Design & art direction',
    body: 'Interfaces designed page by page, not from a template. Considered layout, typographic hierarchy, and the small details that read as care.',
    tags: ['UX/UI', 'Prototyping', 'Copy'],
  },
  {
    title: 'Development',
    body: 'Hand-built front-ends that are fast, accessible, and animated with intent. Clean code your team can actually maintain.',
    tags: ['React', 'Framer Motion', 'Headless CMS'],
  },
  {
    title: 'Launch & growth',
    body: 'Performance budgets, SEO foundations, and analytics wired in — so the site keeps earning long after it ships.',
    tags: ['Core Web Vitals', 'SEO', 'A/B testing'],
  },
]

const work = [
  {
    name: 'Halden & Co.',
    sector: 'Architecture studio',
    result: 'A quiet, gallery-style portfolio that doubled enquiry quality.',
    metric: '+38% qualified leads',
    span: 'wide',
  },
  {
    name: 'Verra Health',
    sector: 'Healthtech',
    result: 'A trustworthy product marketing site with a clear path to demo.',
    metric: '2.1× demo signups',
    span: 'tall',
  },
  {
    name: 'Mono Coffee',
    sector: 'DTC retail',
    result: 'A storefront with motion that made the brand feel premium.',
    metric: '+24% AOV',
    span: 'reg',
  },
  {
    name: 'Field Notes Fund',
    sector: 'Venture capital',
    result: 'An editorial site that reads like a point of view, not a brochure.',
    metric: '1.4s load',
    span: 'reg',
  },
]

const process = [
  {
    n: '01',
    title: 'Discover',
    body: 'We start with your audience, your goals, and the one thing you need this site to do. No assumptions.',
  },
  {
    n: '02',
    title: 'Design',
    body: 'Direction first, then page-by-page design. You see real layouts early and often, never a surprise at the end.',
  },
  {
    n: '03',
    title: 'Build',
    body: 'Hand-coded, responsive, and accessible from the first commit. Animation added where it earns its place.',
  },
  {
    n: '04',
    title: 'Launch',
    body: 'We ship, measure, and refine. You leave with a site — and the means to keep it sharp.',
  },
]

const stats = [
  { v: '40+', l: 'Sites shipped' },
  { v: '<1.5s', l: 'Median load' },
  { v: '1', l: 'Designer who builds' },
]

/* Headline that assembles word-by-word on load */
function AssemblingHeadline() {
  const reduce = useReducedMotion()
  const lines = [['Websites'], ['with', 'a', 'point'], ['of', 'view.']]
  let i = 0
  return (
    <h1 className="hero__title">
      {lines.map((line, li) => (
        <span className="hero__line" key={li}>
          {line.map((word) => {
            const delay = 0.25 + i * 0.08
            i += 1
            const isAccent = word === 'point' || word === 'view.'
            return (
              <span className="hero__word-mask" key={word + i}>
                <motion.span
                  className={`hero__word ${isAccent ? 'is-accent' : ''}`}
                  initial={reduce ? false : { y: '108%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
                >
                  {word}
                </motion.span>
              </span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ===================== HERO ===================== */}
      <section className="hero">
        <Thread className="hero__thread" />
        <div className="shell hero__inner">
          <motion.p
            className="eyebrow hero__eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Independent web studio · est. 2025
          </motion.p>

          <AssemblingHeadline />

          <motion.p
            className="hero__sub"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            William D&rsquo;Amato Design crafts fast, distinctive websites for companies
            that refuse to look like everyone else. One studio, end to end —
            from the first idea to the live site.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/contact" className="btn btn--accent">
              Start a project <span className="btn__arrow" aria-hidden="true">→</span>
            </Link>
            <a href="#work" className="btn btn--ghost">
              See the work
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <span>Scroll</span>
          <span className="hero__scroll-line" />
        </motion.div>
      </section>

      {/* ===================== MANIFESTO ===================== */}
      <section className="manifesto section" id="studio">
        <div className="shell">
          <Reveal as="p" className="manifesto__lead">
            Most websites are <em>templated</em>. They load slowly, say nothing
            specific, and look like the last ten you scrolled past. We build the
            other kind — <span className="manifesto__hl">considered, quick, and
            unmistakably yours.</span>
          </Reveal>
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section className="section services" id="services">
        <div className="shell">
          <div className="section__head">
            <Reveal>
              <p className="eyebrow">What we do</p>
              <h2 className="section__title">Everything a site needs, under one roof.</h2>
            </Reveal>
            <Reveal delay={0.1} className="services__note">
              No hand-offs between agencies. The person who designs your site is
              the person who builds it.
            </Reveal>
          </div>

          <div className="services__grid">
            {services.map((s, idx) => (
              <Reveal as="article" className="service" key={s.title} delay={idx * 0.06}>
                <span className="service__index">{String(idx + 1).padStart(2, '0')}</span>
                <h3 className="service__title">{s.title}</h3>
                <p className="service__body">{s.body}</p>
                <ul className="service__tags">
                  {s.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WORK ===================== */}
      <section className="section work" id="work">
        <div className="shell">
          <div className="section__head">
            <Reveal>
              <p className="eyebrow">Selected work</p>
              <h2 className="section__title">Sites that did a job.</h2>
            </Reveal>
            <Reveal delay={0.1} className="work__note">
              A sample of recent engagements. Full case studies on request.
            </Reveal>
          </div>

          <div className="work__grid">
            {work.map((w, idx) => (
              <Reveal
                as="article"
                className={`card card--${w.span}`}
                key={w.name}
                delay={idx * 0.06}
              >
                <a href="/contact" className="card__link" aria-label={`${w.name} — enquire`}>
                  <div className="card__top">
                    <span className="card__sector">{w.sector}</span>
                    <span className="card__metric">{w.metric}</span>
                  </div>
                  <div className="card__visual" aria-hidden="true">
                    <span className="card__glyph">{w.name.charAt(0)}</span>
                  </div>
                  <div className="card__bottom">
                    <h3 className="card__name">{w.name}</h3>
                    <p className="card__result">{w.result}</p>
                    <span className="card__cta">
                      View project <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PROCESS ===================== */}
      <section className="section process" id="process">
        <div className="shell">
          <div className="section__head">
            <Reveal>
              <p className="eyebrow">How it works</p>
              <h2 className="section__title">Four steps. No surprises.</h2>
            </Reveal>
          </div>

          <div className="process__list">
            <span className="process__spine" aria-hidden="true" />
            {process.map((p, idx) => (
              <Reveal as="div" className="step" key={p.n} delay={idx * 0.05}>
                <span className="step__n">{p.n}</span>
                <div className="step__body">
                  <h3 className="step__title">{p.title}</h3>
                  <p className="step__text">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== STATS + CTA ===================== */}
      <section className="section cta-band">
        <div className="shell">
          <div className="stats">
            {stats.map((s, idx) => (
              <Reveal as="div" className="stat" key={s.l} delay={idx * 0.06}>
                <span className="stat__v">{s.v}</span>
                <span className="stat__l">{s.l}</span>
              </Reveal>
            ))}
          </div>

          <Reveal className="cta-band__panel">
            <h2 className="cta-band__title">
              Let&rsquo;s build something worth the first impression.
            </h2>
            <p className="cta-band__sub">
              Tell us what you&rsquo;re making. We reply to every enquiry within two
              business days.
            </p>
            <div className="cta-band__actions">
              <Link to="/contact" className="btn btn--accent">
                Start a project <span className="btn__arrow" aria-hidden="true">→</span>
              </Link>
              <a href={`mailto:${EMAIL}`} className="cta-band__email">
                {EMAIL}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </motion.div>
  )
}
