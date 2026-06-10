import { motion } from "framer-motion";
import { products } from "../../data";
const product = products.find((p) => p.id === "ai-intelligence-hub")!;
const FeaturesSection = () => (
  <section className="py-24 bg-black relative overflow-hidden">
    <div className="absolute inset-0 bg-linear-to-b from-violet-950/5 to-transparent" />
    <div className="relative z-10 max-w-6xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-violet-400">AI Modules</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mt-3">One Hub, All Models</h2>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {product.features.map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.95, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group relative p-7 rounded-2xl border border-white/5 bg-white/2 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-500 overflow-hidden">
            <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-violet-500/5 group-hover:bg-violet-500/10 transition-colors" />
            <div className="text-3xl font-black text-violet-500/20 mb-4">{String(i + 1).padStart(2, "0")}</div>
            <h3 className="text-white font-bold mb-2">{f.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            <div className="mt-4 w-8 h-0.5 bg-linear-to-r from-violet-500 to-purple-500 rounded-full group-hover:w-16 transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
export default FeaturesSection;

