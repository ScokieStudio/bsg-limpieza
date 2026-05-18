import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { QuoteForm } from "@/components/landing/QuoteForm";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFloat } from "@/components/landing/WhatsAppFloat";
import { Bubbles } from "@/components/landing/Bubbles";

export function Landing() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div ref={ref} className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Bubbles />
      <motion.div style={{ y }} className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[var(--electric)] opacity-20 blur-[120px]" />
        <div className="absolute top-1/2 -right-40 h-[500px] w-[500px] rounded-full bg-[var(--cyan-glow)] opacity-15 blur-[120px]" />
      </motion.div>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <QuoteForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
