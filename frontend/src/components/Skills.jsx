import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaLaravel, FaDatabase, FaGithub } from 'react-icons/fa';

const Skills = () => {
  const skillsData = [
    { name: 'HTML5', category: 'Frontend', icon: <FaHtml5 /> },
    { name: 'CSS3', category: 'Frontend', icon: <FaCss3Alt /> },
    { name: 'JavaScript', category: 'Frontend', icon: <FaJs /> },
    { name: 'React.js', category: 'Frontend', icon: <FaReact /> },
    { name: 'Laravel', category: 'Backend', icon: <FaLaravel /> },
    { name: 'MySQL', category: 'Database', icon: <FaDatabase /> }, 
    { name: 'GitHub', category: 'Tools', icon: <FaGithub /> },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="section-padding bg-primary-bg">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        <motion.div 
           className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8"
           variants={container}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true, margin: "-50px" }}
        >
            {skillsData.map((skill, index) => (
                <motion.div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-accent hover:-translate-y-2 text-center group" key={index} variants={item}>
                    <div className="text-5xl mb-4 text-text-secondary transition-colors duration-300 group-hover:text-accent flex justify-center">{skill.icon}</div>
                    <h3 className="text-lg font-semibold mb-2 text-text-main">{skill.name}</h3>
                    <span className="text-sm text-gray-500 uppercase tracking-wider">{skill.category}</span>
                </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
