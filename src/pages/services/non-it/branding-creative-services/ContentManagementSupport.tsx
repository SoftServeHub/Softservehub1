import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const category = {
  slug: "branding-creative-services",
  title: "Branding & Creative Services",
};

const item = {
  slug: "content-management-support",
  title: "Content Management Support",
  shortDesc:
    "End-to-end content management services to organize, publish, maintain and optimize digital content.",
};

const heroImage = "/non-it-hero/content-management-support.webp";

const renderTechnologyIcon = (icon: string, accent: "blue" | "purple") => {
  const strokeClass = accent === "purple" ? "stroke-[#D4AF37]" : "stroke-[#D4AF37]";

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
    case "marketing":
      return (
        <svg {...commonProps}>
          <path d="M4.5 14.5V9.8a1.8 1.8 0 0 1 1.8-1.8h2.1l6.9-3v14l-6.9-3H6.3a1.8 1.8 0 0 1-1.8-1.8Z" />
          <path d="M8.5 16.2 10 20" />
          <path d="M17.5 9.5a3.5 3.5 0 0 1 0 5" />
          <path d="M19.2 8a6 6 0 0 1 0 8" />
        </svg>
      );
    case "finance":
      return (
        <svg {...commonProps}>
          <rect x="4.5" y="5" width="15" height="14" rx="2.5" />
          <path d="M8 9.5h8" />
          <path d="M8 13h3" />
          <path d="M14.5 12.5c0-1 .8-1.8 1.8-1.8s1.7.5 1.7 1.3c0 .7-.4 1.1-1.1 1.4l-1.2.4c-.8.3-1.2.7-1.2 1.4 0 .9.7 1.6 1.8 1.6s1.8-.7 1.8-1.7" />
        </svg>
      );
    case "hr":
      return (
        <svg {...commonProps}>
          <path d="M16.5 18.5v-1.2a3.3 3.3 0 0 0-3.3-3.3H8.8a3.3 3.3 0 0 0-3.3 3.3v1.2" />
          <circle cx="11" cy="8.5" r="3" />
          <path d="M18.5 9.5h3" />
          <path d="M20 8v3" />
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
  heroTitle: "Content Management Services",
  heroSubtitle:
    "Softserve Hub provides end-to-end content management services that help businesses organize, manage, publish, maintain and optimize digital content across websites, portals, applications and marketing channels. Our approach focuses on structured workflows, content accuracy, publishing consistency, SEO readiness and long-term governance so your digital presence stays relevant, professional and easy to scale.",

  primaryCta: "Manage Content Effectively",
  secondaryCta: "Talk to Us",

  topBlocks: [
    {
      title: "Content Strategy & Planning",
      desc: "We create structured content frameworks, editorial guidelines, publishing plans, taxonomy and governance models that align with business goals, audience expectations and long-term digital growth.",
    },
    {
      title: "Content Publishing & Maintenance",
      desc: "Our team manages content uploads, page updates, formatting, scheduling, metadata handling and version control to keep content consistent, current and professionally maintained across platforms.",
    },
    {
      title: "Content Optimization & Governance",
      desc: "We improve content quality through SEO alignment, compliance checks, review workflows, performance monitoring and lifecycle governance to ensure every content asset delivers ongoing value.",
    },
  ],

  overview:
    "Our content management services help businesses maintain a well-structured and high-quality digital presence across websites, portals, e-commerce platforms, knowledge bases and marketing channels. We support the complete content lifecycle, from planning and organization to publishing, updating, optimization and governance. This ensures your content remains accurate, brand-aligned, easy to navigate, search-friendly and valuable for both users and business operations.",

  projectDuration: {
    title: "Project Execution Excellence",
    subtitle:
      "We deliver strategy-led non-IT solutions focused on business process optimization, operational efficiency and scalable growth.",
    cards: [
      {
        title: "Fast & Strategic Execution",
        label: "Best suited for",
        desc:
          "Structured execution that helps businesses move faster, improve decisions and achieve better performance.",
      },
      {
        title: "What Our Execution Covers",
        label: "What is Included",
        desc:
          "Business analysis, strategic planning, workflow optimization and performance tracking for efficient delivery.",
      },
      {
        title: "Why Businesses Choose Softserve Hub",
        label: "Requirement Condition",
        desc:
          "Expert consulting, transparent approach and scalable solutions that drive growth and long-term success.",
      },
    ],
  },

  deliverTitle: "How We Deliver",
  deliverySteps: [
    {
      title: "Requirement Gathering",
      desc:
        "Understand business objectives, service requirements and expected outcomes so the execution path is aligned from the beginning.",
    },
    {
      title: "Analysis",
      desc:
        "Analyze business needs, market context, current process gaps and key service priorities to define the right improvement direction.",
    },
    {
      title: "Planning & Strategy",
      desc:
        "Define execution strategy, workflow, responsibilities and a structured action plan that keeps implementation practical and measurable.",
    },
  ],

  whoWeAreTitle: "Who We Are",
  whoWeAreText:
    "Softserve Hub delivers structured non-IT consulting and implementation services that improve operations, execution quality and long-term business performance. We combine strategy, process discipline and domain expertise to create clear, measurable business progress.",
  whoWeAreCards: [
    {
      title: "Business-Led Execution",
      desc:
        "We align each engagement with business goals, operational priorities and measurable outcomes instead of generic advisory work.",
    },
    {
      title: "Cross-Functional Expertise",
      desc:
        "Our work spans strategy, marketing, HR, finance, operations and execution planning to support real business change across departments.",
    },
    {
      title: "Long-Term Partnership",
      desc:
        "We stay focused on sustainable improvement through reporting, support, optimization and practical implementation guidance.",
    },
  ],

  technologiesTitle: "Business Analysis, Platforms & Operational Tools",
  technologiesSubtitle:
    "We use proven business frameworks, marketing platforms, finance tools, HR systems and operational optimization methods to deliver practical, scalable and measurable non-IT business solutions.",
  technologies: [
    {
      icon: "strategy",
      title: "Business Analysis & Strategy Tools",
      desc:
        "We use structured analysis, planning and process-design frameworks to evaluate business position, risks, opportunities and measurable performance direction.",
      items: ["SWOT Analysis", "PESTLE Analysis", "Business Model Canvas"],
    },
    {
      icon: "marketing",
      title: "Marketing & Branding Platforms",
      desc:
        "We support campaign planning, reporting, visibility analysis and creative execution using common business marketing platforms.",
      items: ["Google Ads", "Meta Ads Manager", "Google Analytics"],
    },
    {
      icon: "finance",
      title: "Financial & Accounting Tools",
      desc:
        "We work with practical accounting systems and financial planning frameworks to improve visibility, budgeting and cost control.",
      items: ["Tally", "Zoho Books", "QuickBooks"],
    },
    {
      icon: "hr",
      title: "HR & Workforce Management",
      desc:
        "We support people operations through HR systems, recruitment workflows, workforce planning, payroll processes and employee performance tracking.",
      items: [
        "Custom HRMS Platform (Softserve Hub HRMS)",
        "Recruitment & Candidate Tracking (ATS)",
        "Payroll, Attendance & Leave Management",
      ],
    },
    {
      icon: "operations",
      title: "Operations & Process Optimization",
      desc:
        "We apply operational improvement methods and standardization approaches to streamline workflows and improve business efficiency.",
      items: [
        "Lean Methodology",
        "Six Sigma Principles",
        "Business Process Re-engineering (BPR)",
      ],
    },
    {
      icon: "analytics",
      title: "Reporting & Analytics Tools",
      desc:
        "We build reporting structures and analytics workflows that turn operational data into clear dashboards, measurable insights and decision-ready business intelligence.",
      items: ["Power BI", "Tableau", "Business Intelligence (BI) Tools"],
    },
  ],

  architecture: {
    title: "Non-IT Service Delivery Framework",
    intro:
      "Our structured delivery model helps businesses move from requirement clarity to execution, monitoring and ongoing support with transparent milestones and measurable progress.",
    processSteps: [
      {
        icon: "01",
        title: "Requirement gathering",
        desc: "Understand business objectives, service requirements and expected outcomes",
      },
      {
        icon: "02",
        title: "Analysis",
        desc: "Analyze business needs, market context and key service priorities",
      },
      {
        icon: "03",
        title: "Planning & strategy",
        desc: "Define execution strategy, workflow and structured action plan",
      },
      {
        icon: "04",
        title: "Resource allocation",
        desc: "Assign the right team, specialists and operational resources",
      },
    ],
    deliveryCards: [
      {
        icon: "05",
        title: "Execution",
        desc: "Execute services, campaigns, or operational processes efficiently",
      },
      {
        icon: "06",
        title: "Monitoring & optimization",
        desc: "Continuously monitor performance, evaluate results and optimize delivery",
      },
    ],
    closureCard: {
      icon: "07",
      title: "Reporting & support",
      desc: "Provide performance insights, reporting and ongoing support",
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

  whyChooseTitle: "Why Content Management Support",
  whyChoose: [
    {
      title: "Structured content operations",
      desc: "We build organized workflows, approval paths and version control practices that reduce content errors, improve collaboration and keep publishing operations streamlined.",
    },
    {
      title: "Reliable publishing consistency",
      desc: "From regular updates to large-scale content maintenance, we help ensure your information stays current, properly formatted and consistent across all digital touchpoints.",
    },
    {
      title: "SEO-ready and quality-governed delivery",
      desc: "Our content support combines accuracy, search optimization, governance and performance-focused improvements to strengthen visibility, usability and long-term brand trust.",
    },
  ],

  contactTitle: "Talk to Our Content Specialists",
  contactSubtitle:
    "Looking for reliable content management support for your website, portal, or digital platform? Share your requirements with our team and we will help you plan, maintain and optimize your content operations effectively.",
  messageLabel:
    "Tell us about your content management needs, platforms, update frequency, or optimization goals...",
  submitLabel: "Request Content Support",
};

const cardBaseClass =
  "group relative overflow-hidden rounded-2xl border border-[#D4AF37]/30 bg-white/75 p-7 transition-all duration-300 hover:-translate-y-2";

const NonItBrandingCreativeServicesContentManagementSupport: React.FC = () => {
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
                    "/non-it-hero/default.png";
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
                        setActiveTechnology((current) => (current === idx ? null : current))
                      }
                      onFocus={() => setActiveTechnology(idx)}
                      onBlur={() =>
                        setActiveTechnology((current) => (current === idx ? null : current))
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#b45309]">
                {content?.maintenanceSupport?.title}
              </h2>
              <p className="text-[#5b4520] mt-4 max-w-4xl mx-auto leading-relaxed text-base md:text-lg">
                {content?.maintenanceSupport?.subtitle}
              </p>
            </div>

            <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-6 gap-6 items-stretch">
              {(content?.maintenanceSupport?.cards ?? []).map(
                (card: { title: string; desc: string }, idx: number) => (
                  <div
                    key={card.title}
                    className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[#D4AF37]/30 bg-white/75 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#f6df9a]/50 hover:shadow-[0_0_35px_rgba(212,175,55,0.18)] active:-translate-y-1 active:border-[#f6df9a]/60 ${
                      idx < 3 ? "xl:col-span-2" : "xl:col-span-3"
                    }`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f6df9a]/60 to-transparent" />
                    <h3 className="relative text-xl md:text-2xl font-bold text-[#b45309] transition-colors duration-300 group-hover:text-[#1f1605]">
                      {card.title}
                    </h3>
                    <p className="relative mt-3 text-base leading-7 text-[#67552b] transition-colors duration-300 group-hover:text-[#2f2208]">
                      {card.desc}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Framework (optional) */}
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

                <div className="rounded-2xl bg-[linear-gradient(135deg,rgba(212,175,55,0.25),rgba(191,164,95,0.20))] border border-[#D4AF37]/30 p-7 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm uppercase tracking-widest text-[#2f2208]/80">
                      Transformation
                    </div>
                    <div className="mt-2 text-xl font-bold">
                      Strategy • Technology • Operations
                    </div>
                    <div className="text-[#2f2208]/80 mt-2">
                      Governance + measurable KPIs
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
                    <p className="relative text-[#67552b] mt-2 leading-relaxed transition-colors duration-300 group-hover:text-[#2f2208]">
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
              {content?.contactSubtitle ??
                "Share your requirements and our team will reach out."}
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
                  {content?.messageLabel ??
                    "Tell us about your requirements..."}
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

export default NonItBrandingCreativeServicesContentManagementSupport;
