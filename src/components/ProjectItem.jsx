import { motion } from 'framer-motion';
import { FaGithub, FaLink } from 'react-icons/fa';

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
        className={`relative flex flex-col w-[24rem] p-2 dark:bg-neutral-900 bg-neutral-200 dark:text-white text-black rounded-lg shadow-lg hover:shadow-xl transition duration-300 ${isEven ? 'md:mr-auto' : 'md:ml-auto'
          }`}
      >
        {/* Link Button */}
        <a
          className="absolute top-5 right-5 bg-neutral-200/60 dark:bg-neutral-900/60 p-3 rounded-full shadow-md hover:scale-110 transition"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLink className="text-black dark:text-white" size={20} />
        </a>

        {/* Project Image */}
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="w-full h-auto rounded-md"
          src={project.image}
          alt={project.title}
        />

        {/* Card Content */}
        <div className="flex flex-row gap-2 p-4 bg-neutral-200 dark:bg-neutral-900 rounded-lg shadow-lg">
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-[12px] opacity-80">{project.description}</p>

            {/* Tech on mobile (inside card) */}
            <div className="flex flex-wrap gap-2 mt-2 md:hidden">
              {project.tech.map((value, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1 px-2 py-1 bg-neutral-300 dark:bg-neutral-800 rounded-md"
                >
                  <img
                    src={`/icons/${value.icon}.svg`}
                    alt={value.label}
                    className="size-5"
                  />
                  {/* <span className="text-xs">{value.label}</span> */}
                </div>
              ))}
            </div>
          </div>

          {/* Contribute Section */}
          <div className="flex flex-col items-center justify-center shrink-0">
            <p className="text-xs mb-1 opacity-70">Contribute</p>
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

      {/* Tech on desktop (opposite side of the card) */}
      <div
        className={`hidden md:flex absolute top-1/2 -translate-y-1/2 
          ${isEven ? 'left-[70%]' : 'right-[70%]'} 
          max-w-[25rem] flex-wrap gap-2 bg-neutral-200 dark:bg-neutral-900 p-4 rounded-lg shadow-lg`}
      >
        {project.tech.map((value, idx) => (
          <ul
            key={idx}
            className="flex items-center gap-2 p-2 bg-neutral-300 dark:bg-neutral-800 rounded-md"
          >
            <img
              src={`/icons/${value.icon}.svg`}
              alt={value.label}
              className="size-6"
            />
            <span className="hidden lg:inline text-sm">{value.label}</span>
          </ul>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectItem;
