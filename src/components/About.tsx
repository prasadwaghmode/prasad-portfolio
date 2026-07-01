/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Download, Github, Linkedin, Mail, Twitter, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data';
export default function About() {
  const socialLinks = [
    { name: 'GitHub', icon: <Github size={18} />, url: 'https://github.com/prasadwaghmode?tab=repositories', color: 'hover:text-white hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]' },
    { name: 'LinkedIn', icon: <Linkedin size={18} />, url: 'https://www.linkedin.com/in/prasad-waghmode-7355b3207', color: 'hover:text-blue-400 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]' },
    { name: 'Email', icon: <Mail size={18} />, url: 'mailto:prasadwaghmode05@gmail.com', color: 'hover:text-pink-400 hover:border-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]' },
    // { name: 'Twitter', icon: <Twitter size={18} />, url: 'https://x.com/Prasadw8421', color: 'hover:text-cyan-400 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]' }
  ];

  const personalDetails = [
    { icon: <MapPin size={16} className="text-purple-400" />, label: 'Location', value: 'Pune, Maharashtra, India' },
    { icon: <Calendar size={16} className="text-blue-400" />, label: 'Experience', value: '3+ Years' },
    { icon: <Award size={16} className="text-pink-400" />, label: 'Availability', value: 'Full-Time / Freelance' },
    { icon: <BookOpen size={16} className="text-emerald-400" />, label: 'Education', value: 'Bsc Computer Science' }
  ];

  return (
    <section id="about" className="relative py-28 overflow-hidden bg-[#030014]">
      {/* Visual Accents */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-10 w-40 h-40 bg-blue-600/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <span className="text-xs font-mono font-semibold tracking-[0.25em] text-purple-400 uppercase mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
            01. INTRODUCTION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-glow-purple">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Professional Narrative */}
          <div className="lg:col-span-7 flex flex-col">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-6">
          Engineering modern web applications with performance, scalability, and user experience at the core.
              {/* I code highly efficient backend systems and build pixel-perfect user experiences. */}
            </h3>
            
            <p className="text-neutral-400 mb-6 leading-relaxed">
              {/* Hello! I'm Prasad Waghmode, a dedicated Full Stack Developer with over 6 years of experience transforming complex ideas into reliable, scalable software solutions. My journey began with designing rich, modular Single Page Applications in Angular, and quickly evolved to building high-performance server architectures with Node.js and Express, coupled with fast, secure database management in MySQL and MongoDB. */}
            Hello! I'm Prasad Waghmode, a Full-Stack Developer with 3+ years of professional experience building enterprise-grade web applications using Angular, React.js, Node.js, and TypeScript. I specialize in developing scalable frontend architectures, secure backend services, and responsive user interfaces that deliver outstanding user experiences.
            </p>
            
            <p className="text-neutral-400 mb-8 leading-relaxed">
              {/* I'm passionate about clean TypeScript, secure JWT architectures, Docker containerization, and AWS hosting solutions. Whether structuring relational database schemas or refining animations for frictionless mobile browsing, I prioritize code performance and semantic accessibility. */}
            I'm passionate about building reliable software that is fast, scalable, and easy to maintain. Every project is an opportunity to improve performance, enhance usability, and create meaningful digital products that deliver long-term value.
            </p>

            {/* Quick Details List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {personalDetails.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl glass-card bg-neutral-950/20 border border-neutral-900">
                  <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800">
                    {detail.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider">
                      {detail.label}
                    </div>
                    <div className="text-sm font-semibold text-neutral-200">
                      {detail.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Resume Download */}
              <a
                // href="#contact"
                 href="/Prasad_Angular_Dev.pdf"
                  download="Prasad_Angular_Dev.pdf"
                className="w-full sm:w-auto px-6 py-4 rounded-xl text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-purple-500/40 text-purple-300 hover:text-white hover:border-purple-400 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 shadow-[0_0_15px_rgba(168,85,247,0.1)] hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 flex items-center justify-center gap-2.5 clickable-glow"
              >
                <Download size={14} />
                Download Resume
              </a>

              {/* Social links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl bg-neutral-950/40 border border-neutral-900 text-neutral-400 transition-all duration-300 hover:scale-[1.08] flex items-center justify-center ${social.color} clickable-glow`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Achievements Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6">
            {ACHIEVEMENTS_DATA.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl glass-card flex flex-col justify-between h-44 sm:h-48 group relative overflow-hidden"
              >
                {/* Glow ring in corner */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors pointer-events-none" />

                {/* Stat Icon */}
                <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-purple-400 group-hover:text-glow-purple transition-all shadow-[0_0_10px_rgba(168,85,247,0.05)]">
                  {idx === 0 && <span className="text-xs font-mono font-bold">YRS</span>}
                  {idx === 1 && <span className="text-xs font-mono font-bold">PROJ</span>}
                  {idx === 2 && <span className="text-xs font-mono font-bold">CERT</span>}
                  {idx === 3 && <span className="text-xs font-mono font-bold">RATG</span>}
                </div>

                {/* Big Stat Count */}
                <div>
                  <h4 className="text-3xl sm:text-4xl font-display font-black text-white flex items-baseline tracking-tight mb-1">
                    {item.count}
                    <span className="text-purple-400 font-bold ml-0.5">{item.suffix}</span>
                  </h4>
                  <div className="text-[11px] font-mono uppercase text-neutral-500 tracking-wider font-semibold mb-1">
                    {item.title}
                  </div>
                  <p className="text-[10px] sm:text-xs text-neutral-400 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
