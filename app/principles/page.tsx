"use client";

import { motion } from "framer-motion";
import type { Metadata } from "next";

const PRINCIPLES = [
  {
    number: "01",
    title: "Build for What Comes After Launch",
    description:
      "Most projects fail six months post-launch because the code couldn't scale, the architecture was wrong, or no one thought about maintenance. We build like the product will 10× in a year — because it might.",
  },
  {
    number: "02",
    title: "Clarity Beats Speed",
    description:
      "Fast execution on a fuzzy idea wastes more time than deliberate planning. We slow down at the start to move faster later. Clear requirements, clear architecture, clear outcomes.",
  },
  {
    number: "03",
    title: "Systems Over Features",
    description:
      "Features decay. Systems compound. We don't build feature factories — we build architectures that make adding features trivial, reliable, and fast.",
  },
  {
    number: "04",
    title: "Decisions Matter More Than Code",
    description:
      "Choosing Postgres vs. MongoDB. Monolith vs. microservices. Server-side vs. client-side rendering. These aren't preferences — they're architecture-level bets. We help you make the right ones.",
  },
  {
    number: "05",
    title: "Backend First, Always",
    description:
      "A beautiful frontend on a broken backend is lipstick on a pig. We start with data models, APIs, infrastructure, and logic — then build the interface. Not the other way around.",
  },
  {
    number: "06",
    title: "Quiet Use of AI Is Better Than Loud Use",
    description:
      "AI is a tool, not a brand. We use it intelligently, internally, and strategically — to accelerate workflows, test logic, and optimize systems. But we don't sell 'AI-powered' as a feature unless it meaningfully transforms the product.",
  },
  {
    number: "07",
    title: "We Say No More Than We Say Yes",
    description:
      "Scope creep kills products. Adding every idea makes software bloated, slow, and unmaintainable. We're not here to say yes — we're here to say what matters.",
  },
  {
    number: "08",
    title: "Calm Execution Wins",
    description:
      "Urgency doesn't mean chaos. We don't do all-nighters, Slack at 2 AM, or 'move fast and break things.' We move fast and build things right. Sustainable pace. Professional execution. No drama.",
  },
];

export default function PrinciplesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white via-neutral-50 to-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-semibold text-blululu-black mb-6">
              Principles
            </h1>
            <p className="text-base lg:text-lg text-neutral-600 max-w-2xl leading-relaxed">
              How we think about building products, systems, and software that
              lasts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principles Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="space-y-16">
            {PRINCIPLES.map((principle, index) => (
              <motion.div
                key={principle.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-4 border-blululu-red pl-8 py-4"
              >
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-sm font-bold text-blululu-red tracking-wider">
                    {principle.number}
                  </span>
                  <h2 className="text-xl lg:text-2xl font-semibold text-blululu-black">
                    {principle.title}
                  </h2>
                </div>
                <p className="text-base text-neutral-600 leading-relaxed max-w-3xl">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 bg-gradient-to-br from-blululu-black via-neutral-900 to-blululu-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            className="text-5xl lg:text-7xl font-black leading-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Work with a team that
            <br />
            <span className="text-blululu-red">thinks different</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-blululu-red text-white rounded-full font-semibold text-lg hover:bg-red-600 transition-all hover:scale-105"
            >
              Book a Meeting →
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
