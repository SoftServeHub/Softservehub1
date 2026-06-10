import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="relative py-24 px-4 text-center overflow-hidden">
    <div className="absolute inset-0 bg-linear-to-b from-transparent via-purple-950/10 to-black" />
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative max-w-2xl mx-auto"
    >
      <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-wide text-white mb-4 leading-tight">
        Not Sure Where to Start?
      </h2>
      <p className="text-gray-400 text-sm md:text-base mb-8 max-w-lg mx-auto">
        Talk to our AI specialists and we'll recommend the perfect combination of products for your business
      </p>
      <motion.button
      
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-linear-to-r from-purple-600 to-blue-600 text-white font-bold text-sm shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-shadow"
      > <a href="/contact" target="_blank" rel="noopener noreferrer">
        Book a Free Consultation
      </a>
        
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </motion.div>
  </section>
);

export default CTASection;
