"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

// Placeholder insights - replace with actual Substack articles
const INSIGHTS = [
  {
    id: "1",
    title: "Why Most MVPs Fail (And How to Build One That Won't)",
    excerpt:
      "The myth of the minimum viable product has killed more startups than bad ideas. Here's what actually works.",
    date: "Coming Soon",
    readTime: "8 min read",
    link: "#", // Replace with actual Substack article URL
  },
  {
    id: "2",
    title: "Backend Architecture for Products That Scale",
    excerpt:
      "Choosing the wrong database or API pattern early costs months later. A practical guide to making the right calls.",
    date: "Coming Soon",
    readTime: "12 min read",
    link: "#",
  },
  {
    id: "3",
    title: "The Hidden Cost of Technical Debt",
    excerpt:
      "It's not the code you write today — it's the code you'll have to maintain for the next three years.",
    date: "Coming Soon",
    readTime: "6 min read",
    link: "#",
  },
];

export default function InsightsPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // TODO: Replace with actual Substack subscription endpoint or custom API
    // For now, just simulate success
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

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
              Insights
            </h1>
            <p className="text-base lg:text-lg text-neutral-600 max-w-2xl leading-relaxed">
              Thoughts on building products, systems, and software that matters.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="space-y-12">
            {INSIGHTS.map((insight, index) => (
              <motion.article
                key={insight.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={insight.link}
                  className="block group border-b border-neutral-200 pb-12 hover:border-blululu-red transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4 text-sm text-neutral-500">
                    <time>{insight.date}</time>
                    <span>•</span>
                    <span>{insight.readTime}</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-semibold text-blululu-black mb-3 group-hover:text-blululu-red transition-colors">
                    {insight.title}
                  </h2>
                  <p className="text-base text-neutral-600 leading-relaxed mb-4">
                    {insight.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-blululu-red font-semibold">
                    <span>Read more</span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-2 transition-transform"
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
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Subtle Subscribe Form */}
          <motion.div
            className="mt-32 pt-16 border-t border-neutral-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-xl lg:text-2xl font-semibold text-blululu-black mb-3">
                Stay Updated
              </h3>
              <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
                Get new insights delivered to your inbox. No spam, unsubscribe anytime.
              </p>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-4 px-6 bg-blululu-red/10 border border-blululu-red/20 rounded-2xl"
                >
                  <p className="text-blululu-red font-semibold">
                    Thanks for subscribing! Check your inbox.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    disabled={status === "loading"}
                    className="flex-1 px-6 py-4 rounded-full border-2 border-neutral-200 focus:border-blululu-red focus:outline-none text-blululu-black placeholder:text-neutral-400 transition-colors disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="px-8 py-4 bg-blululu-red text-white rounded-full font-semibold hover:bg-red-600 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blululu-red/30 hover:shadow-xl hover:shadow-blululu-red/40"
                  >
                    {status === "loading" ? "Subscribing..." : "Subscribe"}
                  </button>
                </form>
              )}

              <p className="text-sm text-neutral-400 mt-6">
                Or follow on{" "}
                <a
                  href="https://substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blululu-red hover:underline font-medium"
                >
                  Substack
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
