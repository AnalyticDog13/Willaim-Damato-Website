import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Nav.css'

const links = [
  { label: 'Work', target: 'work' },
  { label: 'Services', target: 'services' },
  { label: 'Process', target: 'process' },
  { label: 'Studio', target: 'studio' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [location.pathname])

  const goToSection = (target) => (e) => {
    e.preventDefault()
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      // wait for home to mount, then scroll
      setTimeout(() => scrollToId(target), 80)
    } else {
      scrollToId(target)
    }
  }

  const scrollToId = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <motion.header
      className={`nav ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
    >
      <div className="nav__inner shell">
        <Link to="/" className="nav__brand" aria-label="William D'Amato Design — home">
          <svg className="nav__mark" viewBox="0 0 32 32" aria-hidden="true">
            <path
              d="M5 10 C 11 26, 13 26, 16 11 C 19 26, 21 26, 27 10"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="nav__word">
            William&nbsp;D&rsquo;Amato <span className="nav__word-dim">Design</span>
          </span>
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.target} href={`/#${l.target}`} onClick={goToSection(l.target)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__cta">
          <Link to="/contact" className="btn btn--accent nav__cta-btn">
            Start a project
            <span className="btn__arrow" aria-hidden="true">→</span>
          </Link>
        </div>

        <button
          className="nav__burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {/* Mobile sheet */}
      <div className="nav__sheet" hidden={!open}>
        {links.map((l) => (
          <a key={l.target} href={`/#${l.target}`} onClick={goToSection(l.target)}>
            {l.label}
          </a>
        ))}
        <Link to="/contact" className="btn btn--accent nav__sheet-cta">
          Start a project →
        </Link>
      </div>
    </motion.header>
  )
}
