import { motion } from "framer-motion";
import { products } from "../../data";
const product = products.find((p) => p.id === "email-automation")!;
const FeaturesSection = () => (
  <section className="py-24 bg-black relative overflow-hidden">
    <div className="absolute inset-0 bg-linear-to-b from-pink-950/5 to-transparent" />
    <div className="relative z-10 max-w-6xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-pink-400">Capabilities</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mt-3">Everything You Need</h2>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {product.features.map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="group relative rounded-2xl border border-white/5 bg-white/2 hover:border-pink-500/30 hover:bg-pink-500/5 transition-all duration-500 p-8 text-center overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-pink-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-pink-500/20 to-rose-500/20 border border-pink-500/20 flex items-center justify-center mx-auto mb-5 text-xl font-black text-pink-400">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="text-white font-bold text-lg mb-3">{f.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
export default FeaturesSection;

