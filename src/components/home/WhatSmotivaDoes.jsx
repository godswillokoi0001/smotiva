import React from 'react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    title: 'Brand Identity Systems',
    problem: 'Inconsistent logos, colors, and brand elements across platforms',
    outcome: 'A comprehensive visual framework that ensures brand recognition everywhere',
    focus: 'Structure over style'
  },
  {
    title: 'Digital Presence Systems',
    problem: 'Social media, ads, and online platforms that don\'t align with your brand',
    outcome: 'Cohesive digital experiences that reinforce your brand message consistently',
    focus: 'Cohesion over aesthetics'
  },
  {
    title: 'Website Communication Systems',
    problem: 'Websites that look good but fail to clearly communicate value and drive action',
    outcome: 'Strategic website architectures that guide visitors through your value proposition',
    focus: 'Clarity over complexity'
  },
  {
    title: 'Content & Messaging Structure',
    problem: 'Unclear messaging that doesn\'t resonate with your target audience',
    outcome: 'Organized content frameworks that align messaging with business objectives',
    focus: 'Strategy over volume'
  },
  {
    title: 'Growth Advisory Systems',
    problem: 'Brand efforts that don\'t translate into measurable business growth',
    outcome: 'Strategic guidance that leverages brand systems for sustainable growth',
    focus: 'Systems over tactics'
  }
];

export default function WhatSmotivaDoes() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    },
  };

  return (
    <section className="py-20 bg-neutral-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-heading font-bold text-neutral-dark mb-4">
            What Smotiva Builds
          </h2>
          <p className="text-lg text-neutral-gray max-w-3xl mx-auto">
            We create structured systems that transform fragmented digital efforts into cohesive brand experiences that drive results.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white p-10 rounded-lg border border-neutral-gray/20 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-heading font-bold text-neutral-dark mb-4">
                {service.title}
              </h3>
              <div className="mb-4">
                <p className="text-sm font-heading font-semibold text-neutral-gray uppercase tracking-wide mb-2">
                  Problem Solved
                </p>
                <p className="text-neutral-gray leading-relaxed mb-4">
                  {service.problem}
                </p>
              </div>
              <div className="mb-4">
                <p className="text-sm font-heading font-semibold text-accent-teal uppercase tracking-wide mb-2">
                  Outcome Created
                </p>
                <p className="text-neutral-dark leading-relaxed">
                  {service.outcome}
                </p>
              </div>
              <p className="text-sm font-heading font-medium text-accent-teal uppercase tracking-wide">
                {service.focus}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}