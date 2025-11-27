import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaLink } from 'react-icons/fa';

const ProjectItem = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`relative mb-20 group w-full`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 200, damping: 15 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Card */}
      <div
        className={`relative flex flex-row w-full p-2 dark:bg-neutral-900 bg-neutral-200 dark:text-white text-black rounded-lg shadow-lg hover:shadow-xl transition duration-300 ${isEven ? 'md:mr-auto' : 'md:ml-auto'
          }`}
      >
        {/* Link Button */}
        <a
          className="absolute top-3 z-10 right-5 bg-neutral-200/60 dark:bg-neutral-800 p-2 rounded-full shadow-md hover:scale-110 transition"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaArrowRight className="text-black dark:text-white" size={20} />
        </a>

        {/* Project Image */}
        <motion.img
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="w-[24rem] h-auto rounded-md object-cover"
          src={project.image}
          alt={project.title}
        />

        {/* Card Content */}
        <div className="flex flex-col justify-between flex-1 p-4 bg-neutral-200 dark:bg-neutral-900 rounded-lg shadow-lg ml-2">
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-[16px] opacity-80 mb-4">{project.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((value, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1 px-2 py-1 bg-neutral-300 dark:bg-neutral-800 rounded-md border-dashed border border-neutral-400 dark:border-neutral-600 text-sm shadow-inner shadow-neutral-400 dark:shadow-neutral-700/80"
                >
                  <img
                    src={`/icons/${value.icon}.svg`}
                    alt={value.label}
                    className="size-5"
                  />
                  <span className="text-xs hidden sm:inline">{value.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contribute Section (Bottom) */}
          <div className="flex items-center gap-2 mt-auto pt-2 border-t border-neutral-300 dark:border-neutral-700">
            <p className="text-xs opacity-70">Contribute:</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
              className="p-2 rounded-md bg-neutral-300 dark:bg-neutral-800 hover:bg-neutral-400 dark:hover:bg-neutral-700 transition"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
