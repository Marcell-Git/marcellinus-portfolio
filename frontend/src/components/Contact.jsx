import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import profileImg from '../assets/Profile.jpeg';
import aboutImg from '../assets/About.jpeg';
import Frame from './Frame';

const links = [
  { label: 'Email', href: 'mailto:rendimardiyanto72@gmail.com', icon: <FiMail /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/marcellinus-renditta-4900a6312', icon: <FiLinkedin /> },
  { label: 'GitHub', href: 'https://github.com/Marcell-Git', icon: <FiGithub /> },
];

const Contact = () => {
  return (
    <>
      <section id="contact" className="section-padding relative overflow-hidden">
        <div className="container text-center">
          <motion.div
            className="text-7xl sm:text-8xl mb-2 inline-block"
            initial={{ scale: 0, rotate: -30 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 12 }}
            aria-hidden="true"
          >
            😊
          </motion.div>
          <h2 className="pixel-title m-0">Let's Talk</h2>
          <p className="font-hand text-xl text-ink-soft mt-3 mb-14">
            got a project, a role, or just want to say hi? i read every message.
          </p>

          <div className="relative max-w-[900px] mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-6">
            <motion.figure
              className="polaroid m-0 w-[180px] -rotate-6 hidden md:block"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="tape -top-3 left-1/2 -translate-x-1/2 -rotate-3" />
              <img src={aboutImg} alt="" className="w-full aspect-square object-cover" />
              <figcaption className="font-hand text-sm text-ink-soft mt-2">see you soon</figcaption>
            </motion.figure>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Frame className="p-3">
                <div className="bg-yellow p-6 sm:p-8 text-left max-w-[400px] shadow-md">
                  <span className="mono-label font-bold block mb-3">● Say hello</span>
                  <p className="font-mono text-sm leading-relaxed m-0 mb-6">
                    I'm currently open for new opportunities and collaborations. Whether you have
                    a question or just want to say hi, feel free to reach out!
                  </p>
                  <a href="mailto:rendimardiyanto72@gmail.com" className="btn-ink" style={{ boxShadow: '3px 3px 0 var(--ink-soft)' }}>
                    <FiMail /> Write me an email
                  </a>
                </div>
              </Frame>
            </motion.div>

            <motion.figure
              className="polaroid m-0 w-[180px] rotate-6 hidden md:block"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="tape -top-3 -right-3 rotate-45" />
              <img src={profileImg} alt="" className="w-full aspect-square object-cover" />
              <figcaption className="font-hand text-sm text-ink-soft mt-2">— marcell</figcaption>
            </motion.figure>
          </div>

          <p className="font-hand text-lg text-ink-soft mt-12 mb-4">↳ open to new roles and good problems</p>
          <div className="inline-flex border border-ink bg-white divide-x divide-ink">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 px-5 sm:px-7 py-3 hover:bg-yellow transition-colors"
              >
                <span className="text-xl">{link.icon}</span>
                <span className="mono-label">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-ink/15 py-6">
        <div className="container flex flex-col sm:flex-row justify-between items-center gap-2 mono-label text-ink-soft">
          <span>&copy; {new Date().getFullYear()} Marcellinus Renditta Mardyanto</span>
          <span>Designed &amp; built with React.js</span>
        </div>
      </footer>
    </>
  );
};

export default Contact;
