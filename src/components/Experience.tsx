export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--bg-secondary)' }}>
      <h2 className="section-title">Experience</h2>
      
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div className="timeline">
          <div className="timeline-item">
            <div className="card">
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'start', 
                flexWrap: 'wrap', 
                gap: '1rem', 
                marginBottom: '1rem' 
              }}>
                <div>
                  <h3 style={{ 
                    color: 'var(--accent)', 
                    fontSize: '1.5rem' 
                  }}>
                    Full Stack Development Trainee
                  </h3>
                  <p style={{ 
                    color: 'var(--text-secondary)', 
                    fontSize: '1.125rem' 
                  }}>
                    Interface Technologies
                  </p>
                </div>
                <span style={{ 
                  background: 'var(--accent)', 
                  color: 'white', 
                  padding: '0.5rem 1rem', 
                  borderRadius: '20px',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}>
                  Aug 2024 - Dec 2025
                </span>
              </div>
              
              <ul style={{ 
                listStyle: 'none', 
                paddingLeft: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                <li style={{ 
                  paddingLeft: '1.5rem', 
                  position: 'relative', 
                  color: 'var(--text-secondary)' 
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    color: 'var(--accent)' 
                  }}>▹</span>
                  Built CRUD-based applications using C# and SQL, strengthening core backend and database fundamentals
                </li>
                <li style={{ 
                  paddingLeft: '1.5rem', 
                  position: 'relative', 
                  color: 'var(--text-secondary)' 
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    color: 'var(--accent)' 
                  }}>▹</span>
                  Developed responsive web applications using HTML, CSS, ASP.NET MVC, and Web API
                </li>
                <li style={{ 
                  paddingLeft: '1.5rem', 
                  position: 'relative', 
                  color: 'var(--text-secondary)' 
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    color: 'var(--accent)' 
                  }}>▹</span>
                  Developed frontend applications using React.js with state management via Redux and Context API
                </li>
                <li style={{ 
                  paddingLeft: '1.5rem', 
                  position: 'relative', 
                  color: 'var(--text-secondary)' 
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    color: 'var(--accent)' 
                  }}>▹</span>
                  Built and integrated RESTful APIs using Node.js and Express.js with MongoDB
                </li>
                <li style={{ 
                  paddingLeft: '1.5rem', 
                  position: 'relative', 
                  color: 'var(--text-secondary)' 
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    color: 'var(--accent)' 
                  }}>▹</span>
                  Used Postman for API testing and collaborated following Agile practices
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}