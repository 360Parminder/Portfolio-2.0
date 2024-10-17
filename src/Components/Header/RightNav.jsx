import React from 'react'
import './Nav.css'
const RightNav = () => {
  return (
    <div className='fixed after:w-[0.1rem] after:h-32 after:bg-white right-0 bottom-0  flex flex-col justify-center items-center me-5 mr-5 '> 
      <a href="mailto:360.parminder@gmail.com" className='mail text-[var(--font-color)] text-center text-2xl font-bold bg-transparent tracking-wider'>360.Parminder@gmail.com</a>
    </div>
  )
}

export default RightNav