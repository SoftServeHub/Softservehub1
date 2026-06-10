import React, { useEffect } from "react";
import PageSEO from "../../components/PageSEO";
import { ServicesHero, ITServicesCard, NonITServicesCard } from "../../components/services";

const Services: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" as ScrollBehavior,
    });
  }, []);

  return (
    <section className="relative min-h-screen bg-[#fffCF0] text-[#1f1605] overflow-hidden">
      <PageSEO
        title="IT & Business Services — Software, AI, Marketing & More | Softserve Hub"
        description="Explore Softserve Hub's full range of IT and non-IT services: web development, AI automation, mobile apps, branding, digital marketing and business consulting."
        canonical="/services"
      />
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(67,56,202,0.5),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(124,58,237,0.45),transparent_45%),radial-gradient(circle_at_50%_90%,rgba(138,107,24,0.4),transparent_45%)]"></div>

      <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-[#D4AF37]/40 rounded-full blur-[200px]"></div>
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-[#BFA45F]/40 rounded-full blur-[200px]"></div>

      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 sm:pt-32 pb-24 sm:pb-32">

        {/* ===== HERO ===== */}
        <ServicesHero />

        {/* ================= IT SERVICES ================= */}
        <ITServicesCard />

        {/* ================= NON-IT SERVICES ================= */}
        <NonITServicesCard />

      </div>
    </section>
  );
};

export default Services;
