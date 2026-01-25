"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Play, Image as ImageIcon, Video, Award, Users, Briefcase } from "lucide-react";
import Link from "next/link";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Speaking", "Events", "Media", "Awards", "Team"];

  // Gallery items with placeholder data - in production, these would be actual images
  const galleryItems = [
    {
      id: 1,
      type: "image",
      category: "Speaking",
      title: "National Entrepreneurship Summit",
      description: "Keynote address at the National Entrepreneurship Summit organized by Bangladesh SME Foundation",
      icon: Users,
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      type: "image",
      category: "Events",
      title: "Brand Building Workshop",
      description: "Conducting brand building workshop for emerging entrepreneurs in Dhaka",
      icon: Briefcase,
      color: "bg-gradient-to-br from-violet-500 to-purple-500",
    },
    {
      id: 3,
      type: "video",
      category: "Media",
      title: "Digital Bangladesh Vision",
      description: "Panel discussion on Digital Bangladesh and the role of private sector innovation",
      icon: Video,
      color: "bg-gradient-to-br from-rose-500 to-pink-500",
    },
    {
      id: 4,
      type: "image",
      category: "Awards",
      title: "BRAC Business Award Recognition",
      description: "Receiving recognition for contribution to entrepreneurship ecosystem development",
      icon: Award,
      color: "bg-gradient-to-br from-amber-500 to-orange-500",
    },
    {
      id: 5,
      type: "image",
      category: "Speaking",
      title: "University Guest Lecture",
      description: "Guest lecture on platform business models at a leading university",
      icon: Users,
      color: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
    {
      id: 6,
      type: "image",
      category: "Team",
      title: "NirmanBazaar Team Retreat",
      description: "Strategic planning session with the NirmanBazaar founding team",
      icon: Briefcase,
      color: "bg-gradient-to-br from-cyan-500 to-teal-500",
    },
    {
      id: 7,
      type: "video",
      category: "Media",
      title: "BTV Interview",
      description: "Discussion on construction sector digitization on national television",
      icon: Video,
      color: "bg-gradient-to-br from-indigo-500 to-blue-500",
    },
    {
      id: 8,
      type: "image",
      category: "Events",
      title: "Barishal Entrepreneurs Meet",
      description: "Community gathering with entrepreneurs from Barishal division",
      icon: Users,
      color: "bg-gradient-to-br from-lime-500 to-green-500",
    },
    {
      id: 9,
      type: "image",
      category: "Speaking",
      title: "Digital Transformation Forum",
      description: "Speaking at the Digital Transformation Forum on SME digitization strategies",
      icon: Users,
      color: "bg-gradient-to-br from-fuchsia-500 to-pink-500",
    },
    {
      id: 10,
      type: "image",
      category: "Awards",
      title: "Innovation Recognition",
      description: "Recognition for innovative approaches in healthcare service delivery",
      icon: Award,
      color: "bg-gradient-to-br from-yellow-500 to-amber-500",
    },
    {
      id: 11,
      type: "image",
      category: "Team",
      title: "Doctor Apa Launch",
      description: "Launch event for Doctor Apa healthcare service platform",
      icon: Briefcase,
      color: "bg-gradient-to-br from-red-500 to-rose-500",
    },
    {
      id: 12,
      type: "video",
      category: "Media",
      title: "Podcast Feature",
      description: "Featured on a leading business podcast discussing ecosystem building",
      icon: Video,
      color: "bg-gradient-to-br from-purple-500 to-violet-500",
    },
  ];

  const filteredItems = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center overflow-hidden bg-dark-900 pt-24 sm:pt-32"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute left-1/3 top-1/4 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] rounded-full bg-primary-500/10 blur-[100px] sm:blur-[150px]" />
          <div className="absolute right-1/3 bottom-1/4 h-[250px] sm:h-[400px] w-[250px] sm:w-[400px] rounded-full bg-accent-500/10 blur-[80px] sm:blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs sm:text-sm font-medium uppercase tracking-wider text-primary-400">
              Visual Journey
            </span>
            <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white">
              Photo & <span className="text-gradient">Video Gallery</span>
            </h1>
            <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-white/60 leading-relaxed">
              Moments from speaking engagements, events, media appearances, and team milestones across the journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="relative bg-dark-800 py-6 sm:py-8">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all ${activeFilter === filter
                    ? "bg-primary-500 text-white"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                  }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="relative bg-dark-800 section-padding pt-8">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-800 to-dark-900" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  onClick={() => setSelectedImage(item.id)}
                  className="group cursor-pointer relative overflow-hidden rounded-2xl aspect-square"
                >
                  {/* Placeholder gradient background */}
                  <div className={`absolute inset-0 ${item.color}`}>
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <item.icon className="h-16 w-16 text-white/20" />
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="text-xs font-medium uppercase tracking-wider text-primary-400">
                        {item.category}
                      </span>
                      <h3 className="mt-1 text-lg font-bold text-white line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Type Indicator */}
                  <div className="absolute right-3 top-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm">
                      {item.type === "video" ? (
                        <Play className="h-4 w-4 text-white" />
                      ) : (
                        <ImageIcon className="h-4 w-4 text-white" />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Gallery Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-center"
          >
            {[
              { label: "Speaking Events", value: "50+" },
              { label: "Media Features", value: "100+" },
              { label: "Workshops Conducted", value: "200+" },
              { label: "Team Moments", value: "∞" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card rounded-2xl px-8 py-6">
                <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                <div className="mt-1 text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark-900/90 backdrop-blur-sm p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              {(() => {
                const item = galleryItems.find(i => i.id === selectedImage);
                if (!item) return null;

                return (
                  <>
                    {/* Close Button */}
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-dark-700 text-white transition-colors hover:bg-dark-600 z-10"
                    >
                      <X className="h-6 w-6" />
                    </button>

                    {/* Image/Video Container */}
                    <div className={`aspect-video w-full rounded-2xl ${item.color} flex items-center justify-center overflow-hidden`}>
                      <div className="text-center p-8">
                        <item.icon className="mx-auto h-24 w-24 text-white/30" />
                        {item.type === "video" && (
                          <div className="mt-4 flex items-center justify-center gap-2">
                            <Play className="h-6 w-6 text-white" />
                            <span className="text-white/80">Video Content</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Caption */}
                    <div className="mt-6 text-center">
                      <span className="text-xs font-medium uppercase tracking-wider text-primary-400">
                        {item.category}
                      </span>
                      <h3 className="mt-2 text-2xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-white/60 max-w-2xl mx-auto">
                        {item.description}
                      </p>
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
              Want to Invite for an Event?
            </h2>
            <p className="mt-4 text-lg text-white/60">
              Available for speaking engagements, panel discussions, and training sessions.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary flex items-center gap-2"
                >
                  Send Speaking Inquiry
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </Link>
              <Link href="/training">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-outline"
                >
                  View Speaking Topics
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
