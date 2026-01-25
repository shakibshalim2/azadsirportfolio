"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Award, BookOpen, Building, GraduationCap, Lightbulb, MessageSquare, Mic, Monitor, Presentation, Rocket, Target, Users, Video, Zap } from "lucide-react";
import Link from "next/link";

export default function TrainingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const trainingAreas = [
    {
      icon: Target,
      title: "Brand Building & Marketing Strategy",
      description: "Strategic approaches to building memorable brands that resonate with target audiences in Bangladesh's competitive market.",
      topics: ["Brand positioning", "Marketing strategy", "Digital marketing", "Customer experience"],
    },
    {
      icon: Building,
      title: "SME Business Structuring",
      description: "Helping small and medium enterprises build professional structures for sustainable growth and scalability.",
      topics: ["Business planning", "Financial management", "Operations excellence", "Team building"],
    },
    {
      icon: Monitor,
      title: "Digital Transformation",
      description: "Guiding businesses through the journey of adopting digital tools, processes, and mindsets for the modern economy.",
      topics: ["Digital strategy", "Technology adoption", "Process digitization", "Change management"],
    },
    {
      icon: Rocket,
      title: "Entrepreneurship & Startup Readiness",
      description: "Preparing aspiring entrepreneurs with the mindset, skills, and knowledge to launch and grow successful ventures.",
      topics: ["Startup fundamentals", "Business model design", "Funding readiness", "Pitch development"],
    },
    {
      icon: Lightbulb,
      title: "Platform & Marketplace Business Models",
      description: "Understanding and building platform-based business models that create network effects and scale efficiently.",
      topics: ["Platform design", "Network effects", "Marketplace dynamics", "Platform governance"],
    },
  ];

  const formats = [
    {
      icon: Building,
      title: "Government & NGO Training Programs",
      description: "Customized programs for public sector capacity building and NGO staff development.",
    },
    {
      icon: Presentation,
      title: "Corporate Workshops",
      description: "Intensive workshops for corporate teams on specific skills and strategic topics.",
    },
    {
      icon: GraduationCap,
      title: "University & Youth Programs",
      description: "Engaging programs designed for students and young professionals entering the workforce.",
    },
    {
      icon: Video,
      title: "Online & Hybrid Masterclasses",
      description: "Flexible learning formats that reach participants across Bangladesh and beyond.",
    },
  ];

  const stats = [
    { value: "1000+", label: "Professionals Trained" },
    { value: "50+", label: "Training Programs" },
    { value: "20+", label: "Years Experience" },
    { value: "15+", label: "Sectors Covered" },
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
          <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-accent-500/10 blur-[150px]" />
          <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-primary-500/10 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:gap-16 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-medium uppercase tracking-wider text-primary-400">
                Training, Speaking & Mentorship
              </span>
              <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white">
                Building <span className="text-gradient">Human Capital</span> for National Growth
              </h1>
              <p className="mt-6 text-xl text-white/60 leading-relaxed">
                As a national trainer and mentor, I work on strengthening entrepreneurial mindset, SME capability, digital readiness and leadership capacity — ensuring that growth is owned by people.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary flex items-center gap-2"
                  >
                    <Mic className="h-4 w-4" />
                    Book for Speaking
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-outline flex items-center gap-2"
                  >
                    <MessageSquare className="h-4 w-4" />
                    Request Training
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="glass rounded-2xl p-6 text-center"
                >
                  <p className="text-3xl font-bold text-gradient md:text-4xl">{stat.value}</p>
                  <p className="mt-2 text-sm text-white/60">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Areas */}
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
              Training Areas
            </span>
            <h2 className="section-title mt-4">
              National Training <span className="text-gradient">Domains</span>
            </h2>
            <p className="section-subtitle mx-auto mt-6 text-center">
              Comprehensive training programs designed to build capacity across key areas of national importance.
            </p>
          </motion.div>

          <div className="space-y-6">
            {trainingAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-dark-700/30 p-8 transition-all hover:border-primary-500/20 hover:bg-dark-700/50"
              >
                <div className="grid gap-6 lg:grid-cols-[auto,1fr,auto] lg:items-center">
                  {/* Icon */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-500/20 to-primary-500/20 text-accent-400 transition-all group-hover:from-accent-500 group-hover:to-primary-500 group-hover:text-white">
                    <area.icon className="h-8 w-8" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-white">{area.title}</h3>
                    <p className="mt-2 text-white/60 leading-relaxed">{area.description}</p>
                  </div>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-2 lg:max-w-[250px]">
                    {area.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/60"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Formats */}
      <section className="relative bg-dark-900 section-padding">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-accent-500/5 blur-[150px]" />
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
              Delivery Formats
            </span>
            <h2 className="section-title mt-4">
              Flexible <span className="text-gradient">Training Formats</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {formats.map((format, index) => (
              <motion.div
                key={format.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group glass rounded-2xl p-8 text-center transition-all hover:bg-white/10"
              >
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-accent-500/10 text-accent-400 transition-all group-hover:bg-accent-500 group-hover:text-white">
                  <format.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-white">{format.title}</h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">{format.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="relative bg-dark-800 section-padding">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-900/10 via-dark-800 to-primary-900/10" />
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
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-500/10">
                  <Mic className="h-6 w-6 text-accent-400" />
                </div>
                <span className="text-sm font-medium uppercase tracking-wider text-primary-400">
                  Speaking Engagements
                </span>
              </div>

              <h2 className="section-title">
                Keynotes & <span className="text-gradient">Public Speaking</span>
              </h2>

              <p className="mt-6 text-lg text-white/60 leading-relaxed">
                Available for keynote addresses, panel discussions, and public speaking engagements on topics related to entrepreneurship, digital economy, and national development.
              </p>

              <div className="mt-8">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary flex items-center gap-2"
                  >
                    Book Speaking Engagement
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </Link>
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
                "Smart Bangladesh & Digital Economy",
                "Entrepreneurship & Youth Employment",
                "Platform Business Models",
                "SME Development Strategy",
                "Regional Economic Development",
                "Ethical Entrepreneurship",
              ].map((topic, index) => (
                <motion.div
                  key={topic}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4 glass rounded-xl p-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500/10 text-accent-400">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <span className="font-medium text-white">{topic}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mentorship */}
      <section className="relative bg-dark-900 section-padding">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid opacity-20" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent-500/20 to-primary-500/20">
                <Users className="h-8 w-8 text-accent-400" />
              </div>
            </div>

            <h2 className="section-title">
              Mentorship <span className="text-gradient">Philosophy</span>
            </h2>

            <blockquote className="mt-8 text-2xl font-display text-white/80 leading-relaxed md:text-3xl">
              "True mentorship is not about giving answers — it's about helping people ask better questions and build their own capacity to find solutions."
            </blockquote>

            <p className="mt-8 text-lg text-white/60 leading-relaxed">
              Through individual and group mentorship, I work with entrepreneurs, business leaders, and aspiring change-makers to help them navigate challenges, develop strategy, and achieve their goals.
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
              Invest in Your Team's Growth
            </h2>
            <p className="mt-4 text-lg text-white/60">
              Whether for your organization, institution, or community — let's discuss how training can accelerate your goals.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary flex items-center gap-2"
                >
                  Discuss Training Needs
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </Link>
              <Link href="/media">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-outline"
                >
                  View Thought Leadership
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
