import { motion } from "framer-motion";
import { products } from "../../data";
const product = products.find((p) => p.id === "whatsapp-automation")!;
const FeaturesSection = () => (
  <section className="py-24 bg-black relative overflow-hidden">
    <div className="absolute inset-0 bg-linear-to-b from-green-950/5 to-transparent" />
    <div className="relative z-10 max-w-6xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-green-400">Features</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mt-3">Built for Scale</h2>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-5">
        {product.features.map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="group flex gap-5 p-6 rounded-2xl border border-white/5 bg-white/2 hover:border-green-500/30 hover:bg-green-500/5 transition-all duration-500">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0 text-green-400 font-black text-sm group-hover:scale-110 transition-transform">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div><h3 className="text-white font-semibold mb-1">{f.title}</h3><p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p></div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
export default FeaturesSection;

