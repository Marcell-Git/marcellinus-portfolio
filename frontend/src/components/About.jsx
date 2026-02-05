import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

import aboutimg from '../assets/About.jpeg';

const aboutImage = "https://placehold.co/600x600/f3f4f6/1f2937?text=Developer+Workspace"; // Placeholder

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary-bg relative overflow-hidden" ref={ref}>
      <div className="container">
        <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
        >
            About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
               className="relative h-[300px] md:h-[400px] bg-gray-200 rounded-xl overflow-hidden shadow-lg"
               initial={{ opacity: 0, x: -50 }}
               animate={isInView ? { opacity: 1, x: 0 } : {}}
               transition={{ duration: 0.8, delay: 0.2 }}
            >
                {/* Fallback if image not loaded */}
                <img 
                  src={aboutimg} 
                  alt="Workspace" 
                  className="w-full h-full object-cover"
                  onError={(e) => {e.target.style.display='none'; e.target.parentElement.style.backgroundColor='#d1d5db'}} 
                />
            </motion.div>

            <motion.div 
               className=""
               initial={{ opacity: 0, x: 50 }}
               animate={isInView ? { opacity: 1, x: 0 } : {}}
               transition={{ duration: 0.8, delay: 0.4 }}
            >
                <div>
                   <p className="mb-6 text-[1.05rem] text-text-secondary leading-loose">
                       Hi there! I'm Marcellinus Renditta Mardyanto, an 8th-semester Informatics student passionate about Software Engineering. 
                       Currently in the final stages of my academic journey, I have spent my university years diving deep into web development and building applications that solve real problems.
                   </p>
                   <p className="mb-6 text-[1.05rem] text-text-secondary leading-loose">
                       My expertise focuses on full-stack development. I enjoy the creative freedom of <strong>React.js</strong> on the frontend and the structured robustness of <strong>Laravel</strong> on the backend. 
                       I believe that code should not only work but be clean, scalable, and maintainable.
                   </p>
                   <p className="mb-6 text-[1.05rem] text-text-secondary leading-loose">
                       As I approach graduation, I am eager to transition into the professional world. I am actively seeking opportunities to apply my technical skills, contribute to impactful projects, and continue growing as a developer.
                   </p>
                </div>

                <div className="flex gap-12 mt-8 border-t border-gray-200 pt-8">
                    <div className="text-center">
                        <h3 className="text-4xl text-accent font-bold mb-1">2+</h3>
                        <p className="text-sm font-medium text-text-secondary m-0">Years Coding</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-4xl text-accent font-bold mb-1">10+</h3>
                        <p className="text-sm font-medium text-text-secondary m-0">Projects Completed</p>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
