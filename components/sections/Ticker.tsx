"use client";

import { motion } from "framer-motion";

const TICKER_ITEMS = [
  "Brand Films",
  "AI Automation",
  "Visual Campaigns",
  "Content Systems",
  "Custom AI Models",
  "Social Content",
  "Product Design",
  "Workflow Automation",
];

export default function Ticker() {
  return (
    <section className="py-6 bg-blululu-red overflow-hidden">
      <div className="flex">
        <motion.div
          className="flex shrink-0 gap-0"
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={i}
              className="flex items-center shrink-0 text-sm lg:text-base font-bold text-white uppercase tracking-widest whitespace-nowrap"
            >
              {item}
              <span className="mx-6 lg:mx-8 w-2 h-2 bg-white/40 rounded-full" />
            </span>
          ))}
        </motion.div>
        <motion.div
          className="flex shrink-0 gap-0"
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={`dup-${i}`}
              className="flex items-center shrink-0 text-sm lg:text-base font-bold text-white uppercase tracking-widest whitespace-nowrap"
            >
              {item}
              <span className="mx-6 lg:mx-8 w-2 h-2 bg-white/40 rounded-full" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
