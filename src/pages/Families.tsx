import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import campus from '../assets/stock/campus.jpg'
import { experienceSteps } from '../data/content'

const FAMILY_LINKS = [
  { to: '/families/enroll', title: 'Enroll a Student', description: 'Start the short interest and enrollment process.' },
  { to: '/families/parent-information', title: 'Parent Information', description: 'What to expect and how we partner with families.' },
  { to: '/families/faqs', title: 'FAQs', description: 'Answers to the questions parents ask most.' },
  { to: '/families/youth-safety', title: 'Youth Safety', description: 'How we screen, train, and support every mentor.' },
]

function Families() {
  return (
    <>
      <PageHero
        eyebrow="For Families"
        title="Your Future Deserves a Strong Team."
        subtitle="Legacy All-Stars gives students in grades 5–12 access to mentors, leadership experiences, life-skills development, career exposure, and a community committed to helping them grow."
        image={campus}
        imageAlt="Legacy All-Stars students walking up the steps to a program building"
      />

      <section className="section">
        <div className="link-cards">
          {FAMILY_LINKS.map((link) => (
            <Link to={link.to} className="link-card" key={link.to}>
              <h3>{link.title}</h3>
              <p>{link.description}</p>
              <span className="link-card-arrow">&rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section alt-bg">
        <div className="section-header">
          <span className="eyebrow">What Happens Next</span>
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
    </>
  )
}

export default Families
