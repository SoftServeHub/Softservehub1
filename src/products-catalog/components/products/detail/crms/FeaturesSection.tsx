import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { topProducts } from "../../topdata";

const product = topProducts.find((p) => p.id === "crms")!;

const FeaturesSection = () => (
  <section className="relative py-20 md:py-28 bg-black overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03]"
      style={{ backgroundImage: "radial-gradient(circle, #f97316 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
    <div className="max-w-6xl mx-auto px-6 relative">
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-16">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-orange-400">Capabilities</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-2">
          Close More Deals<br />
          <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Faster than Ever</span>
        </h2>
      </motion.div>

      {/* Features Grid */}
      <div className="space-y-6">
        {product.features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`flex items-start gap-6 p-6 md:p-8 rounded-2xl border border-white/6 hover:border-orange-500/30 bg-white/2 group transition-all duration-300`}
          >
            <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-2 group-hover:text-orange-300 transition-colors">{feature.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
