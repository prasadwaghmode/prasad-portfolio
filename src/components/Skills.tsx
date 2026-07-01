/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Layout, Database, Cloud, Settings, Layers } from 'lucide-react';
import { SKILLS_DATA } from '../data';

const CATEGORIES = [
  // { id: 'all', label: 'All Stack', icon: <Layers size={14} /> },
  { id: 'frontend', label: 'Frontend', icon: <Layout size={14} /> },
  { id: 'backend', label: 'Backend / API', icon: <Cpu size={14} /> },
  { id: 'database', label: 'Databases', icon: <Database size={14} /> },
  { id: 'cloud', label: 'Cloud / DevOps', icon: <Cloud size={14} /> }
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('frontend');

  const filteredSkills = SKILLS_DATA.filter(
    (skill) => selectedCategory === 'all' || skill.category === selectedCategory || (selectedCategory === 'cloud' && skill.category === 'tools')
  );

  return (
    <section id="skills" className="relative py-28 overflow-hidden bg-[#030014] border-t border-neutral-950">
      {/* Background radial spotlights */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <span className="text-xs font-mono font-semibold tracking-[0.25em] text-blue-400 uppercase mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            02. TECH STACK
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white mb-4">
            Skills &amp; <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-glow-blue">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-14 border-b border-neutral-900 pb-6">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 border ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-purple-500/50 text-white shadow-[0_0_15px_rgba(168,85,247,0.25)]'
                    : 'bg-neutral-950/40 border-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-800'
                } clickable-glow`}
              >
                {cat.icon}
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={skill.name}
                whileHover={{ y: -5 }}
                className="p-5 rounded-2xl glass-card transition-all duration-300 group hover:bg-[#0b0525]/80 relative overflow-hidden flex flex-col justify-between"
                style={{
                  // Inject custom hover box-shadow via inline variables or inline styling on hover trigger
                  '--shadow-color': skill.color,
                } as React.CSSProperties}
              >
                {/* Custom glowing backdrop on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${skill.color.replace('0.6', '0.08')} 0%, transparent 70%)`,
                  }}
                />

                {/* Header: Name and Percentage */}
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <span className="font-display font-extrabold text-base tracking-tight text-white group-hover:text-glow-blue transition-all">
                    {skill.name}
                  </span>
                  <span className="font-mono text-xs font-semibold text-neutral-400 group-hover:text-white transition-colors">
                    {skill.percentage}%
                  </span>
                </div>

                {/* Progress Indicators */}
                <div className="relative w-full h-1.5 bg-neutral-950 border border-neutral-900 rounded-full overflow-hidden mb-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{
                      backgroundColor: skill.color.replace('0.6', '1'),
                      boxShadow: `0 0 10px ${skill.color}`,
                    }}
                  />
                </div>

                {/* Subtext info for aesthetics */}
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-neutral-600 relative z-10">
                  <span>LEVEL: {skill.percentage >= 90 ? 'EXPERT' : 'ADVANCED'}</span>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: skill.color.replace('0.6', '1') }} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Tech summary highlights (bento grid layout feel) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl glass-card bg-neutral-950/20 border border-neutral-900/60">
            <h4 className="text-sm font-display font-bold text-white mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 shadow-[0_0_8px_#f87171]" />
              Modular SPA Architecture
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Highly specialized in building performant Angular client modules. Fluent in component lifecycles, standalone APIs, lazy routes, RxJS stream reactivity, and customized SCSS styling.
            </p>
          </div>
          <div className="p-6 rounded-2xl glass-card bg-neutral-950/20 border border-neutral-900/60">
            <h4 className="text-sm font-display font-bold text-white mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              Secure API Integration
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Expert in drafting high-performance Node.js and Express REST endpoints. Seasoned with multi-layered JWT login architectures, request filtering, server CORS controls, and rate shielding.
            </p>
          </div>
          <div className="p-6 rounded-2xl glass-card bg-neutral-950/20 border border-neutral-900/60">
            <h4 className="text-sm font-display font-bold text-white mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa]" />
              Robust Database Engines
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Proficient in relational MySQL structural indexing and document-based MongoDB storage patterns. Experienced in resolving bottlenecks, partitioning tables, and deploying on AWS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
