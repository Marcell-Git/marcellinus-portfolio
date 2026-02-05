import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';

const Contact = () => {
  return (
    <>
      <section id="contact" className="section-padding bg-primary-bg text-center">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          
          <motion.div 
             className="max-w-[600px] mx-auto"
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
          >
              <p className="text-xl text-text-secondary mb-12 leading-relaxed">
                  I'm currently open for new opportunities and collaborations. 
                  Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              <div className="flex justify-center gap-8 flex-wrap">
                  <a href="mailto:rendimardiyanto72@gmail.com" className="flex flex-col items-center gap-2 p-8 bg-secondary-bg rounded-xl min-w-[150px] transition-all duration-300 border border-transparent hover:-translate-y-1 hover:bg-white hover:border-accent hover:shadow-lg group">
                      <FiMail className="text-3xl text-text-main transition-colors duration-300 group-hover:text-accent" />
                      <span className="font-semibold text-text-main">Email</span>
                  </a>
                  <a href="https://www.linkedin.com/in/marcellinus-renditta-4900a6312" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-8 bg-secondary-bg rounded-xl min-w-[150px] transition-all duration-300 border border-transparent hover:-translate-y-1 hover:bg-white hover:border-accent hover:shadow-lg group">
                      <FiLinkedin className="text-3xl text-text-main transition-colors duration-300 group-hover:text-accent" />
                      <span className="font-semibold text-text-main">LinkedIn</span>
                  </a>
                  <a href="https://github.com/Marcell-Git" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-8 bg-secondary-bg rounded-xl min-w-[150px] transition-all duration-300 border border-transparent hover:-translate-y-1 hover:bg-white hover:border-accent hover:shadow-lg group">
                      <FiGithub className="text-3xl text-text-main transition-colors duration-300 group-hover:text-accent" />
                      <span className="font-semibold text-text-main">GitHub</span>
                  </a>
              </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-text-main text-white py-8 text-center">
          <div className="container">
              <p className="m-0 text-sm opacity-80">&copy; {new Date().getFullYear()} Marcellinus Renditta Mardyanto. All rights reserved.</p>
              <p className="m-0 text-xs mt-2 opacity-60">Designed & Built with React.js</p>
          </div>
      </footer>
    </>
  );
};

export default Contact;
