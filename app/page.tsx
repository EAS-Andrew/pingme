"use client";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Contact from "@/components/Contact";
import ParticlesBackground from "@/components/ParticlesBackground";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen text-white relative">
      <div className="absolute inset-0 pointer-events-none">
        <ParticlesBackground />
      </div>
      <div className="relative z-10">
        <Hero />
        <section id="features">
          <Features />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
