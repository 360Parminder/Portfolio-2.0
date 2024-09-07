import React from 'react'
import { IonIcon } from '@ionic/react';
import { logoCodepen, logoGithub, logoInstagram, logoLinkedin, logoX } from 'ionicons/icons';
import './Nav.css'
const LeftNav = () => {
  return (
   <>
  <div className='absolute after:w-[0.1rem] after:h-32 after:bg-white  left-0 bottom-0 flex flex-col justify-center items-center ml-5 mb-5'>
    <ul className='flex flex-col justify-center items-center'>
      <li className='text-[var(--font-color)] text-center text-2xl font-bold'>
        <a href="#" className='cursor-pointer'> <IonIcon className='logo' icon={logoLinkedin} /></a>
      </li>
      <li className='text-[var(--font-color)] text-center text-2xl font-bold'>
        <a href="#" className='cursor-pointer'><IonIcon className='logo' icon={logoInstagram} /></a>
      </li>
      <li className='text-[var(--font-color)] text-center text-2xl font-bold'>
        <a href="#" className='cursor-pointer'><IonIcon  className='logo'icon={logoGithub} /></a>
      </li>
      <li className='text-[var(--font-color)] text-center text-2xl font-bold'>
        <a href="#" className=' cursor-pointer'><IonIcon className='logo' icon={logoX} /></a>
      </li>
      <li className='text-[var(--font-color)] text-center text-2xl font-bold'>
        <a href="#" className=' cursor-pointer'><IonIcon className='logo' icon={logoCodepen} /></a>
      </li>
    </ul>
  </div>
   </>
  )
}

export default LeftNav