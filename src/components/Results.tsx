"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import FloatingElements from "./FloatingElements";

const cases = [
  {
    src: "/images/antes-despues-1.jpeg",
    alt: "Caso de restauracion dental - Antes y Despues",
    label: "Restauracion Dental",
    review: {
      name: "Carlos M.",
      stars: 5,
      text: "Llegue sin poder sonreir y hoy no paro. Carolina me devolvio la confianza con un trabajo impecable.",
      date: "Hace 2 meses",
    },
  },
  {
    src: "/images/antes-despues-2.jpeg",
    alt: "Caso de blanqueamiento dental - Antes y Despues",
    label: "Blanqueamiento",
    review: {
      name: "Laura P.",
      stars: 5,
      text: "El blanqueamiento quedo increible, super natural. Muy profesional y atenta en todo momento.",
      date: "Hace 3 semanas",
    },
  },
  {
    src: "/images/videocarillas.mp4",
    alt: "Carillas dentales",
    label: "Carillas Dentales",
    isVideo: true,
    review: {
      name: "Mariana G.",
      stars: 5,
      text: "Las carillas quedaron perfectas, nadie nota que no son mis dientes naturales. 100% recomendable.",
      date: "Hace 1 mes",
    },
  },
  {
    src: "/images/caso-video-1.mp4",
    alt: "Caso clinico",
    label: "Caso Clinico",
    isVideo: true,
    review: {
      name: "Fernando R.",
      stars: 5,
      text: "Excelente atencion, me explico todo paso a paso. Los resultados superaron mis expectativas.",
      date: "Hace 2 semanas",
    },
  },
  {
    src: "/images/caso-video-2.mp4",
    alt: "Tratamiento dental",
    label: "Tratamiento",
    isVideo: true,
    review: {
      name: "Sofia L.",
      stars: 5,
      text: "Fui con mucho miedo y Carolina me hizo sentir super comoda. El resultado quedo hermoso.",
      date: "Hace 1 semana",
    },
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#facc15">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Results() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % cases.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + cases.length) % cases.length);
  }, []);

  useEffect(() => {
    if (cases[current].isVideo) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [current, next]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0, scale: 0.95 }),
  };

  const c = cases[current];

  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-white overflow-hidden">
      <FloatingElements count={5} variant="light" className="text-[var(--accent)]/20" />

      {/* Floating dental images - traveling across the section */}
      {[
        { src: "/images/corazon.png", w: 40, startX: -60, startY: "10%", endX: 110, endY: "35%", rotate: 360, dur: 18, delay: 0 },
        { src: "/images/diente.png", w: 50, startX: 110, startY: "25%", endX: -60, endY: "60%", rotate: -280, dur: 22, delay: 2 },
        { src: "/images/cepillo.png", w: 38, startX: -50, startY: "55%", endX: 110, endY: "20%", rotate: 300, dur: 20, delay: 4 },
        { src: "/images/corazon.png", w: 32, startX: 110, startY: "70%", endX: -50, endY: "40%", rotate: -320, dur: 16, delay: 1 },
        { src: "/images/cepillo.png", w: 42, startX: -40, startY: "80%", endX: 110, endY: "65%", rotate: 260, dur: 24, delay: 3 },
        { src: "/images/diente.png", w: 36, startX: 110, startY: "5%", endX: -50, endY: "80%", rotate: -340, dur: 19, delay: 5 },
      ].map((item, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none z-0"
          style={{ top: item.startY }}
          initial={{ x: `${item.startX}vw`, opacity: 0 }}
          animate={{
            x: [`${item.startX}vw`, `${item.endX}vw`],
            y: [0, -40, 30, -20, 0],
            rotate: [0, item.rotate],
            opacity: [0, 0.75, 0.8, 0.75, 0],
          }}
          transition={{
            duration: item.dur,
            delay: item.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Image
            src={item.src}
            alt=""
            width={item.w}
            height={item.w}
            className="drop-shadow-md"
            style={{ width: item.w, height: item.w }}
          />
        </motion.div>
      ))}

      {/* Subtle background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--accent)]/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-[var(--accent)]/10 text-[var(--accent)] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Casos Reales
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Resultados que{" "}
            <span className="text-[var(--accent)]">hablan</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Casos reales de pacientes que confiaron en nosotros
          </p>
        </motion.div>

        {/* Layout: 60% carousel+review / 40% press+SEO */}
        <div className="grid lg:grid-cols-[7fr_3fr] gap-8 items-start">
          {/* Left 60%: Carousel + review card */}
          <div className="space-y-6">
            <div className="grid md:grid-cols-[1fr_1fr] gap-6 items-center">
              {/* Carousel */}
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 shadow-xl">
                  <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                      key={current}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      {c.isVideo ? (
                        <video
                          src={c.src}
                          controls
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Image
                          src={c.src}
                          alt={c.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 350px"
                        />
                      )}
                      <div className="absolute top-4 left-4 bg-[var(--accent)] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        {c.label}
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/15 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
                    aria-label="Anterior"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/15 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
                    aria-label="Siguiente"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2.5 mt-4">
                  {cases.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                      className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-7 bg-[var(--accent)]" : "w-2 bg-gray-300 hover:bg-gray-400"}`}
                      aria-label={`Caso ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Review card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-4"
                >
                  <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {c.review.name[0]}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 text-sm">{c.review.name}</div>
                        <div className="text-xs text-gray-400">{c.review.date}</div>
                      </div>
                      <svg width="18" height="18" viewBox="0 0 24 24" className="text-gray-300">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31l3.57 2.77c2.08-1.92 3.27-4.74 3.27-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                    </div>
                    <Stars count={c.review.stars} />
                    <p className="mt-2 text-gray-600 text-sm leading-relaxed italic">
                      &ldquo;{c.review.text}&rdquo;
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="bg-[var(--accent)]/10 text-[var(--accent-dark)] text-xs font-semibold px-3 py-1 rounded-full">{c.label}</span>
                      <span className="text-xs text-gray-400">Paciente verificado</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 flex items-center gap-3">
                    <div className="text-center">
                      <div className="text-xl font-bold text-gray-900">5.0</div>
                      <Stars count={5} />
                    </div>
                    <div className="h-8 w-px bg-gray-200" />
                    <div className="text-xs text-gray-500 leading-relaxed">
                      Basado en opiniones de pacientes.
                      <br />
                      <span className="text-[var(--accent)] font-semibold">100% recomendarian a Carolina</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right 40%: Press note full */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all self-stretch flex flex-col"
          >
            <div className="relative flex-1 min-h-0">
              <Image
                src="/images/prensa-berissense.jpg"
                alt="Nota en El Berissense sobre Carolina Salva"
                width={500}
                height={625}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded shadow">
                  EN LOS MEDIOS
                </span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-gray-400 font-medium">elberissense.com</span>
              </div>
              <h4 className="font-bold text-gray-900 text-sm leading-snug">
                &ldquo;Si buscas un consultorio odontologico en Berisso, Carolina Salva es la mejor opcion&rdquo;
              </h4>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
