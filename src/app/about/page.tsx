"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Award, Briefcase, GraduationCap, Heart, Target, Users } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {

  const coreRoles = [
    {
      icon: Briefcase,
      title: "Entrepreneur & Group Founder",
      description: "Leading Affix Bangladesh Limited and multiple interconnected ventures across sectors.",
    },
    {
      icon: Target,
      title: "Ecosystem Builder",
      description: "Creating connected platforms that bring together suppliers, services, and consumers.",
    },
    {
      icon: Users,
      title: "Digital Infrastructure Strategist",
      description: "Designing technology systems that serve as national-level infrastructure.",
    },
    {
      icon: GraduationCap,
      title: "National Trainer & Mentor",
      description: "Developing entrepreneurial capacity and leadership across Bangladesh.",
    },
    {
      icon: Heart,
      title: "Social Development Advocate",
      description: "Championing inclusive growth and regional development initiatives.",
    },
  ];

  const timeline = [
    {
      year: "2000s",
      title: "Foundation Years",
      description: "Built foundational experience in brand leadership, sales, and marketing across multiple industries.",
    },
    {
      year: "2010s",
      title: "Entrepreneurial Expansion",
      description: "Launched multiple ventures, expanding into construction, healthcare, and agriculture sectors.",
    },
    {
      year: "2015+",
      title: "Digital Transformation",
      description: "Pioneered digital platforms and marketplaces, embracing technology as a tool for national development.",
    },
    {
      year: "2020+",
      title: "Ecosystem Building",
      description: "Focused on creating interconnected systems that solve structural challenges at scale.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex items-center overflow-hidden bg-dark-900 pt-32"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute right-0 top-1/4 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full bg-primary-500/10 blur-[150px]" />
          <div className="absolute left-0 bottom-1/4 h-[400px] w-[400px] rounded-full bg-accent-500/10 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-medium uppercase tracking-wider text-primary-400">
                About
              </span>
              <h1 className="mt-4 text-4xl font-display font-bold text-white md:text-5xl lg:text-6xl">
                Shamim <span className="text-gradient">Azad</span>
              </h1>
              <p className="mt-6 text-xl text-white/60 leading-relaxed">
                Entrepreneur | Ecosystem Builder | Digital Infrastructure Strategist | National Trainer | Visionary Citizen
              </p>
              <div className="mt-8 prose prose-lg prose-invert">
                <p className="text-white/70 leading-relaxed">
                  Shamim Azad is a seasoned business leader with over two decades of experience spanning brand leadership, sales & marketing, digital platforms, infrastructure-led marketplaces, healthcare, agriculture, construction, education, tourism, and media.
                </p>
                <p className="text-white/70 leading-relaxed">
                  He is known for transforming ideas into scalable ecosystems, combining commercial sustainability with national development goals.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto w-full max-w-sm lg:max-w-none"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl sm:rounded-3xl bg-dark-800">
                <Image
                  src="/about-profile.png"
                  alt="Shamim Azad"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent" />
                <div className="absolute inset-2 sm:inset-4 rounded-xl sm:rounded-2xl border border-white/10" />
              </div>

              {/* Floating badges - outside overflow container */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute right-0 top-4 sm:top-8 glass rounded-lg sm:rounded-xl p-2 sm:p-4 sm:-right-2 md:-right-6 z-10"
              >
                <p className="text-lg sm:text-2xl font-bold text-white">20+</p>
                <p className="text-[10px] sm:text-xs text-white/60">Years Experience</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute left-0 bottom-8 sm:bottom-12 glass rounded-lg sm:rounded-xl p-2 sm:p-4 sm:-left-2 md:-left-6 z-10"
              >
                <p className="text-lg sm:text-2xl font-bold text-gradient">8+</p>
                <p className="text-[10px] sm:text-xs text-white/60">Active Ventures</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Roles Section */}
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
              Core Roles
            </span>
            <h2 className="section-title mt-4">
              Multi-Dimensional <span className="text-gradient">Leadership</span>
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreRoles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group glass rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 transition-all hover:bg-white/10"
              >
                <div className="mb-4 sm:mb-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-lg sm:rounded-xl bg-primary-500/10 text-primary-400 transition-all group-hover:bg-primary-500 group-hover:text-white">
                  <role.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <h3 className="text-xl font-semibold text-white">{role.title}</h3>
                <p className="mt-3 text-white/60 leading-relaxed">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative bg-dark-900 section-padding">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/5 blur-[150px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="text-sm font-medium uppercase tracking-wider text-primary-400">
              Journey
            </span>
            <h2 className="section-title mt-4">
              A Path of <span className="text-gradient">Impact</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-accent-500/50 to-transparent md:left-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 flex h-4 w-4 items-center justify-center rounded-full bg-primary-500 md:left-1/2 md:-translate-x-1/2">
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <span className="text-sm font-medium text-primary-400">{item.year}</span>
                    <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-white/60 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
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
              Interested in working together?
            </h2>
            <p className="mt-4 text-lg text-white/60">
              Let's explore how we can collaborate on meaningful projects.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary flex items-center gap-2"
                >
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </Link>
              <Link href="/vision">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-outline"
                >
                  Explore My Vision
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
