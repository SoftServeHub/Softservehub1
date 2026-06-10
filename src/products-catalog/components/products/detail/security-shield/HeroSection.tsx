import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { products } from "../../data";
const product = products.find((p) => p.id === "security-shield")!;

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
    {/* Background Image */}
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80" 
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-red-950/50" />
    </div>
    {/* Radar concentric circles */}
    <div className="absolute inset-0 flex items-center justify-center">
      {[150, 260, 370, 480].map((r, i) => (
        <motion.div key={i} className="absolute rounded-full border border-red-500/10"
          style={{ width: r * 2, height: r * 2 }}
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.01, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.6 }} />
      ))}
      {/* Radar sweep */}
      <motion.div className="absolute w-96 h-96 origin-center"
        animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }}>
        <div className="w-full h-0.5 bg-linear-to-r from-red-500/60 to-transparent absolute top-1/2 left-1/2 origin-left" style={{ width: "50%" }} />
      </motion.div>
    </div>
    <div className="absolute inset-0 bg-linear-to-br from-red-950/15 via-black to-pink-950/15" />
    <div className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full bg-red-500/5 blur-3xl" />
    <div className="relative z-10 max-w-5xl mx-auto px-6 w-full text-center flex flex-col items-center">
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
        className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br from-red-500 to-pink-500 mb-8 shadow-2xl shadow-red-500/30"><Shield className="w-10 h-10 text-white" /></motion.div>
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-red-400 mb-6">Security & Compliance</motion.span>
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
        className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-6">
        <span className="text-white">Security</span><br /><span className="bg-linear-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Shield</span>
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">{product.tagline}</motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex flex-wrap gap-3 justify-center">
        {product.techStack.map((t, i) => <span key={i} className="px-3 py-1 rounded-full border border-red-500/30 bg-red-500/5 text-red-300 text-xs font-medium">{t}</span>)}
      </motion.div>
    </div>
    <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 w-5 h-8 border border-gray-700 rounded-full flex items-start justify-center p-1">
      <div className="w-1 h-2 bg-red-500 rounded-full" />
    </motion.div>
  </section>
);
export default HeroSection;

