"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function IdentitySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const roles = [
    "Entrepreneur & Group Founder",
    "Ecosystem Builder",
    "Digital Infrastructure Strategist",
    "National Trainer & Mentor",
    "Social Development Advocate",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-dark-900 section-padding"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-accent-500/5 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Left Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1 mx-auto max-w-sm sm:max-w-md lg:max-w-none"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:rounded-3xl">
              {/* Profile Image */}
              <Image
                src="/image.png"
                alt="Shamim Azad"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/20 to-transparent" />
              
              {/* Decorative frame */}
              <div className="absolute inset-2 sm:inset-4 rounded-xl sm:rounded-2xl border border-white/10" />
              
              {/* Name overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                  Shamim Azad
                </h3>
                <p className="mt-1 sm:mt-2 text-sm sm:text-base text-white/60">
                  Building Bangladesh's Future
                </p>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -right-2 sm:-right-4 top-4 sm:top-8 glass rounded-lg sm:rounded-xl p-2 sm:p-4 md:-right-8"
              >
                <p className="text-xs sm:text-sm font-medium text-white">20+ Years</p>
                <p className="text-xs text-white/60 hidden sm:block">Leadership Experience</p>
              </motion.div>

              {/* Another floating badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute -left-2 sm:-left-4 bottom-20 sm:bottom-8 glass rounded-lg sm:rounded-xl p-2 sm:p-4 md:-left-8"
              >
                <p className="text-xs sm:text-sm font-medium text-white">Multi-Sector</p>
                <p className="text-xs text-white/60 hidden sm:block">Operating Ventures</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="text-xs sm:text-sm font-medium uppercase tracking-wider text-primary-400">
              The Person Behind the Vision
            </span>
            <h2 className="section-title mt-3 sm:mt-4">
              Who Is <span className="text-gradient">Shamim Azad</span>
            </h2>
            <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6 text-base sm:text-lg text-white/60 leading-relaxed">
              <p>
                I am a multi-sector entrepreneur, ecosystem builder and digital
                infrastructure strategist with over two decades of leadership
                experience.
              </p>
              <p>
                I work at the intersection of business execution, technology
                platforms and national development, transforming fragmented
                sectors into scalable, connected ecosystems.
              </p>
              <p className="text-white font-medium">
                My role is not limited to ownership or management — it is about
                architecting systems that last.
              </p>
            </div>

            {/* Role Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3"
            >
              {roles.map((role, index) => (
                <span
                  key={role}
                  className="rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-white/80"
                >
                  {role}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-10"
            >
              <Link href="/about">
                <motion.button
                  whileHover={{ x: 5 }}
                  className="group flex items-center gap-2 text-primary-400 font-medium"
                >
                  Read Full Bio
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
