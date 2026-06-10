import { useLayoutEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

const LINE_X = 24;
const CARD_GAP = 40;

function buildJourneyPath(yPositions) {
  if (!yPositions.length) return `M ${LINE_X} 0`;
  let d = `M ${LINE_X} ${Math.max(0, yPositions[0] - 20)}`;
  d += ` L ${LINE_X} ${yPositions[0]}`;
  for (let i = 1; i < yPositions.length; i += 1) {
    const y0 = yPositions[i - 1];
    const y1 = yPositions[i];
    const mid = (y0 + y1) / 2;
    const bulge = i % 2 === 0 ? -16 : 16;
    d += ` Q ${LINE_X + bulge} ${mid} ${LINE_X} ${y1}`;
  }
  const last = yPositions[yPositions.length - 1];
  d += ` L ${LINE_X} ${last + 24}`;
  return d;
}

function ServiceJourneyCard({ src, title, description, to, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="relative min-h-[260px] overflow-hidden rounded-[1.75rem] border border-[#e2e8f0]/80 shadow-[0_20px_50px_rgba(15,23,42,0.1)]"
    >
      <img src={src} alt={title} className="absolute inset-0 h-full w-full object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f172a]/92 via-[#0f172a]/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-10 p-5">
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d4af37]">
          0{index + 1}
        </span>
        <h3 className="mt-2 text-lg font-bold leading-snug text-white">{title}</h3>
        <p className="mt-2 text-sm font-light leading-relaxed text-[#e2e8f0]/95 line-clamp-3">
          {description}
        </p>
        <Link
          to={to}
          className="mt-4 inline-flex w-fit items-center justify-center rounded-full border border-[#d4af37]/70 bg-[#0f172a]/55 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#fef9c7] backdrop-blur-[6px] transition-colors hover:bg-[#d4af37] hover:text-[#0f172a]"
        >
          View services
        </Link>
      </div>
    </motion.article>
  );
}

function JourneyNode({ index, total, progress, top }) {
  const start = index / total;
  const end = (index + 1) / total;
  const scale = useTransform(progress, [start, Math.min(end, start + 0.12)], [0.65, 1.15]);
  const opacity = useTransform(progress, [start, Math.min(end, start + 0.08)], [0.35, 1]);
  const ringScale = useTransform(progress, [start, end], [0.6, 1.8]);
  const ringOpacity = useTransform(progress, [start, end], [0, 0.45]);

  return (
    <div
      className="pointer-events-none absolute left-1/2 z-20 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
      style={{ top }}
    >
      <motion.span
        style={{ scale: ringScale, opacity: ringOpacity }}
        className="absolute inset-0 rounded-full border-2 border-[#d4af37]/50"
      />
      <motion.span
        style={{ scale, opacity }}
        className="relative h-3.5 w-3.5 rounded-full bg-gradient-to-br from-[#d4af37] to-[#f6df9a] shadow-[0_0_12px_rgba(212,175,55,0.65)]"
      />
    </div>
  );
}

function ScrollJourneyLine({ pathD, pathLength, viewHeight, progress }) {
  const pathRef = useRef(null);
  const [measuredLength, setMeasuredLength] = useState(pathLength);

  useLayoutEffect(() => {
    if (pathRef.current) {
      setMeasuredLength(pathRef.current.getTotalLength());
    }
  }, [pathD, pathLength]);

  const strokeDashoffset = useTransform(progress, [0, 1], [measuredLength, 0]);

  if (!pathD || viewHeight <= 0) return null;

  return (
    <svg
      className="pointer-events-none absolute left-0 top-0 z-10 w-12 overflow-visible"
      style={{ height: viewHeight }}
      viewBox={`0 0 48 ${viewHeight}`}
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d={pathD}
        fill="none"
        stroke="#e2e8f0"
        strokeWidth="3"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <motion.path
        ref={pathRef}
        d={pathD}
        fill="none"
        stroke="url(#core-services-journey-gold)"
        strokeWidth="3"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        strokeDasharray={measuredLength}
        style={{ strokeDashoffset }}
      />
      <defs>
        <linearGradient id="core-services-journey-gold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#f6df9a" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function CoreServicesMobileJourney({ images, services }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const [pathD, setPathD] = useState("");
  const [viewHeight, setViewHeight] = useState(0);
  const [pathLength, setPathLength] = useState(1);
  const [nodeTops, setNodeTops] = useState([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.15"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001,
  });

  const measurePath = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const trackRect = track.getBoundingClientRect();
    const height = track.offsetHeight;
    setViewHeight(height);

    const yCenters = services.map((_, i) => {
      const el = cardRefs.current[i];
      if (!el) return (i + 1) * (280 + CARD_GAP) - 140;
      const rect = el.getBoundingClientRect();
      return rect.top - trackRect.top + rect.height / 2;
    });

    setNodeTops(yCenters);
    const nextPath = buildJourneyPath(yCenters);
    setPathD(nextPath);

    const measureSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const measurePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    measurePath.setAttribute("d", nextPath);
    measureSvg.appendChild(measurePath);
    document.body.appendChild(measureSvg);
    const len = measurePath.getTotalLength();
    document.body.removeChild(measureSvg);
    setPathLength(len || 1);
  }, [services]);

  useLayoutEffect(() => {
    measurePath();
    const track = trackRef.current;
    if (!track) return undefined;

    const ro = new ResizeObserver(() => measurePath());
    ro.observe(track);
    window.addEventListener("resize", measurePath);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measurePath);
    };
  }, [measurePath]);

  const slot = (index) => ({
    src: images[index],
    ...services[index],
  });

  const total = services.length;

  return (
    <section
      ref={containerRef}
      className="relative isolate z-0 overflow-hidden border-t border-[#e2e8f0] bg-white py-16 pb-12 lg:hidden"
      aria-label="Our core services"
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mb-10 max-w-lg px-5"
      >
        <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-tighter text-[#0f172a]">
          Our core <br /> <span className="text-[#d4af37]">service</span>
        </h2>
        <Link
          to="/services"
          className="mt-6 inline-flex w-fit items-center justify-center rounded-full border border-[#d4af37]/45 bg-[#fffbeb] px-7 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[#92400e] shadow-sm transition-colors hover:border-[#d4af37] hover:bg-[#fef3c7]"
        >
          View services
        </Link>
      </motion.div>

      <div className="relative mx-auto max-w-lg px-5">
        <div
          ref={trackRef}
          className="grid grid-cols-[3rem_minmax(0,1fr)] items-start gap-x-3"
        >
          <div className="relative min-h-[200px] w-12 shrink-0">
            <ScrollJourneyLine
              pathD={pathD}
              pathLength={pathLength}
              viewHeight={viewHeight}
              progress={smoothProgress}
            />
            {nodeTops.map((top, i) => (
              <JourneyNode
                key={services[i].title}
                index={i}
                total={total}
                progress={smoothProgress}
                top={top}
              />
            ))}
          </div>

          <div className="flex flex-col" style={{ gap: CARD_GAP }}>
            {services.map((service, idx) => {
              const card = slot(idx);
              return (
                <div
                  key={service.title}
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                >
                  <ServiceJourneyCard
                    index={idx}
                    src={card.src}
                    title={card.title}
                    description={card.description}
                    to={card.to}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
