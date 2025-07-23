// src/components/Experience.jsx
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Intern – Skypark Itech IT Solutions',
    date: 'May 2024 – July 2024',
    details: [
      'Developed a dynamic Java GUI game interface with embedded game logic.',
      'Handled game state, user input, and responsive UX flow.',
      'Built end-to-end logic for single and multiplayer gameplay.'
    ],
  },
  {
    role: 'Top 10 – NITK Hackathon 2024 (Wells Fargo)',
    date: 'Feb 2024',
    details: [
      'Built a real-time equity analysis tool using live stock data and ESG metrics.',
      'Implemented ML, sentiment analysis, and dashboard using Flask & React.',
      'Ranked in top 10 nationwide among 300+ teams.'
    ],
  },
  {
    role: 'OCR Project – Virtual Hackathon',
    date: 'Mar 2025',
    details: [
      'Created ConflictCast: an AI-powered warzone news reporter.',
      'Used MistralAI OCR + NLP to transform newspaper images into frontline scripts.',
      'Synthesized professional voiceovers using Zyphra Voice API.'
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Center vertical timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-500 -translate-x-1/2 z-0" />

          {/* Experience Cards */}
          {experiences.map((exp, i) => (
            <div key={i} className="relative mb-16">
              {/* Dot centered on the line */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-500 rounded-full border-4 border-gray-900 z-10"></div>

              {/* Card */}
              <motion.div
                className={`md:w-[45%] px-6 py-6 bg-gray-800 rounded-lg shadow-md relative ${
                  i % 2 === 0 ? 'md:ml-auto md:mr-[55%]' : 'md:mr-auto md:ml-[55%]'
                }`}
                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-sm text-blue-300 mb-2">{exp.date}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {exp.details.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
