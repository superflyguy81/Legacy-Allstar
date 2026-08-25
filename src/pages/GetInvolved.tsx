import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import involvedHero from '../assets/stock/involved-hero.jpg'
import { otherWaysToSupport, CONTACT_EMAIL } from '../data/content'

function GetInvolved() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Volunteer & Partner With Us"
        subtitle="Together, we can create opportunities that inspire personal growth, leadership, and lifelong success."
        image={involvedHero}
        imageAlt="A Legacy All-Stars volunteer welcoming a student with a handshake"
      />

      <section className="section section-narrow">
        <h2>Other Ways to Support</h2>
        <p>
          In addition to financial contributions, you can support Legacy All-Stars in several
          ways:
        </p>
        <ol className="numbered-list">
          {otherWaysToSupport.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="section cta-band">
        <h2>Volunteer or Partner With Legacy All-Stars</h2>
        <p>
          Whether you want to volunteer, become a mentor, sponsor a program, or partner as an
          organization, we'd love to hear from you.
        </p>
        <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-primary">Email Us to Get Started</a>
        <p className="section-note-light">
          Or visit our <Link to="/contact">Contact Us</Link> page for more ways to reach us.
        </p>
      </section>
    </>
  )
}

export default GetInvolved
