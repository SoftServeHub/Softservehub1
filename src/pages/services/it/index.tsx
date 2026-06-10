import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IT_SERVICE_CATEGORIES } from "../../../data/itServicesData";
import PageSEO from "../../../components/PageSEO";

const ITServices: React.FC = () => {
  const navigate = useNavigate();

  const imageMap: Record<string, string> = {
    "website-web-application-services": "/it-hero/website.webp",
    "mobile-application-development": "/it-hero/android.webp",
    "ai-automation-solutions": "/it-hero/aiot.webp",
    "custom-enterprise-software": "/it-hero/custom-software.webp",
    "cloud-infrastructure-services": "/it-hero/infrastructure.webp",
    "cybersecurity-solutions": "/it-hero/data-protection.webp",
    "staff-augmentation-it-consulting": "/it-hero/integrations.webp",
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" as ScrollBehavior,
    });
  }, []);

  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen bg-[#fffCF0] text-[#1f1605] overflow-hidden pt-28 pb-24 px-4 sm:px-6 lg:px-0">
      <PageSEO
        title="IT Services — Web, Mobile, AI, Cloud & Cybersecurity | SoftServe Hub"
        description="Expert IT services including website development, mobile apps, AI automation, cloud infrastructure, custom enterprise software and cybersecurity solutions."
        canonical="/services/it"
      />
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-60 -left-60 w-[800px] h-[800px] bg-[#D4AF37]/20 blur-[180px] rounded-full" />
        <div className="absolute -bottom-60 -right-60 w-[800px] h-[800px] bg-[#BFA45F]/25 blur-[180px] rounded-full" />

        <div
          className="absolute inset-0 opacity-[0.07]
          bg-[linear-gradient(to_right,#78716c_1px,transparent_1px),linear-gradient(to_bottom,#78716c_1px,transparent_1px)]
          bg-[size:80px_80px]"
        />
      </div>

      <div className="w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            <span className="bg-gradient-to-r from-[#b45309] to-[#D4AF37] bg-clip-text text-transparent">
              IT Services
            </span>
          </h1>

          <p className="text-[#475569] mt-5 max-w-3xl mx-auto text-lg">
            Explore enterprise-grade solutions designed for scalability,
            performance and intelligent automation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 p-6">
          {IT_SERVICE_CATEGORIES.map((cat) => {
            const isActive = activeSlug === cat.slug;

            return (
              <div
                key={cat.slug}
                className={[
                  "relative overflow-hidden rounded-3xl transition-all duration-300 h-full flex flex-col shadow-sm bg-white border",
                  isActive
                    ? "border-[#D4AF37] ring-2 ring-[#D4AF37]/30 shadow-[0_12px_40px_rgba(212,175,55,0.2)]"
                    : "border-[#e2e8f0] hover:border-[#D4AF37]/45",
                ].join(" ")}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-[#f1f5f9]">
                  <img
                    src={imageMap[cat.slug] || "/it-hero/website.webp"}
                    alt={cat.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#fffCF0]/90 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-7 sm:p-9 md:p-10 flex flex-col flex-1">
                  <h3
                    className={[
                      "text-2xl font-bold mb-4 text-[#0f172a]",
                      isActive ? "text-[#b45309]" : "",
                    ].join(" ")}
                  >
                    {cat.title}
                  </h3>

                  <p className="text-[#64748b] leading-relaxed">
                    {cat.desc}
                  </p>

                  <div className="flex-grow" />

                  <div className="mt-4 flex justify-center">
                    <button
                      onClick={() => {
                        setActiveSlug(cat.slug);
                        navigate(`/services/it/${cat.slug}`);
                      }}
                      className={[
                        "px-12 py-3 rounded-full font-semibold transition-all duration-300 border border-[#D4AF37]/60",
                        isActive
                          ? "bg-[#D4AF37] text-[#1f1605]"
                          : "bg-[#fffbeb] text-[#92400e] hover:bg-[#fef3c7]",
                      ].join(" ")}
                    >
                      View more →
                    </button>
                  </div>

                  <div
                    className={[
                      "mt-6 h-[2px] transition-all duration-500",
                      isActive
                        ? "w-full bg-gradient-to-r from-[#D4AF37] to-[#f6df9a]"
                        : "w-0",
                    ].join(" ")}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#f6df9a] bg-clip-text text-transparent">
            Built for Enterprise Innovation
          </h2>

          <button
            onClick={() => navigate("/book-appointment")}
            className="mt-8 px-8 py-3 rounded-full font-semibold
            bg-[#D4AF37] text-black hover:brightness-110 hover:scale-105 transition"
          >
            Book Appointment →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ITServices;
