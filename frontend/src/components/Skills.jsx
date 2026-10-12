import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaLaravel, FaDatabase, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiFlutter } from 'react-icons/si';

// Each skill is a little sticky note with its own colour and tilt
const skillsData = [
  { name: 'HTML5', category: 'Frontend', icon: <FaHtml5 />, className: 'bg-peach -rotate-3' },
  { name: 'CSS3', category: 'Frontend', icon: <FaCss3Alt />, className: 'bg-sky rotate-2' },
  { name: 'JavaScript', category: 'Frontend', icon: <FaJs />, className: 'bg-yellow -rotate-1' },
  { name: 'React.js', category: 'Frontend', icon: <FaReact />, className: 'bg-mint rotate-3' },
  { name: 'Tailwind', category: 'Frontend', icon: <SiTailwindcss />, className: 'bg-sky -rotate-2' },
  { name: 'Laravel', category: 'Backend', icon: <FaLaravel />, className: 'bg-pink/40 rotate-1' },
  { name: 'MySQL', category: 'Database', icon: <FaDatabase />, className: 'bg-lilac -rotate-3' },
  { name: 'Flutter', category: 'Mobile', icon: <SiFlutter />, className: 'bg-mint rotate-2' },
  { name: 'GitHub', category: 'Tools', icon: <FaGithub />, className: 'bg-white -rotate-1' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1 },
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container">
        <div className="text-center mb-14">
          <span className="font-hand text-xl text-ink-soft block -rotate-2">things i use</span>
          <h2 className="pixel-title m-0">Toolbox</h2>
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 max-w-[1000px] mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {skillsData.map((skill) => (
            <motion.div key={skill.name} variants={item}>
              <motion.div
                className={`relative p-5 pt-7 shadow-md text-center ${skill.className}`}
                whileHover={{ rotate: 0, y: -6, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              >
                <span className="tape -top-2.5 left-1/2 -translate-x-1/2 w-12 h-4" />
                <div className="text-4xl flex justify-center mb-3">{skill.icon}</div>
                <h3 className="font-display text-3xl leading-none m-0">{skill.name}</h3>
                <span className="mono-label text-ink-soft">{skill.category}</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
