import { motion } from "framer-motion";
import { Workflow } from "lucide-react";
import { products } from "../../data";
const product = products.find((p) => p.id === "workflow-automation")!;

const HeroSection = () => (
  <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-black">
    {/* Background Image */}
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&q=80" 
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-orange-950/50" />
    </div>
    {/* Connected dots flow pattern */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
      <defs><pattern id="flow" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
        <circle cx="40" cy="40" r="2" fill="#f97316" /><line x1="40" y1="42" x2="40" y2="80" stroke="#f97316" strokeWidth="0.5" strokeDasharray="4 4" />
      </pattern></defs>
      <rect width="100%" height="100%" fill="url(#flow)" />
    </svg>
    <div className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full bg-orange-500/8 blur-3xl pointer-events-none" />
    <div className="absolute inset-0 bg-linear-to-br from-orange-950/20 via-black to-red-950/20" />
    <div className="relative z-10 max-w-5xl mx-auto px-3 sm:px-6 w-full text-center flex flex-col items-center">
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
        className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-linear-to-br from-orange-500 to-red-500 mb-6 sm:mb-8 shadow-2xl shadow-orange-500/30">
        <Workflow className="w-10 h-10 text-white" /></motion.div>
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-cyan-400 mb-4 sm:mb-6">Workflow Orchestration Platform</motion.span>
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
        className="text-3xl sm:text-5xl md:text-7xl font-black leading-tight mb-4 sm:mb-6">
        <span className="text-white">Workflow</span><br /><span className="bg-linear-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Automation</span>
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="text-gray-400 text-xs sm:text-sm md:text-lg max-w-xl mx-auto leading-relaxed mb-6 sm:mb-10">{product.tagline}</motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
        className="flex flex-wrap gap-3 justify-center">
        {product.techStack.map((t, i) => <span key={i} className="px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/5 text-orange-300 text-xs font-medium">{t}</span>)}
      </motion.div>
    </div>
    <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 w-5 h-8 border border-gray-700 rounded-full flex items-start justify-center p-1">
      <div className="w-1 h-2 bg-orange-500 rounded-full" />
    </motion.div>
  </section>
);
export default HeroSection;

