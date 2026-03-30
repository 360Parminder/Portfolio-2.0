import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SideElements from "../components/SideElements";
import CurrentTime from "../components/CurrentTime";

const Landing = () => {

    return (

        <>

            <div className="bg-background text-foreground font-sans relative">
                <Navbar />
                <CurrentTime />
                <SideElements />
                <Outlet />
            </div>
        </>

    );
}

export default Landing;