"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, GraduationCap, Heart, Leaf, MapPin, Sparkles, Users } from "lucide-react";
import Link from "next/link";

export default function ImpactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const engagementAreas = [
    {
      icon: Sparkles,
      title: "Youth Skill Development",
      description: "Building programs that equip young Bangladeshis with practical skills for employment and entrepreneurship.",
      impact: "Thousands of youth trained",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: Users,
      title: "Entrepreneurial Awareness",
      description: "Spreading entrepreneurial mindset and knowledge through workshops, mentorship, and public engagement.",
      impact: "National reach",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Heart,
      title: "Health Education & Access",
      description: "Initiatives focused on improving health awareness and expanding access to quality healthcare services.",
      impact: "Community-level impact",
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: MapPin,
      title: "Regional Development",
      description: "Focused efforts on developing economic opportunities in Barishal and South Bengal regions.",
      impact: "Multi-district focus",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const philosophyPoints = [
    {
      title: "Sustainable",
      description: "Creating initiatives that continue to generate value long after initial intervention.",
    },
    {
      title: "System-Driven",
      description: "Addressing root causes through systemic approaches rather than symptomatic solutions.",
    },
    {
      title: "Dignity-Focused",
      description: "Empowering communities to own their development, not depend on external charity.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[50vh] sm:min-h-[70vh] flex items-center overflow-hidden bg-dark-900 pt-24 sm:pt-32"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute left-1/3 top-1/4 h-[500px] w-[500px] rounded-full bg-green-500/10 blur-[150px]" />
          <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-primary-500/10 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-medium uppercase tracking-wider text-primary-400">
              Social Impact & Community Work
            </span>
            <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white">
              Building <span className="text-gradient">Beyond Business</span>
            </h1>
            <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-white/60 leading-relaxed">
              Social work should be sustainable, system-driven and dignity-focused — not charity-dependent. This philosophy guides all community engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative bg-dark-800 py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-8 md:grid-cols-3"
          >
            {philosophyPoints.map((point, index) => (
              <div
                key={point.title}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500/20 to-primary-500/20">
                  <span className="text-2xl font-bold text-gradient">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{point.title}</h3>
                <p className="mt-2 text-white/60">{point.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Engagement Areas */}
      <section className="relative bg-dark-900 section-padding">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-green-500/5 blur-[150px]" />
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
              Areas of Engagement
            </span>
            <h2 className="section-title mt-4">
              Where We Make a <span className="text-gradient">Difference</span>
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {engagementAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-dark-800/50 p-8 transition-all hover:border-green-500/20"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 transition-opacity group-hover:opacity-5`} />

                <div className="relative flex items-start gap-6">
                  <div className={`flex-shrink-0 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${area.color}`}>
                    <area.icon className="h-8 w-8 text-white" />
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white">{area.title}</h3>
                    <p className="mt-3 text-white/60 leading-relaxed">{area.description}</p>

                    <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-400">
                      <Leaf className="h-3 w-3" />
                      {area.impact}
                    </div>
                  </div>
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
                <span className="text-sm font-medium uppercase tracking-wider text-primary-400">
                  Regional Commitment
                </span>
              </div>

              <h2 className="section-title">
                Barishal & <span className="text-gradient">South Bengal</span>
              </h2>

              <div className="mt-6 space-y-4 text-lg text-white/60 leading-relaxed">
                <p>
                  True national progress requires taking opportunity beyond metropolitan centers.
                </p>
                <p>
                  My initiatives actively focus on Barishal and South Bengal, aiming to connect rural potential with urban markets through technology, logistics and skills development.
                </p>
              </div>

              <div className="mt-8 glass rounded-xl p-6">
                <h4 className="font-semibold text-white mb-4">Focus Areas</h4>
                <ul className="space-y-3">
                  {[
                    "Agricultural value chain development",
                    "Skills training for rural youth",
                    "Digital access and literacy",
                    "Market linkage programs",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/60">
                      <div className="h-2 w-2 rounded-full bg-green-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Placeholder for map or visual */}
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/10 to-primary-500/10 border border-white/5">
                  {/* Animated dots representing regions */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-1/3 left-1/3 h-4 w-4 rounded-full bg-green-500"
                  >
                    <span className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-50" />
                  </motion.div>

                  <div className="absolute bottom-1/3 left-1/3 translate-x-6 translate-y-[-24px] glass rounded-lg px-3 py-2">
                    <p className="text-sm font-medium text-white">Barishal</p>
                  </div>

                  {/* Other regional markers */}
                  <div className="absolute bottom-1/4 left-1/2 h-2 w-2 rounded-full bg-green-400/50" />
                  <div className="absolute bottom-1/2 left-1/4 h-2 w-2 rounded-full bg-green-400/50" />
                  <div className="absolute top-1/3 left-1/3 h-2 w-2 rounded-full bg-green-400/50" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative bg-dark-900 py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-800 to-dark-900" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500/20 to-primary-500/20">
                <Heart className="h-8 w-8 text-green-400" />
              </div>
            </div>

            <blockquote className="text-2xl font-display text-white leading-relaxed md:text-3xl">
              "The goal is not to give charity, but to create conditions where communities can{" "}
              <span className="text-gradient">build their own prosperity</span> with dignity and agency."
            </blockquote>

            <p className="mt-6 text-sm font-medium uppercase tracking-wider text-white/40">
              — Shamim Azad
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-dark-800 py-24">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-display font-bold text-white md:text-4xl">
              Partner in Creating Impact
            </h2>
            <p className="mt-4 text-lg text-white/60">
              Interested in collaborating on community development, CSR initiatives, or social enterprise projects? Let's connect.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary flex items-center gap-2"
                >
                  Discuss Collaboration
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </Link>
              <Link href="/ecosystem">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-outline"
                >
                  View Ecosystem Initiatives
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
