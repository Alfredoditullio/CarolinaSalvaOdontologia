"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Blanqueamiento Dental",
    description: "Devolvemos la luminosidad a tu sonrisa con técnicas avanzadas y seguras. Resultados visibles desde la primera sesión.",
    tags: ["Sesión única", "Sin dolor", "Resultados inmediatos"],
    icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
    image: "/images/services/blanqueamiento.webp",
  },
  {
    number: "02",
    title: "Carillas Dentales",
    description: "Transforma tu sonrisa con carillas de porcelana o composite. Resultados estéticos naturales y duraderos.",
    tags: ["Porcelana", "Composite", "Estética natural"],
    icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    image: "/images/services/carillas.webp",
  },
  {
    number: "03",
    title: "Restauraciones",
    description: "Recuperamos la funcionalidad y estética de tus dientes con materiales de última generación.",
    tags: ["Alta durabilidad", "Estética", "Funcional"],
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    image: "/images/services/restauraciones.webp",
  },
  {
    number: "04",
    title: "Limpieza Profesional",
    description: "Eliminamos sarro y placa bacteriana para mantener tus encías sanas y tu sonrisa brillante.",
    tags: ["Preventivo", "Encías sanas", "Semestral"],
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    image: "/images/services/limpieza.webp",
  },
  {
    number: "05",
    title: "Implantes Dentales",
    description: "Recupera piezas dentales perdidas con implantes de última generación. Especialización en curso para los mejores resultados.",
    tags: ["Titánio", "Larga duración", "Natural"],
    icon: "M12 2v6m0 8v6M8 6h8l-1 6H9L8 6zm1 6h6l-1 6H10l-1-6z",
    image: "/images/services/implantes.webp",
  },
  {
    number: "06",
    title: "Estética Facial",
    description: "Ácido hialurónico y tratamientos estéticos faciales. Armonización orofacial para realzar tu belleza natural.",
    tags: ["Próximamente", "Ácido hialurónico", "Facial"],
    icon: "M12 2a10 10 0 100 20 10 10 0 000-20zm0 4a2 2 0 110 4 2 2 0 010-4zm-4 8a4 4 0 018 0",
    image: "/images/services/estetica-facial.webp",
    isNew: true,
  },
  {
    number: "07",
    title: "Odontología Infantil",
    description: "Cuidamos las sonrisas más pequeñas con paciencia y técnicas especializadas para niños.",
    tags: ["Niños", "Sin miedo", "Preventivo"],
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    image: "/images/services/infantil.webp",
  },
  {
    number: "08",
    title: "Consulta Integral",
    description: "Evaluación completa de tu salud bucal con plan de tratamiento personalizado.",
    tags: ["Diagnóstico", "Personalizado", "Completo"],
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
    image: "/images/services/consulta.webp",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [active, setActive] = useState(0);

  const current = services[active];

  return (
    <section
      id="servicios"
      ref={ref}
      className="relative py-24 md:py-32"
      style={{
        background: "linear-gradient(135deg, #FF4586 0%, #e8306f 40%, #CC1F63 100%)",
      }}
    >
      {/* Diente feliz — divisor con Sobre Mi, un poco a la izquierda */}
      <motion.div
        className="absolute pointer-events-none z-20"
        style={{
          top: "-80px",
          left: "33%",
          transform: "translateX(-50%)",
          filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5)) drop-shadow(0 8px 16px rgba(255,69,134,0.3))",
        }}
        animate={{ y: [0, -10, 0], rotate: [5, -1, 5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      >
        <Image src="/images/diente-feliz-clean.webp" alt="Diente feliz" width={160} height={160} />
      </motion.div>

      {/* Overlay oscuro general */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "rgba(0,0,0,0.28)" }} />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Viñeta oscura en esquinas */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none" style={{ background: "rgba(0,0,0,0.40)" }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none" style={{ background: "rgba(0,0,0,0.35)" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block bg-black/20 text-white border border-white/30 px-5 py-2 rounded-full text-xl font-bold mb-4 tracking-wide backdrop-blur-sm">
            Servicios
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Tratamientos que{" "}
            <span className="text-black/60">transforman</span>
          </h2>
        </motion.div>

        {/* ── MOBILE: accordion ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:hidden flex flex-col divide-y"
          style={{ borderColor: "rgba(0,0,0,0.18)" }}
        >
          {services.map((s, i) => (
            <div key={s.number}>
              {/* Fila selector */}
              <button
                onClick={() => setActive(i)}
                className="w-full group flex items-center gap-4 py-4 px-2 text-left transition-all duration-300 relative"
              >
                {active === i && (
                  <motion.div
                    layoutId="activeBarMobile"
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
                    style={{ background: "rgba(0,0,0,0.5)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                <span
                  className="text-xs font-bold tabular-nums w-6 flex-shrink-0"
                  style={{ color: active === i ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.35)" }}
                >
                  {s.number}
                </span>
                <span
                  className="font-bold text-base flex-1"
                  style={{ color: active === i ? "white" : "rgba(255,255,255,0.65)" }}
                >
                  {s.title}
                </span>
                {s.isNew && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                    style={{ background: "rgba(0,0,0,0.35)", color: "white", border: "1px solid rgba(255,255,255,0.25)" }}>
                    PRONTO
                  </span>
                )}
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  className="flex-shrink-0 transition-transform duration-300"
                  style={{
                    color: active === i ? "white" : "rgba(255,255,255,0.30)",
                    transform: active === i ? "rotate(90deg)" : "rotate(0deg)",
                  }}
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>

              {/* Panel expandible */}
              <AnimatePresence initial={false}>
                {active === i && (
                  <motion.div
                    key={s.number}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: "easeOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      className="mx-1 mb-4 rounded-2xl overflow-hidden"
                      style={{
                        background: "rgba(8,4,14,0.90)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
                      }}
                    >
                      {/* Imagen superior */}
                      <div className="relative h-40 w-full">
                        <Image src={s.image} alt={s.title} fill className="object-cover" sizes="100vw" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#08040e]/90" />
                      </div>
                      {/* Contenido */}
                      <div className="p-5 flex flex-col gap-4">
                        <div className="flex items-start gap-3">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{ background: "rgba(255,69,134,0.18)", border: "1px solid rgba(255,69,134,0.3)" }}
                          >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF7AAB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d={s.icon} />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white leading-tight">{s.title}</h3>
                            {s.isNew && (
                              <span className="inline-block mt-1 text-[10px] font-bold px-2.5 py-1 rounded-full"
                                style={{ background: "rgba(255,69,134,0.2)", color: "#FF7AAB", border: "1px solid rgba(255,69,134,0.3)" }}>
                                PRÓXIMAMENTE
                              </span>
                            )}
                          </div>
                        </div>
                        <p className="text-white/55 text-sm leading-relaxed">{s.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {s.tags.map((tag) => (
                            <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full"
                              style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.1)" }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                        <a
                          href="https://wa.me/542213992512?text=Hola%20Carolina!%20Quiero%20consultar%20sobre%20"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF4586] to-[#CC1F63] hover:from-[#25D366] hover:to-[#128C7E] text-white px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300"
                        >
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                          Consultar por WhatsApp
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* ── DESKTOP: split layout ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:grid lg:grid-cols-[1fr_1.1fr] gap-6 items-stretch"
        >
          {/* Lista izquierda */}
          <div className="flex flex-col divide-y"
            style={{ borderColor: "rgba(0,0,0,0.18)" }}
          >
            {services.map((s, i) => (
              <button
                key={s.number}
                onClick={() => setActive(i)}
                className="group flex items-center gap-5 py-4 px-2 text-left transition-all duration-300 relative"
              >
                {active === i && (
                  <motion.div
                    layoutId="activeBar"
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
                    style={{ background: "rgba(0,0,0,0.5)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                <span
                  className="text-xs font-bold tabular-nums transition-colors duration-300 w-6 flex-shrink-0"
                  style={{ color: active === i ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.35)" }}
                >
                  {s.number}
                </span>
                <span
                  className="font-bold text-base md:text-lg transition-colors duration-300 flex-1"
                  style={{ color: active === i ? "white" : "rgba(255,255,255,0.65)" }}
                >
                  {s.title}
                </span>
                {s.isNew && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                    style={{ background: "rgba(0,0,0,0.35)", color: "white", border: "1px solid rgba(255,255,255,0.25)" }}>
                    PRONTO
                  </span>
                )}
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  className="flex-shrink-0 transition-all duration-300"
                  style={{
                    color: active === i ? "white" : "rgba(255,255,255,0.25)",
                    transform: active === i ? "translateX(4px)" : "translateX(0)",
                  }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>

          {/* Panel derecho — detalle animado */}
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: "rgba(8,4,14,0.90)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.07)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.number}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="flex items-stretch"
              >
                {/* Columna izquierda — contenido */}
                <div className="flex flex-col justify-between p-8 flex-1 gap-6">
                  <div
                    className="text-[64px] font-black leading-none select-none -mb-4"
                    style={{ color: "rgba(255,69,134,0.13)" }}
                  >
                    {current.number}
                  </div>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(255,69,134,0.18)", border: "1px solid rgba(255,69,134,0.3)" }}
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF7AAB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d={current.icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">{current.title}</h3>
                      {current.isNew && (
                        <span className="inline-block mt-1 text-[10px] font-bold px-2.5 py-1 rounded-full"
                          style={{ background: "rgba(255,69,134,0.2)", color: "#FF7AAB", border: "1px solid rgba(255,69,134,0.3)" }}>
                          PRÓXIMAMENTE
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-white/55 leading-relaxed text-sm">{current.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {current.tags.map((tag) => (
                      <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full"
                        style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.1)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://wa.me/542213992512?text=Hola%20Carolina!%20Quiero%20consultar%20sobre%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#FF4586] to-[#CC1F63] hover:from-[#25D366] hover:to-[#128C7E] text-white px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 shadow-lg shadow-[#FF4586]/25 hover:shadow-[#25D366]/30"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Consultar por este tratamiento
                  </a>
                </div>

                {/* Columna derecha — imagen a lo largo */}
                <div className="relative w-52 flex-shrink-0">
                  <Image src={current.image} alt={current.title} fill className="object-cover" sizes="208px" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#08040e] via-[#08040e]/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#08040e]/40 via-transparent to-[#08040e]/40" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
