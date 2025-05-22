// src/components/Skills.jsx
import '../index.css';

const skills = [
  {
    title: 'Programming Languages',
    description: 'Java, Python, C, JavaScript',
    icon: '💻',
  },
  {
    title: 'Frontend Technologies',
    description: 'Figma, ReactJS, HTML, TailwindCSS',
    icon: '🎨',
  },
  {
    title: 'Backend & Databases',
    description: 'NodeJS, SQL (MySQL), MongoDB',
    icon: '🛠️',
  },
  {
    title: 'ML/DL Libraries',
    description: 'TensorFlow, Keras, Scikit-learn, pandas, NumPy, Matplotlib',
    icon: '📚',
  },
  {
    title: 'Tools & Platforms',
    description: 'Git, Colab, Jupyter Notebook, Visual Studio',
    icon: '⚙️',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2 className="section-title">My Expertise</h2>
      </div>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card fade-in" key={index}>
            <div className="skill-icon" style={{ fontSize: '2.5rem' }}>{skill.icon}</div>
            <h3 className="skill-title">{skill.title}</h3>
            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
