// src/components/common/CaseStudyModal.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2, Layers, Compass, Code2, TrendingUp } from 'lucide-react';

export default function CaseStudyModal({ project, isOpen, onClose, onStartProject }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-smotiva-carbon/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-[#E8E3D5] overflow-hidden z-10 my-8 max-h-[92vh] flex flex-col"
        >
          {/* Header */}
          <div className="px-6 sm:px-8 py-5 border-b border-[#E8E3D5] flex items-center justify-between bg-[#FAF8EF] shrink-0">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider bg-smotiva-blue text-white">
                {project.category}
              </span>
              <span className="text-xs text-neutral-400">•</span>
              <span className="text-xs font-body font-medium text-neutral-600">{project.year}</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-neutral-500 hover:text-smotiva-carbon hover:bg-neutral-200/50 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
            
            {/* Project Hero Image Banner */}
            {project.image && (
              <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden relative border border-[#E8E3D5]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-smotiva-carbon/70 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-xs font-mono uppercase tracking-widest text-neutral-300 block mb-1">
                      {project.industry}
                    </span>
                    <span className="font-heading text-xl sm:text-2xl font-bold">
                      {project.client}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Title & Tagline */}
            <div>
              <h2 className="font-heading text-2xl sm:text-4xl font-bold text-smotiva-carbon tracking-tight mb-3">
                {project.title}
              </h2>
              <p className="font-heading text-lg sm:text-xl text-neutral-600 font-medium leading-snug">
                {project.tagline}
              </p>
            </div>

            {/* Metrics Bar */}
            {project.metrics && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-[#FAF8EF] border border-[#E8E3D5]">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="font-heading text-xl sm:text-2xl font-bold text-smotiva-blue">
                      {metric.value}
                    </div>
                    <div className="font-body text-xs text-neutral-600 uppercase tracking-wider">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Editorial Case Study Breakdown: Challenge, Thinking, Work, Result */}
            <div className="space-y-8">
              {/* The Challenge */}
              <div className="border-l-2 border-smotiva-coral pl-5 space-y-2">
                <div className="flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-widest text-neutral-500">
                  <Compass size={14} className="text-smotiva-coral" />
                  <span>The Challenge</span>
                </div>
                <p className="font-body text-neutral-700 text-sm sm:text-base leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* The Thinking */}
              <div className="border-l-2 border-smotiva-blue pl-5 space-y-2">
                <div className="flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-widest text-smotiva-blue">
                  <Layers size={14} className="text-smotiva-blue" />
                  <span>The Strategic Thinking</span>
                </div>
                <p className="font-body text-neutral-700 text-sm sm:text-base leading-relaxed">
                  {project.thinking}
                </p>
              </div>

              {/* The Work */}
              <div className="border-l-2 border-smotiva-ochre pl-5 space-y-3">
                <div className="flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-widest text-smotiva-carbon">
                  <Code2 size={14} className="text-smotiva-ochre" />
                  <span>The System Delivered</span>
                </div>
                <ul className="space-y-2.5">
                  {project.work.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-700">
                      <CheckCircle2 size={16} className="text-smotiva-blue shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* The Result */}
              <div className="border-l-2 border-smotiva-coral pl-5 space-y-2 bg-[#FAF8EF] p-5 rounded-r-2xl border-t border-b border-r border-[#E8E3D5]">
                <div className="flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-widest text-smotiva-coral">
                  <TrendingUp size={14} />
                  <span>The Commercial Result</span>
                </div>
                <p className="font-body text-smotiva-carbon text-sm sm:text-base leading-relaxed font-medium">
                  {project.result}
                </p>
              </div>
            </div>

            {/* Deliverables List */}
            {project.deliverables && (
              <div className="pt-4 border-t border-[#E8E3D5]">
                <div className="text-xs font-heading font-bold uppercase tracking-wider text-neutral-500 mb-3">
                  Delivered Assets & Documentation:
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.deliverables.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg text-xs font-body font-medium bg-[#FAF8EF] text-smotiva-carbon border border-[#E8E3D5]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="px-6 sm:px-8 py-5 border-t border-[#E8E3D5] flex items-center justify-between bg-[#FAF8EF] shrink-0">
            <span className="font-body text-xs text-neutral-500 hidden sm:inline">
              Every system is engineered bespoke for commercial scale.
            </span>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl border border-[#E8E3D5] text-sm font-heading font-bold text-neutral-700 hover:bg-neutral-200/50 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onStartProject();
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-smotiva-blue text-white text-sm font-heading font-bold hover:bg-smotiva-carbon transition-colors shadow-xs"
              >
                <span>Request Similar Transformation</span>
                <ArrowRight size={16} className="text-smotiva-coral" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
