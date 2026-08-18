import React from 'react'

const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      items: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'CoreUI'],
    },
    {
      category: 'Backend',
      items: ['C#', 'ASP.NET Core Web API', 'REST API', 'ADO.NET', 'JWT Authentication'],
    },
    {
      category: 'Database',
      items: ['SQL Server', 'SQL', 'Stored Procedures', 'Views'],
    },
    {
      category: 'Tools',
      items: ['Git', 'GitHub', 'Visual Studio', 'VS Code', 'SSMS'],
    },
  ]

  // , 'Transactions'   'Postman',

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Skills</h2>

        <p className="section-subtitle">
          Technologies and tools I use to build full-stack web applications.
        </p>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.category}>
              <h3>{skill.category}</h3>

              <div className="skill-list">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills