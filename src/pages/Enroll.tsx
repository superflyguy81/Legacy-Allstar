import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import welcome from '../assets/stock/welcome.jpg'
import { ENROLL_MAILTO, CONTACT_EMAIL } from '../data/content'

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
            Email us and we'll take it from there. Online enrollment forms are coming soon.
          </p>
          <a href={ENROLL_MAILTO} className="btn btn-primary">Email Us to Enroll</a>
          <p className="section-note">
            Or write to us directly at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
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
