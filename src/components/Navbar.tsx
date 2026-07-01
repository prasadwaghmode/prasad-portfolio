/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Terminal } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Services', id: 'services' },
  { label: 'Contact', id: 'contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll handler for background and active section
  useEffect(() => {
    const handleScroll = () => {
      // Background scroll
      setScrolled(window.scrollY > 20);

      // Active section calculation
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        id="main-nav-header"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled ? 'glass-nav py-3 shadow-[0_10px_30px_rgba(3,0,20,0.8)]' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Initials */}
          {/* <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 font-display font-black text-2xl tracking-tight text-white hover:opacity-90 group relative"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 p-[1.5px] flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.3)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all">
              <div className="w-full h-full bg-[#030014] rounded-[7px] flex items-center justify-center">
                <Terminal size={16} className="text-purple-400 group-hover:text-blue-400 transition-colors" />
              </div>
            </div>
            <span className="bg-gradient-to-r from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent group-hover:text-glow-purple transition-all duration-300">
              PRASAD<span className="font-light text-neutral-400">.DEV</span>
            </span>
          </button> */}

          <button
  onClick={() => scrollToSection('home')}
  className="group flex items-center gap-3"
>
  <div className="relative">
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 blur-md opacity-70 group-hover:opacity-100 transition-all"></div>

    <div className="relative w-11 h-11 rounded-xl border border-purple-500/30 bg-[#09051d] flex items-center justify-center">
      <span className="text-xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        &lt;/&gt;
      </span>
    </div>
  </div>

  <div className="leading-none">
    <h2 className="text-2xl font-black tracking-wide text-white">
      PRASAD
      <span className="font-light text-purple-400">.DEV</span>
    </h2>

    <p className="text-[9px] tracking-[0.35em] uppercase text-gray-500">
      Full Stack Developer
    </p>
  </div>
</button>

          {/* Desktop Nav Items */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 relative rounded-md ${
                    isActive ? 'text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-glow-indicator"
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-md border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                    />
                  )}
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot-indicator"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Hire Me CTA Button */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-[0_4px_15px_rgba(168,85,247,0.3)] hover:shadow-[0_4px_25px_rgba(168,85,247,0.65)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
          >
            Hire Me
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-purple-400 transition-colors p-1"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[70px] z-30 md:hidden border-b border-purple-950/40 shadow-2xl glass-nav overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`py-3 px-4 text-left font-medium tracking-wide rounded-lg transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-950/40 to-purple-950/40 text-white border-l-2 border-purple-500'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_#a855f7]" />
                    )}
                  </button>
                );
              })}
              <button
                onClick={() => scrollToSection('contact')}
                className="mt-2 w-full py-3.5 rounded-xl text-center font-bold text-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              >
                Let's Talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
