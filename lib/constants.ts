export const SITE_NAME = "Blululu";
export const SITE_TAGLINE = "AI Native Studio";
export const CONTACT_EMAIL = "hello@blululu.in";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    number: "01",
    title: "Storytelling & Content",
    description:
      "Brand films, social content, visual campaigns, and narrative-driven assets — all produced with AI-native workflows. World-class output without the agency overhead.",
    image: "/images/storytelling.jpg",
  },
  {
    number: "02",
    title: "Products & Systems",
    description:
      "Custom AI models, internal tools, quality workflows, and automation systems. If AI can make it 10x better, we build it.",
    image: "/images/products.jpg",
  },
] as const;

export const DIFFERENTIATORS = [
  "AI isn't a department — it's the operating system.",
  "Output quality that competes with studios 10x our size.",
  "Dramatically lower costs, faster turnaround.",
  "We don't retrofit AI into old ways of working.",
] as const;

export const BUDGET_RANGES = [
  "Under $5,000",
  "$5,000 - $15,000",
  "$15,000 - $50,000",
  "$50,000+",
  "Prefer not to say",
] as const;
