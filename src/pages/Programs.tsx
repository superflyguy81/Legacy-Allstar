import programsHero from '../assets/stock/programs-hero.jpg'
import welcome from '../assets/stock/welcome.jpg'
import campus from '../assets/stock/campus.jpg'
import { CONTACT_EMAIL, ENROLL_FORM_URL, MENTOR_FORM_URL } from '../data/content'

const coreAreas = [
  {
    icon: '💙',
    title: 'Mentorship',
    description:
      'Building meaningful relationships with positive adult role models who provide encouragement, guidance, accountability, and support.',
  },
  {
    icon: '⭐',
    title: 'Leadership Development',
    description:
      'Helping young people develop confidence, communication, decision-making, teamwork, and leadership skills.',
  },
  {
    icon: '🧠',
    title: 'Life Skills',
    description:
      'Preparing students for the real world through practical conversations and hands-on activities.',
  },
  {
    icon: '🤝',
    title: 'Community & Experiences',
    description:
      'Connecting youth with their community through service, cultural experiences, career exposure, recreation, and special opportunities.',
  },
]

const monthlyRoadmap = [
  ['September', 'Communication & Social Skills'],
  ['October', 'Health, Wellness & Self-Care'],
  ['November', 'Identity, Confidence & Self-Worth'],
  ['December', 'Healthy Relationships & Boundaries'],
  ['January', 'Academic Success & Study Skills'],
  ['February', 'Financial Literacy & Real-World Money Skills'],
  ['March', 'Leadership Development'],
  ['April', 'Life Skills & Personal Responsibility'],
  ['May', 'Celebration, Reflection & Future Goals'],
]

const sessionSteps = [
  ['Connect', 'Icebreakers, conversation, peer interaction and relationship building.'],
  ['Learn', 'Interactive discussions around real-life topics.'],
  ['Participate', 'Games, challenges, scenarios and hands-on activities.'],
  ['Mentor', 'Small-group conversations with mentors.'],
  ['Reflect', 'Students identify what they learned and how they can apply it.'],
]

const studentGains = [
  'Greater confidence',
  'Communication skills',
  'Leadership skills',
  'Decision-making skills',
  'Financial awareness',
  'Healthy relationship skills',
  'Self-awareness',
  'Teamwork',
  'Problem-solving',
  'Goal-setting',
  'Real-world knowledge',
  'Positive relationships with mentors and peers',
]

const youthInterests = [
  'Looking for positive role models',
  'Interested in developing leadership skills',
  'Ready to build confidence',
  'Curious about their future',
  'Interested in meeting new people',
  'Looking for positive experiences outside of school',
  'Willing to learn, participate and grow',
]

function Programs() {
  return (
    <div className="legacy-experience">
      <section className="experience-hero">
        <div className="experience-hero-content">
          <span className="eyebrow">A place to belong. A path to become.</span>
          <h1>The Legacy Experience</h1>
          <h2>More Than Mentorship. It’s Preparation for Life.</h2>
          <p>
            Legacy All-Stars provides young people with meaningful mentorship, interactive
            learning, leadership development, life skills, and experiences designed to help
            them grow with confidence and purpose.
          </p>
          <p className="experience-audience">Ages 12–18 <span aria-hidden="true">|</span> Snellville &amp; Gwinnett County</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={ENROLL_FORM_URL} target="_blank" rel="noopener noreferrer">
              Register Your Student
            </a>
            <a className="btn btn-outline-light" href={MENTOR_FORM_URL} target="_blank" rel="noopener noreferrer">
              Become a Mentor
            </a>
          </div>
        </div>
        <div className="experience-hero-image">
          <img src={programsHero} alt="Young people and a mentor sharing ideas around a table" />
          <span className="hero-image-caption">Growing together, one experience at a time</span>
        </div>
      </section>

      <section className="section experience-core">
        <div className="section-header">
          <span className="eyebrow">The foundation</span>
          <h2>Our Core Program Areas</h2>
          <p className="section-subtitle">Four ways we help young people discover what they’re capable of.</p>
        </div>
        <div className="core-area-grid">
          {coreAreas.map((area, index) => (
            <article className="core-area-card" key={area.title}>
              <span className="core-area-number">0{index + 1}</span>
              <span className="core-area-icon" aria-hidden="true">{area.icon}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section alt-bg roadmap-section">
        <div className="section-header">
          <span className="eyebrow">A year of discovery</span>
          <h2>Monthly Youth Development Series</h2>
          <p className="roadmap-intro">Growing One Month at a Time</p>
          <p className="section-subtitle">
            Each month, Legacy All-Stars explores a different topic designed to help young people
            navigate the challenges, opportunities, and decisions that come with growing up.
          </p>
        </div>
        <ol className="roadmap">
          {monthlyRoadmap.map(([month, theme], index) => (
            <li className="roadmap-item" key={month}>
              <span className="roadmap-marker" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <div className="roadmap-card">
                <span className="month-label">{month}</span>
                <h3>{theme}</h3>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section session-section">
        <div className="section-header">
          <span className="eyebrow">A welcoming space to grow</span>
          <h2>What Happens During a Legacy Session?</h2>
          <p className="section-subtitle">Every session is designed to connect, engage &amp; grow.</p>
        </div>
        <div className="session-flow">
          {sessionSteps.map(([title, description], index) => (
            <article className="session-step" key={title}>
              <span className="session-step-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section alt-bg mentorship-section">
        <div className="mentorship-photo-grid" aria-label="Legacy All-Stars youth experiences">
          <img className="mentorship-photo-main" src={welcome} alt="Students smiling together outside their learning space" />
          <img className="mentorship-photo-detail" src={campus} alt="Students exploring a new community and learning environment" />
          <span className="photo-accent" aria-hidden="true">The power of showing up</span>
        </div>
        <div className="mentorship-copy">
          <span className="eyebrow">Small Group Mentorship</span>
          <h2>Small Groups. Real Conversations. Lasting Connections.</h2>
          <p>
            Students have opportunities to connect in small groups where they can ask questions,
            share ideas, learn from their peers, and receive encouragement from mentors.
          </p>
          <a className="link-arrow" href={MENTOR_FORM_URL} target="_blank" rel="noopener noreferrer">
            Make a difference as a mentor
          </a>
        </div>
      </section>

      <section className="section gains-section">
        <div className="gains-heading">
          <span className="eyebrow">The skills to carry forward</span>
          <h2>What Will My Child Gain?</h2>
          <p>By participating in Legacy All-Stars, students have opportunities to develop:</p>
        </div>
        <ul className="gains-grid">
          {studentGains.map((gain) => <li key={gain}>{gain}</li>)}
        </ul>
        <div className="gains-promise">
          <span aria-hidden="true">✦</span>
          <p>We’re not trying to create perfect kids.<strong>We’re helping young people become prepared, confident and capable adults.</strong></p>
        </div>
      </section>

      <section className="section alt-bg audience-section">
        <div className="audience-card">
          <div className="audience-card-copy">
            <span className="eyebrow">A place for every young person</span>
            <h2>Who Is Legacy For?</h2>
            <h3>Who Can Participate?</h3>
            <p className="audience-age">Youth Ages 12–18</p>
            <p>Legacy All-Stars is designed for young people who are:</p>
            <ul className="audience-list">
              {youthInterests.map((interest) => <li key={interest}>{interest}</li>)}
            </ul>
          </div>
          <aside className="audience-callout">
            <span aria-hidden="true">“</span>
            <p>Students don’t have to be “problem kids” to benefit from mentorship.</p>
          </aside>
        </div>
      </section>

      <section className="section parent-section">
        <div className="parent-value-card">
          <div className="parent-value-icon" aria-hidden="true">✦</div>
          <div>
            <span className="eyebrow">For Parents &amp; Guardians</span>
            <h2>Help Your Child Prepare for Life.</h2>
            <p>
              You want your child to be prepared for more than the next test or school year. You
              want them to know how to communicate, make decisions, handle challenges, build
              healthy relationships, manage money, lead others, and navigate their future.
            </p>
            <p>
              Legacy All-Stars is designed to help young people develop those skills while
              surrounding them with positive people and experiences.
            </p>
            <a className="btn btn-primary" href={ENROLL_FORM_URL} target="_blank" rel="noopener noreferrer">
              Register Your Student
            </a>
          </div>
        </div>
      </section>

      <section className="section cta-band experience-cta">
        <span className="eyebrow">Every future is worth investing in</span>
        <h2>Their Legacy Starts Now.</h2>
        <p>
          Every young person has potential. Sometimes they just need the right people,
          opportunities, and experiences to help them see it.
        </p>
        <h3>Is your student ready to build their legacy?</h3>
        <div className="hero-actions">
          <a className="btn btn-primary" href={ENROLL_FORM_URL} target="_blank" rel="noopener noreferrer">
            Register Your Student
          </a>
          <a className="btn btn-outline-light" href={MENTOR_FORM_URL} target="_blank" rel="noopener noreferrer">
            Become a Mentor
          </a>
          <a className="btn btn-outline-light" href={`mailto:${CONTACT_EMAIL}?subject=Partner%20with%20Legacy`}>
            Partner With Legacy
          </a>
        </div>
      </section>
    </div>
  )
}

export default Programs
