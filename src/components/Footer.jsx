// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-10 px-6">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Name + Year */}
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Mohaideen Niyas. All rights reserved.</p>

        {/* Social Icons */}
        <div className="flex gap-6 text-lg">
          <a
            href="https://github.com/MohaideenNiyas"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mohaideen-niyas-9932aa268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:mohaideenniyas04@gmail.com"
            className="hover:text-blue-400 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
