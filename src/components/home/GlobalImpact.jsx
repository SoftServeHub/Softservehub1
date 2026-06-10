import { useRef } from "react";
import { useInView } from "framer-motion";
import Counter from "./Counter";

const IMPACT_METRICS = [
  { id: 1, target: 750, suffix: "+", label: "Projects Delivered" },
  { id: 2, target: 900, suffix: "+", label: "Clients" },
  { id: 3, target: 45, suffix: "+", label: "Countries" },
  { id: 4, target: 2015, suffix: "", label: "Established" },
  { id: 5, target: 4, suffix: "+", label: "Years of Excellence" },
  { id: 6, target: 20, suffix: "+", label: "Ongoing Projects" },
];

const VALUE_POINTS = [
  "Enterprise-grade architecture designed for scalability, resilience and security.",
  "AI-powered automation and analytics that improve operational efficiency and accelerate growth.",
];

export default function GlobalImpact({ embedded = false, copyRef, metricsRef }) {
  const fallbackMetricsRef = useRef(null);
  const mRef = metricsRef ?? fallbackMetricsRef;
  const metricsInView = useInView(mRef, { once: true, amount: 0.25 });

  const content = (
    <div
      className={
        embedded
          ? "bg-transparent p-0 shadow-none border-0 rounded-none backdrop-blur-0"
          : ""
      }
    >
      <div className={embedded ? "relative mx-auto w-full max-w-6xl px-1 sm:px-3" : "relative mx-auto max-w-7xl px-6"}>

        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
          <div ref={copyRef} className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#fffbeb] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[#92400e] sm:text-xs">
              SoftServe Hub
            </span>
            <h2 className="mt-3 font-sans text-2xl font-black leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg,#0f172a 0%,#92400e 40%,#b45309 65%,#d4af37 100%)",
                }}
              >
                Intelligent Digital Transformation
              </span>
            </h2>

            <p className="mt-4 text-justify text-sm leading-relaxed text-[#475569] sm:mt-5 sm:text-base">
              SoftServe Hub delivers cutting-edge AI-driven solutions, enterprise platforms and scalable digital transformation initiatives tailored for modern businesses. Our intelligent automation frameworks enable organizations to accelerate innovation, enhance agility and maintain a competitive edge in an evolving digital landscape.
            </p>

            <p className="mt-3 text-justify text-sm font-semibold leading-relaxed text-[#334155] sm:mt-4 sm:text-base">
              SoftServe Hub provides{" "}
              <span className="font-extrabold text-[#92400e]">48+ services</span> within{" "}
              <span className="font-extrabold text-[#92400e]">48 hours</span> using{" "}
              <span className="text-[#b45309]">AI automation</span>.
            </p>

            <div className="mt-4 space-y-2 sm:mt-5 sm:space-y-3">
              {VALUE_POINTS.map((text, idx) => (
                <p key={idx} className="text-justify text-sm leading-relaxed text-[#475569] sm:text-base">
                  {text}
                </p>
              ))}
            </div>
          </div>

          <div ref={mRef} className="flex flex-col gap-4 sm:gap-5 lg:pt-5">
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {IMPACT_METRICS.map((metric) => (
                <div key={metric.id} className="group relative">
                  <div className="relative flex min-h-[100px] flex-col items-center justify-center overflow-hidden rounded-xl border border-[#d4af37]/45 bg-gradient-to-br from-white via-[#fffbeb] to-[#fef3c7]/55 p-3 text-center shadow-[0_8px_24px_rgba(212,175,55,0.12)] transition-all duration-300 transform-gpu sm:min-h-[125px] sm:rounded-2xl sm:p-5 group-hover:-translate-y-1 group-hover:border-[#d4af37] group-hover:shadow-[0_18px_46px_rgba(212,175,55,0.32)]">
                    <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/70 to-transparent" />
                    <span className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:rounded-2xl" />
                    <span className="pointer-events-none absolute -left-16 top-0 h-full w-14 -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
                    <p className="relative bg-gradient-to-r from-[#92400e] to-[#d4af37] bg-clip-text text-xl font-black leading-none text-transparent transition duration-300 sm:text-3xl">
                      <Counter
                        target={metric.target}
                        suffix={metric.suffix}
                        startFrom={1}
                        active={metricsInView}
                      />
                    </p>
                    <h3 className="relative mt-1.5 text-xs font-bold uppercase tracking-wider leading-snug text-[#334155] transition duration-300 group-hover:text-[#0f172a] sm:mt-2 sm:text-[13px]">
                      {metric.label}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (embedded) {
    return (
      <div className="relative isolate overflow-hidden">
        <div className="relative z-[1]">{content}</div>
      </div>
    );
  }

  return (
    <section className="relative isolate mt-0 overflow-hidden bg-white pb-20 pt-2 text-[#0f172a] sm:pb-24 sm:pt-4 md:pb-28 md:pt-6">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_45%,rgba(15,23,42,0.03),transparent_58%),radial-gradient(circle_at_80%_75%,rgba(212,175,55,0.04),transparent_55%)]" />
      </div>
      <div className="relative z-10">{content}</div>
    </section>
  );
}
