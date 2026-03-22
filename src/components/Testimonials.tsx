"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "I didn't realise how much I'd been dreading cleaning until I stopped.",
    author: "Sophie, London",
    image: "/bottle_on_a_table.png",
  },
  {
    quote: "My kitchen has never smelled like this. I genuinely don't want to leave it.",
    author: "Heather, Bath",
    isHero: true,
  },
  {
    quote: "It sounds ridiculous but it changed my entire morning routine.",
    author: "Marcus, Manchester",
    image: "/product_closeup_main.PNG",
  },
];

const Testimonials = () => {
  return (
    <section id="reviews" className="py-24 bg-brand-cream overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-brand-green">
            They said it <span className="italic font-light text-brand-amber">first.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className={`flex flex-col rounded-3xl overflow-hidden border border-brand-green/5 ${
                t.isHero ? "bg-brand-yellow/80 p-12 justify-center text-center shadow-xl" : "bg-white"
              }`}
            >
              {!t.isHero && t.image && (
                <div className="relative h-64 w-full">
                  <Image src={t.image} alt={t.author} fill className="object-cover" />
                </div>
              )}
              <div className={t.isHero ? "" : "p-8"}>
                <blockquote className={`font-serif italic text-brand-green mb-6 leading-relaxed ${
                  t.isHero ? "text-2xl" : "text-lg"
                }`}>
                  "{t.quote}"
                </blockquote>
                <cite className={`block not-italic text-sm uppercase tracking-widest ${
                  t.isHero ? "text-brand-green/60" : "text-brand-green/40"
                }`}>
                  — {t.author}
                </cite>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
