import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import { products } from "../../data";
const product = products.find((p) => p.id === "ai-intelligence-hub")!;

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
    {/* Background Image */}
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&q=80" 
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-violet-950/50" />
    </div>
    {/* Orbital rings */}
    {[280, 420, 560].map((size, i) => (
      <motion.div key={i} className="absolute rounded-full border border-violet-500/10"
        style={{ width: size, height: size }}
        animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
        transition={{ duration: 20 + i * 8, repeat: Infinity, ease: "linear" }}>
        <div className="absolute w-2 h-2 rounded-full bg-violet-500/60 -top-1 left-1/2 -translate-x-1/2" />
      </motion.div>
    ))}
    <div className="absolute inset-0 bg-linear-to-br from-violet-950/15 via-black to-purple-950/15" />
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-violet-500/8 blur-3xl" />
    <div className="relative z-10 max-w-5xl mx-auto px-6 w-full text-center flex flex-col items-center">
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
        className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br from-violet-500 to-purple-500 mb-8 shadow-2xl shadow-violet-500/30"><Brain className="w-10 h-10 text-white" /></motion.div>
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-violet-400 mb-6">Centralized AI Command Center</motion.span>
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
        className="text-5xl sm:text-6xl md:text-7xl font-black leading-none mb-6">
        <span className="text-white">AI Intelligence</span><br /><span className="bg-linear-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Hub</span>
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="text-gray-400 text-sm md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">{product.tagline}</motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex flex-wrap gap-3 justify-center">
        {product.techStack.map((t, i) => <span key={i} className="px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/5 text-violet-300 text-xs font-medium">{t}</span>)}
      </motion.div>
    </div>
  </section>
);
export default HeroSection;

