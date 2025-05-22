// src/components/Footer.jsx
import '../index.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">Mohaideen<span>AI</span></div>
        
        <div className="footer-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="social-links">
          <a href="#" className="social-link" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2
              2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a href="#" className="social-link" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M9 19c-5 1.5-5-2.5-7-3
              m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61
              c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0
              20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65
              16 2.48a13.38 13.38 0 0 0-7 0C6.27.65
              5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44
              5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61
              6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
          <a href="#" className="social-link" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8
              4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>

        <div className="copyright">
          © 2025 Mohaideen Niyas | AI & Data Science Enthusiast
        </div>
      </div>
    </footer>
  );
};

export default Footer;
