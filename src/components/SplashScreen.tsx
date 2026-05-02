"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SplashScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#fdf6f0]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {/* Radial glow behind logo */}
            <motion.div
              className="absolute w-[400px] h-[400px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(201,123,90,0.15) 0%, transparent 70%)",
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.5, 1.2], opacity: [0, 0.8, 0] }}
              transition={{ duration: 2.2, ease: "easeOut" }}
            />

            {/* Tooth particles burst */}
            {Array.from({ length: 8 }).map((_, i) => {
              const angle = (i / 8) * Math.PI * 2;
              const dist = 120 + Math.random() * 60;
              return (
                <motion.svg
                  key={i}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className="absolute"
                  style={{ color: "var(--accent)" }}
                  initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                  animate={{
                    x: Math.cos(angle) * dist,
                    y: Math.sin(angle) * dist,
                    opacity: [0, 0.6, 0],
                    scale: [0, 1, 0.5],
                    rotate: [0, 180],
                  }}
                  transition={{
                    duration: 1.4,
                    delay: 0.8,
                    ease: "easeOut",
                  }}
                >
                  <path
                    d="M12 2C9.5 2 7.5 3.5 7 6C6.5 8.5 5 10 4 12C3 14 3 16 4 18C5 20 7 22 8.5 22C10 22 10.5 20 12 20C13.5 20 14 22 15.5 22C17 22 19 20 20 18C21 16 21 14 20 12C19 10 17.5 8.5 17 6C16.5 3.5 14.5 2 12 2Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </motion.svg>
              );
            })}

            {/* Logo */}
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: -10 }}
              animate={{
                scale: [0, 1.15, 1],
                opacity: [0, 1, 1],
                rotate: [-10, 2, 0],
              }}
              transition={{
                duration: 0.8,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="relative z-10"
            >
              <Image
                src="/images/logo.webp"
                alt="Od. Carolina Salva"
                width={160}
                height={160}
                className="rounded-3xl shadow-2xl shadow-[var(--accent)]/30"
                priority
              />
            </motion.div>

            {/* Name text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute bottom-[38%] text-[var(--accent-dark)] font-semibold text-lg tracking-widest uppercase"
            >
              Odontologia
            </motion.p>

            {/* Loading bar */}
            <motion.div className="absolute bottom-[32%] w-48 h-0.5 bg-[var(--accent)]/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[var(--accent)] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showSplash ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
}
