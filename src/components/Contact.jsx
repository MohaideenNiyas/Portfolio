// src/components/Contact.jsx
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 mb-6">
              I'm always open to discussing new projects, tech collaborations, or opportunities in AI and Full Stack Development.
            </p>

            <div className="space-y-6 text-gray-300">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-blue-400" />
                <span>mohaideenniyas04@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-blue-400" />
                <span>+91 74189 71997</span>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>Tirunelveli, Tamil Nadu, India</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            action="https://getform.io/f/avrygmpa" // update this to your Formspree or backend
            method="POST"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-semibold text-white shadow"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
