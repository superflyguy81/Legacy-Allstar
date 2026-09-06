import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Icon from '../components/Icon'
import donateHero from '../assets/stock/donate-hero.jpg'
import { safetyItems, MENTOR_MAILTO } from '../data/content'

function Mentor() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Someone's Future Could Be Different Because You Showed Up."
        subtitle="You don't have to have all the answers to be a great mentor. You need consistency, encouragement, patience, and a willingness to invest in a young person."
        image={donateHero}
        imageAlt="Legacy All-Stars mentors and students celebrating together"
      />

      <section className="section section-narrow">
        <h2>What Mentors Do</h2>
        <p>
          Mentors provide encouragement, guidance, accountability, and exposure to new
          opportunities. You'll help a young person in grades 5&ndash;12 build the
          confidence, skills, and relationships they need to move toward their future.
        </p>

        <h2>Becoming a Mentor</h2>
        <p>Every mentor completes our onboarding process before being approved to serve:</p>
        <ul className="safety-grid">
          {safetyItems.map((item) => (
            <li className="safety-item" key={item.title}>
              <Icon name={item.icon} className="safety-icon" />
              <span>{item.title}</span>
            </li>
          ))}
        </ul>

        <div className="notice-card">
          <h2>Ready to Show Up?</h2>
          <p>Tell us a little about yourself and we'll be in touch with next steps.</p>
          <a href={MENTOR_MAILTO} className="btn btn-primary">Email Us to Become a Mentor</a>
        </div>

        <p className="section-note">
          Not ready to mentor yet? There are <Link to="/get-involved">other ways to help</Link>.
        </p>
      </section>
    </>
  )
}

export default Mentor
