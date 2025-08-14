import React from 'react';
import { motion } from 'framer-motion';
import { IonIcon } from '@ionic/react';
import { logoReact, logoJavascript, logoNodejs, codeSlashOutline } from 'ionicons/icons';

const technologies = [
  {
    name: 'React',
    level: '90%',
    description: 'Building modern web applications with React ecosystem',
    color: 'from-blue-500 to-cyan-400',
    icon: logoReact
  },
  {
    name: 'JavaScript',
    level: '85%',
    description: 'ES6+ features, async programming, and DOM manipulation',
    color: 'from-yellow-400 to-orange-500',
    icon: logoJavascript
  },
  {
    name: 'TypeScript',
    level: '80%',
    description: 'Type-safe development with advanced TypeScript features',
    color: 'from-blue-600 to-indigo-500',
    icon: codeSlashOutline
  },
  {
    name: 'Node.js',
    level: '75%',
    description: 'Server-side JavaScript and API development',
    color: 'from-green-500 to-emerald-400',
    icon: logoNodejs
  },
  {
    name: 'Tailwind CSS',
    level: '90%',
    description: 'Rapid UI development with utility-first CSS',
    color: 'from-cyan-500 to-blue-500',
    icon: codeSlashOutline
  },
  {
    name: 'Next.js',
    level: '85%',
    description: 'Full-stack React applications with SSR and SSG',
    color: 'from-gray-700 to-gray-900',
    icon: codeSlashOutline
  }
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20 bg-black/95">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Tech Stack</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A curated selection of modern technologies I use to build powerful and scalable applications
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-linear-to-r ${tech.color} bg-opacity-20`}>
                  <IonIcon
                    icon={tech.icon}
                    className="text-3xl text-white"
                    style={{ transform: tech.name === 'React' ? 'rotate(0deg)' : 'none' }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white">{tech.name}</h3>
                  <span className="text-lg font-semibold text-white/90">{tech.level}</span>
                </div>
              </div>
              <p className="text-white/70 mb-6">{tech.description}</p>
              <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: tech.level }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                  className={`absolute top-0 left-0 h-full rounded-full bg-linear-to-r ${tech.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;