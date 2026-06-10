import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import type { ComponentType } from "react";
import { topProducts } from "./topdata";
import type { TopProduct } from "./topdata";

interface TopProductsSectionProps {
  onProductClick?: (product: TopProduct) => void;
}

const TopProductsSection = ({ onProductClick }: TopProductsSectionProps) => {
  const handleProductSelect = (product: TopProduct) => {
    // Scroll to top immediately before calling onProductClick
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
    
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      onProductClick?.(product);
    }, 50);
  };

  return (
    <section className="relative py-20 md:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-4">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-purple-300">
              Top Products
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-serif font-semibold tracking-wide text-white mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Leading Solutions
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Discover our most popular products trusted by forward-thinking companies
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {topProducts.map((product, index) => {
            const Icon = product.icon as ComponentType<{ className?: string }>;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{
                  y: -12,
                  rotateX: 3,
                  rotateY: -3,
                  transition: { duration: 0.3 }
                }}
                onClick={() => handleProductSelect(product)}
                className="group relative flex flex-col bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:border-white/30 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Animated gradient sweep */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-5`} />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                </div>

                {/* Product Image */}
                <div className="relative z-10 h-32 mb-6 rounded-xl overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent`} />
                  {/* Icon overlay */}
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className={`absolute bottom-3 right-3 w-10 h-10 rounded-lg bg-gradient-to-br ${product.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.div>
                </div>

                {/* Title */}
                <h3
                  className={`relative z-10 text-2xl font-bold mb-3 bg-gradient-to-r ${product.color} bg-clip-text text-transparent transition-all duration-300 group-hover:tracking-wide`}
                >
                  {product.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-gray-400 text-sm mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {product.shortDesc}
                </p>

                {/* Features */}
                <div className="relative z-10 space-y-2 mb-8">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-300 group-hover:text-white transition-colors duration-300"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.color}`}
                      />
                      <span>{feature.title}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <div className="mt-auto relative z-10">
                  <motion.button
                    whileTap={{ scale: 0.96 }}
                    onClick={(event) => {
                      event.stopPropagation();
                      handleProductSelect(product);
                    }}
                    className={`w-full py-3 rounded-lg font-semibold bg-gradient-to-r ${product.color} text-white flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default TopProductsSection;
