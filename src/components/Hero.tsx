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
                <Image src="/images/corazon.webp" alt="" width={p.size} height={p.size} style={{ width: p.size, height: p.size }} />
              ) : (
                <Image src="/images/cepillo.webp" alt="" width={p.size} height={p.size} style={{ width: p.size, height: p.size }} />
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
  const [mirrorHovered, setMirrorHovered] = useState(false);
  const [cardHovered, setCardHovered] = useState(false);
  const showCard = mirrorHovered || cardHovered;

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
      className="relative min-h-screen flex items-start md:items-center overflow-hidden"
    >
      {/* Imagen de fondo — mobile: enfocada a la derecha para mostrar la sonrisa */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage: "url('/images/heroimg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "72% center",
          filter: "brightness(0.95)",
        }}
      />
      {/* Imagen de fondo — desktop */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: "url('/images/heroimg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          filter: "brightness(0.95)",
        }}
      />

      {/* Overlay: muy oscuro a la izquierda para el texto, casi nada a la derecha para que la sonrisa brille */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.65) 35%, rgba(0,0,0,0.05) 58%, rgba(0,0,0,0.0) 100%),
            linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, transparent 15%, transparent 85%, rgba(0,0,0,0.30) 100%)
          `,
        }}
      />

      {/* Filtro fucsia izquierda — se mezcla con el overlay oscuro sin tapar la sonrisa */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to right, rgba(255,69,134,0.45) 0%, rgba(255,69,134,0.18) 30%, transparent 55%)" }}
      />

      {/* Toque fucsia solo a la derecha, sobre la sonrisa */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(255,69,134,0.20) 0%, transparent 45%)" }}
      />

      {/* Zona interactiva sobre el logo en el espejo — oculta en mobile (hover no aplica en touch) */}
      <div
        className="hidden md:block absolute z-20"
        style={{ left: "64.5%", top: "41%", transform: "translate(-50%, -50%)" }}
        onMouseEnter={() => setMirrorHovered(true)}
        onMouseLeave={() => setMirrorHovered(false)}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{ inset: 0, border: "2px solid rgba(255,69,134,0.7)" }}
            animate={{ scale: [1, 2.4], opacity: [0.8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.7, ease: "easeOut" }}
          />
        ))}
        <div className="w-[118px] h-[118px] rounded-full cursor-pointer" />
      </div>

      {/* Overlay oscuro — fixed para cubrir toda la pantalla */}
      <AnimatePresence>
        {showCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 pointer-events-none"
            style={{ background: "rgba(0,0,0,0.78)", backdropFilter: "blur(5px)" }}
          />
        )}
      </AnimatePresence>

      {/* Card centrada en la pantalla con fixed + flexbox para centrado real */}
      <AnimatePresence>
        {showCard && (
          <div
            className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none"
          >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="w-[420px] pointer-events-auto"
            onMouseEnter={() => setCardHovered(true)}
            onMouseLeave={() => setCardHovered(false)}
          >
            <div
              className="rounded-3xl overflow-hidden"
              style={{
                background: "rgba(8,4,14,0.97)",
                border: "1px solid rgba(255,69,134,0.40)",
                boxShadow: "0 32px 100px rgba(0,0,0,0.9), 0 0 80px rgba(255,69,134,0.18)",
              }}
            >
              {/* Foto */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/images/prensa-berissense.webp"
                  alt="Od. Carolina Salva"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08040e] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <div>
                    <div className="text-white font-bold text-base leading-tight">Od. Carolina Salva</div>
                    <div className="text-[#FF7AAB] text-xs mt-0.5">M.P. 25485</div>
                  </div>
                  <span className="bg-[#FF4586]/80 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                    Disponible
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="px-5 py-4">
                <div className="space-y-2.5 mb-5">
                  {[
                    { icon: "M12 4v16m-8-8h16", text: "Odontología Integral · Estética" },
                    { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", text: "Especialización en implantes y ácido hialurónico" },
                    { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Berisso, Buenos Aires" },
                    { icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", text: "Turnos disponibles · Lun a Vie" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-start gap-2.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF4586" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                        <path d={item.icon} />
                      </svg>
                      <span className="text-white/55 text-xs leading-relaxed">{item.text}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/542213992512?text=Hola%20Carolina!%20Quiero%20agendar%20un%20turno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#FF4586] to-[#CC1F63] hover:from-[#25D366] hover:to-[#128C7E] text-white text-sm font-bold py-3 rounded-2xl transition-all duration-300 shadow-lg shadow-[#FF4586]/30 hover:shadow-[#25D366]/40"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Agendar turno
                </a>
              </div>
            </div>
          </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Glow fucsia sutil sobre imagen */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px]"
        style={{
          background: "rgba(255,69,134,0.15)",
          top: "10%",
          right: "5%",
          willChange: "transform",
        }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />


      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full pt-28 pb-20 md:py-28 lg:py-32 grid grid-cols-1 lg:grid-cols-2">
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 md:mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Tu sonrisa,{" "}
            <span className="relative inline-block">
              <span
                className="bg-gradient-to-r from-[#FF7AAB] via-white to-[#FF4586] bg-clip-text text-transparent italic"
                style={{ fontFamily: "var(--font-script)", fontWeight: 700 }}
              >
                nuestra pasion
              </span>
              <motion.svg
                viewBox="0 0 300 12"
                className="absolute -bottom-2 left-0 w-full"
              >
                <defs>
                  <linearGradient id="underlineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FF7AAB" />
                    <stop offset="100%" stopColor="#FF4586" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M5 8 Q75 2 150 6 Q225 10 295 4"
                  stroke="url(#underlineGrad)"
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
            className="text-base md:text-xl text-white/60 max-w-xl mb-12 md:mb-10 leading-relaxed mx-auto md:mx-0"
          >
            Odontologia integral con enfoque en estetica natural y salud.
            Priorizando tu comodidad y confianza en cada consulta.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.4 }}
            className="flex flex-col sm:flex-row items-center md:items-start gap-5 md:gap-4 w-full md:w-auto"
          >
            <motion.a
              href="https://wa.me/542213992512"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#FF4586] to-[#CC1F63] hover:from-[#25D366] hover:to-[#128C7E] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl shadow-[#FF4586]/40 hover:shadow-[#25D366]/40 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar Turno
            </motion.a>
            <motion.a
              href="#servicios"
              whileHover={{ scale: 1.05, y: -2 }}
              className="border-2 border-white/25 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-[var(--accent-dark)] transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
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
            className="mt-14 md:mt-10 flex justify-center md:justify-start gap-6 sm:gap-8 md:gap-12"
          >
            {[
              { value: "+500", label: "Pacientes Felices" },
              { value: "5+", label: "Anos de Experiencia" },
              { value: "100%", label: "Compromiso" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-white/40 text-[11px] sm:text-sm mt-1 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

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
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-[var(--accent-light)] rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
