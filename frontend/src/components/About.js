import React from 'react';

function About() {
  return (
    <section className="about" id="about">
      <div className="section-container">
        <h2 className="section-title">About <span>Me</span></h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hey! I'm <strong>Thulasiram Chilukoti</strong>, a passionate 
              first-year BTech Computer Science student at IIIT Tiruchirappalli, India. 
              I love building things with code and am always eager to learn 
              new technologies.
            </p>
            <p>
              I started my coding journey during my first semester and have 
              been exploring web development, cloud computing, and AI tools 
              ever since. I believe in learning by doing — every project 
              teaches me something new!
            </p>
            <p>
              When I'm not coding, I enjoy exploring new tech trends and 
              working on personal projects that solve real problems.
            </p>
            <div className="about-info">
              <div className="info-item">
                <span className="info-label">📍 Location</span>
                <span className="info-value">Vijayawada, Andhra Pradesh, India</span>
              </div>
              <div className="info-item">
                <span className="info-label">🎓 Degree</span>
                <span className="info-value">BTech CSE (2025-2029)</span>
              </div>
              <div className="info-item">
                <span className="info-label">💼 Status</span>
                <span className="info-value">Open to Internships</span>
              </div>
              <div className="info-item">
                <span className="info-label">📧 Email</span>
                <span className="info-value">thulasiramchilukoti0301@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;