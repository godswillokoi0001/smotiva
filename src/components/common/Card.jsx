import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

/**
 * Card — Smotiva Brand Systems Studio
 *
 * Props:
 *  title       string              Card heading
 *  label       string              Small eyebrow label (optional)
 *  href        string              Makes card a link (optional)
 *  accent      boolean             Show teal left-border accent (optional)
 *  index       number              Stagger delay index (optional, 0–n)
 *  children    ReactNode           Body content
 */
export default function Card({
  title,
  label,
  href,
  accent = false,
  index = 0,
  children,
}) {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  // ── Subtle magnetic tilt on hover ──
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [2, -2]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-2, 2]), { stiffness: 200, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  const Tag = href ? 'a' : 'div';
  const linkProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative group"
      style={{ fontFamily: "'DM Sans', 'Inter', sans-serif", rotateX, rotateY, transformPerspective: 800 }}
    >
      <Tag
        {...linkProps}
        className={`
          relative block h-full overflow-hidden rounded-sm
          bg-[#111111] border border-white/[0.07]
          p-7 md:p-8
          transition-all duration-300
          hover:border-white/[0.14]
          hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]
          ${accent ? 'border-l-2 border-l-teal-400' : ''}
          ${href ? 'cursor-pointer' : ''}
        `}
      >
        {/* ── Gradient spotlight that follows intent ── */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            background: hovered
              ? 'radial-gradient(220px circle at 60% 30%, rgba(20,184,166,0.06) 0%, transparent 70%)'
              : 'radial-gradient(220px circle at 60% 30%, rgba(20,184,166,0) 0%, transparent 70%)',
          }}
          transition={{ duration: 0.4 }}
        />

        {/* ── Top teal line reveal on hover ── */}
        <span
          className="absolute top-0 left-0 right-0 h-px bg-teal-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
        />

        {/* ── Eyebrow label ── */}
        {label && (
          <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-teal-400 mb-4">
            {label}
          </p>
        )}

        {/* ── Title row ── */}
        {title && (
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3 className="text-[18px] md:text-[20px] font-medium leading-snug tracking-[-0.015em] text-white">
              {title}
            </h3>
            {href && (
              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="shrink-0 mt-1 text-white/20 group-hover:text-teal-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
              />
            )}
          </div>
        )}

        {/* ── Divider ── */}
        {title && (
          <div className="h-px bg-white/[0.06] mb-5 group-hover:bg-white/[0.1] transition-colors duration-300" />
        )}

        {/* ── Body content ── */}
        <div className="text-[14px] text-white/45 leading-relaxed group-hover:text-white/60 transition-colors duration-300">
          {children}
        </div>
      </Tag>
    </motion.div>
  );
}