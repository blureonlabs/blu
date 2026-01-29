"use client";

import { motion } from "framer-motion";

const PRINCIPLES = [
  "Quality First",
  "Built to Last",
  "No Compromises",
];

export default function HowWeWork() {
  return (
    <section className="py-32 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-blululu-black mb-4">
            Our Approach
          </h2>
          <p className="text-base lg:text-lg text-neutral-600 max-w-2xl">
            Excellence in every detail
          </p>
        </motion.div>

        {/* Enhanced principles */}
        <div className="space-y-6">
          {PRINCIPLES.map((principle, index) => (
            <motion.div
              key={index}
              className="group relative bg-white border-2 border-neutral-200 rounded-3xl p-8 lg:p-12 hover:bg-blululu-red hover:border-blululu-red transition-all duration-500 cursor-default overflow-hidden shadow-lg shadow-neutral-900/5 hover:shadow-2xl hover:shadow-blululu-red/20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, x: 10 }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blululu-red/0 to-blululu-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex items-center gap-6">
                <span className="text-3xl lg:text-4xl font-semibold text-blululu-red/30 group-hover:text-white/40 transition-all duration-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-lg lg:text-xl font-medium text-blululu-black group-hover:text-white transition-colors duration-500">
                  {principle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image placeholder */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative aspect-[21/9] bg-gradient-to-br from-blululu-red/10 to-blululu-red/5 rounded-3xl overflow-hidden border border-neutral-200">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-blululu-red/20 rounded-full mx-auto flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-blululu-red"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-sm text-neutral-500 font-semibold">
                  1600 × 900px
                </p>
                <p className="text-xs text-neutral-400 mt-1">
                  Process Diagram
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
