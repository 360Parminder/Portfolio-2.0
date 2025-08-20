import { motion } from 'framer-motion';
import { useMemo } from 'react';

const About = () => {
  // Define all technology icons in one array
  const techIcons = [
    { src: "/icons/motion.svg", alt: "Motion" },
    { src: "/icons/typescript.svg", alt: "TypeScript" },
    { src: "/icons/cpp.svg", alt: "C++" },
    { src: "/icons/redux.svg", alt: "Redux" },
    { src: "/icons/arduino.svg", alt: "Arduino" },
    { src: "/icons/react-router-dark.svg", alt: "React Router" },
    { src: "/icons/js.svg", alt: "JavaScript" },
    { src: "/icons/python.svg", alt: "Python" },
    { src: "/icons/react-navigation.svg", alt: "React Navigation" },
    { src: "/icons/firebase.svg", alt: "Firebase" },
    { src: "/icons/azure.svg", alt: "Azure" },
    { src: "/icons/postgresSQL.svg", alt: "PostgreSQL" },
    { src: "/icons/react.svg", alt: "React.js" },
    { src: "/icons/nodejs.svg", alt: "Node.js" },
    { src: "/icons/tailwindcss.svg", alt: "Tailwind CSS" },
    { src: "/icons/shadcn-ui-dark.svg", alt: "ShadCN UI" },
    { src: "/icons/git.svg", alt: "Git & GitHub" },
    { src: "/icons/mongodb.svg", alt: "MongoDB" },
    { src: "/icons/aws.svg", alt: "AWS" },
    { src: "/icons/npm.svg", alt: "NPM" },
    { src: "/icons/figma.svg", alt: "Figma" },
    { src: "/icons/docker.svg", alt: "Docker" },
  ];

  // Generate three randomly shuffled arrays using useMemo to prevent re-shuffling on every render
  const randomizedLists = useMemo(() => {
    const shuffle = (array) => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
      }
      return newArray;
    };
    
    return [
      shuffle([...techIcons]),
      shuffle([...techIcons]),
      shuffle([...techIcons])
    ];
  }, []);

  return (
    <section id="about" className="relative min-h-screen w-full flex  flex-col items-center justify-between pt-14 pb-20 font-family">
      <div className="flex flex-row space-x-40 justify-between">
        <p className='w-[40%] text-xl font-family'>
          Hello, World! I am Parminder Singh — a Web and APP Engineer passionate about creating high-performance, user-centric software solutions with intuitive and engaging designs.
        </p>
        <p className='w-[40%] text-xl font-family'>
          I specialize in building responsive and accessible web applications using the latest technologies and best practices.
        </p>
      </div>
      <div className="w-full mx-auto">
        <div className='w-full px-3 mask-r-from-70% mask-l-from-70% space-y-4'>
          {randomizedLists.map((list, index) => (
            <ul key={index} className="flex  md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-marquee  space-y-5 ">
              {list.map((icon, iconIndex) => (
                <li key={iconIndex} className="flex justify-center items-center ">
                  <img src={icon.src} alt={icon.alt} className="mr-2 size-12" />
                  {/* <p>{icon.alt}</p> */}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
