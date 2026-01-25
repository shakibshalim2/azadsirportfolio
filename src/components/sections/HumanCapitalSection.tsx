"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Users, Lightbulb, Rocket } from "lucide-react";
import Link from "next/link";

export function HumanCapitalSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const areas = [
    {
      icon: Lightbulb,
      title: "Entrepreneurial Mindset",
      description: "Nurturing innovation and risk-taking culture",
    },
    {
      icon: Users,
      title: "SME Capability",
      description: "Building management and operational excellence",
    },
    {
      icon: Rocket,
      title: "Digital Readiness",
      description: "Preparing businesses for technology transformation",
    },
    {
      icon: GraduationCap,
      title: "Leadership Capacity",
      description: "Developing the next generation of leaders",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-dark-900 section-padding"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-800 to-dark-900" />
        <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-accent-500/5 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Visual Container */}
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border border-white/5">
                {/* Animated dots on ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500" />
                </motion.div>
              </div>

              {/* Middle Ring */}
              <div className="absolute inset-8 rounded-full border border-white/10">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="absolute left-0 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500" />
                </motion.div>
              </div>

              {/* Inner Ring */}
              <div className="absolute inset-16 rounded-full border border-white/10">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="absolute right-0 top-1/2 h-2 w-2 translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400" />
                </motion.div>
              </div>

              {/* Center */}
              <div className="absolute inset-24 flex items-center justify-center rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 backdrop-blur-sm">
                <div className="text-center">
                  <Users className="mx-auto h-12 w-12 text-primary-400" />
                  <p className="mt-3 text-lg font-display font-bold text-white">
                    Human
                  </p>
                  <p className="text-lg font-display font-bold text-gradient">
                    Capital
                  </p>
                </div>
              </div>

              {/* Floating Labels */}
              {areas.map((area, index) => {
                const positions = [
                  "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
                  "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
                  "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
                  "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
                ];
                return (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className={`absolute ${positions[index]} glass rounded-xl p-3 max-w-[150px]`}
                  >
                    <div className="flex items-center gap-2">
                      <area.icon className="h-4 w-4 text-primary-400 flex-shrink-0" />
                      <span className="text-xs font-medium text-white">{area.title}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-medium uppercase tracking-wider text-primary-400">
              The Foundation
            </span>
            <h2 className="section-title mt-4">
              People Are the{" "}
              <span className="text-gradient">Ultimate Infrastructure</span>
            </h2>
            <div className="mt-8 space-y-6 text-lg text-white/60 leading-relaxed">
              <p>
                No system succeeds without capable people.
              </p>
              <p>
                As a national trainer and mentor, I work on strengthening
                entrepreneurial mindset, SME capability, digital readiness and
                leadership capacity — ensuring that growth is owned by people,
                not controlled by systems.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10 grid grid-cols-2 gap-6"
            >
              <div className="glass rounded-xl p-5">
                <p className="text-3xl font-bold text-gradient">1000+</p>
                <p className="mt-1 text-sm text-white/60">Entrepreneurs Trained</p>
              </div>
              <div className="glass rounded-xl p-5">
                <p className="text-3xl font-bold text-gradient">50+</p>
                <p className="mt-1 text-sm text-white/60">National Programs</p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8"
            >
              <Link href="/training">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary"
                >
                  Explore Training Programs
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
