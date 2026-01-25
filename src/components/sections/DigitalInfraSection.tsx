"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Cpu, Globe, Shield, Zap } from "lucide-react";

export function DigitalInfraSection() {

  const pillars = [
    {
      icon: Globe,
      title: "Housing Platforms",
      description: "Digital systems for property discovery, management, and transactions",
    },
    {
      icon: Shield,
      title: "Health Platforms",
      description: "Accessible healthcare through technology-enabled service delivery",
    },
    {
      icon: Cpu,
      title: "Construction Marketplaces",
      description: "Connecting suppliers, contractors, and homeowners digitally",
    },
    {
      icon: Zap,
      title: "Logistics Networks",
      description: "Smart supply chains linking rural production to urban consumption",
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-dark-800 section-padding"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/10 via-dark-800 to-accent-900/10" />

        {/* Animated Grid Lines */}
        <div className="absolute inset-0 bg-grid opacity-30" />

        {/* Glowing orbs */}
        <div className="absolute left-1/4 top-1/4 h-2 w-2 rounded-full bg-primary-400 animate-pulse" />
        <div className="absolute right-1/3 top-1/3 h-1.5 w-1.5 rounded-full bg-accent-400 animate-pulse animation-delay-200" />
        <div className="absolute bottom-1/3 left-1/3 h-2 w-2 rounded-full bg-gold-400 animate-pulse animation-delay-400" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-medium uppercase tracking-wider text-primary-400">
              Strategic Thinking
            </span>
            <h2 className="section-title mt-4">
              Technology as{" "}
              <span className="text-gradient">National Infrastructure</span>
            </h2>
            <div className="mt-8 space-y-6 text-lg text-white/60 leading-relaxed">
              <p>
                In today's world, platforms are infrastructure.
              </p>
              <p>
                Housing systems, health platforms, construction marketplaces and
                service networks must be designed with the same seriousness as
                roads, power and telecom.
              </p>
              <p className="text-white font-medium">
                My work advocates for platform-led nation building, where
                technology enables access, transparency and efficiency at scale.
              </p>
            </div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10 glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="h-10 w-10 rounded-full bg-primary-500/20 border-2 border-dark-800 flex items-center justify-center">
                    <Globe className="h-4 w-4 text-primary-400" />
                  </div>
                  <div className="h-10 w-10 rounded-full bg-accent-500/20 border-2 border-dark-800 flex items-center justify-center">
                    <Cpu className="h-4 w-4 text-accent-400" />
                  </div>
                  <div className="h-10 w-10 rounded-full bg-gold-500/20 border-2 border-dark-800 flex items-center justify-center">
                    <Zap className="h-4 w-4 text-gold-400" />
                  </div>
                </div>
                <div>
                  <p className="font-medium text-white">Platform-Led Development</p>
                  <p className="text-sm text-white/50">A new paradigm for national growth</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-dark-700/30 p-6 transition-all duration-300 hover:border-primary-500/30 hover:bg-dark-700/50"
              >
                {/* Gradient line on top */}
                <div className="absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10 text-primary-400 transition-all group-hover:bg-primary-500 group-hover:text-white">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-white">{pillar.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
