import PageHero from '../components/PageHero'
import missionHero from '../assets/stock/mission-hero.jpg'

function Mission() {
  return (
    <>
      <PageHero
        eyebrow="Mission & Vision"
        title="Who We Are"
        image={missionHero}
        imageAlt="Legacy All-Stars youth group session"
      />

      <section className="section section-narrow">
        <div className="mv-block">
          <h2>Our Mission</h2>
          <p>
            Legacy All-Stars inspires, mentors, and equips young people to confidently
            navigate life's transitions by fostering academic achievement, personal growth,
            leadership development, and life skills that prepare them for success in
            education, career, and life.
          </p>
        </div>

        <div className="mv-block">
          <h2>Our Vision</h2>
          <p>
            A future where every young person has the confidence, character, and
            opportunities to reach their full potential, lead with purpose, and create
            lasting positive change in their communities.
          </p>
        </div>
      </section>

      <section className="section section-narrow alt-bg">
        <span className="eyebrow">Why We Exist</span>
        <h2>Our Why</h2>
        <p>
          Many students face real challenges as they navigate middle school, high school,
          peer pressure, social media influences, academic expectations, and future career
          decisions. Legacy All-Stars exists to help young people develop the skills,
          mindset, and character needed to thrive.
        </p>
        <p>
          Potential is everywhere, but opportunity is not. Legacy All-Stars closes that gap
          &mdash; one student, one mentor, one relationship at a time.
        </p>
      </section>
    </>
  )
}

export default Mission
