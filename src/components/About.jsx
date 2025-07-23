// src/components/About.jsx
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="bg-gray-900 text-white py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold mb-6 border-l-4 border-blue-500 pl-4">
            About Me
          </h2>
          <p className="text-gray-400 text-lg mb-4 leading-relaxed">
            I'm <span className="text-blue-400 font-semibold">Mohaideen Niyas</span>, an AI & Data Science undergraduate passionate about
            <span className="text-blue-400 font-semibold"> Machine Learning</span>,
            <span className="text-blue-400 font-semibold"> Deep Learning</span>, and
            <span className="text-blue-400 font-semibold"> Full Stack Web Development</span>.
          </p>
          <p className="text-gray-400 text-base mb-4 leading-relaxed">
            I specialize in creating data-driven applications and intelligent systems using
            tools like <span className="text-blue-400 font-semibold">Python, TensorFlow, PyTorch</span>, and
            <span className="text-blue-400 font-semibold"> React</span>. Whether it's building scalable APIs,
            designing responsive UIs, or training deep learning models, I aim to bridge the gap between
            research and real-world deployment.
          </p>
          <p className="text-gray-400 text-base leading-relaxed">
            I'm always exploring new technologies and thrive in hackathons, internships, and team-based environments.
          </p>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/machine-learning-5582494-4655807.png"
            alt="AI Developer Illustration"
            className="w-80 h-auto rounded-lg shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
