import { useEffect, useState } from "react";
import { motion } from 'framer-motion';

const Header = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateCurrentTime();
    const interval = setInterval(updateCurrentTime, 1000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: 1.5
        }
      }}
      className="flex sticky z-30 top-0 justify-between items-center w-full h-16 text-white px-5 backdrop-blur-sm bg-black/30"
    >
      <div className="flex items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
          className="text-2xl font-bold tracking-wider"
        >
          PS
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-center"
      >
        <p className="text-sm text-white/70">Rajasthan, India</p>
        <p className="font-mono">{currentTime}</p>
      </motion.div>

      <div className="flex items-center space-x-8">
        {/* <motion.div
          whileHover={{ scale: 1.1 }}
          className="group cursor-pointer"
        >
          <span className="relative text-lg">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </span>
        </motion.div> */}

        {/* <motion.div
          whileHover={{ scale: 1.1 }}
          className="group cursor-pointer"
        >
          <span className="relative text-lg">
            Work
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </span>
        </motion.div> */}

        <motion.a
          href="https://drive.google.com/file/d/1gNsL_IEcKCswSxUuQB8AGSy2pY38gyew/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="group cursor-pointer"
        >
          <span className="relative text-lg">
            Resume
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </span>
        </motion.a>
      </div>

      <motion.a
        href="mailto:360.parminder@gmail.com"
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.05 }}
        className="px-4 py-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
      >
        LET'S TALK
      </motion.a>
    </motion.div>
  );
};

export default Header;