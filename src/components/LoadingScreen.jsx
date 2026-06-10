import { motion } from "framer-motion";
import logo from "../images/logo.webp";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#fffaf0]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.65, ease: "easeInOut" } }}
    >
      <div className="relative z-10 flex flex-col items-center gap-8">
        <motion.div
          className="relative"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute -inset-3 rounded-full border-2 border-[#D4AF37]"
            animate={{ scale: [1, 1.18, 1], opacity: [0.75, 0.2, 0.75] }}
            transition={{ duration: 1.15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <img
            src={logo}
            alt="Softserve Hub Logo"
            className="h-20 w-20 rounded-full object-contain shadow-[0_0_45px_rgba(212,175,55,0.35)]"
          />
        </motion.div>

        <div className="text-center">
          <h2 className="text-2xl font-extrabold tracking-wide text-[#8a6b18]">SOFTSERVE HUB</h2>
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[#9b7a20]">Preparing your experience</p>
          <div className="mx-auto mt-6 h-1 w-56 overflow-hidden rounded-full bg-[#f2e3b7]">
            <motion.div
              className="h-full w-1/3 bg-[#D4AF37]"
              animate={{ x: ["-100%", "260%"] }}
              transition={{ duration: 2.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
