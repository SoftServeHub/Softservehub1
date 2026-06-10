import { motion } from "framer-motion";
import { products } from "../../data";
const product = products.find((p) => p.id === "chat-bot")!;

const FeaturesSection = () => (
  <section className="relative py-28 bg-black overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #10b981 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
    <div className="max-w-6xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-16">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-400">Features</span>
        <h2 className="text-4xl md:text-6xl font-black text-white mt-2">AI That Actually<br /><span className="bg-linear-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Understands.</span></h2>
      </motion.div>
      {/* 2-col masonry-like */}
      <div className="columns-1 md:columns-2 gap-5 space-y-5">
        {product.features.map((feature, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="group break-inside-avoid rounded-2xl border border-white/8 hover:border-emerald-500/30 bg-white/2 p-6 transition-all duration-300">
            <div className={`w-8 h-1 bg-linear-to-r from-emerald-500 to-teal-500 rounded mb-4 group-hover:w-16 transition-all duration-500`} />
            <h4 className="text-white font-bold text-base mb-2 group-hover:text-emerald-300 transition-colors">{feature.title}</h4>
            <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;

