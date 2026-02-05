import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import profileImg from '../assets/Profile.jpeg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-28 pb-32 lg:pt-20 lg:pb-0 bg-primary-bg">
      <div className="container grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] items-center gap-12 lg:gap-8 text-center lg:text-left">
        
        {/* BAGIAN TULISAN (Text) */}
        <motion.div 
          className="flex flex-col justify-center lg:block order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="block text-xl text-accent font-semibold mb-2 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I'm
          </motion.span>
          
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-[4rem] leading-[1.1] mb-4 text-text-main font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Marcellinus Renditta<br/>Mardyanto
          </motion.h1>
          
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-[2rem] font-medium text-text-secondary mb-2 h-[40px] lg:h-[48px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Typewriter
              options={{
                strings: ['Software Engineer', 'Frontend Developer', 'Backend Developer'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 80,
                wrapperClassName: "text-gray-500 font-semibold",
                cursorClassName: "text-gray-500 ml-1"
              }}
            />
          </motion.h2>
          
          <motion.p 
            className="text-lg text-text-secondary max-w-[500px] leading-[1.8] mb-10 mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Specializing in dynamic web solutions with React.js for the frontend and Laravel for robust backend architecture.
          </motion.p>
          
          <motion.div 
            className="flex gap-6 mb-0 lg:mb-12 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
             <a href="https://github.com/Marcell-Git" aria-label="Github" className="text-2xl text-text-main transition-all duration-300 border border-text-secondary p-2.5 rounded-full flex items-center justify-center hover:text-white hover:bg-accent hover:border-accent hover:-translate-y-1"><FiGithub /></a>
             <a href="https://linkedin.com/in/marcellinus-renditta-4900a6312" aria-label="LinkedIn" className="text-2xl text-text-main transition-all duration-300 border border-text-secondary p-2.5 rounded-full flex items-center justify-center hover:text-white hover:bg-accent hover:border-accent hover:-translate-y-1"><FiLinkedin /></a>
             <a href="mailto:rendimardiyanto72@gmail.com" aria-label="Email" className="text-2xl text-text-main transition-all duration-300 border border-text-secondary p-2.5 rounded-full flex items-center justify-center hover:text-white hover:bg-accent hover:border-accent hover:-translate-y-1"><FiMail /></a>
          </motion.div>
        </motion.div>
        
        {/* BAGIAN GAMBAR (Image) */}
        <motion.div 
           className="flex justify-center relative order-1 lg:order-2"
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
        >
           <motion.div 
             className="w-[280px] h-[350px] sm:w-[350px] sm:h-[450px] bg-gradient-to-tr from-accent to-orange-200 rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white/80 relative z-20"
             whileHover={{ scale: 1.05, rotate: 0 }}
             initial={{ rotate: 3 }}
             transition={{ duration: 0.3 }}
           >
              <img src={profileImg} alt="Marcellinus Renditta Mardyanto" className="w-full h-full object-cover" />
           </motion.div>
           
           <div className="absolute top-10 -right-10 w-[200px] h-[200px] bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
           <div className="absolute -bottom-5 -left-5 w-[150px] h-[150px] bg-orange-300/30 rounded-full blur-3xl -z-10"></div>
        </motion.div>

        <motion.div 
           className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1, duration: 1 }}
        >
           <div className="w-[30px] h-[50px] rounded-full border-2 border-text-secondary flex justify-center items-start p-2">
             <motion.div
               className="w-[6px] h-[6px] rounded-full bg-text-secondary"
               animate={{
                  y: [0, 18, 0], 
                  opacity: [1, 0.3, 1] 
               }}
               transition={{
                 duration: 1.5,
                 repeat: Infinity,
                 repeatType: "loop",
                 ease: "easeInOut"
               }}
             />
           </div>
           <span className="text-text-secondary text-xs mt-2 tracking-widest">SCROLL</span>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero;