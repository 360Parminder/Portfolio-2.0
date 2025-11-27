import { useState } from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin, Globe, ExternalLink, Code, BookOpen, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Rajdoot from '../assets/images/Rajdoot.png';
import Swasthya from '../assets/images/Swasthya.png';
import Kosh from '../assets/images/Kosh.png';

const MobileScreen = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const projects = [
    {
      title: "Kosh",
      description: "SaaS for subscription tracking and finance management.",
      image: Kosh,
      link: "https://kosh.uno",
      tags: ["React", "Node.js", "AWS"]
    },
    {
      title: "Rajdoot",
      description: "Sophisticated Messaging APIs for Developers.",
      image: Rajdoot,
      link: "https://rajdoot.wtf",
      tags: ["API", "Node.js", "Socket.io"]
    },
    {
      title: "Swasthya",
      description: "Health monitoring and medication tracking platform.",
      image: Swasthya,
      link: "https://swasthya.parminder.info/",
      tags: ["React Native", "IoT", "MongoDB"]
    }
  ];

  const blogs = [
    {
      title: "The Future of Web Development",
      date: "Nov 24, 2025",
      readTime: "5 min read",
      link: "#"
    },
    {
      title: "Mastering React Hooks",
      date: "Nov 20, 2025",
      readTime: "8 min read",
      link: "#"
    },
    {
      title: "UI/UX Design Principles",
      date: "Nov 15, 2025",
      readTime: "6 min read",
      link: "#"
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'projects':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            {projects.map((project, index) => (
              <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="block group">
                <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all duration-300">
                  <div className="h-32 overflow-hidden relative">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="text-white" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-white mb-1">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/10 text-amber-300 border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </motion.div>
        );
      case 'blogs':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            {blogs.map((blog, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber-500/50 transition-all duration-300">
                <h3 className="font-bold text-white mb-2">{blog.title}</h3>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{blog.date}</span>
                  <span>{blog.readTime}</span>
                </div>
              </div>
            ))}
          </motion.div>
        );
      default: // profile
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300 bg-white/5 p-3 rounded-lg border border-white/5">
                <Mail size={18} className="text-amber-400" />
                <span className="text-sm">360.parminder@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 bg-white/5 p-3 rounded-lg border border-white/5">
                <MapPin size={18} className="text-amber-400" />
                <span className="text-sm">Alwar, Rajasthan, IN</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 bg-white/5 p-3 rounded-lg border border-white/5">
                <Globe size={18} className="text-amber-400" />
                <span className="text-sm">www.parminder.info</span>
              </div>
            </div>

            <div className="flex justify-between gap-4">
              {[
                { icon: Github, href: "https://github.com/360parminder" },
                { icon: Linkedin, href: "https://linkedin.com/in/360parminder" },
                { icon: Twitter, href: "https://twitter.com/360parminder" },
                { icon: Mail, href: "mailto:360.parminder@gmail.com" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  className="flex-1 h-12 bg-white/5 hover:bg-amber-500/20 border border-white/10 hover:border-amber-500/50 rounded-xl flex items-center justify-center transition-all duration-300 text-gray-300 hover:text-white"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            <div className="pt-2">
              <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['React','React Native', 'JavaScript', 'Node.js', 'Python', 'AWS', 'MongoDB', 'Tailwind'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-xs text-amber-300 border border-amber-500/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white font-sans overflow-y-auto">
      <div className="max-w-md mx-auto min-h-screen bg-gradient-to-b from-amber-900/20 to-black p-6 pb-20">
        
        {/* Header Profile */}
        <div className="flex flex-col items-center mb-8 pt-8">
          <div className="relative mb-6 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-28 h-28 rounded-full p-1 bg-black">
              <img 
                className="w-full h-full rounded-full object-cover border-2 border-white/10" 
                src="https://res.cloudinary.com/dvo4tvvgb/image/upload/c_fill,ar_1:1/v1755224721/Profile/WhatsApp_Image_2025-03-28_at_7.33.20_PM_touowz.jpg" 
                alt="Profile" 
              />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Parminder Singh</h1>
          <p className="text-amber-400 font-medium text-lg">Full Stack Developer</p>
          <p className="text-gray-500 text-sm mt-2 max-w-xs text-center">Building digital experiences that merge art with technology.</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex p-1 bg-white/5 rounded-xl mb-8 border border-white/10">
          {[
            { id: 'profile', label: 'Profile', icon: User },
            { id: 'projects', label: 'Projects', icon: Code },
            { id: 'blogs', label: 'Blogs', icon: BookOpen }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeTab === tab.id 
                  ? 'bg-amber-600 text-white shadow-lg shadow-amber-900/20' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>

        {/* Footer Message */}
        <div className="mt-12 text-center border-t border-white/5 pt-6">
          <p className="text-gray-500 text-sm">
            Visit on desktop for the full 3D experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileScreen;
