"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre Mi" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 2.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40"
          : "bg-transparent border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + nombre */}
        <motion.a
          href="#inicio"
          whileHover={{ scale: 1.04 }}
          className="flex items-center gap-3"
        >
          <Image
            src="/images/logoredondo-clean.webp"
            alt="Od. Carolina Salva"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-bold text-xl tracking-wide text-white drop-shadow-sm">
            Od. Carolina Salva
          </span>
        </motion.a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}>
          {links.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ y: -2 }}
              className="relative text-base font-semibold text-white hover:text-[#FF4586] transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF4586] transition-all duration-300 group-hover:w-full rounded-full" />
            </motion.a>
          ))}

          <motion.a
            href="https://wa.me/542213992512"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#FF4586] to-[#CC1F63] hover:from-[#25D366] hover:to-[#128C7E] text-white px-6 py-2.5 rounded-full text-base font-semibold shadow-lg shadow-[#FF4586]/30 hover:shadow-[#25D366]/40 transition-all duration-300"
          >
            Pedir Turno
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 active:bg-white/20 transition-colors"
          aria-label="Menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-white"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white hover:text-[#FF4586] text-lg font-semibold transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/542213992512"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#FF4586] to-[#CC1F63] hover:from-[#25D366] hover:to-[#128C7E] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Pedir Turno
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
