/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const trailX = useSpring(cursorX, springConfig);
  const trailY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device supports fine pointers (mice)
    const mediaQuery = window.matchMedia('(pointer: coarse)');
    if (mediaQuery.matches) {
      return; // Disable on touch devices
    }

    setVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    // Track mouse movement
    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Dynamic scale when hovering clickable items
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.closest('[role="button"]') ||
          target.classList.contains('clickable-glow') ||
          target.closest('.clickable-glow'))
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!visible) return null;

  return (
    <>
      {/* Small Core Inner Dot */}
      <motion.div
        id="custom-cursor-dot"
        className="fixed top-0 left-0 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#3b82f6]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: hovered ? 1.5 : 1,
        }}
        transition={{ type: 'spring', damping: 15, stiffness: 300 }}
      />

      {/* Larger Outer Trailing Glowing Ring */}
      <motion.div
        id="custom-cursor-trail"
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 border border-purple-500/40 mix-blend-screen"
        style={{
          x: trailX,
          y: trailY,
          width: hovered ? '56px' : '24px',
          height: hovered ? '56px' : '24px',
          backgroundColor: hovered ? 'rgba(168, 85, 247, 0.1)' : 'transparent',
          boxShadow: hovered ? '0 0 16px rgba(168, 85, 247, 0.4)' : 'none',
        }}
        transition={{
          width: { type: 'spring', damping: 20, stiffness: 200 },
          height: { type: 'spring', damping: 20, stiffness: 200 },
          backgroundColor: { duration: 0.2 },
          boxShadow: { duration: 0.2 },
        }}
      />
    </>
  );
}
