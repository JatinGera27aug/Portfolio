import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Hospital Appointment Scheduler',
      description: 'Web-based application designed to streamline healthcare management by providing role-specific dashboards for patients, doctors, and administrators.',
      technologies: ['Typescript', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Redis', 'Aceternity', 'Redux', 'Cron-Jobs'],
      features: [
        'User authentication and authorization',
        'Admin Dashboard to handle doctors and appointments',
        'Rescheduling option with no conflicts',
        'Automated Email notification for appointment rescheduling with time and date',
        'Patient Dashboard: Ongoing, Missed, Confirmed Schedules'
      ],
      github: 'https://github.com/JatinGera27aug/Hospital-appointments-Frontend',
      demo: 'https://medcare-appointment.netlify.app',
      image: '🏥'
    },
    {
      id: 2,
      title: 'Note-Worth-IT',
      description: 'Not your average Notes App, this application leverages AI-powered content generation, web scraping, and real-time data processing to deliver a dynamic and interactive user experience.',
      technologies: ['Node.js', 'React.js', 'MongoDB', 'Cheerio', 'Serper AI', 'AWS Lambda', 'CloudFront', 'Redis', 'Gemini AI'],
      features: [
        'AI powered text summarization, question generation, and grammar correction',
        'Translation, language detection, and spell checking',
        'Extract text from images for fast note taking',
        'Web Scraping for Current Affairs',
        'Caches extracted text using Redis for efficient retrieval.',
        'JWT session-based authentication with input sanitation',
        'Multi-language Support',
        'AWS lambda and CloudFront integrated',
      ],
      github: 'https://github.com/JatinGera27aug/Note-Worth-It',
      demo: 'https://note-worth-it.netlify.app',
      image: '💬'
    },
    {
      id: 3,
      title: 'Backend Maker CLI',
      description: 'A CLI tool designed to streamline setting up a Node.js backend project. It includes features for setting up database configurations, adding necessary middleware, and initializing a project structure for ease of development.',
      technologies: ['Node.js', 'CLI', 'MongoDB', 'MySQL', 'Docker', 'Multer', 'Redis', 'Nodemailer'],
      features: [
        'Quick Initialization: Generate a project structure with MongoDB, MySQL, or no database',
        'Modular Add-Ons: Use simple commands to add Docker, Multer, Redis, Nodemailer, and more',
        'Redis Support: Pre-configured Redis caching for faster APIs',
        'Developer-Friendly Defaults: Comes with a clean folder structure, middleware, and basic routes',
        'Extendable: Easy-to-use commands to include advanced features as needed'
      ],
      github: 'https://github.com/JatinGera27aug/backend-maker-cli',
      demo: 'https://www.npmjs.com/package/backend-maker-cli', // Link to npm page as a demo
      image: '🛠️'
    },
    
    {
      id: 4,
      title: '3-Tier Web Application Deployment with Docker',
      description: 'Developed and deployed a three-tier web application. Docker streamlined the environment setup and ensured consistent deployment across different machines.',
      technologies: ['Docker', 'Docker-Compose', 'Javascript', 'React.js', 'Node.js', 'MongoDB'],
      features: [
        'Automated environment setup with Docker',
        'Consistent deployment across different machines',
        'Efficient scalability with Docker Compose',
        'Automated container orchestration with Docker-Compose.yaml',
        'Network architecture and volume management'
      ],
      github: 'https://github.com/JatinGera27aug/MERN-docker-compose',
      demo: 'https://github.com/JatinGera27aug/MERN-docker-compose#readme',
      image: '💻'
    },
    {
      id: 5,
      title: 'Blog Insights',
      description: 'A full-stack blogging platform that allows users to create, edit, and manage their blogs with advanced features like image uploads, category filters, and session management.',
      technologies: ['Node.js', 'React.js', 'Multer', 'Bcrypt', 'MongoDB', 'Docker'],
      features: [
        'User authentication with login/signup',
        'Protected routes for secure access',
        'Image uploads for blog posts',
        'Category-wise filtering of blogs',
        'Session management with timeout',
        'Custom error pages for enhanced user experience'
      ],
      github: 'https://github.com/JatinGera27aug/Blog-Insight',
      demo: 'https://blog-insights.netlify.app/',
      image: '📋'
    },
    {
      id: 6,
      title: 'Check More Fun Projects',
      description: 'Based on Python Web Scraping, Automation Scripts, Streamlit Applications and CI/CD',
      technologies: [],
      features: [
        'Songs Downloader: Download songs offline on your system by just pasting the playlist link from JioSaavan or Hungama.com .',
        'Events Scraper: Fetches Hackathon and Meetups detail from devpost, devfolio and reskill platform for students.',
        'GitHub Actions: Using Github Action inside workflow using Shared Runners.',
        'Streamlit: Quiz Platform with large set of questions from a wide range of topics.'
      ],
      github: 'https://github.com/JatinGera27aug', // Link to your GitHub profile or specific repositories
      demo: '', // No demo link needed for this section
      image: '🎉'
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title fade-in">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className={`project-card fade-in delay-${index + 1}`}>
              <div className="project-header">
                <div className="project-icon">{project.image}</div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;