import React from 'react';

function Skills() {
  const skills = [
    { category: 'Programming Languages', items: [
      { name: 'Python', level: 60 },
      { name: 'C', level: 50 },
      { name: 'Java (Learning)', level: 25 },
    ]},
    { category: 'Frontend', items: [
      { name: 'HTML', level: 40 },
      { name: 'CSS', level: 40 },
      { name: 'JavaScript', level: 30 },
      { name: 'React.js', level: 30 },
    ]},
    { category: 'Backend & Database', items: [
      { name: 'Node.js', level: 25 },
      { name: 'Express.js', level: 25 },
      { name: 'MongoDB', level: 25 },
    ]},
    { category: 'Tools & Others', items: [
      { name: 'VS Code', level: 65 },
      { name: 'Cursor IDE', level: 50 },
      { name: 'Git & GitHub', level: 40 },
      { name: 'DSA (LeetCode ~40)', level: 30 },
    ]},
  ];

  return (
    <section className="skills" id="skills">
      <div className="section-container">
        <h2 className="section-title">My <span>Skills</span></h2>
        <p style={{textAlign:'center', color:'#aaaaaa', marginTop:'-2rem', marginBottom:'2rem'}}>
          Currently learning — growing every day! 🌱
        </p>
        <div className="skills-grid" style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
          {skills.map((skillGroup, index) => (
            <div className="skill-card" key={index}>
              <h3>{skillGroup.category}</h3>
              {skillGroup.items.map((skill, i) => (
                <div className="skill-item" key={i}>
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;