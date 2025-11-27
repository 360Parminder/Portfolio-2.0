import React from 'react';
import { motion } from 'framer-motion';
import { IonIcon } from '@ionic/react';
import { logoGithub, logoLinkedin, logoInstagram, logoX, logoCodepen, logoMedium } from 'ionicons/icons';

const Footer = () => {
  const socialLinks = [
    { icon: logoLinkedin, url: 'https://www.linkedin.com/in/parminder-singh-storm/' },
    { icon: logoInstagram, url: 'https://www.instagram.com/360_parminder/' },
    { icon: logoGithub, url: 'https://github.com/360Parminder' },
    { icon: logoX, url: 'https://x.com/360parminder' },
    { icon: logoMedium, url: 'https://medium.com/@360parminder' }
  ];

  return (
    <footer className="bg-neutral-200 py-12 pb-24 mb-24">
      <div className="container mx-auto px-4 mb-24">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex space-x-6 mb-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-white/70 hover:text-white transition-colors"
              >
                <IonIcon icon={social.icon} className="text-2xl" />
              </motion.a>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-white/70 mb-2">© 2024 Parminder Singh. All rights reserved.</p>
            <p className="text-white/50">Made with ❤️ in India</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;