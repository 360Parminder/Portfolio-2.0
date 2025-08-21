import { motion } from 'framer-motion';
import ProjectItem from './ProjectItem';
import Rajdoot from '../assets/images/Rajdoot.png';
import Swasthya from '../assets/images/Swasthya.png';
import Aura from '../assets/images/Aura.png';
import Slug from '../assets/images/Slug.png';

const projects = [
  //  {
  //   title: "Kosh",
  //   description: "Sophisticated Messaging APIs for Developers. Build powerful messaging applications with our elegant, reliable, and affordable API platform.",
  //   image: Rajdoot,
  //   tech: [
  //     { label: "React", icon: 'react' },
  //     { label: "Tailwind", icon: 'tailwindcss' },
  //     { label: "Node.js", icon: 'nodejs' },
  //     { label: "MongoDB", icon: 'mongodb' },
  //     { label: "Razorpay", icon: 'razorpay' },
  //     { label: "AWS", icon: 'aws' },
  //     { label: "Cloudinary", icon: 'cloudinary' },
  //     // { label: "Arduino", icon: 'arduino' },
  //     // { label: "MQTT", icon: 'mqtt' },
  //     // { label: "Socket.io", icon: 'socket.io' }],
  //   ],
  //   link: "https://kosh.uno",
  //   github: "https://github.com/360parminder/kosh"

  // },
  {
    title: "Rajdoot",
    description: "Sophisticated Messaging APIs for Developers. Build powerful messaging applications with our elegant, reliable, and affordable API platform.",
    image: Rajdoot,
    tech: [
      { label: "React", icon: 'react' },
      { label: "Tailwind", icon: 'tailwindcss' },
      { label: "Node.js", icon: 'nodejs' },
      { label: "MongoDB", icon: 'mongodb' },
      { label: "Razorpay", icon: 'razorpay' },
      { label: "AWS", icon: 'aws' },
      { label: "Cloudinary", icon: 'cloudinary' },
      { label: "Arduino", icon: 'arduino' },
      // { label: "MQTT", icon: 'mqtt' },
      { label: "Socket.io", icon: 'socket.io' }],
    link: "https://rajdoot.parminder.info",
    github: "https://github.com/360parminder/rajdoot"

  },
  {
    title: "Swasthya",
    description: "Swasthya is a platform that allows you to monitor your health and get alerts when your health is not good. It also allow you to track your family and friends medication and health.",
    image: Swasthya,
    tech: [
      { label: "React Native", icon: 'react' },
      { label: "Node.js", icon: 'nodejs' },
      { label: "Tailwind", icon: 'tailwindcss' },
      { label: "MongoDB", icon: 'mongodb' },
      // { label: "Express", icon: 'express' },
      { label: "AWS", icon: 'aws' },
      { label: "Cloudinary", icon: 'cloudinary' },
      { label: "IOT", icon: 'arduino' },
      // { label: "React", icon: 'react' }
    ],
    link: "https://swasthya.parminder.info/",
    github: "https://github.com/360parminder/swasthya"

  },
  {
    title: "Aura",
    description: "Mobile-first responsive design with modern animations",
    image: Aura,
    tech: [{ label: "React", icon: 'react' },
    { label: "Firebase", icon: 'firebase' },
    { label: "Tailwind", icon: 'tailwindcss' },
    // { label: "Express", icon: 'express' },
    { label: "Node.js", icon: 'nodejs' },
    { label: "MongoDB", icon: 'mongodb' },
    { label: "Razorpay", icon: 'razorpay' }],
    link: "https://auravideos.vercel.app",
    github: "https://github.com/360Parminder/Aura-Frontend"
  },
  {
    title: "The Slug ",
    description: "URl Shortener with a twist. Shorten your URLs and share them with the world. The Slug is a URL shortener that allows you to create short links for your long URLs.",
    image: Slug,
    tech: [{ label: "React", icon: 'react' },
    { label: "Node.js", icon: 'nodejs' },
    { label: "Tailwind", icon: 'tailwindcss' },
    { label: "MongoDB", icon: 'mongodb' },
    // { label: "Express", icon: 'express' }
  ],
    link: "https://slug-url.vercel.app",
    github: "https://github.com/360Parminder/TheSlug"
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen w-full py-20 px-8 relative z-50 ">
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        {/* <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/30 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-indigo-600/20 blur-3xl"></div> */}
      </motion.div>

      {/* <motion.h2 
        className="text-3xl md:text-4xl mb-20 relative text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Some Things I've Built
        <span className="absolute top-1/2 left-88 w-64 h-0.5 bg-linear-to-r from-purple-500 to-cyan-400 hidden md:block"></span>
      </motion.h2> */}

      <div className="max-w-6xl flex flex-col items-center font-family">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            project={project}
            index={index}
          />
        ))}
      </div>

      {/* <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-purple-900/10 to-transparent"></div> */}
    </section>
  );
};

export default Projects;
