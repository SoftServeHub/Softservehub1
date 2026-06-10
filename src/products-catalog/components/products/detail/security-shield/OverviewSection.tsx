import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products } from "../../data";
const product = products.find((p) => p.id === "security-shield")!;
interface Props { 
  onContact: () => void;
}
const OverviewSection = ({ onContact }: Props) => (
  <section className="py-24 bg-black">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20">
        {product.stats.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="text-center p-6 rounded-2xl border border-white/5 bg-white/2">
            <div className="text-3xl font-black bg-linear-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">{s.value}</div>
            <div className="text-gray-500 text-xs mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-20">
        {product.useCases.map((u, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="p-6 rounded-2xl border border-white/5 bg-white/2 hover:border-red-500/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1.5 h-5 rounded-full bg-linear-to-b from-red-500 to-pink-500" />
              <h4 className="text-white font-semibold">{u.title}</h4>
            </div>
            <p className="text-gray-500 text-sm pl-4">{u.desc}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl border border-red-500/10 bg-linear-to-r from-red-950/20 to-pink-950/20">
        <div><h3 className="text-2xl font-bold text-white">Fortify your digital infrastructure</h3>
          <p className="text-gray-500 mt-1">Enterprise-grade security, zero compromise</p></div>
        <div className="flex gap-3">
          <button onClick={onContact} className="px-6 py-2.5 rounded-xl bg-linear-to-r from-red-500 to-pink-500 text-white text-sm font-semibold flex items-center gap-2 hover:opacity-90">
            Get Started <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);
export default OverviewSection;

