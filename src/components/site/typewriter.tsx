"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  delay?: number;
  className?: string;
}

export function Typewriter({ words, delay = 3000, className }: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const timeout2 = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  useEffect(() => {
    if (words.length === 0) return;
    
    // Safety check to wrap index
    const safeIndex = index % words.length;

    if (
      subIndex === words[safeIndex].length &&
      !isDeleting
    ) {
      const timeout = setTimeout(() => setIsDeleting(true), delay);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 40 : 100); // typing speed vs deleting speed

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, words, delay]);

  const safeIndex = index % words.length;

  return (
    <span className={className}>
      {`${words[safeIndex]?.substring(0, subIndex)}`}
      <span
        className={`inline-block w-[2px] bg-current ml-0.5 -translate-y-1 ${
          blink ? "opacity-100" : "opacity-0"
        }`}
        style={{ height: "0.9em", verticalAlign: "middle" }}
      ></span>
    </span>
  );
}
