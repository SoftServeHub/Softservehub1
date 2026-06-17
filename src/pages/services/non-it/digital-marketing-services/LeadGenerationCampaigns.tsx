import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const category = {
  slug: "digital-marketing-services",
  title: "Digital Marketing Services",
};

const item = {
  slug: "lead-generation-campaigns",
  title: "Lead Generation Campaigns",
  shortDesc:
    "Strategy-led experience approach to drive better product journeys, clarity and conversion-ready design direction.",
};

const heroImage = "/non-it-hero/lead-generation-campaigns.webp";

const renderTechnologyIcon = (icon: string, accent: "blue" | "purple") => {
  const strokeClass =
    accent === "purple" ? "stroke-[#D4AF37]" : "stroke-[#D4AF37]";

  const commonProps = {
    className: `h-7 w-7 ${strokeClass}`,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (icon) {
    case "strategy":
      return (
        <svg {...commonProps}>
          <path d="M5 18.5h14" />
          <path d="M7 15.5V10" />
          <path d="M12 15.5V6.5" />
          <path d="M17 15.5V12" />
          <path d="M6.5 9.5 12 6l5.5 5" />
        </svg>
      );
    case "ads":
      return (
        <svg {...commonProps}>
          <path d="M4.5 14.5V9.8a1.8 1.8 0 0 1 1.8-1.8h2.1l6.9-3v14l-6.9-3H6.3a1.8 1.8 0 0 1-1.8-1.8Z" />
          <path d="M8.5 16.2 10 20" />
          <path d="M17.5 9.5a3.5 3.5 0 0 1 0 5" />
          <path d="M19.2 8a6 6 0 0 1 0 8" />
        </svg>
      );
    case "crm":
      return (
        <svg {...commonProps}>
          <rect x="4.5" y="5" width="15" height="14" rx="2.5" />
          <path d="M8 9.5h8" />
          <path d="M8 13h4.5" />
          <path d="M14.5 16.5h1.5" />
        </svg>
      );
    case "audience":
      return (
        <svg {...commonProps}>
          <path d="M16.5 18.5v-1.2a3.3 3.3 0 0 0-3.3-3.3H8.8a3.3 3.3 0 0 0-3.3 3.3v1.2" />
          <circle cx="11" cy="8.5" r="3" />
          <path d="M18 10a2.5 2.5 0 1 0 0-5" />
          <path d="M18.5 18.5v-.8a3 3 0 0 0-2.4-2.9" />
        </svg>
      );
    case "operations":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="2.5" />
          <path d="M12 4.5v2.2" />
          <path d="M12 17.3v2.2" />
          <path d="m6.7 6.7 1.6 1.6" />
          <path d="m15.7 15.7 1.6 1.6" />
          <path d="M4.5 12h2.2" />
          <path d="M17.3 12h2.2" />
          <path d="m6.7 17.3 1.6-1.6" />
          <path d="m15.7 8.3 1.6-1.6" />
        </svg>
      );
    case "analytics":
      return (
        <svg {...commonProps}>
          <path d="M5 18.5h14" />
          <path d="M7.5 16V11" />
          <path d="M12 16V7.5" />
          <path d="M16.5 16V9.5" />
          <path d="M6.5 8.5 10 6l3 2 4.5-3" />
        </svg>
      );
    default:
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="7" />
        </svg>
      );
  }
};

const content: any = {
  heroTitle: "Lead Generation Campaigns",
  heroSubtitle:
    "Softserve Hub builds lead generation campaigns that help businesses attract qualified prospects, increase inquiry volume and convert demand into measurable pipeline growth through audience targeting, campaign execution, landing-page alignment and continuous optimization.",

  primaryCta: "Explore Lead Generation",
  secondaryCta: "Talk to Us",

  topBlocks: [
    {
      title: "Audience Targeting & Offer Strategy",
      desc: "We define ideal customer segments, campaign angles, lead magnets and conversion offers that align acquisition activity with business goals and buyer intent.",
    },
    {
      title: "Campaign Launch & Lead Capture",
      desc: "Our team manages ad setup, form strategy, landing-page coordination, funnel flow and lead-capture mechanisms to improve response quality and campaign efficiency.",
    },
    {
      title: "Performance Tracking & Optimization",
      desc: "We monitor channel performance, CPL trends, conversion behavior and response quality to refine campaigns and increase lead generation efficiency over time.",
    },
  ],

  overview:
    "Our lead generation campaign services help businesses create a structured and scalable acquisition engine across digital channels. We support audience analysis, campaign planning, lead magnet strategy, landing-page coordination, ad execution and follow-up workflow design so that lead generation is not just about clicks, but about generating qualified prospects with stronger conversion potential. From campaign launch to reporting and optimization, we help businesses improve inquiry flow, reduce wasted spend and build a more predictable pipeline for sales and growth teams.",

  projectDuration: {
    title: "Project Execution Excellence",
    subtitle:
      "We deliver structured lead generation campaigns focused on audience precision, stronger conversion flow and measurable pipeline growth.",
    cards: [
      {
        title: "Fast & Conversion-Focused Execution",
        label: "Best suited for",
        desc:
          "Businesses that want to launch or improve lead generation campaigns with clearer targeting and better response quality.",
      },
      {
        title: "What Our Execution Covers",
        label: "What is Included",
        desc:
          "Audience targeting, campaign setup, offer positioning, landing-flow alignment, lead capture and optimization support.",
      },
      {
        title: "Why Businesses Choose Softserve Hub",
        label: "Requirement Condition",
        desc:
          "Strategic campaign planning, disciplined execution and data-backed improvements that strengthen lead acquisition performance.",
      },
    ],
  },

  deliverTitle: "How We Deliver",
  deliverySteps: [
    {
      title: "Requirement Gathering",
      desc:
        "Understand target audience, campaign goals, offer positioning, budget expectations and lead qualification priorities before launch.",
    },
    {
      title: "Analysis",
      desc:
        "Analyze buyer intent, channel fit, competitor activity, conversion barriers and current campaign gaps to shape the right acquisition approach.",
    },
    {
      title: "Planning & Strategy",
      desc:
        "Define campaign structure, messaging, targeting logic, landing-page requirements and optimization milestones for structured execution.",
    },
  ],

  whoWeAreTitle: "Who We Are",
  whoWeAreText:
    "Softserve Hub delivers structured digital marketing support that helps businesses build lead pipelines with stronger targeting, better campaign control and measurable acquisition outcomes. We combine strategy, campaign operations and performance analysis to turn marketing activity into qualified business opportunities.",
  whoWeAreCards: [
    {
      title: "Performance-Led Campaign Execution",
      desc:
        "We align every lead generation engagement with business objectives, audience intent and measurable conversion outcomes rather than vanity metrics.",
    },
    {
      title: "Full-Funnel Lead Coordination",
      desc:
        "Our work connects targeting, ad campaigns, landing flows, lead capture and follow-up visibility to improve the quality of generated opportunities.",
    },
    {
      title: "Ongoing Growth Partnership",
      desc:
        "We focus on sustainable lead generation through testing, reporting, optimization and campaign refinement that supports long-term demand generation.",
    },
  ],

  technologiesTitle: "Lead Generation Platforms, Campaign Tools & Analytics",
  technologiesSubtitle:
    "We use proven campaign frameworks, ad platforms, CRM workflows, audience targeting systems and reporting tools to deliver scalable and measurable lead generation performance.",
  technologies: [
    {
      icon: "strategy",
      title: "Campaign Strategy & Funnel Planning",
      desc:
        "We define campaign objectives, offer strategy, buyer journey flow and qualification paths that turn outreach into structured lead generation activity.",
      items: ["Offer Mapping", "Lead Funnel Planning", "Conversion Strategy"],
    },
    {
      icon: "ads",
      title: "Paid Media & Acquisition Platforms",
      desc:
        "We use digital advertising channels to reach relevant audiences, launch targeted campaigns and generate inbound lead opportunities efficiently.",
      items: ["Google Ads", "Meta Ads Manager", "LinkedIn Campaign Manager"],
    },
    {
      icon: "crm",
      title: "Lead Capture & CRM Workflows",
      desc:
        "We structure forms, lead-routing logic and CRM handoff processes so marketing-generated leads are captured, tracked and followed up effectively.",
      items: ["Lead Forms", "HubSpot CRM", "Zoho CRM"],
    },
    {
      icon: "audience",
      title: "Audience Segmentation & Targeting",
      desc:
        "We refine audience groups, messaging relevance and campaign intent signals to improve lead quality and reduce wasted acquisition spend.",
      items: ["Buyer Personas", "Audience Lists", "Intent Segmentation"],
    },
    {
      icon: "operations",
      title: "Conversion Operations & Testing",
      desc:
        "We improve campaign performance with landing-page alignment, CTA refinement, lead magnet positioning and structured A/B testing workflows.",
      items: ["Landing Pages", "CTA Testing", "A/B Experiments"],
    },
    {
      icon: "analytics",
      title: "Reporting & Performance Analytics",
      desc:
        "We track CPL, conversion rate, inquiry quality and campaign efficiency with reporting structures that support faster and better decisions.",
      items: ["Google Analytics", "Looker Studio", "Conversion Dashboards"],
    },
  ],

  architecture: {
    title: "Non-IT Service Delivery Framework",
    intro:
      "Our structured delivery model helps businesses move from campaign clarity to execution, optimization and ongoing support with transparent milestones and measurable progress.",
    processSteps: [
      {
        icon: "01",
        title: "Requirement gathering",
        desc: "Understand campaign goals, audience segments, offers and lead qualification expectations",
      },
      {
        icon: "02",
        title: "Analysis",
        desc: "Analyze demand potential, channel fit, messaging gaps and current lead generation challenges",
      },
      {
        icon: "03",
        title: "Planning & strategy",
        desc: "Define campaign structure, funnel journey, landing-flow requirements and optimization roadmap",
      },
      {
        icon: "04",
        title: "Resource allocation",
        desc: "Assign campaign specialists, creative support, reporting ownership and execution priorities",
      },
    ],
    deliveryCards: [
      {
        icon: "05",
        title: "Execution",
        desc: "Launch campaigns, manage targeting, coordinate lead capture and run acquisition activity efficiently",
      },
      {
        icon: "06",
        title: "Monitoring & optimization",
        desc: "Continuously track lead quality, cost performance, conversion flow and campaign results to optimize delivery",
      },
    ],
    closureCard: {
      icon: "07",
      title: "Reporting & support",
      desc: "Provide performance reporting, pipeline visibility and ongoing campaign improvement support",
    },
  },

  maintenanceSupport: {
    title: "Continuous Business Growth & Support",
    subtitle:
      "We ensure long-term business success through continuous optimization, performance improvement and strategic support that drives measurable growth and operational efficiency.",
    cards: [
      {
        title: "Process Optimization & Business Efficiency",
        desc:
          "Enhance workflows, improve execution quality and drive operational efficiency and productivity growth across business processes.",
      },
      {
        title: "Strategic Refinement & Growth Alignment",
        desc:
          "Continuously refine business strategies based on performance insights to ensure scalability, revenue growth and market adaptability.",
      },
      {
        title: "Performance Monitoring & Business Insights",
        desc:
          "Track KPIs, analyze performance trends and deliver data-driven insights to support better decision-making and measurable business outcomes.",
      },
      {
        title: "Consultation & Operational Excellence",
        desc:
          "Provide expert guidance to improve business decisions, strengthen execution and achieve operational excellence across day-to-day activities.",
      },
      {
        title: "Brand & Market Positioning Support",
        desc:
          "Support branding, communication and market positioning strategies to improve customer trust, engagement and business credibility.",
      },
    ],
  },

  frameworkTitle: "Lead Generation Transformation",
  frameworkSubtitle:
    "Turning inconsistent acquisition activity into a structured lead generation engine with stronger targeting, better conversion flow and measurable pipeline outcomes.",

  beforePoints: [
    "Lead generation efforts running without clear targeting or qualification structure",
    "Weak alignment between campaign messaging, landing pages and conversion goals",
    "Limited visibility into lead quality, cost efficiency and follow-up readiness",
    "Inconsistent optimization causing wasted spend and lower inquiry performance",
  ],

  afterPoints: [
    "More structured campaigns with clearer targeting and stronger offer positioning",
    "Better lead capture flow between ads, landing pages, forms and follow-up systems",
    "Improved visibility into lead quality, CPL and conversion performance",
    "Stronger coordination between marketing execution and business growth goals",
  ],

  whyChooseTitle: "Why Lead Generation Campaigns",
  whyChoose: [
    {
      title: "Targeted acquisition strategy",
      desc: "We build lead generation campaigns around audience intent, offer clarity and conversion goals so acquisition efforts stay focused on qualified opportunities.",
    },
    {
      title: "Stronger lead capture coordination",
      desc: "Our work connects ads, landing pages, forms and reporting workflows so generated leads move through a cleaner and more measurable funnel.",
    },
    {
      title: "Continuous optimization support",
      desc: "We improve campaign performance through testing, reporting, audience refinement and disciplined optimization that supports long-term growth.",
    },
  ],

  contactTitle: "Grow Your Lead Pipeline",
  contactSubtitle:
    "Looking to improve product usability, align experience strategy, or build stronger design systems? Let’s discuss how our lead design services can support your product and business goals.",

  messageLabel:
    "Tell us about your audience, campaign goals, channels, or lead targets...",
  submitLabel: "Request Campaign Support",
};

const cardBaseClass =
  "group relative overflow-hidden rounded-2xl border border-[#D4AF37]/30 bg-white/75 p-7 transition-all duration-300 hover:-translate-y-2";

const NonItDigitalMarketingServicesLeadGenerationCampaigns: React.FC = () => {
  const technologies = content?.technologies ?? [];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [activeTechnology, setActiveTechnology] = useState<number | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ Submitted (frontend demo). Connect backend/API later.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="service-detail-page relative min-h-screen bg-[#fffCF0] text-[#1f1605] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[900px] h-[900px] bg-[#8a6b18]/16 blur-[180px] rounded-full top-[-280px] left-[-280px]" />
        <div className="absolute w-[900px] h-[900px] bg-[#BFA45F]/16 blur-[180px] rounded-full bottom-[-320px] right-[-320px]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* HERO */}
      <div className="pt-28 pb-16 px-6 border-b border-[#D4AF37]/30">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="text-sm text-[#67552b] mb-6">
            <Link to="/services" className="hover:text-[#D4AF37] transition">
              Services
            </Link>
            <span className="mx-2">/</span>
            <Link
              to="/services/non-it"
              className="hover:text-[#D4AF37] transition"
            >
              Non-IT Services
            </Link>
            <span className="mx-2">/</span>
            <Link
              to={"/services/non-it/" + category.slug}
              className="hover:text-[#D4AF37] transition"
            >
              {category.title}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#2f2208]">{item.title}</span>
          </div>

          <div className="rounded-[32px] overflow-hidden border border-[#D4AF37]/30 bg-white/70 backdrop-blur-2xl">
            <div className="relative h-56 md:h-72">
              <img
                src={heroImage}
                alt={item.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "/non-it-hero/default.webp";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#fffCF0]/25 via-[#fffCF0]/55 to-[#fffCF0]/95" />
            </div>

            <div className="relative px-8 py-12 md:px-14 md:py-14">
              <div className="relative text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                  {content?.heroTitle ?? item.title}
                </h1>
                <p className="text-[#5b4520] mt-6 max-w-4xl mx-auto text-lg leading-relaxed">
                  {content?.heroSubtitle ??
                    item.shortDesc ??
                    "High-impact delivery with clarity, discipline and measurable outcomes."}
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to="/book-appointment"
                    className="px-8 py-4 rounded-2xl font-semibold bg-[#8a6b18] hover:bg-[#8a6b18] transition shadow-[0_0_40px_rgba(138,107,24,0.35)]"
                  >
                    {content?.primaryCta ?? "Get Started"}
                  </Link>
                  <a
                    href="#contact"
                    className="px-8 py-4 rounded-2xl font-semibold bg-white/70 border border-[#D4AF37]/30 hover:bg-white/80 transition"
                  >
                    {content?.secondaryCta ?? "Talk to Us"}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick blocks */}
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {(content?.topBlocks ?? []).map(
              (b: { title: string; desc: string }) => (
                <div
                  key={b.title}
                  className="group relative overflow-hidden rounded-2xl border border-[#D4AF37]/30 bg-white/70 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#f6df9a]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.16)]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <h3 className="relative text-xl font-bold text-[#b45309] transition-colors duration-300 group-hover:text-[#1f1605]">
                    {b.title}
                  </h3>
                  <p className="relative mt-3 leading-relaxed text-[#67552b] transition-colors duration-300 group-hover:text-[#2f2208]">
                    {b.desc}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="px-6 py-16">
        <div className="max-w-6xl mx-auto space-y-14">
          {/* Overview */}
          <div className="rounded-3xl bg-white/70 border border-[#D4AF37]/30 p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#8a6b18]">
              Overview
            </h2>
            <p className="text-[#5b4520] mt-4 leading-relaxed text-lg">
              {content?.overview ??
                "We deliver structured services with measurable business outcomes and operational clarity."}
            </p>
          </div>

          <div className="rounded-3xl bg-white/70 border border-[#D4AF37]/30 p-10">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#8a6b18]">
                {content?.projectDuration?.title}
              </h2>
              <p className="text-[#5b4520] mt-4 max-w-3xl mx-auto leading-relaxed text-lg">
                {content?.projectDuration?.subtitle}
              </p>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {(content?.projectDuration?.cards ?? []).map(
                (card: { title: string; label: string; desc: string }) => (
                  <div
                    key={card.title}
                    className={`${cardBaseClass} hover:border-[#D4AF37]/50 hover:shadow-[0_0_32px_rgba(191,164,95,0.18)]`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(191,164,95,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative text-sm font-semibold uppercase tracking-[0.18em] text-[#92400e]">
                      {card.label}
                    </div>
                    <h3 className="relative mt-4 text-xl font-bold text-[#8a6b18] transition-colors duration-300 group-hover:text-[#1f1605]">
                      {card.title}
                    </h3>
                    <p className="relative mt-3 text-[#67552b] transition-colors duration-300 group-hover:text-[#2f2208]">
                      {card.desc}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="rounded-3xl bg-white/70 border border-[#D4AF37]/30 p-10">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#b45309]">
                {content?.deliverTitle}
              </h2>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {(content?.deliverySteps ?? []).map(
                (step: { title: string; desc: string }, index: number) => (
                  <div
                    key={step.title}
                    className={`${cardBaseClass} hover:border-[#f6df9a]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.16)]`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative text-sm font-semibold text-[#92400e]">
                      0{index + 1}
                    </div>
                    <h3 className="relative mt-4 text-xl font-bold text-[#b45309] transition-colors duration-300 group-hover:text-[#1f1605]">
                      {step.title}
                    </h3>
                    <p className="relative mt-3 text-[#67552b] transition-colors duration-300 group-hover:text-[#2f2208]">
                      {step.desc}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="rounded-3xl bg-white/70 border border-[#D4AF37]/30 p-10">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#8a6b18]">
                {content?.whoWeAreTitle}
              </h2>
              <p className="text-[#5b4520] mt-4 max-w-4xl mx-auto leading-relaxed text-lg">
                {content?.whoWeAreText}
              </p>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {(content?.whoWeAreCards ?? []).map(
                (card: { title: string; desc: string }) => (
                  <div
                    key={card.title}
                    className={`${cardBaseClass} hover:border-[#D4AF37]/50 hover:shadow-[0_0_32px_rgba(191,164,95,0.18)]`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(191,164,95,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <h3 className="relative text-xl font-bold text-[#8a6b18] transition-colors duration-300 group-hover:text-[#1f1605]">
                      {card.title}
                    </h3>
                    <p className="relative mt-3 text-[#67552b] transition-colors duration-300 group-hover:text-[#2f2208]">
                      {card.desc}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="rounded-3xl bg-white/70 border border-[#D4AF37]/30 p-10">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#b45309]">
                {content?.technologiesTitle}
              </h2>
              <p className="text-[#5b4520] mt-5 max-w-4xl mx-auto text-base md:text-xl leading-8">
                {content?.technologiesSubtitle}
              </p>
            </div>

            <div className="mt-12 grid items-start md:grid-cols-2 xl:grid-cols-3 gap-6">
              {technologies.map(
                (
                  tech: {
                    icon: string;
                    title: string;
                    desc: string;
                    items: string[];
                  },
                  idx: number
                ) => {
                  const isActive = activeTechnology === idx;

                  return (
                    <button
                      key={tech.title}
                      type="button"
                      onMouseEnter={() => setActiveTechnology(idx)}
                      onMouseLeave={() =>
                        setActiveTechnology((current) =>
                          current === idx ? null : current
                        )
                      }
                      onFocus={() => setActiveTechnology(idx)}
                      onBlur={() =>
                        setActiveTechnology((current) =>
                          current === idx ? null : current
                        )
                      }
                      onClick={() =>
                        setActiveTechnology((current) =>
                          current === idx ? null : idx
                        )
                      }
                      aria-expanded={isActive}
                      className={`group relative flex min-h-[132px] self-start flex-col overflow-hidden rounded-[24px] border bg-white/75/95 p-5 text-left transition-all duration-300 shadow-[0_0_30px_rgba(76,29,149,0.08)] ${
                        isActive
                          ? "border-[#D4AF37]/60 -translate-y-1 shadow-[0_0_35px_rgba(212,175,55,0.16)] xl:min-h-[300px]"
                          : "border-[#D4AF37]/30 hover:-translate-y-1 hover:border-[#f6df9a]/40"
                      }`}
                    >
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f6df9a]/60 to-transparent" />
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 min-w-11 items-center justify-center rounded-xl border border-[#f6df9a]/30 bg-[#8a6b18]/10 text-[#b45309] shadow-[0_0_24px_rgba(212,175,55,0.12)] transition-all duration-300">
                          {renderTechnologyIcon(tech.icon, "blue")}
                        </div>
                        <div className="flex min-h-[56px] items-center">
                          <h3 className="text-lg font-extrabold leading-tight text-[#b45309] transition-colors">
                            {tech.title}
                          </h3>
                        </div>
                      </div>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isActive
                            ? "mt-5 max-h-[420px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-[#67552b] leading-7 text-base md:text-lg">
                          {tech.desc}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                          {tech.items.map((itemName: string) => (
                            <span
                              key={itemName}
                              className="px-3 py-2 rounded-xl bg-white/70 border border-[#D4AF37]/30 text-sm md:text-base text-[#2f2208]"
                            >
                              {itemName}
                            </span>
                          ))}
                        </div>
                      </div>
                    </button>
                  );
                }
              )}
            </div>
          </div>

          <div className="rounded-[32px] bg-white/70 border border-[#D4AF37]/30 p-8 md:p-10">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-[#8a6b18]">
                {content?.architecture?.title}
              </h2>
              <p className="text-[#5b4520] mt-5 max-w-4xl mx-auto text-base md:text-xl leading-8">
                {content?.architecture?.intro}
              </p>
            </div>

            <div className="mt-10 hidden xl:block">
              <div className="mx-auto max-w-[1280px] rounded-[34px] border border-[#D4AF37]/30 bg-[#fffbeb] p-8 shadow-[0_20px_70px_rgba(15,23,42,0.45)]">
                <div className="grid grid-cols-[0.9fr_1.1fr] gap-6">
                  <div className="space-y-5">
                    {(content?.architecture?.processSteps ?? []).map(
                      (step: { icon: string; title: string; desc: string }, idx: number) => (
                        <React.Fragment key={step.title}>
                          <div className="group relative overflow-hidden rounded-[26px] border border-[#D4AF37]/30 bg-white/75 px-6 py-6 shadow-[0_10px_24px_rgba(15,23,42,0.2)] transition-all duration-300 hover:border-[#f6df9a]/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.16)]">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f6df9a]/60 to-transparent" />
                            <div className="flex items-start gap-4">
                              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] border border-[#f6df9a]/20 bg-[#8a6b18]/10 text-xl font-bold text-[#b45309]">
                                {step.icon}
                              </div>
                              <div className="relative">
                                <div className="text-[20px] font-bold leading-tight text-[#3b2a08]">
                                  {step.title}
                                </div>
                                <div className="mt-2 text-[16px] leading-7 text-[#67552b]">
                                  {step.desc}
                                </div>
                              </div>
                            </div>
                          </div>
                          {idx < (content?.architecture?.processSteps?.length ?? 0) - 1 ? (
                            <div className="text-center text-[28px] leading-none text-[#b45309]">
                              ↓
                            </div>
                          ) : null}
                        </React.Fragment>
                      )
                    )}
                  </div>

                    <div className="space-y-8">
                    <div className="rounded-[30px] border border-[#D4AF37]/30 bg-white/75 p-6 shadow-[0_10px_24px_rgba(15,23,42,0.2)]">
                      <div className="w-fit rounded-full bg-gradient-to-r from-[#8a6b18] to-[#BFA45F] px-8 py-3 text-xl font-bold text-[#1f1605] shadow-[0_0_28px_rgba(212,175,55,0.2)]">
                        Delivery
                      </div>

                      <div className="mt-6 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                        {(content?.architecture?.deliveryCards ?? []).map(
                          (card: { icon: string; title: string; desc: string }, index: number) => (
                            <React.Fragment key={card.title}>
                              <div className="group relative overflow-hidden rounded-[22px] border border-[#D4AF37]/30 bg-[linear-gradient(180deg,rgba(255,248,230,0.95),rgba(255,252,240,0.98))] p-6 transition-all duration-300 hover:border-[#D4AF37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.14)]">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_58%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                <div className="text-[18px] font-bold text-[#8a6b18]">{card.icon}</div>
                                <div className="mt-3 text-[22px] font-bold leading-tight text-[#3b2a08]">
                                  {card.title}
                                </div>
                                <div className="mt-2 text-[16px] leading-7 text-[#67552b]">
                                  {card.desc}
                                </div>
                              </div>
                              {index === 0 ? (
                                <div className="text-3xl text-[#92400e]">→</div>
                              ) : null}
                            </React.Fragment>
                          )
                        )}
                      </div>

                      <div className="mt-6 border-t border-dashed border-[#D4AF37]/30 pt-3 text-center text-[16px] text-[#b45309]/70">
                        review & updates
                      </div>
                      <div className="text-center text-[28px] text-[#b45309]">↓</div>
                    </div>

                    <div className="rounded-[30px] border border-[#D4AF37]/30 bg-white/75 p-6 shadow-[0_10px_24px_rgba(15,23,42,0.2)]">
                      <div className="w-fit rounded-full bg-gradient-to-r from-[#BFA45F] to-[#D4AF37] px-8 py-3 text-xl font-bold text-slate-950 shadow-[0_0_28px_rgba(96,165,250,0.16)]">
                        Closure
                      </div>

                      <div className="mt-6 rounded-[22px] border border-[#D4AF37]/30 bg-[linear-gradient(180deg,rgba(255,248,230,0.95),rgba(255,252,240,0.98))] p-6">
                        <div className="text-[18px] font-bold text-[#b45309]">
                          {content?.architecture?.closureCard?.icon}
                        </div>
                        <div className="mt-3 text-[22px] font-bold leading-tight text-[#3b2a08]">
                          {content?.architecture?.closureCard?.title}
                        </div>
                        <div className="mt-2 text-[16px] leading-7 text-[#67552b]">
                          {content?.architecture?.closureCard?.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 xl:hidden">
              <div className="space-y-4">
                {(content?.architecture?.processSteps ?? []).map(
                  (step: { icon: string; title: string; desc: string }, idx: number) => (
                    <React.Fragment key={step.title}>
                      <div className="group relative overflow-hidden rounded-[22px] border border-[#D4AF37]/30 bg-white/75 p-5 shadow-[0_10px_24px_rgba(15,23,42,0.2)] transition-all duration-300 hover:border-[#f6df9a]/40">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="flex items-start gap-4">
                          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#f6df9a]/20 bg-[#8a6b18]/10 text-sm font-bold text-[#b45309]">
                            {step.icon}
                          </div>
                          <div className="relative">
                            <h3 className="text-lg font-semibold text-[#3b2a08]">
                              {step.title}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-[#67552b]">
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                      {idx < (content?.architecture?.processSteps?.length ?? 0) - 1 ? (
                        <div className="text-center text-xl text-[#b45309]">↓</div>
                      ) : null}
                    </React.Fragment>
                  )
                )}
              </div>

              <div className="mt-6 space-y-5">
                <div className="rounded-[26px] border border-[#D4AF37]/30 bg-white/75 p-6 shadow-[0_10px_24px_rgba(15,23,42,0.2)]">
                  <div className="w-fit rounded-full bg-gradient-to-r from-[#8a6b18] to-[#BFA45F] px-6 py-2 text-base font-bold text-[#1f1605]">
                    Delivery
                  </div>
                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    {(content?.architecture?.deliveryCards ?? []).map(
                      (card: { icon: string; title: string; desc: string }) => (
                        <div
                          key={card.title}
                          className="group relative overflow-hidden rounded-[22px] border border-[#D4AF37]/30 bg-[linear-gradient(180deg,rgba(255,248,230,0.95),rgba(255,252,240,0.98))] p-5 transition-all duration-300 hover:border-[#D4AF37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.14)]"
                        >
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_58%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          <div className="relative text-base font-bold text-[#8a6b18]">{card.icon}</div>
                          <div className="relative mt-3 text-xl font-bold text-[#3b2a08]">
                            {card.title}
                          </div>
                          <p className="relative mt-2 text-base leading-7 text-[#67552b]">
                            {card.desc}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="text-center text-2xl text-[#b45309]">↓</div>

                <div className="rounded-[26px] border border-[#D4AF37]/30 bg-white/75 p-6 shadow-[0_10px_24px_rgba(15,23,42,0.2)]">
                  <div className="w-fit rounded-full bg-gradient-to-r from-[#BFA45F] to-[#D4AF37] px-6 py-2 text-base font-bold text-slate-950">
                    Closure
                  </div>
                  <div className="mt-5 rounded-[22px] border border-[#D4AF37]/30 bg-[linear-gradient(180deg,rgba(255,248,230,0.95),rgba(255,252,240,0.98))] p-5">
                    <div className="text-base font-bold text-[#b45309]">
                      {content?.architecture?.closureCard?.icon}
                    </div>
                    <div className="mt-3 text-xl font-bold text-[#3b2a08]">
                      {content?.architecture?.closureCard?.title}
                    </div>
                    <p className="mt-2 text-base leading-7 text-[#67552b]">
                      {content?.architecture?.closureCard?.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="service-maintenance-theme rounded-[32px] border border-[#d4af37]/30 bg-gradient-to-br from-[#fffbeb] via-white to-[#fef3c7]/50 p-8 md:p-10 shadow-[0_20px_60px_rgba(212,175,55,0.1)]">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#b45309]">
                {content?.maintenanceSupport?.title}
              </h2>
              <p className="text-[#5b4520] mt-4 max-w-4xl mx-auto leading-relaxed text-lg">
                {content?.maintenanceSupport?.subtitle}
              </p>
            </div>

            <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-6 gap-6">
              {(content?.maintenanceSupport?.cards ?? []).map(
                (card: { title: string; desc: string }, idx: number) => (
                  <div
                    key={card.title}
                    className={`${cardBaseClass} hover:border-[#f6df9a]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.16)] ${
                      idx < 3 ? "xl:col-span-2" : "xl:col-span-3"
                    }`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
                    <h3 className="relative text-xl font-bold text-[#b45309] transition-colors duration-300 group-hover:text-[#1f1605]">
                      {card.title}
                    </h3>
                    <p className="relative mt-3 text-[#67552b] transition-colors duration-300 group-hover:text-[#2f2208]">
                      {card.desc}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Framework */}
          {(content?.frameworkTitle ||
            content?.beforePoints ||
            content?.afterPoints) && (
            <div className="rounded-3xl bg-white/70 border border-[#D4AF37]/30 p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#8a6b18]">
                {content?.frameworkTitle ?? "Framework"}
              </h2>
              {content?.frameworkSubtitle && (
                <p className="text-[#67552b] mt-3">{content.frameworkSubtitle}</p>
              )}

              <div className="mt-8 grid md:grid-cols-3 gap-6 items-stretch">
                <div className="rounded-2xl bg-white/75 border border-[#D4AF37]/30 p-7">
                  <h3 className="text-lg font-bold text-red-300">Before</h3>
                  <ul className="mt-4 space-y-3 text-[#5b4520]">
                    {(content?.beforePoints ?? []).map((p: string) => (
                      <li key={p} className="flex gap-3">
                        <span className="text-red-300">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="group relative overflow-hidden rounded-2xl border border-[#D4AF37]/30 bg-[linear-gradient(180deg,rgba(77,91,160,0.45),rgba(58,44,98,0.65))] p-7 shadow-[0_10px_24px_rgba(15,23,42,0.2)] flex items-center justify-center">
                  <div className="text-center max-w-sm">
                    <div className="text-sm md:text-base uppercase tracking-[0.2em] text-[#2f2208]/90">
                      Transformation
                    </div>
                    <div className="mt-4 flex flex-col items-center gap-2 text-3xl md:text-[2.1rem] font-bold leading-tight text-[#1f1605]">
                      <span>Clarity</span>
                      <span>Consistency</span>
                      <span>Scale</span>
                    </div>
                    <div className="mt-4 text-lg md:text-xl text-[#2f2208]/90">
                      Structured lead generation with stronger product direction
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/75 border border-[#D4AF37]/30 p-7">
                  <h3 className="text-lg font-bold text-green-300">After</h3>
                  <ul className="mt-4 space-y-3 text-[#5b4520]">
                    {(content?.afterPoints ?? []).map((p: string) => (
                      <li key={p} className="flex gap-3">
                        <span className="text-green-300">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Why choose us */}
          <div className="rounded-3xl bg-white/70 border border-[#D4AF37]/30 p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#b45309]">
              {content?.whyChooseTitle ?? "Why Choose Us"}
            </h2>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {(content?.whyChoose ?? []).map(
                (w: { title: string; desc: string }) => (
                  <div
                    key={w.title}
                    className={`${cardBaseClass} hover:border-[#D4AF37]/50 hover:shadow-[0_0_32px_rgba(191,164,95,0.18)]`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(191,164,95,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <h3 className="relative text-lg font-bold text-[#8a6b18] transition-colors duration-300 group-hover:text-[#1f1605]">
                      {w.title}
                    </h3>
                    <p className="relative mt-2 leading-relaxed text-[#67552b] transition-colors duration-300 group-hover:text-[#2f2208]">
                      {w.desc}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Contact */}
          <div
            id="contact"
            className="rounded-3xl bg-white/70 border border-[#D4AF37]/30 p-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#8a6b18]">
              {content?.contactTitle ?? "Tell us about your project"}
            </h2>
            <p className="text-[#67552b] mt-3">
              Looking to improve lead quality, campaign efficiency, or pipeline
              growth? Share your goals with our team and we will help you plan
              and optimize a stronger lead generation strategy.
            </p>

            <form onSubmit={onSubmit} className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="md:col-span-1">
                <label className="text-sm text-[#5b4520]">Your name*</label>
                <input
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  required
                  className="mt-2 w-full px-4 py-3 rounded-xl bg-white/75 border border-[#D4AF37]/30 outline-none focus:border-[#BFA45F]"
                />
              </div>

              <div className="md:col-span-1">
                <label className="text-sm text-[#5b4520]">Your email*</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  required
                  className="mt-2 w-full px-4 py-3 rounded-xl bg-white/75 border border-[#D4AF37]/30 outline-none focus:border-[#BFA45F]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm text-[#5b4520]">
                  {content?.messageLabel ?? "Tell us about your requirements..."}
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  rows={5}
                  className="mt-2 w-full px-4 py-3 rounded-xl bg-white/75 border border-[#D4AF37]/30 outline-none focus:border-[#BFA45F]"
                />
              </div>

              <div className="md:col-span-2 flex flex-wrap gap-4">
                <button
                  type="submit"
                  className="px-8 py-4 rounded-2xl bg-[#8a6b18] hover:bg-[#8a6b18] transition font-semibold"
                >
                  {content?.submitLabel ?? "Submit"}
                </button>

                <Link
                  to={"/services/non-it/" + category.slug}
                  className="px-8 py-4 rounded-2xl bg-white/70 border border-[#D4AF37]/30 hover:bg-white/80 transition font-semibold"
                >
                  Back to {category.title}
                </Link>
              </div>
            </form>

            <p className="text-gray-500 text-sm mt-6">
              Explore our complete range of Non-IT Services for business growth
              and operations excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NonItDigitalMarketingServicesLeadGenerationCampaigns;
