import React from 'react'

const Experience = () => {
  const experiences = [
    {
      role: '.NET Developer',
      company: 'Ess-Matrix Infotech Pvt. Ltd.',
      location: 'Chennai, Tamil Nadu',
      period: '2025 – Present',
      responsibilities: [
        'Develop and maintain full-stack web applications using React.js, ASP.NET Core Web API, C#, and SQL Server.',
        'Work on warehouse management modules including master, transaction, user management, and reporting screens.',
        'Develop REST APIs and integrate them with React.js applications using Axios.',
        'Work with SQL Server stored procedures, database operations, validations, and data processing.',
        'Implement authentication, authorization, and screen-level user access.',
        'Debug and resolve frontend, backend, API, and database-related issues.',
      ],
    },
    {
      role: 'Technical Support Engineer',
      company: 'Team Computers',
      location: 'Chennai, Tamil Nadu',
      period: '1.5 Years',
      responsibilities: [
        'Provided technical support for retail store systems and resolved day-to-day application and system issues.',
        'Troubleshot user ID, application, and system-related problems.',
        'Used MySQL to check and verify daily and monthly sales data.',
        'Handled support requests through phone, email, and messages.',
        'Escalated unresolved technical issues to the appropriate teams.',
      ],
    },
  ]

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2>Experience</h2>

        <p className="section-subtitle">
          My professional experience and responsibilities.
        </p>

        <div className="experience-container">
          {experiences.map((experience, index) => (
            <div className="experience-card" key={index}>
              <div className="experience-header">
                <div>
                  <h3>{experience.role}</h3>
                  <h4>{experience.company}</h4>
                </div>

                <div className="experience-meta">
                  <span>{experience.period}</span>
                  <span>{experience.location}</span>
                </div>
              </div>

              <ul>
                {experience.responsibilities.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience