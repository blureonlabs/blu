import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Blululu Studios - Tech-First Product & Systems Studio",
  description: "We build high-tech products, platforms, and systems — the right way. A tech-first studio for founders and businesses.",
  keywords: ["product studio", "MVP development", "systems automation", "tech consulting", "web development"],
  authors: [{ name: "Blululu Studios" }],
  openGraph: {
    title: "Blululu Studios - Tech-First Product & Systems Studio",
    description: "We build high-tech products, platforms, and systems — the right way.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blululu Studios",
    description: "Tech-first product and systems studio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
