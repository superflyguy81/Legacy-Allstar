import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import contactHero from '../assets/stock/contact-hero.jpg'
import { faqs } from '../data/content'

function FAQs() {
  return (
    <>
      <PageHero
        eyebrow="For Families"
        title="Frequently Asked Questions"
        image={contactHero}
        imageAlt="A Legacy All-Stars team member greeting visitors at a welcome table"
      />

      <section className="section section-narrow">
        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="faq" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
        <p className="section-note">
          Don't see your question? <Link to="/contact">Contact us</Link> and we'll get back to you.
        </p>
      </section>
    </>
  )
}

export default FAQs
