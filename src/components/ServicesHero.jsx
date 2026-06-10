import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import FloatingLines from "./FloatingLines";

export default function ServicesHero() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [pointer, setPointer] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const onChange = () => setIsMobile(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: isMobile ? 8 : 16 }, (_, i) => ({
        id: i,
        left: `${6 + ((i * 11) % 88)}%`,
        top: `${8 + ((i * 7) % 78)}%`,
        delay: (i % 6) * 0.6,
        duration: 6 + (i % 5) * 1.4,
      })),
    [isMobile]
  );

  const heroVideoSrc = isMobile
    ? "/services/services-hero-mobile.mp4"
    : "/services/services-hero-desktop.mp4";

  return (
    <section
      className="relative left-1/2 min-h-screen w-screen -translate-x-1/2 overflow-hidden -mt-20"
      onMouseMove={(e) => {
        if (isMobile) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setPointer({ x, y });
      }}
    >
      <div className="absolute inset-0 z-0">
        {!videoFailed ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/services/it-services.webp"
            className="h-full w-full object-cover"
            onError={() => setVideoFailed(true)}
          >
            <source src={heroVideoSrc} type="video/mp4" />
          </video>
        ) : (
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/services/it-services.webp')" }}
          />
        )}
      </div>

      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#fff8e6]/78 via-[#f9edcf]/74 to-[#f5df9f]/78" />
      <div className="absolute inset-0 z-[1] opacity-75 mix-blend-screen">
        <FloatingLines
          linesGradient={["#D4AF37", "#BFA45F", "#f4e2a1"]}
          animationSpeed={1.2}
          interactive={false}
          bendRadius={4}
          bendStrength={-0.25}
          parallax
          parallaxStrength={0.12}
        />
      </div>
      <motion.div
        className="absolute inset-0 z-[2]"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 24%, rgba(212,175,55,0.22), transparent 45%), radial-gradient(circle at 82% 14%, rgba(191,164,95,0.24), transparent 42%), radial-gradient(circle at 52% 88%, rgba(244,226,161,0.18), transparent 45%)",
          backgroundSize: "130% 130%",
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 z-[3]"
        animate={{ x: `${(pointer.x - 50) * 0.2}px`, y: `${(pointer.y - 50) * 0.2}px` }}
        transition={{ type: "spring", stiffness: 25, damping: 20 }}
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,245,214,0.45), rgba(255,245,214,0) 46%)",
        }}
      />
      <div
        className={`absolute inset-0 z-[4] bg-[rgba(255,248,230,0.28)] ${
          isMobile ? "backdrop-blur-sm" : "backdrop-blur-lg"
        }`}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] h-56 bg-gradient-to-b from-transparent via-[#fff7e2]/65 to-[#fffCF0]" />

      {!prefersReducedMotion && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-[5]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,175,55,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(191,164,95,0.12) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
          animate={{ backgroundPosition: ["0px 0px, 0px 0px", "0px 44px, 0px 44px"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
      )}

      {!prefersReducedMotion && (
        <div className="pointer-events-none absolute inset-0 z-[6]">
          {particles.map((p) => (
            <motion.span
              key={p.id}
              className="absolute h-[2px] w-[2px] rounded-full bg-[#f5e6b0]/80 shadow-[0_0_12px_rgba(212,175,55,0.7)]"
              style={{ left: p.left, top: p.top }}
              animate={{ y: [0, -18, 0], opacity: [0.22, 0.95, 0.22], scale: [1, 1.3, 1] }}
              transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
            />
          ))}
        </div>
      )}

      {!prefersReducedMotion && (
        <motion.div
          className="pointer-events-none absolute left-[8%] top-[18%] z-[6] h-32 w-32 rounded-full bg-[#D4AF37]/25 blur-2xl"
          animate={{ y: [0, -24, 0], x: [0, 16, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      {!prefersReducedMotion && (
        <motion.div
          className="pointer-events-none absolute right-[12%] bottom-[20%] z-[6] h-44 w-44 rounded-full bg-[#BFA45F]/20 blur-3xl"
          animate={{ y: [0, 20, 0], x: [0, -18, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-24 sm:px-10 md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="hero-heading mx-auto mb-5 max-w-[90vw] text-center font-serif text-[1.95rem] leading-[1.5] font-extrabold tracking-tight text-transparent transition-all ease-in-out [text-shadow:0_0_30px_rgba(212,175,55,0.35)] will-change-transform sm:max-w-[18ch] sm:text-5xl sm:leading-[1.08] sm:hover:scale-[1.02] sm:hover:brightness-110 md:text-6xl md:leading-[1.04] lg:text-7xl bg-gradient-to-r from-[#3b2a08] via-[#BFA45F] to-[#D4AF37] bg-clip-text"
            style={{ transitionDuration: "400ms" }}
          >
            IT & Business Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-sm leading-relaxed tracking-[0.01em] text-[#5b4520] sm:text-lg md:text-xl"
          >
            Enterprise-grade solutions engineered for high-performance, scalable and secure
            digital ecosystems.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
