import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products } from "../../data";
const product = products.find((p) => p.id === "email-automation")!;
interface Props { 
  onContact: () => void;
}
const OverviewSection = ({ onContact }: Props) => (
  <section className="py-24 bg-black relative overflow-hidden">
    <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-pink-500/5 blur-3xl" />
    <div className="relative z-10 max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20">
        {product.stats.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="text-center p-6 rounded-2xl border border-white/5 bg-white/2">
            <div className="text-3xl font-black bg-linear-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">{s.value}</div>
            <div className="text-gray-500 text-xs mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-10 mb-20">
        {product.useCases.map((u, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="flex gap-4 p-6 rounded-2xl border border-white/5 bg-white/2">
            <div className="w-2 h-2 rounded-full bg-pink-500 mt-2 shrink-0" />
            <div><h4 className="text-white font-semibold mb-1">{u.title}</h4><p className="text-gray-500 text-sm">{u.desc}</p></div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl border border-pink-500/10 bg-linear-to-r from-pink-950/20 to-rose-950/20">
        <div><h3 className="text-2xl font-bold text-white">Start automating your email campaigns</h3>
          <p className="text-gray-500 mt-1">Unlock the power of AI-driven personalization</p></div>
        <div className="flex gap-3">
          <button onClick={onContact} className="px-6 py-2.5 rounded-xl bg-linear-to-r from-pink-500 to-rose-500 text-white text-sm font-semibold flex items-center gap-2 hover:opacity-90">
            Get Started <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);
export default OverviewSection;

