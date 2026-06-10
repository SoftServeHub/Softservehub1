import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface HeroProps {
  onProductClick?: () => void;
}

const Hero = ({ onProductClick }: HeroProps) => {
  const aiText = "INTELLIGENT AI SYSTEMS";
  const [typedText, setTypedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = window.setInterval(() => {
      i += 1;
      setTypedText(aiText.slice(0, i));
      if (i >= aiText.length) {
        window.clearInterval(interval);
        setTypingDone(true);
      }
    }, 80);

    return () => window.clearInterval(interval);
  }, []);

  const pointerX = useMotionValue(0);
  const textShiftX = useSpring(useTransform(pointerX, [-1, 1], [-4, 4]), {
    stiffness: 80,
    damping: 18,
  });

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointerX.set(x);
  };

  const handleMouseLeave = () => {
    pointerX.set(0);
  };

  const handleSecondaryCta = () => {
    const whySection = document.getElementById("why");
    if (whySection) whySection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[88vh] w-full overflow-hidden bg-[#f7f8fa]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_0%,rgba(212,175,55,0.14),transparent_55%)]"
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-[0.2] [background-image:linear-gradient(rgba(9,9,11,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(9,9,11,0.04)_1px,transparent_1px)] [background-size:48px_48px]"
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="relative z-10 mx-auto flex min-h-[88vh] w-full max-w-5xl items-center justify-center px-4 pb-20 pt-8 sm:px-6 md:px-10"
      >
        <motion.div className="relative text-center" style={{ x: textShiftX }}>
          <motion.span className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#fffbeb] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#92400e] sm:text-xs">
            SoftServe Hub
          </motion.span>

          <motion.h1 className="products-hero-headline mx-auto mt-6 max-w-full break-words px-4 font-['Zen_Dots','Space_Grotesk','Inter','SF_Pro_Display','Satoshi',sans-serif] text-[1.7rem] font-extrabold leading-[1.3] tracking-[0.05em] sm:text-[2.25rem] md:text-[2.6rem] lg:text-[3.4rem]">
            <motion.span
              initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)", textShadow: "0 0 36px rgba(212,175,55,0.35)" }}
              transition={{ delay: 0.22, duration: 0.7 }}
              className="relative isolate inline-block max-w-full whitespace-normal pb-[0.1em] font-['Zen_Dots',cursive] bg-gradient-to-r from-[#0f172a] via-[#92400e] to-[#d4af37] bg-clip-text text-transparent [text-shadow:0_0_34px_rgba(212,175,55,0.4)] lg:whitespace-nowrap"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/0 to-transparent bg-clip-text text-transparent mix-blend-screen opacity-70"
              >
                {typedText}
              </span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent bg-clip-text text-transparent opacity-55"
              >
                {typedText}
              </span>
              {typedText}
              <span className="ml-1 inline-block h-[0.9em] w-[0.08em] bg-[#d4af37] align-[-0.08em]" />
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
              animate={{ opacity: typingDone ? 1 : 0, y: typingDone ? 0 : 12, filter: typingDone ? "blur(0px)" : "blur(4px)" }}
              transition={{ duration: 0.5 }}
              className="mt-2 block font-['Space_Grotesk',sans-serif] text-[0.9em] font-medium tracking-[0.01em] text-[#52525b] md:mt-3 md:text-[1.02em] md:tracking-[0.015em]"
            >
              Built for Modern Enterprises
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#52525b] md:text-lg"
          >
            SoftServe Hub unifies automation, customer intelligence, and AI orchestration so your
            teams ship production-ready experiences faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.6 }}
            className="mt-9 flex w-full flex-col items-center justify-center gap-4 px-4 sm:flex-row sm:px-0"
          >
            <motion.button
              type="button"
              onClick={onProductClick}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-xl bg-gradient-to-r from-[#d4af37] to-[#f6df9a] px-8 py-3 text-sm font-semibold text-[#09090b] shadow-[0_12px_36px_rgba(212,175,55,0.32)] sm:w-auto md:text-base"
            >
              Explore Products
            </motion.button>

            <motion.button
              type="button"
              onClick={handleSecondaryCta}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-xl border border-[#d1d9e6] bg-white px-8 py-3 text-sm font-semibold text-[#334155] shadow-sm transition-colors hover:border-[#d4af37]/55 sm:w-auto md:text-base"
            >
              Why SoftServe Hub
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
