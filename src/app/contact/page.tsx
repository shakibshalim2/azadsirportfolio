"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Send, MapPin, Mail, Phone, Clock, Linkedin, Youtube, Twitter, MessageCircle, Building, Users, Lightbulb, GraduationCap, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", organization: "", inquiryType: "", message: "" });
    }, 3000);
  };

  const collaborationTypes = [
    {
      icon: Building,
      title: "Business Collaboration",
      description: "Partnership discussions, investment conversations, or strategic alliances",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: GraduationCap,
      title: "Speaking & Training",
      description: "Keynotes, workshops, guest lectures, and training program facilitation",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: Lightbulb,
      title: "Consulting & Advisory",
      description: "Strategic advisory for startups, digital transformation, and ecosystem building",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Community Initiatives",
      description: "Social impact projects, regional development, and community programs",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Dhaka, Bangladesh",
      subtext: "Originally from Barishal",
    },
    {
      icon: Mail,
      label: "Email",
      value: "hello@shamimazad.com",
      subtext: "For professional inquiries",
    },
    {
      icon: Phone,
      label: "Phone & WhatsApp",
      value: "+880 1537 056 343",
      subtext: "Available for business calls & texts",
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 48 hours",
      subtext: "For genuine collaboration requests",
    },
  ];

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:bg-blue-600" },
    { icon: Youtube, label: "YouTube", href: "#", color: "hover:bg-red-600" },
    { icon: Twitter, label: "Twitter", href: "#", color: "hover:bg-sky-500" },
    { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/8801537056343", color: "hover:bg-green-600" },
  ];

  const inquiryTypes = [
    "Business Collaboration",
    "Speaking Engagement",
    "Training Request",
    "Advisory / Consulting",
    "Media / Interview",
    "Community Initiative",
    "General Inquiry",
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center overflow-hidden bg-dark-900 pt-24 sm:pt-32"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute left-1/4 top-1/3 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] rounded-full bg-primary-500/10 blur-[100px] sm:blur-[150px]" />
          <div className="absolute right-1/4 bottom-1/3 h-[250px] sm:h-[400px] w-[250px] sm:w-[400px] rounded-full bg-accent-500/10 blur-[80px] sm:blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs sm:text-sm font-medium uppercase tracking-wider text-primary-400">
              Let's Connect
            </span>
            <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white">
              Build Something <span className="text-gradient">Meaningful</span>
            </h1>
            <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-white/60 leading-relaxed">
              Whether it's a business collaboration, speaking opportunity, or community initiative—
              meaningful work starts with a conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Collaboration Types */}
      <section className="relative bg-dark-800 section-padding">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-white md:text-4xl">
              Collaboration Opportunities
            </h2>
            <p className="mt-4 text-lg text-white/60">
              Open to conversations that create mutual value and meaningful impact
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {collaborationTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group glass-card rounded-3xl p-8 text-center transition-all hover:bg-white/5"
              >
                <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${type.color} transition-transform group-hover:scale-110`}>
                  <type.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">
                  {type.title}
                </h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">
                  {type.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative bg-dark-900 section-padding">
        <div className="absolute inset-0">
          <div className="absolute left-0 bottom-0 h-[500px] w-[500px] rounded-full bg-primary-500/5 blur-[150px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Info - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl font-display font-bold text-white">
                Get in Touch
              </h2>
              <p className="mt-4 text-white/60 leading-relaxed">
                I value genuine connections and meaningful conversations.
                If you have a clear purpose for reaching out, I'd love to hear from you.
              </p>

              {/* Contact Details */}
              <div className="mt-10 space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-500/10 text-primary-400">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs font-medium uppercase tracking-wider text-white/40">
                        {info.label}
                      </span>
                      <p className="mt-1 text-lg font-medium text-white">
                        {info.value}
                      </p>
                      <p className="text-sm text-white/50">
                        {info.subtext}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <span className="text-sm font-medium uppercase tracking-wider text-white/40">
                  Connect on Social
                </span>
                <div className="mt-4 flex gap-3">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-white/60 transition-all ${social.color} hover:text-white`}
                    >
                      <social.icon className="h-5 w-5" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="mt-12 rounded-2xl border border-white/5 bg-white/5 p-6">
                <p className="text-lg italic text-white/80">
                  "The best collaborations begin with shared vision and mutual respect."
                </p>
                <p className="mt-3 text-sm text-primary-400">
                  — Shamim Azad
                </p>
              </div>
            </motion.div>

            {/* Contact Form - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="glass-card rounded-3xl p-8 lg:p-10">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                      <CheckCircle className="h-10 w-10" />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-white">
                      Message Sent Successfully!
                    </h3>
                    <p className="mt-2 text-white/60">
                      Thank you for reaching out. I'll get back to you within 48 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      {/* Name */}
                      <div>
                        <label className="block text-sm font-medium text-white/60 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                          placeholder="John Doe"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-white/60 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    {/* Organization */}
                    <div>
                      <label className="block text-sm font-medium text-white/60 mb-2">
                        Organization / Company
                      </label>
                      <input
                        type="text"
                        value={formState.organization}
                        onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                        placeholder="Your Organization"
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label className="block text-sm font-medium text-white/60 mb-2">
                        Inquiry Type *
                      </label>
                      <select
                        required
                        value={formState.inquiryType}
                        onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-primary-500 focus:ring-1 focus:ring-primary-500 appearance-none"
                      >
                        <option value="" disabled className="bg-dark-800">
                          Select inquiry type
                        </option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type} className="bg-dark-800">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-white/60 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-primary-500 focus:ring-1 focus:ring-primary-500 resize-none"
                        placeholder="Please describe what you'd like to discuss or propose..."
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-primary w-full flex items-center justify-center gap-2"
                    >
                      Send Message
                      <Send className="h-4 w-4" />
                    </motion.button>

                    <p className="text-center text-xs text-white/40">
                      By submitting this form, you agree to respectful and professional communication.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="relative bg-dark-800 section-padding">
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-display font-bold text-white md:text-3xl">
              Explore More
            </h2>
            <p className="mt-3 text-white/60">
              Learn more about my work and offerings
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "View Portfolio", description: "See selected projects and case studies", href: "/portfolio", icon: Lightbulb },
              { title: "Watch Videos", description: "Explore talks and media appearances", href: "/media", icon: Youtube },
              { title: "Learn About Ventures", description: "Discover the businesses I've built", href: "/ventures", icon: Building },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="group block glass-card rounded-2xl p-6 transition-all hover:bg-white/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10 text-primary-400 transition-colors group-hover:bg-primary-500 group-hover:text-white">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/60">
                        {item.description}
                      </p>
                    </div>
                    <ArrowRight className="ml-auto h-5 w-5 text-white/30 transition-all group-hover:text-primary-400 group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-dark-900 py-24">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-2xl font-display font-bold text-white md:text-3xl lg:text-4xl leading-relaxed">
              "Let's build something meaningful for the future."
            </p>
            <p className="mt-6 text-lg text-primary-400">
              — Shamim Azad
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
