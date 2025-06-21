import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Jatin Gera</h3>
              <p>Backend Developer</p>
            </div>
            <p className="footer-description">
              Building scalable web applications and APIs with modern technologies. 
              Passionate about clean code and innovative solutions.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Technologies</h4>
            <ul className="footer-links">
              <li>Node.js</li>
              <li>Python</li>
              <li>JavaScript</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>Docker</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              <a href="https://github.com/JatinGera27aug" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/jatin-gera-27aug/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://x.com/GerajiJatin" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <a href="mailto:jatingera2004@gmail.com">
                Email
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Jatin Gera. All rights reserved.</p>
          </div>
          <div className="footer-credits">
            <p>Built with React.js & ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;