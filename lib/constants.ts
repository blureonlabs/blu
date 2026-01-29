export const SITE_NAME = "Blululu Studios";
export const SITE_TAGLINE = "Tech-First Product & Systems Studio";
export const CONTACT_EMAIL = "hello@blululu.studio";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
] as const;

export const SERVICES = [
  {
    title: "MVP & Product Builds",
    description: "From idea to launch-ready product. We help founders turn ideas into real, scalable products — fast, but without cutting corners.",
    details: {
      whatItSolves: "You have an idea but need a reliable partner to build it properly from day one.",
      whatWeDeliver: [
        "Product discovery & scoping",
        "Backend-heavy MVPs",
        "Scalable architecture",
        "Clean UI + brand foundation",
        "Deployment-ready systems",
      ],
      bestFor: "Founders and startups ready to build their first product or validate a new idea",
      tagline: "You focus on the business. We handle the product.",
    },
  },
  {
    title: "Internal Systems & Automation",
    description: "We remove operational chaos. We design and build internal tools that automate workflows, reduce manual effort, and quietly improve efficiency — often using AI behind the scenes.",
    details: {
      whatItSolves: "Your business processes feel messy, manual, and inefficient.",
      whatWeDeliver: [
        "Custom internal dashboards",
        "Business automation",
        "Admin panels & CRMs",
        "Content & ops automation",
        "AI-assisted workflows (used invisibly, effectively)",
      ],
      bestFor: "Growing businesses drowning in operational complexity",
      tagline: "If your business feels messy, we fix the system — not just the surface.",
    },
  },
  {
    title: "Web & Brand Systems",
    description: "Not just websites. Systems with purpose. We build high-end websites and brand systems that actually do something — convert, explain, or support a product.",
    details: {
      whatItSolves: "You need a website that represents your product properly and actually works for your business.",
      whatWeDeliver: [
        "Brand identity",
        "Product websites",
        "Landing pages with intent",
        "Illustrations & visual systems",
        "Backend-powered sites where needed",
      ],
      bestFor: "Products and businesses that need more than a generic template",
      tagline: "We don't do generic brochure sites.",
    },
  },
  {
    title: "Product & Tech Consulting",
    description: "Founder-level thinking, on demand. Sometimes you don't need code — you need clarity.",
    details: {
      whatItSolves: "You're not sure what to build, how to build it, or whether your current approach is right.",
      whatWeDeliver: [
        "Product strategy",
        "MVP validation",
        "Tech stack decisions",
        "Architecture planning",
        "Build vs buy guidance",
      ],
      bestFor: "Founders and teams who need strategic guidance before committing to code",
      tagline: "Short engagements. High impact.",
    },
  },
] as const;

export const HOW_WE_WORK = [
  "We think like product owners, not vendors",
  "We care deeply about systems and scalability",
  "We choose long-term decisions over quick hacks",
  "We say no when something doesn't make sense",
] as const;

export const WHY_BLULULU = {
  intro: "Most teams can design. Most teams can code.",
  strengths: [
    "Understand the product",
    "Design with intention",
    "Build scalable systems",
    "And execute cleanly",
  ],
  conclusion: "That's where Blululu Studios lives.",
} as const;

export const WHO_WE_WORK_WITH = [
  "Founders & startups",
  "Growing businesses",
  "Creators & digital brands",
  "Teams building serious products",
] as const;

export const BUDGET_RANGES = [
  "Under $5,000",
  "$5,000 - $15,000",
  "$15,000 - $50,000",
  "$50,000+",
  "Prefer not to say",
] as const;
