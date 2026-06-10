import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Box,
  Layers,
  Maximize2,
  Fingerprint,
} from "lucide-react";
import { cn } from "../../lib/utils";
import webDevImg from "../../images/websiteandwebapplicationdevelopment.webp";
import mobileDevImg from "../../images/mobileapplicationdevelopment.webp";
import enterpriseImg from "../../images/customenterprisessoftwaredevelopment.webp";
import aiAutomationImg from "../../images/aiandautomation.webp";
import digitalMarketingImg from "../../images/digitalmarketingservices.webp";
import hero1 from "../../images/hero1.webp";
import navBrandHero from "../../images/Hero.webp";
import CoreServicesParallaxDesktop from "./CoreServicesParallaxDesktop";
import CoreServicesMobileJourney from "../scroll-stack/CoreServicesMobileJourney";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/** Labels for the five “Our core service” parallax images (order: col1 top → bottom, col2, col3 top → bottom). */
const CORE_PARALLAX_SERVICES = [
  {
    title: "Website & Web Application Development",
    description:
      "Responsive sites, portals and web apps engineered for speed, clarity and scale.",
    to: "/services/it/website-web-application-services/website-design-development",
  },
  {
    title: "Mobile Application Development",
    description:
      "Native and cross-platform apps with polished UX and dependable releases.",
    to: "/services/it/mobile-application-development/android-app-development",
  },
  {
    title: "Custom & Enterprise Software",
    description:
      "Bespoke systems and integrations aligned with your workflows and governance.",
    to: "/services/it/custom-enterprise-software/custom-enterprise-software-development",
  },
  {
    title: "AI & Automation Solutions",
    description:
      "Intelligent automation and AI-assisted workflows that save time and reduce error.",
    to: "/services/it/ai-automation-solutions/aiot-solutions",
  },
  {
    title: "Digital Marketing Services",
    description:
      "Brand presence, campaigns and analytics tuned to measurable growth.",
    to: "/services/non-it/digital-marketing-services/lead-generation-campaigns",
  },
];

function ParallaxCard({ src, title, description, to = "/services", className }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2rem] group shadow-sm border border-[#e2e8f0]/80",
        className
      )}
    >
      <img
        src={src}
        alt={title}
        className="h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.02]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f172a]/92 via-[#0f172a]/35 to-transparent opacity-95 transition-opacity group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-6">
        <h3 className="text-base font-bold leading-snug text-white md:text-lg">
          {title}
        </h3>
        <p className="mt-2 line-clamp-2 text-xs font-light leading-relaxed text-[#e2e8f0]/95 md:line-clamp-3 md:text-sm">
          {description}
        </p>
        <Link
          to={to}
          className="mt-3 inline-flex w-fit items-center justify-center rounded-full border border-[#d4af37]/70 bg-[#0f172a]/55 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#fef9c7] backdrop-blur-[6px] transition-colors hover:bg-[#d4af37] hover:text-[#0f172a] hover:border-[#d4af37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fef08a]"
        >
          View services
        </Link>
      </div>
    </div>
  );
}

/** Card heights for “Our core service” — desktop masonry columns. */
const CORE_SERVICE_CARD_HEIGHTS = [
  "h-[360px] sm:h-[380px] md:h-[420px] w-full",
  "h-[240px] sm:h-[260px] md:h-[280px] w-full",
  "h-[300px] sm:h-[320px] md:h-[360px] w-full",
  "h-[280px] sm:h-[300px] md:h-[320px] w-full",
  "h-[320px] sm:h-[340px] md:h-[380px] w-full",
];

function ExplodingBento({ images }) {
  const container = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bento-item", {
        y: 150,
        scale: 0.8,
        rotationX: 45,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="relative isolate z-0 min-h-screen border-t border-[#e2e8f0] bg-white px-6 py-20 pb-28 [perspective:1000px] md:px-12 md:py-32 md:pb-32"
    >
      <div className="mb-24 mx-auto max-w-7xl">
        <h2 className="text-5xl md:text-7xl font-black uppercase text-[#0f172a] tracking-tighter">
          Capabilities
          <br />
          at a glance
        </h2>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-4 md:grid-rows-3 lg:h-[560px]">
        <div className="bento-item md:col-span-2 md:row-span-2 relative overflow-hidden rounded-[2rem] border border-[#d4af37]/25 bg-[#fafafa] group shadow-sm">
          <img
            src={images[5]}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <h3 className="text-4xl font-black text-[#0f172a] uppercase tracking-tighter drop-shadow-sm">
              Flagship delivery
            </h3>
          </div>
        </div>

        <div className="bento-item md:col-span-1 md:row-span-1 rounded-[2rem] border border-[#e2e8f0] bg-white p-5 md:p-6 flex items-center justify-center hover:bg-[#fafafa] transition-colors shadow-sm">
          <div className="flex items-center gap-3">
            <img
              src={navBrandHero}
              alt="SoftServe Hub"
              className="h-11 w-auto shrink-0 rounded-lg object-contain md:h-14"
            />
            <span className="text-left text-base font-bold leading-tight text-[#0f172a] md:text-lg">
              SoftServe <br /> Hub
            </span>
          </div>
        </div>

        <div className="bento-item md:col-span-1 md:row-span-2 rounded-[2rem] border border-[#e2e8f0] bg-[#f8fafc] p-8 text-[#0f172a] flex flex-col justify-between group overflow-hidden relative shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-b from-[#fffbeb]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex justify-between relative z-10">
            <Maximize2
              size={32}
              className="text-[#94a3b8] group-hover:text-[#d4af37] transition-colors"
            />
            <span className="text-sm font-mono tracking-widest text-[#d4af37]">
              SCALE
            </span>
          </div>
          <p className="text-xl text-[#475569] font-light relative z-10 leading-relaxed">
            Staff augmentation, cloud and consulting—structured handoffs so your
            roadmap stays continuous.
          </p>
        </div>

        <div className="bento-item md:col-span-1 md:row-span-1 border border-[#d4af37]/35 rounded-[2rem] bg-[#fffbeb] p-6 md:p-8 flex flex-col items-center justify-center text-center hover:bg-[#fef3c7] transition-colors shadow-sm">
          <Fingerprint size={36} className="text-[#d4af37] mb-3" />
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#92400e]">
            Certified delivery
          </p>
          <p className="mt-2 text-xs leading-relaxed text-[#64748b]">
            Structured handoffs and accountable execution
          </p>
        </div>

        <div className="bento-item md:col-span-2 md:row-span-1 rounded-[2rem] border border-[#e2e8f0] bg-white p-8 flex items-center gap-8 hover:bg-[#fafafa] transition-colors cursor-pointer shadow-sm">
          <div className="h-20 w-20 rounded-2xl bg-[#fffbeb] flex items-center justify-center flex-shrink-0 border border-[#d4af37]/30">
            <Layers className="text-[#d4af37]" size={32} />
          </div>
          <div>
            <h3 className="text-2xl font-black text-[#0f172a] uppercase tracking-tighter">
              Full-stack breadth
            </h3>
            <p className="text-[#64748b] mt-2">
              IT builds, creative, finance ops and strategy—one accountable
              partner model.
            </p>
          </div>
        </div>

        <div className="bento-item md:col-span-1 md:row-span-1 rounded-[2rem] border border-[#e2e8f0] bg-[#f8fafc] flex items-center justify-center shadow-sm">
          <Box
            size={48}
            className="text-[#d4af37]/40 animate-spin-slow"
            strokeWidth={1}
          />
        </div>

        <div className="bento-item md:col-span-1 md:row-span-1 relative overflow-hidden rounded-[2rem] border border-[#e2e8f0] bg-[#fafafa] group shadow-sm">
          <img
            src={images[0]}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-90 transition-all duration-700 group-hover:opacity-100 group-hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
}



const DEFAULT_IMAGES = [
  webDevImg,
  mobileDevImg,
  enterpriseImg,
  aiAutomationImg,
  digitalMarketingImg,
  hero1,
];

export default function DimensionsPage({ images = DEFAULT_IMAGES } = {}) {
  return (
    <div className="bg-white font-sans selection:bg-[#d4af37] selection:text-[#0f172a]">
      <main>
        <CoreServicesMobileJourney images={images} services={CORE_PARALLAX_SERVICES} />
        <CoreServicesParallaxDesktop images={images} services={CORE_PARALLAX_SERVICES} />
        <ExplodingBento images={images} />
      </main>

      <style
        dangerouslySetInnerHTML={{
          __html: `
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }
            `,
        }}
      />
    </div>
  );
}
