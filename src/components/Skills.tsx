export default function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'C#']
    },
    {
      category: 'Frontend',
      skills: ['React.js', 'Next.js', 'Redux', 'Context API']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', '.NET Framework', 'ASP.NET MVC', 'Web API']
    },
    {
      category: 'Databases',
      skills: ['MongoDB', 'SQL Server']
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'npm', 'MongoDB Compass', 'Claude']
    }
  ];

  return (
    <section id="skills" style={{ background: 'var(--bg-secondary)' }}>
      <h2 className="section-title">Skills & Technologies</h2>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.category}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}