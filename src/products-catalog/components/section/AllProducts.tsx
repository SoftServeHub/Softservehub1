import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BorderBeamFrame } from "../../../components/nav/NavbarButton";
import { products } from "../../components/products/data";
import type { Product } from "../../components/products/data";

// Dark abstract tech background
const bgImage = "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&q=80";

interface AllProductsProps {
  onProductClick?: (product: Product) => void;
}

const AllProducts = ({ onProductClick }: AllProductsProps) => {
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
      onProductClick?.(product);
    }, 50);
  };

  return (
    <section id="products" className="relative overflow-hidden">
      {/* Background Image with Animated Effects - fills entire section top to bottom */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src={bgImage}
          alt="Cubed Bg"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Subtle dark veil — preserves image detail, ensures text readability */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: false }}
          className="py-15 md:py-16 lg:py-20 px-4 md:px-6"
        >
          <div className="mx-auto w-full max-w-none text-center">
            <h2 className="mb-3 whitespace-nowrap font-serif font-black leading-tight text-[clamp(1.15rem,5vw,4.5rem)] bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent md:mb-4">
              Our AI Product Ecosystem
            </h2>
            <p className="text-gray-300 text-xs md:text-base lg:text-lg">
              Powerful solutions designed to transform your business with cutting-edge AI technology
            </p>
          </div>
        </motion.div>

        {/* Product Grid */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {products.map((product, index) => {
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: false, margin: "-50px" }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleProductSelect(product)}
                  className="group relative flex cursor-pointer flex-col"
                >
                  <BorderBeamFrame
                    className="h-full rounded-2xl shadow-[0_12px_36px_rgba(212,175,55,0.12)]"
                    innerClassName="flex flex-col items-center overflow-hidden rounded-2xl p-4 text-center sm:items-start sm:text-left md:p-6 lg:p-8"
                    innerBg="bg-white"
                  >
                  {/* Elegant gradient shine on hover */}
                  <motion.div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${product.color} rounded-2xl opacity-0 transition-opacity duration-150 group-hover:opacity-15`}
                  />

                  {/* Product Image */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className={`relative z-10 w-full h-20 md:h-24 lg:h-28 rounded-lg md:rounded-xl overflow-hidden mb-4 md:mb-6`}
                  >
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </motion.div>

                  {/* Title */}
                  <h3 className={`relative z-10 text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                    {product.title}
                  </h3>

                  {/* Short Description */}
                  <p className="relative z-10 text-gray-300 text-xs md:text-sm lg:text-sm mb-4 md:mb-6">
                    {product.shortDesc}
                  </p>

                  {/* Features List - Simplified */}
                  <div className="relative z-10 space-y-1.5 md:space-y-2 mb-4 md:mb-6 flex flex-col items-center sm:items-start w-full">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs md:text-xs lg:text-xs text-gray-400"
                      >
                        <div className={`w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-gradient-to-r ${product.color}`} />
                        <span>{feature.title}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(event) => {
                      event.stopPropagation();
                      handleProductSelect(product);
                    }}
                    className={`relative z-10 w-full py-2 md:py-2.5 rounded-lg font-semibold bg-gradient-to-r ${product.color} text-white text-xs md:text-sm flex items-center justify-center gap-2 hover:shadow-lg transition-shadow`}
                  >
                    Learn More <ArrowRight className="w-3 h-3" />
                  </motion.button>
                  
                  {/* Elegant gradient fade on hover */}
                  <motion.div
                    className={`pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-all duration-150 group-hover:opacity-10 md:rounded-2xl bg-gradient-to-br ${product.color}`}
                  />
                  </BorderBeamFrame>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Final CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: false }}
          className="mt-6 md:mt-8 py-12 md:py-16 lg:py-20 px-4 md:px-6 text-center"
        >
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-white">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-300 text-xs md:text-base lg:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
            Choose the perfect AI solution for your needs and start your journey today
          </p>
          <motion.a
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="inline-block px-6 md:px-8 py-2 md:py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-sm md:text-base shadow-lg hover:shadow-2xl transition-shadow"
          >
            Book Appointment
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AllProducts;
