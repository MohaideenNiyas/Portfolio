// src/components/Projects.jsx
import '../index.css';
import { useEffect } from 'react';
const projects = [
  {
    title: 'Chatbot & Companion App',
    category: 'Full Stack',
    description:
      'Developed a simple chatbot using Flask, Node.js, and MySQL to handle user queries, accompanied by a frontend app for user interaction.',
    image: '/chatbot.png',
    links: [
      { text: 'GitHub', url: '#' },
      { text: 'Live Demo', url: '#' },
    ],
  },
  {
    title: 'Art Recognition (ResNet101)',
    category: 'Deep Learning',
    description:
      'Built a DL model using ResNet101 to recognize Edvard Munch’s artworks. Integrated Google APIs for historical context and achieved high accuracy.',
    image: '/project-art.png',
    links: [
      { text: 'GitHub', url: '#' },
      { text: 'Details', url: '#' },
    ],
  },
  {
    title: 'Handwriting Recognition',
    category: 'Machine Learning',
    description:
      'Created an ML model with CNNs using TensorFlow and Keras to recognize handwritten digits and characters with high accuracy.',
    image: '/handwriting.png',
    links: [
      { text: 'GitHub', url: '#' },
      { text: 'Demo', url: '#' },
    ],
  },
];

const Projects = () => {
    useEffect(() => {
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px',
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, appearOptions);

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });

    return () => {
      faders.forEach(fader => appearOnScroll.unobserve(fader));
    };
  }, []);
  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div className="project-card fade-in" key={idx}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <div className="project-category">{project.category}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                {project.links.map((link, i) => (
                  <a href={link.url} target="_blank" rel="noopener noreferrer" key={i}>
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
