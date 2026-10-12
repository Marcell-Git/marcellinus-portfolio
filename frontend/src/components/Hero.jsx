import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FiGithub, FiLinkedin, FiPlay } from 'react-icons/fi';
import profileImg from '../assets/Profile.jpg'
import { EditorSection, Code, L, K, S, F, P, N, C } from './syntax';
import { FileIcon } from './Shell';

const Hero = () => {
  return (
    <EditorSection id="home" file="home.jsx" icon={<FileIcon name="home.jsx" />}>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-center min-h-[calc(100dvh-160px)]">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Code>
            <L><C>// hello world, i'm</C></L>
            <L className="!min-h-0 py-2">
              <h1 className="font-sans font-extrabold tracking-tight leading-[1.05] text-white m-0 text-[2.4rem] sm:text-6xl xl:text-7xl">
                Marcellinus Renditta Mardyanto<span className="text-accent">.</span>
              </h1>
            </L>
            <L />
            <L><K>const</K> <N>developer</N> = {'{'}</L>
            <L indent={1}>
              <P>role</P>: <span className="text-syn-str inline-flex">"<Typewriter
                options={{
                  strings: ['Full-Stack Developer', 'Web Developer', 'Mobile Developer'],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 40,
                  delay: 70,
                }}
              />"</span>,
            </L>
            <L indent={1}><P>stack</P>: [<S>React.js</S>, <S>Laravel</S>, <S>.NET</S>, <S>Flutter</S>],</L>
            <L indent={1}><P>currently</P>: <S>IT Staff @ RSUD Bagas Waras</S>,</L>
            <L indent={1}><P>education</P>: <S>Informatics, Atma Jaya Yogyakarta University</S>,</L>
            <L indent={1}><P>location</P>: <S>Yogyakarta, Indonesia</S>,</L>
            <L indent={1}><P>openToWork</P>: <K>true</K>,</L>
            <L>{'};'}</L>
            <L />
            <L><C>// run it ↓</C></L>
            <L className="!min-h-0 py-2">
              <div className="flex flex-wrap gap-3">
                <a href="#contact" className="btn btn-primary">
                  <FiPlay /> developer.<F>contact</F>()
                </a>
                <a href="https://github.com/Marcell-Git" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  <FiGithub /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/marcellinus-renditta/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  <FiLinkedin /> LinkedIn
                </a>
              </div>
            </L>
          </Code>
        </motion.div>

        {/* Image preview tab */}
        <motion.div
          className="hidden lg:block rounded-md border border-line bg-surface overflow-hidden"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="h-8 flex items-center px-3 border-b border-line font-mono text-xs text-muted">
            Profile.jpeg <span className="ml-auto">preview</span>
          </div>
          <img src={profileImg} alt="Marcellinus Renditta Mardyanto" className="w-full aspect-[4/5] object-cover" />
        </motion.div>
      </div>
    </EditorSection>
  );
};

export default Hero;
