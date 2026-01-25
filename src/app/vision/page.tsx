"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Cpu, Globe, Leaf, Target, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function VisionPage() {

  const philosophyPoints = [
    {
      icon: Cpu,
      number: "01",
      title: "Infrastructure Is No Longer Physical Only",
      description: "Digital platforms today are as critical as roads, bridges and power plants. Marketplaces, health systems, housing platforms and data layers must be designed with national intent.",
    },
    {
      icon: Target,
      number: "02",
      title: "Business Must Carry a National Responsibility",
      description: "Profit and purpose are not opposites. Sustainable profit emerges when businesses solve real societal gaps at scale.",
    },
    {
      icon: Users,
      number: "03",
      title: "Ecosystems Matter More Than Isolated Companies",
      description: "The future belongs to interconnected systems — suppliers, service providers, users, data and governance working together.",
    },
    {
      icon: Globe,
      number: "04",
      title: "Rural Bangladesh Is the Next Growth Engine",
      description: "True national progress requires taking infrastructure, capital and digital access beyond major cities.",
    },
    {
      icon: Zap,
      number: "05",
      title: "Training Creates Economic Sovereignty",
      description: "A skilled population is the strongest form of national independence.",
    },
  ];

  const visionAreas = [
    {
      icon: Cpu,
      title: "Technology as Public Infrastructure",
      description: "Digital platforms serving national development goals",
    },
    {
      icon: Target,
      title: "Businesses as Problem Solvers",
      description: "Enterprises designed to address structural gaps",
    },
    {
      icon: Globe,
      title: "Rural-Urban Integration",
      description: "Connected economies growing together",
    },
    {
      icon: Users,
      title: "Citizen-Centric Platforms",
      description: "Access, dignity and opportunity for all",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[80vh] flex items-center overflow-hidden bg-dark-900 pt-32"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-hero-pattern" />
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute left-1/4 top-1/3 h-[600px] w-[600px] rounded-full bg-primary-500/10 blur-[200px]" />
          <div className="absolute right-1/4 bottom-1/3 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full bg-accent-500/10 blur-[180px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-medium uppercase tracking-wider text-primary-400">
              Vision & Philosophy
            </span>
            <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight">
              Building a{" "}
              <span className="text-gradient">Digitally Empowered</span>,{" "}
              <span className="text-gradient">Economically Inclusive</span>{" "}
              Bangladesh
            </h1>
            <p className="mx-auto mt-6 sm:mt-8 max-w-3xl text-base sm:text-lg md:text-xl text-white/60 leading-relaxed">
              Bangladesh is standing at a historic crossroads. The next phase of national growth will not be driven only by factories or policies, but by how intelligently we design our systems — housing, healthcare, construction, agriculture, education, mobility and services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Pillars */}
      <section className="relative bg-dark-800 section-padding">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="text-sm font-medium uppercase tracking-wider text-primary-400">
              The Larger Vision
            </span>
            <h2 className="section-title mt-4">
              A System-Driven <span className="text-gradient">Future</span>
            </h2>
            <p className="section-subtitle mx-auto mt-6 text-center">
              Where technology, business, and social purpose align for national development.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {visionAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group glass rounded-2xl p-8 text-center transition-all hover:bg-white/10"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 text-primary-400 transition-all group-hover:from-primary-500 group-hover:to-accent-500 group-hover:text-white">
                  <area.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-white">{area.title}</h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Philosophy Section */}
      <section className="relative bg-dark-900 section-padding">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute right-0 top-1/3 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full bg-primary-500/5 blur-[150px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="text-sm font-medium uppercase tracking-wider text-primary-400">
              Core Philosophy
            </span>
            <h2 className="section-title mt-4">
              Guiding <span className="text-gradient">Principles</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {philosophyPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-dark-800/50 p-8 transition-all hover:border-primary-500/20 hover:bg-dark-800"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                  {/* Number */}
                  <div className="flex-shrink-0">
                    <span className="text-5xl font-bold text-white/10 group-hover:text-primary-500/20 transition-colors">
                      {point.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10 text-primary-400 transition-all group-hover:bg-primary-500 group-hover:text-white">
                        <point.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{point.title}</h3>
                    </div>
                    <p className="text-lg text-white/60 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative bg-dark-800 py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 via-dark-800 to-accent-900/20" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-3xl font-display font-bold text-white md:text-4xl leading-relaxed">
              "The future of Bangladesh depends on our ability to{" "}
              <span className="text-gradient">design systems</span> that work for everyone — not just the privileged few."
            </blockquote>
            <p className="mt-6 text-sm font-medium uppercase tracking-wider text-white/40">
              — Shamim Azad
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-dark-900 py-24">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-display font-bold text-white md:text-4xl">
              Ready to Build the Future?
            </h2>
            <p className="mt-4 text-lg text-white/60">
              Explore how these principles translate into real ventures and initiatives.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/ventures">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary flex items-center gap-2"
                >
                  View Ventures
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </Link>
              <Link href="/ecosystem">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-outline"
                >
                  Ecosystem Initiatives
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
