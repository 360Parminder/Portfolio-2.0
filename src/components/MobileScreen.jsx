import React from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin, Phone, Globe } from 'lucide-react';

const MobileScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br dark:from-neutral-900 dark:to-neutral-800 dark:text-white from-neutral-200 to-neutral-100 font-sans flex items-center justify-center">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-lg shadow-2xl border border-white/20 p-8">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-2xl font-bold">
            <img className="rounded-full" src="https://res.cloudinary.com/dvo4tvvgb/image/upload/c_fill,ar_1:1/v1755224721/Profile/WhatsApp_Image_2025-03-28_at_7.33.20_PM_touowz.jpg" alt="" />
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Parminder Singh</h1>
          <p className="dark:text-purple-300 text-purple-700 text-lg">Full Stack Developer</p>
          <p className="dark:text-gray-300 text-gray-700 text-sm mt-2">Building amazing web experiences</p>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 mb-8">
          <div className="flex items-center space-x-3 dark:text-gray-300 text-gray-700">
            <Mail size={16} className="text-purple-400" />
            <span className="text-sm">360.parminder@gmail.com</span>
          </div>
          {/* <div className="flex items-center space-x-3 text-gray-300">
            <Phone size={16} className="text-purple-400" />
            <span className="text-sm">+1 (555) 123-4567</span>
          </div> */}
          <div className="flex items-center space-x-3 dark:text-gray-300 text-gray-700">
            <MapPin size={16} className="text-purple-400" />
            <span className="text-sm">Alwar, Rajasthan, IN</span>
          </div>
          <div className="flex items-center space-x-3 dark:text-gray-300 text-gray-700">
            <Globe size={16} className="text-purple-400" />
            <span className="text-sm">www.parminder.info</span>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mb-8">
          <a 
            href="https://github.com/360parminder" 
            className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://linkedin.com/in/360parminder" 
            className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://twitter.com/360parminder" 
            className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <Twitter size={20} />
          </a>
          <a 
            href="mailto:360.parminder@gmail.com" 
            className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a href='mailto:360.parminder@gmail.com' className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
            Get In Touch
          </a>
        </div>

        {/* Skills/Tags */}
        <div className="mt-8 flex flex-wrap gap-2 justify-center">
          {['React','React Native', 'JavaScript', 'Node.js', 'Python', 'AWS'].map((skill) => (
            <span 
              key={skill}
              className="px-3 py-1 dark:bg-white/10 bg-black/50 rounded-full text-xs dark:text-purple-300 text-white border dark:border-white/20 border-black/30"
            >
              {skill}
            </span>
          ))}
        </div>

        <p className='dark:text-gray-300 text-gray-700 text-center mt-5 text-xl'>For full view experience, please open in desktop.</p>
      </div>
    </div>
  );
};

export default MobileScreen;
