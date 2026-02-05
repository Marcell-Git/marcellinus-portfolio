import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import bioskop from '../assets/bioskop.svg';
import reusemart from '../assets/reusemart.svg';
import wbs from '../assets/wbs.svg';

const Projects = () => {
  const featuredProjects = [
    {
      title: 'Online Cinema Ticketing Platform',
      desc: 'A web-based application for searching movies, viewing showtimes, and booking cinema tickets online.',
      tech: ['React.js', 'Laravel', 'MySQL', 'Bootstrap'],
      github: 'https://github.com/Marcell-Git/Bioskop_Frontend',
      demo: '#',
      image: bioskop
    },
    {
      title: 'Website ReUseMart',
      desc: 'A web-based application for buying and selling used goods.',
      tech: ['React.js', 'Laravel', 'MySQL', 'Bootstrap'],
      github: 'https://github.com/Marcell-Git/ReUseMart',
      demo: '#',
      image: reusemart
    },
    {
      title: 'WBS Pemerintahan Kabupaten Klaten',
      desc: 'A web-based application for reporting complaints and suggestions to the government of Klaten Regency.',
      tech: ['React.js','Laravel', 'MySQL', 'Tailwind CSS'],
      github: 'https://github.com/Marcell-Git/Frontend-WBS',
      demo: '#',
      image: wbs
    }
  ];

  const otherProjects = [
    {
      title: 'GYM Application',
      desc: 'A mobile application for booking sports classes, viewing schedules, and borrowing sports equipment.',
      tech: ['Flutter', 'Laravel', 'MySQL'],
      github: 'https://github.com/AndreasKuncoro11788/2_B_Gym',
    },
    {
      title: 'Portfolio V1',
      desc: 'My first personal portfolio website showcasing my early progression as a developer.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Marcell-Git/Personal-Website',
    }
  ];

  return (
    <section id="projects" className="section-padding bg-secondary-bg">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {featuredProjects.map((project, index) => (
                <motion.div 
                   className="bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col h-full group border border-gray-100"
                   key={index}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                    <div className="h-[200px] bg-gray-200 overflow-hidden relative">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          loading="lazy" 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl font-bold mb-2 text-text-main">{project.title}</h3>
                        <p className="text-text-secondary text-sm mb-6 flex-grow leading-relaxed">{project.desc}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((t, i) => (
                                <span key={i} className="text-xs px-3 py-1 bg-secondary-bg text-accent rounded-full font-medium">{t}</span>
                            ))}
                        </div>
                        <div className="flex gap-4">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-text-main hover:text-accent transition-colors">
                                <FiGithub /> GitHub
                            </a>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

        <h3 className="text-2xl font-bold text-center mb-10 text-text-main">Other Notable Projects</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
                <motion.div 
                   className="bg-white rounded-xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md border border-gray-100 flex flex-col"
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-50px" }}
                   transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                    <div className="flex justify-between items-start mb-4">
                        <h4 className="text-lg font-bold text-text-main">{project.title}</h4>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors text-xl">
                            <FiGithub />
                        </a>
                    </div>
                    <p className="text-text-secondary text-sm mb-4 flex-grow leading-relaxed">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map((t, i) => (
                            <span key={i} className="text-xs px-2 py-1 bg-secondary-bg text-text-secondary rounded text-[0.75rem]">{t}</span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
