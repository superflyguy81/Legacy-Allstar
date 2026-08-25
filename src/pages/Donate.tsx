import PageHero from '../components/PageHero'
import donateHero from '../assets/stock/donate-hero.jpg'
import { donationLevels, CONTACT_EMAIL } from '../data/content'

function Donate() {
  return (
    <>
      <PageHero
        eyebrow="Support Our Mission"
        title="Invest in the Next Generation"
        subtitle="Your donation directly supports programs that empower youth to grow academically, socially, and personally."
        image={donateHero}
        imageAlt="Legacy All-Stars students and mentors celebrating together"
      />

      <section className="section section-narrow">
        <div className="notice-card">
          <h2>Online Giving Coming Soon</h2>
          <p>
            We're finishing the setup of our organization's bank account so we can accept
            online donations securely. In the meantime, please{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>email us</a> if you'd like to make a
            contribution or arrange another way to give &mdash; we'll follow up with details.
          </p>
        </div>
      </section>

      <section className="section section-narrow">
        <h2>Why Your Support Matters</h2>
        <p>Every contribution helps us:</p>
        <ul className="bullet-list">
          <li>Provide mentorship opportunities for youth</li>
          <li>Offer leadership and life skills workshops</li>
          <li>Develop educational and enrichment programs</li>
          <li>Support community service and civic engagement activities</li>
          <li>Purchase program materials and resources</li>
          <li>Create safe, positive environments for learning and growth</li>
          <li>Expand our reach to serve more youth and families</li>
        </ul>
        <p>No gift is too small. Every donation helps us make a lasting difference.</p>
      </section>

      <section className="section alt-bg">
        <h2>Donation Levels</h2>
        <p className="section-subtitle">
          When you support Legacy All-Stars, you're helping build futures, strengthen
          communities, and inspire the leaders of tomorrow.
        </p>
        <div className="donation-grid">
          {donationLevels.map((level) => (
            <div className="donation-card" key={level.amount}>
              <span className="donation-amount">{level.amount}</span>
              <p>{level.impact}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section cta-band">
        <h2>Thank You</h2>
        <p>
          Thank you for believing in our mission and investing in the future of our youth.
          Your generosity helps us continue building leaders, inspiring excellence, and
          creating a lasting legacy in our communities.
        </p>
      </section>
    </>
  )
}

export default Donate
