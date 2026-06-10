import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function FloatingLines({
  linesGradient = ["#22d3ee", "#6366f1", "#a855f7"],
  animationSpeed = 1,
  interactive = false,
  bendRadius = 4,
  bendStrength = -0.25,
  parallax = false,
  parallaxStrength = 0.08,
}) {
  const prefersReducedMotion = useReducedMotion();

  const lines = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        top: `${8 + i * 7}%`,
        delay: i * 0.25,
        duration: 8 + (i % 4) * 1.5,
      })),
    []
  );

  const gradient = `linear-gradient(90deg, ${linesGradient.join(", ")})`;
  const motionScale = prefersReducedMotion ? 0 : animationSpeed;

  return (
    <div className="relative h-full w-full overflow-hidden">
      {lines.map((line) => (
        <motion.div
          key={line.id}
          className="absolute left-[-30%] h-[1px] w-[160%] opacity-40"
          style={{
            top: line.top,
            backgroundImage: gradient,
            transform: `rotate(${bendRadius * bendStrength}deg)`,
            filter: "blur(0.2px)",
          }}
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  x: [0, 30 * motionScale, 0],
                  opacity: [0.2, 0.55, 0.2],
                }
          }
          transition={{
            duration: line.duration / Math.max(animationSpeed, 0.2),
            repeat: Infinity,
            ease: "easeInOut",
            delay: line.delay,
          }}
        />
      ))}
      {!interactive && parallax && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            transform: `translateY(${parallaxStrength * 10}px)`,
          }}
        />
      )}
    </div>
  );
}
