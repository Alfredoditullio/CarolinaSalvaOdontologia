"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import FloatingElements from "./FloatingElements";

interface Particle {
  id: number;
  type: "heart" | "tooth";
  angle: number;
  distance: number;
  size: number;
  duration: number;
}

let particleId = 0;

function ParticleBurst({ particles }: { particles: Particle[] }) {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <AnimatePresence>
        {particles.map((p) => {
          const endX = Math.cos(p.angle) * p.distance;
          const endY = Math.sin(p.angle) * p.distance;
          return (
            <motion.div
              key={p.id}
              className="absolute left-1/2 top-1/2"
              initial={{ x: 0, y: 0, opacity: 0.9, scale: 0.3 }}
              animate={{
                x: endX,
                y: endY,
                opacity: 0,
                scale: 1,
                rotate: Math.random() * 180 - 90,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: p.duration, ease: "easeOut" }}
            >
              {p.type === "heart" ? (
                <Image src="/images/corazon.png" alt="" width={p.size} height={p.size} style={{ width: p.size, height: p.size }} />
              ) : (
                <Image src="/images/cepillo.png" alt="" width={p.size} height={p.size} style={{ width: p.size, height: p.size }} />
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [hovering, setHovering] = useState(false);

  // Emit particles while hovering over photo (throttled to 500ms)
  const emitParticle = useCallback(() => {
    const p: Particle = {
      id: particleId++,
      type: particleId % 2 === 0 ? "heart" : "tooth",
      angle: Math.random() * Math.PI * 2,
      distance: 100 + Math.random() * 120,
      size: 20 + Math.random() * 18,
      duration: 1.2 + Math.random() * 0.8,
    };
    setParticles((prev) => [...prev.slice(-8), p]);
  }, []);

  useEffect(() => {
    if (!hovering) return;
    const interval = setInterval(emitParticle, 500);
    return () => clearInterval(interval);
  }, [hovering, emitParticle]);

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Mesh gradient background (CSS only, no image blur) */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(at 20% 30%, rgba(253,242,236,0.95) 0%, transparent 50%),
            radial-gradient(at 80% 10%, rgba(232,169,135,0.8) 0%, transparent 50%),
            radial-gradient(at 70% 90%, rgba(245,213,195,0.9) 0%, transparent 50%),
            radial-gradient(at 10% 80%, rgba(255,255,255,0.7) 0%, transparent 50%),
            linear-gradient(135deg, #fdf2ec 0%, #fbe8de 50%, #f5d5c3 100%)
          `,
        }}
      />

      {/* Grid pattern (static, cheap) */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(var(--accent-dark) 1px, transparent 1px),
                           linear-gradient(90deg, var(--accent-dark) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Script watermark (static) */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        <h2
          className="text-[32vw] sm:text-[26vw] lg:text-[22vw] font-bold leading-none tracking-tighter text-[var(--accent-dark)] whitespace-nowrap opacity-[0.07]"
          style={{
            fontFamily: "var(--font-script)",
            transform: "translateY(5%) rotate(-4deg)",
          }}
        >
          sonrisas
        </h2>
      </div>

      {/* Single animated orb */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          top: "-5%",
          right: "-5%",
          willChange: "transform",
        }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <FloatingElements count={8} variant="light" className="text-[var(--accent)]/30" />

      {/* Content grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-[1fr_auto] gap-8 items-center py-24 md:py-28 lg:py-32">
        {/* Left: Text */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8 }}
            className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-md border border-[var(--accent)]/15 rounded-full px-5 py-2 mb-8"
          >
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-[var(--accent-dark)] text-sm font-medium">
              Turnos disponibles en Berisso
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#3d2c22] leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Tu sonrisa,{" "}
            <span className="relative inline-block">
              <span
                className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-dark)] bg-clip-text text-transparent italic"
                style={{ fontFamily: "var(--font-script)", fontWeight: 700 }}
              >
                nuestra pasion
              </span>
              <motion.svg
                viewBox="0 0 300 12"
                className="absolute -bottom-2 left-0 w-full"
              >
                <motion.path
                  d="M5 8 Q75 2 150 6 Q225 10 295 4"
                  stroke="var(--accent-dark)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 3.8, duration: 1 }}
                />
              </motion.svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.8 }}
            className="text-base md:text-xl text-[#6b5347] max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            Odontologia integral con enfoque en estetica natural y salud.
            Priorizando tu comodidad y confianza en cada consulta.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.4 }}
            className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
          >
            <motion.a
              href="https://wa.me/542213992512"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[var(--accent-dark)] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl shadow-[var(--accent-dark)]/30 hover:shadow-[var(--accent-dark)]/50 hover:bg-[#8a4e33] transition-all duration-300 flex items-center gap-3"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar Turno
            </motion.a>
            <motion.a
              href="#servicios"
              whileHover={{ scale: 1.05, y: -2 }}
              className="border-2 border-[var(--accent)]/30 text-[var(--accent-dark)] px-8 py-4 rounded-full text-lg font-medium hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] transition-all duration-300 flex items-center gap-2"
            >
              Ver Servicios
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17l9.2-9.2M17 17V8H8" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.7 }}
            className="mt-10 flex justify-center lg:justify-start gap-4 sm:gap-8 md:gap-12"
          >
            {[
              { value: "+500", label: "Pacientes Felices" },
              { value: "5+", label: "Anos de Experiencia" },
              { value: "100%", label: "Compromiso" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--accent-dark)]">
                  {stat.value}
                </div>
                <div className="text-[#8b6f61] text-[11px] sm:text-sm mt-1 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Carolina cutout photo with interactive parallax */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 1, ease: "easeOut" }}
          className="relative flex items-end justify-center mx-auto lg:mx-0 w-[280px] h-[340px] sm:w-[360px] sm:h-[440px] lg:w-[550px] lg:h-[660px] lg:-ml-[148px] lg:-mt-16"
        >
          {/* Static glow circle behind */}
          <div
            className="absolute w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bottom-10"
            style={{
              background: "radial-gradient(circle, var(--accent) 0%, var(--accent-light) 40%, transparent 70%)",
              opacity: 0.25,
              filter: "blur(60px)",
            }}
          />

          {/* Decorative arc behind */}
          <motion.div
            className="absolute bottom-0 w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[360px] lg:h-[360px] rounded-full border-2 border-[var(--accent)]/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {/* Dot on the arc */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[var(--accent)]/40 rounded-full" />
          </motion.div>

          {/* Photo - cutout with particle emitter */}
          <motion.div
            className="relative z-10"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <ParticleBurst particles={particles} />
            <Image
              src="/images/carolina-nobg.png"
              alt="Od. Carolina Salva"
              width={520}
              height={650}
              className="relative z-10 w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[520px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(161,93,63,0.3)]"
              priority
            />
          </motion.div>

          {/* Floating badge top-right */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3.8, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1, rotate: 3 }}
            className="absolute bottom-4 right-2 sm:right-4 lg:bottom-8 lg:right-8 z-20 bg-white/80 backdrop-blur-xl border border-[var(--accent)]/15 rounded-2xl px-3 py-2 lg:px-4 lg:py-3 shadow-xl cursor-default"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-emerald-500/15 rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div>
                <div className="text-[#3d2c22] text-xs font-bold">Matricula Provincial</div>
                <div className="text-[#8b6f61] text-[11px]">M.P. 25485</div>
              </div>
            </div>
          </motion.div>

          {/* Floating badge bottom-left */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 4, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1, rotate: -3 }}
            className="absolute bottom-0 left-2 sm:left-4 lg:bottom-2 lg:left-6 z-20 bg-white/80 backdrop-blur-xl border border-[var(--accent)]/15 rounded-2xl px-3 py-2 lg:px-4 lg:py-3 shadow-xl cursor-default"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[var(--accent)]/15 rounded-lg flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-dark)" strokeWidth="2" strokeLinecap="round">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <circle cx="12" cy="11" r="3" />
                </svg>
              </div>
              <span className="text-[#3d2c22] text-xs font-semibold">Berisso, BA</span>
            </div>
          </motion.div>

          {/* Floating sparkle accent */}
          <motion.div
            className="absolute top-20 left-8 z-20"
            animate={{ y: [0, -8, 0], rotate: [0, 15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--accent)" opacity="0.5">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 4 },
          y: { duration: 2, repeat: Infinity },
        }}
      >
        <div className="w-6 h-10 border-2 border-[var(--accent)]/30 rounded-full flex items-start justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
