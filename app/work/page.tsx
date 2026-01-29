"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const PHILOSOPHY = [
  {
    title: "Product Owners, Not Vendors",
    description:
      "You're not hiring a code factory. You're partnering with people who care about the product as much as you do. We ask questions, challenge assumptions, and push back when something doesn't make sense.",
  },
  {
    title: "Systems Over Features",
    description:
      "Most teams can build features. We build systems. That means thinking about architecture, data models, performance, and maintainability from day one.",
  },
  {
    title: "Long-Term Over Quick Hacks",
    description:
      "Technical debt is expensive. We'd rather spend an extra day getting the foundation right than patch problems six months later.",
  },
  {
    title: "We Say No When Needed",
    description:
      "Not every feature request is a good idea. We'll tell you when we think you're heading in the wrong direction — because we care about the outcome.",
  },
];

const EXPECTATIONS = [
  {
    title: "Honest Communication",
    description: "No jargon, no sugar-coating. We tell you what's working and what's not.",
  },
  {
    title: "Strategic Thinking",
    description: "We don't just build what you ask for — we help you figure out what you actually need.",
  },
  {
    title: "Clean Code",
    description: "Well-structured, maintainable, and documented. Code you can actually work with long-term.",
  },
  {
    title: "Post-Launch Support",
    description: "We don't disappear after deployment. We care about what happens after launch.",
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white via-neutral-50 to-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-semibold text-blululu-black mb-6 leading-tight">
              How We Work
            </h1>
            <p className="text-base lg:text-lg text-neutral-600 leading-relaxed max-w-2xl">
              Our approach is simple: think like product owners, build for the long term, and say no when needed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.h2
            className="text-3xl lg:text-4xl font-semibold text-blululu-black mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Philosophy
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PHILOSOPHY.map((item, index) => (
              <motion.div
                key={item.title}
                className="group p-8 bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-blululu-red rounded-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <h3 className="text-lg lg:text-xl font-semibold text-blululu-black mb-3 group-hover:text-blululu-red transition-colors">
                  {item.title}
                </h3>
                <p className="text-base text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.div
            className="mt-16 p-8 bg-gradient-to-br from-blululu-red to-red-600 rounded-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-lg lg:text-xl font-medium text-white leading-relaxed">
              "Build things you won't regret six months later."
            </p>
          </motion.div>
        </div>
      </section>

      {/* What You Can Expect */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.h2
            className="text-3xl lg:text-4xl font-semibold text-blululu-black mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What You Can Expect
          </motion.h2>

          <div className="space-y-8">
            {EXPECTATIONS.map((item, index) => (
              <motion.div
                key={item.title}
                className="flex gap-6 pb-8 border-b border-neutral-200 last:border-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blululu-red/10 flex items-center justify-center text-sm font-semibold text-blululu-red">
                  {index + 1}
                </span>
                <div className="flex-1 pt-1">
                  <h3 className="text-lg lg:text-xl font-semibold text-blululu-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-base text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-semibold text-blululu-black mb-4">
              Our Process
            </h2>
            <p className="text-base text-neutral-600 max-w-2xl mx-auto">
              From idea to launch, here's how we work together
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Deep dive into your business, goals, and technical requirements",
              },
              {
                step: "02",
                title: "Strategy",
                desc: "Architecture planning, tech decisions, and roadmap creation",
              },
              {
                step: "03",
                title: "Execution",
                desc: "Agile development with weekly updates and continuous delivery",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                className="relative p-6 bg-neutral-50 rounded-2xl border border-neutral-200 hover:border-blululu-red transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="text-4xl font-bold text-blululu-red/20 mb-3">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-blululu-black mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Visual Placeholder */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative aspect-[16/9] bg-gradient-to-br from-neutral-50 via-white to-neutral-100 rounded-2xl overflow-hidden border-2 border-neutral-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-blululu-red/10 rounded-2xl mx-auto flex items-center justify-center">
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
                  <p className="text-xs text-neutral-400">
                    Process Flow Diagram
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-semibold text-blululu-black mb-6 leading-tight">
              Sound like your kind of partner?
            </h2>
            <p className="text-base text-neutral-600 mb-10">
              Let's talk about your project.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Start a project
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
