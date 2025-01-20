import { useEffect, useState } from "react";
import logo from '../../Assets/Images/whitelogo.png'
import {motion} from 'framer-motion'

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
    console.log(currentTime);
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

    className='flex sticky z-30 top-0 justify-between items-center w-full h-16 text-white px-5 bg-blend-saturation bg-opacity-50 bg-black'>
      <div className='flex items-center'>
        <img src={logo} alt='logo' className='w-10 h-10' />
      </div>
      <div>
        <p>Rajasthan,India</p>
        <p>{currentTime}</p>
      </div>
      <div className='flex items-center'>
        <div className='mr-5 text-xl'>
          <i className='fas fa-user'>About</i>
        </div>
        <div className='mr-5 text-xl'>
          <i className='fas fa-cog'>Work</i>
        </div>
        <div className='mr-5 text-xl'>
          <i className='fas fa-sign-out-alt'><a href="https://drive.google.com/file/d/1BHrmmm2oPBliaPQdxFpi3YKWC48CNV4v/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume</a></i>
        </div>
      </div>
      <a href="mailto:360.parminder@gmail.com" target="_blank" rel="noreferrer" className='flex items-center'>LET'S TALK</a>
    </motion.div>
  )
}

export default Header