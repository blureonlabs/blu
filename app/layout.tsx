import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Blululu — AI Native Studio",
  description: "AI-native storytelling, content, and product studio. We create high-leverage content and build custom AI-powered systems — faster, sharper, without the overhead.",
  keywords: ["AI studio", "AI native", "brand storytelling", "AI content", "AI automation", "creative studio", "brand films"],
  authors: [{ name: "Blululu" }],
  openGraph: {
    title: "Blululu — AI Native Studio",
    description: "AI-native storytelling, content, and product studio.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blululu",
    description: "AI Native Studio. Storytelling, content, and products — powered by AI from the ground up.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
