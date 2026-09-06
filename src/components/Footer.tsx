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

        <div className="footer-columns">
          <nav className="footer-nav">
            <span className="footer-heading">Organization</span>
            <Link to="/about">About</Link>
            <Link to="/programs">Programs</Link>
            <Link to="/donate">Donate</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <nav className="footer-nav">
            <span className="footer-heading">For Families</span>
            <Link to="/families/enroll">Enroll a Student</Link>
            <Link to="/families/parent-information">Parent Information</Link>
            <Link to="/families/faqs">FAQs</Link>
            <Link to="/families/youth-safety">Youth Safety</Link>
          </nav>
          <nav className="footer-nav">
            <span className="footer-heading">Get Involved</span>
            <Link to="/get-involved/mentor">Become a Mentor</Link>
            <Link to="/get-involved/volunteer">Volunteer</Link>
            <Link to="/get-involved/partner">Partner With Us</Link>
          </nav>
        </div>

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
