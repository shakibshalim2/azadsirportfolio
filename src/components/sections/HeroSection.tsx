"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text elements
      gsap.from(".hero-line", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.from(".hero-subtext", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        ease: "power2.out",
      });

      gsap.from(".hero-cta", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 1,
        ease: "power2.out",
      });

      // Floating elements
      gsap.to(".float-element", {
        y: -20,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-dark-900"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute left-1/4 top-1/4 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] rounded-full bg-primary-500/10 blur-[100px] sm:blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[250px] sm:h-[400px] w-[250px] sm:w-[400px] rounded-full bg-accent-500/10 blur-[80px] sm:blur-[120px]" />
        
        {/* Floating geometric elements - hidden on mobile for performance */}
        <div className="float-element absolute left-[15%] top-[20%] h-12 w-12 sm:h-20 sm:w-20 rotate-45 rounded-xl sm:rounded-2xl border border-primary-500/20 bg-primary-500/5 hidden sm:block" />
        <div className="float-element absolute right-[20%] top-[30%] h-10 w-10 sm:h-16 sm:w-16 rounded-full border border-accent-500/20 bg-accent-500/5 hidden sm:block" />
        <div className="float-element absolute bottom-[30%] left-[10%] h-14 w-14 sm:h-24 sm:w-24 rounded-lg sm:rounded-xl border border-white/10 bg-white/5 hidden sm:block" />
        <div className="float-element absolute bottom-[25%] right-[15%] h-8 w-8 sm:h-12 sm:w-12 rotate-12 rounded-md sm:rounded-lg border border-gold-500/20 bg-gold-500/5 hidden sm:block" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 text-center lg:px-8"
      >
        <div ref={textRef}>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 sm:mb-8 flex justify-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-primary-400">
              <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-primary-400 animate-pulse" />
              <span className="hidden sm:inline">Entrepreneur | Ecosystem Builder | Digital Strategist</span>
              <span className="sm:hidden">Entrepreneur & Ecosystem Builder</span>
            </span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="overflow-hidden">
            <span className="hero-line block text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-display font-bold text-white">
              Designing the Future
            </span>
            <span className="hero-line block text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-display font-bold">
              <span className="text-gradient">of Bangladesh</span>
            </span>
          </h1>

          {/* Subheadline */}
          <div className="hero-subtext mt-6 sm:mt-8">
            <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl text-white/60">
              Through{" "}
              <span className="text-white">Business</span> •{" "}
              <span className="text-white">Digital Infrastructure</span> •{" "}
              <span className="text-white">Human Capital</span>
            </p>
            <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-white/40">
              Not just building companies — building systems that move a nation forward.
            </p>
          </div>

          {/* CTAs */}
          <div className="hero-cta mt-8 sm:mt-12 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row">
            <Link href="/vision">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                Explore the Vision
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </Link>
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-outline w-full sm:w-auto"
              >
                Learn About Me
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-white/40">
            Scroll to explore
          </span>
          <ArrowDown className="h-4 w-4 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
