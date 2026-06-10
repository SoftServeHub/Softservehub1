import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import { cn } from "../../lib/utils";

function ServiceStackCard({ src, title, description, to }) {
  return (
    <div className="relative h-full min-h-[320px] w-full overflow-hidden rounded-[2rem] border border-[#e2e8f0]/80 shadow-[0_28px_70px_rgba(15,23,42,0.12)]">
      <img src={src} alt={title} className="absolute inset-0 h-full w-full object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f172a]/92 via-[#0f172a]/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8">
        <h3 className="text-xl font-bold leading-snug text-white md:text-2xl">{title}</h3>
        <p className="mt-2 text-sm font-light leading-relaxed text-[#e2e8f0]/95 md:text-base">
          {description}
        </p>
        <Link
          to={to}
          className="mt-4 inline-flex w-fit items-center justify-center rounded-full border border-[#d4af37]/70 bg-[#0f172a]/55 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#fef9c7] backdrop-blur-[6px] transition-colors hover:bg-[#d4af37] hover:text-[#0f172a]"
        >
          View services
        </Link>
      </div>
    </div>
  );
}

export default function CoreServicesScrollStack({ images, services }) {
  const slot = (index) => ({
    src: images[index],
    ...services[index],
  });

  return (
    <section className="relative isolate z-0 overflow-hidden border-t border-[#e2e8f0] bg-white py-16 pb-8 lg:hidden md:py-24 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mb-10 flex max-w-7xl flex-col gap-6 px-4 md:mb-14 md:flex-row md:items-end md:justify-between md:px-12"
      >
        <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-tighter text-[#0f172a] md:text-8xl">
          Our core <br /> <span className="text-[#d4af37]">service</span>
        </h2>
        <Link
          to="/services"
          className="inline-flex w-fit shrink-0 items-center justify-center rounded-full border border-[#d4af37]/45 bg-[#fffbeb] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#92400e] shadow-sm transition-colors hover:border-[#d4af37] hover:bg-[#fef3c7]"
        >
          View services
        </Link>
      </motion.div>

      <ScrollStack
        useWindowScroll
        smoothScroll={false}
        className="mx-auto max-w-3xl"
        itemDistance={72}
        itemStackDistance={24}
        stackPosition="18%"
        scaleEndPosition="12%"
        baseScale={0.88}
        itemScale={0.035}
        blurAmount={2}
      >
        {services.map((_, idx) => {
          const card = slot(idx);
          return (
            <ScrollStackItem
              key={card.title}
              itemClassName={cn(
                "!my-0 h-[min(420px,72vh)] max-h-[520px] !p-0 overflow-hidden rounded-[2rem]",
              )}
            >
              <ServiceStackCard {...card} />
            </ScrollStackItem>
          );
        })}
      </ScrollStack>
    </section>
  );
}
