import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.jpg'

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Us' },
  { to: '/mission', label: 'Mission & Vision' },
  { to: '/programs', label: 'Programs & Impact' },
  { to: '/get-involved', label: 'Get Involved' },
  { to: '/donate', label: 'Donate' },
  { to: '/contact', label: 'Contact Us' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <NavLink to="/" className="brand" onClick={() => setMenuOpen(false)}>
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

        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
