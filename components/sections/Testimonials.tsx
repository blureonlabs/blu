"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote: "Blululu transformed our chaotic operations into a streamlined system. The ROI was evident within weeks.",
    author: "Sarah Chen",
    role: "CEO, TechFlow",
    metric: "60% efficiency gain",
  },
  {
    quote: "Finally, a studio that understands both design and complex backend architecture. Rare combination.",
    author: "Michael Rodriguez",
    role: "CTO, DataCore",
    metric: "0→$2M ARR",
  },
  {
    quote: "They don't just build what you ask for—they challenge assumptions and deliver what you actually need.",
    author: "Priya Sharma",
    role: "Founder, GrowthLabs",
    metric: "Launched in 8 weeks",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-gradient-to-br from-blululu-red via-red-600 to-blululu-red text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
            Client Results
          </h2>
          <p className="text-base lg:text-lg text-white/80 max-w-xl mx-auto">
            What happens when you work with the right partner
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-3xl p-8 lg:p-10 hover:bg-white/20 hover:border-white/40 transition-all duration-500 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative mb-6">
                <div className="text-4xl font-semibold text-white/30 mb-3 group-hover:text-white/50 transition-colors duration-300">"</div>
                <p className="text-base leading-relaxed text-white/90 group-hover:text-white transition-colors duration-300">
                  {testimonial.quote}
                </p>
              </div>

              <div className="relative space-y-3">
                <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 group-hover:bg-white/30 group-hover:scale-105 transition-all duration-300">
                  <p className="text-xs font-semibold text-white">
                    {testimonial.metric}
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-white text-base">{testimonial.author}</p>
                  <p className="text-sm text-white/70">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
