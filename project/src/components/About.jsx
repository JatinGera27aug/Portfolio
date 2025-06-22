import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import InteractiveSection from './InteractiveSection';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title fade-in">About Me</h2>
        
        <div className="about-content">
          {/* Left side with text and stats */}
          <div className="about-text fade-in delay-1">
            <p>
              I'm a passionate backend developer with expertise in building scalable web applications, 
              REST APIs, and microservices. With experience in modern technologies like Node.js, Python, 
              and cloud platforms, I enjoy solving complex problems and creating efficient solutions.
            </p>
            <p>
              My journey in software development has led me to work on various projects ranging from 
              small web applications to large-scale distributed systems. I believe in writing clean, 
              maintainable code and following best practices in software development.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or learning about system design and architecture patterns.
            </p>
            
            <div className="stats">
              <div className="stat-item">
                <div className="stat-number">3</div>
                <div className="stat-label">Domains</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">14+</div>
                <div className="stat-label">Technologies</div>
              </div>
            </div>
          </div>
          
          {/* Right side with tech orbit */}
          <div className="about-image fade-in delay-2">
            <div className="tech-showcase">
              {/* Animated orbits */}
              <div className="tech-orbit tech-orbit-1"></div>
              <div className="tech-orbit tech-orbit-2"></div>
              <div className="tech-orbit tech-orbit-3"></div>
              
              {/* Center element */}
              <div className="tech-center">💻</div>
              
              {/* Tech icons */}
              <div className="tech-icon tech-icon-1" title="Node.js">⚡</div>
              <div className="tech-icon tech-icon-2" title="Python">🐍</div>
              <div className="tech-icon tech-icon-3" title="JavaScript">🚀</div>
              <div className="tech-icon tech-icon-4" title="React">⚛️</div>
              <div className="tech-icon tech-icon-5" title="MongoDB">🍃</div>
              <div className="tech-icon tech-icon-6" title="Docker">🐳</div>
              <div className="tech-icon tech-icon-7" title="AWS">☁️</div>
              <div className="tech-icon tech-icon-8" title="Git">🔧</div>
              
              {/* Floating particles */}
              <div className="tech-particles">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* GitHub and Interactive Section Grid - MOVED OUTSIDE */}
        <div className="contributions-grid fade-in delay-2">
          <div className="github-stats">
            <h3 className="github-title">
              <span role="img" aria-label="GitHub">⚙️</span> GitHub Contributions
            </h3>
            <div className="github-graph">
              <GitHubCalendar
                username="JatinGera27aug"
                blockSize={14}
                blockMargin={5}
                fontSize={14}
              />
            </div>
          </div>
          <div className="interactive-container">
            <InteractiveSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;