/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Briefcase, Building, Calendar, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 overflow-hidden bg-[#030014] border-t border-neutral-950">
      {/* Decorative colored lights */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-pink-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-20 items-center text-center">
          <span className="text-xs font-mono font-semibold tracking-[0.25em] text-pink-400 uppercase mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.8)]" />
            03. JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white mb-4">
            Professional <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-glow-purple">Timeline</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-neutral-800/80 pl-6 sm:pl-10 ml-2 sm:ml-6 space-y-12">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline dot nodes with glowing pulses */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 z-10">
                <div className="w-4 h-4 rounded-full bg-[#030014] border-2 border-purple-500 flex items-center justify-center relative shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <div className="absolute -inset-1.5 rounded-full bg-purple-500/20 animate-ping pointer-events-none" />
                </div>
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl glass-card transition-all duration-300 relative group-hover:bg-[#0b0525]/50 group-hover:border-purple-500/20 shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    {/* Role */}
                    <h3 className="text-lg sm:text-xl font-display font-extrabold text-white group-hover:text-glow-purple transition-all mb-1.5">
                      {exp.role}
                    </h3>
                    
                    {/* Company */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-neutral-300">
                      <Building size={14} className="text-purple-400" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  {/* Period badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-950/60 border border-neutral-900 text-xs font-mono text-neutral-400 self-start md:self-center">
                    <Calendar size={12} className="text-blue-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Narrative description */}
                <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-3 border-t border-neutral-900/60 pt-5">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-2">
                    Key Contributions &amp; Achievements
                  </div>
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 size={14} className="text-emerald-400 mt-1 shrink-0 shadow-[0_0_6px_rgba(52,211,153,0.3)]" />
                      <span className="leading-relaxed">{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
