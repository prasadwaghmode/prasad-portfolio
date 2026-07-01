/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { SERVICES_DATA } from '../data';

// Helper to map string to lucide-react icon component
function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (LucideIcons as any)[name];
  if (!IconComponent) return <LucideIcons.HelpCircle className={className} />;
  return <IconComponent className={className} />;
}

export default function Services() {
  return (
    <section id="services" className="relative py-28 overflow-hidden bg-[#030014] border-t border-neutral-950">
      {/* Visual background rings */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-20 items-center text-center">
          <span className="text-xs font-mono font-semibold tracking-[0.25em] text-blue-400 uppercase mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            05. SPECIALIZATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white mb-4">
            Services I <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-glow-blue">Provide</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-2xl glass-card flex flex-col justify-between h-full group bg-neutral-950/20 relative overflow-hidden border border-neutral-900 hover:border-blue-500/30 transition-all duration-300"
            >
              {/* Corner Glow Circle */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all pointer-events-none" />

              <div>
                {/* Service Icon */}
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-blue-400 group-hover:text-glow-blue group-hover:bg-blue-500/10 transition-all mb-6 shadow-[0_0_15px_rgba(59,130,246,0.08)]">
                  <ServiceIcon name={service.iconName} className="w-6 h-6" />
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-display font-bold text-white group-hover:text-glow-blue transition-all mb-3 leading-snug">
                  {service.title}
                </h3>

                {/* Service description */}
                <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Capabilities list */}
                <ul className="space-y-2.5 border-t border-neutral-900/60 pt-5">
                  {service.capabilities.map((cap, cIdx) => (
                    <li key={cIdx} className="flex items-center gap-2.5 text-xs text-neutral-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_5px_rgba(59,130,246,0.8)]" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Contact Trigger */}
              <div className="mt-8 flex items-center justify-end">
                <a
                  href="#contact"
                  className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 hover:text-white group-hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  Request Quote
                  <LucideIcons.ArrowRight size={12} className="group-hover:translate-x-1.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
