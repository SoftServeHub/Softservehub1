import { useRef, useState } from "react";
import { motion, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";
import { cn } from "../../../lib/utils";

const glassNavBase =
  "nav-under-glow group relative inline-flex items-center justify-center overflow-visible rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-500";

const glassNavIdle =
  "border border-slate-200/90 bg-white/55 text-slate-900 backdrop-blur-xl hover:border-[#d4af37]/45 hover:bg-white/75";

const glassNavActive =
  "border border-[#b8860b]/80 bg-gradient-to-br from-[#d4af37]/95 to-[#f6df9a]/85 text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]";

export function getNavButtonClasses(active, className) {
  return cn(glassNavBase, active ? glassNavActive : glassNavIdle, className);
}

export function NavButtonSurface({ active, children, className = "", showArrow = false }) {
  return (
    <>
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#d4af37]/15 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      {active && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/35 via-[#f6df9a]/30 to-[#b8860b]/35 opacity-50" />
          <motion.div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37] via-[#f6df9a] to-[#b8860b] opacity-35 blur-2xl" />
          <div className="absolute inset-px rounded-full bg-white/90 backdrop-blur-md" />
        </>
      )}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {showArrow && !active && (
          <ArrowRight
            size={14}
            className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-70"
          />
        )}
      </span>
    </>
  );
}

export function SpotlightButton({ children, className = "", ...props }) {
  const divRef = useRef(null);
  const position = { x: 0, y: 0 };

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    position.x = e.clientX - rect.left;
    position.y = e.clientY - rect.top;
    div.style.setProperty("--x", `${position.x}px`);
    div.style.setProperty("--y", `${position.y}px`);
    div.style.setProperty("--opacity", "1");
  };

  const handleMouseLeave = () => {
    if (!divRef.current) return;
    divRef.current.style.setProperty("--opacity", "0");
  };

  return (
    <button
      ref={divRef}
      type="button"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950 px-8 py-4 text-slate-300 transition-colors",
        className
      )}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity: "var(--opacity, 0)",
          background:
            "radial-gradient(600px circle at var(--x) var(--y), rgba(255,255,255,0.1), transparent 40%)",
        }}
      />
      <motion.div className="relative z-10 flex items-center gap-2">{children}</motion.div>
    </button>
  );
}

export function BorderBeamButton({ text, className = "", children, ...props }) {
  return (
    <button
      type="button"
      className={cn(
        "relative inline-flex h-14 overflow-hidden rounded-full p-px focus:outline-none",
        className
      )}
      {...props}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f6df9a_0%,#d4af37_50%,#f6df9a_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {children ?? text}
      </span>
    </button>
  );
}

export function ShimmeringButton({ text, className = "", ...props }) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex h-11 animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-size-[200%_100%] px-8 text-sm font-medium text-slate-400 transition-colors focus:outline-none",
        className
      )}
      {...props}
    >
      {text}
    </button>
  );
}

export function CosmicGlowButton({ text, className = "", ...props }) {
  return (
    <button
      type="button"
      className={cn("group relative inline-flex h-11 overflow-hidden rounded-full p-0.5 focus:outline-none", className)}
      {...props}
    >
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f6df9a_0%,#d4af37_50%,#f6df9a_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-medium text-white backdrop-blur-3xl transition-colors group-hover:bg-slate-950/80">
        <Zap size={16} className="mr-2 text-[#d4af37]" />
        {text}
      </span>
    </button>
  );
}

export function PrimaryBrandButton({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    primary:
      "border border-transparent bg-gradient-to-r from-[#d4af37] to-[#f6df9a] text-black shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:border-white/20 hover:shadow-[0_0_30px_rgba(212,175,55,0.5),inset_0_2px_0_rgba(255,255,255,0.4),inset_0_-2px_0_rgba(0,0,0,0.15)]",
    secondary:
      "border border-slate-200/80 bg-white/55 text-slate-900 hover:border-[#d4af37]/45 hover:bg-white/75",
    outline:
      "border border-slate-300/80 bg-transparent text-slate-900 hover:border-[#d4af37]/55 hover:bg-[#fffbeb]",
  };

  return (
    <motion.button
      type="button"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "nav-under-glow relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-2.5 text-sm font-bold tracking-wide transition-all duration-300",
        variants[variant],
        className
      )}
      {...props}
    >
      <AnimatePresence>
        {isHovered && variant === "primary" && (
          <motion.span
            initial={{ left: "-100%", opacity: 0 }}
            animate={{ left: "100%", opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="pointer-events-none absolute inset-0 h-full w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/40 to-transparent"
          />
        )}
      </AnimatePresence>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}

export function MagneticButton({ text, className = "", ...props }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 15, stiffness: 150 });
  const springY = useSpring(y, { damping: 15, stiffness: 150 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    x.set(clientX - (left + width / 2));
    y.set(clientY - (top + height / 2));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      type="button"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={cn(
        "nav-under-glow group relative rounded-xl border border-slate-200/90 bg-white/60 px-6 py-2.5 text-sm font-bold text-slate-900 shadow-none backdrop-blur-xl transition-colors hover:border-[#d4af37]/50",
        className
      )}
      {...props}
    >
      <span className="relative z-10 uppercase tracking-widest">{text}</span>
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12)_0%,transparent_100%)] opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.button>
  );
}

export function GlassButton({ text, className = "", children, active = false, ...props }) {
  return (
    <button type="button" className={getNavButtonClasses(active, className)} {...props}>
      <NavButtonSurface active={active} showArrow>
        {children ?? text}
      </NavButtonSurface>
    </button>
  );
}

export function MinimalLink({ text, className = "", ...props }) {
  return (
    <button
      type="button"
      className={cn(
        "group relative px-4 py-2 font-medium text-slate-500 transition-colors duration-500 hover:text-slate-900",
        className
      )}
      {...props}
    >
      <span className="text-sm tracking-wide">{text}</span>
      <div className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-[#d4af37] transition-all duration-500 group-hover:w-full" />
    </button>
  );
}

export function GhostGlowButton({ text, className = "", children, ...props }) {
  return (
    <button
      type="button"
      className={cn(
        "nav-under-glow group relative inline-flex items-center justify-center overflow-visible rounded-full border border-slate-200/90 bg-white/40 px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-white/65",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#d4af37]/15 via-[#f6df9a]/10 to-[#b8860b]/15 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
      <span className="relative z-10">{children ?? text}</span>
    </button>
  );
}

export function NebulaButton({ text, className = "", children, ...props }) {
  return (
    <button
      type="button"
      className={cn(
        "nav-under-glow group relative inline-flex items-center justify-center overflow-hidden rounded-full px-5 py-2.5 text-sm font-bold text-slate-900 shadow-[0_0_28px_-10px_rgba(212,175,55,0.45)]",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 z-0 bg-white" />
      <motion.div className="absolute inset-0 z-0 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(212,175,55,1)_360deg)] opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
      <div className="absolute inset-px z-10 rounded-full bg-white" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#d4af37]/10 to-[#f6df9a]/10" />
      <span className="relative z-20">{children ?? text}</span>
    </button>
  );
}

export function AuroraButton({ text, className = "", children, active = false, ...props }) {
  return (
    <button
      type="button"
      className={cn(
        "nav-under-glow group relative inline-flex items-center justify-center overflow-hidden rounded-full border px-5 py-2.5 text-sm font-bold transition-all",
        active
          ? "border-[#b8860b]/70 text-black"
          : "border-slate-200/90 text-slate-900",
        className
      )}
      {...props}
    >
      <motion.div
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-[#d4af37]/35 via-[#f6df9a]/30 to-[#b8860b]/35 transition-opacity",
          active ? "opacity-50" : "opacity-15 group-hover:opacity-35"
        )}
      />
      <motion.div
        className={cn(
          "absolute -inset-1 bg-gradient-to-r from-[#d4af37] via-[#f6df9a] to-[#b8860b] opacity-0 blur-2xl transition-opacity duration-1000",
          active ? "opacity-40" : "opacity-0 group-hover:opacity-30 group-hover:animate-pulse"
        )}
      />
      <div className="absolute inset-px rounded-full bg-white/90 backdrop-blur-md" />
      <span className="relative z-10">{children ?? text}</span>
    </button>
  );
}

export function StarlightButton({ text, className = "", children, ...props }) {
  return (
    <button
      type="button"
      className={cn(
        "nav-under-glow group relative inline-flex items-center justify-center overflow-hidden rounded-xl border border-slate-200/90 bg-white/60 px-5 py-2.5 text-sm font-bold text-slate-900 shadow-lg backdrop-blur-xl transition-colors hover:border-[#d4af37]/50",
        className
      )}
      {...props}
    >
      <div className="absolute top-0 left-1/2 h-1 w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />
      <motion.div className="absolute top-0 left-1/2 h-px w-1/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <span className="relative z-10">{children ?? text}</span>
    </button>
  );
}
