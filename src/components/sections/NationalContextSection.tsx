"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Building2, Smartphone } from "lucide-react";

export function NationalContextSection() {

  const stats = [
    {
      icon: TrendingUp,
      value: "7%+",
      label: "GDP Growth Trajectory",
      description: "One of the fastest-growing economies globally",
    },
    {
      icon: Users,
      value: "170M+",
      label: "Population",
      description: "A massive domestic market with growing middle class",
    },
    {
      icon: Smartphone,
      value: "130M+",
      label: "Internet Users",
      description: "Digital acceleration transforming every sector",
    },
    {
      icon: Building2,
      value: "65%",
      label: "Under 35 Years",
      description: "Youthful demographics driving innovation",
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-dark-800 section-padding"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
        <div className="absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-primary-500/5 blur-[150px]" />
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
              The Opportunity
            </span>
            <h2 className="section-title mt-4">
              Bangladesh at a{" "}
              <span className="text-gradient">Turning Point</span>
            </h2>
            <div className="mt-8 space-y-6 text-lg text-white/60 leading-relaxed">
              <p>
                Bangladesh is entering a defining decade. Rapid urbanization,
                youth demographics, digital acceleration and economic ambition
                demand a new way of thinking.
              </p>
              <p>
                Growth alone is not enough. What we need are well-designed
                systems — where housing, healthcare, construction, agriculture,
                education and services work together, efficiently and inclusively.
              </p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl font-medium text-white"
              >
                This is where my work begins.
              </motion.p>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <div className="grid gap-6 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="glass group rounded-2xl p-6 transition-all duration-300 hover:bg-white/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10 text-primary-400 transition-colors group-hover:bg-primary-500 group-hover:text-white">
                  <stat.icon className="h-6 w-6" />
                </div>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 font-medium text-white">{stat.label}</p>
                <p className="mt-2 text-sm text-white/50">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
