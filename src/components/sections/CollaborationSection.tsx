"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Handshake } from "lucide-react";
import Link from "next/link";

export function CollaborationSection() {

  const collaborationAreas = [
    "Policy & Development Projects",
    "Public-Private Partnerships",
    "Investment & Advisory Roles",
    "Training & Speaking Engagements",
    "Media & Knowledge Collaborations",
  ];

  return (
    <section
      className="relative overflow-hidden bg-dark-900 section-padding"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-primary-500/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8 flex justify-center"
        >
          <div className="flex h-14 w-14 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 backdrop-blur-sm">
            <Handshake className="h-7 w-7 sm:h-10 sm:w-10 text-primary-400" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white"
        >
          Let's Build What the{" "}
          <span className="text-gradient">Future Demands</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-white/60 leading-relaxed"
        >
          The challenges ahead are complex — but solvable. They require builders,
          thinkers and collaborators who believe in long-term systems, not
          short-term wins.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-medium text-white"
        >
          If you share that belief, let's work together.
        </motion.p>

        {/* Collaboration Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 sm:mt-10 flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {collaborationAreas.map((area, index) => (
            <span
              key={area}
              className="rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-white/70"
            >
              {area}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 sm:mt-12 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row"
        >
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary flex items-center gap-2"
            >
              Collaborate With Me
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </Link>
          <Link href="/portfolio">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-outline"
            >
              Explore My Work
            </motion.button>
          </Link>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mx-auto mt-16 h-px w-60 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"
        />
      </div>
    </section>
  );
}
