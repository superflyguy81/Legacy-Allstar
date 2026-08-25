import PageHero from '../components/PageHero'
import aboutHero from '../assets/stock/about-hero.jpg'
import { boardMembers } from '../data/content'

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About Legacy All-Stars"
        subtitle="Who we are, what we do, and our commitment to youth."
        image={aboutHero}
        imageAlt="A Legacy All-Stars mentor talking with a student"
      />

      <section className="section section-narrow">
        <h2>Who We Are</h2>
        <p>
          Legacy All-Stars is a nonprofit organization dedicated to empowering youth through
          mentorship, leadership development, life skills education, and community
          engagement. We believe every young person has the potential to achieve greatness
          when given the guidance, support, and opportunities needed to succeed.
        </p>

        <h2>What We Do</h2>
        <p>
          Our programs are designed to help youth build confidence, strengthen character,
          develop leadership skills, and prepare for a successful future. Through
          mentorship, educational enrichment, personal development workshops, and service
          opportunities, we equip young people with the tools they need to thrive
          academically, socially, and professionally.
        </p>

        <h2>Our Commitment</h2>
        <p>
          We are committed to creating a positive and supportive environment where youth can
          discover their strengths, pursue their goals, and become leaders in their
          communities. We work alongside parents, volunteers, educators, and community
          partners to inspire the next generation to leave a lasting legacy of excellence,
          integrity, and service.
        </p>

        <p className="motto-line">Our Motto: Building Leaders. Creating Legacy.</p>
      </section>

      <section className="section board-section">
        <h2>Board Members</h2>
        <p className="section-subtitle">The people who guide and steward Legacy All-Stars.</p>
        <div className="board-grid">
          {boardMembers.map((member) => (
            <div className="board-card" key={member.name}>
              <img src={member.photo} alt={member.name} className="board-photo" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default About
