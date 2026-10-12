import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiX, FiExternalLink } from 'react-icons/fi';
import bioskop from '../assets/bioskop.png';
import reusemart from '../assets/reuse.png';
import wbs from '../assets/wbs.png';
import rsud from '../assets/Profil_rsud.png';

const cardThemes = [
  { tab: 'bg-yellow text-ink', dot: 'bg-ink', body: 'bg-ink text-white', muted: 'text-white/70', chip: 'border-white/30 text-white/80' },
  { tab: 'bg-ink text-white', dot: 'bg-yellow', body: 'bg-yellow text-ink card-hard', muted: 'text-ink/75', chip: 'border-ink/50' },
  { tab: 'bg-orange text-white', dot: 'bg-white', body: 'bg-army text-white', muted: 'text-white/75', chip: 'border-white/40 text-white/85' },
  { tab: 'bg-ink text-white', dot: 'bg-orange', body: 'bg-white text-ink card-hard', muted: 'text-ink-soft', chip: 'border-ink/40' },
];

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
      demo: 'https://wbs.dev.klaten.go.id/',
      image: wbs
    },
    {
      title: 'Profil RSUD Bagas Waras Klaten',
      desc: 'A web-based application for the official profile of RSUD Bagas Waras Klaten.',
      tech: ['React.js','Laravel', 'MySQL', 'Tailwind CSS'],
      github: ['https://github.com/Marcell-Git/Frontend-RSUD', 'https://github.com/Marcell-Git/Backend-RSUD'],
      demo: '#',
      image: rsud
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
    <section id="projects" className="section-padding relative">
      <div className="container">
        <div className="mb-14">
          <span className="font-hand text-xl text-orange block -rotate-2 mb-2">built &amp; shipped</span>
          <h2 className="pixel-title m-0">Featured Works</h2>
        </div>

        <div className="flex flex-col gap-10 md:gap-14 mb-24">
            {featuredProjects.map((project, index) => {
                const theme = cardThemes[index % cardThemes.length];
                return (
                <motion.article
                   className="relative pt-9"
                   key={project.title}
                   initial={{ opacity: 0, y: 40 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 0.6 }}
                >
                    {/* Folder tab */}
                    <div
                      className={`absolute top-0 left-0 h-10 pl-4 pr-10 flex items-center gap-2 mono-label font-bold ${theme.tab}`}
                      style={{ clipPath: 'polygon(0 0, calc(100% - 28px) 0, 100% 100%, 0 100%)' }}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${theme.dot}`} />
                      Project {String(index + 1).padStart(2, '0')}
                    </div>

                    <div className={`grid grid-cols-1 md:grid-cols-[1fr_1.15fr] gap-8 p-6 sm:p-10 group ${theme.body}`}>
                        <div className="flex flex-col">
                            <h3 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight mb-3">{project.title}</h3>
                            <p className={`text-[0.95rem] leading-relaxed mb-6 max-w-[440px] ${theme.muted}`}>{project.desc}</p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map((t) => (
                                    <span key={t} className={`mono-label px-2 py-1 border ${theme.chip}`}>{t}</span>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-5 mt-auto">
                                <a
                                    href={Array.isArray(project.github) ? project.github[0] : project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mono-label font-bold flex items-center gap-2 underline underline-offset-4 hover:no-underline"
                                    onClick={(e) => handleGithubClick(e, project.github)}
                                >
                                    <FiGithub /> View code →
                                </a>
                                {project.demo !== '#' && (
                                  <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mono-label font-bold flex items-center gap-2 underline underline-offset-4 hover:no-underline"
                                  >
                                    <FiExternalLink /> Live site →
                                  </a>
                                )}
                            </div>
                        </div>
                        <div className="bg-white p-2 border-2 border-ink shadow-[6px_6px_0_var(--orange)] self-center transition-transform duration-300 group-hover:-translate-y-1">
                            <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                              <img
                                src={project.image}
                                alt={project.title}
                                loading="lazy"
                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                              />
                            </div>
                        </div>
                    </div>
                </motion.article>
                );
            })}
        </div>

        <div className="text-center mb-10">
          <span className="font-hand text-xl text-orange block -rotate-2">side builds</span>
          <h3 className="font-display text-5xl sm:text-6xl uppercase leading-none m-0">Other Projects</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[860px] mx-auto">
            {otherProjects.map((project, index) => (
                <motion.div
                   className={`relative p-6 pt-8 card-hard flex flex-col ${index % 2 ? 'bg-white' : 'bg-yellow'}`}
                   key={project.title}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   whileHover={{ x: -3, y: -3 }}
                   viewport={{ once: true, margin: "-50px" }}
                   transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                    <span className="tape -top-2.5 left-1/2 -translate-x-1/2" />
                    <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-bold m-0">{project.title}</h4>
                        <a
                            href={Array.isArray(project.github) ? project.github[0] : project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} on GitHub`}
                            className="text-xl hover:scale-110 transition-transform"
                            onClick={(e) => handleGithubClick(e, project.github)}
                        >
                            <FiGithub />
                        </a>
                    </div>
                    <p className="text-[0.95rem] leading-relaxed mb-5 flex-grow">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map((t) => (
                            <span key={t} className="mono-label px-2 py-0.5 bg-white border border-ink">{t}</span>
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
              className="bg-paper border border-ink shadow-[6px_6px_0_var(--ink)] w-full max-w-md overflow-hidden relative"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-5 border-b border-ink flex justify-between items-center bg-yellow">
                <h3 className="font-display text-3xl uppercase leading-none m-0">Select Repository</h3>
                <button 
                  onClick={() => setActiveModal(null)}
                  aria-label="Close"
                  className="p-2 hover:bg-ink hover:text-white transition-colors"
                >
                  <FiX size={20} />
                </button>
              </div>
              
              <div className="p-6 flex flex-col gap-4">
                <p className="text-ink-soft text-sm m-0">
                  This project consists of multiple repositories. Please select which one you would like to view:
                </p>
                {activeModal.map((url, idx) => (
                  <a 
                    key={idx}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center p-4 bg-white border border-ink hover:bg-ink hover:text-white group transition-all duration-200"
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
