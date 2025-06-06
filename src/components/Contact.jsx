import React from 'react';
import { motion } from 'framer-motion';
import { IonIcon } from '@ionic/react';
import { mailOutline, callOutline, locationOutline } from 'ionicons/icons';
import emailjs from 'emailjs-com';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Get form values
    const form = e.target;
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;

    // Validate form fields
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }

    // You need to install emailjs-com: npm install emailjs-com

    // Replace with your actual EmailJS credentials
    const serviceID = 'service_9o89hgj';
    const templateID = 'template_fa0n6x8';
    const userID = 'cnWQny2C-HFTbtRfj';

    // Prepare template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message
    };

    // Send the email
    emailjs.send(serviceID, templateID, templateParams, userID)
      .then(() => {
        // Clear the form
        alert('Message sent successfully!');
        form.reset();
      })
      .catch(error => {
        console.error('Email sending failed:', error);
        alert('Failed to send message. Please try again later.');
      });
    
  };
  const handleInputChange = (e) => {
    // Handle input change logic here if needed
    console.log(e.target.value);
  };
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
                  +91 8779112732
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
            onSubmit={handleSubmit}
            onChange={handleInputChange}
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