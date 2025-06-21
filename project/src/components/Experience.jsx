import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Backend Developer',
      company: 'Bhagwan Parshuram Institute of Technology',
      period: 'May 2024 - June 2024',
      location: 'Rohini',
      description: [
        'Developed and maintained RESTful APIs using Node.js and Express.js',
        'Implemented microservices architecture improving system scalability by 40%',
        'Optimized database queries using Redis reducing response times by 60%',
        'S3 Bucket Integration for efficient file storage and retrieval'
      ],
      technologies: ['Node.js', 'Express.js', 'MySql', 'Prisma', 'AWS S3', 'AWS IAM']
    },
    // ... existing code ...

{
  id: 2,
  title: 'Cloud Infrastructure & DevOps Engineer',
  company: 'Winnovation',
  period: 'May 2024 - May 2024',
  location: 'Delhi',
  description: [
    'Trained by an experienced instructor with over 5 years in cloud technologies',
    'Developed and deployed an EKS cluster to host a static website using Nginx, managing worker nodes effectively',
    'Implemented a three-tier web architecture using AWS services such as network gateways, route tables, and RDS'
  ],
  technologies: ['AWS', 'EKS', 'Kubernetes', 'Nginx', 'RDS', 'Network Gateways']
},

  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title fade-in">Experience</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item fade-in delay-${index + 1}`}>
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              
              <div className="timeline-content">
                <div className="experience-card">
                  <div className="experience-header">
                    <div className="experience-title-section">
                      <h3 className="experience-title">{exp.title}</h3>
                      <h4 className="experience-company">{exp.company}</h4>
                    </div>
                    <div className="experience-meta">
                      <span className="experience-period">{exp.period}</span>
                      <span className="experience-location">{exp.location}</span>
                    </div>
                  </div>
                  
                  <ul className="experience-description">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  
                  <div className="experience-technologies">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;