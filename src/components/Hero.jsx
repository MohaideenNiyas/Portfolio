// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <motion.h1 
          className="text-4xl sm:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Mohaideen Niyas
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl text-gray-400 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          AI & DS Undergraduate | Aspiring ML Engineer | Deep Learning Developer
        </motion.p>

        <motion.a 
          href="/resume.pdf"
          download="Mohaideen_Niyas_Resume.pdf"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition"
        >
          <FaDownload className="mr-2" />
          Download Resume
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
