import channel from '../assets/board/channel.jpg'
import mkaneghay from '../assets/board/mkaneghay.jpg'
import kim from '../assets/board/kim.jpg'
import farrah from '../assets/board/farrah.jpg'
import roy from '../assets/board/roy.jpg'
import lashawn from '../assets/board/lashawn.jpg'
import antoine from '../assets/board/antoine.jpg'
import george from '../assets/board/george.jpg'

export const CONTACT_EMAIL = 'legacyallstarsorg@gmail.com'
export const SOCIAL_HANDLE = '@legacyallstarsorg'

export const mailto = (subject: string) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`

export const ENROLL_MAILTO = mailto('Enroll a Student - Legacy All-Stars')
export const MENTOR_MAILTO = mailto('Become a Mentor - Legacy All-Stars')
export const VOLUNTEER_MAILTO = mailto('Volunteer - Legacy All-Stars')
export const PARTNER_MAILTO = mailto('Community Partnership - Legacy All-Stars')
export const SPONSOR_MAILTO = mailto('Sponsor an Experience - Legacy All-Stars')
export const DONATE_MAILTO = mailto('Donation - Legacy All-Stars')

export interface BoardMember {
  name: string
  role: string
  photo: string
}

export const boardMembers: BoardMember[] = [
  { name: 'Channel Strobhart', role: 'Chair', photo: channel },
  { name: "M'Kaneghay Hudson", role: 'Vice Chair', photo: mkaneghay },
  { name: 'Kim Griffin', role: 'Secretary', photo: kim },
  { name: 'Farrah Coleman', role: 'Treasurer', photo: farrah },
  { name: 'Roy Hudson', role: 'Co-Treasurer', photo: roy },
  { name: 'LaShawn Roberson', role: 'Community Lead Engagement', photo: lashawn },
  { name: 'Antoine Roberson', role: 'Program Support Lead', photo: antoine },
  { name: 'George Strobhart', role: 'Board Support', photo: george },
]

export interface Pillar {
  title: string
  description: string
  icon: 'mentorship' | 'leadership' | 'lifeskills' | 'community'
}

export const pillars: Pillar[] = [
  { title: 'Mentorship', description: 'Positive relationships with caring adults.', icon: 'mentorship' },
  { title: 'Leadership', description: 'Building confidence, character, and decision-making skills.', icon: 'leadership' },
  { title: 'Life Skills', description: 'Preparing young people for real-world independence and success.', icon: 'lifeskills' },
  { title: 'Community', description: 'Service, connection, and opportunities beyond the classroom.', icon: 'community' },
]

export interface Step {
  title: string
  description: string
}

export const experienceSteps: Step[] = [
  { title: 'Join', description: 'Students and families complete a short interest and enrollment process.' },
  { title: 'Connect', description: 'Youth participate in orientation and are connected with mentors, programs, and experiences that fit their interests and goals.' },
  { title: 'Grow', description: 'Mentors provide encouragement, guidance, accountability, and exposure to new opportunities.' },
  { title: 'Build Legacy', description: 'Youth develop the confidence, skills, and relationships needed to move toward their future.' },
]

export const activities: string[] = [
  'College Tours',
  'Career Exploration',
  'Financial Literacy',
  'Leadership Workshops',
  'Community Service',
  'Entrepreneurship',
  'Technology & AI',
  'Sports & Recreation',
  'Life Skills',
  'Cultural Experiences',
]

export interface SafetyItem {
  title: string
  icon: 'shield' | 'training' | 'standards' | 'support'
}

export const safetyItems: SafetyItem[] = [
  { title: 'Background Screening', icon: 'shield' },
  { title: 'Mentor Training', icon: 'training' },
  { title: 'Youth Safety Standards', icon: 'standards' },
  { title: 'Ongoing Program Support', icon: 'support' },
]

export interface ImpactStat {
  label: string
  value: string | null
}

export const impactStats: ImpactStat[] = [
  { label: 'Youth enrolled', value: null },
  { label: 'Mentors recruited', value: null },
  { label: 'Community partners', value: null },
  { label: 'Programs & experiences', value: null },
]

export interface WayToHelp {
  title: string
  to: string
}

export const waysToHelp: WayToHelp[] = [
  { title: 'Become a Mentor', to: '/get-involved/mentor' },
  { title: 'Volunteer', to: '/get-involved/volunteer' },
  { title: 'Become a Community Partner', to: '/get-involved/partner' },
  { title: 'Sponsor an Experience', to: '/get-involved/partner' },
  { title: 'Donate', to: '/donate' },
]

export interface FocusArea {
  title: string
  topics: string[]
}

export const focusAreas: FocusArea[] = [
  {
    title: 'Personal Development & Identity',
    topics: ['Self-confidence', 'Goal-setting', 'Growth mindset', 'Emotional intelligence', 'Identity & self-expression'],
  },
  {
    title: 'Social Skills & Healthy Relationships',
    topics: ['Communication skills', 'Conflict resolution', 'Friendship building', 'Respect & boundaries', 'Bullying & peer pressure'],
  },
  {
    title: 'Academic & Career Readiness',
    topics: ['Study habits', 'Career exploration', 'Financial literacy', 'Resume building & interviewing', 'Leadership development'],
  },
  {
    title: 'Life Skills & Personal Responsibility',
    topics: ['Decision-making', 'Accountability', 'Digital citizenship', 'Health & wellness', 'Self-advocacy'],
  },
  {
    title: 'Character & Values',
    topics: ['Integrity & honesty', 'Respect & kindness', 'Service & volunteerism', 'Resilience'],
  },
  {
    title: 'Future Planning & Real-World Prep',
    topics: ['College readiness', 'Career pathways', 'Entrepreneurship', 'Life after high school'],
  },
]

export const monthlyThemes: string[] = [
  'Identity, Confidence & Self-Worth',
  'Emotional Intelligence & Self-Management',
  'Communication & Social Skills',
  'Healthy Relationships & Boundaries',
  'Academic Success & Study Skills',
  'Leadership Development',
  'Financial Literacy & Real-World Money Skills',
  'Life Skills & Personal Responsibility',
  'College, Career & Future Planning',
  'Health, Wellness & Self-Care',
  'Community Service & Leadership in Action',
  'Celebration, Reflection & Future Goals',
]

export interface DonationLevel {
  amount: string
  impact: string
}

export const donationLevels: DonationLevel[] = [
  { amount: '$25', impact: 'Provides program materials for a participant.' },
  { amount: '$50', impact: 'Supports a youth leadership workshop.' },
  { amount: '$100', impact: 'Helps fund mentoring and educational enrichment activities.' },
  { amount: '$250', impact: 'Supports community engagement and service projects.' },
  { amount: '$500+', impact: 'Helps expand programs and create new opportunities for youth development.' },
]

export interface FAQ {
  question: string
  answer: string
}

export const faqs: FAQ[] = [
  {
    question: 'Who is Legacy All-Stars for?',
    answer: 'Legacy All-Stars serves young people in grades 5 through 12 who want positive role models, leadership experiences, and practical tools for school, relationships, and life.',
  },
  {
    question: 'What happens after I enroll my child?',
    answer: 'Families complete a short interest and enrollment process. Youth then attend an orientation and are connected with mentors, programs, and experiences that fit their interests and goals.',
  },
  {
    question: 'How are mentors selected?',
    answer: 'Every mentor completes background screening, training, program expectations, communication guidelines, and youth-safety standards before being approved to serve.',
  },
  {
    question: 'What kinds of activities do students participate in?',
    answer: 'Beyond one-on-one mentoring, students take part in leadership workshops, college tours, career exploration, financial literacy, community service, entrepreneurship, technology, sports and recreation, and cultural experiences.',
  },
  {
    question: 'How do I get in touch with questions?',
    answer: `Email us at ${CONTACT_EMAIL} and a member of our team will follow up with you directly.`,
  },
]
