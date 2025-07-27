import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter, FaCodepen,FaMedium } from 'react-icons/fa';

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
        <motion.a
          href="https://www.linkedin.com/in/360parminder/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-200 transition-colors"
          whileHover={{ rotate:33, scale: 1.2, transition: { duration: 0.4 },x: 10,y:-10 }}
          whileTap={{ scale: 0.9 }}>
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/360_parminder/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-200 transition-colors"
          whileHover={{ rotate:30, scale: 1.2, transition: { duration: 0.4 },x: 10,y:-10 }}
          whileTap={{ scale: 0.9 }}>
          <FaInstagram />
        </motion.a>
        <motion.a
          href="https://github.com/360parminder" target="_blank" rel="noopener noreferrer" className="hover:text-amber-200 transition-colors"
          whileHover={{ rotate:30, scale: 1.2, transition: { duration: 0.4 },x: 10,y:-10 }}
          whileTap={{ scale: 0.9 }}>
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://twitter.com/360parminder" target="_blank" rel="noopener noreferrer" className="hover:text-amber-200 transition-colors"
          whileHover={{ rotate:30, scale: 1.2, transition: { duration: 0.4 },x: 10,y:-10 }}
          whileTap={{ scale: 0.9 }}>
          <FaTwitter />
        </motion.a>
        <motion.a
          href="https://medium.com/@360parminder" target="_blank" rel="noopener noreferrer" className="hover:text-amber-200 transition-colors"
          whileHover={{ rotate:30, scale: 1.2, transition: { duration: 0.4 },x: 10,y:-10 }}
          whileTap={{ scale: 0.9 }}>
          <FaMedium />
        </motion.a>
        <div className="w-px h-32 bg-white"></div>
      </motion.div>
      
      {/* Right Email */}
      <motion.div 
        className="fixed right-8 bottom-0 hidden md:flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.8 }}
      >
        <motion.a 
          href="mailto:360.parminder@gmail.com" 
          className="text-sm tracking-widest writing-mode-vertical hover:text-amber-200 transition-colors"
            target="_blank" rel="noopener noreferrer"
            style={{ writingMode: 'vertical-rl' }}
        whileHover={{ y:-10,scale:1.1, transition: { duration: 0.4 } }}
        >
          360.parminder@gmail.com
        </motion.a>
        <div className="w-px h-24 bg-white mt-4"></div>
      </motion.div>
    </>
  );
};

export default SideElements;