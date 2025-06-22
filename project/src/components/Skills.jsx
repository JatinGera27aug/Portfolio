import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  const skills = [
    { name: 'Node.js', level: 80, category: 'Backend' },
    { name: 'Python', level: 85, category: 'Backend' },
    { name: 'JavaScript', level: 75, category: 'Programming' },
    { name: 'TypeScript', level: 40, category: 'Programming' },
    { name: 'Express.js', level: 80, category: 'Framework' },
    { name: 'Django', level: 75, category: 'Framework' },
    { name: 'MongoDB', level: 75, category: 'Database' },
    { name: 'PostgreSQL', level: 50, category: 'Database' },
    { name: 'Redis', level: 80, category: 'Database' },
    { name: 'Docker', level: 85, category: 'DevOps' },
    { name: 'Github Actions', level: 35, category: 'DevOps' },
    { name: 'Terraform', level: 60, category: 'DevOps' },
    { name: 'AWS', level: 70, category: 'Cloud' },
    { name: 'Git/GitHub', level: 70, category: 'Tools' },
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title fade-in">Skills & Technologies</h2>
        
        <div className="skills-content">
          {categories.map((category, categoryIndex) => (
            <div key={category} className={`skill-category fade-in delay-${categoryIndex + 1}`}>
              <h3 className="category-title">{category}</h3>
              <div className="skills-grid">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 3 + index) * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="technologies-grid fade-in delay-3">
          <h3 className="tech-section-title">Technologies I Work With</h3>
          <div className="tech-icons">
            {[
              'Node.js', 'Python', 'JavaScript', 'TypeScript', 'Terraform', 'Linux', 'Golang',
              'MongoDB', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'Git/Github', 'CI/CD', 'Databricks', 'Nginx' , 'BeautifulSoup', 'Pandas'
            ].map((tech, index) => (
              <div key={tech} className="tech-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="tech-name">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;