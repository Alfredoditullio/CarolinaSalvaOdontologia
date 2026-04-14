"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import FloatingElements from "./FloatingElements";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="sobre-mi"
      ref={ref}
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      <FloatingElements count={5} variant="light" className="text-[var(--accent)]/20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--accent-light)]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Video side */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative z-10">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[var(--accent)]/20">
                  <video
                    src="/images/presentacion.mp4"
                    controls
                    playsInline
                    preload="metadata"
                    poster="/images/carolina.jpeg"
                    className="w-full rounded-3xl max-h-[70vh] object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-[var(--accent-dark)] shadow-md pointer-events-none">
                    Presentacion
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-rose-100 cursor-default"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-800">Matricula Provincial</div>
                      <div className="text-xs text-gray-500">M.P. 25485</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="absolute -top-4 -left-4 w-full h-full border-2 border-[var(--accent)]/20 rounded-3xl"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
              />
            </div>
          </ScrollReveal>

          {/* Text side */}
          <ScrollReveal direction="right" delay={0.2}>
            <span className="inline-block bg-[var(--accent)]/10 text-[var(--accent)] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Sobre Mi
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Hola, soy{" "}
              <span className="text-[var(--accent)]">Carolina</span>
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                Soy odontologa y me apasiona ayudar a que cada paciente se
                sienta seguro con su sonrisa.
              </p>
              <p>
                Trabajo con un enfoque en{" "}
                <strong className="text-gray-800">
                  estetica natural y salud integral
                </strong>
                , priorizando la comodidad y la confianza en cada consulta.
                Actualmente me estoy especializando en{" "}
                <strong className="text-gray-800">implantes dentales</strong> y
                en{" "}
                <strong className="text-gray-800">
                  estetica facial con acido hialuronico
                </strong>
                .
              </p>
              <p>
                Creo que una sonrisa no solo cambia tu imagen,{" "}
                <span className="text-[var(--accent)] font-semibold">
                  cambia tu seguridad
                </span>
                .
              </p>
            </div>

            {/* Announcement - pulsing */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      scale: [1, 1.02, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(201,123,90,0)",
                        "0 0 0 8px rgba(201,123,90,0.15)",
                        "0 0 0 0 rgba(201,123,90,0)",
                      ],
                    }
                  : {}
              }
              transition={{
                opacity: { delay: 0.5, duration: 0.5 },
                scale: { delay: 1, duration: 2, repeat: Infinity, ease: "easeInOut" },
                boxShadow: { delay: 1, duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
              className="mt-6 bg-gradient-to-r from-[var(--accent)]/10 to-[var(--accent-light)]/10 border border-[var(--accent)]/20 rounded-2xl p-4 flex items-start gap-3 cursor-default"
            >
              <span className="text-2xl mt-0.5">🏥</span>
              <div>
                <div className="text-sm font-bold text-[var(--accent-dark)] flex items-center gap-2">
                  Proximamente: Consultorio propio
                  <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                </div>
                <div className="text-xs text-gray-500 mt-0.5">
                  A partir de mayo 2026 en Berisso
                </div>
              </div>
            </motion.div>

            {/* Highlights with hover tilt */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                {
                  icon: "M12 2C9.5 2 7.5 3.5 7 6C6.5 8.5 5 10 4 12C3 14 3 16 4 18C5 20 7 22 8.5 22C10 22 10.5 20 12 20C13.5 20 14 22 15.5 22C17 22 19 20 20 18C21 16 21 14 20 12C19 10 17.5 8.5 17 6C16.5 3.5 14.5 2 12 2Z",
                  title: "Odontologia Integral",
                  desc: "Ninos y adultos",
                },
                {
                  icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                  title: "Estetica Natural",
                  desc: "Resultados armoniosos",
                },
                {
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                  title: "Confianza",
                  desc: "Tu comodidad, prioridad",
                },
                {
                  icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  title: "Berisso",
                  desc: "Atencion personalizada",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="bg-gray-50 rounded-2xl p-4 hover:bg-[var(--accent)]/5 hover:shadow-lg hover:shadow-[var(--accent)]/10 transition-all duration-300 group cursor-default"
                >
                  <div className="w-10 h-10 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-[var(--accent)]/20 group-hover:scale-110 transition-all duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d={item.icon} />
                    </svg>
                  </div>
                  <div className="font-semibold text-gray-800 text-sm">{item.title}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
