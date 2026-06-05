import React from 'react';

function Education() {
  const education = [
    {
      degree: 'BTech - Computer Science & Engineering',
      institution: 'Indian Institute of Information Technology, Tiruchirapalli',
      period: '2025 - 2029',
      status: 'Currently Pursuing',
      description: 'Studying core computer science subjects including Data Structures, Algorithms, Operating Systems, Database Management, and Web Technologies.',
      emoji: '🎓'
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Narayana Junior College',
      period: '2023 - 2025',
      status: 'Completed',
      description: 'Completed intermediate education with Mathematics, Physics, and Chemistry as core subjects.',
      emoji: '📚'
    },
    {
      degree: 'Secondary School (SSC)',
      institution: 'The Brilliants E.M High School',
      period: 'Completed 2023',
      status: 'Completed',
      description: 'Completed secondary education with distinction.',
      emoji: '🏫'
    },
  ];

  return (
    <section className="education" id="education">
      <div className="section-container">
        <h2 className="section-title">My <span>Education</span></h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div className="education-card" key={index}>
              <div className="education-emoji">{edu.emoji}</div>
              <div className="education-content">
                <div className="education-header">
                  <h3>{edu.degree}</h3>
                  <span className={`education-status ${edu.status === 'Currently Pursuing' ? 'active' : 'completed'}`}>
                    {edu.status}
                  </span>
                </div>
                <h4>{edu.institution}</h4>
                <p className="education-period">📅 {edu.period}</p>
                <p>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;