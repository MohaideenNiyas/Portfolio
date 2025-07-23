// src/components/Skills.jsx
import { motion } from 'framer-motion';
import {
  FaPython, FaJava, FaHtml5, FaCss3Alt,
  FaReact, FaNodeJs, FaGitAlt, FaGoogle, FaLaptopCode
} from 'react-icons/fa';
import {
  SiJavascript, SiMongodb, SiMysql, SiTailwindcss,
  SiTensorflow, SiKeras, SiFigma, SiJupyter
} from 'react-icons/si';

const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: 'Python', icon: <FaPython className="text-blue-500" /> },
      { name: 'Java', icon: <FaJava className="text-red-500" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> }
    ]
  },
  {
    category: "Frontend Development",
    skills: [
      { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
      { name: 'ReactJS', icon: <FaReact className="text-cyan-400" /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss className="text-sky-400" /> },
      { name: 'Figma', icon: <SiFigma className="text-pink-500" /> }
    ]
  },
  {
    category: "Backend & Database",
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-700" /> }
    ]
  },
  {
    category: "AI / ML Frameworks",
    skills: [
      { name: 'TensorFlow', icon: <SiTensorflow className="text-orange-400" /> },
      { name: 'Keras', icon: <SiKeras className="text-red-500" /> }
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
      { name: 'Google Colab', icon: <FaGoogle className="text-yellow-300" /> },
      { name: 'Jupyter Notebook', icon: <SiJupyter className="text-orange-300" /> },
      { name: 'Visual Studio', icon: <FaLaptopCode className="text-purple-400" /> }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 border-blue-500 pl-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <div className="space-y-16">
          {skillCategories.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {group.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-gray-800 hover:scale-105 transition-transform"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="text-4xl mb-2">{skill.icon}</div>
                    <p className="text-sm font-semibold">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
