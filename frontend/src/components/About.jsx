import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/Profile.jpeg';
import aboutImg from '../assets/About.jpeg';

const focusTags = [
  { label: 'Frontend Dev', className: 'bg-yellow' },
  { label: 'Backend Dev', className: 'bg-ink text-white' },
  { label: 'REST API', className: 'bg-orange text-white' },
  { label: 'Clean Code', className: 'bg-army text-white' },
];

const stats = [
  { value: '2+', label: 'Years coding', className: 'bg-yellow' },
  { value: '10+', label: 'Projects done', className: 'bg-white' },
  { value: '8th', label: 'Semester, Informatics', className: 'bg-ink text-white' },
];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, delay },
});

const Polaroid = ({ src, caption, className = '', tapeClass = '' }) => (
  <motion.figure
    className={`polaroid m-0 ${className}`}
    whileHover={{ rotate: 0, scale: 1.04 }}
    transition={{ type: 'spring', stiffness: 250, damping: 18 }}
  >
    <span className={`tape ${tapeClass}`} />
    <img src={src} alt={caption} className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-[filter] duration-500" />
    <figcaption className="mono-label text-ink-soft text-center mt-2">{caption}</figcaption>
  </motion.figure>
);

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container">
        <motion.div className="flex items-end gap-4 mb-12 md:mb-16" {...reveal()}>
          <h2 className="pixel-title m-0">About</h2>
          <span className="font-hand text-lg text-orange mb-2 -rotate-3">who's this guy?</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_200px] lg:grid-cols-[230px_1fr_230px] gap-10 md:gap-12 items-start">
          <motion.div className="max-w-[230px] mx-auto md:mx-0 md:mt-10" {...reveal(0.1)}>
            <Polaroid
              src={profileImg}
              caption="that's me"
              className="-rotate-2"
              tapeClass="-top-3 left-1/2 -translate-x-1/2 -rotate-3"
            />
          </motion.div>

          <motion.div {...reveal(0.2)}>
            <span className="sticker bg-yellow mb-6">// what's up</span>
            <div className="text-lg sm:text-xl leading-[1.7] text-ink space-y-5">
              <p className="m-0">
                Hi! I'm <span className="font-bold bg-yellow px-1">Marcellinus Renditta Mardyanto</span>, an
                8th-semester Informatics student who gets a little too excited about building
                apps that solve real problems.
              </p>
              <p className="m-0">
                I love the creative freedom of <strong className="border-b-4 border-orange">React.js</strong> on the
                frontend and the structured robustness of <strong className="border-b-4 border-army">Laravel</strong> on
                the backend. Code should not only work — it should be clean, scalable and maintainable.
              </p>
              <p className="m-0">
                Now approaching graduation, I'm looking for a place to contribute to impactful
                projects and keep growing as a developer.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {focusTags.map((tag) => (
                <span key={tag.label} className={`sticker ${tag.className}`}>{tag.label}</span>
              ))}
            </div>
          </motion.div>

          <motion.div className="max-w-[230px] mx-auto md:mx-0" {...reveal(0.3)}>
            <Polaroid
              src={aboutImg}
              caption="my workspace"
              className="rotate-2"
              tapeClass="-top-3 -right-4 rotate-[35deg]"
            />
          </motion.div>
        </div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-[760px] mx-auto" {...reveal(0.2)}>
          {stats.map((s) => (
            <div key={s.label} className={`relative p-5 card-hard ${s.className}`}>
              <span className="tape -top-2.5 left-1/2 -translate-x-1/2 w-12 h-4" />
              <div className="font-display text-6xl leading-none">{s.value}</div>
              <div className="mono-label mt-1 opacity-75">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
