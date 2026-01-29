"use client";

import { motion } from "framer-motion";
import Marquee from "../ui/Marquee";

export default function WhyBlululu() {
  return (
    <section className="py-32 bg-gradient-to-br from-neutral-900 via-blululu-black to-red-950 text-white overflow-hidden">
      {/* Marquee */}
      <div className="mb-20">
        <Marquee duration={25} reverse>
          <span className="text-4xl lg:text-5xl font-semibold tracking-tight">
            EXCELLENCE • EXCELLENCE • EXCELLENCE •{" "}
          </span>
        </Marquee>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.p
          className="text-2xl lg:text-3xl font-semibold leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Premium Solutions.
          <br />
          Exceptional Results.
        </motion.p>

        <motion.div
          className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-base font-normal">
            For clients who demand the best
          </p>
        </motion.div>
      </div>
    </section>
  );
}
