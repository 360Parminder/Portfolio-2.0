import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaPython, 
  FaGithub, 
  FaNodeJs, 
  FaReact,
  FaDatabase,
  FaServer,
  FaCloud,
  FaAws,
  FaMicrosoft
} from 'react-icons/fa';
import { IoPerson, IoLogoFirebase } from 'react-icons/io5';
import { DiPostgresql, DiMongodb } from 'react-icons/di';
import { BsGoogle } from 'react-icons/bs';

const About = () => {
  return (
    <section id="about" className="relative min-h-screen w-full flex items-center justify-center   text-gray-100">
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
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center mr-4">
                <IoPerson className="text-2xl text-white" />
              </div>
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                About Me
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                I'm a passionate <span className="text-cyan-400 font-medium">Web Development Engineer</span> currently working as a <span className="text-red-400 font-medium">Freelancer</span>. I specialize in building modern, responsive web applications with cutting-edge technologies.
              </p>
              
              <p className="text-lg leading-relaxed">
                Alongside my professional work, I'm pursuing a <span className="text-blue-400 font-medium">Bachelor of Technology</span> in Computer Science Engineering at <span className="text-cyan-400">Bikaner Technical University</span>, where I'm constantly expanding my knowledge and skills.
              </p>
              
              <p className="text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers.
              </p>
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
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                My Technical Skills
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {/* Frontend */}
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-md bg-blue-500/20 flex items-center justify-center mr-3">
                      <FaReact className="text-blue-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-blue-400">Frontend</h4>
                  </div>
                  <ul className="space-y-3 pl-3">
                    <li className="flex items-center"><FaJs className="mr-2 text-yellow-400" /> JavaScript (ES6+)</li>
                    <li className="flex items-center"><FaJs className="mr-2 text-blue-600" /> TypeScript</li>
                    <li className="flex items-center"><FaReact className="mr-2 text-cyan-400" /> React.js</li>
                    <li className="flex items-center"><FaReact className="mr-2 text-blue-400" /> React Native</li>
                    <li className="flex items-center"><FaCss3Alt className="mr-2 text-teal-400" /> Tailwind CSS</li>
                  </ul>
                </div>
                
                {/* Backend */}
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-md bg-green-500/20 flex items-center justify-center mr-3">
                      <FaServer className="text-green-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-green-400">Backend</h4>
                  </div>
                  <ul className="space-y-3 pl-3">
                    <li className="flex items-center"><FaNodeJs className="mr-2 text-green-500" /> Node.js</li>
                    <li className="flex items-center"><FaServer className="mr-2 text-gray-300" /> Express.js</li>
                  </ul>
                  
                  <div className="flex items-center pt-4">
                    <div className="w-8 h-8 rounded-md bg-purple-500/20 flex items-center justify-center mr-3">
                      <FaDatabase className="text-purple-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-purple-400">Database</h4>
                  </div>
                  <ul className="space-y-3 pl-3">
                    <li className="flex items-center"><DiPostgresql className="mr-2 text-blue-500" /> PostgreSQL</li>
                    <li className="flex items-center"><DiMongodb className="mr-2 text-green-500" /> MongoDB</li>
                    <li className="flex items-center"><IoLogoFirebase className="mr-2 text-amber-500" /> Firebase</li>
                  </ul>
                </div>
                
                {/* Cloud & Tools */}
                <div className="space-y-4 col-span-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-md bg-orange-500/20 flex items-center justify-center mr-3">
                      <FaCloud className="text-orange-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-orange-400">Cloud & Tools</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pl-3">
                    <ul className="space-y-3">
                      <li className="flex items-center"><FaAws className="mr-2 text-orange-400" /> AWS</li>
                      <li className="flex items-center"><FaMicrosoft className="mr-2 text-blue-400" /> Azure</li>
                      <li className="flex items-center"><BsGoogle className="mr-2 text-red-400" /> Google Gemini</li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-center"><FaPython className="mr-2 text-teal-400" /> Arduino</li>
                      <li className="flex items-center"><FaGithub className="mr-2 text-gray-300" /> Git & GitHub</li>
                      {/* <li className="flex items-center"><FaHtml5 className="mr-2 text-orange-500" /> HTML5</li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;