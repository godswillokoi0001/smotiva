// src/components/home/ClientFeedback.jsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Working with Smotiva was less like hiring a designer and more like hiring a strategist. They didn't just make things look better — they made our brand make sense.",
    name: "Tunde Oladipo",
    title: "CEO",
    company: "Innovate Hub",
    metric: "+62%",
    metricLabel: "brand recall",
  },
  {
    id: 2,
    quote: "Their digital strategy didn't start with aesthetics — it started with clarity. That shift in thinking led to a 40% increase in conversions within the first quarter.",
    name: "Aisha Bello",
    title: "Marketing Director",
    company: "Grace Foods",
    metric: "+40%",
    metricLabel: "conversions in Q1",
  },
  {
    id: 3,
    quote: "The system they built for us didn't just look polished — it actually communicates what we do. Our clients started understanding us better without us having to explain anything.",
    name: "Chijioke Nnadi",
    title: "CTO",
    company: "Tech Solutions LTD",
    metric: "3×",
    metricLabel: "inbound quality",
  },
  {
    id: 4,
    quote: "Smotiva gave us something most studios can't — a brand that holds together across every touchpoint. Seamless, structured, and completely ours.",
    name: "Femi Adekunle",
    title: "Founder",
    company: "Propel Real Estate",
    metric: "100%",
    metricLabel: "cross-platform consistency",
  },
];

const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (dir) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0,
    transition: { duration: 0.35, ease: [0.76, 0, 0.24, 1] },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.1 },
  }),
};

export default function ClientFeedback() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [[active, direction], setActive] = useState([0, 0]);

  const paginate = (dir) => {
    setActive(([prev]) => [
      (prev + dir + testimonials.length) % testimonials.length,
      dir,
    ]);
  };

  // Auto-advance
  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => paginate(1), 6000);
    return () => clearInterval(id);
  }, [inView, active]);

  const current = testimonials[active];

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden"
      style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative max-w-[1320px] mx-auto px-6 lg:px-10">

        {/* ── Section header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0}
          >
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-teal-400 mb-4">
              Client Results
            </p>
            <h2 className="text-[38px] md:text-[50px] font-light leading-[1.06] tracking-[-0.025em] text-white">
              What structured branding<br />
              <span className="text-white/30 italic">actually produces.</span>
            </h2>
          </motion.div>

          {/* Navigation controls — top right on desktop */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={1}
            className="flex items-center gap-3 md:pb-1"
          >
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              className="group w-11 h-11 rounded-sm border border-white/[0.1] flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all duration-200"
            >
              <ArrowLeft size={16} strokeWidth={1.5} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
            </button>
            <button
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              className="group w-11 h-11 rounded-sm border border-white/[0.1] flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all duration-200"
            >
              <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>

            {/* Progress dots */}
            <div className="flex items-center gap-2 ml-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(([prev]) => [i, i > prev ? 1 : -1])}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === active
                      ? 'w-5 h-1.5 bg-teal-400'
                      : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Main testimonial block ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={2}
          className="grid md:grid-cols-12 gap-8 md:gap-0"
        >
          {/* Left: Quote */}
          <div className="md:col-span-8 md:pr-16 relative overflow-hidden">
            {/* Large decorative quote mark */}
            <span
              className="absolute -top-4 -left-2 text-[120px] leading-none text-white/[0.04] font-serif select-none pointer-events-none"
              aria-hidden="true"
            >
              "
            </span>

            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={active}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                {/* Quote text */}
                <blockquote className="text-[22px] md:text-[28px] font-light leading-[1.45] tracking-[-0.01em] text-white/80 mb-10">
                  "{current.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-5">
                  {/* Avatar placeholder — initials */}
                  <div className="w-11 h-11 rounded-sm bg-white/[0.06] border border-white/[0.08] flex items-center justify-center shrink-0">
                    <span className="text-[13px] font-semibold text-white/50 tracking-wide">
                      {current.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-[15px] font-medium text-white leading-tight">{current.name}</p>
                    <p className="text-[13px] text-white/35 mt-0.5">
                      {current.title}, {current.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Metric + index — vertical divider on desktop */}
          <div className="md:col-span-4 md:border-l md:border-white/[0.06] md:pl-16 flex flex-col justify-between gap-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } }}
                exit={{ opacity: 0, y: -16, transition: { duration: 0.25 } }}
              >
                {/* Metric stat */}
                <div className="mb-8">
                  <p className="text-[52px] md:text-[64px] font-light leading-none tracking-[-0.03em] text-white">
                    {current.metric}
                  </p>
                  <p className="text-[12px] tracking-[0.1em] uppercase text-white/30 mt-2">
                    {current.metricLabel}
                  </p>
                </div>

                {/* Thin separator */}
                <div className="h-px bg-white/[0.06] mb-8" />

                {/* All clients index — compact list */}
                <ul className="space-y-3">
                  {testimonials.map((t, i) => (
                    <li key={t.id}>
                      <button
                        onClick={() => setActive(([prev]) => [i, i > prev ? 1 : -1])}
                        className={`text-left w-full transition-colors duration-200 ${
                          i === active ? 'text-white' : 'text-white/25 hover:text-white/50'
                        }`}
                      >
                        <span className="text-[13px] font-medium">{t.name}</span>
                        <span className="text-[12px] ml-2 text-white/20">{t.company}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
}