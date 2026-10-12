import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi';
import profileImg from '../assets/Profile.jpeg';
import aboutImg from '../assets/About.jpeg';
import Frame from './Frame';

// Floating sticky tags scattered around the name (hidden on small screens)
const floatingTags = [
  { label: 'React.js', className: 'bg-mint -rotate-6 top-[8%] left-[6%]' },
  { label: 'Laravel', className: 'bg-peach rotate-3 top-[4%] right-[8%]' },
  { label: 'Software Engineer', className: 'bg-yellow rotate-2 top-[46%] left-[2%]' },
  { label: 'Tailwind CSS', className: 'bg-sky -rotate-3 top-[44%] right-[3%]' },
];

const pop = (delay) => ({
  initial: { opacity: 0, y: 16, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.5, delay },
});

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-20">
      <div className="container relative">
        <div className="relative max-w-[900px] mx-auto text-center py-10 md:py-16">
          {floatingTags.map((tag, i) => (
            <motion.span
              key={tag.label}
              className={`sticker absolute hidden md:inline-flex ${tag.className}`}
              {...pop(0.5 + i * 0.1)}
              drag
              dragSnapToOrigin
              whileHover={{ scale: 1.08 }}
              style={{ cursor: 'grab' }}
            >
              {tag.label}
            </motion.span>
          ))}

          {/* Floating avatars */}
          <motion.img
            src={profileImg}
            alt=""
            className="hidden md:block absolute bottom-[14%] left-[10%] w-14 h-14 rounded-full object-cover border-2 border-white shadow-lg"
            {...pop(0.8)}
          />
          <motion.img
            src={aboutImg}
            alt=""
            className="hidden md:block absolute bottom-[20%] right-[10%] w-14 h-14 rounded-full object-cover border-2 border-white shadow-lg"
            {...pop(0.9)}
          />

          <motion.p className="font-hand text-xl text-ink-soft mb-2" {...pop(0.1)}>
            hey, i'm ~
          </motion.p>

          <motion.div className="inline-block" {...pop(0.2)}>
            <Frame className="px-4 sm:px-8 pt-3 pb-1">
              <h1 className="pixel-title m-0" style={{ fontSize: 'clamp(4rem, 15vw, 10rem)' }}>
                Marcell
              </h1>
              <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap mono-label bg-ink text-white px-2 py-0.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
                Open to work &amp; new problems
              </span>
            </Frame>
          </motion.div>

          <motion.h2
            className="mt-14 text-2xl sm:text-4xl font-bold tracking-tight leading-snug max-w-[640px] mx-auto"
            {...pop(0.35)}
          >
            I build web apps that{' '}
            <span className="inline-block bg-yellow px-1.5 -rotate-1">just work</span>{' '}
            <span className="text-pink">✿</span>
          </motion.h2>

          <motion.div className="font-mono text-sm sm:text-base text-ink-soft mt-4 h-6" {...pop(0.45)}>
            <Typewriter
              options={{
                strings: ['Software Engineer', 'Frontend Developer', 'Backend Developer'],
                autoStart: true,
                loop: true,
                deleteSpeed: 40,
                delay: 70,
              }}
            />
          </motion.div>

          <motion.div className="flex flex-wrap gap-3 justify-center items-center mt-8" {...pop(0.55)}>
            <a href="#contact" className="btn-ink">Contact me</a>
            <a
              href="https://github.com/Marcell-Git"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 flex items-center justify-center border border-ink bg-white hover:bg-yellow transition-colors"
            >
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com/in/marcellinus-renditta-4900a6312"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 flex items-center justify-center border border-ink bg-white hover:bg-yellow transition-colors"
            >
              <FiLinkedin />
            </a>
          </motion.div>

          <p className="font-hand text-ink-soft mt-6 text-lg">
            Marcellinus Renditta Mardyanto
          </p>
        </div>

        <motion.a
          href="#about"
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 mono-label flex items-center gap-2 text-ink-soft"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <FiArrowDown /> scroll
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
