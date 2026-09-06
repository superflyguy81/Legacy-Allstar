import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/logo.jpg'

interface NavItem {
  to: string
  label: string
  end?: boolean
  children?: { to: string; label: string }[]
}

const NAV_ITEMS: NavItem[] = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  {
    to: '/families',
    label: 'For Families',
    children: [
      { to: '/families/enroll', label: 'Enroll a Student' },
      { to: '/families/parent-information', label: 'Parent Information' },
      { to: '/families/faqs', label: 'FAQs' },
      { to: '/families/youth-safety', label: 'Youth Safety' },
    ],
  },
  {
    to: '/get-involved',
    label: 'Get Involved',
    children: [
      { to: '/get-involved/mentor', label: 'Become a Mentor' },
      { to: '/get-involved/volunteer', label: 'Volunteer' },
      { to: '/get-involved/partner', label: 'Partner With Us' },
    ],
  },
  { to: '/donate', label: 'Donate' },
  { to: '/contact', label: 'Contact' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    setOpenDropdown(null)
  }, [location.pathname])

  useEffect(() => {
    if (!openDropdown) return
    const onClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [openDropdown])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'nav-link active' : 'nav-link'

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <NavLink to="/" className="brand">
          <img src={logo} alt="Legacy All-Stars crest" className="brand-logo" />
          <span className="brand-name">Legacy All-Stars</span>
        </NavLink>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav ref={navRef} className={`main-nav ${menuOpen ? 'open' : ''}`}>
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div
                key={item.to}
                className={`nav-group ${openDropdown === item.to ? 'open' : ''}`}
              >
                <div className="nav-group-trigger">
                  <NavLink to={item.to} className={linkClass}>
                    {item.label}
                  </NavLink>
                  <button
                    type="button"
                    className="nav-caret"
                    aria-label={`Toggle ${item.label} menu`}
                    aria-expanded={openDropdown === item.to}
                    onClick={() =>
                      setOpenDropdown((current) => (current === item.to ? null : item.to))
                    }
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M7 10l5 5 5-5z" fill="currentColor" />
                    </svg>
                  </button>
                </div>
                <div className="nav-dropdown">
                  {item.children.map((child) => (
                    <NavLink key={child.to} to={child.to} className={linkClass}>
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink key={item.to} to={item.to} end={item.end} className={linkClass}>
                {item.label}
              </NavLink>
            ),
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header
