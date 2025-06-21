import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    'Backend Developer',
    'Full Stack Engineer',
    'API Architect',
    'Database Designer'
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const speed = isDeleting ? 50 : 100;

    if (!isDeleting && displayText === currentTitle) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(prevText => 
        isDeleting 
          ? prevText.slice(0, -1)
          : currentTitle.slice(0, prevText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, titles]);

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Jatin Gera</span>
            </h1>
            <div className="hero-subtitle">
              <span className="typing-text">{displayText}</span>
              <span className="cursor">|</span>
            </div>
            <p className="hero-description fade-in delay-1">
              Passionate backend developer with expertise in building scalable web applications, 
              REST APIs, and microservices. I love solving complex problems and creating 
              efficient, maintainable code.
            </p>
            <div className="hero-buttons fade-in delay-2">
              <a href="#projects" className="btn">View My Work</a>
              <a href="#contact" className="btn btn-outline">Get In Touch</a>
            </div>
          </div>
          
          <div className="hero-image fade-in delay-3">
            <div className="image-container">
              <div className="code-snippet">
                <div className="code-header">
                  <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span>server.js</span>
                </div>
                <div className="code-content">
                  <div className="code-line">
                    <span className="keyword">const</span> 
                    <span className="variable"> express</span> 
                    <span className="operator"> =</span> 
                    <span className="function"> require</span>
                    <span className="punctuation">('express');</span>
                  </div>
                  <div className="code-line">
                    <span className="keyword">const</span> 
                    <span className="variable"> app</span> 
                    <span className="operator"> =</span> 
                    <span className="function"> express</span>
                    <span className="punctuation">();</span>
                  </div>
                  <div className="code-line">
                    <span className="variable">app</span>
                    <span className="punctuation">.</span>
                    <span className="function">listen</span>
                    <span className="punctuation">(</span>
                    <span className="number">3000</span>
                    <span className="punctuation">);</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;