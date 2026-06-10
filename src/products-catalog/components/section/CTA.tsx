import { motion } from "framer-motion";
import { Zap, Brain, BarChart3, ArrowRight } from "lucide-react";

const CTA = () => {
  const benefits = [
    {
      icon: Zap,
      title: "3x Faster Implementation",
      desc: "Deploy AI systems in weeks, not months"
    },
    {
      icon: Brain,
      title: "Enterprise-Grade AI",
      desc: "Custom models trained on your data"
    },
    {
      icon: BarChart3,
      title: "3x faster Decision Making",
      desc: "Proven results from 900+ enterprise clients"
    }
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-20 md:py-32">
      <div className="absolute inset-0 -z-50 bg-[#f7f8fa]" />
      
      {/* Optimized Background */}
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
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -Math.random() * 80, 0],
            x: [0, Math.sin(i) * 40, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="mb-4 font-azzuri-calcio text-3xl font-black uppercase tracking-tight text-transparent bg-gradient-to-r from-[#0f172a] via-[#92400e] to-[#d4af37] bg-clip-text md:mb-6 md:text-5xl lg:text-6xl">
            Ready to Lead with AI?
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-[#52525b] md:text-lg">
            Join 500+ enterprises transforming their operations with SoftServe Hub&apos;s enterprise-grade solutions
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                  background: index === 0 ? 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)' :
                              index === 1 ? 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)' :
                              'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)'
                }} />

                <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left w-full">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${
                      index === 0 ? 'from-indigo-500 to-purple-600' :
                      index === 1 ? 'from-purple-500 to-pink-600' :
                      'from-cyan-500 to-blue-600'
                    } flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-400">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Main CTA Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          {/* Animated Border Glow */}
          <motion.div
            animate={{
              boxShadow: [
                '0 0 30px rgba(139, 92, 246, 0.3)',
                '0 0 60px rgba(139, 92, 246, 0.5)',
                '0 0 30px rgba(139, 92, 246, 0.3)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 rounded-3xl"
          />

          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/20 overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full" />
            </div>

            <div className="relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/50 text-purple-300 text-xs md:text-sm font-semibold mb-4">
                  LIMITED TIME OFFER
                </span>
              </motion.div>

              <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                Get Your Free 30 mins AI consulting Session
              </h3>
              
              <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto mb-8 md:mb-10">
                Let our AI experts analyze your business and show you exactly how much you can save and automate. No credit card required.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                <motion.a
                  href="/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 md:px-10 py-3 md:py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-sm md:text-base shadow-lg shadow-purple-500/50 hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
                >
                  Schedule Appointment
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.a>

                {/* <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 md:px-10 py-3 md:py-4 rounded-full border-2 border-white/30 text-white font-bold text-sm md:text-base hover:border-white/60 hover:bg-white/5 transition-all duration-300"
                >
                  View Success Stories
                </motion.button> */}
              </div>

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 md:mt-12 pt-8 md:pt-12 border-t border-white/10 text-center"
              >
                <p className="text-xs md:text-sm text-gray-500 mb-3">
                  Trusted by Fortune 500 Companies
                </p>
                {/* <div className="flex justify-center items-center gap-6 flex-wrap">
                  {["Microsoft", "Google", "IBM", "Amazon"].map((company) => (
                    <span key={company} className="text-gray-600 text-xs md:text-sm font-semibold">
                      {company}
                    </span>
                  ))}
                </div> */}
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-16 bg-gradient-to-b from-transparent to-purple-900/60" />
    </section>
  );
};

export default CTA;
