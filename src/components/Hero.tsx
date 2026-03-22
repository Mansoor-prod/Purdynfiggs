"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-height-[90vh] flex flex-col items-center pt-32 pb-20 overflow-hidden bg-brand-cream">
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-brand-green leading-[1.1] mb-6">
            Cleaning is the <span className="italic font-light text-brand-amber">new</span> meditation.
          </h1>
          <p className="text-lg md:text-xl text-brand-green/60 font-light max-w-xl mx-auto mb-10">
            When your space is right, everything else follows. Discover the ritual of botanical home care.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-green text-brand-cream px-10 py-5 rounded-full text-sm uppercase tracking-[0.2em] font-medium shadow-xl hover:shadow-2xl transition-all"
          >
            Start Your Ritual
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative w-full max-w-6xl mx-auto mt-16 px-6 aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl"
      >
        <Image
          src="/woman_sitting_down_with_bottle_near_her.png"
          alt="Luxury botanical cleaning experience"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-cream/20 to-transparent" />
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-64 h-64 bg-brand-sage/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-brand-peach/40 rounded-full blur-3xl"
      />
    </section>
  );
};

export default Hero;
