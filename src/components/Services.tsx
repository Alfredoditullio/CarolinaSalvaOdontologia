"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import FloatingElements from "./FloatingElements";

const services = [
  {
    title: "Blanqueamiento Dental",
    description:
      "Devolvemos la luminosidad a tu sonrisa con tecnicas avanzadas y seguras. Resultados visibles desde la primera sesion.",
    icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
    gradient: "from-amber-400 to-orange-500",
    bgGlow: "bg-amber-400/10",
  },
  {
    title: "Carillas Dentales",
    description:
      "Transforma tu sonrisa con carillas de porcelana o composite. Resultados esteticos naturales y duraderos.",
    icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    gradient: "from-rose-400 to-pink-500",
    bgGlow: "bg-rose-400/10",
  },
  {
    title: "Restauraciones",
    description:
      "Recuperamos la funcionalidad y estetica de tus dientes con materiales de ultima generacion.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    gradient: "from-violet-400 to-purple-500",
    bgGlow: "bg-violet-400/10",
  },
  {
    title: "Limpieza Profesional",
    description:
      "Eliminamos sarro y placa bacteriana para mantener tus encias sanas y tu sonrisa brillante.",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    gradient: "from-cyan-400 to-teal-500",
    bgGlow: "bg-cyan-400/10",
  },
  {
    title: "Implantes Dentales",
    description:
      "Recupera piezas dentales perdidas con implantes de ultima generacion. Especializacion en curso para los mejores resultados.",
    icon: "M12 2v6m0 8v6M8 6h8l-1 6H9L8 6zm1 6h6l-1 6H10l-1-6z",
    gradient: "from-emerald-400 to-green-500",
    bgGlow: "bg-emerald-400/10",
  },
  {
    title: "Estetica Facial",
    description:
      "Acido hialuronico y tratamientos esteticos faciales. Armonizacion orofacial para realzar tu belleza natural.",
    icon: "M12 2a10 10 0 100 20 10 10 0 000-20zm0 4a2 2 0 110 4 2 2 0 010-4zm-4 8a4 4 0 018 0",
    gradient: "from-fuchsia-400 to-pink-500",
    bgGlow: "bg-fuchsia-400/10",
    isNew: true,
  },
  {
    title: "Odontologia Infantil",
    description:
      "Cuidamos las sonrisas mas pequenas con paciencia y tecnicas especializadas para ninos.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    gradient: "from-sky-400 to-blue-500",
    bgGlow: "bg-sky-400/10",
  },
  {
    title: "Consulta Integral",
    description:
      "Evaluacion completa de tu salud bucal con plan de tratamiento personalizado.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
    gradient: "from-blue-400 to-indigo-500",
    bgGlow: "bg-blue-400/10",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section
      id="servicios"
      ref={ref}
      className="relative py-24 md:py-32 bg-gray-50 overflow-hidden"
    >
      {/* Floating dental elements */}
      <FloatingElements count={5} variant="light" className="text-[var(--accent)]/15" />

      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--accent)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--accent-light)]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[var(--accent)]/10 text-[var(--accent)] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tratamientos que{" "}
            <span className="text-[var(--accent)]">transforman</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Cada tratamiento es personalizado para lograr los mejores resultados
            con las tecnicas mas avanzadas
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(null)}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:shadow-[var(--accent)]/10 transition-all duration-500 cursor-pointer border border-gray-100 hover:border-[var(--accent)]/20"
            >
              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 ${service.bgGlow} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* New badge */}
                {"isNew" in service && service.isNew && (
                  <span className="absolute -top-3 -right-3 bg-fuchsia-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg animate-pulse">
                    PRONTO
                  </span>
                )}
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={service.icon} />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--accent-dark)] transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-500 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Arrow */}
                <motion.div
                  className="mt-6 flex items-center gap-2 text-[var(--accent)] text-sm font-semibold"
                  animate={activeCard === i ? { x: 5 } : { x: 0 }}
                >
                  Consultar
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
