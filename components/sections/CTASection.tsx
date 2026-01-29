"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function CTASection() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-blululu-black via-neutral-900 to-blululu-black text-white overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blululu-red/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blululu-red/10 rounded-full blur-[80px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center space-y-12">
          <motion.h2
            className="text-3xl lg:text-5xl font-semibold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready for Excellence?
          </motion.h2>

          <motion.p
            className="text-base lg:text-lg text-neutral-300 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Let's discuss your vision
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button href="/contact" variant="primary" size="lg">
              Get in touch
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
