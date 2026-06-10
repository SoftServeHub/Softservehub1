import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { products } from "../../data";

const product = products.find((p) => p.id === "telecom-bot")!;

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
    {/* Background Image */}
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1920&q=80" 
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-purple-950/50" />
    </div>
    {/* Radial wave rings */}
    {[1, 2, 3, 4, 5].map((n) => (
      <motion.div key={n}
        className="absolute rounded-full border border-purple-500/10"
        style={{ width: n * 180, height: n * 180 }}
        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.1, 0.3] }}
        transition={{ duration: 4, delay: n * 0.5, repeat: Infinity }}
      />
    ))}
    <div className="absolute inset-0 bg-linear-to-br from-purple-950/30 via-black to-pink-950/20" />

    <div className="relative z-10 max-w-5xl mx-auto px-6 w-full text-center flex flex-col items-center">
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
        className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br from-purple-500 to-pink-500 mb-8 shadow-2xl shadow-purple-500/30">
        <Phone className="w-10 h-10 text-white" />
      </motion.div>
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-purple-400 mb-6">
        Telecom Automation Platform
      </motion.span>
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
        className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-6">
        <span className="text-white">Telecom</span><br />
        <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Bot</span>
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">{product.tagline}</motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
        className="flex flex-wrap gap-3 justify-center">
        {product.techStack.map((t, i) => (
          <span key={i} className="px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-300 text-xs font-medium">{t}</span>
        ))}
      </motion.div>
    </div>
    <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 w-5 h-8 border border-gray-700 rounded-full flex items-start justify-center p-1">
      <div className="w-1 h-2 bg-purple-500 rounded-full" />
    </motion.div>
  </section>
);

export default HeroSection;

