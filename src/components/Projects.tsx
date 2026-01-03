'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

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
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>
      
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = (y - centerY) / 10;
    const rotateYValue = (centerX - x) / 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease-out'
      }}
      className="project-card"
    >
      {project.status && (
        <motion.span 
          className="project-status"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
        >
          {project.status}
        </motion.span>
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
        {project.technologies.map((tech: string, i: number) => (
          <motion.span 
            key={i} 
            className="tech-badge"
            whileHover={{ scale: 1.1, y: -2 }}
          >
            {tech}
          </motion.span>
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
        {project.features.map((feature: string, i: number) => (
          <motion.li 
            key={i} 
            style={{ 
              paddingLeft: '1.5rem', 
              position: 'relative',
              color: 'var(--text-secondary)',
              fontSize: '0.875rem'
            }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <span style={{ 
              position: 'absolute', 
              left: 0,
              color: 'var(--accent)'
            }}>✓</span>
            {feature}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}