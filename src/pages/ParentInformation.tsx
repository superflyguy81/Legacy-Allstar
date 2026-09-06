import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import missionHero from '../assets/stock/mission-hero.jpg'
import { pillars, activities } from '../data/content'
import Icon from '../components/Icon'

function ParentInformation() {
  return (
    <>
      <PageHero
        eyebrow="For Families"
        title="Parent Information"
        subtitle="What Legacy All-Stars offers your student, and how we partner with you."
        image={missionHero}
        imageAlt="A Legacy All-Stars mentor leading a small group session"
      />

      <section className="section section-narrow">
        <h2>What Your Student Gains</h2>
        <p>
          Legacy All-Stars connects young people in grades 5&ndash;12 with positive role
          models, meaningful experiences, and practical tools that help them navigate
          school, relationships, career decisions, and life. Every part of the program is
          built around four pillars:
        </p>
        <ul className="pillar-list">
          {pillars.map((pillar) => (
            <li key={pillar.title}>
              <Icon name={pillar.icon} className="pillar-list-icon" />
              <div>
                <strong>{pillar.title}</strong>
                <p>{pillar.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <h2>Activities &amp; Experiences</h2>
        <p>Beyond one-on-one mentoring, students take part in experiences such as:</p>
        <ul className="activity-grid activity-grid-compact">
          {activities.map((activity) => (
            <li className="activity" key={activity}>{activity}</li>
          ))}
        </ul>

        <h2>Our Partnership With You</h2>
        <p>
          We work alongside parents, guardians, educators, and community partners. Families
          are kept informed about program activities and expectations, and our team is
          always available to answer questions along the way.
        </p>

        <h2>Safety Comes First</h2>
        <p>
          Every mentor completes background screening, training, and youth-safety standards
          before being approved to serve.{' '}
          <Link to="/families/youth-safety">Read more about our safety commitments &rarr;</Link>
        </p>
      </section>

      <section className="section cta-band">
        <h2>Ready to Take the Next Step?</h2>
        <div className="hero-actions">
          <Link to="/families/enroll" className="btn btn-primary">Enroll a Student</Link>
          <Link to="/families/faqs" className="btn btn-outline-light">Read the FAQs</Link>
        </div>
      </section>
    </>
  )
}

export default ParentInformation
