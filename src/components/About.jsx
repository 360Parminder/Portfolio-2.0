import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="py-20 bg-black/95">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8 text-white">About Me</h2>
          <p className="text-lg text-white/70 mb-8 leading-relaxed">
            I'm a passionate Freelance Front End Developer based in India, with a keen eye for creating
            engaging and responsive web experiences. With expertise in modern web technologies and a
            strong foundation in design principles, I transform ideas into seamless digital solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white/5 rounded-lg backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-white mb-2">3+ Years</h3>
              <p className="text-white/70">Experience</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white/5 rounded-lg backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-white mb-2">50+</h3>
              <p className="text-white/70">Projects Completed</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white/5 rounded-lg backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-white mb-2">100%</h3>
              <p className="text-white/70">Client Satisfaction</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;