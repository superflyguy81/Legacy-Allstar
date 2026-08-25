import PageHero from '../components/PageHero'
import contactHero from '../assets/stock/contact-hero.jpg'
import { CONTACT_EMAIL, SOCIAL_HANDLE } from '../data/content'

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        image={contactHero}
        imageAlt="A Legacy All-Stars team member greeting visitors at a welcome table"
      />

      <section className="section section-narrow">
        <div className="contact-grid">
          <div className="contact-item">
            <h3>Email</h3>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <p className="section-note">
              Please use this address until our domain email addresses are set up.
            </p>
          </div>

          <div className="contact-item">
            <h3>Follow Us</h3>
            <p>Facebook &amp; Instagram: {SOCIAL_HANDLE}</p>
          </div>

          <div className="contact-item">
            <h3>Our Motto</h3>
            <p>Building Leaders. Creating Legacy.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
