// src/components/Contact.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaHeart } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="pt-10 w-full flex flex-col items-center justify-center px-8 bg-linear-to-b from-gray-900 to-gray-800 relative z-50">
      <div className="flex flex-col items-center justify-center grow w-full">
        <motion.div 
          className="text-center max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-amber-200 to-amber-400">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl mb-10 text-gray-300 leading-relaxed">
            Although I'm not currently looking for new opportunities, my inbox is
            always open. Whether you have a question or just want to say hi, I'll
            try my best to get back to you!
          </p>
          <motion.a
            href="mailto:360.parminder@gmail.com"
            className="inline-block border-2 border-amber-400 px-8 py-2 rounded-lg text-amber-400 hover:bg-amber-400/10 hover:border-amber-300 hover:text-amber-300 transition-all duration-300 text-lg font-medium"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 15px rgba(251, 191, 36, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            Say Hello
          </motion.a>
        </motion.div>
      </div>
      
      <motion.div 
        className="mt-auto py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center">
          <a 
            href="https://github.com/360parminder" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 hover:text-amber-300 transition-colors mb-2"
          >
            <FaGithub className="mr-2" />
            <span>360parminder</span>
          </a>
          <div className="flex items-center text-gray-500 text-sm">
            <FaHeart className="text-red-500 mr-1" />
            <span>Developed with love by Parminder</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;