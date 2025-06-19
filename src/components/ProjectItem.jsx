// src/components/ProjectItem.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectItem = ({ project, index }) => {
  return (
    <motion.div 
      className={`flex flex-col ${project.align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="md:w-1/2">
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto rounded-lg shadow-lg hover:shadow-cyan-400/50 transition-shadow"
          />
        </a>
      </div>
      
      <div className={`md:w-1/2 ${project.align === 'right' ? 'text-right' : 'text-left'}`}>
        <p className="text-cyan-400 text-lg">Featured Project</p>
        <h3 className="text-2xl md:text-3xl font-bold my-2 hover:text-cyan-400 transition-colors">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">{project.title}</a>
        </h3>
        
        <motion.div 
          className="bg-gray-900 p-4 rounded-lg my-4"
          whileHover={{ y: -5 }}
        >
          <p className="text-gray-300">
            {project.description.split(' ').map((word, i) => 
              word.startsWith('<span>') ? (
                <span key={i} className="text-cyan-400">{word.replace('<span>', '').replace('</span>', '')} </span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </p>
        </motion.div>
        
        <ul className={`flex flex-wrap gap-4 my-6 ${project.align === 'right' ? 'justify-end' : 'justify-start'}`}>
          {project.features.map((feature, i) => (
            <li key={i} className="text-gray-400">{feature}</li>
          ))}
        </ul>
        
        <div className={`flex gap-4 ${project.align === 'right' ? 'justify-end' : 'justify-start'}`}>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-xl hover:text-cyan-400 transition-colors">
            <FaGithub />
          </a>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-xl hover:text-cyan-400 transition-colors">
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;