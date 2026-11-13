"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "../animations/FadeIn";
import { DIFFERENTIATORS } from "@/lib/constants";

const STATS = [
  { value: "10x", label: "Faster turnaround" },
  { value: "1/10", label: "The cost" },
  { value: "100%", label: "AI-native" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const bgRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

  return (
    <section ref={sectionRef} id="about" className="relative py-32 lg:py-44 bg-[#0a0a0a] overflow-hidden">
      {/* Parallax background accent */}
      <motion.div
        className="absolute -left-32 top-1/3 w-[500px] h-[500px] bg-blululu-red/5 rounded-full blur-[200px]"
        style={{ rotate: bgRotate }}
      />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section label */}
        <FadeIn>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-bold text-blululu-red uppercase tracking-widest">
              Why Blululu
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
        </FadeIn>

        {/* Headline with text reveal */}
        <div className="mb-20 max-w-4xl">
          <div className="overflow-hidden">
            <motion.h2
              className="text-4xl lg:text-7xl font-bold text-white leading-[0.9] tracking-tight"
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              AI isn&apos;t a feature.
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="text-4xl lg:text-7xl font-bold text-white leading-[0.9] tracking-tight"
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              It&apos;s the <span className="text-blululu-red italic">foundation.</span>
            </motion.h2>
          </div>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          {/* Image — parallax */}
          <motion.div
            className="lg:col-span-5 relative"
            style={{ y: imageY }}
          >
            <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden">
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-blululu-red/20 via-white/[0.06] to-transparent p-px">
                <div className="absolute inset-px rounded-[calc(2rem-1px)] bg-[#111]" />
              </div>

              {/* IMAGE PLACEHOLDER */}
              <div className="relative z-10 absolute inset-0 flex items-center justify-center">
                <div className="text-center text-neutral-700">
                  <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xs font-mono">about.jpg — 600x800</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 lg:-right-8 bg-blululu-red text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-xl shadow-blululu-red/20"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              Built with AI from day one
            </motion.div>
          </motion.div>

          {/* Text content */}
          <div className="lg:col-span-7 space-y-10 lg:pt-8">
            <motion.p
              className="text-xl lg:text-2xl text-neutral-300 leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              We&apos;re not an agency that bolted AI onto old workflows.
              We started with AI and built everything around it.
            </motion.p>

            <motion.p
              className="text-lg text-neutral-500 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Every piece of content we produce, every system we design, every
              product we ship — AI is woven into the process from day one. The
              result: world-class output at a fraction of the traditional cost.
            </motion.p>

            {/* Differentiators */}
            <div className="space-y-4 pt-4">
              {DIFFERENTIATORS.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                >
                  <span className="w-6 h-px mt-3 bg-blululu-red group-hover:w-10 transition-all duration-300 flex-shrink-0" />
                  <p className="text-base lg:text-lg font-medium text-neutral-300 group-hover:text-white transition-colors duration-300">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row — full width */}
        <motion.div
          className="grid grid-cols-3 gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl lg:rounded-3xl overflow-hidden group cursor-default"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-b from-white/[0.08] to-transparent p-px">
                <div className="absolute inset-px rounded-[calc(1rem-1px)] lg:rounded-[calc(1.5rem-1px)] bg-[#111] group-hover:bg-[#151515] transition-colors duration-500" />
              </div>

              <div className="relative z-10 p-6 lg:p-10 text-center">
                <p className="text-4xl lg:text-6xl font-bold text-blululu-red mb-2">{stat.value}</p>
                <p className="text-sm lg:text-base text-neutral-500">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
