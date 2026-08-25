import { Link } from 'react-router-dom'
import homeHero from '../assets/stock/home-hero.jpg'
import welcome from '../assets/stock/welcome.jpg'

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
            A nonprofit organization dedicated to empowering youth through mentorship,
            leadership development, life skills education, and community engagement.
          </p>
          <div className="hero-actions">
            <Link to="/get-involved" className="btn btn-primary">Get Involved</Link>
            <Link to="/about" className="btn btn-secondary">Learn About Us</Link>
          </div>
        </div>
      </section>

      <section className="section section-narrow">
        <h2>Every young person has the potential to achieve greatness</h2>
        <p>
          When given the guidance, support, and opportunities needed to succeed, our young
          people build confidence, strengthen character, develop leadership skills, and
          prepare for a successful future. Through mentorship, educational enrichment,
          personal development workshops, and service opportunities, we equip youth with the
          tools they need to thrive academically, socially, and professionally.
        </p>
        <Link to="/about" className="link-arrow">Meet our team &rarr;</Link>
      </section>

      <section className="section section-split">
        <div className="split-image">
          <img src={welcome} alt="Legacy All-Stars students walking into a program event" />
        </div>
        <div className="split-content">
          <span className="eyebrow">Why We Exist</span>
          <h2>Potential is everywhere. Opportunity is not.</h2>
          <p>
            Many students face real challenges navigating middle school, high school, peer
            pressure, social media influences, academic expectations, and future career
            decisions. Legacy All-Stars closes that gap &mdash; one student, one mentor, one
            relationship at a time.
          </p>
          <Link to="/mission" className="link-arrow">Read our mission & vision &rarr;</Link>
        </div>
      </section>

      <section className="section cta-band">
        <h2>Ready to make a difference?</h2>
        <p>Volunteer, mentor, partner, or support our programs financially.</p>
        <div className="hero-actions">
          <Link to="/get-involved" className="btn btn-primary">Get Involved</Link>
          <Link to="/donate" className="btn btn-outline-light">Donate</Link>
        </div>
      </section>
    </>
  )
}

export default Home
