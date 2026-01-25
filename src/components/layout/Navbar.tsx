"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Vision", href: "/vision" },
  {
    name: "Work",
    href: "#",
    children: [
      { name: "Business & Ventures", href: "/ventures" },
      { name: "Ecosystem Initiatives", href: "/ecosystem" },
      { name: "Digital Infrastructure", href: "/digital-infrastructure" },
      { name: "Portfolio", href: "/portfolio" },
    ],
  },
  { name: "Training", href: "/training" },
  { name: "Media", href: "/media" },
  { name: "Impact", href: "/impact" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-dark-900/90 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <Link href="/" className="group relative z-10">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3"
            >
              <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-primary-500/30">
                <Image
                  src="/image.png"
                  alt="Shamim Azad"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <p className="text-lg font-semibold text-white">Shamim Azad</p>
                <p className="text-xs text-white/50">Ecosystem Builder</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.children ? (
                  <button className="flex items-center gap-1 px-4 py-2 text-sm text-white/70 transition-colors hover:text-white">
                    {item.name}
                    <ChevronDown className="h-3 w-3" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="relative px-4 py-2 text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full pt-2"
                    >
                      <div className="glass min-w-[220px] rounded-xl p-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block rounded-lg px-4 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary text-sm"
              >
                Let's Collaborate
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-10 p-2 lg:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark-900 lg:hidden"
          >
            <div className="flex h-full flex-col overflow-y-auto px-6 pb-6 pt-24">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.children ? (
                    <div className="border-b border-white/10 py-4">
                      <p className="mb-3 text-lg font-medium text-white">
                        {item.name}
                      </p>
                      <div className="space-y-2 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 text-white/60 transition-colors hover:text-white"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block border-b border-white/10 py-4 text-lg font-medium text-white transition-colors hover:text-primary-400"
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="btn-primary w-full text-center">
                    Let's Collaborate
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
