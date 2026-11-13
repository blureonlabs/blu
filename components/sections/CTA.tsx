"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../ui/Button";

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const textScale = useTransform(scrollYProgress, [0.2, 0.6], [0.9, 1]);
  const blobScale = useTransform(scrollYProgress, [0, 1], [0.8, 1.4]);

  return (
    <section ref={sectionRef} className="relative py-36 lg:py-52 overflow-hidden bg-[#0a0a0a]">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blululu-red/30 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#100510] to-[#0a0a0a]" />

        {/* Animated blob */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blululu-red/10 rounded-full blur-[200px]"
          style={{ scale: blobScale }}
        />

        {/* IMAGE PLACEHOLDER */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.06]">
          <div className="text-center text-neutral-600">
            <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-xs font-mono">cta.jpg — 1920x800</p>
          </div>
        </div>
      </div>

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
      }} />

      <motion.div
        className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center"
        style={{ scale: textScale }}
      >
        <motion.p
          className="text-sm font-bold text-blululu-red uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let&apos;s create together
        </motion.p>

        {/* Headline with text reveal */}
        <div className="overflow-hidden mb-4">
          <motion.h2
            className="text-5xl lg:text-[6rem] xl:text-[8rem] font-bold text-white leading-[0.85] tracking-tighter"
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Ready to go
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h2
            className="text-5xl lg:text-[6rem] xl:text-[8rem] font-bold text-blululu-red leading-[0.85] tracking-tighter italic"
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            AI native?
          </motion.h2>
        </div>

        <motion.p
          className="text-xl lg:text-2xl text-neutral-400 mb-14 max-w-2xl mx-auto font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Whether it&apos;s a brand film, a content engine, or a custom AI
          system — let&apos;s make something that punches above its weight.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Button href="/contact" variant="primary" size="lg">
            Let&apos;s talk &rarr;
          </Button>
          <Button href={`mailto:hello@blululu.in`} variant="outline" size="lg">
            hello@blululu.in
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
