import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import welcome from '../assets/stock/welcome.jpg'
import { ENROLL_FORM_URL, CONTACT_EMAIL, REGISTRATION_FEE_NOTE } from '../data/content'

function Enroll() {
  return (
    <>
      <PageHero
        eyebrow="For Families"
        title="Enroll a Student"
        subtitle="Legacy All-Stars serves young people in grades 5–12. Enrollment starts with a short conversation."
        image={welcome}
        imageAlt="Legacy All-Stars students arriving at a program event"
      />

      <section className="section section-narrow">
        <h2>How to Get Started</h2>
        <ol className="numbered-list">
          <li>Send us a short note with your name, your student's name and grade, and the best way to reach you.</li>
          <li>A member of our team will follow up to answer questions and share next steps.</li>
          <li>Your student attends an orientation and is connected with a mentor and program experiences that fit their interests and goals.</li>
        </ol>

        <div className="notice-card">
          <h2>Ready to Enroll?</h2>
          <p>
            Complete our Youth Registration / Parent Consent form to get started.
          </p>
          <a
            href={ENROLL_FORM_URL}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Registration
          </a>
          <p className="section-note">{REGISTRATION_FEE_NOTE}</p>
          <p className="section-note">
            Questions first? Write to us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </div>

        <p className="section-note">
          Have questions first? Visit our <Link to="/families/faqs">FAQs</Link> or read about{' '}
          <Link to="/families/youth-safety">how we keep youth safe</Link>.
        </p>
      </section>
    </>
  )
}

export default Enroll
