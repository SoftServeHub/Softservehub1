from pathlib import Path

Path("src/components/cinematic/OrthoPivotReveal.jsx").write_text(
    r'''import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const PIVOT_SECTIONS = [
  {
    tag: "Innovation",
    title: "AI &\nAutomation",
    desc: "From machine learning to workflow automation, SoftServe Hub helps you ship smarter products faster—with practical AI that fits your operations, not buzzwords.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    color: "#d4af37",
    to: "/services/it/ai-automation-solutions/aiot-solutions",
  },
  {
    tag: "Delivery",
    title: "Web &\nPlatforms",
    desc: "We design and build responsive websites, enterprise software and mobile experiences—with disciplined execution from discovery through deployment and support.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    color: "#b8860b",
    to: "/services/it/website-web-application-services/website-design-development",
  },
  {
    tag: "Trust",
    title: "Security &\nCompliance",
    desc: "Cybersecurity assessments, cloud hardening and compliance-minded engineering—so your data and users stay protected as you grow.",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    color: "#92400e",
    to: "/services/it/cybersecurity-solutions/security-audits",
  },
  {
    tag: "Partnership",
    title: "Scale with\nConfidence",
    desc: "Staff augmentation, consulting and long-term support across IT and non-IT services—from Chennai to clients worldwide—we scale with your roadmap.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    color: "#ca8a04",
    to: "/services",
  },
];

export default function OrthoPivotReveal() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="border-t border-[#e2e8f0] bg-[#050505]">
      <section className="bg-white px-6 py-16 text-center md:px-12 md:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#92400e]">
          How we work with you
        </p>
        <h2 className="mt-4 text-4xl font-black uppercase tracking-tight text-[#0f172a] md:text-5xl">
          Partnership at every stage
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#64748b] md:text-lg">
          From AI and automation to delivery, security, and long-term support—scroll to see how
          SoftServe Hub helps teams move with clarity and confidence.
        </p>
      </section>

      <motion.div ref={containerRef} className="relative h-[400vh] bg-[#050505]">
        <motion.div className="sticky top-0 h-screen w-full overflow-hidden perspective-[2000px]">
          {PIVOT_SECTIONS.map((section, i) => (
            <PivotFace
              key={section.tag}
              section={section}
              index={i}
              total={PIVOT_SECTIONS.length}
              progress={smoothProgress}
            />
          ))}

          <motion.div className="pointer-events-none absolute inset-0 z-50 flex flex-col justify-between p-12">
            <motion.div className="flex items-start justify-between">
              <motion.div className="origin-left rotate-90 font-mono text-[10px] uppercase tracking-widest text-white/20">
                System_Active
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <section className="flex h-screen flex-col items-center justify-center border-t border-white/10 bg-[#050505] px-6 text-center">
        <h2 className="mb-8 text-6xl font-black tracking-tighter text-white md:text-8xl">
          READY TO <br />
          <span className="text-[#d4af37]">TRANSFORM?</span>
        </h2>
        <Link
          to="/contact"
          className="inline-flex rounded-full border border-[#d4af37]/50 bg-[#d4af37] px-12 py-6 text-lg font-bold text-[#0f172a] shadow-[0_12px_40px_rgba(212,175,55,0.35)] transition-transform hover:scale-105 hover:bg-[#f6df9a]"
        >
          Talk to SoftServe Hub
        </Link>
      </section>
    </main>
  );
}

function PivotFace({ section, index, total, progress }) {
  const start = index / total;
  const end = (index + 1) / total;

  const rotateX = useTransform(progress, [start - 0.1, start, end, end + 0.1], [90, 0, 0, -90]);
  const z = useTransform(progress, [start - 0.1, start, end, end + 0.1], [-500, 0, 0, -500]);
  const opacity = useTransform(progress, [start - 0.1, start, end, end + 0.1], [0, 1, 1, 0]);
  const imgY = useTransform(progress, [start, end], [-80, 80]);

  return (
    <motion.div
      style={{
        rotateX,
        z,
        opacity,
        transformStyle: "preserve-3d",
        transformOrigin: "center center -50vh",
      }}
      className="absolute inset-0 flex h-full w-full items-center justify-center px-10 md:px-24"
    >
      <motion.div className="flex w-full max-w-7xl flex-col items-center justify-between gap-16 md:flex-row md:gap-32">
        <motion.div className="order-2 w-full space-y-8 md:order-1 md:w-1/2">
          <motion.div className="space-y-3">
            <span className="block font-mono text-xs uppercase tracking-[0.4em] text-white/30">
              {section.tag} // Section 0{index + 1}
            </span>
            <h2 className="whitespace-pre-line text-6xl font-bold leading-[0.9] tracking-tighter text-white md:text-8xl">
              {section.title}
            </h2>
          </motion.div>

          <p className="max-w-md text-lg font-light leading-relaxed text-neutral-500 md:text-xl">
            {section.desc}
          </p>

          <motion.div className="pt-4">
            <Link
              to={section.to}
              className="inline-flex rounded-full border border-white/10 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-500 hover:bg-white hover:text-black"
            >
              View Details
            </Link>
          </motion.div>
        </motion.div>

        <motion.div className="relative order-1 flex h-[60vh] w-full flex-shrink-0 md:order-2 md:h-[80vh] md:w-[480px]">
          <motion.div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]">
            <motion.img
              style={{ y: imgY, scale: 1.5 }}
              src={`${section.img}?q=80&w=1200&auto=format&fit=crop&h=1600`}
              className="absolute inset-0 block h-full w-full object-cover grayscale-[0.3] transition-all duration-1000 hover:grayscale-0"
              alt={section.tag}
            />
          </motion.div>
          <motion.div
            className="absolute -inset-20 -z-10 rounded-full opacity-20 blur-[120px]"
            style={{ backgroundColor: section.color }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
'''.replace('<motion.div ref={containerRef}', '<motion.div ref={containerRef}').replace(
    '<motion.div className="sticky top-0', '<motion.div className="sticky top-0'
),
    encoding="utf-8",
)
print("written")
