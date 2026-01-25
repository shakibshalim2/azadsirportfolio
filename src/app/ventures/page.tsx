"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Building, Code, Heart, Home, Leaf, Plane, Tv, Hammer } from "lucide-react";
import Link from "next/link";

export default function VenturesPage() {

  const ventures = [
    {
      icon: Building,
      name: "NirmanBazaar.com",
      tagline: "Construction & Building Materials Marketplace",
      description: "A comprehensive digital platform connecting construction material suppliers, contractors, and homeowners. Digitizing Bangladesh's construction supply chain.",
      category: "Digital Marketplace",
      status: "Active",
      color: "from-blue-500 to-cyan-500",
      href: "#",
    },
    {
      icon: Heart,
      name: "Doctor Apa",
      tagline: "On-Demand Digital Healthcare Platform",
      description: "Making quality healthcare accessible through technology. Connecting patients with healthcare professionals for consultations, home visits, and care.",
      category: "HealthTech",
      status: "Active",
      color: "from-rose-500 to-pink-500",
      href: "#",
    },
    {
      icon: Home,
      name: "My House App",
      tagline: "Smart Housing & Management",
      description: "An all-in-one application for house management, property discovery, and smart home solutions designed for Bangladeshi homeowners.",
      category: "PropTech",
      status: "Active",
      color: "from-violet-500 to-purple-500",
      href: "#",
    },
    {
      icon: Hammer,
      name: "Affix Design & Build",
      tagline: "Construction, Infrastructure & Interiors",
      description: "Full-service construction and design firm delivering quality infrastructure projects, from residential to commercial developments.",
      category: "Construction",
      status: "Active",
      color: "from-amber-500 to-orange-500",
      href: "#",
    },
    {
      icon: Leaf,
      name: "Affix Agro Products",
      tagline: "Cashew Nuts, Spices & Agri-Trading",
      description: "Connecting rural agricultural producers with urban and export markets. Focused on quality agro-products from South Bengal.",
      category: "AgriTech",
      status: "Active",
      color: "from-green-500 to-emerald-500",
      href: "#",
    },
    {
      icon: Code,
      name: "TechAffix",
      tagline: "Software & Digital Product Development",
      description: "Building technology solutions that power our ecosystem ventures. Custom software development for national-scale platforms.",
      category: "Technology",
      status: "Active",
      color: "from-indigo-500 to-blue-500",
      href: "#",
    },
    {
      icon: Plane,
      name: "FixTrip",
      tagline: "Tourism & Travel Solutions",
      description: "Promoting Bangladesh's tourism potential through curated travel experiences and destination development.",
      category: "Travel",
      status: "Development",
      color: "from-teal-500 to-cyan-500",
      href: "#",
    },
    {
      icon: Tv,
      name: "Azad News / Media Platforms",
      tagline: "Digital Journalism & Public Discourse",
      description: "Contributing to informed public discourse through quality digital journalism and media platforms.",
      category: "Media",
      status: "Active",
      color: "from-red-500 to-rose-500",
      href: "#",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center overflow-hidden bg-dark-900 pt-24 sm:pt-32"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute left-0 top-1/3 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full bg-primary-500/10 blur-[150px]" />
          <div className="absolute right-0 bottom-1/3 h-[400px] w-[400px] rounded-full bg-accent-500/10 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-xs sm:text-sm font-medium uppercase tracking-wider text-primary-400">
              Business & Ventures
            </span>
            <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white">
              Building <span className="text-gradient">Interconnected</span> Ecosystems
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/60 leading-relaxed">
              Shamim Azad leads and advises multiple ventures under Affix Bangladesh Limited, operating across diversified but interconnected sectors that together form a cohesive ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ventures Grid */}
      <section className="relative bg-dark-800 section-padding">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-2">
            {ventures.map((venture, index) => (
              <motion.div
                key={venture.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/5 bg-dark-700/30 p-4 sm:p-6 md:p-8 transition-all hover:border-white/10 hover:bg-dark-700/50"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${venture.color} opacity-0 transition-opacity duration-500 group-hover:opacity-5`} />

                {/* Header */}
                <div className="relative flex items-start justify-between mb-4 sm:mb-6">
                  <div className={`flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br ${venture.color}`}>
                    <venture.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`rounded-full px-2 sm:px-3 py-1 text-xs font-medium ${venture.status === "Active"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-yellow-500/10 text-yellow-400"
                      }`}>
                      {venture.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <span className="text-xs font-medium uppercase tracking-wider text-white/40">
                    {venture.category}
                  </span>
                  <h3 className="mt-2 text-2xl font-bold text-white">{venture.name}</h3>
                  <p className="mt-1 text-primary-400">{venture.tagline}</p>
                  <p className="mt-4 text-white/60 leading-relaxed">{venture.description}</p>
                </div>

                {/* Link */}
                <div className="relative mt-6 flex items-center gap-2 text-primary-400 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="relative bg-dark-900 section-padding">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid opacity-20" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-medium uppercase tracking-wider text-primary-400">
                The Ecosystem Approach
              </span>
              <h2 className="section-title mt-4">
                Not Isolated Businesses, But{" "}
                <span className="text-gradient">Connected Platforms</span>
              </h2>
              <div className="mt-6 space-y-4 text-lg text-white/60 leading-relaxed">
                <p>
                  Each venture is designed to complement others, creating synergies that multiply impact. Construction connects with housing. Healthcare connects with community. Agriculture connects with logistics.
                </p>
                <p>
                  This interconnected approach allows for shared infrastructure, data insights, and customer relationships that benefit the entire ecosystem.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/ecosystem">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary flex items-center gap-2"
                  >
                    Explore Ecosystem Strategy
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
              className="relative"
            >
              {/* Ecosystem Visualization */}
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Central Hub */}
                <div className="absolute inset-[30%] rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-lg font-display font-bold text-white">Affix</p>
                    <p className="text-sm text-white/60">Bangladesh</p>
                  </div>
                </div>

                {/* Orbiting Ventures */}
                {ventures.slice(0, 6).map((venture, index) => {
                  const angle = (index * 60 - 90) * (Math.PI / 180);
                  const radius = 45;
                  const x = 50 + radius * Math.cos(angle);
                  const y = 50 + radius * Math.sin(angle);

                  return (
                    <motion.div
                      key={venture.name}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                      className="absolute"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${venture.color} shadow-lg`}>
                        <venture.icon className="h-6 w-6 text-white" />
                      </div>
                    </motion.div>
                  );
                })}

                {/* Connection Lines */}
                <svg className="absolute inset-0 h-full w-full" style={{ zIndex: -1 }}>
                  {ventures.slice(0, 6).map((_, index) => {
                    const angle = (index * 60 - 90) * (Math.PI / 180);
                    const x = 50 + 45 * Math.cos(angle);
                    const y = 50 + 45 * Math.sin(angle);
                    return (
                      <line
                        key={index}
                        x1="50%"
                        y1="50%"
                        x2={`${x}%`}
                        y2={`${y}%`}
                        stroke="rgba(14, 165, 233, 0.2)"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                      />
                    );
                  })}
                </svg>
              </div>
            </motion.div>
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
              Interested in Partnership?
            </h2>
            <p className="mt-4 text-lg text-white/60">
              Explore investment, partnership, or collaboration opportunities across our ventures.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary flex items-center gap-2 mx-auto"
                >
                  Start a Conversation
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
