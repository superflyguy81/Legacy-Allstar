import channel from '../assets/board/channel.jpg'
import mkaneghay from '../assets/board/mkaneghay.jpg'
import kim from '../assets/board/kim.jpg'
import farrah from '../assets/board/farrah.jpg'
import roy from '../assets/board/roy.jpg'
import lashawn from '../assets/board/lashawn.jpg'
import antoine from '../assets/board/antoine.jpg'
import george from '../assets/board/george.jpg'

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

export const otherWaysToSupport: string[] = [
  'Volunteering your time and talents',
  'Becoming a mentor',
  'Sponsoring an event or program',
  'Donating supplies or resources',
  'Sharing our mission with your network',
]

export const CONTACT_EMAIL = 'legacyallstarsorg@gmail.com'
export const SOCIAL_HANDLE = '@legacyallstarsorg'
