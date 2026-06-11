import React from "react";
import { Link } from "react-router-dom";
import InteractiveCard from "./InteractiveCard";

export default function NonITServicesCard() {
  return (
    <InteractiveCard className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#BFA45F] rounded-[50px] blur-2xl opacity-30 group-hover:opacity-60 transition" />

      <div className="relative bg-[#fff8e6]/95 backdrop-blur-3xl border border-[#D4AF37]/40 rounded-[50px] p-8 sm:p-10 md:p-16 shadow-[0_0_60px_rgba(212,175,55,0.35)]">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-1 md:order-1 h-[260px] sm:h-[320px] md:h-[380px] rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-inner relative">
            <img
              src="/services/non-it-services.webp"
              alt="Non IT Services"
              loading="lazy"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#fffCF0]/70 to-transparent" />

            <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 text-[#f9eac0] text-base sm:text-xl font-semibold">
              Strategic Business Excellence
            </div>
          </div>

          <div className="order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-[#BFA45F]">
              Non-IT Services
            </h2>

            <p className="text-[#475569] text-base sm:text-lg mb-6 md:mb-8 leading-relaxed">
              Business-focused services designed to accelerate growth, strengthen operations,
              build brands and scale teams.
            </p>

            <ul className="space-y-3 sm:space-y-4 text-[#334155] text-sm sm:text-base">
              <li>◆ Business &amp; Strategy Consulting</li>
              <li>◆ Branding &amp; Creative Services</li>
              <li>◆ Accounting &amp; Financial Operations</li>
              <li>◆ Digital Marketing Services</li>
              <li>◆ Staff Augmentation &amp; Workforce Solutions</li>
            </ul>

            <Link
              to="/services/non-it"
              className="inline-block mt-8 sm:mt-10 px-10 sm:px-12 py-4 rounded-2xl font-semibold bg-gradient-to-r from-[#D4AF37] to-[#BFA45F] text-black hover:scale-105 active:scale-95 transition duration-300 shadow-[0_0_30px_rgba(212,175,55,0.55)]"
            >
              Explore Non-IT Services
            </Link>
          </div>
        </div>
      </div>
    </InteractiveCard>
  );
}
