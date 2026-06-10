import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import { products } from "../../data";
const product = products.find((p) => p.id === "smart-assistant")!;

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
    {/* Background Image */}
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1920&q=80" 
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-yellow-950/50" />
    </div>
    {/* Sunburst radial glow */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-150 h-150 rounded-full bg-radial from-yellow-500/10 via-orange-500/5 to-transparent" />
    </div>
    {/* Floating star particles */}
    {[...Array(8)].map((_, i) => (
      <motion.div key={i} className="absolute w-1 h-1 rounded-full bg-yellow-400/60"
        style={{ left: `${12 + i * 10}%`, top: `${20 + (i % 3) * 25}%` }}
        animate={{ y: [0, -12, 0], opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
        transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, delay: i * 0.4 }} />
    ))}
    <div className="absolute inset-0 bg-linear-to-b from-black via-yellow-950/5 to-black" />
    <div className="relative z-10 max-w-5xl mx-auto px-6 w-full text-center flex flex-col items-center">
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
        className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br from-yellow-500 to-orange-500 mb-8 shadow-2xl shadow-yellow-500/30"><Cpu className="w-10 h-10 text-white" /></motion.div>
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="inline-block text-xs font-bold tracking-[0.3em] text-blue-400 mb-6">Intelligent Automation Platform</motion.span>
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
        className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight tracking-[0.1em] mb-6">
        <span className="text-white">Smart</span><br /><span className="bg-linear-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Assistant</span>
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">{product.tagline}</motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex flex-wrap gap-3 justify-center">
        {product.techStack.map((t, i) => <span key={i} className="px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/5 text-yellow-300 text-xs font-medium">{t}</span>)}
      </motion.div>
    </div>
  </section>
);
export default HeroSection;

