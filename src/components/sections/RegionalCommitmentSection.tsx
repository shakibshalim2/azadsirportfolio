"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, Wifi, Truck, Store } from "lucide-react";

export function RegionalCommitmentSection() {

  const initiatives = [
    {
      icon: Wifi,
      title: "Digital Access",
      description: "Expanding connectivity and digital literacy to underserved regions",
    },
    {
      icon: Truck,
      title: "Logistics Networks",
      description: "Building supply chains that connect rural producers to markets",
    },
    {
      icon: Store,
      title: "Market Linkages",
      description: "Creating platforms for local enterprises to reach urban consumers",
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-dark-800 section-padding"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />

        {/* Map-like dotted pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="currentColor" className="text-primary-400" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-green-500/5 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium uppercase tracking-wider text-primary-400"
          >
            Regional Focus
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title mt-4"
          >
            Inclusive Growth,{" "}
            <span className="text-gradient">Beyond Major Cities</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mx-auto mt-6 text-center"
          >
            True national progress requires taking opportunity beyond metropolitan
            centers. My initiatives actively focus on Barishal and South Bengal,
            aiming to connect rural potential with urban markets through
            technology, logistics and skills.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Region Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="glass rounded-3xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
                  <MapPin className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Barishal Region</h3>
                  <p className="text-sm text-white/50">South Bengal, Bangladesh</p>
                </div>
              </div>

              <p className="text-white/60 leading-relaxed mb-6">
                A strategic focus on developing the economic potential of
                Bangladesh's southern region through targeted interventions
                in agriculture, trade, and digital infrastructure.
              </p>

              {/* Stats */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <span className="text-white/60">Target Districts</span>
                  <span className="font-medium text-white">6+</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <span className="text-white/60">Focus Sectors</span>
                  <span className="font-medium text-white">Agriculture, Trade</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Approach</span>
                  <span className="font-medium text-white">Platform-Based</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Initiative Cards */}
          <div className="lg:col-span-2 grid gap-6 sm:grid-cols-1 md:grid-cols-3">
            {initiatives.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-dark-700/30 p-6 transition-all hover:border-green-500/20 hover:bg-dark-700/50"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-400 transition-all group-hover:bg-green-500 group-hover:text-white">
                  <item.icon className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
