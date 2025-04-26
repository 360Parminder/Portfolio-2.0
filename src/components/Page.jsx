import React from 'react';
import '../Styles/Page.css';
import { motion } from 'framer-motion';

const Page = () => {
  return (
    <div className='flex w-full h-[85vh] relative overflow-hidden bg-black'>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 1.5,
            ease: "easeOut"
          }
        }}
        className="text"
      >
        <h1 data-text="ParminderSingh_">
          <span><b><i>Parminder</i></b></span>Singh_
        </h1>
        <h1 data-text="ParminderSingh_">
          <span><b><i>Parminder</i></b></span>Singh_
        </h1>
        <h1 data-text="ParminderSingh_">
          <span><b><i>Parminder</i></b></span>Singh_
        </h1>
      </motion.div>

      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.5,
            duration: 1,
            ease: "easeOut"
          }
        }}
        className='absolute bottom-20 left-0 right-0 flex flex-row w-full gap-14 items-end justify-evenly text-white'
      >
        <div className="relative group">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
          />
          <p className='uppercase text-2xl font-bold tracking-wider mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300'>
            Freelance Front End Developer
          </p>
          <p className='uppercase text-lg text-white/70'>Based in India</p>
        </div>

        <div className="relative group">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
          />
          <p className='uppercase text-2xl font-bold tracking-wider mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300'>
            specializing in
          </p>
          <p className='uppercase text-lg text-white/70'>Web and Mobile Development</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="scroll-indicator"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(100,108,255,0.2),rgba(0,0,0,0))]"
      />
    </div>
  );
};

export default Page;