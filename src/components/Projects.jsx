import React from 'react'

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Projects</h2>
        <p className="section-subtitle">
          Some of the projects I have worked on using modern full-stack technologies.
        </p>

        <div className="project-card">
          <div className="project-content">
            {/* <span className="project-status">Live in production</span> */}

            <h3>CoreMatrix Warehouse Management System</h3>

            <p>
              Lets warehouse staff and admins run purchasing, receiving, and
              inventory operations end-to-end — with per-user, per-screen
              access control instead of blanket role permissions, and a
              full Purchase Order → GRN → Barcode Label Print workflow.
            </p>

            <p>
              Built and deployed independently: JWT authentication, ADO.NET
              against SQL Server stored procedures, and self-managed
              production hosting.
            </p>

            <div className="project-tech">
              <span>React.js</span>
              <span>ASP.NET Core Web API</span>
              <span>C#</span>
              <span>SQL Server</span>
              <span>ADO.NET</span>
              <span>JWT</span>
            </div>

            <div className="project-buttons">
              <a
                href="https://corematrixfrontend.runasp.net/"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/VickyCoder21/CoreMatrix-Warehouse-Management-System"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects