import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import HowWeWork from "@/components/sections/HowWeWork";
import WhyBlululu from "@/components/sections/WhyBlululu";
import Testimonials from "@/components/sections/Testimonials";
import WhoWeWorkWith from "@/components/sections/WhoWeWorkWith";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <HowWeWork />
      <WhyBlululu />
      <Testimonials />
      <WhoWeWorkWith />
      <CTASection />
    </>
  );
}
