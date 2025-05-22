// src/components/About.jsx
import '../index.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src="/image.png" alt="Mohaideen Niyas - AI Engineer" />
        </div>
        <div className="about-text">
          <h3>AI & Data Science Enthusiast</h3>
          <p>
            I'm currently pursuing a B.Tech in Artificial Intelligence and Data Science at Anna University Regional Campus, Coimbatore, with a GPA of 8.13. My academic and project experiences are focused on applying AI technologies to build innovative and practical solutions.
          </p>
          <p>
            I've participated in national-level hackathons like NITK Hackathon 2024, where we developed a real-time equity analysis tool combining market sentiment and sustainability metrics. I also interned at Skypark Itech IT Solutions, where I gained hands-on experience in front-end and back-end development, especially in game logic and responsive GUI design.
          </p>
          <p>
            My passion lies in turning AI concepts into impactful applications, especially in areas like computer vision, deep learning, and conversational AI. When I'm not building or experimenting, I'm usually exploring new tech trends and tools.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Connect</a>
        </div>
      </div>
    </section>
  );
};

export default About;
