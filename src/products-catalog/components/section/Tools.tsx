import { motion } from "framer-motion";
import { FaAws, FaDocker, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { useEffect } from "react";
import Lenis from "lenis";
import Hyperspeed from "../Hyperspeed";
import { hyperspeedPresets } from "../HyperSpeedPresets";

const tools = [
  { icon: <FaAws />, name: "AWS", url: "https://aws.amazon.com/" },
  { icon: <FaDocker />, name: "Docker", url: "https://www.docker.com/" },
  { icon: <FaReact />, name: "React", url: "https://react.dev/" },
  { icon: <FaNodeJs />, name: "NodeJS", url: "https://nodejs.org/" },
  { icon: <FaDatabase />, name: "Database", url: "https://www.mongodb.com/" },
];

const Tools = () => {
  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">

      {/* Hyperspeed Background Effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
        <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
          <Hyperspeed effectOptions={hyperspeedPresets.one} />
        </div>

        {/* Light Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-serif md:text-5xl lg:text-6xl font-bold mb-10 pb-2 md:mb-20 bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Tools & Technologies
          <span className="block md:inline"> We Master</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto mb-12 md:mb-16"
        >
          Built on cutting-edge technologies and integrated with enterprise tools
        </motion.p>

        {/* Tools Carousel - Seamless Smooth Scroll */}
        <div className="relative overflow-hidden w-full py-8 md:py-12">
          <motion.div
            className="flex gap-6 md:gap-8 lg:gap-12 w-max"
            initial={{ x: 0 }}
            animate={{ x: -2400 }}
            transition={{
              repeat: Infinity,
              duration: 40,
              ease: "linear",
            }}
          >
            {[...tools, ...tools, ...tools, ...tools, ...tools, ...tools].map((tool, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="shrink-0 group relative"
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl md:rounded-3xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)",
                  }}
                />

                <div className="relative flex flex-col items-center p-6 md:p-8 bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-300 min-w-fit">
                  {/* Icon Container */}
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${tool.name} website`}
                  >
                    <motion.div
                      animate={{ 
                        y: [0, -6, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="w-16 md:w-20 h-16 md:h-20 flex items-center justify-center text-4xl md:text-5xl text-gray-300 group-hover:text-gradient transition duration-300 bg-linear-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl group-hover:from-purple-500/40 group-hover:to-cyan-500/40 cursor-pointer"
                    >
                      {tool.icon}
                    </motion.div>
                  </a>
                  <span className="mt-4 md:mt-6 text-gray-400 group-hover:text-white transition duration-300 font-semibold text-sm md:text-base">
                    {tool.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Accent Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-linear-to-r from-transparent via-purple-500 to-transparent mt-12 md:mt-16"
        />

      </div>
    </section>
  );
};

export default Tools;
