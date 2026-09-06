import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import homeHero from '../assets/stock/home-hero.jpg'
import welcome from '../assets/stock/welcome.jpg'
import {
  pillars,
  experienceSteps,
  activities,
  safetyItems,
  impactStats,
  waysToHelp,
} from '../data/content'

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-image">
          <img src={homeHero} alt="Legacy All-Stars students smiling together on campus" />
        </div>
        <div className="hero-content">
          <span className="eyebrow">Legacy All-Stars</span>
          <h1>Building Leaders. Creating Legacy.</h1>
          <p>
            Empowering young people in grades 5&ndash;12 through mentorship, leadership
            development, life skills, and meaningful community connections.
          </p>
          <div className="hero-actions">
            <Link to="/families/enroll" className="btn btn-primary">Enroll a Student</Link>
            <Link to="/get-involved/mentor" className="btn btn-outline-light">Become a Mentor</Link>
          </div>
          <Link to="/about" className="link-arrow link-arrow-light">Learn More About Legacy &rarr;</Link>
        </div>
      </section>

      <section className="pillars">
        {pillars.map((pillar) => (
          <div className="pillar" key={pillar.title}>
            <Icon name={pillar.icon} className="pillar-icon" />
            <h3>{pillar.title}</h3>
            <p>{pillar.description}</p>
          </div>
        ))}
      </section>

      <section className="section section-split">
        <div className="split-content">
          <span className="eyebrow">Why Legacy?</span>
          <h2>Every Young Person Deserves Someone in Their Corner.</h2>
          <p>
            Legacy All-Stars connects young people with positive role models, meaningful
            experiences, and practical tools that help them navigate school, relationships,
            career decisions, and life.
          </p>
          <p>Our goal isn't simply to tell youth what success looks like.</p>
          <p className="brand-line">We help them discover what success can look like for them.</p>
        </div>
        <div className="split-image">
          <img src={welcome} alt="Legacy All-Stars students walking into a program event" />
        </div>
      </section>

      <section className="section alt-bg">
        <div className="section-header">
          <span className="eyebrow">How the Program Works</span>
          <h2>The Legacy Experience</h2>
        </div>
        <ol className="steps">
          {experienceSteps.map((step, index) => (
            <li className="step" key={step.title}>
              <span className="step-number">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section">
        <div className="pathways">
          <div className="pathway pathway-families">
            <span className="eyebrow">For Young People &amp; Families</span>
            <h2>Your Future Deserves a Strong Team.</h2>
            <p>
              Legacy All-Stars gives students access to mentors, leadership experiences,
              life-skills development, career exposure, and a community committed to helping
              them grow.
            </p>
            <Link to="/families/enroll" className="btn btn-primary">Enroll a Student</Link>
          </div>
          <div className="pathway pathway-mentors">
            <span className="eyebrow">For Mentors</span>
            <h2>Someone's Future Could Be Different Because You Showed Up.</h2>
            <p>
              You don't have to have all the answers to be a great mentor. You need
              consistency, encouragement, patience, and a willingness to invest in a young
              person.
            </p>
            <Link to="/get-involved/mentor" className="btn btn-primary">Become a Mentor</Link>
          </div>
        </div>
      </section>

      <section className="section alt-bg">
        <div className="section-header">
          <span className="eyebrow">Activities &amp; Experiences</span>
          <h2>More Than Mentoring.</h2>
        </div>
        <ul className="activity-grid">
          {activities.map((activity) => (
            <li className="activity" key={activity}>{activity}</li>
          ))}
        </ul>
      </section>

      <section className="section section-narrow safety">
        <span className="eyebrow">Safety &amp; Parent Trust</span>
        <h2>Their Potential Matters. Their Safety Does Too.</h2>
        <p>
          Legacy All-Stars is committed to providing a safe, supportive environment for every
          young person we serve.
        </p>
        <p>
          Our mentor onboarding process includes screening, training, program expectations,
          communication guidelines, and youth-safety standards before mentors are approved to
          serve.
        </p>
        <ul className="safety-grid">
          {safetyItems.map((item) => (
            <li className="safety-item" key={item.title}>
              <Icon name={item.icon} className="safety-icon" />
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
        <Link to="/families/youth-safety" className="btn btn-secondary">Learn About Our Program</Link>
      </section>

      <section className="section impact">
        <div className="section-header">
          <span className="eyebrow">2026 Inaugural Program Year</span>
          <h2>Our Legacy Is Just Beginning.</h2>
        </div>
        <div className="impact-grid">
          {impactStats.map((stat) => (
            <div className="impact-stat" key={stat.label}>
              <span className="impact-value">{stat.value ?? '—'}</span>
              <span className="impact-label">{stat.label}</span>
            </div>
          ))}
        </div>
        <p className="section-note impact-note">
          We're tracking our impact from day one and will share our numbers here as the
          program grows.
        </p>
      </section>

      <section className="section alt-bg stories">
        <div className="section-header">
          <h2>Legacy Stories</h2>
        </div>
        <div className="story-placeholder">
          <p>
            As our inaugural year unfolds, this is where you'll hear from students, parents,
            mentors, and community partners about what Legacy means to them.
          </p>
          <p className="story-cta">
            Have a Legacy story to share? <Link to="/contact">We'd love to hear it.</Link>
          </p>
        </div>
      </section>

      <section className="section section-narrow ways">
        <h2>There Are Many Ways to Help Build Legacy.</h2>
        <p>
          Businesses, churches, schools, fraternities and sororities, and community
          organizations all have a place in this work.
        </p>
        <ul className="ways-list">
          {waysToHelp.map((way) => (
            <li key={way.title}>
              <Link to={way.to}>{way.title}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="section cta-band cta-final">
        <h2>Every Legacy Starts Somewhere.</h2>
        <p>
          For a young person, it may start with one mentor, one opportunity, or one person
          believing in them.
        </p>
        <div className="hero-actions">
          <Link to="/families/enroll" className="btn btn-primary">Enroll a Student</Link>
          <Link to="/get-involved/mentor" className="btn btn-outline-light">Become a Mentor</Link>
        </div>
        <p className="cta-motto">Building Leaders. Creating Legacy.</p>
      </section>
    </>
  )
}

export default Home
