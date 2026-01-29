"use client";

import { motion } from "framer-motion";
import Marquee from "../ui/Marquee";
import Link from "next/link";

const SERVICES = [
  { title: "Product Development", emoji: "🚀" },
  { title: "Systems & Automation", emoji: "⚙️" },
  { title: "Brand & Web", emoji: "✨" },
  { title: "Strategic Consulting", emoji: "💡" },
];

export default function ServicesOverview() {
  return (
    <section className="py-32 bg-gradient-to-br from-neutral-900 via-blululu-black to-neutral-900 text-white overflow-hidden">
      {/* Marquee text */}
      <div className="mb-20">
        <Marquee duration={30}>
          <span className="text-4xl lg:text-5xl font-semibold tracking-tight">
            EXPERTISE • EXPERTISE • EXPERTISE •{" "}
          </span>
        </Marquee>
      </div>

      {/* Services grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href="/services">
                <motion.div
                  className="group relative bg-white/5 backdrop-blur-md border-2 border-white/10 rounded-3xl p-12 hover:bg-white/15 hover:border-white/20 transition-all duration-500 cursor-pointer overflow-hidden shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-blululu-red/20"
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blululu-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute top-6 right-6 text-6xl opacity-20 group-hover:opacity-50 transition-all duration-500 group-hover:scale-110">
                    {service.emoji}
                  </div>
                  <div className="relative z-10">
                    <span className="text-sm font-bold text-blululu-red mb-4 block">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-3xl lg:text-4xl font-bold mb-4 group-hover:text-blululu-red transition-colors">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-2 text-neutral-400 group-hover:text-white transition-colors">
                      <span className="text-sm font-medium">Explore</span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-2 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
