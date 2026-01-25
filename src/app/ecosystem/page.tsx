"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Building2, Factory, Globe, Home, Leaf, MapPin, Truck, Users } from "lucide-react";
import Link from "next/link";

export default function EcosystemPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const focusAreas = [
    {
      icon: Users,
      title: "SME & Startup Ecosystem Development",
      description: "Building support systems, networks, and resources for small and medium enterprises to thrive in the digital age.",
    },
    {
      icon: Globe,
      title: "Rural-Urban Integrated Economic Models",
      description: "Creating bridges that connect rural production capabilities with urban consumption and market access.",
    },
    {
      icon: Building2,
      title: "Digital Marketplaces as National Infrastructure",
      description: "Designing platforms that serve national development goals, not just commercial interests.",
    },
    {
      icon: Factory,
      title: "Employment-Oriented Platforms",
      description: "Creating systems that generate meaningful employment and economic opportunity at scale.",
    },
  ];

  const flagshipConcepts = [
    {
      icon: MapPin,
      title: "Union-based Smart Rural City Model",
      description: "A concept for developing self-sufficient, digitally-connected rural urban centers at the union level.",
      status: "Concept Development",
      impact: "Potential to transform rural Bangladesh",
    },
    {
      icon: Factory,
      title: "Agro-Industrial & SME Clusters",
      description: "Creating geographic clusters that combine agricultural processing with SME manufacturing and services.",
      status: "Pilot Phase",
      impact: "Regional economic development",
    },
    {
      icon: Home,
      title: "Construction & Housing Digitization",
      description: "End-to-end digital transformation of Bangladesh's construction and housing sectors.",
      status: "Active Implementation",
      impact: "Industry-wide transformation",
    },
    {
      icon: Building2,
      title: "HealthTech for Mass Accessibility",
      description: "Technology-enabled healthcare delivery systems designed for scale and affordability.",
      status: "Active Implementation",
      impact: "Healthcare access for millions",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center overflow-hidden bg-dark-900 pt-32"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-green-500/10 blur-[150px]" />
          <div className="absolute left-1/4 bottom-1/3 h-[400px] w-[400px] rounded-full bg-primary-500/10 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:gap-16 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-medium uppercase tracking-wider text-primary-400">
                Ecosystem & National Initiatives
              </span>
              <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white">
                Building <span className="text-gradient">Systems</span> That Transform Nations
              </h1>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/60 leading-relaxed">
                Beyond individual businesses, my work focuses on creating interconnected ecosystems that address structural challenges in Bangladesh's economy and society.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Ecosystem Diagram */}
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Concentric circles */}
                <div className="absolute inset-0 rounded-full border border-white/5" />
                <div className="absolute inset-[15%] rounded-full border border-white/10" />
                <div className="absolute inset-[30%] rounded-full border border-white/15" />
                <div className="absolute inset-[45%] rounded-full bg-gradient-to-br from-primary-500/20 to-green-500/20 backdrop-blur-sm flex items-center justify-center">
                  <p className="text-sm font-medium text-white text-center">
                    Ecosystem<br />Core
                  </p>
                </div>

                {/* Floating labels */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isHeroInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute left-0 top-1/4 glass rounded-lg px-3 py-2"
                >
                  <p className="text-xs text-white/60">SMEs</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isHeroInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute right-0 top-1/3 glass rounded-lg px-3 py-2"
                >
                  <p className="text-xs text-white/60">Digital Platforms</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isHeroInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="absolute left-1/4 bottom-[10%] glass rounded-lg px-3 py-2"
                >
                  <p className="text-xs text-white/60">Rural-Urban Links</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isHeroInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute right-1/4 top-[5%] glass rounded-lg px-3 py-2"
                >
                  <p className="text-xs text-white/60">Employment</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
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
              Strategic Focus
            </span>
            <h2 className="section-title mt-4">
              Key <span className="text-gradient">Focus Areas</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group glass rounded-2xl p-8 transition-all hover:bg-white/10"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-500/10 text-green-400 transition-all group-hover:bg-green-500 group-hover:text-white">
                      <area.icon className="h-7 w-7" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{area.title}</h3>
                    <p className="mt-3 text-white/60 leading-relaxed">{area.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Concepts */}
      <section className="relative bg-dark-900 section-padding">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-accent-500/5 blur-[150px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-sm font-medium uppercase tracking-wider text-primary-400">
              Flagship Concepts
            </span>
            <h2 className="section-title mt-4">
              Transformative <span className="text-gradient">Initiatives</span>
            </h2>
            <p className="section-subtitle mt-6">
              Major initiatives designed to create systemic change at national scale.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {flagshipConcepts.map((concept, index) => (
              <motion.div
                key={concept.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-dark-800/50 p-8 transition-all hover:border-primary-500/20"
              >
                {/* Status Badge */}
                <div className="absolute right-6 top-6">
                  <span className="rounded-full bg-primary-500/10 px-3 py-1 text-xs font-medium text-primary-400">
                    {concept.status}
                  </span>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 text-primary-400 mb-6">
                  <concept.icon className="h-7 w-7" />
                </div>

                <h3 className="text-2xl font-bold text-white">{concept.title}</h3>
                <p className="mt-4 text-white/60 leading-relaxed">{concept.description}</p>

                <div className="mt-6 pt-6 border-t border-white/5">
                  <p className="text-sm text-white/40">Potential Impact</p>
                  <p className="mt-1 font-medium text-white">{concept.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Focus */}
      <section className="relative bg-dark-800 section-padding">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 via-dark-800 to-primary-900/10" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
                  <MapPin className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <span className="text-sm font-medium uppercase tracking-wider text-primary-400">
                    Regional Commitment
                  </span>
                </div>
              </div>

              <h2 className="section-title">
                Barishal & <span className="text-gradient">South Bengal</span>
              </h2>
              <div className="mt-6 space-y-4 text-lg text-white/60 leading-relaxed">
                <p>
                  A strategic focus on developing the economic potential of Bangladesh's southern region through targeted interventions in agriculture, trade, and digital infrastructure.
                </p>
                <p>
                  The goal is to create a replicable model for regional development that can be extended to other underserved areas of Bangladesh.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gradient">6+</p>
                  <p className="mt-1 text-sm text-white/60">Districts</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gradient">3</p>
                  <p className="mt-1 text-sm text-white/60">Key Sectors</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gradient">10M+</p>
                  <p className="mt-1 text-sm text-white/60">Population</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              {[
                { icon: Leaf, title: "Agricultural Development", desc: "Connecting farmers to markets" },
                { icon: Truck, title: "Logistics Infrastructure", desc: "Building supply chain networks" },
                { icon: Globe, title: "Digital Access", desc: "Expanding connectivity" },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="glass rounded-xl p-6 flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-sm text-white/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
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
              Join the Ecosystem
            </h2>
            <p className="mt-4 text-lg text-white/60">
              Whether you're a policymaker, investor, or entrepreneur — there's a role for you in building Bangladesh's future.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary flex items-center gap-2"
                >
                  Explore Collaboration
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </Link>
              <Link href="/digital-infrastructure">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-outline"
                >
                  Digital Infrastructure
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
