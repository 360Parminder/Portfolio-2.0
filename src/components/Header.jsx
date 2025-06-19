import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useCanvasAnimation } from '../hooks/useCanvasAnimation';

const Header = () => {
  const canvasRef = useRef(null);
  useCanvasAnimation(canvasRef);

  return (
    <section className="h-screen w-full relative flex items-center">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-40"
      />

      <div className="relative z-20 w-full h-screen flex flex-col justify-center">
        <motion.div
          className="absolute w-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex whitespace-nowrap" style={{}}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider animate-slide">
              <span
                className=""
                style={{ color: 'transparent', WebkitTextStroke: '2px white' }}
              >
                WEB
              </span>
              DEVELOPER
            </h1>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider animate-slide">
              <span
                className=""
                style={{ color: 'transparent', WebkitTextStroke: '2px white' }}
              >
                WEB
              </span>
              DEVELOPER
            </h1>
          </div>

        </motion.div>

        <motion.h3
          className="absolute top-[60%] text-xl md:text-3xl uppercase"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Trying my best to provide<br />you with best<br />quality websites.
        </motion.h3>

        <motion.h3
          className="absolute top-[60%] right-0 text-xl md:text-3xl uppercase"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Hi, I'm<br />Parminder singh
        </motion.h3>
      </div>
    </section>
  );
};

export default Header;