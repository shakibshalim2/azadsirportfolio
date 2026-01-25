"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Briefcase, GraduationCap, Target } from "lucide-react";

export function CredibilitySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const stats = [
    {
      icon: Clock,
      value: "20+",
      label: "Years Leadership Experience",
      suffix: "",
    },
    {
      icon: Briefcase,
      value: "8+",
      label: "Multi-Sector Operating Ventures",
      suffix: "",
    },
    {
      icon: GraduationCap,
      value: "50+",
      label: "National-Level Training Programs",
      suffix: "",
    },
    {
      icon: Target,
      value: "100+",
      label: "Policy & System-Oriented Projects",
      suffix: "",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-dark-900 py-20 md:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/10 via-dark-900 to-accent-900/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative text-center"
            >
              {/* Divider (not on first item) */}
              {index > 0 && (
                <div className="absolute left-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-white/10 lg:block" />
              )}

              <div className="mb-4 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-500/10 text-primary-400 transition-all group-hover:bg-primary-500 group-hover:text-white">
                <stat.icon className="h-6 w-6" />
              </div>
              
              <p className="text-4xl font-bold text-white md:text-5xl">
                {stat.value}
              </p>
              
              <p className="mt-2 text-sm text-white/60 leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
