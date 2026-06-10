import { motion } from "framer-motion";

interface HeroSectionProps {
  onContact: () => void;
}

const HeroSection = ({ onContact }: HeroSectionProps) => (
  <section className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden bg-[#f7f8fa] md:min-h-[88vh]">
    <motion.div
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_0%,rgba(212,175,55,0.12),transparent_55%)]"
      aria-hidden
    />

    <div className="relative z-20 mx-auto max-w-6xl px-4 text-center md:px-6">
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center rounded-full border border-[#d4af37]/40 bg-[#fffbeb] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#92400e] sm:text-xs"
      >
        SoftServe Hub
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.8 }}
        className="mt-6 font-azzuri-calcio text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-5xl md:text-7xl"
      >
        <span className="block bg-gradient-to-r from-[#0f172a] via-[#92400e] to-[#d4af37] bg-clip-text text-transparent">
          Our AI
        </span>
        <span className="mt-2 block bg-gradient-to-r from-[#92400e] to-[#d4af37] bg-clip-text text-transparent">
          Product Suite
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#52525b] md:text-lg"
      >
        A complete ecosystem of enterprise-grade AI tools designed to work independently or as
        one unified intelligence platform.
      </motion.p>

      <motion.button
        type="button"
        onClick={onContact}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="mt-8 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#f6df9a] px-8 py-3 text-sm font-semibold text-[#09090b] shadow-[0_12px_36px_rgba(212,175,55,0.32)]"
      >
        Get in Touch
      </motion.button>
    </div>
  </section>
);

export default HeroSection;
