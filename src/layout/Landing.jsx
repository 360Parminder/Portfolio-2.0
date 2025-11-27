import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SideElements from "../components/SideElements";

const Landing = () => {

    return (

        <>

            <div className="bg-background text-foreground font-sans relative">
                <Navbar />
                {/* <button className='fixed bottom-5 right-[5rem] z-100' onClick={handleThemeToggle}>
        {darkMode ? <SunIcon /> : <MoonIcon />}
      </button> */}
                <SideElements />
                <Outlet />
            </div>
        </>

    );
}

export default Landing;