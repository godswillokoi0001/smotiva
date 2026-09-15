// src/pages/Projects.jsx
import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle, X, ChevronRight } from 'lucide-react';
import { caseStudies } from '../data/brandData';
import CtaSection from '../components/home/CtaSection';

export default function Projects({ onOpenProjectModal }) {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <div className="w-full pt-32 sm:pt-40">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 border-b border-inherit">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-heading font-semibold uppercase tracking-wider text-smotiva-coral">
            Selected Work
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-smotiva-charcoal dark:text-white leading-[1.08]">
            Work that moves businesses forward.
          </h1>
          <p className="font-body text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
            Every project represents a commercial challenge solved with clear thinking, disciplined design, and robust technology.
          </p>
        </div>
      </section>

      {/* Editorial Case Studies Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 border-b border-inherit">
        <div className="divide-y divide-smotiva-border dark:divide-neutral-800">
          {caseStudies.map((project, idx) => (
            <div 
              key={project.id}
              className="py-16 sm:py-20 first:pt-4 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center group"
            >
              {/* Project Visual Frame */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div 
                  onClick={() => setActiveModalProject(project)}
                  className="cursor-pointer overflow-hidden rounded-2xl border border-smotiva-border dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 aspect-[16/10] relative shadow-xs"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-900/90 text-white text-xs font-heading font-medium px-4 py-2 rounded-md inline-flex items-center gap-1.5 shadow-lg">
                      View Case Details <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </div>

              {/* Narrative & Details */}
              <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-neutral-400">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-heading font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                      {project.industry}
                    </span>
                  </div>
                  <h2 
                    onClick={() => setActiveModalProject(project)}
                    className="cursor-pointer font-heading text-2xl sm:text-3xl font-bold text-smotiva-charcoal dark:text-white group-hover:text-smotiva-blue transition-colors"
                  >
                    {project.title}
                  </h2>
                </div>

                <div className="text-xs font-heading font-semibold text-smotiva-coral uppercase tracking-wide">
                  {project.category}
                </div>

                <p className="font-body text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {project.summary}
                </p>

                {/* Key Deliverables */}
                <div className="pt-2">
                  <span className="text-xs font-heading font-semibold uppercase tracking-wider text-neutral-400 block mb-2">
                    Delivered
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.deliverables.map((item, i) => (
                      <span 
                        key={i}
                        className="text-xs px-2.5 py-1 rounded-md border border-smotiva-border dark:border-neutral-800 text-smotiva-charcoal dark:text-neutral-300 bg-white dark:bg-neutral-900/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-heading font-semibold text-smotiva-blue inline-flex items-center gap-1 hover:underline"
                  >
                    Read challenge and thinking <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study Detail Modal */}
      {activeModalProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setActiveModalProject(null)}
        >
          <div 
            className="bg-white dark:bg-neutral-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-neutral-200 dark:border-neutral-800 p-6 sm:p-10 shadow-2xl space-y-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b pb-6 border-neutral-200 dark:border-neutral-800">
              <div className="space-y-1">
                <span className="text-xs font-heading uppercase tracking-wider text-smotiva-blue font-semibold">
                  {activeModalProject.industry} • {activeModalProject.year}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {activeModalProject.category}
                </p>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            {/* Image */}
            <div className="aspect-[16/9] rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-950">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Challenge & Thinking */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              <div className="space-y-2">
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-400">
                  The Challenge
                </h4>
                <p className="font-body text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {activeModalProject.challenge}
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-400">
                  Strategic Thinking
                </h4>
                <p className="font-body text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {activeModalProject.thinking}
                </p>
              </div>
            </div>

            {/* Deliverables Delivered */}
            <div className="space-y-3 pt-2 border-t border-neutral-200 dark:border-neutral-800">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-400">
                Deliverables & System Components
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeModalProject.work.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                    <CheckCircle size={14} className="text-smotiva-blue shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex justify-between items-center">
              <button
                onClick={() => {
                  setActiveModalProject(null);
                  onOpenProjectModal();
                }}
                className="px-6 py-3 rounded-lg bg-smotiva-blue text-white font-heading font-semibold text-xs hover:opacity-95 transition-opacity"
              >
                Start a project like this →
              </button>
              <button
                onClick={() => setActiveModalProject(null)}
                className="text-xs text-neutral-500 hover:underline font-body"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <CtaSection onStartProject={onOpenProjectModal} />
    </div>
  );
}
