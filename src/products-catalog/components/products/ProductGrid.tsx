import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Grid3X3 } from "lucide-react";
import { products } from "./data";
import type { Product } from "./data";

interface ProductGridProps {
  onProductClick: (product: Product) => void;
}

const ProductGrid = ({ onProductClick }: ProductGridProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const handleProductSelect = (product: Product) => {
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
      onProductClick(product);
    }, 50);
  };

  return (
    <section
      ref={ref}
      className="relative py-16 px-4 md:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-4">
          <Grid3X3 className="w-4 h-4 text-purple-400" />
          <span className="text-xs font-bold uppercase tracking-widest text-purple-300">
            All Solutions
          </span>
        </div>
       
<h2 
          className="text-3xl md:text-5xl font-serif font-semibold font-black mb-3 tracking-wide text-white mb-4"
        >
          Explore <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"> More Products </span>
        </h2>
        <p className="text-gray-300 text-base max-w-2xl mx-auto">
          Discover our complete suite of business automation tools
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.slice(0, 9).map((product, i) => {
          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => handleProductSelect(product)}
              className="group relative rounded-2xl overflow-hidden border border-white/15 hover:border-white/40 transition-all duration-300 bg-white/[0.06] backdrop-blur-sm cursor-pointer"
            >
              {/* Hover tint overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Top accent line */}
              <div
                className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="relative p-6 flex flex-col h-full">
                {/* Product Image */}
                <div
                  className={`w-full h-24 rounded-xl overflow-hidden mb-5 shadow-lg`}
                >
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Title */}
                <h3
                  className={`text-lg font-bold text-white mb-2 bg-gradient-to-r ${product.color} bg-clip-text group-hover:text-transparent transition-all duration-300`}
                >
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-5 line-clamp-2">
                  {product.shortDesc}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {product.features.slice(0, 3).map((f, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-2 text-xs text-gray-300"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.color} shrink-0`}
                      />
                      {f.title}
                    </div>
                  ))}
                </div>

                {/* Spacer pushes button to bottom */}
                <div className="mt-auto">
                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      handleProductSelect(product);
                    }}
                    className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-bold bg-gradient-to-r ${product.color} text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30`}
                  >
                    Explore Product
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductGrid;
