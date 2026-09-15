// src/components/home/ClientFeedback.jsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Working with Smotiva was less like hiring a designer and more like hiring a strategist. They didn't just make things look better — they made our brand make sense.",
    name: "Tunde Oladipo",
    title: "CEO",
    company: "Innovate Hub",
    metric: "+62%",
    metricLabel: "brand recall increase",
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
    quote: "The system they built for us didn't just look polished — it actually communicates what we do. Our enterprise clients started understanding us without us having to explain anything.",
    name: "Chijioke Nnadi",
    title: "CTO",
    company: "Tech Solutions LTD",
    metric: "3×",
    metricLabel: "inbound deal quality",
  },
  {
    id: 4,
    quote: "Smotiva gave us something most studios can't — a brand that holds together across every touchpoint. Seamless, structured, and completely ours.",
    name: "Femi Adekunle",
    title: "Founder",
    company: "Propel Real Estate",
    metric: "100%",
    metricLabel: "cross-platform fidelity",
  },
];

const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 40 : -40,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (dir) => ({
    x: dir > 0 ? -40 : 40,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
  }),
};

export default function ClientFeedback() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [[active, direction], setActive] = useState([0, 0]);

  const paginate = (dir) => {
    setActive(([prev]) => [
      (prev + dir + testimonials.length) % testimonials.length,
      dir,
    ]);
  };

  // Auto-advance every 7 seconds when in view
  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => paginate(1), 7000);
    return () => clearInterval(id);
  }, [inView, active]);

  const current = testimonials[active];

  return (
    <section
      ref={ref}
      className="py-24 sm:py-32 border-b border-smotiva-border dark:border-neutral-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-14 border-b border-smotiva-border dark:border-neutral-800">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-heading font-semibold uppercase tracking-wider text-smotiva-blue">
              <span className="w-2 h-2 rounded-full bg-smotiva-blue" />
              <span>05 / Client Proof & Results</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-smotiva-charcoal dark:text-white leading-[1.12]">
              What structured branding actually produces.
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-lg border border-smotiva-border dark:border-neutral-700 flex items-center justify-center text-smotiva-charcoal dark:text-neutral-300 hover:bg-white dark:hover:bg-neutral-800 transition-colors"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-lg border border-smotiva-border dark:border-neutral-700 flex items-center justify-center text-smotiva-charcoal dark:text-neutral-300 hover:bg-white dark:hover:bg-neutral-800 transition-colors"
            >
              <ArrowRight size={16} />
            </button>

            {/* Pagination Indicators */}
            <div className="flex items-center gap-1.5 ml-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(([prev]) => [i, i > prev ? 1 : -1])}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active
                      ? 'w-6 bg-smotiva-blue'
                      : 'w-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Showcase Card */}
        <div className="pt-12">
          <div className="p-8 sm:p-12 lg:p-16 rounded-3xl border border-smotiva-border dark:border-neutral-800 bg-white dark:bg-neutral-900/50 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              
              {/* Quote Content */}
              <div className="lg:col-span-8 space-y-8">
                <Quote size={32} className="text-smotiva-coral/60" />

                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={active}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="space-y-6"
                  >
                    <blockquote className="font-heading text-xl sm:text-2xl lg:text-3xl font-normal leading-relaxed text-smotiva-charcoal dark:text-white">
                      "{current.quote}"
                    </blockquote>

                    <div className="flex items-center gap-4 pt-2">
                      <div className="w-11 h-11 rounded-lg bg-smotiva-cream dark:bg-neutral-800 border border-smotiva-border dark:border-neutral-700 flex items-center justify-center shrink-0 font-heading font-bold text-sm text-smotiva-blue dark:text-white">
                        {current.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-heading font-bold text-base text-smotiva-charcoal dark:text-white leading-tight">
                          {current.name}
                        </p>
                        <p className="font-body text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                          {current.title}, {current.company}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Metric Column */}
              <div className="lg:col-span-4 lg:border-l lg:border-smotiva-border lg:dark:border-neutral-800 lg:pl-12 flex flex-col justify-between space-y-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-6"
                  >
                    <div className="p-6 rounded-2xl bg-smotiva-cream dark:bg-neutral-800/60 border border-smotiva-border dark:border-neutral-700">
                      <span className="text-xs font-heading font-semibold uppercase tracking-wider text-smotiva-coral block mb-1">
                        Impact Recorded
                      </span>
                      <p className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-smotiva-charcoal dark:text-white">
                        {current.metric}
                      </p>
                      <p className="text-xs font-body text-neutral-600 dark:text-neutral-300 mt-1">
                        {current.metricLabel}
                      </p>
                    </div>

                    {/* Quick index switcher */}
                    <div className="space-y-2">
                      <span className="text-[11px] font-heading font-semibold uppercase tracking-wider text-neutral-400 block">
                        Client Index
                      </span>
                      <div className="space-y-1">
                        {testimonials.map((t, idx) => (
                          <button
                            key={t.id}
                            onClick={() => setActive(([prev]) => [idx, idx > prev ? 1 : -1])}
                            className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                              idx === active
                                ? 'bg-smotiva-blue text-white font-semibold'
                                : 'text-neutral-500 hover:text-smotiva-charcoal dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/40'
                            }`}
                          >
                            <span>{t.name}</span>
                            <span className="text-[10px] font-mono opacity-75">{t.company}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}