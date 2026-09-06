export type IconName =
  | 'mentorship'
  | 'leadership'
  | 'lifeskills'
  | 'community'
  | 'shield'
  | 'training'
  | 'standards'
  | 'support'

const PATHS: Record<IconName, string> = {
  mentorship: 'M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z',
  leadership: 'M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z',
  lifeskills: 'M4 4h6a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H4zm16 0h-6a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h6z',
  community: 'M12 21s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.4-7 10-7 10z',
  shield: 'M12 2l8 3v6c0 5.2-3.4 9.9-8 11-4.6-1.1-8-5.8-8-11V5zm-1 13l6-6-1.4-1.4L11 12.2 8.4 9.6 7 11z',
  training: 'M3 5h18v11H3zm7 13h4v2h-4zm-5-5h14V7H5z',
  standards: 'M9 11l3 3 8-8-1.4-1.4L12 11.2 10.4 9.6zm-4 9V4h10v2H7v12h10v-4h2v6z',
  support: 'M12 3a9 9 0 0 0-9 9v5a2 2 0 0 0 2 2h3v-7H5v-.5A7 7 0 0 1 12 5a7 7 0 0 1 7 6.5v.5h-3v7h3a2 2 0 0 0 2-2v-5a9 9 0 0 0-9-9z',
}

interface IconProps {
  name: IconName
  className?: string
}

function Icon({ name, className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d={PATHS[name]} />
    </svg>
  )
}

export default Icon
