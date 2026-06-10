import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";
import { topProducts } from "../../topdata";

const product = topProducts.find((p) => p.id === "crms")!;

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&q=80" 
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-orange-950/50" />
    </div>
    <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f97316" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
    <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-orange-500/8 blur-3xl pointer-events-none" />
    <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-red-600/8 blur-3xl pointer-events-none" />

    {/* Content Container - Properly aligned */}
    <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
      <div className="flex flex-col items-center text-center">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 mb-8 shadow-2xl shadow-orange-500/30"
        >
          <BarChart3 className="w-10 h-10 text-white" />
        </motion.div>

        {/* Badge */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-orange-400 mb-6"
        >
          CRM Platform
        </motion.span>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-6"
        >
          <span className="text-white">Customer Intelligence</span>
          <br />
          <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">that Actually Works</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {product.tagline}
        </motion.p>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-3 justify-center items-center"
        >
          {product.techStack.map((t, i) => (
            <span key={i} className="px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/5 text-orange-300 text-xs font-medium">
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 w-5 h-8 border border-gray-700 rounded-full flex items-start justify-center p-1"
    >
      <div className="w-1 h-2 bg-orange-500 rounded-full" />
    </motion.div>
  </section>
);

export default HeroSection;
