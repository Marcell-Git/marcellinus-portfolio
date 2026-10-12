import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { VscRepo, VscChevronRight } from 'react-icons/vsc';
import bioskop from '../assets/bioskop.png';
import reusemart from '../assets/reuse.png';
import wbs from '../assets/wbs.png';
import rsud from '../assets/Profil_rsud.png';
import { EditorSection, Code, L, K, F, N, C, T } from './syntax';
import { FileIcon } from './Shell';

// Turn a project title into a folder-like slug, e.g. "Website ReUseMart" -> "website-reusemart"
const slug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

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

  // Close the repo picker with Escape, like a command palette
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setActiveModal(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <EditorSection id="projects" file="projects.ts" icon={<FileIcon name="projects.ts" />}>
      <div className="max-w-[1200px]">
        <Code className="mb-8">
          <L><K>import</K> {'{'} <N>Project</N> {'}'} <K>from</K> <span className="text-syn-str">"@/types"</span>;</L>
          <L />
          <L><C>// {featuredProjects.length} featured builds, shipped with real users in mind</C></L>
          <L><K>export const</K> <F>featured</F>: <N>Project</N>[] = [ ... ];</L>
        </Code>
        <h2 className="font-sans text-3xl sm:text-4xl font-bold text-white mb-8">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {featuredProjects.map((project, index) => (
                <motion.article
                   className="group rounded-md border border-line bg-surface overflow-hidden flex flex-col hover:border-accent/60 transition-colors"
                   key={project.title}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-80px" }}
                   transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                >
                    <div className="h-9 flex items-center gap-2 px-3 border-b border-line bg-side font-mono text-xs text-muted">
                      <FileIcon name="x.md" className="shrink-0" /> <span className="truncate">{slug(project.title)}/README.md</span>
                      <span className="ml-auto text-gutter">0{index + 1}</span>
                    </div>
                    <div className="aspect-[16/9] overflow-hidden bg-editor border-b border-line">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                        <h3 className="font-sans text-xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-sm leading-relaxed text-fg/70 mb-5 flex-1">{project.desc}</p>
                        <div className="flex flex-wrap gap-2 mb-5">
                            {project.tech.map((t) => (
                                <span key={t} className="chip"><T>#</T>{t}</span>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href={Array.isArray(project.github) ? project.github[0] : project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-ghost !py-1.5 !text-xs"
                                onClick={(e) => handleGithubClick(e, project.github)}
                            >
                                <FiGithub /> Source
                            </a>
                            {project.demo !== '#' && (
                              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary !py-1.5 !text-xs">
                                <FiExternalLink /> Live site
                              </a>
                            )}
                        </div>
                    </div>
                </motion.article>
            ))}
        </div>

        <Code className="mb-4">
          <L><C>// other projects</C></L>
          <L><K>export const</K> <F>others</F>: <N>Project</N>[] = [</L>
        </Code>
        <div className="flex flex-col gap-3 pl-0 sm:pl-[3.25rem]">
            {otherProjects.map((project, index) => (
                <motion.a
                   key={project.title}
                   href={Array.isArray(project.github) ? project.github[0] : project.github}
                   target="_blank"
                   rel="noopener noreferrer"
                   onClick={(e) => handleGithubClick(e, project.github)}
                   className="group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 rounded-md border border-line bg-surface/60 px-4 py-3 hover:border-accent/60 transition-colors"
                   initial={{ opacity: 0, x: -16 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true, margin: "-40px" }}
                   transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                    <div className="flex items-center gap-2 font-mono text-sm text-white sm:w-56 shrink-0">
                      <VscRepo className="text-muted" /> {project.title}
                    </div>
                    <p className="text-sm text-fg/65 m-0 flex-1">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 shrink-0">
                        {project.tech.map((t) => (
                            <span key={t} className="chip">{t}</span>
                        ))}
                    </div>
                    <VscChevronRight className="hidden sm:block text-muted group-hover:text-accent" />
                </motion.a>
            ))}
        </div>
        <Code className="mt-4">
          <L>];</L>
        </Code>
      </div>

      <AnimatePresence>
        {activeModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-start justify-center pt-[12vh] px-4 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              className="w-full max-w-lg rounded-lg border border-line bg-surface shadow-2xl overflow-hidden font-mono"
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-label="Select repository"
            >
              <div className="m-2 rounded border border-accent bg-editor px-3 py-2 text-sm text-fg">
                <span className="text-muted">&gt;</span> Git: Open Repository…
              </div>
              <ul className="m-0 p-0 pb-2 list-none">
                {activeModal.map((url) => (
                  <li key={url}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-accent/20 group"
                      onClick={() => setActiveModal(null)}
                    >
                      <FiGithub className="text-muted group-hover:text-fg" />
                      <span className="text-fg">{getLinkLabel(url)}</span>
                      <span className="ml-auto text-xs text-muted truncate max-w-[45%]">{url.replace('https://github.com/', '')}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="border-t border-line px-4 py-1.5 text-[11px] text-muted">esc to close</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </EditorSection>
  );
};

export default Projects;
