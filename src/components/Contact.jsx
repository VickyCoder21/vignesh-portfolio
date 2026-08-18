import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">

        <h2>Let's Work Together</h2>

        <p className="section-subtitle">
          Interested in working together or discussing an opportunity?
          Feel free to contact me.
        </p>

        <div className="contact-container">

          <div className="contact-card">

            <div className="contact-item">
              <span className="contact-icon">📧</span>

              <div>
                <h3>Email</h3>
                <a href="mailto:vigneshvicky31162@gmail.com">
                  vigneshvicky31162@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">📱</span>

              <div>
                <h3>Phone</h3>
                <a href="tel:+917812895977">
                  +91 7812895977
                </a>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">📍</span>

              <div>
                <h3>Location</h3>
                <p>Chennai, Tamil Nadu, India</p>
              </div>
            </div>

          </div>

          <div className="contact-links">

            <a
              href="https://github.com/VickyCoder21"
              target="_blank"
              rel="noreferrer"
              className="contact-button"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/vigneshp21"
              target="_blank"
              rel="noreferrer"
              className="contact-button"
            >
              LinkedIn
            </a>

            <a
              href="mailto:vigneshvicky31162@gmail.com"
              className="contact-button"
            >
              Send Email
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact