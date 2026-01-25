"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, BookOpen, ExternalLink, FileText, Mic, Newspaper, PlayCircle, Radio, Video, Youtube } from "lucide-react";
import Link from "next/link";

export default function MediaPage() {

  const contentChannels = [
    {
      icon: FileText,
      title: "Articles & Essays",
      description: "In-depth written pieces on business, policy, and digital economy topics.",
      count: "50+",
    },
    {
      icon: Video,
      title: "Video Podcasts & Interviews",
      description: "Video content exploring entrepreneurship, development, and national issues.",
      count: "30+",
    },
    {
      icon: Newspaper,
      title: "Opinion Columns",
      description: "Commentary on current affairs and policy matters in national publications.",
      count: "20+",
    },
    {
      icon: Mic,
      title: "Keynote Speeches",
      description: "Major addresses at conferences, summits, and public forums.",
      count: "40+",
    },
  ];

  const coreThemes = [
    {
      title: "Smart Bangladesh",
      description: "Building a digitally empowered nation through strategic technology adoption.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Digital Economy",
      description: "Harnessing platform economics for national growth and opportunity creation.",
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "SME & Youth Employment",
      description: "Creating sustainable employment through entrepreneurship and SME development.",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Ethical Entrepreneurship",
      description: "Business practices that balance profit with purpose and social responsibility.",
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Future of Cities & Infrastructure",
      description: "Designing urban systems and infrastructure for tomorrow's Bangladesh.",
      color: "from-rose-500 to-pink-500",
    },
  ];

  const featuredContent = [
    {
      type: "Article",
      title: "Platform-Led Nation Building: A New Paradigm for Bangladesh",
      description: "Exploring how digital platforms can serve as national infrastructure for development.",
      date: "January 2026",
      readTime: "8 min read",
    },
    {
      type: "Interview",
      title: "Building Ecosystems That Last: A Conversation on Strategic Entrepreneurship",
      description: "Discussion on creating interconnected business systems that drive systemic change.",
      date: "December 2025",
      readTime: "15 min watch",
    },
    {
      type: "Speech",
      title: "The Next Decade: Opportunities and Imperatives for Bangladesh",
      description: "Keynote address on Bangladesh's development trajectory and strategic priorities.",
      date: "November 2025",
      readTime: "20 min watch",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[50vh] sm:min-h-[70vh] flex items-center overflow-hidden bg-dark-900 pt-24 sm:pt-32"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute right-1/4 top-1/4 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full bg-rose-500/10 blur-[150px]" />
          <div className="absolute left-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-primary-500/10 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs sm:text-sm font-medium uppercase tracking-wider text-primary-400">
              Media, Writing & Thought Leadership
            </span>
            <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white">
              Shaping the{" "}
              <span className="text-gradient">National Conversation</span>
            </h1>
            <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-white/60 leading-relaxed">
              Through writing, speaking, and media engagement, I contribute to public discourse on business, technology, policy, and Bangladesh's development future.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary flex items-center gap-2"
                >
                  <Youtube className="h-4 w-4" />
                  YouTube Channel
                </motion.button>
              </a>
              <Link href="#featured">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-outline"
                >
                  View Featured Content
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Channels */}
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
              Content Channels
            </span>
            <h2 className="section-title mt-4">
              Ways to <span className="text-gradient">Engage</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contentChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group glass rounded-2xl p-8 text-center transition-all hover:bg-white/10"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-rose-500/10 text-rose-400 transition-all group-hover:bg-rose-500 group-hover:text-white">
                  <channel.icon className="h-7 w-7" />
                </div>
                <p className="text-3xl font-bold text-gradient">{channel.count}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{channel.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{channel.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Themes */}
      <section className="relative bg-dark-900 section-padding">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute left-0 top-1/2 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] -translate-y-1/2 rounded-full bg-accent-500/5 blur-[150px]" />
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
              Core Themes
            </span>
            <h2 className="section-title mt-4">
              Topics I <span className="text-gradient">Write & Speak About</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreThemes.map((theme, index) => (
              <motion.div
                key={theme.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-dark-800/50 p-8 transition-all hover:border-white/10"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.color} opacity-0 transition-opacity group-hover:opacity-5`} />

                <h3 className="relative text-xl font-bold text-white">{theme.title}</h3>
                <p className="relative mt-3 text-white/60 leading-relaxed">{theme.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section id="featured" className="relative bg-dark-800 section-padding">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-900/10 via-dark-800 to-primary-900/10" />
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
              Featured
            </span>
            <h2 className="section-title mt-4">
              Recent <span className="text-gradient">Content</span>
            </h2>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {featuredContent.map((content, index) => (
              <motion.div
                key={content.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-dark-700/30 p-8 transition-all hover:border-primary-500/20 hover:bg-dark-700/50"
              >
                {/* Type Badge */}
                <span className="inline-flex items-center gap-1 rounded-full bg-rose-500/10 px-3 py-1 text-xs font-medium text-rose-400">
                  {content.type === "Article" && <FileText className="h-3 w-3" />}
                  {content.type === "Interview" && <Video className="h-3 w-3" />}
                  {content.type === "Speech" && <Mic className="h-3 w-3" />}
                  {content.type}
                </span>

                <h3 className="mt-4 text-xl font-bold text-white leading-tight">{content.title}</h3>
                <p className="mt-3 text-white/60 leading-relaxed">{content.description}</p>

                <div className="mt-6 flex items-center justify-between text-sm text-white/40">
                  <span>{content.date}</span>
                  <span>{content.readTime}</span>
                </div>

                {/* Hover Link */}
                <div className="mt-6 flex items-center gap-2 text-primary-400 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="text-sm font-medium">Read / Watch</span>
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-outline inline-flex items-center gap-2"
            >
              View All Content
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* YouTube Section */}
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
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-red-500/20 to-rose-500/20">
                <Youtube className="h-10 w-10 text-red-400" />
              </div>
            </div>

            <h2 className="section-title">
              Subscribe to the <span className="text-gradient">YouTube Channel</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60 leading-relaxed">
              Join the conversation on Bangladesh's future. Subscribe for video podcasts, interviews, keynotes, and discussions on entrepreneurship, digital economy, and national development.
            </p>

            <div className="mt-8">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-full bg-red-500 px-8 py-4 text-white font-medium transition-all hover:bg-red-600"
                >
                  <PlayCircle className="h-5 w-5" />
                  Subscribe on YouTube
                  <ExternalLink className="h-4 w-4" />
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Media Kit CTA */}
      <section className="relative bg-dark-800 py-24">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-display font-bold text-white md:text-4xl">
              Media & Press Inquiries
            </h2>
            <p className="mt-4 text-lg text-white/60">
              For interviews, quotes, or media collaborations — reach out to discuss how we can work together.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary flex items-center gap-2"
                >
                  Media Inquiry
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-outline flex items-center gap-2"
              >
                <FileText className="h-4 w-4" />
                Download Media Kit
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
