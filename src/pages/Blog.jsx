// src/pages/Blog.jsx
import React from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';
import FinalCtaSection from '../components/home/FinalCtaSection';

export default function Blog({ onOpenProjectModal }) {
  const articles = [
    {
      id: 1,
      title: 'Why Brand Fragmentation Is Leaking Your Commercial Value',
      category: 'Brand Strategy',
      readTime: '6 min read',
      date: 'March 2025',
      summary: 'When your sales deck, digital presence, and social communication are created by separate entities with no shared rules, enterprise buyers instinctively hesitate. Here is how to diagnose fragmentation.',
    },
    {
      id: 2,
      title: 'The Five-Second Clarity Test: Does Your Website Pass?',
      category: 'Web Architecture',
      readTime: '4 min read',
      date: 'February 2025',
      summary: 'If a prospective partner cannot articulate what your company does and who it is for within five seconds of landing on your homepage, you are losing high-value pipeline.',
    },
    {
      id: 3,
      title: 'Design Systems As Durable Business Infrastructure',
      category: 'Systems Design',
      readTime: '8 min read',
      date: 'January 2025',
      summary: 'Why moving beyond ad-hoc graphics into reusable, systematic design tokens accelerates go-to-market speed and guarantees long-term brand equity.',
    },
    {
      id: 4,
      title: 'The Anatomy of a Modern Flagship Digital Presence',
      category: 'Digital Flagship',
      readTime: '5 min read',
      date: 'January 2025',
      summary: 'An inside look at how high-growth African enterprises structure their web platforms to compete confidently on the international stage.',
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8EF] pt-32 sm:pt-40">
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 border-b border-[#E8E3D5]">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-smotiva-carbon">
            <span className="w-2 h-2 rounded-full bg-smotiva-coral" />
            <span>Perspectives & Insights</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl font-bold text-smotiva-carbon tracking-tightest leading-tight">
            Clear thinking on <br />
            <span className="text-smotiva-blue">brand and digital growth.</span>
          </h1>

          <p className="font-body text-neutral-600 text-lg sm:text-xl leading-relaxed">
            Essays, frameworks, and strategic observations from the Smotiva studio on identity design, 
            web architecture, and commercial brand positioning.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((art) => (
            <article
              key={art.id}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E8E3D5] shadow-2xs hover:border-smotiva-blue hover:shadow-brand-card transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              onClick={onOpenProjectModal}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-3 py-1 rounded-full font-heading font-bold uppercase tracking-wider bg-[#FAF8EF] border border-[#E8E3D5] text-smotiva-coral">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-2 text-neutral-400 font-mono">
                    <Clock size={13} />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h2 className="font-heading text-2xl font-bold text-smotiva-carbon group-hover:text-smotiva-blue transition-colors leading-snug">
                  {art.title}
                </h2>

                <p className="font-body text-neutral-600 text-sm leading-relaxed">
                  {art.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E8E3D5] flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-500">
                  {art.date}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-heading font-bold text-smotiva-blue group-hover:text-smotiva-coral transition-colors">
                  <span>Read Essay</span>
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FinalCtaSection onStartProject={onOpenProjectModal} />
    </div>
  );
}
