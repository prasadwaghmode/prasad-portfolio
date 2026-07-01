/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Code, ArrowRight, ShieldCheck, Cpu, X } from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-28 overflow-hidden bg-[#030014] border-t border-neutral-950">
      {/* Decorative background glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <span className="text-xs font-mono font-semibold tracking-[0.25em] text-purple-400 uppercase mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
            04. FEATURED WORK
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white mb-4">
            Recent <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-glow-purple">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl glass-card overflow-hidden flex flex-col justify-between h-full bg-neutral-950/20 relative"
            >
              {/* Image Hesader with Zoom effect */}
              <div className="relative h-56 w-full overflow-hidden border-b border-neutral-900/40">
                <div className="absolute inset-0 bg-neutral-900 animate-pulse pointer-events-none" />
                <img
                  src={proj.image}
                  alt={proj.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#030014]/80 backdrop-blur-md border border-purple-500/20 text-[10px] font-mono uppercase text-purple-300">
                  <Cpu size={10} className="text-purple-400" />
                  {proj.role}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-display font-extrabold text-white group-hover:text-glow-purple transition-all mb-3 leading-snug">
                    {proj.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-neutral-400 mb-5 line-clamp-3 leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-neutral-950 text-[10px] font-mono border border-neutral-900 text-neutral-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {proj.technologies.length > 4 && (
                      <span className="px-2.5 py-1 rounded bg-neutral-950 text-[10px] font-mono border border-neutral-900 text-purple-400">
                        +{proj.technologies.length - 4} More
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center gap-3 border-t border-neutral-900 pt-5">
                  <button
                    onClick={() => setActiveProject(proj)}
                    className="flex-grow px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-center flex items-center justify-center gap-1.5 clickable-glow"
                  >
                    View Details
                    <ArrowRight size={12} />
                  </button>
                  {/* <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-800 transition-all clickable-glow"
                    title="View Source Code"
                  >
                    <Github size={16} />
                  </a> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* POPUP DETAIL MODAL FOR ACTIVE PROJECT */}
      <AnimatePresence>
        {activeProject && (
          <div id="project-detail-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark blur background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-[#030014]/90 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="relative w-full max-w-3xl bg-[#09051c] border border-purple-500/20 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh] md:max-h-[85vh]"
            >
              {/* Top Banner Image */}
              <div className="relative h-48 md:h-64 w-full shrink-0 border-b border-neutral-900">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09051c] to-transparent opacity-90" />

                {/* Close Button */}
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 border border-white/10 text-neutral-400 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X size={16} />
                </button>

                {/* Banner Header */}
                <div className="absolute bottom-4 left-6 pr-6">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#030014]/80 backdrop-blur-md border border-purple-500/20 text-[10px] font-mono uppercase text-purple-300 mb-2">
                    <Code size={10} className="text-purple-400" />
                    ROLE: {activeProject.role}
                  </div>
                  <h3 className="text-xl md:text-3xl font-display font-extrabold text-white">
                    {activeProject.title}
                  </h3>
                </div>
              </div>

              {/* Scrollable Modal Content */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6">
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-2">
                    PROJECT OVERVIEW
                  </h4>
                  <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
                    {activeProject.longDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-3">
                    CORE SYSTEM FEATURES
                  </h4>
                  <div className="space-y-3">
                    {activeProject.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs md:text-sm text-neutral-300">
                        <ShieldCheck size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-3">
                    DEVELOPED ECOSYSTEM STACK
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-neutral-950 text-xs font-mono border border-neutral-900 text-neutral-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Buttons */}
              <div className="p-6 border-t border-neutral-900 bg-[#060314] flex items-center justify-end gap-3 shrink-0">
                {/* <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl text-xs font-semibold tracking-wider uppercase bg-neutral-950 border border-neutral-900 text-neutral-300 hover:text-white transition-all flex items-center gap-2 clickable-glow"
                >
                  <Github size={14} />
                  Codebase
                </a> */}
                <a
                  href={activeProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_4px_15px_rgba(168,85,247,0.3)] hover:shadow-[0_4px_25px_rgba(168,85,247,0.5)] transition-all flex items-center gap-2 clickable-glow"
                >
                  <ExternalLink size={14} />
                  Launch Live Demo
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
