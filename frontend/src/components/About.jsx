import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/Profile.jpeg';
import aboutImg from '../assets/About.jpeg';
import { EditorSection } from './syntax';
import { FileIcon } from './Shell';

const stats = [
  { value: '2+', label: 'years coding' },
  { value: '10+', label: 'projects completed' },
  { value: '8th', label: 'semester, Informatics' },
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
};

// Markdown syntax marker, rendered faintly like an editor preview
const Md = ({ children }) => <span className="font-mono text-muted/70 font-normal mr-2">{children}</span>;
const Bold = ({ children }) => (
  <strong className="text-white font-semibold">
    <span className="font-mono text-muted/60 font-normal">**</span>{children}<span className="font-mono text-muted/60 font-normal">**</span>
  </strong>
);

const About = () => {
  return (
    <EditorSection id="about" file="about.md" icon={<FileIcon name="about.md" />}>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 max-w-[1100px]">
        <motion.div {...reveal}>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-white mb-6">
            <Md>#</Md>About Me
          </h2>
          <div className="space-y-5 text-[1.05rem] leading-relaxed text-fg/75 max-w-[680px]">
            <p className="m-0">
              Hi there! I'm <Bold>Marcellinus Renditta Mardyanto</Bold>, an 8th-semester Informatics
              student passionate about Software Engineering. I've spent my university years diving deep
              into web development and building applications that solve real problems.
            </p>
            <p className="m-0">
              My focus is full-stack development. I enjoy the creative freedom of <Bold>React.js</Bold> on
              the frontend and the structured robustness of <Bold>Laravel</Bold> on the backend. I believe
              code should not only work — it should be clean, scalable and maintainable.
            </p>
            <blockquote className="m-0 border-l-4 border-accent/70 bg-surface/60 pl-4 py-2 text-fg/80">
              Approaching graduation and actively looking for opportunities to contribute to impactful
              projects and keep growing as a developer.
            </blockquote>
          </div>

          <h3 className="font-sans text-xl font-bold text-white mt-10 mb-4">
            <Md>##</Md>Quick stats
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[680px]">
            {stats.map((s) => (
              <div key={s.label} className="rounded-md border border-line bg-surface p-4">
                <div className="font-mono text-3xl font-bold text-syn-const">{s.value}</div>
                <div className="font-mono text-xs text-muted mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...reveal} transition={{ duration: 0.5, delay: 0.15 }} className="space-y-3">
          <p className="font-mono text-xs text-muted m-0">
            ![workspace](<span className="text-syn-str">./About.jpeg</span>)
          </p>
          <img src={aboutImg} alt="Workspace" className="w-full aspect-square object-cover rounded-md border border-line" />
          <img src={profileImg} alt="Marcellinus" className="lg:hidden w-full aspect-square object-cover rounded-md border border-line" />
        </motion.div>
      </div>
    </EditorSection>
  );
};

export default About;
