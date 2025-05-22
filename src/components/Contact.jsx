// src/components/Contact.jsx
import '../index.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Discuss Your Project</h3>
          <p>I'm always open to discussing new ideas, projects, or opportunities to collaborate in AI and software development.</p>

          <div className="contact-item">
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div className="contact-text">
              <h4>Email</h4>
              <p>mohaideenniyas04@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72..." />
              </svg>
            </div>
            <div className="contact-text">
              <h4>Phone</h4>
              <p>+91 7418971997</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="contact-text">
              <h4>Location</h4>
              <p>Coimbatore, Tamil Nadu, India</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form id="contactForm" onSubmit={(e) => { e.preventDefault(); alert("Message sent! (demo only)"); e.target.reset(); }}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" id="name" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input type="email" id="email" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" id="subject" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea id="message" className="form-control" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
