import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroImageSlideshow from "./HeroImageSlideshow";

const SCROLL_TAGLINE_WORDS = ["Innovate.", "Integrate.", "Inspire."];

const GRADIENT_TEXT_STYLE = {
  backgroundImage: "linear-gradient(90deg, #0f172a 0%, #92400e 42%, #d4af37 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
};

export default function MagneticMorphStack({
  imageSrc,
  images,
  imageAlt = "SoftServe Hub",
}) {
  const slideshowImages =
    images?.length > 0 ? images : imageSrc ? [imageSrc] : [];
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    window.dispatchEvent(
      new CustomEvent("hero-morph-progress", { detail: { progress: latest } }),
    );
  });

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("hero-morph-progress", { detail: { progress: 0 } }),
    );
    return () => {
      window.dispatchEvent(
        new CustomEvent("hero-morph-progress", { detail: { progress: 1 } }),
      );
    };
  }, []);

  const heroScale = useTransform(smoothProgress, [0, 0.4], [1, 0.5]);
  const heroX = useTransform(smoothProgress, [0, 0.4], ["0%", "-20%"]);
  const heroBorderRadius = useTransform(smoothProgress, [0, 0.4], ["0rem", "2rem"]);
  const heroOverlayOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);

  const contentX = useTransform(smoothProgress, [0.3, 0.6], ["100%", "0%"]);
  const contentOpacity = useTransform(smoothProgress, [0.3, 0.5], [0, 1]);

  return (
    <motion.div ref={containerRef} data-hero-morph className="relative h-[400vh] bg-[#f7f8fa]">
      <div className="absolute top-0 left-1/2 z-30 h-px w-full max-w-7xl -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d4af37]/35 to-transparent" />

      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <motion.div
          style={{
            scale: heroScale,
            x: heroX,
            borderRadius: heroBorderRadius,
          }}
          className="relative z-20 h-full w-full overflow-hidden border border-[#e2e8f0]/90 bg-white shadow-[0_32px_80px_rgba(15,23,42,0.12)]"
        >
          <HeroImageSlideshow images={slideshowImages} />
          <motion.div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/55 via-[#f7f8fa]/10 to-[#fffbeb]/15" />
          <motion.div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#d4af37]/12 via-transparent to-transparent" />

          <motion.div
            style={{ opacity: heroOverlayOpacity }}
            className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
          >
            <h2
              className="font-azzuri-calcio text-[clamp(3rem,12vw,6.5rem)] font-black uppercase leading-[0.9] tracking-[0.06em] text-white whitespace-nowrap drop-shadow-[0_6px_42px_rgba(0,0,0,0.55)] lg:text-[clamp(4.5rem,9vw,7.5rem)]"
              style={{
                textShadow:
                  "0 2px 0 rgba(255,255,255,0.12), 0 8px 32px rgba(0,0,0,0.45), 0 0 80px rgba(15,23,42,0.35)",
              }}
            >
              SoftServe Hub
            </h2>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-white sm:text-sm">
              Scroll to explore
            </p>
            <motion.span
              aria-hidden
              className="mt-3 flex h-9 w-5 items-start justify-center rounded-full border border-white/50"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="mt-2 block h-2 w-0.5 rounded-full bg-white" />
            </motion.span>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ x: contentX, opacity: contentOpacity }}
          className="absolute right-[5%] z-10 w-[90%] md:w-[38%]"
        >
          <motion.div className="space-y-6 sm:space-y-8">
            <motion.div className="space-y-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#92400e]">
                Enterprise AI &amp; Software
              </p>

              <div className="space-y-1">
                {SCROLL_TAGLINE_WORDS.map((word) => (
                  <h2
                    key={word}
                    className="font-azzuri-calcio text-[clamp(2.1rem,7.5vw,4.25rem)] font-black uppercase leading-[0.9] tracking-tight text-transparent lg:text-[clamp(2.5rem,3.8vw,4.75rem)]"
                    style={GRADIENT_TEXT_STYLE}
                  >
                    {word}
                  </h2>
                ))}
              </div>

              <p className="text-base leading-relaxed text-[#64748b] sm:text-lg">
                AI automation, enterprise software, and scalable platforms—built with
                clarity and precision for teams that expect more.
              </p>
            </motion.div>

            <motion.div className="flex flex-row flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#f6df9a] px-6 text-sm font-semibold text-[#09090b] shadow-[0_12px_36px_rgba(212,175,55,0.35)] transition-transform hover:scale-[1.02] active:scale-[0.98] sm:px-7"
              >
                Start your project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex h-12 shrink-0 items-center justify-center rounded-xl border border-[#d1d9e6] bg-white px-6 text-sm font-semibold text-[#334155] shadow-sm transition-colors hover:border-[#d4af37]/55 sm:px-7"
              >
                View services
              </Link>
            </motion.div>

            <p className="text-sm font-medium text-[#94a3b8]">
              Trusted by startups and enterprise teams across India and beyond.
            </p>
          </motion.div>
        </motion.div>

        <div className="pointer-events-none absolute top-0 right-0 z-0 h-full w-1/2 bg-gradient-to-l from-[#fffbeb]/40 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-1/2 z-30 h-px w-full max-w-7xl -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d4af37]/35 to-transparent" />
    </motion.div>
  );
}
