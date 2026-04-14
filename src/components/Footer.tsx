"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a1a] text-white/50 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.jpg"
              alt="Od. Carolina Salva"
              width={36}
              height={36}
              className="rounded-full"
            />
            <span className="text-white/70 font-medium">
              Od. Carolina Salva
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="#inicio"
              className="hover:text-[var(--accent-light)] transition-colors"
            >
              Inicio
            </a>
            <a
              href="#sobre-mi"
              className="hover:text-[var(--accent-light)] transition-colors"
            >
              Sobre Mi
            </a>
            <a
              href="#servicios"
              className="hover:text-[var(--accent-light)] transition-colors"
            >
              Servicios
            </a>
            <a
              href="#contacto"
              className="hover:text-[var(--accent-light)] transition-colors"
            >
              Contacto
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/od.salva"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[var(--accent)]/20 transition-colors"
              aria-label="Instagram"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://wa.me/542213992512"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-green-500/20 transition-colors"
              aria-label="WhatsApp"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>

        {/* DentalCore powered by */}
        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Od. Carolina Salva. Todos los
            derechos reservados.
          </div>
          <div className="flex items-center gap-2 text-xs text-white/30">
            <span>Gestion odontologica con</span>
            <a
              href="https://www.dentalcore.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent-light)] hover:text-[var(--accent)] transition-colors font-semibold"
            >
              DentalCore
            </a>
            <span>&mdash; Software para consultorios dentales</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
