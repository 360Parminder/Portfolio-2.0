import React from 'react';
import { motion } from 'framer-motion';
import rajdoot from '../assets/images/Rajdoot.png';
import aura from '../assets/images/Aura.png';
import slug from '../assets/images/Slug.png';
import swasthya from '../assets/images/Swasthya.png';

const projects = [
  {
    title: "Rajdoot",
    description: "Sophisticated Messaging APIs for Developers. Build powerful messaging applications with our elegant, reliable, and affordable API platform.",
    image: rajdoot,
    tech: ["React", "Node.js", "MongoDB","IOT","Razorpay","Express","AWS","Cloudinary","IOT","Arduino","MQTT","Socket.io"],
    link: "https://rajdoot.parminder.info",
    github: "https://github.com/360parminder/rajdoot"
  },
  {
    title: "Swasthya",
    description: "Swasthya is a platform that allows you to monitor your health and get alerts when your health is not good. It also allow you to track your family and friends medication and health.",
    image: swasthya,
    tech: ["React Native", "Node.js", "Tailwind","MongoDB","Express","AWS","Cloudinary","IOT","React"],
    link: "https://swasthya.parminder.info/",
    github: "https://github.com/360parminder/swasthya"
  },
  {
    title: "Aura",
    description: "Mobile-first responsive design with modern animations",
    image: aura,
    tech: ["React", "Firebase", "Tailwind","Express","Node.js","MongoDB","Razorpay"],
    link: "https://auravideos.vercel.app",
    github: "https://github.com/360Parminder/Aura-Frontend"
  },
  {
    title: "The Slug ",
    description: "URl Shortener with a twist. Shorten your URLs and share them with the world. The Slug is a URL shortener that allows you to create short links for your long URLs.",
    image: slug,
    tech: ["React", "Node.js", "Tailwind","MongoDB","Express"],
    link: "slug-url.vercel.app",
    github: "https://github.com/360Parminder/TheSlug"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm h-60 transition-all duration-500 hover:h-auto"
              whileHover={{ scale: 1.03 }}
            >
              {/* Compact view (always visible) */}
              <div className="relative h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <div className="flex flex-wrap gap-1 mt-2 overflow-hidden max-h-6">
                    {project.tech.slice(0, 3).map(tech => (
                      <span key={tech} className="px-2 py-0.5 text-xs bg-white/10 rounded-full text-white/80">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-0.5 text-xs bg-white/10 rounded-full text-white/80">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Expanded details (visible on hover) */}
              <div className="p-6 bg-black/95 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 absolute inset-0 overflow-auto">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 text-xs bg-white/10 rounded-full text-white/80">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-medium hover:opacity-90 transition-opacity text-sm"
                  >
                    View Project
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-medium hover:opacity-90 transition-opacity text-sm"
                  >
                    Github
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
