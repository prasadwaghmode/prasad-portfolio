/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoaderProps {
  onComplete: () => void;
}

const MESSAGES = [
  'INITIALIZING QUANTUM FRAMEWORKS...',
  'CONNECTING SECURE PORTFOLIO DATABASES...',
  'OPTIMIZING HIGH-SPEED CLIENT ASSETS...',
  'ESTABLISHING SECURE AWS INTEGRATIONS...',
  'COMPILING PREMIUM EXPERIENCES...'
];

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [messageIdx, setMessageIdx] = useState(0);

  useEffect(() => {
    // Increment progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const diff = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + diff, 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Cycle messages based on progress
    if (progress < 25) setMessageIdx(0);
    else if (progress < 50) setMessageIdx(1);
    else if (progress < 75) setMessageIdx(2);
    else if (progress < 90) setMessageIdx(3);
    else setMessageIdx(4);
  }, [progress]);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        id="loader-container"
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          y: -100,
          transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
        }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030014]"
      >
        {/* Animated background stars */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12)_0%,transparent_60%)]" />

        <div className="relative z-10 flex flex-col items-center max-w-md px-6 text-center">
          {/* Futuristic Core Ring */}
          <div className="relative w-32 h-32 mb-10 flex items-center justify-center">
            {/* outer rotating gradient ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute inset-0 rounded-full border-t border-b border-transparent bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-80"
              style={{ padding: '2px', contentVisibility: 'auto' }}
            >
              <div className="w-full h-full bg-[#030014] rounded-full" />
            </motion.div>

            {/* middle ring counter rotating */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute inset-2 rounded-full border-l border-r border-transparent bg-gradient-to-br from-pink-500 to-blue-500 opacity-60"
              style={{ padding: '1.5px' }}
            >
              <div className="w-full h-full bg-[#030014] rounded-full" />
            </motion.div>

            {/* Center Logo Code Icon */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: [0.8, 1.05, 0.8] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="text-3xl font-display font-extrabold tracking-tight text-white flex items-center"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">PW</span>
            </motion.div>
          </div>

          {/* Loading Percentage */}
          <motion.h2 
            className="text-5xl font-mono font-bold tracking-tight mb-2 text-white"
          >
            {progress}%
          </motion.h2>

          {/* Progress Bar */}
          <div className="w-64 h-1.5 bg-neutral-900 rounded-full overflow-hidden mb-6 border border-neutral-800 relative">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
              style={{ width: `${progress}%` }}
              layoutId="loader-bar"
            />
          </div>

          {/* Action Logs */}
          <AnimatePresence mode="wait">
            <motion.p
              key={messageIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-xs font-mono text-neutral-400 tracking-widest uppercase h-4"
            >
              {MESSAGES[messageIdx]}
            </motion.p>
          </AnimatePresence>

          {/* Tech Spec Grid details */}
          <div className="mt-16 flex gap-6 text-[10px] font-mono text-neutral-600 uppercase tracking-wider">
            <div>HOST: CLOUD_RUN_PORT_3000</div>
            <div>•</div>
            <div>RUNTIME: REACT_TS_V19</div>
            <div>•</div>
            <div>SYSTEM: ONLINE</div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
