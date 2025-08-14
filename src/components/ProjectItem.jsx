import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';

const ProjectItem = ({ project, index }) => {
  return (
    <motion.div
      className={`relative mb-20 group ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className={`absolute top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl ${index % 2 === 0 ? '-left-32' : '-right-32'}`}></div>
      </div>

      <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
        {/* Image with 3D Tilt Effect */}
        <motion.div 
          className="md:w-1/2 relative"
          whileHover="hover"
          initial="rest"
          animate="rest"
          variants={{
            rest: { rotateY: 0, rotateX: 0 },
            hover: { rotateY: 5, rotateX: -5 }
          }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <div className="absolute inset-0 bg-linear-to-br from-purple-600/20 to-pink-600/20 rounded-2xl shadow-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-lg">
            <img
              src={`${project.image}`}
              alt={project.title}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <motion.a
                href={project.link}
                target="_blank"
                // rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
              >
                View Project <FaArrowRight className="text-xs" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Content - Glass Morphism Card */}
        <motion.div 
          className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}
          variants={{
            rest: { y: 0 },
            hover: { y: -10 }
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="p-8 backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 shadow-lg hover:shadow-purple-500/20 transition-all duration-500">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-4 rounded-full bg-purple-500"></span>
              <span className="text-sm font-mono text-purple-400">0{index + 1}</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
                {project.title}
              </a>
            </h3>

            <p className="text-gray-300 mb-6 leading-relaxed">
              {project.description.split(' ').map((word, i) => 
                word.startsWith('<span>') ? (
                  <span key={i} className="text-purple-300 font-medium">{word.replace('<span>', '').replace('</span>', '')} </span>
                ) : (
                  <span key={i}>{word} </span>
                )
              )}
            </p>

            {/* Tech Stack - Animated Chips */}
            <div className="flex flex-wrap gap-3 mb-8">
              {project.tech.map((tech, i) => (
                <motion.span
                  key={i}
                  className="text-xs font-mono px-3 py-1 rounded-full bg-purple-900/30 text-purple-300 border border-purple-800/50"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Links with Micro-interactions */}
            <div className="flex gap-4">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-300 transition-colors"
                whileHover={{ x: 3 }}
              >
                <FaGithub /> Source Code
              </motion.a>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-300 transition-colors"
                whileHover={{ x: 3 }}
              >
                <FaExternalLinkAlt /> Live Demo
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;