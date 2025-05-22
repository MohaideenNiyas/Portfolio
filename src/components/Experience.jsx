// src/components/Experience.jsx
import '../index.css';
import { useEffect } from 'react';
const experiences = [
  {
    date: 'Apr 2024 – May 2024',
    title: 'Intern, Software Developer',
    subtitle: 'Skypark Itech IT Solutions',
    description:
      'Developed a GUI-based game using Java. Focused on game logic, responsive UI design, and user interaction. Gained experience in both frontend and backend development including game mechanics and user interface refinement.',
  },
  {
    date: 'Feb 2024',
    title: 'Participant – NITK Hackathon 2024',
    subtitle: 'Wells Fargo x NITK Surathkal',
    description:
      'Built a real-time equity analysis tool using financial data, market sentiment, and sustainability scores. Ranked in the top 10 nationwide. Demonstrated strong technical skills in data analysis and financial AI systems.',
  },
];

const Experience = () => {
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
    <section id="experience" className="experience">
      <div className="section-header">
        <h2 className="section-title">Work Experience</h2>
      </div>
      <div className="timeline">
        {experiences.map((exp, idx) => (
          <div className="timeline-item fade-in" key={idx}>
            <div className="timeline-dot"></div>
            <div className="timeline-date">{exp.date}</div>
            <div className="timeline-content">
              <h3 className="timeline-title">{exp.title}</h3>
              <div className="timeline-subtitle">{exp.subtitle}</div>
              <p className="timeline-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
