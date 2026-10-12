import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  VscFiles, VscMail, VscSourceControl, VscExtensions, VscAccount, VscGithubAlt,
  VscChevronDown, VscChevronRight, VscMenu, VscClose, VscJson, VscMarkdown,
  VscTerminalBash, VscFilePdf, VscCheck, VscBell, VscGitMerge,
} from 'react-icons/vsc';
import { SiReact, SiTypescript } from 'react-icons/si';

export const files = [
  { id: 'home', name: 'home.jsx', lang: 'JavaScript JSX' },
  { id: 'about', name: 'about.md', lang: 'Markdown' },
  { id: 'skills', name: 'skills.json', lang: 'JSON' },
  { id: 'projects', name: 'projects.ts', lang: 'TypeScript' },
  { id: 'contact', name: 'contact.sh', lang: 'Shell Script' },
];

export const FileIcon = ({ name, className = '' }) => {
  if (name.endsWith('.jsx')) return <SiReact className={`text-[#61dafb] ${className}`} />;
  if (name.endsWith('.md')) return <VscMarkdown className={`text-[#519aba] ${className}`} />;
  if (name.endsWith('.json')) return <VscJson className={`text-[#cbcb41] ${className}`} />;
  if (name.endsWith('.ts')) return <SiTypescript className={`text-[#3178c6] ${className}`} />;
  if (name.endsWith('.sh')) return <VscTerminalBash className={`text-[#89e051] ${className}`} />;
  return <VscFilePdf className={`text-[#e44d4d] ${className}`} />;
};

const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const Explorer = ({ active, onPick }) => {
  const [srcOpen, setSrcOpen] = useState(true);
  const [publicOpen, setPublicOpen] = useState(true);

  const row = 'w-full flex items-center gap-1.5 h-[22px] text-[13px] text-left hover:bg-white/5';

  return (
    <div className="font-mono text-fg/80 select-none">
      <div className="h-9 px-4 flex items-center text-[11px] tracking-widest text-muted">EXPLORER</div>
      <div className="px-1 text-[11px] font-bold tracking-wide flex items-center gap-1 h-[22px]">
        <VscChevronDown /> MARCELLINUS-PORTFOLIO
      </div>

      <button className={`${row} pl-4`} onClick={() => setSrcOpen(!srcOpen)}>
        {srcOpen ? <VscChevronDown /> : <VscChevronRight />} src
      </button>
      {srcOpen &&
        files.map((f) => (
          <button
            key={f.id}
            onClick={() => onPick(f.id)}
            className={`${row} pl-10 ${active === f.id ? 'bg-accent/15 text-white outline outline-1 -outline-offset-1 outline-accent/50' : ''}`}
          >
            <FileIcon name={f.name} /> {f.name}
          </button>
        ))}

      <button className={`${row} pl-4`} onClick={() => setPublicOpen(!publicOpen)}>
        {publicOpen ? <VscChevronDown /> : <VscChevronRight />} public
      </button>
      {publicOpen && (
        <a href="/CV_Marcellinus.pdf" target="_blank" rel="noopener noreferrer" className={`${row} pl-10`}>
          <FileIcon name="cv.pdf" /> CV_Marcellinus.pdf
        </a>
      )}
    </div>
  );
};

const Shell = ({ children }) => {
  const scrollRef = useRef(null);
  const [active, setActive] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Scroll-spy: highlight the file whose section is in view
  useEffect(() => {
    const root = scrollRef.current;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { root, rootMargin: '-35% 0px -60% 0px' }
    );
    files.forEach((f) => {
      const el = document.getElementById(f.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const pick = (id) => {
    goTo(id);
    setDrawerOpen(false);
  };

  const activeFile = files.find((f) => f.id === active);
  const activityBtn = 'w-12 h-12 flex items-center justify-center text-[22px] text-muted hover:text-fg transition-colors';

  return (
    <div className="h-[100dvh] flex flex-col bg-editor text-fg">
      {/* Title bar */}
      <header className="h-9 shrink-0 flex items-center px-3 bg-panel border-b border-line font-mono text-xs text-muted relative">
        <button className="md:hidden text-lg text-fg mr-2" onClick={() => setDrawerOpen(true)} aria-label="Open explorer">
          <VscMenu />
        </button>
        <div className="hidden md:flex gap-2" aria-hidden="true">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 truncate max-w-[60%]">
          {activeFile.name} — marcellinus-portfolio
        </div>
      </header>

      <div className="flex flex-1 min-h-0">
        {/* Activity bar */}
        <nav className="hidden md:flex w-12 shrink-0 flex-col justify-between bg-panel border-r border-line">
          <div>
            <button
              className={`${activityBtn} ${sidebarOpen ? 'text-fg border-l-2 border-accent' : ''}`}
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle explorer"
              title="Explorer"
            >
              <VscFiles />
            </button>
            <button className={activityBtn} onClick={() => pick('skills')} aria-label="Skills" title="Skills">
              <VscExtensions />
            </button>
            <button className={activityBtn} onClick={() => pick('projects')} aria-label="Projects" title="Projects">
              <VscSourceControl />
            </button>
            <button className={activityBtn} onClick={() => pick('contact')} aria-label="Contact" title="Contact">
              <VscMail />
            </button>
          </div>
          <div>
            <a className={activityBtn} href="https://linkedin.com/in/marcellinus-renditta-4900a6312" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <VscAccount />
            </a>
            <a className={activityBtn} href="https://github.com/Marcell-Git" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
              <VscGithubAlt />
            </a>
          </div>
        </nav>

        {/* Sidebar (desktop) */}
        {sidebarOpen && (
          <aside className="hidden md:block w-60 shrink-0 bg-side border-r border-line overflow-y-auto">
            <Explorer active={active} onPick={pick} />
          </aside>
        )}

        {/* Sidebar (mobile drawer) */}
        <AnimatePresence>
          {drawerOpen && (
            <>
              <motion.div
                className="md:hidden fixed inset-0 z-40 bg-black/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setDrawerOpen(false)}
              />
              <motion.aside
                className="md:hidden fixed top-0 bottom-0 left-0 z-50 w-64 bg-side border-r border-line"
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'tween', duration: 0.2 }}
              >
                <button className="absolute top-2 right-2 p-1 text-muted" onClick={() => setDrawerOpen(false)} aria-label="Close explorer">
                  <VscClose />
                </button>
                <Explorer active={active} onPick={pick} />
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* Editor */}
        <div className="flex-1 min-w-0 flex flex-col">
          <div className="h-[35px] shrink-0 flex bg-side border-b border-line overflow-x-auto">
            {files.map((f) => (
              <button
                key={f.id}
                onClick={() => pick(f.id)}
                className={`shrink-0 flex items-center gap-2 px-4 font-mono text-[13px] border-r border-line ${
                  active === f.id
                    ? 'bg-editor text-fg border-t-2 border-t-accent'
                    : 'text-muted hover:text-fg border-t-2 border-t-transparent'
                }`}
              >
                <FileIcon name={f.name} /> {f.name}
              </button>
            ))}
          </div>
          <main ref={scrollRef} className="flex-1 overflow-y-auto overflow-x-hidden">
            {children}
          </main>
        </div>
      </div>

      {/* Status bar */}
      <footer className="h-6 shrink-0 flex items-center justify-between px-2 bg-status text-white font-mono text-[11px]">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1"><VscGitMerge /> main</span>
          <span className="hidden sm:flex items-center gap-1"><VscCheck /> 0 problems</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#7ee787]" /> Open to work
          </span>
          <span className="hidden sm:inline">UTF-8</span>
          <span className="hidden sm:inline">{activeFile.lang}</span>
          <VscBell className="hidden sm:inline" />
        </div>
      </footer>
    </div>
  );
};

export default Shell;
