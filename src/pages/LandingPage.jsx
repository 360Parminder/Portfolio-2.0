import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";


const LandingPage = () => {

    return (

        <div className="max-w-7xl  mx-auto relative overflow-hidden px-4">
            {/* Page 1 - Header */}
            <section id="home">
                <Header />
            </section>

            {/* Page 2 - About */}
            <section id="about">
                <About />
            </section>

            {/* Page 3 - Projects */}
            {/* <section id="projects">
                        <Projects />
                        </section> %}
                    {/* Page 4 - Contact */}
            <section id="contact">
                <Contact />
            </section>
        </div>

    );
}

export default LandingPage;