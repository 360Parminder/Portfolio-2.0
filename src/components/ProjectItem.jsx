import { motion } from 'framer-motion';
import { FaGithub, FaLink } from 'react-icons/fa';

const ProjectItem = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`relative mb-20 group w-full ${isEven ? 'md:pl-16' : 'md:pr-16'}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Card */}
      <div className={`relative flex flex-col w-[24rem] p-2 dark:bg-neutral-900 bg-neutral-200 dark:text-white text-black rounded-lg shadow-lg ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>
        <a className='absolute top-5 right-5 dark:bg-neutral-900/40 bg-neutral-200/50 p-3 rounded-full' href={project.link} target="_blank" rel="noopener noreferrer">
          <FaLink className="dark:text-white text-black" size={20} />
        </a>
        <img className='w-full h-auto' src={project.image} alt={project.title} />
        <div className='flex flex-row gap-2 p-4 bg-neutral-200 dark:bg-neutral-900 rounded-lg shadow-lg'>
          <div className='flex flex-col'>
            <h3 className='text-xl'>{project.title}</h3>
            <p className='text-[12px]'>{project.description}</p>

            {/* Tech on mobile (inside card) */}
            <div className='flex flex-wrap gap-2 mt-2 md:hidden'>
              {project.tech.map((value, idx) => (
                <div key={idx} className='grid grid-cols-3'>
                  <img  src={`/icons/${value.icon}.svg`} alt={value.label} className="inline-block mr-1 size-4" />
                  {/* <span>{value.label}</span> This will render "React" */}
                </div>
              ))}
            </div>
          </div>

          <div className='flex flex-col items-center justify-center shrink-0'>
            <p>Contribute</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
              <FaGithub className="inline-block ml-1" size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Tech on desktop (opposite side of the card) */}
      <div
        className={`hidden md:flex absolute top-1/2 -translate-y-1/2 ${isEven ? 'left-[50rem] ml-6' : 'right-[50rem] mr-6'} max-w-[25rem] flex-wrap gap-2 ${isEven ? 'justify-start' : 'justify-end'}`}
      >
        {project.tech.map((value, idx) => (
          <ul key={idx} className='grid grid-cols-3     '>
            <li className={value.icon== 'razorpay'?'w-10 h-auto':'size-10'}>
              <img src={`/icons/${value.icon}.svg`} alt={value.label} className='w-full h-auto'  />
            </li>
            {/* <span>{value.label}</span> This will render "React" */}
          </ul>
        ))}

      </div>
    </motion.div>
  );
};

export default ProjectItem;
