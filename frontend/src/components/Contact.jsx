import React from 'react';
import { motion } from 'framer-motion';
import { FiMail } from 'react-icons/fi';
import { VscTerminal, VscClose, VscAdd } from 'react-icons/vsc';
import { EditorSection } from './syntax';
import { FileIcon } from './Shell';

const contacts = [
  { key: 'email', label: 'rendimardiyanto72@gmail.com', href: 'mailto:rendimardiyanto72@gmail.com' },
  { key: 'linkedin', label: 'linkedin.com/in/marcellinus-renditta', href: 'https://www.linkedin.com/in/marcellinus-renditta-4900a6312' },
  { key: 'github', label: 'github.com/Marcell-Git', href: 'https://github.com/Marcell-Git' },
];

const Prompt = ({ children }) => (
  <div>
    <span className="text-syn-tag">marcell@portfolio</span>
    <span className="text-muted">:</span>
    <span className="text-syn-prop">~</span>
    <span className="text-muted">$ </span>
    <span className="text-fg">{children}</span>
  </div>
);

// Each terminal block types in one after another once the panel scrolls into view
const line = {
  hidden: { opacity: 0, y: 4 },
  show: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <EditorSection id="contact" file="contact.sh" icon={<FileIcon name="contact.sh" />} className="border-b-0">
      <div className="max-w-[900px]">
        <h2 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Let's work together<span className="text-accent">.</span>
        </h2>
        <p className="text-fg/70 text-[1.05rem] max-w-[560px] mb-8">
          I'm currently open for new opportunities and collaborations. Whether you have a question or
          just want to say hi, my inbox is always open.
        </p>
        <a href="mailto:rendimardiyanto72@gmail.com" className="btn btn-primary mb-12">
          <FiMail /> Say hello
        </a>

        {/* Terminal panel */}
        <div className="rounded-md border border-line bg-panel overflow-hidden">
          <div className="h-9 flex items-center gap-5 px-4 border-b border-line font-mono text-[11px] tracking-wider text-muted">
            <span className="hidden sm:inline">PROBLEMS</span>
            <span className="hidden sm:inline">OUTPUT</span>
            <span className="text-fg border-b border-accent h-full flex items-center">TERMINAL</span>
            <span className="ml-auto flex items-center gap-3 text-sm">
              <span className="hidden sm:flex items-center gap-1 text-[11px]"><VscTerminal /> zsh</span>
              <VscAdd />
              <VscClose />
            </span>
          </div>

          <motion.div
            className="p-4 sm:p-5 font-mono text-[13px] sm:text-sm leading-7 space-y-1"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ staggerChildren: 0.35 }}
          >
            <motion.div variants={line}>
              <Prompt>whoami</Prompt>
              <div className="text-fg/75">Marcellinus Renditta Mardyanto — software engineer, open to work</div>
            </motion.div>

            <motion.div variants={line} className="pt-2">
              <Prompt>cat contact.txt</Prompt>
              {contacts.map((c) => (
                <div key={c.key} className="flex flex-wrap gap-x-2">
                  <span className="text-syn-const w-20 shrink-0">{c.key}</span>
                  <span className="text-muted">→</span>
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="text-syn-str underline decoration-dotted underline-offset-4 hover:text-white break-all"
                  >
                    {c.label}
                  </a>
                </div>
              ))}
            </motion.div>

            <motion.div variants={line} className="pt-2">
              <Prompt>echo "Let's build something great."</Prompt>
              <div className="text-fg/75">Let's build something great.</div>
            </motion.div>

            <motion.div variants={line} className="pt-2">
              <Prompt>
                <span className="inline-block w-2 h-4 bg-fg/80 align-middle cursor-blink" />
              </Prompt>
            </motion.div>
          </motion.div>
        </div>

        <p className="font-mono text-xs text-muted mt-12 mb-0">
          © {new Date().getFullYear()} Marcellinus Renditta Mardyanto · built with React + Vite
        </p>
      </div>
    </EditorSection>
  );
};

export default Contact;
