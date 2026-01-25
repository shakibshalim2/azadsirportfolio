"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Cloud, Cpu, Database, Globe, Lock, Network, Server, Smartphone, Zap } from "lucide-react";
import Link from "next/link";

export default function DigitalInfrastructurePage() {

  const strategicDomains = [
    {
      icon: Building2,
      title: "Smart City & City Management Systems",
      description: "Designing digital systems for urban governance, service delivery, and citizen engagement.",
      features: ["Urban planning tools", "Citizen services portal", "Infrastructure monitoring"],
    },
    {
      icon: Globe,
      title: "Platform-based Public Service Models",
      description: "Creating digital platforms that deliver public services efficiently and transparently.",
      features: ["Healthcare access", "Education delivery", "Financial inclusion"],
    },
    {
      icon: Database,
      title: "Data-driven Governance Support",
      description: "Building data infrastructure that enables evidence-based decision making.",
      features: ["Analytics dashboards", "Reporting systems", "Performance tracking"],
    },
    {
      icon: Network,
      title: "Marketplace-led Infrastructure Digitization",
      description: "Transforming traditional industries through digital marketplace models.",
      features: ["Construction marketplaces", "Agri-trade platforms", "Service networks"],
    },
  ];

  const platformTypes = [
    {
      name: "Housing Platforms",
      description: "Digital systems for property discovery, management, and transactions",
      icon: Building2,
    },
    {
      name: "Health Platforms",
      description: "Accessible healthcare through technology-enabled service delivery",
      icon: Smartphone,
    },
    {
      name: "Construction Marketplaces",
      description: "Connecting suppliers, contractors, and homeowners digitally",
      icon: Server,
    },
    {
      name: "Logistics & Service Platforms",
      description: "Smart supply chains linking production to consumption",
      icon: Cloud,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] sm:min-h-[80vh] flex items-center overflow-hidden bg-dark-900 pt-24 sm:pt-32"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-dark-900 to-accent-900/20" />

          {/* Animated circuit lines */}
          <svg className="absolute inset-0 h-full w-full opacity-20">
            <defs>
              <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <path
              d="M0,200 L200,200 L200,100 L400,100 L400,300 L600,300"
              stroke="url(#circuit-gradient)"
              strokeWidth="1"
              fill="none"
              strokeDasharray="10 5"
            />
            <path
              d="M0,400 L150,400 L150,250 L350,250 L350,450 L500,450"
              stroke="url(#circuit-gradient)"
              strokeWidth="1"
              fill="none"
              strokeDasharray="10 5"
            />
          </svg>

          <div className="absolute left-1/3 top-1/4 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full bg-primary-500/10 blur-[150px]" />
          <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-accent-500/10 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6 sm:mb-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-primary-400">
                <Cpu className="h-3 w-3 sm:h-4 sm:w-4" />
                Digital Infrastructure Strategy
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight">
              Technology as{" "}
              <span className="text-gradient">National Infrastructure</span>
            </h1>

            <p className="mx-auto mt-6 sm:mt-8 max-w-3xl text-base sm:text-lg md:text-xl text-white/60 leading-relaxed">
              In the 21st century, platforms are infrastructure. Housing systems, health platforms, construction marketplaces and service networks must be designed with the same seriousness as roads, power and telecom.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary"
                >
                  Discuss Digital Strategy
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Platform Types as Infrastructure */}
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
              Thought Leadership
            </span>
            <h2 className="section-title mt-4">
              Platforms as <span className="text-gradient">Public Goods</span>
            </h2>
            <p className="section-subtitle mx-auto mt-6 text-center">
              Advocating for treating digital platforms with the same national importance as traditional infrastructure.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {platformTypes.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-dark-700/30 p-8 text-center transition-all hover:border-primary-500/30 hover:bg-dark-700/50"
              >
                {/* Top gradient line */}
                <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-500/10 to-accent-500/10 text-primary-400 transition-all group-hover:from-primary-500 group-hover:to-accent-500 group-hover:text-white">
                  <platform.icon className="h-8 w-8" />
                </div>

                <h3 className="text-lg font-semibold text-white">{platform.name}</h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">{platform.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Comparison Strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 glass rounded-2xl p-8"
          >
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Traditional Infrastructure</h4>
                <ul className="space-y-2">
                  {["Roads & Highways", "Power Grid", "Telecommunications", "Ports & Railways"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/60">
                      <div className="h-1.5 w-1.5 rounded-full bg-white/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gradient mb-4">Digital Infrastructure (21st Century)</h4>
                <ul className="space-y-2">
                  {["Platform Marketplaces", "Data Networks", "Payment Systems", "Service Delivery Platforms"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/60">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Domains */}
      <section className="relative bg-dark-900 section-padding">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute right-0 top-1/3 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full bg-primary-500/5 blur-[150px]" />
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
              Strategic Domains
            </span>
            <h2 className="section-title mt-4">
              Areas of <span className="text-gradient">Focus</span>
            </h2>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {strategicDomains.map((domain, index) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-dark-800/50 p-8 transition-all hover:border-primary-500/20"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 text-primary-400">
                      <domain.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white">{domain.title}</h3>
                    <p className="mt-3 text-white/60 leading-relaxed">{domain.description}</p>

                    {/* Features */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {domain.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/60"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="relative bg-dark-800 py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 via-dark-800 to-accent-900/20" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Zap className="mx-auto h-12 w-12 text-primary-400 mb-6" />
            <blockquote className="text-3xl font-display font-bold text-white md:text-4xl leading-relaxed">
              "Platform-led nation building, where technology enables{" "}
              <span className="text-gradient">access, transparency and efficiency</span>{" "}
              at scale."
            </blockquote>
            <p className="mt-8 text-lg text-white/60">
              This is the vision driving our digital infrastructure work — creating systems that serve national development goals while enabling sustainable business models.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Smart Nation Principles */}
      <section className="relative bg-dark-900 section-padding">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid opacity-20" />
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
              Smart Nation Thinking
            </span>
            <h2 className="section-title mt-4">
              Principles for <span className="text-gradient">Digital Bangladesh</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Globe,
                title: "Universal Access",
                description: "Digital services must reach every citizen, regardless of location or economic status.",
              },
              {
                icon: Lock,
                title: "Trust & Security",
                description: "Systems built with privacy, security, and user trust at their foundation.",
              },
              {
                icon: Zap,
                title: "Efficiency at Scale",
                description: "Platforms designed to handle national-scale operations efficiently.",
              },
            ].map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center glass rounded-2xl p-8"
              >
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary-500/10 text-primary-400">
                  <principle.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-white">{principle.title}</h3>
                <p className="mt-3 text-white/60 leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
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
              Partner on Digital Transformation
            </h2>
            <p className="mt-4 text-lg text-white/60">
              Whether you're in government, enterprise, or development — let's explore how digital infrastructure can serve your goals.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary flex items-center gap-2"
                >
                  Start a Conversation
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </Link>
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-outline"
                >
                  View Portfolio
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
