import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-content">
          <h3>Vignesh P</h3>

          <p>
            .NET Full Stack Developer
          </p>
        </div>

        <div className="footer-links">

          <a
            href="https://github.com/VickyCoder21"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/vigneshp21"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="#home">
            Back to Top ↑
          </a>

        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Vignesh P. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer