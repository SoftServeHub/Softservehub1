type MaintenanceCard = { title: string; desc: string };

type MaintenanceSupportSectionProps = {
  title?: string;
  subtitle?: string;
  cards?: MaintenanceCard[];
};

export default function MaintenanceSupportSection({
  title,
  subtitle,
  cards = [],
}: MaintenanceSupportSectionProps) {
  if (!title && cards.length === 0) return null;

  return (
    <section
      className="rounded-[32px] border border-[#d4af37]/30 bg-gradient-to-br from-[#fffbeb] via-white to-[#fef3c7]/45 p-8 shadow-[0_20px_60px_rgba(212,175,55,0.1)] md:p-10"
      aria-labelledby="maintenance-support-heading"
    >
      <div className="text-center">
        <h2
          id="maintenance-support-heading"
          className="bg-gradient-to-r from-[#0f172a] via-[#92400e] to-[#d4af37] bg-clip-text text-3xl font-bold text-transparent md:text-4xl"
        >
          {title}
        </h2>
        {subtitle ? (
          <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-[#475569] md:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-6">
        {cards.map((card, idx) => (
          <article
            key={card.title}
            className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[#d4af37]/30 bg-[#e5e7eb] p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#d4af37]/55 hover:shadow-[0_12px_36px_rgba(212,175,55,0.18)] ${
              idx < 3 ? "xl:col-span-2" : "xl:col-span-3"
            }`}
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />
            <h3 className="relative text-xl font-bold text-[#0f172a] md:text-2xl">
              {card.title}
            </h3>
            <p className="relative mt-4 text-base leading-7 text-[#475569] md:text-lg">
              {card.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
