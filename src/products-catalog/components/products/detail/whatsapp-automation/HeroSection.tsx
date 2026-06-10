import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { products } from "../../data";
const product = products.find((p) => p.id === "whatsapp-automation")!;

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
    {/* Background Image */}
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=1920&q=80" 
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-green-950/50" />
    </div>
    {/* Chat bubble decorations */}
    {[...Array(5)].map((_, i) => (
      <motion.div key={i} className="absolute rounded-2xl border border-green-500/10 bg-green-500/5"
        style={{ width: 80 + i * 40, height: 40 + i * 15, left: `${10 + i * 18}%`, top: `${15 + i * 12}%` }}
        animate={{ y: [0, -8 + i * 3, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }} />
    ))}
    <div className="absolute inset-0 bg-linear-to-br from-green-950/15 via-black to-emerald-950/15" />
    <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-green-500/6 blur-3xl" />
    <div className="relative z-10 max-w-5xl mx-auto px-6 w-full text-center flex flex-col items-center">
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
        className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br from-green-500 to-emerald-500 mb-8 shadow-2xl shadow-green-500/30"><MessageCircle className="w-10 h-10 text-white" /></motion.div>
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-green-400 mb-6">WhatsApp Business Automation</motion.span>
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
        className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-6">
        <span className="text-white">WhatsApp</span><br /><span className="bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Automation</span>
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">{product.tagline}</motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex flex-wrap gap-3 justify-center">
        {product.techStack.map((t, i) => <span key={i} className="px-3 py-1 rounded-full border border-green-500/30 bg-green-500/5 text-green-300 text-xs font-medium">{t}</span>)}
      </motion.div>
    </div>
  </section>
);
export default HeroSection;

