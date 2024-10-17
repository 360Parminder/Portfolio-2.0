import React from 'react'
import './Nav.css'
import {motion} from 'framer-motion'
const RightNav = () => {
  return (
    <motion.div
    initial={{ y: 500, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 1,
                duration: 1.5
              }
            }}
    
    className='fixed after:w-[0.1rem] after:h-32 after:bg-white right-0 bottom-0  flex flex-col justify-center items-center me-5 mr-5 '> 
      <a href="mailto:360.parminder@gmail.com" className='mail text-[var(--font-color)] text-center text-2xl font-bold bg-transparent tracking-wider'>360.Parminder@gmail.com</a>
    </motion.div>
  )
}

export default RightNav