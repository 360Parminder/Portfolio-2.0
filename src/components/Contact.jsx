// src/components/Contact.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaHeart } from 'react-icons/fa';

const Contact = () => {
 
  return (
    <section className="relative pt-4 w-full flex flex-col items-center justify-center px-8 bg-linear-to-b from-neutral-00 to-neutral-400 dark:to-neutral-900  z-40">
    
      <div className="flex flex-col items-center justify-center grow w-full">
        <motion.div 
          className="text-center max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
       
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
            <FaGithub className="mr-2 dark:text-neutral-300 text-neutral-900" />
            <span className="dark:text-neutral-300 text-neutral-900">360parminder</span>
          </a>
          <div className="flex items-center text-gray-500 text-sm">
            <FaHeart className="text-red-500 mr-1 " />
            <span className="dark:text-neutral-300 text-neutral-900">Developed with love by Parminder Singh</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;