import PageHero from '../components/PageHero'
import programsHero from '../assets/stock/programs-hero.jpg'
import { focusAreas, monthlyThemes } from '../data/content'

function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Programs & Impact"
        title="Program Focus Areas"
        subtitle="Draft themes we explore across our group sessions."
        image={programsHero}
        imageAlt="Legacy All-Stars mentors and students planning session themes together"
      />

      <section className="section">
        <div className="focus-grid">
          {focusAreas.map((area) => (
            <div className="focus-card" key={area.title}>
              <h3>{area.title}</h3>
              <ul>
                {area.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="section-note">
          This is a draft menu &mdash; not everything runs at once. We select the focus areas
          that best fit each group's needs.
        </p>
      </section>

      <section className="section alt-bg">
        <h2>Monthly Session Themes</h2>
        <p className="section-subtitle">A draft twelve-month arc for our group sessions.</p>
        <div className="months-grid">
          {monthlyThemes.map((theme, index) => (
            <div className="month-card" key={theme}>
              <span className="month-label">Month {index + 1}</span>
              <p>{theme}</p>
            </div>
          ))}
        </div>
        <p className="section-note">
          This twelve-month arc builds from identity and self-worth toward leadership,
          service, and future planning. Months can shift to match the school calendar and
          student needs.
        </p>
      </section>
    </>
  )
}

export default Programs
