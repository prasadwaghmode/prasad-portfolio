/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { Terminal, Download, ArrowDown, ChevronRight, Github, Linkedin, Mail } from 'lucide-react';
const avatarImg = "/images/developer_portrait_1782641896683.webp";

// Typing animation items
const TYPING_WORDS = [
  "Hi, I'm Prasad Waghmode From Pune, Maharashtra, India",
  "Full Stack Developer",
  "Angular | React.js | Node.js | AWS | MySQL"
];

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Mouse tilt states
  const containerRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-300, 300], [15, -15]), { damping: 20, stiffness: 200 });
  const rotateY = useSpring(useTransform(x, [-300, 300], [-15, 15]), { damping: 20, stiffness: 200 });

  // Canvas particle background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      alpha: number;
      decay: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.alpha = Math.random() * 0.5 + 0.1;
        this.decay = Math.random() * 0.001 + 0.0005;
        const colors = ['#3b82f6', '#a855f7', '#ec4899', '#ffffff'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > width) this.speedX *= -1;
        if (this.y < 0 || this.y > height) this.speedY *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.restore();
      }
    }

    const particles: Particle[] = Array.from({ length: 80 }, () => new Particle());

    // Connect particles
    const connect = () => {
      const maxDistance = 140;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.save();
            const opacity = (1 - distance / maxDistance) * 0.12;
            ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Radial background light source
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        100,
        width / 2,
        height / 2,
        width * 0.6
      );
      gradient.addColorStop(0, 'rgba(10, 5, 25, 0.4)');
      gradient.addColorStop(1, '#030014');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw moving lights
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      connect();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Typing effect logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = TYPING_WORDS[wordIdx];
    const speed = isDeleting ? 30 : 80;

    const handleType = () => {
      if (!isDeleting && typedText === currentWord) {
        timer = setTimeout(() => setIsDeleting(true), 2500); // Wait at end
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setWordIdx((prev) => (prev + 1) % TYPING_WORDS.length);
      } else {
        setTypedText(
          isDeleting
            ? currentWord.substring(0, typedText.length - 1)
            : currentWord.substring(0, typedText.length + 1)
        );
      }
    };

    timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIdx]);

  // Handle 3D Tilt Mouse tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* HTML5 Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Floating particles background (div-based, with delay and random float) */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 opacity-20 filter blur-[2px]"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -120, -20],
              x: [-10, 20, -10],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      {/* Big radial colored ambient glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-20 w-full pt-8 pb-16">
        {/* Left Side: Developer Info */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          {/* Tech Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-blue-500/30 text-xs font-mono font-medium text-blue-400 tracking-wider mb-6 shadow-[0_0_15px_rgba(59,130,246,0.15)] clickable-glow"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {/* PORTFOLIO ENGINE V20.0 • ONLINE */}
            AVAILABLE FOR FULL-TIME OPPORTUNITIES
          </motion.div>

          {/* Typing Title */}
          <div className="h-28 sm:h-24 md:h-20 lg:h-24 mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
              <span className="typing-cursor select-none bg-gradient-to-r from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
                {typedText}
              </span>
            </h1>
          </div>

          {/* Subtitle description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg mt-10 text-neutral-400 max-w-xl mb-10 font-normal leading-relaxed"
          >
I craft modern, high-performance web applications using Angular, React.js, and Node.js. Passionate about building responsive user interfaces, scalable backend services, and clean, maintainable solutions that deliver exceptional digital experiences.          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12"
          >
            <button
              onClick={scrollToContact}
              className="px-8 py-4 rounded-xl text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-[0_5px_20px_rgba(168,85,247,0.3)] hover:shadow-[0_5px_30px_rgba(168,85,247,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 clickable-glow"
            >
              Let's Connect
              <ChevronRight size={16} />
            </button>
            <button
              onClick={scrollToAbout}
              className="px-8 py-4 rounded-xl text-sm font-bold tracking-wider uppercase bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800/80 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 glass-card clickable-glow"
            >
              Learn More
              <ArrowDown size={16} className="animate-bounce" />
            </button>
          </motion.div>

          {/* Tech stack mini icons with names */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs font-mono text-neutral-500 uppercase tracking-widest border-t border-neutral-900 pt-6 w-full max-w-lg"
          >
            <span>Core Ecosystem:</span>
            <span className="px-2.5 py-1 rounded bg-red-950/20 border border-red-500/20 text-red-400">Angular</span>
            <span className="px-2.5 py-1 rounded bg-yellow-950/20 border border-yellow-500/20 text-yellow-400">React.js</span>
            <span className="px-2.5 py-1 rounded bg-blue-950/20 border border-blue-500/20 text-blue-400">NodeJS</span>
            <span className="px-2.5 py-1 rounded bg-amber-950/20 border border-amber-500/20 text-amber-500">AWS</span>
            <span className="px-2.5 py-1 rounded bg-cyan-950/20 border border-cyan-500/20 text-cyan-400">MySQL</span>
          </motion.div>
        </div>

        {/* Right Side: Animated 3D Portrait */}
        <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2 w-full">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-72 h-72 sm:w-85 sm:h-85 md:w-96 md:h-96 flex items-center justify-center cursor-pointer"
            style={{ perspective: 1000 }}
          >
            {/* BACKGROUND GRADIENT GLOWING RING */}
            <div className="absolute inset-4 rounded-full glow-ring opacity-70 blur-md pointer-events-none z-0" />

            {/* Inner Dark Mask to separate glow */}
            <div className="absolute inset-5 rounded-full bg-[#030014] z-0 pointer-events-none" />

            {/* FLOATING PARTICLES around the portrait */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-purple-400/60 shadow-[0_0_8px_rgba(168,85,247,0.8)] z-10"
                style={{
                  top: `${40 + Math.cos((i * 2 * Math.PI) / 8) * 45}%`,
                  left: `${40 + Math.sin((i * 2 * Math.PI) / 8) * 45}%`,
                }}
                animate={{
                  y: [-5, 5, -5],
                  x: [-3, 3, -3],
                  opacity: [0.3, 0.9, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2.5 + (i % 3),
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.2,
                }}
              />
            ))}

            {/* MAIN 3D TILT CONTAINER */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              animate={{
                y: [-6, 6, -6], // Idle floating
              }}
              transition={{
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
              className="relative w-64 h-64 sm:w-76 sm:h-76 md:w-88 md:h-88 rounded-full p-[3px] bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_40px_rgba(168,85,247,0.3)] z-10"
            >
              {/* Image Shell */}
              <div
                className="relative w-full h-full rounded-full overflow-hidden bg-[#0a0520] sweep-effect"
                style={{ transform: 'translateZ(20px)' }}
              >
                {/* Real Photo Image */}
                <img
                  src={avatarImg}
                  alt="Prasad Waghmode"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                />

                {/* Glass shadow effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Fine radar/coordinate tech scan lines (aesthetic) */}
                <div className="absolute inset-0 border border-white/5 rounded-full pointer-events-none" />
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-purple-500/10 pointer-events-none" />
                <div className="absolute top-0 left-1/2 w-[1px] h-full bg-purple-500/10 pointer-events-none" />
              </div>

              {/* Glowing Outline Ring (Extra depth) */}
              <div className="absolute -inset-[3px] rounded-full border border-blue-400/30 blur-[2px] pointer-events-none animate-pulse" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide down mouse navigation indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-neutral-500 z-20">
        <span className="text-[10px] font-mono tracking-[0.2em] uppercase">SCROLL TO DISCOVER</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-5 h-9 rounded-full border-2 border-neutral-700 p-1 flex justify-center"
        >
          <div className="w-1.5 h-2 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
