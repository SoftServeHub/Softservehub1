import { motion } from "framer-motion";
import { products } from "../../data";

const product = products.find((p) => p.id === "telecom-bot")!;

const FeaturesSection = () => (
  <section className="relative py-28 bg-black overflow-hidden">
    <div className="absolute inset-0 opacity-[0.04]"
      style={{ backgroundImage: "repeating-linear-gradient(-60deg, #a855f7 0, #a855f7 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
    <div className="max-w-6xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-purple-400">Features</span>
        <h2 className="text-4xl md:text-6xl font-black text-white mt-2">
          Handle <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Thousands</span><br />Simultaneously
        </h2>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {product.features.map((feature, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group rounded-2xl border border-white/8 hover:border-purple-500/30 bg-white/2 p-6 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-[0.06] transition-opacity duration-300" />
            <div className="w-2 h-2 rounded-full bg-linear-to-br from-purple-500 to-pink-500 mb-4" />
            <h4 className="text-white font-bold text-base mb-2 group-hover:text-purple-300 transition-colors">{feature.title}</h4>
            <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;

