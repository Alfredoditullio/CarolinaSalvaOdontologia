import type { Metadata } from "next";
import { Geist, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const dancing = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Od. Carolina Salva | Odontologa en Berisso",
  description:
    "Odontologia integral con enfoque en estetica natural y salud. Blanqueamiento, carillas, implantes, restauraciones y estetica facial. Turnos por WhatsApp. Gestion con DentalCore.",
  keywords: [
    "odontologa",
    "dentista",
    "Berisso",
    "blanqueamiento dental",
    "carillas dentales",
    "implantes dentales",
    "odontologia estetica",
    "estetica facial",
    "acido hialuronico",
    "Carolina Salva",
    "turnos dentista",
    "DentalCore",
    "software odontologico",
    "gestion dental",
  ],
  openGraph: {
    title: "Od. Carolina Salva | Odontologa en Berisso",
    description:
      "Tu sonrisa, nuestra pasion. Odontologia integral con enfoque en estetica natural. Gestion profesional con DentalCore.",
    type: "website",
    locale: "es_AR",
    images: ["/images/logo.webp"],
    siteName: "Od. Carolina Salva",
  },
  robots: "index, follow",
  other: {
    "article:publisher": "https://www.dentalcore.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${playfair.variable} ${dancing.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://www.dentalcore.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "Od. Carolina Salva",
              description:
                "Odontologia integral con enfoque en estetica natural y salud en Berisso, Buenos Aires.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Berisso",
                addressRegion: "Buenos Aires",
                addressCountry: "AR",
              },
              telephone: "+54 221 399 2512",
              url: "https://www.dentalcore.app",
              sameAs: ["https://instagram.com/od.salva"],
              image: "/images/logo.webp",
              areaServed: {
                "@type": "City",
                name: "Berisso",
              },
              knowsAbout: [
                "Odontologia",
                "Blanqueamiento dental",
                "Carillas dentales",
                "Implantes dentales",
                "Estetica facial",
                "DentalCore software odontologico",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
