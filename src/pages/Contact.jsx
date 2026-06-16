import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal.jsx'
import './Contact.css'

const EMAIL = 'will@williamdamato.com'

const projectTypes = [
  'New website',
  'Redesign',
  'Brand + website',
  'Landing page',
  'Something else',
]

const budgets = ['Under $500', '$500 – $1,000', '$1,000 – $2,000', '$2,000+', 'Not sure yet']

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    type: projectTypes[0],
    budget: budgets[1],
    message: '',
  })
  const [sent, setSent] = useState(false)

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = `New project enquiry — ${form.name || 'Website'}${
      form.company ? ` (${form.company})` : ''
    }`

    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company ? `Company: ${form.company}` : null,
      `Project type: ${form.type}`,
      `Budget: ${form.budget}`,
      '',
      'Project details:',
      form.message,
      '',
      '— Sent from williamdamato.com',
    ]
      .filter((l) => l !== null)
      .join('\n')

    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailto
    setSent(true)
  }

  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="shell contact__inner">
        {/* Left — the pitch */}
        <aside className="contact__aside">
          <Reveal>
            <p className="eyebrow">Start a project</p>
            <h1 className="contact__title">
              Tell us what you&rsquo;re building.
            </h1>
            <p className="contact__lead">
              Fill in a few details and your message goes straight to Will. Prefer
              email? Reach us directly — every enquiry gets a reply within two
              business days.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="contact__direct">
            <span className="contact__direct-label">Email</span>
            <a href={`mailto:${EMAIL}`} className="contact__direct-email">
              {EMAIL}
            </a>
          </Reveal>

          <Reveal delay={0.16} className="contact__assurances">
            <div className="assurance">
              <span className="assurance__dot" />
              <p>A real person reads every message — no funnels, no bots.</p>
            </div>
            <div className="assurance">
              <span className="assurance__dot" />
              <p>We&rsquo;ll tell you honestly if we&rsquo;re not the right fit.</p>
            </div>
            <div className="assurance">
              <span className="assurance__dot" />
              <p>Currently booking projects for the next quarter.</p>
            </div>
          </Reveal>
        </aside>

        {/* Right — the form */}
        <Reveal as="div" className="contact__formwrap" delay={0.08} y={28}>
          {sent ? (
            <div className="contact__success" role="status">
              <div className="contact__success-mark" aria-hidden="true">✓</div>
              <h2>Your email is ready to send.</h2>
              <p>
                We&rsquo;ve opened your mail app with the details filled in — just
                hit send. If nothing opened, email us directly at{' '}
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
              </p>
              <button className="btn btn--ghost" onClick={() => setSent(false)}>
                Edit the message
              </button>
            </div>
          ) : (
            <form className="form" onSubmit={handleSubmit} noValidate>
              <div className="form__row">
                <label className="field">
                  <span className="field__label">Name</span>
                  <input
                    type="text"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Jane Rivera"
                    required
                    autoComplete="name"
                  />
                </label>
                <label className="field">
                  <span className="field__label">Email</span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="jane@company.com"
                    required
                    autoComplete="email"
                  />
                </label>
              </div>

              <label className="field">
                <span className="field__label">
                  Company <span className="field__opt">optional</span>
                </span>
                <input
                  type="text"
                  value={form.company}
                  onChange={update('company')}
                  placeholder="Company Inc."
                  autoComplete="organization"
                />
              </label>

              <div className="form__row">
                <label className="field">
                  <span className="field__label">Project type</span>
                  <div className="field__select">
                    <select value={form.type} onChange={update('type')}>
                      {projectTypes.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                    <span className="field__chev" aria-hidden="true">▾</span>
                  </div>
                </label>
                <label className="field">
                  <span className="field__label">Budget</span>
                  <div className="field__select">
                    <select value={form.budget} onChange={update('budget')}>
                      {budgets.map((b) => (
                        <option key={b}>{b}</option>
                      ))}
                    </select>
                    <span className="field__chev" aria-hidden="true">▾</span>
                  </div>
                </label>
              </div>

              <label className="field">
                <span className="field__label">What are you building?</span>
                <textarea
                  rows="5"
                  value={form.message}
                  onChange={update('message')}
                  placeholder="A few sentences on your project, your goals, and your timeline."
                  required
                />
              </label>

              <button type="submit" className="btn btn--accent form__submit">
                Send enquiry <span className="btn__arrow" aria-hidden="true">→</span>
              </button>
              <p className="form__fine">
                Submitting opens your email app addressed to {EMAIL}.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </motion.div>
  )
}
