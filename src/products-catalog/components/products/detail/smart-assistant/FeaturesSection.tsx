import { motion } from "framer-motion";
import { products } from "../../data";
const product = products.find((p) => p.id === "smart-assistant")!;
const FeaturesSection = () => (
  <section className="py-24 bg-black">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-400">Intelligence</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mt-3">Powered by AI</h2>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {product.features.map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 80 }}
            className="group relative p-7 rounded-2xl border border-white/5 bg-white/2 hover:border-yellow-500/30 hover:bg-yellow-500/5 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-radial from-yellow-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="text-yellow-400/30 text-5xl font-black leading-none mb-4 select-none">{String(i + 1).padStart(2, "0")}</div>
            <h3 className="text-white font-bold text-lg mb-2 relative z-10">{f.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed relative z-10">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
export default FeaturesSection;

