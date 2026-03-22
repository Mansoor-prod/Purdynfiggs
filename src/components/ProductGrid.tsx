"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const scents = [
  {
    name: "Peppermint & Eucalyptus",
    description: "A bracing breath of spring.",
    bg: "/eucalyptus_background.png",
    fg: "/eucaplytpusforeground.PNG",
    color: "bg-brand-sage",
  },
  {
    name: "Lavender & Rosemary",
    description: "Garden-fresh and deeply calming.",
    bg: "/mint_background.png", // Using mint as a proxy for fresh green if lavendar bg is missing
    fg: "/lavendarforeground.PNG",
    color: "bg-brand-blue",
  },
  {
    name: "Orange & Patchouli",
    description: "Warm, citrusy and grounded.",
    bg: "/mint_background.png",
    fg: "/orange_foregroundv2.png",
    color: "bg-brand-peach",
  },
];

const ProductGrid = () => {
  return (
    <section id="scents" className="py-24 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl mb-6"
          >
            Choose your <span className="italic font-light text-brand-amber">scent.</span> Set your mood.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-green/60 font-light"
          >
            Plant-based concentrates in essential oil blends. One tiny vial. One full bottle. One less piece of plastic.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scents.map((scent, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative h-[500px] rounded-3xl overflow-hidden shadow-lg border border-brand-green/5 cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={scent.bg}
                alt={scent.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-40"
              />
              
              {/* Product Foreground */}
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={scent.fg}
                    alt={`${scent.name} bottle`}
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </motion.div>
              </div>

              {/* Text Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white font-serif text-2xl mb-2">{scent.name}</h3>
                <p className="text-white/70 text-sm font-light uppercase tracking-widest">{scent.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] font-medium text-brand-green/30">
            Six scents. One bottle. Your choice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
