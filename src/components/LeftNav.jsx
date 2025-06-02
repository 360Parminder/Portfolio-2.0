import React from 'react';
import { IonIcon } from '@ionic/react';
import { logoCodepen, logoGithub, logoInstagram, logoLinkedin, logoMedium, logoX } from 'ionicons/icons';
import './Nav.css';
import { motion } from 'framer-motion';

const LeftNav = () => {
  const socialLinks = [
    { icon: logoLinkedin, url: 'https://www.linkedin.com/in/360parminder/', delay: 0.5 },
    { icon: logoInstagram, url: 'https://www.instagram.com/360_parminder/', delay: 1 },
    { icon: logoGithub, url: 'https://github.com/360Parminder', delay: 1.5 },
    { icon: logoX, url: 'https://x.com/360parminder', delay: 2 },
    { icon: logoMedium, url: 'https://medium.com/@360Parminder', delay: 2.5 }
  ];

  return (
    <div className="fixed after:w-[0.1rem] after:h-32 after:bg-white/30 left-0 bottom-0 flex flex-col justify-center items-center ml-5 z-50">
      <motion.ul className="flex flex-col justify-center items-center mb-5 space-y-6">
        {socialLinks.map((social, index) => (
          <motion.li
            key={index}
            initial={{ x: -50, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                delay: social.delay,
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }
            }}
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="text-white text-center text-2xl font-bold"
          >
            <a
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer hover:text-[#646cff] transition-colors duration-300"
            >
              <IonIcon className="logo" icon={social.icon} />
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default LeftNav;