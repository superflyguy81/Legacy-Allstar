import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Icon from '../components/Icon'
import aboutHero from '../assets/stock/about-hero.jpg'
import { safetyItems } from '../data/content'

const SAFETY_DETAILS: Record<string, string> = {
  'Background Screening': 'Every prospective mentor completes background screening before being approved to work with youth.',
  'Mentor Training': 'Mentors are trained on program expectations, communication guidelines, and how to build healthy, supportive relationships with young people.',
  'Youth Safety Standards': 'Clear youth-safety standards govern how mentors and students interact, in person and online.',
  'Ongoing Program Support': 'Our team stays connected with mentors and families throughout the program to provide guidance and address concerns.',
}

function YouthSafety() {
  return (
    <>
      <PageHero
        eyebrow="For Families"
        title="Their Potential Matters. Their Safety Does Too."
        subtitle="Legacy All-Stars is committed to providing a safe, supportive environment for every young person we serve."
        image={aboutHero}
        imageAlt="A Legacy All-Stars mentor talking one-on-one with a student"
      />

      <section className="section section-narrow">
        <h2>How We Protect Every Student</h2>
        <p>
          Our mentor onboarding process includes screening, training, program expectations,
          communication guidelines, and youth-safety standards before mentors are approved to
          serve.
        </p>
        <div className="safety-details">
          {safetyItems.map((item) => (
            <div className="safety-detail" key={item.title}>
              <Icon name={item.icon} className="safety-icon" />
              <div>
                <h3>{item.title}</h3>
                <p>{SAFETY_DETAILS[item.title]}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="section-note">
          Questions about our safety practices? <Link to="/contact">Reach out to our team</Link> anytime.
        </p>
      </section>
    </>
  )
}

export default YouthSafety
