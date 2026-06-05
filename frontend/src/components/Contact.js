import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('https://portfolio-backend-ebfn.onrender.com/api/contact', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
    setLoading(false);
  };

  return (
    <section className="contact" id="contact">
      <div className="section-container">
        <h2 className="section-title">Contact <span>Me</span></h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together!</h3>
            <p>I'm always open to discussing new projects, opportunities, or just a friendly chat about tech!</p>
            <div className="contact-details">
              <div className="contact-item">
                <span>📧</span>
                <span>thulasiramchilukoti0301@gmail.com</span>
              </div>
              <div className="contact-item">
                <span>📍</span>
                <span>Vijayawada, Andhra Pradesh, India</span>
              </div>
              <div className="contact-item">
                <span>💼</span>
                <span>Open to Internships</span>
              </div>
              <div className="contact-item">
                <span>🐙</span>
                <a href="https://github.com/thulasiramchilukoti0301-collab" 
                   target="_blank" rel="noreferrer"
                   style={{color: '#aaaaaa', textDecoration: 'none'}}>
                  GitHub Profile
                </a>
              </div>
              <div className="contact-item">
                <span>💼</span>
                <a href="https://www.linkedin.com/in/thulasi-ram-chilukoti-22bb3537b/" 
                   target="_blank" rel="noreferrer"
                   style={{color: '#aaaaaa', textDecoration: 'none'}}>
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form">
            {status === 'success' && (
              <div className="alert-success">✅ Message sent successfully!</div>
            )}
            {status === 'error' && (
              <div className="alert-error">❌ Something went wrong. Try again!</div>
            )}
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              className="btn-primary"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message 🚀'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;