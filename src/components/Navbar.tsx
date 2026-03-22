"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-12 ${
        isScrolled ? "premium-blur shadow-sm border-b border-brand-green/5 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl text-brand-green tracking-tight">
          Purdy & Figg
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {["Scents", "Kit", "Reviews"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm uppercase tracking-[0.1em] text-brand-green/70 hover:text-brand-green transition-colors font-light"
            >
              {item}
            </Link>
          ))}
          <Link
            href="#starter-kit"
            className="bg-brand-green text-brand-cream px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.1em] font-medium hover:bg-brand-green/90 transition-all flex items-center gap-2"
          >
            Shop Now <ShoppingBag size={14} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-green"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-cream border-t border-brand-green/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {["Scents", "Kit", "Reviews"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-serif text-brand-green"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Link
                href="#starter-kit"
                className="bg-brand-green text-brand-cream px-6 py-4 rounded-xl text-center font-medium uppercase tracking-widest"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
