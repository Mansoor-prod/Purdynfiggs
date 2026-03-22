"use client";

import { motion } from "framer-motion";

const ValueStrip = () => {
  const values = [
    { text: "Natural.", italic: false },
    { text: "Powerful.", italic: true },
    { text: "Sensationally scented.", italic: false },
  ];

  return (
    <section className="bg-brand-yellow/20 py-16 border-y border-brand-yellow/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-12"
        >
          {values.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <span className={`text-2xl md:text-3xl font-serif text-brand-green ${item.italic ? "italic font-semibold" : "font-light"}`}>
                {item.text}
              </span>
              {idx < values.length - 1 && (
                <div className="w-1.5 h-1.5 rounded-full bg-brand-amber/30" />
              )}
            </div>
          ))}
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-6 text-brand-green/60 font-light tracking-wide uppercase text-xs"
        >
          One spray for every surface in your home.
        </motion.p>
      </div>
    </section>
  );
};

export default ValueStrip;
