"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Marquee from "@/components/ui/Marquee";

const SERVICES = [
  {
    number: "01",
    title: "Product Development",
    tagline: "From zero to market leader",
    description:
      "We build MVPs and full-scale products that don't just launch—they scale. Backend-first architecture, clean code, and systems built to handle 10× growth from day one.",
    deliverables: [
      "Full-stack web applications",
      "Mobile apps (iOS & Android)",
      "API design & development",
      "Database architecture",
      "Cloud infrastructure setup",
    ],
    outcomes: "10-12 weeks to launch • Built for scale • Production-ready",
    icon: "🚀",
  },
  {
    number: "02",
    title: "Systems & Automation",
    tagline: "Eliminate operational chaos",
    description:
      "Internal tools and automation that save 60% of your team's time. We connect your tools, automate workflows, and build custom dashboards so you can focus on growth.",
    deliverables: [
      "Workflow automation (Zapier, n8n)",
      "Internal dashboards & tools",
      "Data pipelines & ETL",
      "AI-powered automation",
      "Third-party integrations",
    ],
    outcomes: "60% time saved • AI-enhanced • Zero maintenance",
    icon: "⚙️",
  },
  {
    number: "03",
    title: "Brand & Digital",
    tagline: "Presence that converts",
    description:
      "Premium websites, landing pages, and brand systems that position you as a leader. Fast, beautiful, and optimized for conversion—not just aesthetics.",
    deliverables: [
      "Brand identity & guidelines",
      "Marketing websites",
      "Landing pages (high-conversion)",
      "Design systems",
      "Performance optimization",
    ],
    outcomes: "Premium design • Fast delivery • Performance-first",
    icon: "✨",
  },
  {
    number: "04",
    title: "Strategic Advisory",
    tagline: "Clarity before code",
    description:
      "Tech strategy, architecture planning, and product roadmapping. We help you make the right technical decisions before you write a single line of code.",
    deliverables: [
      "Technology audits",
      "Architecture planning",
      "Product roadmapping",
      "Tech stack selection",
      "Build vs. buy analysis",
    ],
    outcomes: "C-level thinking • Tech strategy • ROI-focused",
    icon: "💡",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-white via-neutral-50 to-white overflow-hidden">
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-semibold text-blululu-black mb-6 leading-tight">
              Our Offerings
            </h1>
            <p className="text-base lg:text-lg text-neutral-600 max-w-2xl leading-relaxed">
              Four core offerings. All premium. All results-driven.
              <br />
              Built for clients who demand excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-12 bg-blululu-black overflow-hidden">
        <Marquee duration={40}>
          <span className="text-4xl lg:text-5xl font-black text-white tracking-tighter">
            PRODUCT • SYSTEMS • BRAND • STRATEGY •{" "}
          </span>
        </Marquee>
      </section>

      {/* Services - Editorial Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="space-y-32">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                  {/* Left Column - Content */}
                  <div className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-bold text-blululu-red tracking-wider">
                          {service.number}
                        </span>
                        <div className="h-px flex-1 bg-neutral-200" />
                      </div>

                      <h2 className="text-3xl lg:text-4xl font-semibold text-blululu-black group-hover:text-blululu-red transition-colors duration-300">
                        {service.title}
                      </h2>

                      <p className="text-base lg:text-lg font-medium text-neutral-500">
                        {service.tagline}
                      </p>

                      <p className="text-base text-neutral-600 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="pt-4">
                        <h3 className="text-sm font-bold text-blululu-black uppercase tracking-wider mb-4">
                          What You Get
                        </h3>
                        <ul className="space-y-3">
                          {service.deliverables.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-neutral-700"
                            >
                              <span className="text-blululu-red mt-1">→</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-6">
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-blululu-red/10 border border-blululu-red/20 rounded-full">
                          <span className="text-sm font-bold text-blululu-red">
                            {service.outcomes}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Visual */}
                  <div className={index % 2 === 0 ? "lg:order-2" : "lg:order-1"}>
                    <motion.div
                      className="relative aspect-square bg-gradient-to-br from-neutral-50 via-white to-neutral-100 rounded-3xl overflow-hidden border-2 border-neutral-200 shadow-xl shadow-neutral-900/10 group-hover:border-blululu-red group-hover:shadow-2xl group-hover:shadow-blululu-red/20 transition-all duration-500"
                      whileHover={{ scale: 1.02 }}
                    >
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blululu-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center space-y-6">
                          <motion.div
                            className="text-[150px] leading-none opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                            animate={{
                              y: [0, -10, 0],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            {service.icon}
                          </motion.div>
                          <div className="space-y-2">
                            <p className="text-7xl font-black text-blululu-red/20 group-hover:text-blululu-red/40 transition-colors duration-500">
                              {service.number}
                            </p>
                            <p className="text-sm text-neutral-500 font-semibold">
                              800 × 800px
                            </p>
                            <p className="text-xs text-neutral-400 mt-1">
                              Service Visual
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_ease-in-out]" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-32 bg-gradient-to-br from-neutral-50 via-white to-neutral-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-semibold text-blululu-black mb-4">
              Our Process
            </h2>
            <p className="text-base text-neutral-600 max-w-xl mx-auto">
              How we turn your vision into reality
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
                className="relative bg-white border-2 border-neutral-200 rounded-3xl p-8 hover:border-blululu-red transition-all duration-300 shadow-lg shadow-neutral-900/5 hover:shadow-xl hover:shadow-blululu-red/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl font-semibold text-blululu-red/30 mb-3">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-blululu-black mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-semibold mb-6 leading-tight">
              Ready to Build Something Great?
            </h2>
            <p className="text-base text-neutral-300 mb-10 max-w-xl mx-auto leading-relaxed">
              Book a consultation to discuss your project and get a custom
              proposal
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-blululu-red text-white rounded-full font-semibold text-lg hover:bg-red-600 transition-all hover:scale-105 shadow-lg shadow-blululu-red/30 hover:shadow-xl hover:shadow-blululu-red/40"
            >
              Book a Meeting →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
