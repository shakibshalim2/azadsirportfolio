"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Youtube,
  Facebook,
  Twitter,
  ArrowUpRight,
} from "lucide-react";

const footerLinks = {
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Vision", href: "/vision" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ],
  work: [
    { name: "Business & Ventures", href: "/ventures" },
    { name: "Ecosystem Initiatives", href: "/ecosystem" },
    { name: "Digital Infrastructure", href: "/digital-infrastructure" },
    { name: "Training & Speaking", href: "/training" },
  ],
  connect: [
    { name: "Media & Thought Leadership", href: "/media" },
    { name: "Social Impact", href: "/impact" },
    { name: "Gallery", href: "/gallery" },
    { name: "YouTube Channel", href: "#", external: true },
  ],
};

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-dark-900">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary-500/5 blur-[120px]" />

      <div className="relative">
        {/* Top CTA Section */}
        <div className="border-b border-white/5 px-4 sm:px-6 py-12 sm:py-16 lg:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-between gap-6 sm:gap-8 text-center md:text-left md:flex-row"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white">
                  Let's Build What the Future Demands
                </h2>
                <p className="mt-2 sm:mt-3 text-base sm:text-lg text-white/60">
                  Collaborate on projects that matter for Bangladesh.
                </p>
              </div>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary flex items-center gap-2 whitespace-nowrap w-full sm:w-auto justify-center"
                >
                  Start a Conversation
                  <ArrowUpRight className="h-4 w-4" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="px-4 sm:px-6 py-10 sm:py-12 lg:py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 sm:gap-10 lg:gap-12 sm:grid-cols-2 lg:grid-cols-5">
              {/* Brand Column */}
              <div className="sm:col-span-2 lg:col-span-2">
                <Link href="/" className="inline-block">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-full bg-gradient-to-br from-primary-500 to-accent-500">
                      <span className="absolute inset-0 flex items-center justify-center text-lg sm:text-xl font-bold text-white">
                        SA
                      </span>
                    </div>
                    <div>
                      <p className="text-lg sm:text-xl font-semibold text-white">
                        Shamim Azad
                      </p>
                      <p className="text-xs sm:text-sm text-white/50">
                        Entrepreneur | Ecosystem Builder
                      </p>
                    </div>
                  </div>
                </Link>
                <p className="mt-4 sm:mt-6 max-w-sm text-sm sm:text-base text-white/60 leading-relaxed">
                  Multi-sector entrepreneur, ecosystem builder and digital
                  infrastructure strategist working at the intersection of
                  business, technology and national development.
                </p>

                {/* Contact Info */}
                <div className="mt-6 sm:mt-8 space-y-2 sm:space-y-3">
                  <a
                    href="mailto:hello@shamimazad.com"
                    className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/60 transition-colors hover:text-white"
                  >
                    <Mail className="h-4 w-4" />
                    <span>hello@shamimazad.com</span>
                  </a>
                  <a
                    href="tel:+8801537056343"
                    className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/60 transition-colors hover:text-white"
                  >
                    <Phone className="h-4 w-4" />
                    <span>+880 1537 056 343</span>
                  </a>
                  <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/60">
                    <MapPin className="h-4 w-4" />
                    <span>Dhaka, Bangladesh</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-6 sm:mt-8 flex gap-2 sm:gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all hover:border-primary-500 hover:bg-primary-500/10 hover:text-primary-400"
                      aria-label={social.name}
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Navigation Links */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Navigation
                </h4>
                <ul className="mt-6 space-y-3">
                  {footerLinks.navigation.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/60 transition-colors hover:text-white"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Work Links */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Work
                </h4>
                <ul className="mt-6 space-y-3">
                  {footerLinks.work.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/60 transition-colors hover:text-white"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connect Links */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Connect
                </h4>
                <ul className="mt-6 space-y-3">
                  {footerLinks.connect.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-1 text-white/60 transition-colors hover:text-white"
                      >
                        {link.name}
                        {link.external && (
                          <ArrowUpRight className="h-3 w-3" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 px-6 py-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} Shamim Azad. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/40">
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
