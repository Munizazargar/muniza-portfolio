export default function Projects() {
  const projects = [
    {
      title: 'Edu Hub (LMS)',
      period: '2022-2023',
      description: 'Educational web application with complete learning management features',
      technologies: ['ASP.NET MVC', 'C#', 'SQL Server', 'Authentication'],
      features: [
        'CRUD operations for course management',
        'User authentication and authorization',
        'Database integration with SQL Server',
        'Responsive design'
      ]
    },
    {
      title: 'Job Portal',
      period: '2025 - Present',
      description: 'Full-stack job portal connecting employers and job seekers',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      features: [
        'Role-based authentication (Employer/Job Seeker)',
        'Dashboard-based access control',
        'Job posting and application system',
        'Real-time updates and notifications'
      ],
      status: 'In Progress'
    }
  ];

  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            {project.status && (
              <span className="project-status">{project.status}</span>
            )}
            
            <h3 style={{ 
              fontSize: '1.5rem', 
              marginBottom: '0.5rem',
              color: 'var(--text-primary)'
            }}>
              {project.title}
            </h3>
            
            <p style={{ 
              color: 'var(--accent)', 
              fontSize: '0.875rem',
              marginBottom: '1rem'
            }}>
              {project.period}
            </p>
            
            <p style={{ 
              color: 'var(--text-secondary)',
              marginBottom: '1rem'
            }}>
              {project.description}
            </p>
            
            <div className="tech-stack">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
            
            <ul style={{ 
              listStyle: 'none', 
              paddingLeft: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              marginTop: '1rem'
            }}>
              {project.features.map((feature, i) => (
                <li key={i} style={{ 
                  paddingLeft: '1.5rem', 
                  position: 'relative',
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem'
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0,
                    color: 'var(--accent)'
                  }}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}