import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const GRADIENT_TITLE_STYLE = {
  backgroundImage: "linear-gradient(90deg, #0f172a 0%, #92400e 42%, #d4af37 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
};

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

function PivotSectionCopy({ section, index, titleClassName = "" }) {
  return (
    <div className="w-full space-y-5">
      <div className="space-y-2">
        <span className="block font-mono text-[10px] uppercase tracking-[0.35em] text-[#92400e] sm:text-xs sm:tracking-[0.4em]">
          {section.tag} // Section 0{index + 1}
        </span>
        <h2
          className={`whitespace-pre-line font-azzuri-calcio font-black uppercase leading-[0.9] tracking-tighter text-transparent ${titleClassName}`}
          style={GRADIENT_TITLE_STYLE}
        >
          {section.title}
        </h2>
      </div>

      <p className="max-w-md text-base font-medium leading-relaxed text-[#475569] sm:text-lg">
        {section.desc}
      </p>

      <div>
        <Link
          to={section.to}
          className="inline-flex rounded-full border border-[#d1d9e6] bg-white px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-[#334155] shadow-sm transition-all duration-500 hover:border-[#d4af37]/55 hover:bg-gradient-to-r hover:from-[#d4af37] hover:to-[#f6df9a] hover:text-[#09090b] sm:px-8 sm:py-4 sm:text-xs"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

function PivotSectionImage({ section, compact = false, imgY }) {
  const frameClass = compact
    ? "relative mx-auto h-52 w-full max-w-[320px] sm:h-56 sm:max-w-[360px]"
    : "relative h-[60vh] w-full flex-shrink-0 md:h-[80vh] md:w-[480px]";

  const roundedClass = compact ? "rounded-2xl" : "rounded-[2.5rem]";
  const shadowClass = compact
    ? "shadow-[0_16px_40px_rgba(15,23,42,0.1)]"
    : "shadow-[0_32px_80px_rgba(15,23,42,0.1)]";

  return (
    <div className={frameClass}>
      <div
        className={`relative h-full w-full overflow-hidden border border-[#e2e8f0] bg-[#f1f5f9] ${roundedClass} ${shadowClass}`}
      >
        <motion.img
          style={imgY ? { y: imgY, scale: 1.5 } : undefined}
          initial={imgY ? undefined : { scale: 1.06 }}
          whileInView={imgY ? undefined : { scale: 1 }}
          viewport={imgY ? undefined : { once: true, amount: 0.4 }}
          transition={imgY ? undefined : { duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          src={`${section.img}?q=80&w=1200&auto=format&fit=crop&h=1600`}
          className="absolute inset-0 block h-full w-full object-cover saturate-[1.05]"
          alt={section.tag}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f172a]/20 via-transparent to-[#fffbeb]/10" />
      </div>
      {!compact && (
        <div
          className="absolute -inset-20 -z-10 rounded-full opacity-25 blur-[120px]"
          style={{ backgroundColor: section.color }}
        />
      )}
      {compact && (
        <div
          className="pointer-events-none absolute -inset-8 -z-10 rounded-full opacity-20 blur-[60px]"
          style={{ backgroundColor: section.color }}
        />
      )}
    </div>
  );
}

function OrthoPivotMobile() {
  return (
    <section
      className="relative isolate overflow-hidden border-t border-[#e2e8f0] bg-white lg:hidden"
      aria-label="Capabilities pivot — mobile"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(212,175,55,0.1),transparent_55%)]" />
      <div className="relative mx-auto max-w-lg px-5 py-14 sm:px-6 sm:py-16">
        {PIVOT_SECTIONS.map((section, index) => (
          <motion.article
            key={section.tag}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className={index > 0 ? "mt-14 border-t border-[#e2e8f0]/80 pt-14 sm:mt-16 sm:pt-16" : ""}
          >
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-8">
              <div className="w-full md:order-2 md:w-[260px] md:shrink-0">
                <PivotSectionImage section={section} compact />
              </div>
              <div className="w-full md:order-1 md:min-w-0 md:flex-1">
                <PivotSectionCopy
                  section={section}
                  index={index}
                  titleClassName="text-4xl sm:text-5xl"
                />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function OrthoPivotDesktop() {
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
    <main className="relative isolate hidden border-t border-[#e2e8f0] bg-white lg:block">
      <div ref={containerRef} className="relative h-[400vh] bg-white">
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-white perspective-[2000px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_0%,rgba(212,175,55,0.12),transparent_55%)]" />
          {PIVOT_SECTIONS.map((section, i) => (
            <PivotFace
              key={section.tag}
              section={section}
              index={i}
              total={PIVOT_SECTIONS.length}
              progress={smoothProgress}
            />
          ))}

          <div className="pointer-events-none absolute inset-0 z-50 flex flex-col justify-between p-12">
            <div className="flex items-start justify-between">
              <div className="origin-left rotate-90 font-mono text-[10px] uppercase tracking-widest text-[#92400e]/35">
                SoftServe_Hub
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function OrthoPivotReveal() {
  return (
    <>
      <OrthoPivotMobile />
      <OrthoPivotDesktop />
    </>
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
      className="absolute inset-0 flex h-full w-full items-center justify-center bg-white px-10 md:px-24"
    >
      <div className="flex w-full max-w-7xl items-center justify-between gap-16 lg:gap-32">
        <div className="w-full max-w-xl space-y-8 lg:w-1/2">
          <PivotSectionCopy
            section={section}
            index={index}
            titleClassName="text-6xl lg:text-8xl"
          />
        </div>

        <div className="relative flex flex-shrink-0 justify-end lg:ml-auto">
          <PivotSectionImage section={section} imgY={imgY} />
        </div>
      </div>
    </motion.div>
  );
}
