# Blululu Studios Website

A modern, premium tech-first product and systems studio website built with Next.js 15, Tailwind CSS, and Framer Motion.

## Features

- **Modern Tech Stack**: Next.js 15 (App Router), TypeScript, Tailwind CSS v4
- **Smooth Animations**: Framer Motion for premium interactions
- **Fully Responsive**: Mobile-first design with hamburger navigation
- **Contact Form**: Functional form with Resend email integration
- **SEO Optimized**: Metadata and OpenGraph tags on all pages
- **Performance**: Optimized with Next.js image optimization and font loading

## Pages

1. **Home** - Hero, services overview, how we work, why Blululu, who we work with, CTA
2. **Services** - Detailed breakdown of all four services
3. **Work** - Philosophy and approach to building products
4. **About** - Studio story, values, and what makes us different
5. **Contact** - Contact form with validation and email delivery

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Resend API key (for contact form)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd blu
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=hello@blululu.studio
```

To get a Resend API key:
1. Sign up at [resend.com](https://resend.com)
2. Go to API Keys section
3. Create a new API key
4. Update the `from` email in `lib/email.ts` with your verified domain

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
blu/
├── app/                      # Next.js 15 App Router
│   ├── layout.tsx           # Root layout with Navbar/Footer
│   ├── page.tsx             # Homepage
│   ├── services/            # Services page
│   ├── work/                # Work/Approach page
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── api/contact/         # Contact form API route
│   └── globals.css          # Global styles + Tailwind config
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ServiceCard.tsx
│   ├── sections/            # Homepage sections
│   │   ├── Hero.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── HowWeWork.tsx
│   │   ├── WhyBlululu.tsx
│   │   ├── WhoWeWorkWith.tsx
│   │   └── CTASection.tsx
│   └── animations/
│       └── FadeIn.tsx       # Reusable animation wrapper
├── lib/
│   ├── constants.ts         # Site constants and content
│   └── email.ts             # Email sending utility
└── public/
    └── logos/               # Logo assets
```

## Design System

### Colors

- **Primary**: `#ea0737` (Blululu Red)
- **Black**: `#0a0a0a`
- **White**: `#ffffff`
- **Neutral**: 50-900 scale

### Typography

- **Font**: Inter (from Google Fonts)
- **Headline Scale**: text-5xl to text-8xl
- **Body**: text-lg to text-2xl

### Components

All components follow a consistent design language:
- Rounded corners (2xl, 3xl, full)
- Generous padding and spacing
- Smooth hover effects
- Focus states for accessibility

## Scripts

```bash
# Development
npm run dev          # Start dev server with Turbopack

# Production
npm run build        # Build for production
npm start            # Start production server

# Linting
npm run lint         # Run ESLint
```

## Contact Form Setup

The contact form requires a Resend API key. To set it up:

1. Get your API key from [resend.com](https://resend.com)
2. Add it to `.env.local`
3. Verify a domain in Resend (or use their test domain)
4. Update the `from` email in `lib/email.ts`

For development/testing, you can use Resend's default `onboarding@resend.dev` domain.

## Customization

### Update Brand Colors

Edit `app/globals.css`:

```css
:root {
  --blululu-red: #ea0737;  /* Change to your brand color */
  /* ... */
}
```

### Update Content

All content is centralized in `lib/constants.ts`:
- Services
- Navigation links
- Company info
- Contact details

### Add New Pages

1. Create a new folder in `app/`
2. Add a `page.tsx` file
3. Update navigation in `lib/constants.ts`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

Build the project:
```bash
npm run build
```

The output will be in the `.next` folder. Deploy according to your platform's Next.js hosting guide.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Resend API key for sending emails | Yes |
| `CONTACT_EMAIL` | Email address to receive form submissions | Yes |

## Performance

- Next.js Image Optimization for logos
- Font optimization with next/font
- React Server Components where possible
- Minimal JavaScript bundle
- Lazy loading for animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved © 2026 Blululu Studios

---

Built with Next.js 15, Tailwind CSS, and Framer Motion
