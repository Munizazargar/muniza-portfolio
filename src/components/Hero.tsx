'use client';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Muniza Zargar</h1>
        <p className="subtitle">Full Stack Developer</p>
        <p style={{ 
          color: 'var(--text-secondary)', 
          maxWidth: '600px', 
          margin: '0 auto 2rem',
          fontSize: '1.125rem'
        }}>
          BSc-IT from University of Kashmir. Passionate about building modern web applications 
          with React, Next.js, and .NET technologies.
        </p>
        
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
            Get In Touch
          </button>
          <button className="btn btn-secondary" onClick={() => scrollToSection('projects')}>
            View Projects
          </button>
          <a 
            href="/resume.pdf" 
            download="Muniza_Zargar_Resume.pdf"
            className="btn btn-secondary"
            style={{ display: 'inline-block' }}
          >
            📄 Download Resume
          </a>
        </div>

        <div className="social-links">
          <a 
            href="mailto:munizahzargar.iimun@gmail.com" 
            className="social-link" 
            title="Email"
            target="_blank"
            rel="noopener noreferrer"
          >
            📧
          </a>
          <a 
            href="https://github.com/munizazargar" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link" 
            title="GitHub"
          >
            💻
          </a>
          <a 
            href="https://linkedin.com/in/munizazargar" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link" 
            title="LinkedIn"
          >
            💼
          </a>
        </div>
      </div>
    </section>
  );
}