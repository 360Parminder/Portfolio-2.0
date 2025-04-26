import React from 'react';
import './Nav.css';
import { motion } from 'framer-motion';

const RightNav = () => {
  return (
    <motion.div
      initial={{ y: 500, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          delay: 1,
          duration: 1.5,
          type: "spring",
          stiffness: 50
        }
      }}
      className="fixed after:w-[0.1rem] after:h-32 after:bg-white/30 right-0 bottom-0 flex flex-col justify-center items-center me-5 mr-5 z-50"
    >
      <motion.a
        href="mailto:360.parminder@gmail.com"
        whileHover={{ scale: 1.1, letterSpacing: "3px" }}
        className="mail text-white text-center text-xl font-bold bg-transparent tracking-wider hover:text-[#646cff] transition-all duration-300"
      >
        360.Parminder@gmail.com
      </motion.a>
    </motion.div>
  );
};

export default RightNav;