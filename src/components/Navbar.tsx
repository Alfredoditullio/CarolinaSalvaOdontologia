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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-xl border-b ${
        scrolled
          ? "bg-white/75 shadow-lg shadow-[var(--accent)]/8 border-[var(--accent)]/10"
          : "bg-[#fdf2ec]/40 border-[var(--accent)]/8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#inicio"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3"
        >
          <Image
            src="/images/logo.jpg"
            alt="Od. Carolina Salva"
            width={44}
            height={44}
            className="rounded-full"
          />
          <span
            className={`font-semibold text-xl tracking-wide transition-colors duration-300 ${
              scrolled ? "text-[var(--accent-dark)]" : "text-[#3d2c22]"
            }`}
          >
            Od. Carolina Salva
          </span>
        </motion.a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ y: -2 }}
              className={`relative text-base font-semibold tracking-wide transition-colors duration-300 group ${
                scrolled
                  ? "text-[#5a3e32] hover:text-[var(--accent-dark)]"
                  : "text-[#5a3e32] hover:text-[var(--accent-dark)]"
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent)] transition-all duration-300 group-hover:w-full rounded-full" />
            </motion.a>
          ))}
          <motion.a
            href="https://wa.me/542213992512"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[var(--accent-dark)] text-white px-6 py-2.5 rounded-full text-base font-semibold shadow-lg shadow-[var(--accent)]/25 hover:bg-[#8a4e33] hover:shadow-xl hover:shadow-[var(--accent)]/40 transition-all duration-300"
          >
            Pedir Turno
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className={`block w-6 h-0.5 transition-colors ${
              scrolled ? "bg-gray-800" : "bg-[#3d2c22]"
            }`}
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className={`block w-6 h-0.5 transition-colors ${
              scrolled ? "bg-gray-800" : "bg-[#3d2c22]"
            }`}
          />
          <motion.span
            animate={
              mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
            }
            className={`block w-6 h-0.5 transition-colors ${
              scrolled ? "bg-gray-800" : "bg-[#3d2c22]"
            }`}
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
            className="md:hidden bg-[#fdf2ec]/95 backdrop-blur-xl border-t border-[var(--accent)]/10"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[#5a3e32] hover:text-[var(--accent-dark)] text-lg font-semibold transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/542213992512"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--accent-dark)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#8a4e33] transition-colors"
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
