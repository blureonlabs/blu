"use client";

import { motion } from "framer-motion";

export default function WhoWeWorkWith() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-blululu-black">
            We Work With Visionaries
          </h2>

          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-base text-neutral-600 leading-relaxed">
              Founders building something meaningful. Leaders who value quality over speed. Teams that understand good software takes time.
            </p>
            <p className="text-base text-neutral-600 leading-relaxed">
              If you're looking for the cheapest option, we're not it. If you want a partner who cares about the details — let's talk.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
