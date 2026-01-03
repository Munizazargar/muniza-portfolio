export default function About() {
  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>
      
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="card">
          <p style={{ 
            fontSize: '1.125rem', 
            lineHeight: '1.8', 
            color: 'var(--text-secondary)' 
          }}>
            I'm a Full Stack Developer currently pursuing my BSc in Information Technology 
            at the University of Kashmir. I specialize in building modern, responsive web 
            applications using cutting-edge technologies like React.js, Next.js, Node.js, 
            and .NET framework.
          </p>
          
          <p style={{ 
            fontSize: '1.125rem', 
            lineHeight: '1.8', 
            color: 'var(--text-secondary)', 
            marginTop: '1.5rem' 
          }}>
            Currently working as a Full Stack Development Trainee at Interface Technologies, 
            where I'm gaining hands-on experience with both frontend and backend development, 
            following clean architecture principles and Agile practices.
          </p>

          <div style={{ 
            marginTop: '2rem', 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1.5rem' 
          }}>
            <div>
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>
                📍 Location
              </h4>
              <p style={{ color: 'var(--text-secondary)' }}>Jammu, India</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>
                🎓 Education
              </h4>
              <p style={{ color: 'var(--text-secondary)' }}>
                BSc-IT, University of Kashmir
              </p>
            </div>
            <div>
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>
                📧 Email
              </h4>
              <p style={{ color: 'var(--text-secondary)' }}>
                munizahzargar.iimun@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}