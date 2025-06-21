import React, { useState } from 'react';
import './Resume.css';

const Resume = () => {
  const [activeResume, setActiveResume] = useState('devops');

  const resumeData = {
    devops: {
      title: "DevOps / Cloud",
      file: "/assets/resumes/devops-cloud-resume.pdf"
    },
    backend: {
      title: "Backend / Full Stack",
      file: "/assets/resumes/backend-fullstack-resume.pdf"
    },
    data: {
      title: "Data Engineer / Analyst",
      file: "/assets/resumes/data-engineer-resume.pdf"
    }
  };

  return (
    <section id="resume" className="section">
      <div className="container">
        <h2 className="section-title fade-in">My Resume</h2>
        
        <div className="resume-content fade-in delay-1">
          <div className="resume-tabs">
            {Object.entries(resumeData).map(([key, data]) => (
              <button 
                key={key}
                className={`resume-tab ${activeResume === key ? 'active' : ''}`}
                onClick={() => setActiveResume(key)}
              >
                {data.title}
              </button>
            ))}
          </div>
          
          <div className="resume-actions">
            <a href={resumeData[activeResume].file} download className="resume-btn">
              <span role="img" aria-label="Download">📥</span> Download Resume
            </a>
            <a href={resumeData[activeResume].file} target="_blank" rel="noopener noreferrer" className="resume-btn">
              <span role="img" aria-label="View">👁️</span> View Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;