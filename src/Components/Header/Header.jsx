import { useEffect, useState } from "react";
import logo from '../../Assets/Images/whitelogo.png'

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
    <div className='flex sticky top-0 justify-between items-center w-full h-16 text-white px-5'>
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
          <i className='fas fa-sign-out-alt'>Resume</i>
        </div>
      </div>
      <a href="mailto:360.parminder@gmail.com" target="_blank" className='flex items-center'>LET'S TALK</a>
    </div>
  )
}

export default Header