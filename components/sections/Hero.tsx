"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../ui/Button";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-[#0a0a0a]">
      {/* Video background */}
      <motion.div className="absolute inset-0" style={{ scale: videoScale }}>
        {/* VIDEO PLACEHOLDER — replace <div> with <video> when ready:
            <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>
        */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a0510] to-[#0a0a0a]">
          {/* Animated visual mesh while no video */}
          <motion.div
            className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-blululu-red/15 rounded-full blur-[200px]"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blululu-red/8 rounded-full blur-[180px]"
            animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0a0a0a]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/30" />
      </motion.div>

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
      }} />

      {/* Content */}
      <motion.div
        className="relative h-full flex items-end"
        style={{ y: textY, opacity }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-16 lg:pb-24 w-full">
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-semibold text-blululu-red backdrop-blur-md mb-8">
              <motion.span
                className="w-2 h-2 bg-blululu-red rounded-full"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              AI Native Studio
            </span>
          </motion.div>

          {/* Headline with staggered word reveal */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              className="text-[3rem] sm:text-[4.5rem] lg:text-[6.5rem] xl:text-[8.5rem] font-bold text-white leading-[0.85] tracking-tighter"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              Stories that <span className="text-blululu-red italic">move.</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-10">
            <motion.h1
              className="text-[3rem] sm:text-[4.5rem] lg:text-[6.5rem] xl:text-[8.5rem] font-bold text-white leading-[0.85] tracking-tighter"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              Systems that <span className="text-blululu-red italic">scale.</span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            className="text-lg lg:text-2xl text-neutral-400 max-w-2xl leading-relaxed font-light mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            We create high-leverage content and build AI-powered products —
            with the quality of a top studio and a fraction of the cost.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Button href="/contact" variant="primary" size="lg">
              Work with us &rarr;
            </Button>
            <Button href="#services" variant="outline" size="lg">
              See what we do
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 bg-white/40 rounded-full"
            animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blululu-red/40 to-transparent" />
    </section>
  );
}
