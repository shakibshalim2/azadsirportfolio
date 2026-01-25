"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function BeliefSection() {

  return (
    <section
      className="relative overflow-hidden bg-dark-800 py-20 sm:py-28 md:py-32 lg:py-40"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 via-dark-800 to-accent-900/20" />
        <div className="absolute left-1/2 top-1/2 h-[400px] sm:h-[600px] w-[400px] sm:w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500/5 blur-[150px] sm:blur-[200px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center lg:px-8">
        {/* Quote Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8 flex justify-center"
        >
          <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary-500/10">
            <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-primary-400" />
          </div>
        </motion.div>

        {/* Main Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold leading-relaxed text-white">
            "A nation grows faster when{" "}
            <span className="text-gradient">business thinking</span>,{" "}
            <span className="text-gradient">digital systems</span> and{" "}
            <span className="text-gradient">social purpose</span> move together."
          </p>
        </motion.blockquote>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-6 sm:mt-10 max-w-2xl text-sm sm:text-base md:text-lg text-white/60 leading-relaxed"
        >
          Profit and purpose are not opposites. Sustainable growth happens when
          enterprises are designed to solve real structural gaps at scale.
        </motion.p>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mx-auto mt-12 h-px w-40 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"
        />

        {/* Attribution */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 text-sm font-medium uppercase tracking-wider text-white/40"
        >
          — Shamim Azad
        </motion.p>
      </div>
    </section>
  );
}
