import React, { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { NON_IT_SERVICE_CATEGORIES } from "../../../data/nonItServicesData";
import { NON_IT_HERO_IMAGES } from "../../../data/nonItHeroImages";
import PageSEO from "../../../components/PageSEO";
import BreadcrumbSchema from "../../../components/BreadcrumbSchema";

const NonITServiceCategoryPage: React.FC = () => {
  const { categorySlug } = useParams();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if (document.scrollingElement) document.scrollingElement.scrollTop = 0;

    const container =
      document.querySelector<HTMLElement>("#app-scroll") ||
      document.querySelector<HTMLElement>("[data-scroll-container]");
    if (container) container.scrollTop = 0;
  };

  const category = useMemo(
    () => NON_IT_SERVICE_CATEGORIES.find((c) => c.slug === categorySlug),
    [categorySlug]
  );

  const heroDescription =
    category?.slug === "business-strategy-consulting"
      ? "Strategic advisory services designed to optimize business operations, improve efficiency and drive sustainable long-term growth. We help organizations align processes, technology and decision-making to achieve measurable performance improvements and scalable success."
      : category?.slug === "branding-creative-services"
        ? "Brand identity systems and creative solutions designed to strengthen market presence, improve brand recognition and ensure visual consistency. We help businesses build impactful brand identities through strategic design, creative execution and consistent messaging to drive engagement, trust and long-term growth."
        : category?.slug === "accounting-financial-operations"
          ? "Reliable financial operations support designed to improve accuracy, ensure regulatory compliance and enhance financial reporting. We help businesses streamline accounting processes, maintain data integrity and gain clear financial insights to support better decision-making and sustainable growth."
          : category?.slug === "digital-marketing-services"
            ? "Performance-driven marketing systems designed to accelerate business growth and deliver measurable ROI. We help businesses execute data-driven campaigns, optimize marketing channels and improve conversion performance to maximize visibility, engagement and long-term revenue growth."
            : category?.slug === "staff-augmentation-workforce-solutions"
              ? "Flexible staffing solutions designed to help businesses scale non-IT teams quickly with skilled and qualified professionals. We support efficient workforce expansion through reliable talent sourcing, seamless onboarding and scalable staffing models to improve productivity and meet evolving business demands."
      : category?.desc;

  const [activeSlug, setActiveSlug] = useState<string>("");

  useEffect(() => {
    setActiveSlug("");
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categorySlug]);

  const activeItem = useMemo(() => {
    if (!category) return null;
    const initial = category.items?.[0]?.slug ?? "";
    const slugToUse = activeSlug || initial;
    return (
      category.items.find((i) => i.slug === slugToUse) ??
      category.items[0] ??
      null
    );
  }, [category, activeSlug]);

  const activeCardClass =
    "bg-[#fffbeb] border-[#D4AF37]/55 shadow-[0_0_24px_rgba(212,175,55,0.18)] text-[#0f172a]";

  const inactiveCardClass =
    "bg-white border-[#e2e8f0] text-[#0f172a] hover:bg-[#fafafa] hover:border-[#d4af37]/35";

  const activeDescriptionClass = "text-[#64748b] mt-1 text-sm";

  if (!category) return <Navigate to="/services/non-it" replace />;

  const heroImage =
    (activeItem ? NON_IT_HERO_IMAGES[activeItem.slug] : undefined) ??
    "/non-it-hero/default.webp";

  return (
    <section className="relative min-h-screen bg-[#fffCF0] text-[#1f1605] overflow-hidden">
      <PageSEO
        title={`${category.title} | SoftServe Hub`}
        description={category.desc}
        canonical={`/services/non-it/${category.slug}`}
      />
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Non-IT Services", path: "/services/non-it" },
          { name: category.title, path: `/services/non-it/${category.slug}` },
        ]}
      />
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[900px] h-[900px] bg-[#8a6b18]/16 blur-[180px] rounded-full top-[-280px] left-[-280px]" />
        <div className="absolute w-[900px] h-[900px] bg-[#BFA45F]/16 blur-[180px] rounded-full bottom-[-320px] right-[-320px]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="pt-28 pb-14 px-6 border-b border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="text-sm text-[#64748b] mb-6">
            <Link to="/services" className="hover:text-[#b45309] transition" onClick={scrollToTop}>
              Services
            </Link>
            <span className="mx-2">/</span>
            <Link to="/services/non-it" className="hover:text-[#b45309] transition" onClick={scrollToTop}>
              Non-IT Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#0f172a] font-medium">{category.title}</span>
          </div>

          <div className="rounded-[28px] overflow-hidden border border-[#e2e8f0] bg-white shadow-sm">
            <div className="relative px-8 py-12 md:px-12 md:py-14">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(212,175,55,0.12),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(191,164,95,0.1),transparent_55%)]" />
              <div className="relative text-center">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0f172a]">
                  {category.title}
                </h1>
                <p className="text-[#475569] mt-4 max-w-4xl mx-auto text-lg leading-relaxed">
                  {heroDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Master-detail */}
      <div className="px-6 py-14">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10">
          {/* LEFT NAV */}
          <aside className="lg:col-span-4">
            <div className="rounded-3xl bg-white border border-[#e2e8f0] p-6 shadow-sm">
              <h2 className="text-lg font-bold text-[#b45309]">Services</h2>

              <div className="mt-5 space-y-4">
                {category.items.map((item) => {
                  const isActive = item.slug === activeItem?.slug;
                  return (
                    <button
                      key={item.slug}
                      onClick={() => {
                        setActiveSlug(item.slug);
                        requestAnimationFrame(() => scrollToTop());
                      }}
                        className={[
                        "w-full text-left px-5 py-4 rounded-2xl border transition",
                        isActive ? activeCardClass : inactiveCardClass,
                      ].join(" ")}
                    >
                      <div className="font-semibold">{item.title}</div>
                      <div
                        className={
                          isActive ? activeDescriptionClass : "text-[#64748b] mt-1 text-sm"
                        }
                      >
                        {item.shortDesc}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* RIGHT CONTENT */}
          <main className="lg:col-span-8">
            <div className="rounded-3xl bg-white border border-[#e2e8f0] overflow-hidden shadow-sm">
              <div className="relative h-52 md:h-60">
                <img
                  src={heroImage}
                  alt={activeItem?.title ?? "Service"}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/non-it-hero/default.webp";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#fffCF0]/15 via-[#fffCF0]/35 to-[#fffCF0]/90" />
              </div>

              <div className="p-8 md:p-10">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0f172a]">
                  {activeItem?.title}
                </h2>
                <p className="text-[#475569] mt-4 text-lg leading-relaxed">
                  {activeItem?.shortDesc}
                </p>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {(activeItem?.tags ?? []).map((t) => (
                    <span
                      key={t}
                      className="px-4 py-2 rounded-full text-sm bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#b45309]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-10 flex flex-wrap gap-4">
                  <button
                    onClick={() => {
                      if (!activeItem) return;
                      scrollToTop();
                      navigate(`/services/non-it/${category.slug}/${activeItem.slug}`);
                    }}
                    className="px-8 py-4 rounded-2xl font-semibold bg-[#D4AF37] text-[#1f1605] hover:brightness-110 transition shadow-[0_8px_30px_rgba(212,175,55,0.25)]"
                  >
                    View Service
                  </button>

                  <Link
                    to="/book-appointment"
                    onClick={scrollToTop}
                    className="px-8 py-4 rounded-2xl font-semibold bg-white border border-[#e2e8f0] hover:bg-[#fafafa] hover:border-[#d4af37]/35 transition text-[#0f172a]"
                  >
                    Book Appointment
                  </Link>

                  <Link
                    to="/services/non-it"
                    onClick={scrollToTop}
                    className="px-8 py-4 rounded-2xl font-semibold bg-[#fffbeb] border border-[#d4af37]/35 hover:bg-[#fef3c7] transition text-[#92400e]"
                  >
                    Back to Non-IT
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default NonITServiceCategoryPage;
