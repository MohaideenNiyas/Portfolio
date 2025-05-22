// src/components/Header.jsx
import { useEffect } from 'react';
import '../index.css';

const Header = () => {
  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    const handleMenuToggle = () => {
      navLinks.classList.toggle('active');
    };

    window.addEventListener('scroll', handleScroll);
    menuToggle.addEventListener('click', handleMenuToggle);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      menuToggle.removeEventListener('click', handleMenuToggle);
    };
  }, []);

  return (
    <header id="home">
      <nav className="navbar">
        <a href="#" className="logo">Mohaideen<span>AI</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="menu-toggle">☰</button>
      </nav>

      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="hero">
        <p className="hero-subtitle">Hello, I'm</p>
        <h1 className="typewriter">Mohaideen Niyas</h1>
        <p>B.Tech AI & DS student passionate about building intelligent systems with practical impact.</p>
        <div>
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </div>

      <a href="#about" className="scroll-down">
        <span>Scroll Down</span>
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </a>
    </header>
  );
};

export default Header;
