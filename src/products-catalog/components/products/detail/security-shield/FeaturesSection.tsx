import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { products } from "../../data";
const product = products.find((p) => p.id === "security-shield")!;
const FeaturesSection = () => (
  <section className="py-24 bg-black relative overflow-hidden">
    <div className="absolute inset-0 bg-linear-to-b from-red-950/5 to-transparent" />
    <div className="relative z-10 max-w-6xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-400">Protection Layers</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mt-3">Multi-Layer Defense</h2>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-5">
        {product.features.map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="group flex gap-5 p-6 rounded-2xl border border-white/5 bg-white/2 hover:border-red-500/30 hover:bg-red-500/5 transition-all duration-500">
            <div className="relative shrink-0">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Shield className="w-5 h-5 text-red-400" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-black border border-red-500/40 flex items-center justify-center text-[8px] font-black text-red-400">
                {i + 1}
              </div>
            </div>
            <div><h3 className="text-white font-semibold mb-1">{f.title}</h3><p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p></div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
export default FeaturesSection;

