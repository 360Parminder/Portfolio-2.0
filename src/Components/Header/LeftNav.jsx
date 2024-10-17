import React from 'react'
import { IonIcon } from '@ionic/react';
import { logoCodepen, logoGithub, logoInstagram, logoLinkedin, logoX } from 'ionicons/icons';
import './Nav.css'
import { motion } from 'framer-motion'
const LeftNav = () => {
  return (

      <div className='fixed after:w-[0.1rem] after:h-32 after:bg-white  left-0 bottom-0 flex flex-col justify-center items-center ml-5 '>
        <motion.ul
          // initial={{ y: 100, opacity: 0 }}
          // animate={{
          //   y: 0,
          //   opacity: 1,
          //   transition: {
          //     delay: 0.5,
          //     duration: 0.5 }
          // }}
          className='flex flex-col justify-center items-center mb-5'>
          <motion.li
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.5,
                duration: 0.5
              }
            }}


            className='text-[var(--font-color)] text-center text-2xl font-bold'>
            <a href='https://www.linkedin.com/in/parminder-singh-storm/' target='_blank' className='cursor-pointer'> <IonIcon className='logo' icon={logoLinkedin} /></a>
          </motion.li>
          <motion.li
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 1,
                duration: 0.5
              }
            }}
            className='text-[var(--font-color)] text-center text-2xl font-bold'>
            <a href="https://www.instagram.com/360_parminder/" target='_blank' className='cursor-pointer'><IonIcon className='logo' icon={logoInstagram} /></a>
          </motion.li>
          <motion.li

            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 1.5,
                duration: 0.5
              }
            }}
            className='text-[var(--font-color)] text-center text-2xl font-bold'>
            <a href="https://github.com/360Parminder" target='_blank' className='cursor-pointer'><IonIcon className='logo' icon={logoGithub} /></a>
          </motion.li>
          <motion.li
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 2,
                duration: 0.5
              }
            }}
            className='text-[var(--font-color)] text-center text-2xl font-bold'>
            <a href="https://x.com/360parminder" target='_blank' className=' cursor-pointer'><IonIcon className='logo' icon={logoX} /></a>
          </motion.li>
          <motion.li
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 2.5,
                duration: 0.5
              }
            }}
            className='text-[var(--font-color)] text-center text-2xl font-bold'>
            <a href="https://codepen.io/STORM992002" target='_blank' className=' cursor-pointer'><IonIcon className='logo' icon={logoCodepen} /></a>
          </motion.li>
        </motion.ul>
      </div>
  )
}

export default LeftNav