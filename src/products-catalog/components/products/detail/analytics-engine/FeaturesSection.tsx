import { motion } from "framer-motion";
import { products } from "../../data";
const product = products.find((p) => p.id === "analytics-engine")!;
const FeaturesSection = () => (
  <section className="py-24 bg-black relative overflow-hidden">
    <div className="absolute inset-0 bg-linear-to-b from-indigo-950/5 to-transparent" />
    <div className="relative z-10 max-w-6xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400">Data Capabilities</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mt-3">Insights at Scale</h2>
      </motion.div>
      <div className="space-y-4">
        {product.features.map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
            className="group flex items-center gap-6 p-6 rounded-2xl border border-white/5 bg-white/2 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-500">
            <div className="w-14 h-14 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-indigo-400 font-black text-lg group-hover:scale-110 transition-transform">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="flex-1"><h3 className="text-white font-semibold mb-1">{f.title}</h3><p className="text-gray-500 text-sm">{f.desc}</p></div>
            <div className="w-24 h-1.5 rounded-full bg-white/5 overflow-hidden hidden md:block">
              <motion.div className="h-full bg-linear-to-r from-indigo-500 to-blue-500 rounded-full"
                initial={{ width: 0 }} whileInView={{ width: `${65 + i * 5}%` }} viewport={{ once: true }} transition={{ delay: i * 0.1 + 0.3, duration: 0.8 }} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
export default FeaturesSection;

