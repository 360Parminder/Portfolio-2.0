// src/components/Projects.jsx
import { motion } from 'framer-motion';
import ProjectItem from './ProjectItem';

const projects = [
  {
    title: "DataStoreX",
    description: "Experience secure file storage, easy organization, and seamless sharing with our web-based file store. Access your files anytime, anywhere, and simplify your digital life with our reliable and user-friendly solution. Discover a new level of efficiency and productivity today.",
    features: ["Secure File Storage", "Seamless Sharing", "Reliable Solution"],
    githubLink: "https://github.com/STORM992002/datastorex",
    liveLink: "https://datastorex.tech/",
    image: "/assets/images/DataStoreX.png",
    align: "right"
  },
  {
    title: "Yingzi",
    description: "A minimal, dark purple theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    features: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
    githubLink: "https://github.com/STORM992002/yingzi",
    liveLink: "https://yingzi.netlify.app/",
    image: "/assets/images/yingzi.png",
    align: "left"
  },
  {
    title: "Weather",
    description: "The weather web app provides real-time forecasts, alerts, and interactive maps. Users can track rainfall, check cloud cover, and stay informed about changing weather conditions.",
    features: ["Current Weather Display", "User-Friendly interface", "Sunrise and Sunset Times"],
    githubLink: "https://github.com/STORM992002/weather",
    liveLink: "https://weathir.netlify.app/",
    image: "/assets/images/weather.png",
    align: "right"
  }
];

const Projects = () => {
  return (
    <section className="min-h-screen w-full py-20 px-8 relative">
      <motion.h2 
        className="text-3xl md:text-4xl mb-20 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Some Things I've Built
        <span className="absolute top-1/2 left-80 w-64 h-0.5 bg-cyan-400 hidden md:block"></span>
      </motion.h2>
      
      <div className="space-y-40">
        {projects.map((project, index) => (
          <ProjectItem 
            key={index}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;