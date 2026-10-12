import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiMail } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Toolbox", href: "#skills" },
  { name: "Works", href: "#projects" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#home");

  // Highlight the tab of the section currently in view
  useEffect(() => {
    const sections = [...navLinks.map((l) => l.href), "#contact"]
      .map((h) => document.querySelector(h))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-paper/85 backdrop-blur-md border-b border-ink/10">
      <div className="container flex justify-between items-center h-14">
        <div className="hidden md:flex gap-1 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`mono-label flex items-center gap-1.5 px-3 py-1.5 transition-colors ${
                active === link.href ? "bg-yellow text-ink font-bold" : "text-ink-soft hover:text-ink"
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${active === link.href ? "bg-ink" : "bg-ink/40"}`} />
              {link.name}
            </a>
          ))}
        </div>

        <a href="#home" className="md:hidden font-display text-3xl leading-none">MRM</a>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex gap-1.5" aria-hidden="true">
            <span className="w-3.5 h-3.5 rounded-full bg-orange border border-ink/20" />
            <span className="w-3.5 h-3.5 rounded-full bg-pink border border-ink/20" />
            <span className="w-3.5 h-3.5 rounded-full bg-green border border-ink/20" />
          </div>
          <a
            href="#contact"
            className={`hidden md:flex mono-label items-center gap-1.5 border border-ink px-3 py-1.5 font-bold transition-colors ${
              active === "#contact" ? "bg-ink text-white" : "hover:bg-ink hover:text-white"
            }`}
          >
            <FiMail /> Contact
          </a>
          <button
            className="md:hidden text-ink p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-paper border-b border-ink/10 px-4 py-4 flex flex-col gap-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.1 } }}
            transition={{ duration: 0.2 }}
          >
            {[...navLinks, { name: "Contact", href: "#contact" }].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`mono-label px-3 py-3 ${active === link.href ? "bg-yellow font-bold" : "text-ink-soft"}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
