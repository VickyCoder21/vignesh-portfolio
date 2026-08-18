import React from 'react'

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2>Education & Certifications</h2>

        <p className="section-subtitle">
          My academic background and professional training.
        </p>

        <div className="education-container">

          {/* Education */}
          <div className="education-card">
            <div className="education-icon">
              🎓
            </div>

            <div className="education-content">
              <h3>B.E. Electronics and Communication Engineering</h3>

              <h4>
                Sri Venkateswara College of Engineering (SVCE)
              </h4>

              <p className="education-location">
                Sriperumbudur, Chennai, Tamil Nadu
              </p>

              <span className="education-year">
                2024
              </span>
            </div>
          </div>

          {/* Certification */}
          <div className="education-card">
            <div className="education-icon">
              💻
            </div>

            <div className="education-content">
              <h3>.NET Full Stack Development</h3>

              <h4>Professional Training</h4>

              <p>
                Completed training in full-stack web development with
                React.js, ASP.NET Core Web API, C#, SQL Server,
                HTML, CSS, and JavaScript.
              </p>

              <span className="education-year">
                Completed
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Education