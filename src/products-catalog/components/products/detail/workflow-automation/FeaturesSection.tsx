import { motion } from "framer-motion";
import { products } from "../../data";
const product = products.find((p) => p.id === "workflow-automation")!;

const FeaturesSection = () => (
  <section className="relative py-28 bg-black overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#f97316 1px,transparent 1px),linear-gradient(90deg,#f97316 1px,transparent 1px)", backgroundSize: "80px 80px" }} />
    <div className="max-w-6xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-orange-400">Features</span>
        <h2 className="text-4xl md:text-6xl font-black text-white mt-2">Zero Code,<br /><span className="bg-linear-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Infinite Flows.</span></h2>
      </motion.div>
      {/* Numbered steps layout */}
      <div className="space-y-4">
        {product.features.map((feature, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group flex items-start gap-5 p-6 rounded-2xl border border-white/8 hover:border-orange-500/30 bg-white/2 transition-all duration-300">
            <span className="shrink-0 w-8 h-8 rounded-full bg-linear-to-br from-orange-500 to-red-500 flex items-center justify-center text-white text-xs font-black">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h4 className="text-white font-bold text-base mb-1.5 group-hover:text-orange-300 transition-colors">{feature.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
export default FeaturesSection;

