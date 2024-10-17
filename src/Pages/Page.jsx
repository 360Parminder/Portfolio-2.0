import React from 'react'
import '../Styles/Page.css'
import {motion} from 'framer-motion'
const Page = () => {
  return (
    <div className='flex w-full h-[85vh] relative  overflow-hidden '>
      <motion.div
      initial={{ z: -10, opacity: 0 }}
              animate={{
                z: 0,
                opacity: 1,
                transition: {
                  delay: 1,
                  duration: 1.5
                }
              }}
      className="text">
        <h1><span><b><i>Parminder</i></b></span>Singh_</h1>
        <h1><span><b><i>Parminder</i></b></span>Singh_</h1>
        <h1><span><b><i>Parminder</i></b></span>Singh_</h1>
      </motion.div>
      <div className=' flex flex-row w-full gap-14 items-end justify-evenly text-white text-xl font-semibold'>
        <div>
          <p className=' uppercase'>Freelance Front End Developer</p>
          <p className=' uppercase'>Based in India</p>

        </div>
        <div>
      <p className=' uppercase'>specializing in</p>
      <p className=' uppercase'>Web and Mobile Development</p>
        </div>
      </div>
    </div>
  )
}

export default Page