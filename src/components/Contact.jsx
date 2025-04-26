import React from 'react';
import { motion } from 'framer-motion';
import { IonIcon } from '@ionic/react';
import { mailOutline, callOutline, locationOutline } from 'ionicons/icons';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black/95">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          Get in Touch
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <IonIcon icon={mailOutline} className="text-2xl text-white" />
              </div>
              <div>
                <h3 className="text-white font-medium">Email</h3>
                <a href="mailto:360.parminder@gmail.com" className="text-white/70 hover:text-white transition-colors">
                  360.parminder@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <IonIcon icon={callOutline} className="text-2xl text-white" />
              </div>
              <div>
                <h3 className="text-white font-medium">Phone</h3>
                <a href="tel:+1234567890" className="text-white/70 hover:text-white transition-colors">
                  +91 123 456 7890
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <IonIcon icon={locationOutline} className="text-2xl text-white" />
              </div>
              <div>
                <h3 className="text-white font-medium">Location</h3>
                <p className="text-white/70">Rajasthan, India</p>
              </div>
            </div>
          </motion.div>
          
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 text-white"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 text-white"
              />
            </div>
            <div>
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;