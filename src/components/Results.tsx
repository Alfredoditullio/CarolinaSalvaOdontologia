"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";


const items = [
  {
    src: "/images/antes-despues-1.webp",
    label: "Restauracion Dental",
    type: "image" as const,
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/videocarillas.mp4",
    label: "Carillas Dentales",
    type: "video" as const,
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/caso-video-1.mp4",
    label: "Caso Clinico",
    type: "video" as const,
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/antes-despues-2.webp",
    label: "Blanqueamiento",
    type: "image" as const,
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/caso-video-2.mp4",
    label: "Tratamiento",
    type: "video" as const,
    span: "col-span-2 row-span-1",
  },
];

function PlayIcon() {
  return (
    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  );
}

export default function Results() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [selected, setSelected] = useState<number | null>(null);

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = selected !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  const active = selected !== null ? items[selected] : null;

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32"
      style={{ background: "linear-gradient(180deg, #0d0614 0%, #0a0510 60%, #110818 100%)" }}
    >
      {/* Diente feliz — sobresale hacia el bloque de servicios (efecto 3D) */}
      <motion.div
        className="absolute pointer-events-none z-20"
        style={{
          top: "-80px",
          left: "62%",
          transform: "translateX(-50%)",
          filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.6)) drop-shadow(0 8px 16px rgba(255,69,134,0.25))",
        }}
        animate={{ y: [0, -10, 0], rotate: [-3, 3, -3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image src="/images/diente-feliz-clean.webp" alt="Diente feliz" width={160} height={160} />
      </motion.div>

      {/* Diente flotante — arriba a la derecha */}
      <motion.div
        className="absolute top-12 right-12 pointer-events-none z-0 opacity-20"
        animate={{ y: [0, -12, 0], rotate: [-5, 5, -5] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image src="/images/diente-clean.webp" alt="" width={80} height={80} />
      </motion.div>

      {/* Diente flotante — abajo a la izquierda */}
      <motion.div
        className="absolute bottom-10 left-16 pointer-events-none z-0 opacity-15"
        animate={{ y: [0, 12, 0], rotate: [15, 8, 15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Image src="/images/diente-clean.webp" alt="" width={55} height={55} />
      </motion.div>

      {/* Divisor top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF4586]/50 to-transparent" />

      {/* Glows de fondo */}
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(255,69,134,0.08)" }} />
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(204,31,99,0.06)" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-block bg-[#FF4586]/15 text-[#FF4586] border border-[#FF4586]/30 px-5 py-2 rounded-full text-xl font-bold mb-5 tracking-wide">
            Casos Reales
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="text-5xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Resultados que{" "}
              <span className="bg-gradient-to-r from-[#FF7AAB] to-[#FF4586] bg-clip-text text-transparent">
                hablan
              </span>
            </h2>
            <p className="text-white/40 text-base max-w-xs md:text-right leading-relaxed">
              Hace click en cada caso para verlo en detalle
            </p>
          </div>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[600px] md:h-[680px]">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.08 * i, duration: 0.5 }}
              onClick={() => setSelected(i)}
              className={`${item.span} relative rounded-2xl overflow-hidden cursor-pointer group`}
            >
              {/* Media */}
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <video
                  src={item.src}
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="metadata"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}

              {/* Overlay permanente sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Overlay hover */}
              <div className="absolute inset-0 bg-[#FF4586]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Borde fucsia en hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-[#FF4586] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Play icon para videos */}
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <PlayIcon />
                </div>
              )}

              {/* Label — mobile: barra full-width; desktop: pill original */}
              {/* Mobile */}
              <div className="md:hidden absolute bottom-0 left-0 right-0 px-2 pb-2">
                <div className="bg-black/55 backdrop-blur-sm border border-white/15 rounded-xl px-3 py-2 w-full">
                  <span className="text-white text-xs font-semibold leading-snug block">
                    {item.label}
                  </span>
                </div>
              </div>
              {/* Desktop */}
              <div className="hidden md:flex absolute bottom-3 left-3 right-3 items-center justify-between">
                <span className="bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
                  {item.label}
                </span>
                <span className="bg-[#FF4586]/80 backdrop-blur-sm text-white text-xs px-2.5 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                  Ver
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            onClick={close}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/92 backdrop-blur-md" />

            {/* Content */}
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[88vh] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-[#FF4586]/20"
            >
              {active.type === "image" ? (
                <Image
                  src={active.src}
                  alt={active.label}
                  width={1200}
                  height={900}
                  className="w-full h-full object-contain max-h-[88vh]"
                />
              ) : (
                <video
                  src={active.src}
                  controls
                  autoPlay
                  playsInline
                  className="w-full max-h-[88vh] bg-black"
                />
              )}

              {/* Label overlay */}
              <div className="absolute top-4 left-4">
                <span className="bg-[#FF4586] text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
                  {active.label}
                </span>
              </div>

              {/* Navegación anterior / siguiente */}
              {selected !== null && selected > 0 && (
                <button
                  onClick={(e) => { e.stopPropagation(); setSelected(selected - 1); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                </button>
              )}
              {selected !== null && selected < items.length - 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); setSelected(selected + 1); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                </button>
              )}

              {/* Cerrar */}
              <button
                onClick={close}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#FF4586] transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
