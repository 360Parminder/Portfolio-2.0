import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter, FaCodepen } from 'react-icons/fa';

const SideElements = () => {
  return (
    <>
      {/* Left Social Icons */}
      <motion.div 
        className="fixed left-8 bottom-0 hidden md:flex flex-col items-center space-y-6 text-2xl z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <a href="https://www.linkedin.com/in/parminder-singh-storm/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-200 transition-colors">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/_broken__storm_/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-200 transition-colors">
          <FaInstagram />
        </a>
        <a href="https://github.com/STORM992002" target="_blank" rel="noopener noreferrer" className="hover:text-amber-200 transition-colors">
          <FaGithub />
        </a>
        <a href="https://twitter.com/Parmind32178223" target="_blank" rel="noopener noreferrer" className="hover:text-amber-200 transition-colors">
          <FaTwitter />
        </a>
        <a href="https://codepen.io/STORM992002" target="_blank" rel="noopener noreferrer" className="hover:text-amber-200 transition-colors">
          <FaCodepen />
        </a>
        <div className="w-px h-32 bg-white"></div>
      </motion.div>
      
      {/* Right Email */}
      <motion.div 
        className="fixed right-8 bottom-0 hidden md:flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.8 }}
      >
        <a 
          href="mailto:360.parminder@gmail.com" 
          className="text-sm tracking-widest writing-mode-vertical hover:text-amber-200 transition-colors"
            target="_blank" rel="noopener noreferrer"
            style={{ writingMode: 'vertical-rl' }}
        >
          360.parminder@gmail.com
        </a>
        <div className="w-px h-24 bg-white mt-4"></div>
      </motion.div>
    </>
  );
};

export default SideElements;