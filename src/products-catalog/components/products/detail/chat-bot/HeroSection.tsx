import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import { products } from "../../data";
const product = products.find((p) => p.id === "chat-bot")!;

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
    {/* Background Image */}
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=1920&q=80" 
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-emerald-950/50" />
    </div>
    {/* Floating bubbles */}
    {[...Array(8)].map((_, i) => (
      <motion.div key={i}
        className="absolute rounded-full bg-emerald-500/5 border border-emerald-500/10"
        style={{ width: 40 + i * 30, height: 40 + i * 30, left: `${10 + i * 10}%`, top: `${15 + (i % 3) * 25}%` }}
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.3 }} />
    ))}
    <div className="absolute inset-0 bg-linear-to-b from-black via-emerald-950/10 to-black" />
    <div className="relative z-10 max-w-5xl mx-auto px-6 w-full text-center flex flex-col items-center">
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
        className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br from-emerald-500 to-teal-500 mb-8 shadow-2xl shadow-emerald-500/30">
        <Bot className="w-10 h-10 text-white" />
      </motion.div>
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-emerald-400 mb-6">Conversational AI Platform</motion.span>
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
        className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-6">
        <span className="text-white">Chat</span><br />
        <span className="bg-linear-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Bot</span>
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">{product.tagline}</motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
        className="flex flex-wrap gap-3 justify-center">
        {product.techStack.map((t, i) => (
          <span key={i} className="px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-300 text-xs font-medium">{t}</span>
        ))}
      </motion.div>
    </div>
    <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 w-5 h-8 border border-gray-700 rounded-full flex items-start justify-center p-1">
      <div className="w-1 h-2 bg-emerald-500 rounded-full" />
    </motion.div>
  </section>
);

export default HeroSection;

