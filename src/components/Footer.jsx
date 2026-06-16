import { Link } from 'react-router-dom'
import './Footer.css'

const EMAIL = 'will@williamdamato.com'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <div className="footer__lead">
          <p className="footer__kicker">Have a project in mind?</p>
          <a href={`mailto:${EMAIL}`} className="footer__email">
            {EMAIL}
          </a>
          <Link to="/contact" className="btn btn--accent footer__cta">
            Start a project <span className="btn__arrow" aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <span className="footer__col-h">Sitemap</span>
            <a href="/#work">Work</a>
            <a href="/#services">Services</a>
            <a href="/#process">Process</a>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer__col">
            <span className="footer__col-h">Studio</span>
            <span className="footer__static">Independent · est. 2019</span>
            <span className="footer__static">Remote-first · worldwide</span>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </div>
      </div>

      <div className="shell footer__base">
        <span className="footer__wordmark">William D&rsquo;Amato Design</span>
        <span className="footer__fine">© {year} — All rights reserved.</span>
      </div>
    </footer>
  )
}
