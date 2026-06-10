import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useRef } from "react";

const stats = [
  { value: 120, suffix: "+", label: "Projects Delivered" },
  { value: 80, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 5, suffix: "★", label: "Client Rating" },
];

// Apple-style easing
const appleEase = (t) => 1 - Math.pow(1 - t, 3);

export default function StatsSection() {
  return (
    <section className="bg-[#ffffff] py-10">
      <div className="max-w-8xl mx-auto px-6">

        {/* OUTER BOX */}
        <div className="rounded-3xl bg-white border border-[#D4AF37]/25 shadow-[0_30px_80px_rgba(212,175,55,0.15)] px-8 py-14">

          {/* HEADING */}
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-6xl font-extrabold text-[#0f172a]">
              Our <span className="text-[#D4AF37]">Excellence</span>
            </h2>
            <p className="mt-5 text-[#475569] max-w-xl mx-auto">
              Delivering measurable results through innovation, experience, and trust.
            </p>
          </div>

          {/* STATS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => {
              const cardRef = useRef(null);
              const inView = useInView(cardRef, {
                once: true,
                amount: 0.6,
              });

              return (
                <motion.div
                  ref={cardRef}
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.25,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewport={{ once: true }}
                  className="
                    group
                    rounded-4xl
                    bg-[#fff7e6]
                    px-8 py-8
                    border border-[#D4AF37]/20
                    transition-all duration-500
                    hover:shadow-[0_0_35px_rgba(212,175,55,0.45)]
                  "
                >
                  {/* COUNT */}
                  <div className="text-6xl font-extrabold text-[#D4AF37]">
                    {inView ? (
                      <CountUp
                        start={0}
                        end={s.value}
                        duration={1}
                        useEasing={false}
                        suffix={s.suffix}
                        separator=""
                        delay={0}
                        easingFn={(t) => {
                          // Ultra-smooth Apple-style ease-in-out
                          return t < 0.5
                            ? 4 * t * t * t
                            : 1 - Math.pow(-2 * t + 2, 3) / 2;
                        }}
                      />
                    ) : (
                      `0${s.suffix}`
                    )}
                  </div>

                  {/* DIVIDER */}
                  <div className="mx-auto mt-4 mb-3 h-[3px] w-8 bg-[#D4AF37] transition-all duration-500 group-hover:w-14" />

                  {/* LABEL */}
                  <div className="text-[#475569] text-sm font-medium">
                    {s.label}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
