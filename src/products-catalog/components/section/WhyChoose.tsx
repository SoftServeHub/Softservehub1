import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { label: "Clients", value: 900 },
  { label: "Years of Excellence", value: 11 },
  { label: "Ongoing Projects", value: 20 },
  { label: "Countries Served", value: 45 },
];

const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1500;
      const increment = value / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl font-bold text-[#d4af37] md:text-5xl">
      {count}+
    </span>
  );
};

const WhyChoose = () => {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-[#f7f8fa] py-24 md:py-32"
    >
      {/* Floating gradient orbs */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[700px] h-[700px] bg-gradient-to-br from-purple-600/15 to-transparent blur-[150px] rounded-full top-[-200px] left-[-200px] -z-30 pointer-events-none"
      />
      
      <div
        className="absolute w-[600px] h-[600px] bg-gradient-to-tl from-cyan-600/10 to-transparent blur-[150px] rounded-full bottom-[-200px] right-[-200px] -z-30 pointer-events-none"
      />

      {/* Floating Particles - Reduced count */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -Math.random() * 60, 0],
            x: [0, Math.sin(i) * 40, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 font-azzuri-calcio text-3xl font-black uppercase tracking-tight text-transparent bg-gradient-to-r from-[#0f172a] via-[#92400e] to-[#d4af37] bg-clip-text md:mb-20 md:text-5xl"
        >
          Why Choose SoftServe Hub?
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center rounded-2xl border border-[#d4af37]/45 bg-gradient-to-br from-white via-[#fffbeb] to-[#fef3c7]/55 p-6 text-center shadow-[0_8px_24px_rgba(212,175,55,0.12)] sm:p-10"
            >
              <Counter value={stat.value} />
              <p className="mt-4 text-sm text-[#52525b] md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
