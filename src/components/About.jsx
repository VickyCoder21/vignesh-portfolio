import React from 'react'

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p className="section-subtitle">Get to know me</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>I'm a .NET Full Stack Developer</h3>

            <p>
              I am a .NET Full Stack Developer with experience in building
              web-based business applications using React.js, ASP.NET Core
              Web API, C#, and SQL Server.
            </p>

            <p>
              Currently, I work on enterprise applications involving
              warehouse and inventory management. My work includes developing
              master modules, transaction modules, reports, API integrations,
              database operations, validations, and user authorization.
            </p>

            <p>
              I have hands-on experience working with React.js for frontend
              development, ASP.NET Core Web API for backend services, and
              SQL Server with stored procedures for database operations.
            </p>

            <p>
              I enjoy learning new technologies, solving application issues,
              and building reliable and user-friendly software solutions.
            </p>
          </div>

          <div className="about-info">
            <div className="info-item">
              <strong>Role</strong>
              <span>.NET Full Stack Developer</span>
            </div>

            <div className="info-item">
              <strong>Frontend</strong>
              <span>React.js, HTML, CSS</span>
            </div>

            <div className="info-item">
              <strong>Backend</strong>
              <span>ASP.NET Core Web API, C#</span>
            </div>

            <div className="info-item">
              <strong>Database</strong>
              <span>SQL Server</span>
            </div>

            <div className="info-item">
              <strong>Experience</strong>
              <span>Enterprise Application Development</span>
            </div>

            <div className="info-item">
              <strong>Location</strong>
              <span>Chennai, Tamil Nadu, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About