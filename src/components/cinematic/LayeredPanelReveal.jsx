import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

const SECTIONS = [
  {
    title: "Innovation",
    tagline: "AI & intelligent automation",
    description:
      "From machine learning to workflow automation, SoftServe Hub helps you ship smarter products faster—with practical AI that fits your operations, not buzzwords.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2000&q=80",
    color: "bg-[#D4AF37]",
  },
  {
    title: "Delivery",
    tagline: "Web, apps & platforms",
    description:
      "We design and build responsive websites, enterprise software and mobile experiences—with disciplined execution from discovery through deployment and support.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80",
    color: "bg-[#b8860b]",
  },
  {
    title: "Trust",
    tagline: "Security & compliance",
    description:
      "Cybersecurity assessments, cloud hardening and compliance-minded engineering—so your data and users stay protected as you grow.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=2000&q=80",
    color: "bg-[#92400e]",
  },
  {
    title: "Partnership",
    tagline: "Scale with confidence",
    description:
      "Staff augmentation, consulting and long-term support across IT and non-IT services—from Chennai to clients worldwide—we scale with your roadmap.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80",
    color: "bg-[#ca8a04]",
  },
];

function Section({ section, index, total, scrollYProgress }) {
  const isLast = index === total - 1;

  const start = index / total;
  const end = (index + 1) / total;

  const scale = useTransform(scrollYProgress, [start, end - 0.02], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [start, end - 0.04], [1, 0]);

  const textY = useTransform(scrollYProgress, [start, start + 0.1], [100, 0]);
  const textOpacity = useTransform(scrollYProgress, [start, start + 0.1], [0, 1]);

  const imageScale = useTransform(scrollYProgress, [start, end], [1.1, 1]);

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden" style={{ zIndex: index + 1 }}>
      <motion.div
        style={{
          scale: isLast ? 1 : scale,
          opacity: isLast ? 1 : opacity,
          backgroundColor: "#ffffff",
        }}
        className="relative w-full h-full flex flex-col md:flex-row items-center border-b border-[#e2e8f0]"
      >
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-10 md:px-20 space-y-6">
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            className="space-y-4"
          >
            <span className="text-[#92400e] font-mono text-sm">
              0{index + 1} · {section.tagline}
            </span>
            <h2 className="text-[#0f172a] text-5xl md:text-7xl font-bold tracking-tight">
              {section.title}
            </h2>
            <p className="text-[#475569] text-lg md:text-xl font-light leading-relaxed max-w-md">
              {section.description}
            </p>
            <div className="pt-6">
              <div className={`h-1 w-20 ${section.color} rounded-full`} />
            </div>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 h-1/2 md:h-full p-6 md:p-12">
          <motion.div
            style={{ scale: imageScale }}
            className="w-full h-full rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.08)] border border-[#e2e8f0] relative bg-[#fafafa]"
          >
            <img
              src={section.image}
            className="w-full h-full object-contain"
            alt={section.title}
          />
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent md:hidden pointer-events-none" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default function LayeredPanelReveal() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={containerRef} className="relative bg-white border-t border-[#e2e8f0]">
      <section className="px-6 py-16 text-center md:py-20 md:px-12">
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
      {SECTIONS.map((section, i) => (
        <Section
          key={i}
          section={section}
          index={i}
          total={SECTIONS.length}
          scrollYProgress={scrollYProgress}
        />
      ))}

      <section className="h-screen bg-white flex flex-col items-center justify-center text-center px-6 border-t border-[#e2e8f0]">
        <h2 className="text-[#0f172a] text-6xl md:text-8xl font-black tracking-tighter mb-8">
          READY TO <br />
          <span className="text-[#b45309]">TRANSFORM?</span>
        </h2>
        <Link
          to="/Contact"
          className="inline-flex px-12 py-6 rounded-full font-bold text-lg bg-[#D4AF37] text-[#0f172a] border border-[#a78c4a] shadow-[0_12px_40px_rgba(212,175,55,0.35)] hover:scale-105 hover:bg-[#f6df9a] transition-transform"
        >
          Talk to SoftServe Hub
        </Link>
      </section>
    </main>
  );
}
