/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      handleNext();
    }, 4500);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIdx]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIdx((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIdx((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = TESTIMONIALS_DATA[activeIdx];

  // Motion transitions
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 200, damping: 22 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 120 : -120,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: 'spring', stiffness: 200, damping: 22 },
        opacity: { duration: 0.3 }
      }
    })
  };

  return (
    <section id="testimonials" className="relative py-28 overflow-hidden bg-[#030014] border-t border-neutral-950">
      {/* Decorative gradient glowing spheres */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16 items-center text-center">
          <span className="text-xs font-mono font-semibold tracking-[0.25em] text-purple-400 uppercase mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
            06. RECOMMENDATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white mb-4">
            Client <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-glow-purple">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>

        {/* Carousel Container */}
        <div className="relative flex flex-col items-center">
          {/* Main testimonial glass card */}
          <div className="w-full relative h-[380px] sm:h-[300px] md:h-[260px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeTestimonial.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 p-8 sm:p-10 rounded-2xl glass-card flex flex-col justify-between h-full bg-neutral-950/20 shadow-xl overflow-hidden"
              >
                {/* Background watermarked quotes sign */}
                <div className="absolute top-6 right-8 text-neutral-900 pointer-events-none">
                  <Quote size={100} className="stroke-[0.5] opacity-20" />
                </div>

                {/* Rating stars and text comment */}
                <div className="relative z-10">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(activeTestimonial.rating)].map((_, starIdx) => (
                      <Star
                        key={starIdx}
                        size={14}
                        className="fill-amber-400 text-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-sm sm:text-base text-neutral-300 italic leading-relaxed font-normal mb-6">
                    "{activeTestimonial.comment}"
                  </p>
                </div>

                {/* Author Info block */}
                <div className="flex items-center gap-4 relative z-10 border-t border-neutral-900/60 pt-4">
                  {/* Client Avatar */}
                  <div className="w-11 h-11 rounded-full border border-purple-500/20 overflow-hidden shrink-0">
                    <img
                      src={activeTestimonial.avatar}
                      alt={activeTestimonial.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name and Designation */}
                  <div>
                    <h4 className="text-sm font-display font-bold text-white mb-0.5">
                      {activeTestimonial.name}
                    </h4>
                    <p className="text-xs text-neutral-500 font-medium">
                      {activeTestimonial.role} at <span className="text-neutral-400 font-semibold">{activeTestimonial.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls (Left/Right Arrows) */}
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-neutral-950/60 border border-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-800 hover:scale-105 active:scale-95 transition-all clickable-glow"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => {
                    setDirection(dotIdx > activeIdx ? 1 : -1);
                    setActiveIdx(dotIdx);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    dotIdx === activeIdx
                      ? 'w-6 bg-gradient-to-r from-blue-400 to-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]'
                      : 'w-1.5 bg-neutral-800 hover:bg-neutral-600'
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-neutral-950/60 border border-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-800 hover:scale-105 active:scale-95 transition-all clickable-glow"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
