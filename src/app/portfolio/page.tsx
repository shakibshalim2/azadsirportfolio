"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Building, FileText, Globe, Heart, Leaf, Target, X } from "lucide-react";
import Link from "next/link";

export default function PortfolioPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "National-Scale Construction Marketplace",
      category: "Digital Platform",
      description: "Designed and built a comprehensive digital marketplace connecting construction material suppliers, contractors, and homeowners across Bangladesh.",
      impact: "Transforming construction supply chain",
      icon: Building,
      color: "from-blue-500 to-cyan-500",
      details: {
        challenge: "Bangladesh's construction sector operates through fragmented, inefficient channels with limited price transparency and quality assurance.",
        solution: "Built NirmanBazaar.com as a comprehensive marketplace platform that aggregates suppliers, enables price comparison, and provides quality verification.",
        outcomes: [
          "Thousands of SKUs catalogued",
          "Multiple cities covered",
          "Improved price transparency for consumers",
        ],
      },
    },
    {
      id: 2,
      title: "On-Demand Healthcare Service Architecture",
      category: "HealthTech",
      description: "Developed the architecture and service model for Doctor Apa, bringing quality healthcare to doorsteps through technology.",
      impact: "Healthcare access for underserved communities",
      icon: Heart,
      color: "from-rose-500 to-pink-500",
      details: {
        challenge: "Quality healthcare remains inaccessible for many Bangladeshis, especially in semi-urban and rural areas.",
        solution: "Created Doctor Apa as an on-demand healthcare platform connecting patients with qualified healthcare professionals for consultations and home visits.",
        outcomes: [
          "Consultations facilitated",
          "Home visit services enabled",
          "Multiple districts served",
        ],
      },
    },
    {
      id: 3,
      title: "Rural Smart City Concept Development",
      category: "Urban Planning",
      description: "Conceptualized a union-based smart rural city model designed to create self-sufficient, digitally-connected development centers.",
      impact: "Blueprint for rural transformation",
      icon: Globe,
      color: "from-green-500 to-emerald-500",
      details: {
        challenge: "Rural Bangladesh lacks infrastructure investment focus, leading to urban migration and underdeveloped regional economies.",
        solution: "Developed the concept of union-level smart rural cities that combine digital infrastructure, economic clustering, and service delivery.",
        outcomes: [
          "Comprehensive concept document",
          "Policy recommendation framework",
          "Pilot implementation roadmap",
        ],
      },
    },
    {
      id: 4,
      title: "Multi-Sector Digital Platform Ecosystems",
      category: "Ecosystem Building",
      description: "Created interconnected digital platforms across construction, healthcare, agriculture, and services that share infrastructure and create synergies.",
      impact: "Ecosystem-level efficiencies",
      icon: Target,
      color: "from-violet-500 to-purple-500",
      details: {
        challenge: "Individual digital ventures often operate in silos, missing opportunities for shared learning and infrastructure.",
        solution: "Designed and built platforms with shared technology infrastructure, data insights, and cross-selling capabilities.",
        outcomes: [
          "Multiple interconnected platforms",
          "Shared technology stack",
          "Cross-platform user benefits",
        ],
      },
    },
    {
      id: 5,
      title: "National Training Curricula & Manuals",
      category: "Education",
      description: "Developed comprehensive training curricula and materials for entrepreneurship, digital transformation, and SME development programs.",
      impact: "Standardized national training",
      icon: FileText,
      color: "from-amber-500 to-orange-500",
      details: {
        challenge: "Lack of standardized, practical training materials for entrepreneurship and business development in Bangladesh.",
        solution: "Created comprehensive curricula covering brand building, SME structuring, digital transformation, and platform business models.",
        outcomes: [
          "Multiple training modules developed",
          "Government program adoption",
          "Thousands of trainees impacted",
        ],
      },
    },
    {
      id: 6,
      title: "Agro-Trade Platform Architecture",
      category: "AgriTech",
      description: "Designed platforms connecting rural agricultural producers with urban markets and export opportunities.",
      impact: "Market access for farmers",
      icon: Leaf,
      color: "from-lime-500 to-green-500",
      details: {
        challenge: "Rural farmers lack direct access to markets, facing multiple intermediaries that reduce their earnings.",
        solution: "Built Affix Agro Products as a platform connecting producers directly with buyers while ensuring quality and logistics.",
        outcomes: [
          "Direct farmer connections",
          "Quality certification process",
          "Expanded market reach",
        ],
      },
    },
  ];

  const categories = ["All", "Digital Platform", "HealthTech", "Urban Planning", "Ecosystem Building", "Education", "AgriTech"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center overflow-hidden bg-dark-900 pt-24 sm:pt-32"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute left-1/4 top-1/4 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] rounded-full bg-primary-500/10 blur-[100px] sm:blur-[150px]" />
          <div className="absolute right-1/4 bottom-1/4 h-[250px] sm:h-[400px] w-[250px] sm:w-[400px] rounded-full bg-accent-500/10 blur-[80px] sm:blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs sm:text-sm font-medium uppercase tracking-wider text-primary-400">
              Portfolio Highlights
            </span>
            <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white">
              Selected <span className="text-gradient">Projects</span>
            </h1>
            <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-white/60 leading-relaxed">
              A selection of significant projects demonstrating the intersection of business innovation, technology implementation, and national development thinking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative bg-dark-800 py-6 sm:py-8">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary-500 text-white"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative bg-dark-800 section-padding pt-8">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-800 to-dark-900" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelectedProject(project.id)}
                  className="group cursor-pointer relative overflow-hidden rounded-3xl border border-white/5 bg-dark-700/30 transition-all hover:border-white/10 hover:bg-dark-700/50"
                >
                  {/* Header with gradient */}
                  <div className={`h-32 bg-gradient-to-br ${project.color} opacity-20`} />

                  {/* Icon */}
                  <div className={`absolute left-6 top-16 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${project.color} shadow-lg`}>
                    <project.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="p-6 pt-12">
                    <span className="text-xs font-medium uppercase tracking-wider text-white/40">
                      {project.category}
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-white leading-tight">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm text-white/60 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-xs text-primary-400">{project.impact}</span>
                      <ArrowRight className="h-4 w-4 text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark-900/80 backdrop-blur-sm p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-3xl bg-dark-800 border border-white/10"
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;

                return (
                  <>
                    {/* Header */}
                    <div className={`h-40 bg-gradient-to-br ${project.color} relative`}>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white transition-colors hover:bg-black/40"
                      >
                        <X className="h-5 w-5" />
                      </button>
                      <div className={`absolute left-6 bottom-0 translate-y-1/2 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${project.color} shadow-xl border-4 border-dark-800`}>
                        <project.icon className="h-10 w-10 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 pt-14">
                      <span className="text-xs font-medium uppercase tracking-wider text-primary-400">
                        {project.category}
                      </span>
                      <h2 className="mt-2 text-2xl font-bold text-white">
                        {project.title}
                      </h2>
                      <p className="mt-4 text-white/60 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Challenge */}
                      <div className="mt-8">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40">
                          The Challenge
                        </h4>
                        <p className="mt-2 text-white/70 leading-relaxed">
                          {project.details.challenge}
                        </p>
                      </div>

                      {/* Solution */}
                      <div className="mt-6">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40">
                          The Solution
                        </h4>
                        <p className="mt-2 text-white/70 leading-relaxed">
                          {project.details.solution}
                        </p>
                      </div>

                      {/* Outcomes */}
                      <div className="mt-6">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40">
                          Key Outcomes
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {project.details.outcomes.map((outcome, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-white/70">
                              <div className={`h-2 w-2 rounded-full bg-gradient-to-br ${project.color}`} />
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Impact Badge */}
                      <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-500/10 px-4 py-2 text-sm text-primary-400">
                        <Target className="h-4 w-4" />
                        {project.impact}
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="relative bg-dark-900 py-24">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-display font-bold text-white md:text-4xl">
              Have a Project in Mind?
            </h2>
            <p className="mt-4 text-lg text-white/60">
              Let's discuss how we can work together to create impactful solutions.
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
              <Link href="/ventures">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-outline"
                >
                  View All Ventures
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
