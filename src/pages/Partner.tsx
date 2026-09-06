import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import campus from '../assets/stock/campus.jpg'
import { PARTNER_MAILTO, SPONSOR_MAILTO } from '../data/content'

function Partner() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Partner With Us"
        subtitle="Businesses, churches, schools, fraternities and sororities, and community organizations all have a place in building Legacy."
        image={campus}
        imageAlt="Legacy All-Stars students walking up the steps to a program building"
      />

      <section className="section section-narrow">
        <h2>Community Partnerships</h2>
        <p>
          Partners help us expand what's possible for young people &mdash; hosting site
          visits, offering career exposure, providing meeting space, connecting students
          with mentors, and opening doors to new experiences.
        </p>

        <h2>Sponsor an Experience</h2>
        <p>
          Sponsorships fund the college tours, workshops, service projects, and cultural
          experiences that make Legacy more than mentoring. Sponsors are recognized for the
          experiences they make possible.
        </p>

        <div className="hero-actions">
          <a href={PARTNER_MAILTO} className="btn btn-primary">Become a Community Partner</a>
          <a href={SPONSOR_MAILTO} className="btn btn-secondary">Sponsor an Experience</a>
        </div>

        <p className="section-note">
          Prefer to give directly? Visit our <Link to="/donate">Donate</Link> page.
        </p>
      </section>
    </>
  )
}

export default Partner
