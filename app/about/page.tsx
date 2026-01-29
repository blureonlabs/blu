import type { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About - Blululu Studios",
  description: "A two-person tech and design studio based in India, building products for the world.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up">
            <h1 className="text-5xl lg:text-7xl font-bold text-blululu-black mb-6">
              About Blululu Studios
            </h1>
          </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <p className="text-xl lg:text-2xl text-neutral-600 leading-relaxed">
              A tech-first studio that builds products and systems the right way.
              <br />
              No noise, no fluff — just solid work.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-32 px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <FadeIn direction="left">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-blululu-black mb-6">
                  Who We Are
                </h2>
                <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
                  <p>
                    Blululu Studios is a <strong className="text-blululu-black">two-person studio</strong> — one tech lead, one design lead. We&apos;re partner-led, which means every project gets direct attention from the people who actually care.
                  </p>
                  <p>
                    We don&apos;t outsource. We don&apos;t scale by adding junior developers. We keep the team small and the quality high.
                  </p>
                  <p>
                    We&apos;re based in <strong className="text-blululu-black">India</strong>, but we work with founders and teams <strong className="text-blululu-black">globally</strong>. Timezone-friendly, English-fluent, and used to async-first collaboration.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="right">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-blululu-black mb-6">
                  What We Believe
                </h2>
                <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
                  <p>
                    Most agencies talk about "partnership" but treat you like a ticket number. We actually give a damn about your product.
                  </p>
                  <p>
                    We believe in <strong className="text-blululu-black">deep work</strong>, not shallow hustle. We&apos;d rather spend time getting it right than rushing to hit artificial deadlines.
                  </p>
                  <p>
                    We believe software should be <strong className="text-blululu-black">maintainable, scalable, and honest</strong>. No black-box magic. No patchwork solutions. Just clean systems that you can actually understand and build on.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} direction="up">
            <div className="mt-16 p-8 lg:p-12 bg-blululu-black rounded-3xl">
              <p className="text-2xl lg:text-3xl font-bold text-white text-center leading-relaxed">
                &quot;Anyone can build features.
                <br />
                Very few can build <span className="text-blululu-red">systems that last</span>.&quot;
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn direction="up">
            <h2 className="text-4xl lg:text-5xl font-bold text-blululu-black mb-16 text-center">
              What Makes Us Different
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Partner-Led",
                description: "No account managers or junior teams. You work directly with the people building your product.",
              },
              {
                title: "Tech-First",
                description: "We're engineers who care about design, not designers who dabble in code.",
              },
              {
                title: "No BS",
                description: "We won't sell you things you don't need. We'll tell you when an idea is bad.",
              },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={0.1 * index} direction="up">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blululu-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-blululu-red">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-blululu-black mb-4">
                    {item.title}
                  </h3>
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <FadeIn direction="up">
            <h2 className="text-4xl lg:text-5xl font-bold text-blululu-black mb-12 text-center">
              Our Values
            </h2>
          </FadeIn>

          <div className="space-y-6">
            {[
              "Quality over speed",
              "Systems over features",
              "Honesty over politeness",
              "Long-term thinking over short-term wins",
              "Clarity over complexity",
            ].map((value, index) => (
              <FadeIn key={value} delay={0.1 * index} direction="left">
                <div className="flex items-center gap-6 p-6 lg:p-8 bg-white rounded-2xl border border-neutral-200 hover:border-blululu-red transition-colors">
                  <div className="w-3 h-3 rounded-full bg-blululu-red flex-shrink-0" />
                  <p className="text-xl lg:text-2xl font-medium text-blululu-black">
                    {value}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up">
            <h2 className="text-4xl lg:text-6xl font-bold text-blululu-black mb-8">
              Want to work together?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <p className="text-xl text-neutral-600 mb-12">
              Let&apos;s talk about your project and see if we&apos;re a good fit.
            </p>
          </FadeIn>
          <FadeIn delay={0.4} direction="up">
            <Button href="/contact" variant="primary" size="lg">
              Start a project
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
