import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { topProducts } from "../../topdata";

const product = topProducts.find((p) => p.id === "crms")!;

interface Props { 
  onContact: () => void;
}

const OverviewSection = ({ onContact }: Props) => (
  <section className="relative py-20 md:py-28 bg-black overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-orange-950/20 via-black to-red-950/20" />
    <div className="max-w-6xl mx-auto px-6 relative">

      {/* Stats */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-orange-400">By the Numbers</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mt-2">Proven Results</h2>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-24">
        {product.stats.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative text-center rounded-2xl border border-white/8 p-6 bg-white/2 overflow-hidden group hover:border-orange-500/30 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">{s.value}</div>
            <div className="text-xs text-gray-500 uppercase tracking-widest">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Use Cases */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-orange-400">Industries</span>
        <h2 className="text-3xl md:text-5xl font-black text-white mt-2 mb-8">Who Uses It</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {product.useCases.map((uc, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-white/8 p-6 bg-white/2 hover:border-orange-500/25 transition-all duration-300">
              <h4 className="text-white font-bold text-base mb-2">{uc.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{uc.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-center pt-10 border-t border-white/6">
        <h3 className="text-2xl md:text-4xl font-black text-white mb-4">Ready to Transform Sales?</h3>
        <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">Join enterprises closing bigger deals with intelligent CRM automation.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            onClick={onContact}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-sm shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/50 transition-shadow">
            Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
        </div>
      </motion.div>
    </div>
  </section>
);

export default OverviewSection;
