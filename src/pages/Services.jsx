import React from "react";
import ServicesHero from "../components/ServicesHero";
import ITServicesCard from "../components/ITServicesCard";
import NonITServicesCard from "../components/NonITServicesCard";
import AnimatedSection from "../components/AnimatedSection";

export default function Services() {
  return (
    <div className="min-h-screen bg-[#fffCF0] overflow-hidden">
      <ServicesHero />

      <section className="py-16 md:py-24 bg-[#fffCF0] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection><ITServicesCard /></AnimatedSection>
          <AnimatedSection><NonITServicesCard /></AnimatedSection>
        </div>
      </section>
    </div>
  );
}
