import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products } from "../../data";
const product = products.find((p) => p.id === "chat-bot")!;
interface Props { 
  onContact: () => void;
}

const OverviewSection = ({ onContact }: Props) => (
  <section className="relative py-28 bg-black overflow-hidden">
    <div className="absolute inset-0 bg-linear-to-br from-emerald-950/20 via-black to-teal-950/20" />
    <div className="max-w-6xl mx-auto px-6 relative">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-400">By the Numbers</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mt-2">Measurable Impact</h2>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-24">
        {product.stats.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="text-center rounded-2xl border border-white/8 p-6 bg-white/2 hover:border-emerald-500/30 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-black bg-linear-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">{s.value}</div>
            <div className="text-xs text-gray-500 uppercase tracking-widest">{s.label}</div>
          </motion.div>
        ))}
      </div>
      <div className="mb-20">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-400">Use Cases</span>
        <h2 className="text-3xl md:text-5xl font-black text-white mt-2 mb-8">Where It Shines</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {product.useCases.map((uc, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-white/8 p-6 bg-white/2 hover:border-emerald-500/25 transition-all duration-300">
              <h4 className="text-white font-bold text-base mb-2">{uc.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{uc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-center pt-10 border-t border-white/6">
        <h3 className="text-2xl md:text-4xl font-black text-white mb-4">Deploy Your AI Bot Today</h3>
        <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">Automate 80% of support queries around the clock.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            onClick={onContact}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-linear-to-r from-emerald-500 to-teal-500 text-white font-bold text-sm shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/50 transition-shadow">
            Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
        </div>
      </motion.div>
    </div>
  </section>
);

export default OverviewSection;

