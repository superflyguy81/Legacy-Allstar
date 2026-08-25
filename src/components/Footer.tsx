import { Link } from 'react-router-dom'
import { CONTACT_EMAIL, SOCIAL_HANDLE } from '../data/content'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-brand">
          <span className="footer-title">Legacy All-Stars</span>
          <p className="footer-motto">Building Leaders. Creating Legacy.</p>
        </div>

        <nav className="footer-nav">
          <Link to="/about">About Us</Link>
          <Link to="/mission">Mission & Vision</Link>
          <Link to="/programs">Programs & Impact</Link>
          <Link to="/get-involved">Get Involved</Link>
          <Link to="/donate">Donate</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>

        <div className="footer-contact">
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <span>{SOCIAL_HANDLE} on Facebook &amp; Instagram</span>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {year} Legacy All-Stars. A nonprofit youth development organization.
      </div>
    </footer>
  )
}

export default Footer
