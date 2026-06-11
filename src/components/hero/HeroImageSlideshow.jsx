import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const FADE = { duration: 1.1, ease: [0.22, 1, 0.36, 1] };

export default function HeroImageSlideshow({
  images,
  intervalMs = 4500,
  className,
  imageClassName,
  paused = false,
  dotTheme = "light",
}) {
  const [index, setIndex] = useState(0);
  const count = images?.length ?? 0;

  useEffect(() => {
    if (count <= 1 || paused) return undefined;

    const timer = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [count, intervalMs, paused]);

  if (!count) return null;

  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      {images.map((src, i) => (
        <motion.img
          key={src}
          src={src}
          alt=""
          loading={i === 0 ? "eager" : "lazy"}
          fetchPriority={i === 0 ? "high" : "low"}
          className={cn(
            "absolute inset-0 h-full w-full object-cover object-center saturate-[1.05]",
            imageClassName,
          )}
          animate={{
            opacity: i === index ? 1 : 0,
            scale: i === index ? 1 : 1.04,
          }}
          transition={FADE}
          aria-hidden={i !== index}
        />
      ))}

      {count > 1 && (
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                dotTheme === "gold"
                  ? i === index
                    ? "w-7 bg-[#d4af37]"
                    : "w-1.5 bg-[#0f172a]/25 hover:bg-[#0f172a]/40"
                  : i === index
                    ? "w-7 bg-white"
                    : "w-1.5 bg-white/45 hover:bg-white/70",
              )}
              aria-label={`Show hero image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
