import PageHero from '../components/PageHero'
import programsHero from '../assets/stock/programs-hero.jpg'
import { VOLUNTEER_MAILTO } from '../data/content'

function Volunteer() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Volunteer"
        subtitle="Share your time and talents to help build Legacy."
        image={programsHero}
        imageAlt="Legacy All-Stars volunteers planning program sessions together"
      />

      <section className="section section-narrow">
        <h2>Ways to Volunteer</h2>
        <p>
          You don't have to be a mentor to make a difference. Volunteers help bring our
          workshops, college tours, service projects, and community experiences to life.
        </p>
        <ul className="bullet-list">
          <li>Support events, workshops, and field experiences</li>
          <li>Share professional expertise as a guest speaker</li>
          <li>Help with program logistics and materials</li>
          <li>Lend a skill &mdash; photography, design, tutoring, coaching, and more</li>
        </ul>

        <div className="notice-card">
          <h2>Let's Find the Right Fit</h2>
          <p>Tell us how you'd like to help and when you're available.</p>
          <a href={VOLUNTEER_MAILTO} className="btn btn-primary">Email Us to Volunteer</a>
        </div>
      </section>
    </>
  )
}

export default Volunteer
