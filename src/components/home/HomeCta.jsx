// src/components/home/HomeCta.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function HomeCta({ onNavigate }) {
  const handleNavigation = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    },
  };

  return (
    <section className="bg-neutral-dark py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="space-y-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={item}
            className="text-5xl sm:text-6xl font-heading font-bold text-white mb-6 leading-tight"
          >
            Fix Your Brand Structure
          </motion.h2>

          <motion.p
            variants={item}
            className="text-neutral-light font-body text-xl mb-10 max-w-2xl mx-auto"
          >
            Ready to transform inconsistent digital efforts into a cohesive brand system? Start with a strategic audit.
          </motion.p>

          <motion.div
            variants={item}
            className="flex justify-center"
          >
            <button
              onClick={() => handleNavigation('contact')}
              className="bg-accent-teal hover:bg-opacity-90 text-white font-heading font-semibold py-4 px-8 rounded-lg transition duration-300 text-lg"
            >
              Start a Brand Audit
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}