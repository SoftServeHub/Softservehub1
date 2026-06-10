import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { products } from "../../data";

const product = products.find((p) => p.id === "secure-messenger")!;

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80" 
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-cyan-950/50" />
    </div>
    {/* Hexagonal grid background */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hex" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
          <polygon points="30,2 58,17 58,47 30,62 2,47 2,17" fill="none" stroke="#06b6d4" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex)" />
    </svg>
    {/* Glowing orb */}
    <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
    <div className="absolute bottom-1/4 left-1/4 w-60 h-60 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

    <div className="relative z-10 max-w-5xl mx-auto px-6 w-full text-center flex flex-col items-center">
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
        className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br from-blue-500 to-cyan-500 mb-8 shadow-2xl shadow-blue-500/30"
      >
        <Lock className="w-10 h-10 text-white" />
      </motion.div>

      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-cyan-400 mb-4">
        Enterprise Security Platform
      </motion.span>

      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
        className="text-5xl sm:text-6xl md:text-8xl font-black leading-none mb-6">
        <span className="text-white">Secure</span>
        <br />
        <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Messenger</span>
      </motion.h1>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="text-gray-400 text-sm md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
        {product.tagline}
      </motion.p>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
        className="flex flex-wrap gap-3 justify-center">
        {product.techStack.map((t, i) => (
          <span key={i} className="px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-300 text-xs font-medium">
            {t}
          </span>
        ))}
      </motion.div>
    </div>
    {/* Scroll indicator */}
    <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 w-5 h-8 border border-gray-700 rounded-full flex items-start justify-center p-1">
      <div className="w-1 h-2 bg-cyan-500 rounded-full" />
    </motion.div>
  </section>
);

export default HeroSection;

