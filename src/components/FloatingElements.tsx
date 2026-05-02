"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const toothPath =
  "M12 2C9.5 2 7.5 3.5 7 6C6.5 8.5 5 10 4 12C3 14 3 16 4 18C5 20 7 22 8.5 22C10 22 10.5 20 12 20C13.5 20 14 22 15.5 22C17 22 19 20 20 18C21 16 21 14 20 12C19 10 17.5 8.5 17 6C16.5 3.5 14.5 2 12 2Z";

const mirrorPath = "M12 2a10 10 0 00-3 19.5V22a1 1 0 001 1h4a1 1 0 001-1v-.5A10 10 0 0012 2zm0 4a6 6 0 11-6 6 6 6 0 016-6z";

const brushPath = "M4 2h2v6H4zm14 0h2v6h-2zM3 8h18v3a3 3 0 01-3 3H6a3 3 0 01-3-3V8zm5 6v8h8v-8";

const sparklePath = "M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z";

const crossPath = "M12 4v16m-8-8h16";

interface FloatingProps {
  count?: number;
  className?: string;
  variant?: "light" | "dark";
}

interface ElementData {
  pathIndex: number;
  size: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
  rotation: number;
}

export default function FloatingElements({
  count = 12,
  className = "",
  variant = "dark",
}: FloatingProps) {
  const paths = [toothPath, sparklePath, mirrorPath, brushPath, crossPath];
  const fillOrStroke = variant === "dark";
  const maxOpacity = variant === "light" ? 0.12 : 0.35;

  const [elements, setElements] = useState<ElementData[]>([]);

  useEffect(() => {
    const data: ElementData[] = Array.from({ length: count }, (_, i) => {
      const pathIndex = i % paths.length;
      const isSparkle = pathIndex === 1;
      const isCross = pathIndex === 4;
      return {
        pathIndex,
        size: isSparkle
          ? 14 + Math.random() * 10
          : isCross
          ? 10 + Math.random() * 8
          : 24 + Math.random() * 20,
        left: 2 + Math.random() * 96,
        top: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 8 + Math.random() * 10,
        rotation: Math.random() * 360,
      };
    });
    setElements(data);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ color: "var(--accent)" }}
    >
      {elements.map((el, i) => {
        const isSparkle = el.pathIndex === 1;
        const isCross = el.pathIndex === 4;
        return (
          <motion.svg
            key={i}
            width={el.size}
            height={el.size}
            viewBox="0 0 24 24"
            fill="none"
            className="absolute pointer-events-none"
            style={{
              left: `${el.left}%`,
              top: `${el.top}%`,
            }}
            initial={{ opacity: 0, rotate: el.rotation }}
            animate={{
              opacity: maxOpacity,
              y: [0, -20, 0],
              rotate: el.rotation + 180,
            }}
            transition={{
              opacity: { duration: 1, delay: el.delay },
              y: { duration: el.duration, delay: el.delay, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: el.duration * 2, delay: el.delay, repeat: Infinity, ease: "linear" },
            }}
          >
            {isSparkle || isCross ? (
              <path
                d={paths[el.pathIndex]}
                fill={isSparkle ? "currentColor" : "none"}
                stroke={isCross ? "currentColor" : "none"}
                strokeWidth={isCross ? "2" : "0"}
                strokeLinecap="round"
              />
            ) : (
              <path
                d={paths[el.pathIndex]}
                stroke="currentColor"
                strokeWidth={fillOrStroke ? "1.5" : "1"}
                fill={fillOrStroke ? "currentColor" : "none"}
                fillOpacity={fillOrStroke ? 0.15 : 0}
              />
            )}
          </motion.svg>
        );
      })}
    </div>
  );
}
