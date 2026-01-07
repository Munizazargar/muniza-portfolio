'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ 
            y: -5,
            transition: { duration: 0.3 }
          }}
        >
          <motion.p 
            style={{ 
              fontSize: '1.125rem', 
              lineHeight: '1.8', 
              color: 'var(--text-secondary)' 
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
          I am a Full Stack Developer with hands-on experience in building modern, responsive, and scalable web applications.
          I work across both frontend and backend development using React.js, Next.js, Node.js, and the .NET framework.
          I specialize in developing RESTful APIs, integrating SQL and NoSQL databases, managing code with Git, and deploying applications with a focus on clean architecture, performance, and production readiness.
          </motion.p>
          
          <motion.p 
            style={{ 
              fontSize: '1.125rem', 
              lineHeight: '1.8', 
              color: 'var(--text-secondary)', 
              marginTop: '1.5rem' 
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I focus on building scalable, maintainable applications with clean architecture, modern development practices, and Agile methodologies.
          </motion.p>

          <motion.div 
            style={{ 
              marginTop: '2rem', 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '1.5rem' 
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>
                📍 Location
              </h4>
              <p style={{ color: 'var(--text-secondary)' }}>Kashmir, India</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>
                🎓 Education
              </h4>
              <p style={{ color: 'var(--text-secondary)' }}>
                BSc-IT, University of Kashmir
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>
                📧 Email
              </h4>
              <p style={{ color: 'var(--text-secondary)' }}>
                munizahzargar.iimun@gmail.com
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}