import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative min-h-screen w-full flex items-center justify-center">
      <div className="w-full mx-auto">
        <div className="flex flex-col lg:flex-row gap-[20vw] items-center"> {/* Changed gap to 20vw */}
          {/* About Me Text - Reduced width to account for larger gap */}
          <motion.div
            className="lg:w-[35%] absolute" // Reduced from 1/2 to account for larger gap
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="dark:bg-gray-800/50 bg-neutral-200 dark:border-gray-700 border-neutral-200 backdrop-blur-sm rounded-lg p-4 border shadow-xl">
              <div className=" col-span-2 grid grid-cols-1">
                <ul className="space-y-2 grid grid-cols-4">
                  <li className="flex justify-center items-center"><img src="/icons/js.svg" alt="JavaScript" className="mr-2 size-10" /> </li>
                  <li className="flex justify-center items-center"><img src="/icons/python.svg" alt="Python" className="mr-2 size-10" /> </li>
                  <li className="flex justify-center items-center"><img src="/icons/typescript.svg" alt="TypeScript" className="mr-2 size-10" /> </li>
                  <li className="flex justify-center items-center"><img src="/icons/cpp.svg" alt="C++" className="mr-2 size-10" /> </li>
                  <li className="flex justify-center items-center"><img src="/icons/motion.svg" alt="Motion" className="mr-2 size-10" /> </li>
                  <li className="flex justify-center items-center"><img src="/icons/redux.svg" alt="Redux" className="mr-2 size-10" /> </li>
                  <li className="flex justify-center items-center"><img src="/icons/react-router-dark.svg" alt="React Router" className="mr-2 size-10" /> </li>
                  <li className="flex justify-center items-center"><img src="/icons/react-navigation.svg" alt="React Navigation" className="mr-2 size-10" /> </li>
                  <li className="flex justify-center items-center"><img src="/icons/firebase.svg" alt="Firebase" className="mr-2 size-10" /> </li>
                  <li className="flex justify-center items-center"><img src="/icons/aws.svg" alt="AWS" className="mr-2 size-10" /> </li>
                  <li className="flex justify-center items-center"><img src="/icons/azure.svg" alt="Azure" className="mr-2 size-10" /> </li>
                  <li className="flex justify-center items-center"><img src="/icons/arduino.svg" alt="Arduino" className="mr-2 size-10" /> </li>
                  {/* <li className="flex items-center"><BsGoogle className="mr-2 text-red-400" /> Google Gemini</li> */}
                  {/* <li className="flex items-center"><img src="/icons/react.svg" alt="React Native" className="mr-2 size-10" /> </li> */}
                  {/* <li className="flex items-center"><img src="/icons/express.svg" alt="Express.js" className="mr-2" /> Express.js</li> */}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Skills Section - Reduced width to account for larger gap */}
          <motion.div
            className="lg:w-[35%] absolute right-0"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="dark:bg-gray-800/50 bg-neutral-200 dark:border-gray-700 border-neutral-200 backdrop-blur-sm rounded-lg p-4 border shadow-xl">
              <div className="col-span-2 grid grid-cols-1">
                <ul className="space-y-2 grid grid-cols-4">
                  <li className="flex justify-center items-center"><img src="/icons/react.svg" alt="React.js" className="mr-2 size-10" /> </li>
                  <li className="flex justify-center items-center"><img src="/icons/nodejs.svg" alt="Node.js" className="mr-2 size-10" /> </li>
                  <li className="flex justify-center items-center"><img src="/icons/tailwindcss.svg" alt="Tailwind CSS" className="mr-2 size-10" /> </li>
                  <li className="flex justify-center items-center"><img src="/icons/shadcn-ui-dark.svg" alt="ShadCN UI" className="mr-2 size-10" /> </li>
                  <li className="flex justify-center items-center"><img src="/icons/git.svg" alt="Git & GitHub" className="mr-2 size-10" /> </li>
                  <li className="flex justify-center items-center"><img src="/icons/docker.svg" alt="Docker" className="mr-2 size-10" /> </li>
                  <li className="flex justify-center items-center"><img src="/icons/postgresSQL.svg" alt="PostgreSQL" className="mr-2 size-10" /> </li>
                  <li className="flex justify-center items-center"><img src="/icons/mongodb.svg" alt="MongoDB" className="mr-2 size-10" /> </li>
                  <li className="flex justify-center items-center"><img src="/icons/figma.svg" alt="Figma" className="mr-2 size-10" /> </li>
                  <li className="flex justify-center items-center"><img src="/icons/npm.svg" alt="NPM" className="mr-2 size-10" /> </li>

                </ul>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;