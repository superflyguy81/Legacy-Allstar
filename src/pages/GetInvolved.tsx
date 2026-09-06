import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import involvedHero from '../assets/stock/involved-hero.jpg'
import { waysToHelp } from '../data/content'

const INVOLVEMENT_LINKS = [
  { to: '/get-involved/mentor', title: 'Become a Mentor', description: "Someone's future could be different because you showed up." },
  { to: '/get-involved/volunteer', title: 'Volunteer', description: 'Share your time and talents at events, workshops, and experiences.' },
  { to: '/get-involved/partner', title: 'Partner With Us', description: 'Businesses, churches, schools, and organizations all have a place here.' },
]

function GetInvolved() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="There Are Many Ways to Help Build Legacy."
        subtitle="Together, we can create opportunities that inspire personal growth, leadership, and lifelong success."
        image={involvedHero}
        imageAlt="A Legacy All-Stars volunteer welcoming a student with a handshake"
      />

      <section className="section">
        <div className="link-cards link-cards-3">
          {INVOLVEMENT_LINKS.map((link) => (
            <Link to={link.to} className="link-card" key={link.to}>
              <h3>{link.title}</h3>
              <p>{link.description}</p>
              <span className="link-card-arrow">&rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section section-narrow alt-bg">
        <h2>Every Contribution Counts</h2>
        <ul className="ways-list">
          {waysToHelp.map((way) => (
            <li key={way.title}>
              <Link to={way.to}>{way.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default GetInvolved
