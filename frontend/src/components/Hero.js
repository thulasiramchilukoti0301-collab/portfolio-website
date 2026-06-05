import React from 'react';

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi there, I'm</p>
        <h1 className="hero-name">Thulasiram Chilukoti</h1>
        <h2 className="hero-title">Aspiring Full Stack Developer</h2>
        <p className="hero-subtitle">BTech CSE Student | Building cool things with code 🚀</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-secondary">Contact Me</a>
        </div>
        <div className="hero-socials">
          <a href="https://github.com/thulasiramchilukoti0301-collab" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/thulasi-ram-chilukoti-22bb3537b/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
      <div className="hero-image">
        <div className="hero-avatar">T</div>
      </div>
    </section>
  );
}

export default Hero;