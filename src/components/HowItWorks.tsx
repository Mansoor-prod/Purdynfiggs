"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <section id="kit" className="py-24 bg-brand-peach/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/tri_mechanic_image.png"
                alt="Simply botanical mechanics"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl mb-8">
                Surprisingly <span className="italic font-light text-brand-amber">simple.</span>
              </h2>
              
              <div className="space-y-8">
                {[
                  { title: "No Water Shipped", desc: "Most sprays are 90% water. Ours arrive as a concentrate you activate yourself." },
                  { title: "Eco-Conscious", desc: "Drop it in. Top up with water. Shake. Spray. A smarter choice for your home." },
                  { title: "Long Lasting", desc: "Your home is cleaner, fresher, better — and the amber bottle is yours for life." }
                ].map((step, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="w-8 h-8 rounded-full bg-brand-green text-brand-cream flex items-center justify-center text-xs font-bold flex-shrink-0">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="font-serif text-xl text-brand-green mb-2">{step.title}</h4>
                      <p className="text-brand-green/60 font-light text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-brand-green/10">
                <div className="flex flex-wrap gap-8">
                  <div className="flex flex-col">
                    <span className="text-2xl font-serif text-brand-green">670</span>
                    <span className="text-[10px] uppercase tracking-widest text-brand-green/40">Tested Ingredients</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-serif text-brand-green">4 Years</span>
                    <span className="text-[10px] uppercase tracking-widest text-brand-green/40">of Research</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute -right-20 top-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default HowItWorks;
