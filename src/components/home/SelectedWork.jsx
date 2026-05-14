import React from 'react';
import { motion } from 'framer-motion';

export default function SelectedWork() {
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
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6
      }
    },
  };

  const works = [
    {
      title: "Brand Identity Restructure",
      type: "System Redesign",
      description: "Completely rebuilt a brand's visual system after identifying 15 inconsistencies across their digital presence.",
      reasoning: "Started with audience research to understand perception gaps, then created a unified system that reduced confusion by 60%.",
      outcome: "Increased brand recognition and conversion rates."
    },
    {
      title: "Website Information Architecture",
      type: "Communication Flow",
      description: "Restructured a website's navigation and content hierarchy to prioritize user journey over aesthetics.",
      reasoning: "Mapped user behavior data to identify drop-off points, then redesigned the flow to guide visitors through value demonstration.",
      outcome: "40% improvement in time-on-site and engagement metrics."
    },
    {
      title: "Content Strategy Framework",
      type: "Messaging Alignment",
      description: "Developed a comprehensive content system that ensures all messaging supports core business objectives.",
      reasoning: "Analyzed existing content for gaps and inconsistencies, then built a framework that aligns tone, voice, and messaging across channels.",
      outcome: "More cohesive brand voice and improved audience trust."
    }
  ];

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
            Work & Thinking
          </h2>
          <p className="text-lg text-neutral-gray max-w-3xl mx-auto">
            Examples of strategic brand system development, showing the thinking process behind the outcomes.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {works.map((work, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white p-8 rounded-lg border border-neutral-gray/20 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                <span className="text-sm font-heading font-medium text-accent-teal uppercase tracking-wide">
                  {work.type}
                </span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-neutral-dark mb-4">
                {work.title}
              </h3>
              <p className="text-neutral-gray leading-relaxed mb-6">
                {work.description}
              </p>
              <div className="border-t border-neutral-gray/20 pt-4">
                <p className="text-sm font-heading font-semibold text-neutral-dark mb-2">
                  Strategic Reasoning:
                </p>
                <p className="text-sm text-neutral-gray italic mb-4">
                  {work.reasoning}
                </p>
                <p className="text-sm font-heading font-semibold text-accent-teal">
                  Outcome: {work.outcome}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}