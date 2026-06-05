import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'GPT Papa AI',
      description: 'An AI-powered chatbot application built with React frontend and Node.js backend, integrated with Claude AI API for intelligent conversations. Currently in progress.',
      tech: ['React', 'Node.js', 'Claude AI', 'Express.js'],
      github: 'https://github.com/thulasiramchilukoti0301-collab',
      live: null,
      status: 'In Progress',
      emoji: '🤖'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A full-stack personal portfolio website built with React frontend, Node.js/Express backend, and MongoDB database for the contact form. Deployed on Vercel and Railway.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      github: 'https://github.com/thulasiramchilukoti0301-collab/portfolio-website',
      live: null,
      status: 'Completed',
      emoji: '🌐'
    },
    {
      title: 'LinkedIn Posting Agent',
      description: 'An AI-powered LinkedIn posting agent built using MCP (Model Context Protocol) servers and Composio integration inside Cursor IDE. Automatically generates and posts content to LinkedIn.',
      tech: ['MCP', 'Composio', 'Cursor IDE', 'AI Agents'],
      github: null,
      live: null,
      status: 'Completed',
      emoji: '🤝'
    },
    {
      title: 'LeetCode DSA Practice',
      description: 'Solved 40+ Data Structures and Algorithms problems on LeetCode using C and Java. Focused on arrays, strings, and basic algorithms.',
      tech: ['C', 'Java', 'DSA', 'LeetCode'],
      github: 'https://github.com/thulasiramchilukoti0301-collab/ThulasiRam-leetcode_solutions',
      live: null,
      status: 'Ongoing',
      emoji: '⚡'
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="section-container">
        <h2 className="section-title">My <span>Projects</span></h2>
        <div className="projects-grid" style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-emoji">{project.emoji}</div>
              <div style={{display:'flex', alignItems:'center', gap:'1rem', marginBottom:'0.8rem'}}>
                <h3 style={{margin:0}}>{project.title}</h3>
                <span style={{
                  padding: '0.2rem 0.7rem',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  background: project.status === 'Completed' ? 'rgba(0,200,100,0.2)' :
                              project.status === 'In Progress' ? 'rgba(255,165,0,0.2)' :
                              'rgba(108,99,255,0.2)',
                  color: project.status === 'Completed' ? '#00c864' :
                         project.status === 'In Progress' ? '#ffa500' :
                         '#6c63ff'
                }}>{project.status}</span>
              </div>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span className="tech-tag" key={i}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn-small">GitHub</a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="btn-small-outline">Live Demo</a>
                )}
                {!project.github && !project.live && (
                  <span style={{color:'#aaaaaa', fontSize:'0.85rem'}}>🔒 Repo coming soon</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;