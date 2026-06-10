import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import deliveryDiscoveryImg from "../../images/delivery-discovery-strategy.webp";
import deliveryDesignImg from "../../images/delivery-design-planning.webp";
import deliveryAgileImg from "../../images/delivery-agile-development.webp";
import deliveryQualityImg from "../../images/delivery-quality-assurance.webp";
import deliveryLaunchImg from "../../images/delivery-launch-deployment.webp";
import deliverySupportImg from "../../images/delivery-support-optimization.webp";
import deliveryProductImg from "../../images/delivery-product-delivered.webp";

const STORY_SCROLL_VH = 1000;
const CTA_DWELL_VH = 480;
const STORY_PROGRESS_END = 0.82;

const STORY_LAYERS = [
  {
    title: "Discovery & Strategy",
    desc: "We align on business goals, users, scope and success metrics before development begins.",
    img: deliveryDiscoveryImg,
    color: "text-[#d4af37]",
  },
  {
    title: "Design & Planning",
    desc: "UX flows, wireframes and technical architecture shaped around your workflows and roadmap.",
    img: deliveryDesignImg,
    color: "text-[#f6df9a]",
  },
  {
    title: "Agile Development",
    desc: "Incremental builds with clear milestones, demos and feedback so progress stays visible every sprint.",
    img: deliveryAgileImg,
    color: "text-[#ca8a04]",
  },
  {
    title: "Quality Assurance",
    desc: "Testing across devices, integrations and edge cases so every release ships stable and secure.",
    img: deliveryQualityImg,
    color: "text-[#92400e]",
  },
  {
    title: "Launch & Deployment",
    desc: "Controlled go-live, environment setup and handoff so your product moves to production smoothly.",
    img: deliveryLaunchImg,
    color: "text-[#d4af37]",
  },
  {
    title: "Support & Optimization",
    desc: "Monitoring, enhancements and long-term support to keep performance strong as you scale.",
    img: deliverySupportImg,
    color: "text-[#f6df9a]",
  },
  {
    title: "Your Product, Delivered",
    desc: "",
    img: deliveryProductImg,
    color: "text-[#92400e]",
  },
];

function ProgressSegment({ index, progress, total, visibility }) {
  const scaleX = useTransform(
    progress,
    [index / total, (index + 1) / total],
    [0, 1],
  );

  return (
    <motion.div style={{ opacity: visibility }} className="h-1 w-8 overflow-hidden rounded-full bg-[#e2e8f0]">
      <motion.div
        style={{ scaleX }}
        className="h-full origin-left bg-[#d4af37]"
      />
    </motion.div>
  );
}

function Layer({ data, index, total, progress, ctaActive, isFinal = false }) {
  const holdAt = (total - 1) / total + 0.045;
  const layerProgress = isFinal
    ? useTransform(progress, (v) => Math.min(v, holdAt))
    : progress;

  const start = index / total;
  const end = (index + 2) / total;
  const exit = (index + 1) / total;

  const scale = isFinal
    ? useTransform(layerProgress, [start, exit], [1, 1])
    : useTransform(layerProgress, [start, exit, end], [0.1, 1, 25]);

  const opacity = useTransform(
    layerProgress,
    [start, start + 0.05, exit, exit + 0.05],
    [0, 1, 1, 0],
  );

  const blur = useTransform(layerProgress, [exit, end], [0, 40]);
  const filter = useMotionTemplate`blur(${blur}px)`;

  const visibleTextOpacity = useTransform(ctaActive, (cta) => (cta > 0.5 ? 0 : 1));

  return (
    <motion.div
      style={{
        scale,
        opacity,
        zIndex: index,
        filter: isFinal ? "none" : filter,
      }}
      className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8"
    >
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-[#e2e8f0]/80 shadow-[0_28px_70px_rgba(15,23,42,0.12)]">
        <img
          src={data.img}
          className="h-full w-full object-cover"
          alt=""
        />
        {!isFinal && (
          <>
            <div className="absolute inset-0 rounded-[2rem] bg-[#0f172a]/45" />
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-t from-[#0f172a]/70 via-transparent to-[#fffbeb]/10" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
              <span
                style={{ opacity: visibleTextOpacity }}
                className={`mb-4 text-sm font-bold uppercase tracking-[0.3em] ${data.color}`}
              >
                Step 0{index + 1}
              </span>
              <h2
                style={{ opacity: visibleTextOpacity }}
                className="mb-4 font-azzuri-calcio text-5xl font-black uppercase italic tracking-tighter text-white md:text-7xl"
              >
                {data.title}
              </h2>
              {data.desc ? (
                <p
                  style={{ opacity: visibleTextOpacity }}
                  className="max-w-sm text-lg font-light leading-relaxed text-white/60"
                >
                  {data.desc}
                </p>
              ) : null}
            </div>
          </>
        )}
        {isFinal && (
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[#0f172a]/25 max-lg:hidden" />
        )}
      </div>
    </motion.div>
  );
}

export default function StoryTunnel() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const storyProgress = useTransform(smoothProgress, [0, STORY_PROGRESS_END], [0, 1]);

  const ctaActive = useTransform(scrollYProgress, (v) => (v >= 0.86 ? 1 : 0));
  const ctaPointerEvents = useTransform(ctaActive, (v) =>
    v >= 1 ? "auto" : "none",
  );
  const chromeOpacity = useTransform(smoothProgress, [0.74, 0.86], [1, 0]);

  const total = STORY_LAYERS.length;
  const finalIndex = total - 1;

  return (
    <section
      ref={containerRef}
      className="relative border-t border-[#e2e8f0] bg-white"
      style={{ height: `${STORY_SCROLL_VH + CTA_DWELL_VH}vh` }}
      aria-label="How we deliver our products"
    >
      <div className="sticky top-0 h-screen min-h-[100dvh] w-full overflow-hidden bg-white">
        <motion.div
          style={{ opacity: chromeOpacity }}
          className="absolute left-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-4 md:flex md:left-10"
        >
          {STORY_LAYERS.map((_, i) => (
            <ProgressSegment
              key={i}
              index={i}
              progress={storyProgress}
              total={total}
              visibility={chromeOpacity}
            />
          ))}
        </motion.div>

        {STORY_LAYERS.map((layer, index) => (
          <Layer
            key={layer.title}
            data={layer}
            index={index}
            total={total}
            progress={storyProgress}
            isFinal={index === finalIndex}
            ctaActive={ctaActive}
          />
        ))}

        <motion.div
          style={{ opacity: ctaActive, pointerEvents: ctaPointerEvents }}
          className="absolute inset-0 z-[100] flex flex-col items-center justify-center px-6 text-center"
        >
          <h2 className="mb-5 font-azzuri-calcio text-5xl font-black uppercase tracking-tight text-[#0f172a] drop-shadow-[0_2px_12px_rgba(255,255,255,0.85)] md:mb-6 md:text-7xl md:text-white md:drop-shadow-[0_4px_28px_rgba(0,0,0,0.9)]">
            Ready to start?
          </h2>
          <div className="mb-8 flex w-full max-w-2xl flex-col gap-2 px-2 text-center">
            <p className="text-sm font-bold leading-tight text-[#0f172a] drop-shadow-[0_1px_8px_rgba(255,255,255,0.8)] sm:text-base md:text-lg md:text-white md:drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)]">
              Your next chapter starts with a conversation.
            </p>
            <p className="text-sm font-bold leading-tight text-[#0f172a] drop-shadow-[0_1px_8px_rgba(255,255,255,0.8)] sm:text-base md:text-lg md:text-white md:drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)]">
              Click below to start your project with us.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex rounded-full bg-gradient-to-r from-[#d4af37] to-[#f6df9a] px-10 py-5 text-sm font-black uppercase tracking-widest text-[#09090b] shadow-[0_12px_36px_rgba(212,175,55,0.35)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Start your project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
