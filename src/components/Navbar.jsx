import React, { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          Vignesh P
        </a>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        {/* Order now matches the actual page order (About → Skills →
            Experience → Projects → Education → Contact) — previously
            "Projects" was listed before Skills/Experience even though
            it renders after them, which made clicking through the menu
            jump backward on the page. */}
        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>

          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#education" onClick={closeMenu}>
            Education
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

        </div>

      </div>
    </nav>
  )
}

export default Navbar