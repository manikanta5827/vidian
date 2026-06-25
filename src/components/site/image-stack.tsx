"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/img/chip.jpg",
  "/img/cleanroom_lab.jpg",
  "/img/processor_board.jpg",
  "/img/silicon_wafer.jpg",
];

export function ImageStack() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative aspect-[4/3] w-full perspective-[1000px]">
      <AnimatePresence mode="popLayout">
        {images.map((img, i) => {
          const position = (i - index + images.length) % images.length;
          
          // Only show the front 3 cards
          if (position > 2) return null;

          return (
            <motion.div
              key={img}
              layoutId={img}
              className="absolute inset-0 overflow-hidden rounded-2xl border border-border shadow-2xl shadow-primary/5 bg-background"
              initial={{ 
                scale: 0.85, 
                y: -60, 
                opacity: 0 
              }}
              animate={{
                scale: 1 - position * 0.05,
                y: position * -20,
                opacity: 1 - position * 0.15,
                zIndex: images.length - position,
              }}
              exit={{ 
                scale: 1.05, 
                y: 40, 
                opacity: 0 
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30 
              }}
            >
              <img
                src={img}
                alt="VLSI Engineering"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
