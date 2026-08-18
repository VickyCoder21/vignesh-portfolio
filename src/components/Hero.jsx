import profilePhoto from '../assets/images/profile-photo.png'

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-inner">

        <div className="hero-content">

          <img
            src={profilePhoto}
            alt="Vignesh P"
            className="hero-avatar"
          />

          {/* <p className="hero-intro">
            Available for freelance &amp; full-time work
          </p> */}

          <h1>
            Vignesh P
          </h1>

          <h2>
            .NET Full Stack Developer
          </h2>

          <p className="hero-description">
            I build production business applications — React on the front end,
            ASP.NET Core Web API and SQL Server underneath. Most recently, a
            full warehouse management system covering purchasing, receiving,
            and role-based screen access from the ground up.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn btn-primary">
              View My Projects
            </a>

            <a
              href="/resume.pdf"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>

          </div>

          <div className="hero-links">

            <a
              href="https://github.com/VickyCoder21"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

          </div>

        </div>

        {/* Signature element — a status readout, in the spirit of the
            monitoring dashboards this developer actually builds. */}
        <div className="status-panel">
          <div className="status-panel-head">
            <span className="status-panel-title">System Status</span>
            <span className="status-live">Online</span>
          </div>

          <div className="status-row">
            <span className="status-label">ROLE</span>
            <span className="status-value">.NET Full Stack Developer</span>
          </div>

          <div className="status-row">
            <span className="status-label">STACK</span>
            <span className="status-value">React · ASP.NET Core · SQL Server</span>
          </div>

          <div className="status-row">
            <span className="status-label">FOCUS</span>
            <span className="status-value">Warehouse &amp; Inventory Systems</span>
          </div>

          <div className="status-row">
            <span className="status-label">LOCATION</span>
            <span className="status-value">Chennai, India</span>
          </div>

          <div className="status-row">
            <span className="status-label">SINCE</span>
            <span className="status-value">2025</span>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Hero