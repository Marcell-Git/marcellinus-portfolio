import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/Profile.jpg';
import aboutImg from '../assets/About.jpg';
import { EditorSection } from './syntax';
import { FileIcon } from './Shell';

const stats = [
  { value: '3.76', label: 'GPA / 4.00, Informatics' },
  { value: '10+', label: 'projects completed' },
  { value: '2', label: 'professional roles' },
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
              Hi there! I'm <Bold>Marcellinus Renditta Mardyanto</Bold>, a Full-Stack Developer based in
              Yogyakarta with professional experience developing and maintaining web and mobile applications
              using <Bold>Laravel</Bold> and <Bold>React</Bold>. I studied Informatics at
              Atma Jaya Yogyakarta University.
            </p>
            <p className="m-0">
              I'm currently an <Bold>IT Staff at RSUD Bagas Waras</Bold> in Klaten, building hospital websites
              and Flutter mobile apps and keeping SIMRS running reliably. Before that, I interned at Dinas
              Komunikasi dan Informatika Kabupaten Klaten, developing a government website with
              authentication and role-based access.
            </p>
            <blockquote className="m-0 border-l-4 border-accent/70 bg-surface/60 pl-4 py-2 text-fg/80">
              Skilled in REST API development, database management, authentication and role based access
              control building reliable applications and troubleshooting real world systems.
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
