// src/components/About.jsx
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaGithub } from 'react-icons/fa';
import { IoLogoLinkedin, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5';
// import { SiJava, SiMysql } from 'react-icons/si';

const About = () => {
  return (
    <section className="h-screen w-full flex flex-col md:flex-row p-8">
      <motion.div 
        className="md:w-1/2"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      
      >
        <h2 className="text-3xl md:text-4xl mb-6 flex items-center">
          <span className="mr-2"><IoLogoLinkedin /></span> About Me
        </h2>
        <p className="text-xl md:text-2xl">
          I am currently a Web Development Engineer,
          working as the <span className="text-cyan-400">Freelancer</span>. At the same time,
          I am undertaking a Bachelor of Technology in
          computer Science Engineering at
          <span className="text-cyan-400"> Bikaner Technical University</span>.
        </p>
      </motion.div>
      
      <motion.div 
        className="md:w-1/2 mt-8 md:mt-0 md:pl-8"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-xl md:text-2xl mb-6">Here are some technologies I have been working with:</p>
        
        <div className="flex flex-wrap gap-8">
          <ul className="space-y-4">
            <li className="flex items-center text-xl">
              <FaHtml5 className="mr-2 text-orange-500" /> HTML
            </li>
            <li className="flex items-center text-xl">
              <FaCss3Alt className="mr-2 text-blue-500" /> CSS
            </li>
            <li className="flex items-center text-xl">
              <FaJs className="mr-2 text-yellow-400" /> JavaScript
            </li>
          </ul>
          
          <ul className="space-y-4">
            <li className="flex items-center text-xl">
              <FaPython className="mr-2 text-blue-400" /> Python
            </li>
            <li className="flex items-center text-xl">
              {/* <SiJava className="mr-2 text-red-500" /> Java */}
            </li>
            <li className="flex items-center text-xl">
              {/* <SiMysql className="mr-2 text-blue-300" /> MYSQL */}
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default About;