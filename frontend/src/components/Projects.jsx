import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiX, FiExternalLink } from 'react-icons/fi';
import bioskop from '../assets/bioskop.png';
import reusemart from '../assets/reuse.png';
import wbs from '../assets/wbs.png';

const Projects = () => {
  const featuredProjects = [
    {
      title: 'Online Cinema Ticketing Platform',
      desc: 'A web-based application for searching movies, viewing showtimes, and booking cinema tickets online.',
      tech: ['React.js', 'Laravel', 'MySQL', 'Bootstrap'],
      github: ['https://github.com/Marcell-Git/Bioskop_Frontend', 'https://github.com/rendyputrayana/backendp3l'],
      demo: '#',
      image: bioskop
    },
    {
      title: 'Website ReUseMart',
      desc: 'A web-based application for buying and selling used goods.',
      tech: ['React.js', 'Laravel', 'MySQL', 'Bootstrap'],
      github: ['https://github.com/Agplhh/Frontendp3l', 'https://github.com/Agplhh/Backendp3l'],
      demo: '#',
      image: reusemart
    },
    {
      title: 'WBS Pemerintahan Kabupaten Klaten',
      desc: 'A web-based application for reporting complaints and suggestions to the government of Klaten Regency.',
      tech: ['React.js','Laravel', 'MySQL', 'Tailwind CSS'],
      github: ['https://github.com/Marcell-Git/Frontend-WBS', 'https://github.com/Marcell-Git/Backend-WBS'],
      demo: '#',
      image: wbs
    }
  ];

  const [activeModal, setActiveModal] = React.useState(null);

  const getLinkLabel = (url) => {
    const lowerUrl = url.toLowerCase();
    if (lowerUrl.includes('front')) return 'Frontend Repository';
    if (lowerUrl.includes('back') || lowerUrl.includes('api')) return 'Backend / API Repository';
    return 'Repository Link';
  };

  const handleGithubClick = (e, githubUrl) => {
    if (Array.isArray(githubUrl) && githubUrl.length > 1) {
      e.preventDefault();
      setActiveModal(githubUrl);
    }
  };

  const otherProjects = [
    {
      title: 'GYM Application',
      desc: 'A mobile application for booking sports classes, viewing schedules, and borrowing sports equipment.',
      tech: ['Flutter', 'Laravel', 'MySQL'],
      github: ['https://github.com/AndreasKuncoro11788/2_B_Gym', 'https://github.com/Marcell-Git/API_Gym'],
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
                            <a 
                                href={Array.isArray(project.github) ? project.github[0] : project.github} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex items-center gap-2 text-sm font-semibold text-text-main hover:text-accent transition-colors"
                                onClick={(e) => handleGithubClick(e, project.github)}
                            >
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
                        <a 
                            href={Array.isArray(project.github) ? project.github[0] : project.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-text-secondary hover:text-accent transition-colors text-xl"
                            onClick={(e) => handleGithubClick(e, project.github)}
                        >
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

      <AnimatePresence>
        {activeModal && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)}
          >
            <motion.div 
              className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden relative"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                <h3 className="text-xl font-bold text-text-main">Select Repository</h3>
                <button 
                  onClick={() => setActiveModal(null)}
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors text-text-secondary"
                >
                  <FiX size={20} />
                </button>
              </div>
              
              <div className="p-6 flex flex-col gap-4">
                <p className="text-text-secondary text-sm mb-2">
                  This project consists of multiple repositories. Please select which one you would like to view:
                </p>
                {activeModal.map((url, idx) => (
                  <a 
                    key={idx}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center p-4 rounded-lg border border-gray-200 hover:border-accent hover:bg-secondary-bg hover:text-accent group transition-all duration-200"
                    onClick={() => setActiveModal(null)}
                  >
                    <div className="flex items-center gap-3">
                      <FiGithub className="text-xl" />
                      <span className="font-semibold">{getLinkLabel(url)}</span>
                    </div>
                    <FiExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
