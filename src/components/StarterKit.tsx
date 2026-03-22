"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const StarterKit = () => {
  return (
    <section id="starter-kit" className="bg-brand-green relative overflow-hidden min-h-[600px] flex items-center">
      <div className="absolute inset-0 w-full md:w-1/2">
        <Image
          src="/premium_boxing.PNG"
          alt="The Starter Kit"
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-green" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex justify-end">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 p-12 md:p-24 bg-brand-green/60 md:bg-transparent"
          >
            <span className="text-brand-yellow/60 text-[10px] uppercase tracking-[0.4em] mb-4 block">
              The Starter Kit
            </span>
            <h2 className="text-brand-cream text-5xl md:text-6xl font-serif mb-8 leading-tight">
              One kit. <span className="italic font-light text-brand-yellow">Every</span> surface.
            </h2>
            <p className="text-brand-cream/70 text-lg font-light mb-10 leading-relaxed max-w-md">
              Everything you need to start your ritual. Nothing you don't. The amber bottle is yours for life.
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="text-brand-yellow text-4xl font-serif">From £19.99</div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-brand-yellow text-brand-green font-medium py-5 px-10 rounded-full uppercase tracking-widest text-sm shadow-xl"
              >
                Get The Kit — Start Today
              </motion.button>
              <p className="text-brand-cream/30 text-[10px] uppercase tracking-widest text-center md:text-left">
                Free shipping. Cancel anytime. Loved by 1M+ households.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-brand-yellow/5 skew-x-12 transform origin-top-right -z-10" />
    </section>
  );
};

export default StarterKit;
