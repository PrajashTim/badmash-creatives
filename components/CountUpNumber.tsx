"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpNumberProps {
  value: string;
  duration?: number;
}

export default function CountUpNumber({ value, duration = 2800 }: CountUpNumberProps) {
  const [displayValue, setDisplayValue] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Easing function: cubic-ease-out for smooth deceleration
  const easeOutCubic = (t: number): number => {
    return 1 - Math.pow(1 - t, 3);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Extract number from value (e.g., "+340%" -> 340, "50+" -> 50, "3X" -> 3)
          const numberMatch = value.match(/\d+/);
          if (!numberMatch) return;

          const finalNumber = parseInt(numberMatch[0], 10);
          const startTime = Date.now();

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const rawProgress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutCubic(rawProgress);
            const currentNumber = Math.floor(finalNumber * easedProgress);

            // Reconstruct the value with proper formatting
            let displayText = value;
            if (value.includes("%")) {
              displayText = `+${currentNumber}%`;
            } else if (value.includes("X")) {
              displayText = `${currentNumber}X`;
            } else if (value.includes("+")) {
              displayText = `${currentNumber}+`;
            } else {
              displayText = `${currentNumber}`;
            }

            setDisplayValue(displayText);

            if (rawProgress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [value, duration, hasAnimated]);

  return <div ref={ref}>{displayValue}</div>;
}
