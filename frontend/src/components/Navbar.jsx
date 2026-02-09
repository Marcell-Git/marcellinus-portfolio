import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-primary-bg/90 backdrop-blur-md py-4 shadow-sm" : "py-6 bg-transparent"}`}
    >
      <div className="container flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold text-text-main tracking-tighter"
        >
          MRM<span className="text-accent"></span>
        </a>

        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-text-secondary hover:text-accent relative group text-[0.95rem] transition-colors"
            >
              {link.name}
              <span className="absolute w-0 h-[2px] bottom-[-4px] left-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-text-main"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-full left-0 right-0 bg-primary-bg p-8 shadow-lg flex flex-col items-center gap-6 border-t border-gray-100 md:hidden"
              initial={{ opacity: 0, y: -20, display: "none" }}
              animate={{ opacity: 1, y: 0, display: "flex" }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.1 } }}
              transition={{ duration: 0.2 }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium text-text-secondary hover:text-accent text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
