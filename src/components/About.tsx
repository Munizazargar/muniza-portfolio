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
            I'm a Full Stack Developer currently pursuing my BSc in Information Technology 
            at the University of Kashmir. I specialize in building modern, responsive web 
            applications using cutting-edge technologies like React.js, Next.js, Node.js, 
            and .NET framework.
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
            Currently working as a Full Stack Development Trainee at Interface Technologies, 
            where I'm gaining hands-on experience with both frontend and backend development, 
            following clean architecture principles and Agile practices.
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