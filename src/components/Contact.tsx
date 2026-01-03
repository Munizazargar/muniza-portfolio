'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link
    const mailtoLink = `mailto:munizahzargar.iimun@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact">
      <h2 className="section-title">Get In Touch</h2>
      
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ 
          color: 'var(--text-secondary)', 
          fontSize: '1.125rem',
          marginBottom: '2rem'
        }}>
          I'm currently looking for new opportunities and collaborations. 
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here..."
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Send Message
          </button>
        </form>

        <div className="social-links">
          <a 
            href="mailto:munizahzargar.iimun@gmail.com" 
            className="social-link" 
            title="Email"
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