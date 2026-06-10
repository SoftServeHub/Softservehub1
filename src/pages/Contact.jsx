import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Contactus from "../components/Contactus";

export default function ContactPage() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#fffaf0] pt-24">
      {/* Page heading band */}
      <section className="relative px-6 pt-16 pb-10 text-center">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#d4af37]/20 blur-[160px]" />
          <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#78716c_1px,transparent_1px),linear-gradient(to_bottom,#78716c_1px,transparent_1px)] bg-[size:72px_72px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#fffbeb] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[#92400e]">
            <Sparkles size={14} /> Let's connect
          </span>
          <h1 className="font-azzuri-calcio mt-6 text-5xl font-black uppercase tracking-tight md:text-7xl">
            <span className="bg-gradient-to-r from-[#0f172a] via-[#92400e] to-[#d4af37] bg-clip-text text-transparent">
              Start a conversation
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#475569] md:text-lg">
            Share your goal, timeline or challenge. Our team will respond within one
            business day with the right expert.
          </p>
        </motion.div>
      </section>

      {/* Existing contact section (form + info) */}
      <Contactus />
    </div>
  );
}
