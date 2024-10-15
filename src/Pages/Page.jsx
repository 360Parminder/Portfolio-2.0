import React from 'react'
import '../Styles/Page.css'
const Page = () => {
  return (
    <div className='flex w-[90vw] h-screen relative  overflow-hidden '>
      <div className="text">
        <h1><span><b><i>Parminder</i></b></span>Singh_</h1>
        <h1><span><b><i>Parminder</i></b></span>Singh_</h1>
        <h1><span><b><i>Parminder</i></b></span>Singh_</h1>
      </div>
      <div className=' flex flex-row gap-14 items-end justify-center text-white text-xl font-semibold'>
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