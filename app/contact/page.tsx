"use client";

import { useState } from "react";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import { BUDGET_RANGES, CONTACT_EMAIL } from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectDescription: "",
    budgetRange: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Something went wrong");
      }

      setStatus("success");
      setFormData({ name: "", email: "", projectDescription: "", budgetRange: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="pt-20 bg-[#0a0a0a] min-h-screen">
      {/* Hero */}
      <section className="py-20 lg:py-32 px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Let&apos;s Talk
            </h1>
          </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <p className="text-xl lg:text-2xl text-neutral-400 leading-relaxed mb-8">
              Tell us about your project and we&apos;ll get back to you within 24-48 hours.
            </p>
          </FadeIn>
          <FadeIn delay={0.4} direction="up">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-xl text-blululu-red hover:text-red-500 font-medium transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.3} direction="up">
            {status === "success" ? (
              <div className="bg-green-900/20 border-2 border-green-500/50 rounded-3xl p-12 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Message Sent!
                </h2>
                <p className="text-lg text-neutral-400 mb-8">
                  Thank you for reaching out. We&apos;ll review your message and get back to you within 24-48 hours.
                </p>
                <Button
                  onClick={() => setStatus("idle")}
                  variant="outline"
                  size="md"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-white mb-2 uppercase tracking-wider"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 text-lg border-2 border-white/15 bg-white/5 text-white placeholder:text-neutral-500 rounded-2xl focus:border-blululu-red focus:outline-none transition-colors"
                    placeholder="Your name"
                    disabled={status === "loading"}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-white mb-2 uppercase tracking-wider"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 text-lg border-2 border-white/15 bg-white/5 text-white placeholder:text-neutral-500 rounded-2xl focus:border-blululu-red focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    disabled={status === "loading"}
                  />
                </div>

                {/* Project Description */}
                <div>
                  <label
                    htmlFor="projectDescription"
                    className="block text-sm font-bold text-white mb-2 uppercase tracking-wider"
                  >
                    Tell us about your project *
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    required
                    value={formData.projectDescription}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-6 py-4 text-lg border-2 border-white/15 bg-white/5 text-white placeholder:text-neutral-500 rounded-2xl focus:border-blululu-red focus:outline-none transition-colors resize-none"
                    placeholder="What are you building? What challenges are you facing? What are your goals?"
                    disabled={status === "loading"}
                  />
                </div>

                {/* Budget Range */}
                <div>
                  <label
                    htmlFor="budgetRange"
                    className="block text-sm font-bold text-white mb-2 uppercase tracking-wider"
                  >
                    Budget Range (Optional)
                  </label>
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    className="w-full px-6 py-4 text-lg border-2 border-white/15 bg-white/5 text-white rounded-2xl focus:border-blululu-red focus:outline-none transition-colors"
                    disabled={status === "loading"}
                  >
                    <option value="" className="bg-[#0a0a0a]">Select a range</option>
                    {BUDGET_RANGES.map((range) => (
                      <option key={range} value={range} className="bg-[#0a0a0a]">
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Error Message */}
                {status === "error" && (
                  <div className="p-4 bg-red-900/20 border-2 border-red-500/50 rounded-2xl">
                    <p className="text-red-400 text-center font-medium">
                      {errorMessage}
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </Button>
                </div>

                {/* Microcopy */}
                <p className="text-sm text-neutral-500 text-center pt-4">
                  We usually reply within 24-48 hours.
                </p>
              </form>
            )}
          </FadeIn>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-20 lg:py-32 px-6 lg:px-8 bg-[#111]">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Prefer Email?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <p className="text-lg text-neutral-400 mb-8">
              You can also reach us directly at:
            </p>
          </FadeIn>
          <FadeIn delay={0.4} direction="up">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-block text-2xl lg:text-3xl font-bold text-blululu-red hover:text-red-500 transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
