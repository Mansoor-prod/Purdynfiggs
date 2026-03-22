"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-brand-text py-20 border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <Link href="/" className="font-serif text-3xl text-brand-cream block mb-12">
          Purdy & Figg
        </Link>
        
        <div className="flex flex-wrap justify-center gap-12 mb-16">
          {["Scents", "Kits", "Subscription", "Story", "Contact"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-white/40 hover:text-white transition-colors uppercase tracking-widest text-xs font-light"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="max-w-md mx-auto mb-16 px-6 py-1 border border-white/10 rounded-full flex items-center justify-between">
          <input 
            type="email" 
            placeholder="Subscribe to the ritual" 
            className="bg-transparent border-none text-white text-sm font-light focus:outline-none flex-1 py-3 px-4"
          />
          <button className="text-brand-yellow uppercase tracking-widest text-[10px] font-bold px-4">
            Join
          </button>
        </div>

        <div className="text-white/20 text-[10px] uppercase tracking-[0.4em]">
          © 2024 Purdy & Figg. Crafted with Botanical Care.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
