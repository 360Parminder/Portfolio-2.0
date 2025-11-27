import { motion } from 'framer-motion';
import Rajdoot from '../assets/images/Rajdoot.png';
import Swasthya from '../assets/images/Swasthya.png';
import Aura from '../assets/images/Aura.png';
import Slug from '../assets/images/Slug.png';
import Kosh from '../assets/images/Kosh.png';
import ProjectItem from '../components/ProjectItem';


const projects = [
   {
    title: "Kosh",
    description: "Kosh is an saas that helps you to track your subscription expenses and manage your finances. It also helps you to generate invoices and manage your clients.",
    image: Kosh,
    tech: [
      { label: "React", icon: 'react' },
      { label: "Tailwind", icon: 'tailwindcss' },
      { label: "Node.js", icon: 'nodejs' },
      { label: "MongoDB", icon: 'mongodb' },
      { label: "Razorpay", icon: 'razorpay' },
      { label: "AWS", icon: 'aws' },
      { label: "Cloudinary", icon: 'cloudinary' },
      { label: "Motion", icon: 'motion' },
      // { label: "MQTT", icon: 'mqtt' },
      // { label: "Socket.io", icon: 'socket.io' }],
    ],
    link: "https://kosh.uno",
    github: "https://github.com/360parminder/kosh"

  },
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
      { label: "Motion", icon: 'motion' },
      { label: "Socket.io", icon: 'socket.io' }],
    link: "https://rajdoot.wtf",
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
      { label: "Motion", icon: 'motion' },
      { label: "MongoDB", icon: 'mongodb' },
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
    { label: "Motion", icon: 'motion' },
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
    { label: "Motion", icon: 'motion' }
  ],
    link: "https://slug-url.vercel.app",
    github: "https://github.com/360Parminder/TheSlug"
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen max-w-7xl py-20 px-8 relative flex flex-col items-center justify-center mx-auto overflow-hidden">
      <div className="mb-16 overflow-hidden bg-white py-4 -mx-4 md:-mx-8">
                      <motion.div
                          className="flex whitespace-nowrap"
                          animate={{ x: ["0%", "-50%"] }}
                          transition={{
                              repeat: Infinity,
                              ease: "linear",
                              duration: 25,
                          }}
                      >
                          {[...Array(2)].map((_, groupIndex) => (
                              <div key={groupIndex} className="flex">
                                  {[...Array(10)].map((_, i) => (
                                      <span
                                          key={i}
                                          className="text-4xl md:text-6xl font-bold text-black px-6 font-science-gothic uppercase"
                                      >
                                          Our Projects
                                      </span>
                                  ))}
                              </div>
                          ))}
                      </motion.div>
                  </div>

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
