"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "../animations/FadeIn";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={sectionRef} id="services" className="relative py-32 lg:py-44 bg-[#0a0a0a] overflow-hidden">
      {/* Parallax background element */}
      <motion.div
        className="absolute top-1/4 -right-32 w-[400px] h-[400px] bg-blululu-red/5 rounded-full blur-[150px]"
        style={{ y: bgY }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <FadeIn>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-bold text-blululu-red uppercase tracking-widest">
              What we do
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
        </FadeIn>

        <div className="mb-20">
          <div className="overflow-hidden">
            <motion.h2
              className="text-4xl lg:text-7xl font-bold text-white leading-[0.9] tracking-tight"
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Two things.
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="text-4xl lg:text-7xl font-bold text-blululu-red leading-[0.9] tracking-tight italic"
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Done right.
            </motion.h2>
          </div>
        </div>

        {/* Service cards — bento style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.number}
              className="group relative rounded-[2rem] overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/[0.08] to-transparent p-px">
                <div className="absolute inset-px rounded-[calc(2rem-1px)] bg-[#111]" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Image area */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#151515] to-[#111]">
                    {/* Hover glow */}
                    <motion.div
                      className="absolute inset-0 bg-blululu-red/0 group-hover:bg-blululu-red/5 transition-colors duration-700"
                    />

                    {/* IMAGE PLACEHOLDER */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-neutral-700 group-hover:text-neutral-600 transition-colors duration-500">
                        <svg className="w-14 h-14 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-xs font-mono">{service.image.split("/").pop()}</p>
                      </div>
                    </div>
                  </div>

                  {/* Number badge — floating */}
                  <motion.span
                    className="absolute top-5 left-5 text-xs font-bold text-blululu-red bg-[#0a0a0a]/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
                    whileHover={{ scale: 1.1 }}
                  >
                    {service.number}
                  </motion.span>

                  {/* Arrow icon on hover */}
                  <div className="absolute bottom-5 right-5 w-10 h-10 bg-white/0 group-hover:bg-blululu-red border border-white/10 group-hover:border-blululu-red rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                    <svg className="w-4 h-4 text-white/40 group-hover:text-white transition-colors duration-500 -rotate-45 group-hover:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Text content */}
                <div className="p-8 lg:p-10">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-blululu-red transition-colors duration-300 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-base text-neutral-500 group-hover:text-neutral-400 leading-relaxed transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Bottom accent line — expands on hover */}
                <div className="mx-8 lg:mx-10 mb-8">
                  <div className="h-px bg-white/5 relative overflow-hidden">
                    <motion.div className="absolute inset-y-0 left-0 w-0 group-hover:w-full bg-blululu-red transition-all duration-700" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
