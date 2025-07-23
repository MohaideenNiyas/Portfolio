// src/components/Projects.jsx
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'DL Model for Art Recognition',
    tech: 'Python, Flask',
    date: 'Nov 2024',
    description: `Developed a deep learning model using ResNet101 for real-time classification of Edvard Munch’s paintings.
Integrated Google APIs to enrich predictions with historical and contextual data.`,
    github: 'https://github.com/MohaideenNiyas/ResNet101-Based-Painting-Classifier.git',
  },
  {
    title: 'AI-Powered WarZone Reporter (ConflictCast)',
    tech: 'Flask, MistralAI, Groq, Zyphra Voice',
    date: 'July 2025',
    description: `OCR-powered app that transforms newspaper images into audio war reports using NLP, voice synthesis, and contextual analysis. Outputs dramatic, emotionally-infused correspondent scripts.`,
    github: 'https://github.com/MohaideenNiyas/OCR.git',
  },
  {
    title: 'ML Model for Handwriting Recognition',
    tech: 'TensorFlow, Keras',
    date: 'May 2024',
    description: `Created an ML model using CNN for handwritten digit and character recognition with high accuracy.`,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-blue-700 transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-1">{project.date}</p>
              <p className="text-sm text-blue-400 mb-3">{project.tech}</p>
              <p className="text-gray-300 text-sm mb-3">{project.description}</p>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-sm hover:underline"
                >
                  🔗 View on GitHub
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
