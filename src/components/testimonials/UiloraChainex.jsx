import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const AUTO_SCROLL_MS = 4500;

const headerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const headerItem = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const defaultTestimonials = [
  {
    name: "Rajesh Kumar",
    role: "CTO, FinTech Startup",
    content:
      "SoftServe Hub delivered our enterprise platform on time with exceptional quality. Their team understood our vision from day one.",
    seed: "RajeshKumar",
  },
  {
    name: "Sarah Mitchell",
    role: "Founder & CEO",
    content:
      "From AI automation to cloud migration, SoftServe Hub has been a reliable partner. Clear communication and solid execution every step.",
    seed: "SarahMitchell",
  },
  {
    name: "Priya Sharma",
    role: "Product Manager",
    content:
      "The mobile app they built exceeded our expectations. Polished UX, stable releases, and responsive support throughout the project.",
    seed: "PriyaSharma",
  },
  {
    name: "James Anderson",
    role: "Operations Director",
    content:
      "Workflow automation from SoftServe Hub cut our manual processing time by 60%. Practical solutions that actually work in production.",
    seed: "JamesAnderson",
  },
  {
    name: "Ananya Reddy",
    role: "Marketing Lead",
    content:
      "Their digital marketing and web development teams aligned perfectly with our brand. We saw measurable growth within the first quarter.",
    seed: "AnanyaReddy",
  },
  {
    name: "Michael Chen",
    role: "Startup Founder",
    content:
      "We shipped our MVP three times faster with SoftServe Hub. The components aren't just beautiful—they're rock solid.",
    seed: "MichaelChen",
  },
  {
    name: "Emily Watson",
    role: "HR Director",
    content:
      "Staff augmentation gave us the flexibility we needed without compromising quality. Seamless integration with our in-house team.",
    seed: "EmilyWatson",
  },
  {
    name: "David Okonkwo",
    role: "Tech Lead",
    content:
      "Clean architecture, thorough documentation, and dependable delivery. SoftServe Hub is our go-to for complex software projects.",
    seed: "DavidOkonkwo",
  },
];

const CARD_WIDTH = 300;
const CARD_GAP = 20;
const CARD_STRIDE = CARD_WIDTH + CARD_GAP;
const CARD_HEIGHT = 240;

function circularDiff(i, current, total) {
  let d = i - current;
  if (d > total / 2) d -= total;
  if (d < -total / 2) d += total;
  return d;
}

export default function UiloraChainex({
  testimonials = defaultTestimonials,
  accentColor = "#d4af37",
}) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(960);
  const n = testimonials.length;

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + n) % n), [n]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % n), [n]);

  useEffect(() => {
    if (!hasEntered || isPaused || n <= 1) return undefined;

    const timer = window.setInterval(() => {
      setCurrent((c) => (c + 1) % n);
    }, AUTO_SCROLL_MS);

    return () => window.clearInterval(timer);
  }, [hasEntered, isPaused, n]);

  const centerX = containerWidth / 2 - CARD_WIDTH / 2;

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#f7f8fa] px-4 py-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(e) => {
        if (!sectionRef.current?.contains(e.relatedTarget)) setIsPaused(false);
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 56, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        onViewportEnter={() => setHasEntered(true)}
        className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[#e2e8f0] bg-white py-14 shadow-sm"
      >
        <motion.div
          className="mb-12 px-8 text-center"
          variants={headerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.span
            variants={headerItem}
            className="mb-4 inline-block rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-wide"
            style={{
              backgroundColor: `${accentColor}15`,
              color: accentColor,
              borderColor: `${accentColor}30`,
            }}
          >
            Testimonials
          </motion.span>
          <motion.h2
            variants={headerItem}
            className="mb-3 text-3xl font-bold leading-tight text-[#0f172a] md:text-4xl"
          >
            Loved by teams &amp; founders
          </motion.h2>
          <motion.p variants={headerItem} className="mx-auto max-w-sm text-[15px] text-[#64748b]">
            Businesses worldwide trust SoftServe Hub to build faster without sacrificing quality.
          </motion.p>
        </motion.div>

        <motion.div
          ref={containerRef}
          className="relative w-full"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: CARD_HEIGHT,
            maskImage:
              "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)",
          }}
        >
          {testimonials.map((item, i) => {
            const diff = circularDiff(i, current, n);
            const isActive = diff === 0;
            const isVisible = Math.abs(diff) <= 3;

            const x = centerX + diff * CARD_STRIDE;

            return (
              <motion.div
                key={i}
                className="absolute top-0 flex cursor-pointer flex-col justify-between rounded-2xl p-6"
                style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
                initial={
                  hasEntered
                    ? false
                    : { opacity: 0, y: 32, scale: 0.92 }
                }
                animate={{
                  x,
                  opacity: isVisible ? (isActive ? 1 : Math.max(0, 0.55 - Math.abs(diff) * 0.1)) : 0,
                  scale: isActive ? 1 : 0.96,
                  backgroundColor: isActive ? `${accentColor}18` : "#F9FAFB",
                  y: isActive ? 0 : 4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 30,
                  delay: hasEntered ? 0 : Math.abs(diff) * 0.06,
                }}
                onClick={() => setCurrent(i)}
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl"
                  style={{
                    border: isActive ? `1.5px solid ${accentColor}50` : "1.5px solid #E5E7EB",
                  }}
                />

                <div>
                  <span
                    className="block select-none font-serif leading-none"
                    style={{
                      fontSize: 52,
                      lineHeight: "40px",
                      color: isActive ? accentColor : "#D1D5DB",
                      marginBottom: 6,
                    }}
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  <p
                    className="text-[13.5px] leading-relaxed"
                    style={{ color: isActive ? "#1A1A1A" : "#6B7280" }}
                  >
                    {item.content}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={`https://api.dicebear.com/9.x/notionists/svg?seed=${encodeURIComponent(
                        item.seed || item.name,
                      )}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`}
                      alt={item.name}
                      width={36}
                      height={36}
                      className="rounded-full border-2"
                      style={{
                        borderColor: isActive ? accentColor : "#E5E7EB",
                        backgroundColor: isActive ? `${accentColor}20` : "#F3F4F6",
                      }}
                    />
                    <div>
                      <div
                        className="mb-0.5 text-[13px] font-semibold leading-none"
                        style={{ color: isActive ? "#111827" : "#374151" }}
                      >
                        {item.name}
                      </div>
                      <div className="text-[11px] text-neutral-400">{item.role}</div>
                    </div>
                  </div>
                  <span
                    className="rounded-full px-2 py-0.5 text-[11px] font-bold"
                    style={{
                      backgroundColor: isActive ? accentColor : "#F3F4F6",
                      color: isActive ? "#fff" : "#9CA3AF",
                    }}
                  >
                    5.0 ★
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-8 flex items-center justify-center gap-3 px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.35, ease: "easeOut" }}
        >
          <button
            type="button"
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 transition-all duration-200 hover:bg-neutral-50"
            aria-label="Previous"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6B7280"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="flex items-center gap-1.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? 20 : 6,
                  height: 6,
                  backgroundColor: i === current ? accentColor : "#E5E7EB",
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 transition-all duration-200 hover:bg-neutral-50"
            aria-label="Next"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6B7280"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
