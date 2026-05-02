"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";


export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contacto"
      ref={ref}
      className="relative py-24 md:py-32"
      style={{ background: "linear-gradient(180deg, #110818 0%, #09050f 60%, #0d0614 100%)" }}
    >
      {/* Diente flotante — arriba derecha */}
      <motion.div
        className="absolute top-8 right-16 pointer-events-none z-0 opacity-20"
        animate={{ y: [0, -10, 0], rotate: [10, 18, 10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image src="/images/diente-clean.webp" alt="" width={75} height={75} />
      </motion.div>

      {/* Diente flotante — abajo izquierda */}
      <motion.div
        className="absolute bottom-12 left-8 pointer-events-none z-0 opacity-15"
        animate={{ y: [0, 10, 0], rotate: [-20, -12, -20] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <Image src="/images/diente-clean.webp" alt="" width={50} height={50} />
      </motion.div>

      {/* Diente feliz — divisor con Casos Reales, un poco a la izquierda */}
      <motion.div
        className="absolute pointer-events-none z-20"
        style={{
          top: "-80px",
          left: "35%",
          transform: "translateX(-50%)",
          filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.6)) drop-shadow(0 8px 16px rgba(255,69,134,0.25))",
        }}
        animate={{ y: [0, -10, 0], rotate: [4, -2, 4] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        <Image src="/images/diente-feliz-clean.webp" alt="Diente feliz" width={160} height={160} />
      </motion.div>

      {/* Divisor top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF4586]/50 to-transparent" />

      {/* Glows de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(255,69,134,0.08)" }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(204,31,99,0.06)" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#FF4586]/15 text-[#FF4586] border border-[#FF4586]/30 px-5 py-2 rounded-full text-xl font-bold mb-5 tracking-wide">
            Contacto
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Agenda tu{" "}
            <span className="bg-gradient-to-r from-[#FF7AAB] to-[#FF4586] bg-clip-text text-transparent">
              turno
            </span>
          </h2>
          <p className="text-white/40 text-lg mt-4 max-w-xl mx-auto leading-relaxed">
            Estoy lista para ayudarte a lograr la sonrisa que siempre quisiste
          </p>
        </motion.div>

        {/* Main grid: foto + contacto */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start max-w-6xl mx-auto">

          {/* Columna izquierda: foto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            {/* Glow detrás de la foto */}
            <div
              className="absolute -inset-4 rounded-3xl pointer-events-none"
              style={{
                background: "radial-gradient(ellipse, rgba(255,69,134,0.25) 0%, transparent 70%)",
                filter: "blur(30px)",
              }}
            />
            <div className="relative rounded-3xl overflow-hidden border border-[#FF4586]/25 shadow-2xl shadow-[#FF4586]/15">
              <Image
                src="/images/prensa-berissense.webp"
                alt="Od. Carolina Salva"
                width={700}
                height={900}
                className="w-full object-cover object-top"
                style={{ maxHeight: "520px" }}
              />
              {/* Overlay sutil en la parte inferior */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Badge sobre la foto */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <div className="bg-black/60 backdrop-blur-md border border-white/15 rounded-2xl px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#FF4586]/20 rounded-xl flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF4586" strokeWidth="2" strokeLinecap="round">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Od. Carolina Salva</div>
                    <div className="text-[10px] text-white/50">M.P. 25485 · Berisso</div>
                  </div>
                </div>
                <span className="bg-[#FF4586]/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  Disponible
                </span>
              </div>
            </div>

            {/* Botón WhatsApp debajo de la foto */}
            <div className="mt-4" />
            <motion.a
              href="https://wa.me/542213992512?text=Hola%20Carolina!%20Quiero%20agendar%20un%20turno"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#FF4586] to-[#CC1F63] hover:from-[#25D366] hover:to-[#128C7E] text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl shadow-[#FF4586]/30 hover:shadow-[#25D366]/40 transition-all duration-300"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escribime por WhatsApp
            </motion.a>
          </motion.div>

          {/* Columna derecha: cards de contacto + mapa */}
          <div className="flex flex-col gap-4">

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/542213992512?text=Hola%20Carolina!%20Quiero%20agendar%20un%20turno"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-500/40 rounded-2xl p-5 flex items-center gap-5 transition-all duration-300 hover:bg-white/8"
            >
              <div className="w-14 h-14 bg-green-500/15 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#22c55e">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-white text-base group-hover:text-green-400 transition-colors">WhatsApp</div>
                <div className="text-white/40 text-sm">Respuesta rapida y directa</div>
                <div className="text-green-400 font-semibold text-sm mt-1">221 399 2512</div>
              </div>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/20 group-hover:text-green-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://instagram.com/od.salva"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-pink-500/40 rounded-2xl p-5 flex items-center gap-5 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-pink-500/15 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-white text-base group-hover:text-pink-400 transition-colors">Instagram</div>
                <div className="text-white/40 text-sm">Seguime para mas casos</div>
                <div className="text-pink-400 font-semibold text-sm mt-1">@od.salva</div>
              </div>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/20 group-hover:text-pink-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>

            {/* Ubicación */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 flex items-center gap-5"
            >
              <div className="w-14 h-14 bg-[#FF4586]/15 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF4586" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="font-bold text-white text-base">Ubicacion</div>
                <div className="text-white/40 text-sm">Calle 157 entre 7 y 8, N° 553</div>
                <div className="text-[#FF7AAB] font-semibold text-sm mt-1">Berisso, Buenos Aires</div>
              </div>
            </motion.div>

            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="rounded-2xl overflow-hidden border border-white/10 shadow-xl"
            >
              <iframe
                src="https://maps.google.com/maps?q=Calle+157+N553,+Berisso,+Buenos+Aires,+Argentina&output=embed&hl=es&z=17"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicacion del consultorio"
                className="w-full"
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
