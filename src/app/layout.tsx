import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Shamim Azad | Entrepreneur | Ecosystem Builder | Digital Infrastructure Strategist",
  description: "Designing the Future of Bangladesh through Business, Digital Infrastructure & Human Capital. Shamim Azad is a multi-sector entrepreneur, ecosystem builder and digital infrastructure strategist.",
  keywords: ["Shamim Azad", "Bangladesh", "Entrepreneur", "Digital Infrastructure", "Ecosystem Builder", "National Trainer"],
  authors: [{ name: "Shamim Azad" }],
  openGraph: {
    title: "Shamim Azad | Designing the Future of Bangladesh",
    description: "Multi-sector entrepreneur, ecosystem builder and digital infrastructure strategist with over two decades of leadership experience.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="lenis">
      <body className="bg-dark-900 text-white antialiased">
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
