/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="relative min-h-screen bg-[#030014] text-neutral-100 overflow-x-hidden selection:bg-purple-500/30 selection:text-white">
      {/* Space-Age Trailing Custom Cursor */}
      <CustomCursor />

      {/* Sticky Glassmorphism Navigation */}
      <Navbar />

      {/* Full Stack Portfolio Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer & Scroll-To-Top trigger */}
      <Footer />
    </div>
  );
}
