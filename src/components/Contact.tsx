/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Mail, MapPin, Phone, Github, Linkedin, CheckCircle, ShieldAlert, Navigation } from 'lucide-react';
import {sendEmail} from './../services/emaillService'
export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
// const API_URL = "https://script.google.com/macros/s/AKfycbw6XK_E7uhg7CXCMHSYJoG3k7ed90ig0k8QVIheXNhRI12ldNOTGSwHgWLYWmSLeoOrdA/exec";
  // const handleSubmit = async(e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!formData.name || !formData.email || !formData.message) return;

  //   setStatus('submitting');


  // try {
  //   const response = await fetch(API_URL, {
  //     method: "POST",
  //     body: JSON.stringify(formData),
  //   });

  //   const result = await response.json();
    
  //   if (result.success) {
  //     await sendEmail(formData);
  //   }
  // } catch (error) {
  //   console.error(error);
  // }
  //   // Simulate high-fidelity network sending
  //   setTimeout(() => {
  //     setStatus('success');
  //     setFormData({ name: '', email: '', subject: '', message: '' });

  //     // Reset to idle after a few seconds




  //     setTimeout(() => {
  //       setStatus('idle');
  //     }, 1000);
  //   }, 1000);
  // };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) return;
  const api_url = 'https://growora-crm-backend.onrender.com/api/v1/leads/ingest';
  setStatus("submitting");
  try {
    const response = await fetch(api_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-app-id": "GRW-8RIEL2RB",
        "x-api-key": "gr_live_beff73ed699a47d28ce083f544bcf7a596b2c143db921c9f" 
      },
      body: JSON.stringify({
        app_id: "GRW-8RIEL2RB", // Replace with your App ID
        api_key: "gr_live_beff73ed699a47d28ce083f544bcf7a596b2c143db921c9f",
        form_id: null,
        name: formData.name,
        email: formData.email,
        phone: "NULL",
        company: "NULL",
        source: "Website",
        custom_fields: {
          subject: formData.subject,
          message: formData.message,
        },
      }),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Failed to submit form");
    }

    // Optional: Send notification email
    await sendEmail(formData);

    setStatus("success");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setStatus("idle");
    }, 1000);
  } catch (error) {
    console.error(error);
    setStatus("error");
  }
};
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden bg-[#030014] border-t border-neutral-950">
      {/* Decorative glows */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <span className="text-xs font-mono font-semibold tracking-[0.25em] text-pink-400 uppercase mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.8)]" />
            07. CONNECT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white mb-4">
            Get In <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-glow-purple">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Cyber Map & Coordinates info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                Let's discuss your next breakthrough.
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-md">
                Have a job opportunity, a freelance project, or just want to say hello? Drop a line in the form. I'm usually responsive within a few hours.
              </p>
            </div>

            {/* Quick stats items */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-950/20 border border-neutral-900/60 max-w-sm">
                <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider">EMAIL</span>
                  <a href="mailto:prasadwaghmode05@gmail.com" className="block text-sm font-semibold text-neutral-200 hover:text-blue-400 transition-colors">
                    prasadwaghmode05@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-950/20 border border-neutral-900/60 max-w-sm">
                <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.1)]">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider">LOCATION</span>
                  <span className="block text-sm font-semibold text-neutral-200">Pune, Maharashtra, India</span>
                </div>
              </div>
            </div>

            {/* HIGH-TECH SCI-FI CUSTOM TARGET VECTOR MAP SECTION */}
            {/* <div className="relative h-64 w-full max-w-md rounded-2xl overflow-hidden border border-neutral-900/80 bg-neutral-950/40 map-grid flex flex-col justify-between p-4 shadow-xl">
              <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-40" />

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative">
                  <div className="w-3.5 h-3.5 rounded-full bg-purple-500 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.8)] relative z-10">
                    <Navigation size={8} className="text-white fill-white rotate-45" />
                  </div>
                  <div className="absolute top-0 left-0 w-3.5 h-3.5 rounded-full border border-purple-500/60 animate-ping" style={{ animationDuration: '3s' }} />
                  <div className="absolute top-0 left-0 w-3.5 h-3.5 rounded-full border border-blue-400/30 animate-ping" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }} />
                </div>

                <div className="absolute top-1/3 left-1/4 flex flex-col font-mono text-[9px] text-neutral-600 uppercase tracking-widest gap-0.5">
                  <span>LAT: 18.5204° N</span>
                  <span>LNG: 73.8567° E</span>
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-neutral-500 uppercase tracking-widest border-b border-neutral-900 pb-2">
                <span>ACTIVE_RADAR: CLOUD_LOCK</span>
                <span> Pune Core Node </span>
              </div>

              <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-neutral-500 uppercase tracking-widest border-t border-neutral-900 pt-2">
                <span>ZOOM: 1000m // MERCATOR</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  STABLE_CONN
                </span>
              </div>
            </div> */}
            <div className="relative h-64 w-full max-w-md rounded-2xl overflow-hidden border border-neutral-900/80 bg-neutral-950/40 map-grid flex flex-col justify-between p-4 shadow-xl">

  {/* Background Glow */}
  <div className="absolute inset-0 bg-radial-gradient opacity-40 pointer-events-none" />

  {/* Header */}
  <div className="relative z-10 flex items-center justify-between border-b border-neutral-900 pb-2">

    <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.8)]" />

      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
        ACTIVE_RADAR:
      </span>

      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-400">
        PRASAD_DEV
      </span>
    </div>

    <div className="flex items-center gap-2">
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
        NODE:
      </span>

      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-purple-400">
        PUNE • INDIA
      </span>
    </div>

  </div>

  {/* Radar */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

    <div className="relative">

      <div className="w-4 h-4 rounded-full bg-purple-500 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.9)] relative z-10">
        <Navigation
          size={9}
          className="text-white rotate-45"
        />
      </div>

      <div
        className="absolute inset-0 rounded-full border border-purple-500 animate-ping"
        style={{ animationDuration: '3s' }}
      />

      <div
        className="absolute inset-0 rounded-full border border-cyan-400 animate-ping"
        style={{
          animationDuration: '4.5s',
          animationDelay: '1.5s'
        }}
      />

    </div>

    {/* Info Panel */}
    <div className="absolute top-[28%] left-[18%] space-y-1">

      <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600">
        LAT : 18.5204° N
      </p>

      <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600">
        LNG : 73.8567° E
      </p>

      <div className="mt-3">

        <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-cyan-400">
          TARGET LOCK
        </p>

        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white">
          FULL STACK ENGINEER
        </p>

      </div>

    </div>

  </div>

  {/* Footer */}
  <div className="relative z-10 flex items-center justify-between border-t border-neutral-900 pt-2">

    <div className="flex flex-col">

      <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-neutral-500">
        MISSION STATUS
      </span>

      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-400">
        BUILDING DIGITAL EXPERIENCES
      </span>

    </div>

    <div className="flex items-center gap-2">

      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-400">
        STABLE_CONN
      </span>

    </div>

  </div>

</div>
          </div>

          {/* Right Side: Premium Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl glass-card bg-neutral-950/20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400">
                      Full Name <span className="text-pink-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      disabled={status === 'submitting' || status === 'success'}
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-950 border border-neutral-900 text-neutral-200 text-sm focus:outline-none focus:border-purple-500/80 focus:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300 disabled:opacity-50"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400">
                      Email Address <span className="text-pink-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      disabled={status === 'submitting' || status === 'success'}
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-950 border border-neutral-900 text-neutral-200 text-sm focus:outline-none focus:border-purple-500/80 focus:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300 disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Inquiry"
                    disabled={status === 'submitting' || status === 'success'}
                    className="w-full px-4 py-3.5 rounded-xl bg-neutral-950 border border-neutral-900 text-neutral-200 text-sm focus:outline-none focus:border-purple-500/80 focus:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300 disabled:opacity-50"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400">
                    Your Message <span className="text-pink-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your project, timeline, or requirements..."
                    disabled={status === 'submitting' || status === 'success'}
                    className="w-full px-4 py-3.5 rounded-xl bg-neutral-950 border border-neutral-900 text-neutral-200 text-sm focus:outline-none focus:border-purple-500/80 focus:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300 disabled:opacity-50 resize-none"
                  />
                </div>

                {/* Action status notification box */}
                <AnimatePresence mode="wait">
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex items-center gap-3 text-emerald-400 text-xs md:text-sm"
                    >
                      <CheckCircle size={18} className="shrink-0 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.3)]" />
                      <div>
                        <span className="font-bold">Transmission Successful!</span> Your message has been routed to Prasad. Thank you!
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-[0_4px_15px_rgba(168,85,247,0.3)] hover:shadow-[0_4px_25px_rgba(168,85,247,0.5)] transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 clickable-glow"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Routing Transmission...
                    </>
                  ) : status === 'success' ? (
                    'Sent Successfully'
                  ) : (
                    <>
                      Send Message
                      <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
