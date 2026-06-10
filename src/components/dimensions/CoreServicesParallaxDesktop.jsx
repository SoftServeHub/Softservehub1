import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Fingerprint } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
import { cn } from "../../lib/utils";
import hero1 from "../../images/hero1.webp";

function ParallaxCard({ src, title, description, to = "/services", className }) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border border-[#e2e8f0]/80 shadow-sm",
        className,
      )}
    >
      <img
        src={src}
        alt={title}
        className="h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.02]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f172a]/92 via-[#0f172a]/35 to-transparent opacity-95 transition-opacity group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-6">
        <h3 className="text-base font-bold leading-snug text-white md:text-lg">{title}</h3>
        <p className="mt-2 line-clamp-2 text-xs font-light leading-relaxed text-[#e2e8f0]/95 md:line-clamp-3 md:text-sm">
          {description}
        </p>
        <Link
          to={to}
          className="mt-3 inline-flex w-fit items-center justify-center rounded-full border border-[#d4af37]/70 bg-[#0f172a]/55 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#fef9c7] backdrop-blur-[6px] transition-colors hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-[#0f172a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fef08a]"
        >
          View services
        </Link>
      </div>
    </div>
  );
}

const CARD_HEIGHTS = [
  "h-[360px] sm:h-[380px] md:h-[420px] w-full",
  "h-[240px] sm:h-[260px] md:h-[280px] w-full",
  "h-[300px] sm:h-[320px] md:h-[360px] w-full",
  "h-[280px] sm:h-[300px] md:h-[320px] w-full",
  "h-[320px] sm:h-[340px] md:h-[380px] w-full",
];

export default function CoreServicesParallaxDesktop({ images, services }) {
  const container = useRef(null);
  const col1 = useRef(null);
  const col2 = useRef(null);
  const col3 = useRef(null);

  const slot = (index) => ({
    src: images[index] ?? hero1,
    ...services[index],
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        gsap.to(col1.current, {
          y: -150,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
        gsap.to(col2.current, {
          y: 100,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
        gsap.to(col3.current, {
          y: -250,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="relative z-10 hidden min-h-[115vh] border-t border-[#e2e8f0] bg-white px-4 py-24 md:px-12 lg:block"
    >
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mb-16 flex max-w-7xl flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between"
      >
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-tighter text-[#0f172a] md:text-8xl">
            Our core <br /> <span className="text-[#d4af37]">service</span>
          </h2>
        </div>
        <Link
          to="/services"
          className="inline-flex w-fit shrink-0 items-center justify-center rounded-full border border-[#d4af37]/45 bg-[#fffbeb] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#92400e] shadow-sm transition-colors hover:border-[#d4af37] hover:bg-[#fef3c7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37]"
        >
          View services
        </Link>
      </motion.div>

      <div className="mx-auto grid max-w-7xl grid-cols-3 gap-8">
        <div ref={col1} className="flex flex-col gap-6 pt-20">
          <ParallaxCard {...slot(0)} className={CARD_HEIGHTS[0]} />
          <ParallaxCard {...slot(1)} className={CARD_HEIGHTS[1]} />
        </div>
        <div ref={col2} className="flex flex-col gap-6">
          <ParallaxCard {...slot(2)} className={CARD_HEIGHTS[2]} />
          <div className="flex min-h-[260px] flex-col justify-between rounded-[2rem] border border-[#d4af37]/30 bg-gradient-to-br from-[#fffbeb] to-white p-6 shadow-[0_8px_40px_rgba(212,175,55,0.12)] md:h-[280px] md:p-8">
            <Fingerprint size={32} className="text-[#d4af37]" />
            <p className="font-mono text-xl uppercase tracking-wide text-[#334155]">
              &quot;Great delivery isn&apos;t louder—it&apos;s clearer, calmer and built to
              last.&quot;
            </p>
          </div>
        </div>
        <div ref={col3} className="flex flex-col gap-6 pt-36">
          <ParallaxCard {...slot(3)} className={CARD_HEIGHTS[3]} />
          <ParallaxCard {...slot(4)} className={CARD_HEIGHTS[4]} />
        </div>
      </div>
    </section>
  );
}
