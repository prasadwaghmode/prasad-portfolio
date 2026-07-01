/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Twitter, Terminal } from 'lucide-react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socialLinks = [
    { name: 'Email', icon: <Mail size={16} />, url: 'mailto:prasadwaghmode05@gmail.com' },
    { name: 'LinkedIn', icon: <Linkedin size={16} />, url: 'https://linkedin.com/in/prasad-waghmode-7355b3207' },
    { name: 'GitHub', icon: <Github size={16} />, url: 'https://github.com/prasadwaghmode?tab=repositories' },
    // { name: 'Twitter', icon: <Twitter size={16} />, url: 'https://twitter.com/prasad_dev' }
  ];

  return (
    <footer id="footer" className="relative bg-[#030014] border-t border-neutral-900 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left column: Logo & Copyright */}
        <div className="flex items-center gap-3">
          {/* <div className="w-8 h-8 rounded bg-gradient-to-tr from-blue-500 to-purple-500 p-[1px] flex items-center justify-center">
            <div className="w-full h-full bg-[#030014] rounded-[3px] flex items-center justify-center">
              <Terminal size={12} className="text-purple-400" />
            </div>
          </div> */}
            <div className="relative">
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 blur-md opacity-70 group-hover:opacity-100 transition-all"></div>

    <div className="relative w-10 h-10 rounded-xl border border-purple-500/30 bg-[#09051d] flex items-center justify-center">
      <span className="text-xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        &lt;/&gt;
      </span>
    </div>
  </div>
          <p className="text-xs text-neutral-500 font-mono tracking-wide">
            &copy; 2026 PRASAD WAGHMODE. ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Right column: Social connections */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-900/60 text-neutral-500 hover:text-white hover:border-neutral-800 hover:shadow-[0_0_10px_rgba(168,85,247,0.1)] transition-all flex items-center justify-center clickable-glow"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Floating Back-To-Top Trigger Button */}
      <div className={`fixed bottom-8 right-8 z-40 transition-all duration-300 ${showScrollTop ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-75 pointer-events-none'}`}>
        <button
          onClick={scrollToTop}
          className="p-3 rounded-xl bg-gradient-to-tr from-blue-500/20 to-purple-500/20 border border-purple-500/40 text-purple-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 shadow-[0_4px_15px_rgba(168,85,247,0.2)] hover:shadow-[0_4px_25px_rgba(168,85,247,0.5)] transition-all duration-300 flex items-center justify-center clickable-glow"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} className="animate-pulse" />
        </button>
      </div>
    </footer>
  );
}
