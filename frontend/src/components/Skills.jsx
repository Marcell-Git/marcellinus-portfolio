import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaLaravel, FaDatabase, FaGithub, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiFlutter, SiDotnet, SiPostman, SiGo } from 'react-icons/si';
import { EditorSection, Code, L, P, S } from './syntax';
import { FileIcon } from './Shell';

const skillGroups = {
  languages: ['PHP', 'JavaScript', 'Go', 'Java', 'C', 'SQL'],
  frontend: ['React.js', 'Bootstrap', 'Tailwind', 'HTML', 'CSS'],
  backend: ['Laravel', 'Node.js', 'REST API'],
  mobile: ['.NET MAUI', 'Flutter'],
  database: ['MySQL', 'PostgreSQL'],
  tools: ['GitHub', 'Postman', 'XAMPP', 'Figma', 'cPanel'],
};

// Shown as installed "extensions"
const extensions = [
  { name: 'React.js', desc: 'Component-based UIs and SPAs', icon: <FaReact className="text-[#61dafb]" /> },
  { name: 'Laravel', desc: 'REST APIs, auth and MVC backends', icon: <FaLaravel className="text-[#ff2d20]" /> },
  { name: 'Node.js', desc: 'Server-side JavaScript', icon: <FaNodeJs className="text-[#5fa04e]" /> },
  { name: 'Go', desc: 'Fast, concurrent backend services', icon: <SiGo className="text-[#00add8]" /> },
  { name: 'JavaScript', desc: 'ES6+, async, DOM', icon: <FaJs className="text-[#f7df1e]" /> },
  { name: 'Tailwind CSS', desc: 'Utility-first styling', icon: <SiTailwindcss className="text-[#38bdf8]" /> },
  { name: 'MySQL & PostgreSQL', desc: 'Relational schema design & queries', icon: <FaDatabase className="text-[#4479a1]" /> },
  { name: '.NET MAUI', desc: 'Cross-platform mobile apps in C#', icon: <SiDotnet className="text-[#8a6ddf]" /> },
  { name: 'Flutter', desc: 'Mobile apps for hospital operations', icon: <SiFlutter className="text-[#54c5f8]" /> },
  { name: 'Postman', desc: 'API testing and documentation', icon: <SiPostman className="text-[#ff6c37]" /> },
  { name: 'HTML5 & CSS3', desc: 'Semantic, responsive layouts', icon: <span className="flex"><FaHtml5 className="text-[#e34f26]" /><FaCss3Alt className="text-[#1572b6] -ml-1" /></span> },
  { name: 'Git & GitHub', desc: 'Version control and collaboration', icon: <FaGithub className="text-white" /> },
];

const groupEntries = Object.entries(skillGroups);

const Skills = () => {
  return (
    <EditorSection id="skills" file="skills.json" icon={<FileIcon name="skills.json" />}>
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-10 max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-white mb-6">Technical Skills</h2>
          <Code>
            <L>{'{'}</L>
            {groupEntries.map(([group, items], i) => (
              <L key={group} indent={1}>
                <P>"{group}"</P>: [
                {items.map((item, j) => (
                  <React.Fragment key={item}>
                    <S>{item}</S>
                    {j < items.length - 1 && ', '}
                  </React.Fragment>
                ))}
                ]{i < groupEntries.length - 1 && ','}
              </L>
            ))}
            <L>{'}'}</L>
          </Code>
        </motion.div>

        <motion.div
          className="rounded-md border border-line bg-side overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="h-9 flex items-center justify-between px-4 border-b border-line font-mono text-[11px] tracking-widest text-muted">
            EXTENSIONS: INSTALLED
            <span className="rounded-full bg-accent/20 text-accent px-2 py-0.5 tracking-normal">{extensions.length}</span>
          </div>
          <ul className="m-0 p-0 list-none">
            {extensions.map((ext) => (
              <li key={ext.name} className="flex items-center gap-3 px-4 py-2.5 border-b border-line/60 last:border-0 hover:bg-white/[0.03]">
                <div className="w-9 h-9 shrink-0 rounded bg-surface flex items-center justify-center text-xl">{ext.icon}</div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold text-white truncate">{ext.name}</div>
                  <div className="text-xs text-muted truncate">{ext.desc}</div>
                </div>
                <span className="font-mono text-[10px] text-muted border border-line rounded px-1.5 py-0.5">installed</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </EditorSection>
  );
};

export default Skills;
