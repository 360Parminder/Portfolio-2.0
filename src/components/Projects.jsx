import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Project 1",
    description: "A modern web application built with React and Node.js",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    title: "Project 2",
    description: "Mobile-first responsive design with modern animations",
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg",
    tech: ["React Native", "Firebase"],
    link: "#"
  },
  {
    title: "Project 3",
    description: "E-commerce platform with real-time updates",
    image: "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg",
    tech: ["Next.js", "Stripe", "Tailwind"],
    link: "#"
  }
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
              className="group relative overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm"
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 text-sm bg-white/10 rounded-full text-white/80">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;