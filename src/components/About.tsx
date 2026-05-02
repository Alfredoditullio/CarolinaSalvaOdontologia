"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="sobre-mi"
      ref={ref}
      className="relative py-24 md:py-32 bg-black"
    >
      {/* Diente flotante — esquina superior derecha */}
      <motion.div
        className="absolute top-10 right-8 pointer-events-none z-0 opacity-20"
        animate={{ y: [0, -14, 0], rotate: [8, 14, 8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image src="/images/diente-clean.webp" alt="" width={90} height={90} />
      </motion.div>

      {/* Diente flotante — inferior izquierda, más chico */}
      <motion.div
        className="absolute bottom-16 left-10 pointer-events-none z-0 opacity-15"
        animate={{ y: [0, 10, 0], rotate: [-12, -6, -12] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Image src="/images/diente-clean.webp" alt="" width={60} height={60} />
      </motion.div>

      {/* Fondo: glow fucsia sutil izquierda */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 0% 60%, rgba(255,69,134,0.12) 0%, transparent 55%),
            radial-gradient(ellipse at 100% 20%, rgba(204,31,99,0.08) 0%, transparent 50%)
          `,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="inline-block bg-[#FF4586]/15 text-[#FF4586] border border-[#FF4586]/30 px-5 py-2 rounded-full text-xl font-bold mb-5 tracking-wide">
            Sobre Mi
          </span>
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Hola, soy{" "}
            <span className="bg-gradient-to-r from-[#FF7AAB] to-[#FF4586] bg-clip-text text-transparent">
              Carolina
            </span>
          </h2>
        </motion.div>

        {/* Grid principal: video izquierda, info derecha */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">

          {/* Video con glow */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            {/* Glow detrás del video */}
            <div
              className="absolute -inset-3 rounded-3xl"
              style={{
                background: "radial-gradient(ellipse, rgba(255,69,134,0.3) 0%, transparent 70%)",
                filter: "blur(30px)",
              }}
            />
            <div className="relative rounded-3xl overflow-hidden border border-[#FF4586]/30 shadow-2xl shadow-[#FF4586]/20">
              <video
                src="/images/presentacion.mp4"
                controls
                playsInline
                preload="metadata"
                poster="/images/carolina.webp"
                className="w-full max-h-[70vh] object-cover"
              />
            </div>

            {/* Badge matrícula flotante */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-5 -right-5 bg-white/5 backdrop-blur-xl border border-white/15 rounded-2xl px-5 py-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FF4586]/20 rounded-xl flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF4586" strokeWidth="2" strokeLinecap="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Matricula Provincial</div>
                  <div className="text-xs text-white/50">M.P. 25485</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Derecha: texto + cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Párrafos */}
            <div className="space-y-4 text-white/60 leading-relaxed text-base">
              <p>
                Graduada de la{" "}
                <strong className="text-white">Universidad Nacional de La Plata (UNLP)</strong>.
                Me apasiona ayudar a que cada paciente se sienta seguro con su sonrisa.
              </p>
              <p>
                Trabajo con un enfoque en{" "}
                <strong className="text-white">estetica natural y salud integral</strong>,
                priorizando la comodidad y la confianza en cada consulta. Actualmente me
                estoy especializando en{" "}
                <strong className="text-white">implantes dentales</strong> y en{" "}
                <strong className="text-white">estetica facial con acido hialuronico</strong>.
              </p>
              <p>
                Creo que una sonrisa no solo cambia tu imagen,{" "}
                <span className="text-[#FF7AAB] font-semibold">cambia tu seguridad</span>.
              </p>
            </div>

            {/* Anuncio consultorio */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="bg-[#FF4586]/10 border border-[#FF4586]/25 rounded-2xl p-4 flex items-start gap-3"
            >
              <span className="text-2xl">🏥</span>
              <div>
                <div className="text-sm font-bold text-[#FF7AAB] flex items-center gap-2">
                  Proximamente: Consultorio propio
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                </div>
                <div className="text-xs text-white/40 mt-0.5">A partir de mayo 2026 en Berisso</div>
              </div>
            </motion.div>

            {/* Cards highlight en glass */}
            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  icon: "M12 4v16m-8-8h16",
                  title: "Odontologia Integral",
                  desc: "Niños y adultos",
                  color: "#FF4586",
                  glow: "rgba(255,69,134,0.35)",
                },
                {
                  icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                  title: "Estetica Natural",
                  desc: "Resultados armoniosos",
                  color: "#FF7AAB",
                  glow: "rgba(255,122,171,0.35)",
                },
                {
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                  title: "Confianza",
                  desc: "Tu comodidad, prioridad",
                  color: "#F472B6",
                  glow: "rgba(244,114,182,0.35)",
                },
                {
                  icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  title: "Berisso",
                  desc: "Atencion personalizada",
                  color: "#CC1F63",
                  glow: "rgba(204,31,99,0.35)",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  whileHover={{ y: -6, scale: 1.04 }}
                  className="relative bg-white/5 border border-white/10 rounded-2xl p-4 transition-all duration-300 cursor-default group overflow-hidden"
                  style={{ "--card-glow": item.glow, "--card-color": item.color } as React.CSSProperties}
                >
                  {/* Fondo que aparece en hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                    style={{ background: `radial-gradient(ellipse at 30% 50%, ${item.glow} 0%, transparent 70%)` }}
                  />
                  {/* Borde fucsia en hover */}
                  <div
                    className="absolute inset-0 rounded-2xl border opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ borderColor: item.color }}
                  />

                  <div className="relative z-10">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110"
                      style={{ background: `${item.color}22` }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                        style={{ stroke: item.color }}
                      >
                        <path d={item.icon} />
                      </svg>
                    </div>
                    <div className="font-semibold text-white text-sm group-hover:text-white transition-colors">{item.title}</div>
                    <div className="text-white/40 text-xs mt-0.5 group-hover:text-white/70 transition-colors">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
