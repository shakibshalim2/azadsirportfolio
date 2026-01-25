"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Building,
  Heart,
  Leaf,
  Building2,
  Tv,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const ecosystems = [
  {
    icon: Building,
    title: "Digital Construction & Housing",
    description:
      "Building marketplaces that connect construction materials, services, and housing solutions.",
    color: "from-blue-500 to-cyan-500",
    href: "/ventures",
  },
  {
    icon: Heart,
    title: "On-Demand Healthcare",
    description:
      "Platforms bringing quality healthcare to doorsteps across urban and rural Bangladesh.",
    color: "from-rose-500 to-pink-500",
    href: "/ventures",
  },
  {
    icon: Leaf,
    title: "Agro-Trade & Supply Chains",
    description:
      "Connecting rural producers with urban markets through technology and logistics.",
    color: "from-green-500 to-emerald-500",
    href: "/ventures",
  },
  {
    icon: Building2,
    title: "Smart City Concepts",
    description:
      "Designing city management and urban infrastructure solutions for tomorrow.",
    color: "from-violet-500 to-purple-500",
    href: "/digital-infrastructure",
  },
  {
    icon: Tv,
    title: "Media & Education",
    description:
      "Building platforms for skill development, journalism, and public discourse.",
    color: "from-orange-500 to-amber-500",
    href: "/media",
  },
];

export function EcosystemSection() {

  return (
    <section
      className="relative overflow-hidden bg-dark-900 section-padding"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full bg-primary-500/5 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 sm:mb-16 max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs sm:text-sm font-medium uppercase tracking-wider text-primary-400"
          >
            Ecosystem View
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title mt-3 sm:mt-4"
          >
            From Companies to <span className="text-gradient">Ecosystems</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mt-4 sm:mt-6"
          >
            Rather than isolated businesses, I focus on building interconnected
            platforms — where suppliers, service providers, data and users grow
            together.
          </motion.p>
        </div>

        {/* Ecosystem Cards */}
        <div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {ecosystems.map((eco, index) => (
            <Link key={eco.title} href={eco.href}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-white/5 bg-dark-800/50 p-8 transition-all duration-500 hover:border-white/10 hover:bg-dark-700/50"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${eco.color} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
                />

                {/* Icon */}
                <div
                  className={`relative mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${eco.color} bg-opacity-10`}
                >
                  <eco.icon className="h-7 w-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-semibold text-white">
                  {eco.title}
                </h3>
                <p className="relative mt-3 text-white/60 leading-relaxed">
                  {eco.description}
                </p>

                {/* Arrow */}
                <div className="relative mt-6 flex items-center gap-2 text-primary-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link href="/ventures">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-outline inline-flex items-center gap-2"
            >
              View All Ventures
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
