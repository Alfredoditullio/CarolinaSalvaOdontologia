"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const images = [
  { src: "/images/diente.png", alt: "Diente", w: 65, h: 65 },
  { src: "/images/cepillo.webp", alt: "Cepillo", w: 50, h: 50 },
  { src: "/images/corazon.webp", alt: "Corazon", w: 45, h: 45 },
];

interface Placement {
  img: number;
  left: number;
  top: number;
  rotate: number;
  size: number;
  parallaxSpeed: number;
}

const placements: Placement[] = [
  { img: 0, left: 10, top: 85, rotate: 20, size: 0.7, parallaxSpeed: -110 },
  { img: 1, left: 85, top: 90, rotate: 12, size: 0.65, parallaxSpeed: -130 },
];

function FloatingImage({ placement }: { placement: Placement }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, placement.parallaxSpeed]);
  const img = images[placement.img];
  const w = Math.round(img.w * placement.size);
  const h = Math.round(img.h * placement.size);

  return (
    <motion.div
      ref={ref}
      className="absolute pointer-events-none"
      style={{
        left: `${placement.left}%`,
        top: `${placement.top}%`,
        y,
      }}
      initial={{ opacity: 0, rotate: placement.rotate }}
      animate={{
        opacity: 0.75,
        rotate: [placement.rotate - 4, placement.rotate + 4, placement.rotate - 4],
      }}
      transition={{
        opacity: { duration: 1 },
        rotate: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <Image
        src={img.src}
        alt={img.alt}
        width={w}
        height={h}
        className="drop-shadow-md"
        style={{ width: w, height: h }}
      />
    </motion.div>
  );
}

export default function FloatingImages() {
  return (
    <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
      {placements.map((p, i) => (
        <FloatingImage key={i} placement={p} />
      ))}
    </div>
  );
}
