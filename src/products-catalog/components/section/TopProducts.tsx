import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { topProducts } from "../products/topdata";

interface TopProductsProps {
  onProductClick?: (product: typeof topProducts[0]) => void;
}

const TopProducts: React.FC<TopProductsProps> = ({ onProductClick }) => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const products = topProducts.slice(0, 3);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % products.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [paused, products.length]);

  useEffect(() => {
    if (!paused) return;

    const timer = setTimeout(() => setPaused(false), 4000);
    return () => clearTimeout(timer);
  }, [paused]);

  const next = () => {
    setPaused(true);
    setActive((prev) => (prev + 1) % products.length);
  };

  const prev = () => {
    setPaused(true);
    setActive((prev) =>
      prev === 0 ? products.length - 1 : prev - 1
    );
  };

  const handleProductSelect = (product: typeof topProducts[0]) => {
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
    <section className="relative overflow-hidden bg-[#f7f8fa] pt-16 pb-15 md:pb-32 md:pt-15">
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(212,175,55,0.12),transparent_55%)]"
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(9,9,11,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(9,9,11,0.04)_1px,transparent_1px)] [background-size:48px_48px]"
        aria-hidden
      />

      <motion.div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center sm:mb-16 md:mb-28"
        >
          <h2 className="mb-4 bg-gradient-to-r from-[#0f172a] via-[#92400e] to-[#d4af37] bg-clip-text font-serif text-2xl font-black text-transparent md:mb-6 md:text-4xl lg:text-5xl lg:whitespace-nowrap">
            AI Products Engineered
            <span className="block md:inline"> for Impact</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-[#52525b] md:text-base lg:text-lg">
            Cutting-edge solutions powered by artificial intelligence
          </p>
        </motion.div>

        <div
          className="
    relative
    mt-6 flex h-[480px]
    w-full items-center justify-center overflow-hidden
    px-6 sm:h-[550px] sm:px-6 md:mt-0 md:h-[600px] md:px-10
    lg:h-[650px]
    2xl:overflow-visible
  "
        >
          {products.map((product, index) => {
            const isActive = index === active;

            const offset =
              index === (active - 1 + products.length) % products.length
                ? -1
                : index === (active + 1) % products.length
                ? 1
                : 0;

            return (
              <motion.div
                key={index}
                animate={{
                  x: offset * 260,
                  scale: isActive ? 1 : 0.85,
                  opacity: isActive ? 1 : 0.45,
                  y: isActive ? 0 : 40,
                }}
                transition={{
                  type: "spring",
                  stiffness: 70,
                  damping: 18,
                  mass: 1,
                  restDelta: 0.001,
                }}
                className="
    absolute
    left-1/2
    w-[85%] -translate-x-1/2
    sm:w-[80%]
    md:w-[340px]
    xl:w-[380px]
  "
                style={{
                  zIndex: isActive ? 20 : 10,
                }}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                {isActive && (
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl"
                    style={{
                      boxShadow: "0 0 35px rgba(212, 175, 55, 0.28)",
                    }}
                  />
                )}

                <motion.div
                  whileHover={isActive ? { scale: 1.02, y: -6 } : {}}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className={`relative flex min-h-[280px] cursor-pointer flex-col overflow-hidden rounded-2xl border p-4 backdrop-blur-md sm:min-h-[360px] md:min-h-[420px] md:p-8 ${
                    isActive
                      ? "border-[#d4af37]/50 bg-white shadow-[0_20px_50px_rgba(212,175,55,0.18)]"
                      : "border-[#e2e8f0] bg-white/80"
                  }`}
                  onClick={() => handleProductSelect(product)}
                >
                  <motion.div
                    animate={isActive ? { y: [-4, 4, -4] } : { y: 0 }}
                    transition={{ duration: 2.2, repeat: Infinity }}
                    className="h-16 w-full overflow-hidden rounded-xl border border-[#e2e8f0] sm:h-24 md:h-28"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>

                  <div className="relative z-10 mt-3 flex w-full flex-1 flex-col items-center justify-between gap-3 text-center sm:items-start sm:text-left lg:gap-5">
                    <h3 className="text-base font-bold text-[#0f172a] md:text-3xl">
                      {product.title}
                    </h3>

                    <p className="w-full flex-none text-xs text-[#64748b] md:text-sm lg:text-base">
                      {product.shortDesc}
                    </p>

                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        className="space-y-2"
                      >
                        {product.features.slice(0, 3).map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.08, ease: "easeOut" }}
                            className="flex w-full items-center justify-center gap-2 text-xs text-[#64748b] sm:justify-start md:text-sm"
                          >
                            <motion.div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#92400e] to-[#d4af37]" />
                            {feature.title}
                          </motion.div>
                        ))}
                      </motion.div>
                    )}

                    {isActive && (
                      <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
                        className="mt-3 w-full shrink-0 overflow-hidden rounded-lg bg-gradient-to-r from-[#d4af37] to-[#f6df9a] py-2.5 text-sm font-semibold text-[#09090b] md:py-3"
                        onClick={(event) => {
                          event.stopPropagation();
                          handleProductSelect(product);
                        }}
                      >
                        Explore More →
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}

          <motion.button
            whileHover={{ scale: 1.15, x: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            onClick={prev}
            className="absolute left-2 z-30 rounded-full border border-[#d4af37]/35 bg-white/90 p-2 shadow-sm backdrop-blur-md transition-colors hover:border-[#d4af37]/60 hover:bg-[#fffbeb] sm:left-4 md:left-5 md:p-3 lg:left-6 xl:left-8 2xl:-left-16 xl:p-4"
          >
            <ChevronLeft className="h-4 w-4 text-[#92400e] md:h-6 md:w-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.15, x: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            onClick={next}
            className="absolute right-2 z-30 rounded-full border border-[#d4af37]/35 bg-white/90 p-2 shadow-sm backdrop-blur-md transition-colors hover:border-[#d4af37]/60 hover:bg-[#fffbeb] sm:right-4 md:right-5 md:p-3 lg:right-6 xl:right-8 2xl:-right-16 xl:p-4"
          >
            <ChevronRight className="h-4 w-4 text-[#92400e] md:h-6 md:w-6" />
          </motion.button>

          <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-3 md:-bottom-16">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ease-out md:h-3 md:w-3 ${
                  active === index
                    ? "scale-125 bg-gradient-to-r from-[#92400e] to-[#d4af37]"
                    : "bg-[#d4af37]/25 hover:bg-[#d4af37]/45"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TopProducts;
