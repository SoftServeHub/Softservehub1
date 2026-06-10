import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const category = {
  slug: "business-strategy-consulting",
  title: "Business & Strategy Consulting",
};

const item = {
  slug: "operational-efficiency-consulting",
  title: "Operational Efficiency Consulting",
  shortDesc:
    "Eliminate inefficiencies, improve productivity and build KPI-driven operational systems for sustainable business growth.",
};

const heroImage = "/non-it-hero/operational-efficiency-consulting.webp";

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
    case "frontend":
      return (
        <svg {...commonProps}>
          <rect x="3.5" y="5" width="17" height="12" rx="2.5" />
          <path d="M8 20h8" />
          <path d="M10 17v3" />
          <path d="M14 17v3" />
          <path d="m10 9-2 2 2 2" />
          <path d="m14 9 2 2-2 2" />
        </svg>
      );
    case "backend":
      return (
        <svg {...commonProps}>
          <rect x="5" y="4" width="14" height="6" rx="2" />
          <rect x="5" y="14" width="14" height="6" rx="2" />
          <path d="M8 7h.01" />
          <path d="M8 17h.01" />
          <path d="M11 7h5" />
          <path d="M11 17h5" />
          <path d="M12 10v4" />
        </svg>
      );
    case "database":
      return (
        <svg {...commonProps}>
          <ellipse cx="12" cy="6.5" rx="6.5" ry="2.8" />
          <path d="M5.5 6.5v5c0 1.55 2.9 2.8 6.5 2.8s6.5-1.25 6.5-2.8v-5" />
          <path d="M5.5 11.5v5c0 1.55 2.9 2.8 6.5 2.8s6.5-1.25 6.5-2.8v-5" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...commonProps}>
          <path d="M7.5 18.5h9a4 4 0 0 0 .4-8A5.5 5.5 0 0 0 6.3 9 3.5 3.5 0 0 0 7.5 18.5Z" />
          <path d="m12 11.5 0 6" />
          <path d="m9.5 15 2.5 2.5 2.5-2.5" />
        </svg>
      );
    case "mobile":
      return (
        <svg {...commonProps}>
          <rect x="7" y="3.5" width="10" height="17" rx="2.5" />
          <path d="M10.5 6.5h3" />
          <path d="M11.8 17.5h.4" />
          <path d="M8.8 9.5h6.4" />
          <path d="M8.8 12.5h6.4" />
        </svg>
      );
    case "ai":
      return (
        <svg {...commonProps}>
          <path d="M12 4.5 8 6.7v4.6l4 2.2 4-2.2V6.7Z" />
          <path d="M8 11.3 5.5 12.7v3.1L8 17.2l2.5-1.4" />
          <path d="m16 11.3 2.5 1.4v3.1L16 17.2l-2.5-1.4" />
          <path d="M12 13.5v4" />
          <path d="M12 2.5v2" />
          <path d="M4.5 9.5h2" />
          <path d="M17.5 9.5h2" />
        </svg>
      );
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
    case "collaboration":
      return (
        <svg {...commonProps}>
          <path d="M8.5 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
          <path d="M15.8 12a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" />
          <path d="M4.8 18.5v-.7A3.3 3.3 0 0 1 8.1 14.5h.8a3.3 3.3 0 0 1 3.3 3.3v.7" />
          <path d="M13.8 18.5v-.6a2.8 2.8 0 0 1 2.8-2.8h.4a2.8 2.8 0 0 1 2.8 2.8v.6" />
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
  heroTitle: "Operational Efficiency Consulting",

  heroSubtitle:
    "Softserve Hub provides operational efficiency consulting services that help businesses eliminate inefficiencies, optimize workflows, reduce operational costs and improve productivity through KPI-driven performance systems.",

  primaryCta: "Explore Consulting Services",
  secondaryCta: "Talk to Us",
  topBlocks: [
    {
      title: "Process Optimization",
      desc:
        "We analyze and redesign workflows to remove inefficiencies, improve execution speed and build structured operational systems.",
    },
    {
      title: "Cost Reduction",
      desc:
        "We identify operational overheads, cost leakages and inefficient resource allocation to improve overall business efficiency.",
    },
    {
      title: "Performance Measurement",
      desc:
        "We design KPI frameworks, reporting systems and performance dashboards that support data-driven operational improvement.",
    },
  ],

  overview:
    "Our operational efficiency consulting services help organizations identify performance gaps, improve workflows, reduce operational costs and build scalable systems that support productivity, agility and measurable business growth.",

  projectDuration: {
    title: "Project Execution Excellence",
    subtitle:
      "We deliver operational efficiency consulting through a structured execution model focused on workflow improvement, KPI alignment and measurable business performance.",
    cards: [
      {
        title: "Fast & Strategic Execution",
        label: "Best suited for",
        desc:
          "Structured execution that helps businesses improve process speed, resource utilization and operational clarity.",
      },
      {
        title: "What Our Execution Covers",
        label: "What is Included",
        desc:
          "Operational analysis, workflow optimization, KPI planning and performance tracking for efficient delivery.",
      },
      {
        title: "Why Businesses Choose Softserve Hub",
        label: "Requirement Condition",
        desc:
          "Expert consulting, transparent execution and scalable process improvements that support long-term growth.",
      },
    ],
  },

  deliverTitle: "How We Deliver",
  deliverySteps: [
    {
      title: "Requirement Gathering",
      desc:
        "Understand operational challenges, business goals and expected outcomes before planning improvements.",
    },
    {
      title: "Analysis",
      desc:
        "Assess process gaps, inefficiencies, cost leakages and productivity issues to define the right improvement path.",
    },
    {
      title: "Planning & Strategy",
      desc:
        "Build a practical roadmap with workflow priorities, KPI structure and accountability for execution.",
    },
  ],

  whoWeAreTitle: "Who We Are",
  whoWeAreText:
    "Softserve Hub supports organizations with structured consulting services that improve operational performance, execution quality and measurable business efficiency. We combine strategy, process discipline and business clarity to drive sustainable improvement.",
  whoWeAreCards: [
    {
      title: "Operational Focus",
      desc:
        "We align each engagement with process efficiency, cost control, execution quality and measurable business outcomes.",
    },
    {
      title: "Cross-Functional Insight",
      desc:
        "Our work supports operations, finance, people, reporting and workflow design for stronger execution.",
    },
    {
      title: "Long-Term Improvement",
      desc:
        "We focus on sustainable process refinement through practical implementation and measurable progress.",
    },
  ],

  technologiesTitle: "Business Analysis, Platforms & Operational Tools",
  technologiesSubtitle:
    "We use proven analysis methods, reporting tools, operational systems and optimization frameworks to improve business efficiency and execution quality.",

  technologies: [
    {
      icon: "strategy",
      title: "Business Analysis & Strategy Tools",
      desc:
        "We use structured frameworks to identify inefficiencies, priorities and measurable performance opportunities across operations.",
      items: [
        "SWOT Analysis",
        "PESTLE Analysis",
        "Business Model Canvas",
      ],
    },
    {
      icon: "marketing",
      title: "Planning & Communication Tools",
      desc:
        "We use planning and collaboration platforms to coordinate execution, reviews and improvement cycles across teams.",
      items: [
        "Google Workspace",
        "Notion",
        "Asana",
      ],
    },
    {
      icon: "finance",
      title: "Financial & Cost Control Tools",
      desc:
        "We use cost analysis and planning tools to improve budget visibility, efficiency and operational control.",
      items: [
        "Budget Planning Models",
        "Cost Tracking Systems",
        "QuickBooks",
      ],
    },
    {
      icon: "hr",
      title: "Workforce & Accountability Tools",
      desc:
        "We support efficiency through people planning, accountability structure and performance visibility across teams.",
      items: [
        "Attendance Tracking",
        "Role Responsibility Mapping",
        "Performance Reviews",
      ],
    },
    {
      icon: "operations",
      title: "Operations & Process Optimization",
      desc:
        "We apply proven methods to standardize workflows, reduce waste and improve execution consistency.",
      items: [
        "Lean Methodology",
        "Six Sigma Principles",
        "Process Re-engineering",
      ],
    },
    {
      icon: "analytics",
      title: "Reporting & Analytics Tools",
      desc:
        "We use reporting systems to monitor operational outcomes and support faster, data-driven business decisions.",
      items: [
        "Power BI",
        "Dashboard Reporting",
        "KPI Tracking Reports",
      ],
    },
  ],

  architecture: {
    title: "Non-IT Service Delivery Framework",
    intro:
      "Our delivery model helps businesses move from operational assessment to execution, optimization and measurable improvement with clear milestones.",
    processSteps: [
      {
        icon: "01",
        title: "Requirement gathering",
        desc: "Understand operational challenges, priorities and expected outcomes",
      },
      {
        icon: "02",
        title: "Analysis",
        desc: "Review inefficiencies, costs, productivity gaps and execution risks",
      },
      {
        icon: "03",
        title: "Planning & strategy",
        desc: "Define workflows, KPI structure, responsibilities and improvement roadmap",
      },
      {
        icon: "04",
        title: "Resource allocation",
        desc: "Assign the right team, tools and support systems for smooth execution",
      },
    ],
    deliveryCards: [
      {
        icon: "05",
        title: "Execution",
        desc: "Implement process improvements, reporting systems and operational controls",
      },
      {
        icon: "06",
        title: "Monitoring & optimization",
        desc: "Track KPI progress, review outcomes and refine execution for better efficiency",
      },
    ],
    closureCard: {
      icon: "07",
      title: "Reporting & support",
      desc: "Provide structured reporting, insights and continuous operational guidance",
    },
  },

  maintenanceSupport: {
    title: "Continuous Business Growth & Support",
    subtitle:
      "We support long-term operational performance through continuous optimization, reporting and practical guidance that drives measurable business improvement.",
    cards: [
      {
        title: "Process Optimization & Efficiency",
        desc:
          "Improve workflows, execution quality and operational consistency across core business functions.",
      },
      {
        title: "Strategic Refinement & Alignment",
        desc:
          "Refine operational strategies using performance insights and business feedback to improve execution.",
      },
      {
        title: "Performance Monitoring & Insights",
        desc:
          "Track KPIs, review productivity trends and support stronger decisions with operational reporting.",
      },
      {
        title: "Consultation & Operational Excellence",
        desc:
          "Provide expert guidance that improves accountability, execution quality and day-to-day operational performance.",
      },
      {
        title: "Business Improvement Support",
        desc:
          "Support continuous improvement initiatives that strengthen scalability, control and operational reliability.",
      },
    ],
  },



  frameworkTitle: "Business Process Optimisation Framework",
  frameworkSubtitle:
    "Aligning workflows, accountability and performance systems to create efficient and scalable operations.",
  beforePoints: [
    "Inefficient workflows and repeated operational delays",
    "High costs caused by poor resource utilization",
    "Limited visibility into performance and execution quality",
  ],
  afterPoints: [
    "Streamlined workflows with stronger operational control",
    "Lower costs, better productivity and improved resource usage",
    "KPI-driven visibility with faster and better decision-making",
  ],

  whyChooseTitle: "Why Softserve Hub",
  whyChoose: [
    {
      title: "Scalable & Business-Aligned Solutions",
      desc:
        "We deliver efficiency solutions aligned with strategic goals, operational growth and measurable business outcomes.",
    },
    {
      title: "Structured & Transparent Execution",
      desc:
        "Our approach combines milestone-based delivery, clear reporting and quality-focused execution for reliable performance.",
    },
    {
      title: "Long-Term Growth & Partnership",
      desc:
        "We support continuous improvement through a practical, customer-focused approach to long-term operational success.",
    },
  ],
  contactTitle: "Improve Your Operational Performance",

  contactSubtitle:
    "Looking to optimize operations, reduce costs and improve productivity? Talk to our consultants about building stronger and more efficient systems for your business.",

  messageLabel: "Tell us about your operational challenges...",
  submitLabel: "Request Consultation",
};

const NonItBusinessStrategyConsultingOperationalEfficiencyConsulting: React.FC = () => {
  const technologies = content?.technologies ?? [];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [activeTechnology, setActiveTechnology] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in your name, email and project details.",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsSubmitting(false);
    setSubmitStatus({
      type: "success",
      message: "Thanks. Your request has been captured and our team will reach out soon.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="service-detail-page relative min-h-screen bg-[#fffCF0] text-[#1f1605] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[900px] h-[900px] bg-[#8a6b18]/20 blur-[180px] rounded-full top-[-280px] left-[-280px]" />
        <div className="absolute w-[900px] h-[900px] bg-[#BFA45F]/20 blur-[180px] rounded-full bottom-[-320px] right-[-320px]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* ================= HERO ================= */}
      <div className="pt-28 pb-16 px-6 border-b border-[#D4AF37]/30">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="text-sm text-[#67552b] mb-6">
            <Link to="/services" className="hover:text-[#D4AF37] transition">
              Services
            </Link>
            <span className="mx-2">/</span>

            <Link to="/services/non-it" className="hover:text-[#D4AF37] transition">
              Non-IT Services
            </Link>
            <span className="mx-2">/</span>

            <Link
              to={`/services/non-it/${category.slug}`}
              className="hover:text-[#D4AF37] transition"
            >
              {category.title}
            </Link>
            <span className="mx-2">/</span>

            <span className="text-[#2f2208]">{item.title}</span>
          </div>

          <div className="rounded-[32px] overflow-hidden border border-[#D4AF37]/30 bg-white/70 shadow-[0_30px_100px_rgba(138,107,24,0.12)] backdrop-blur-2xl">
            {/* Image Banner */}
            <div className="relative h-56 md:h-72">
              <img
                src={heroImage}
                alt={item.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/non-it-hero/default.png";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#fffCF0]/25 via-[#fffCF0]/55 to-[#fffCF0]/95" />
            </div>

            {/* Hero Content */}
            <div className="relative px-8 py-16 md:px-14 md:py-20 text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05]">
                {content?.heroTitle ?? item.title}
              </h1>

              <p className="text-[#5b4520] mt-6 max-w-4xl mx-auto text-base md:text-xl leading-8">
                {content?.heroSubtitle ??
                  "High-impact delivery with security, performance and enterprise scalability built in."}
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

          {/* Quick Blocks */}
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {(content?.topBlocks ?? []).map((b: { title: string; desc: string }) => (
              <div
                key={b.title}
                className="group relative overflow-hidden p-7 rounded-[28px] border border-[#D4AF37]/30 bg-[#fffbeb] transition-all duration-300 hover:-translate-y-2 hover:border-[#f6df9a]/50 hover:shadow-[0_0_35px_rgba(212,175,55,0.2)] active:-translate-y-1 active:border-[#f6df9a]/60 active:shadow-[0_0_40px_rgba(96,165,250,0.28)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f6df9a]/60 to-transparent" />
                <h3 className="relative text-xl md:text-2xl font-bold text-[#b45309] transition-colors duration-300 group-hover:text-[#1f1605] group-active:text-[#1f1605]">
                  {b.title}
                </h3>
                <p className="relative text-[#67552b] mt-4 text-base md:text-lg leading-7 transition-colors duration-300 group-hover:text-[#2f2208] group-active:text-[#2f2208]">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= BODY ================= */}
      <div className="px-6 py-16">
        <div className="max-w-6xl mx-auto space-y-14">
          {/* Overview */}
          <div className="rounded-[32px] bg-white/70 border border-[#D4AF37]/30 p-8 md:p-10 xl:px-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8a6b18]">
              Overview
            </h2>
            <p className="text-[#5b4520] mt-5 max-w-5xl leading-8 text-base md:text-lg">
              {content?.overview ??
                "We deliver structured, production-ready solutions with measurable business outcomes."}
            </p>
          </div>

          {/* Project Duration */}
          <div className="rounded-[32px] border border-[#D4AF37]/30 bg-[#fffbeb] p-8 md:p-10">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#b45309]">
                {content?.projectDuration?.title}
              </h2>
              <p className="text-[#5b4520] mt-5 max-w-4xl mx-auto text-base md:text-lg leading-8">
                {content?.projectDuration?.subtitle}
              </p>
            </div>

            <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {(content?.projectDuration?.cards ?? []).map(
                (card: { title: string; label: string; desc: string }) => (
                  <div
                    key={card.title}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[#D4AF37]/30 bg-white/75 p-7 text-left transition-all duration-300 hover:-translate-y-2 hover:border-[#f6df9a]/50 hover:shadow-[0_0_35px_rgba(212,175,55,0.18)] active:-translate-y-1 active:border-[#f6df9a]/60"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.16),transparent_58%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f6df9a]/60 to-transparent" />
                    <div className="relative text-2xl md:text-3xl font-extrabold text-[#1f1605]">
                      {card.title}
                    </div>
                    <p className="relative mt-4 text-base md:text-lg leading-7 text-[#67552b] group-hover:text-[#2f2208] transition-colors duration-300">
                      {card.desc}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Delivery */}
          <div className="rounded-[32px] bg-white/70 border border-[#D4AF37]/30 p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#b45309]">
              {content?.deliverTitle ?? "How We Deliver"}
            </h2>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {(content?.deliverySteps ?? []).map(
                (s: { title: string; desc: string }, idx: number) => (
                  <div
                    key={s.title}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[#D4AF37]/30 bg-white/75 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#f6df9a]/50 hover:shadow-[0_0_35px_rgba(212,175,55,0.18)] active:-translate-y-1 active:border-[#f6df9a]/60 active:shadow-[0_0_40px_rgba(96,165,250,0.24)]"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100" />
                    <div className="absolute top-0 left-7 right-7 h-px bg-gradient-to-r from-[#D4AF37]/40 via-[#D4AF37]/70 to-transparent" />
                    <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-[#8a6b18] to-[#BFA45F] flex items-center justify-center font-bold text-[#1f1605]">
                      {idx + 1}
                    </div>
                    <h3 className="relative mt-5 text-xl font-bold text-[#0f172a] transition-colors duration-300 group-hover:text-[#1f1605] group-active:text-[#1f1605]">
                      {s.title}
                    </h3>
                    <p className="relative text-[#67552b] mt-3 text-base md:text-lg leading-7 transition-colors duration-300 group-hover:text-[#2f2208] group-active:text-[#2f2208]">
                      {s.desc}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Who We Are */}
          <div className="rounded-[32px] bg-white/70 border border-[#D4AF37]/30 p-8 md:p-10">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#8a6b18]">
                {content?.whoWeAreTitle}
              </h2>
              <p className="text-[#5b4520] mt-5 max-w-4xl mx-auto text-base md:text-lg leading-8">
                {content?.whoWeAreText}
              </p>
            </div>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {(content?.whoWeAreCards ?? []).map(
                (card: { title: string; desc: string }) => (
                  <div
                    key={card.title}
                    className="group relative overflow-hidden rounded-[28px] border border-[#D4AF37]/30 bg-white/75 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/50 hover:shadow-[0_0_35px_rgba(212,175,55,0.18)]"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <h3 className="relative text-xl font-bold text-[#8a6b18] transition-colors duration-300 group-hover:text-[#1f1605]">
                      {card.title}
                    </h3>
                    <p className="relative mt-4 text-base md:text-lg leading-7 text-[#67552b] transition-colors duration-300 group-hover:text-[#2f2208]">
                      {card.desc}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Technologies */}
          <div className="rounded-[32px] bg-white/70 border border-[#D4AF37]/30 p-8 md:p-10">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-[#f6df9a] via-[#f6df9a] to-[#D4AF37] bg-clip-text text-transparent">
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
                          ? "border-[#D4AF37]/60 -translate-y-1 shadow-[0_0_35px_rgba(212,175,55,0.16)]"
                          : "border-[#D4AF37]/30 hover:-translate-y-1 hover:border-[#f6df9a]/40"
                      }`}
                      >
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f6df9a]/60 to-transparent" />
                        <div className="flex items-start gap-4">
                        <div className="flex h-11 min-w-11 items-center justify-center rounded-xl border border-[#f6df9a]/30 bg-[#8a6b18]/10 text-[#b45309] shadow-[0_0_24px_rgba(212,175,55,0.12)] transition-all duration-300">
                          {renderTechnologyIcon(tech.icon, "blue")}
                        </div>
                        <div className="flex min-h-[56px] items-center">
                          <h3
                            className="text-lg font-extrabold leading-tight text-[#b45309] transition-colors"
                          >
                            {tech.title}
                          </h3>
                        </div>
                      </div>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isActive
                            ? "mt-5 max-h-72 opacity-100"
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

          {/* Non-IT Service Delivery Process */}
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
                          className="rounded-[22px] border border-[#D4AF37]/30 bg-[linear-gradient(180deg,rgba(255,248,230,0.95),rgba(255,252,240,0.98))] p-5"
                        >
                          <div className="text-base font-bold text-[#8a6b18]">{card.icon}</div>
                          <div className="mt-3 text-xl font-bold text-[#3b2a08]">
                            {card.title}
                          </div>
                          <p className="mt-2 text-base leading-7 text-[#67552b]">
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

          {/* Maintenance Support */}
          <div className="service-maintenance-theme rounded-[32px] border border-[#d4af37]/30 bg-gradient-to-br from-[#fffbeb] via-white to-[#fef3c7]/50 p-8 md:p-10 shadow-[0_20px_60px_rgba(212,175,55,0.1)]">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#b45309]">
                {content?.maintenanceSupport?.title}
              </h2>
              <p className="text-[#5b4520] mt-5 max-w-4xl mx-auto text-base md:text-lg leading-8">
                {content?.maintenanceSupport?.subtitle}
              </p>
            </div>

            <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-6 gap-6">
              {(content?.maintenanceSupport?.cards ?? []).map(
                (card: { title: string; desc: string }, idx: number) => (
                  <div
                    key={card.title}
                    className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[#D4AF37]/30 bg-white/75 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#f6df9a]/50 hover:shadow-[0_0_35px_rgba(212,175,55,0.18)] active:-translate-y-1 active:border-[#f6df9a]/60 ${
                      idx < 3 ? "xl:col-span-2" : "xl:col-span-3"
                    }`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
                    <h3 className="relative text-xl md:text-2xl font-bold text-[#b45309] transition-colors duration-300 group-hover:text-[#1f1605]">
                      {card.title}
                    </h3>
                    <p className="relative mt-4 text-base md:text-lg leading-7 text-[#67552b] transition-colors duration-300 group-hover:text-[#2f2208]">
                      {card.desc}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Business Process Optimisation Framework */}
          {(content?.frameworkTitle || content?.beforePoints || content?.afterPoints) && (
            <div className="rounded-[32px] border border-[#D4AF37]/30 bg-[linear-gradient(180deg,rgba(18,20,39,0.96),rgba(10,16,28,0.98))] p-8 md:p-10">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#8a6b18]">
                  {content?.frameworkTitle}
                </h2>
                <p className="text-[#5b4520] mt-5 max-w-4xl mx-auto text-base md:text-lg leading-8">
                  {content?.frameworkSubtitle}
                </p>
              </div>

              <div className="mt-10 grid md:grid-cols-3 gap-6 items-stretch">
                <div className="rounded-[26px] border border-[#D4AF37]/30 bg-[#071224] p-7 shadow-[0_10px_24px_rgba(15,23,42,0.2)]">
                  <h3 className="text-2xl font-bold text-[#ff9d9d]">Before</h3>
                  <ul className="mt-6 space-y-5 text-[#2f2208] text-base md:text-lg leading-8">
                    {(content?.beforePoints ?? []).map((point: string) => (
                      <li key={point}>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[26px] border border-[#D4AF37]/30 bg-[linear-gradient(180deg,rgba(77,91,160,0.45),rgba(58,44,98,0.65))] p-7 shadow-[0_10px_24px_rgba(15,23,42,0.2)] flex items-center justify-center">
                  <div className="text-center max-w-sm">
                    <div className="text-sm md:text-base uppercase tracking-[0.2em] text-[#2f2208]/90">
                      Transformation
                    </div>
                    <div className="mt-4 text-3xl md:text-[2.1rem] font-bold leading-tight text-[#1f1605]">
                      Strategy  Technology Operations
                    </div>
                    <div className="mt-4 text-lg md:text-xl text-[#2f2208]/90">
                      Governance + measurable KPIs
                    </div>
                  </div>
                </div>

                <div className="rounded-[26px] border border-[#D4AF37]/30 bg-[#071224] p-7 shadow-[0_10px_24px_rgba(15,23,42,0.2)]">
                  <h3 className="text-2xl font-bold text-[#8dffbf]">After</h3>
                  <ul className="mt-6 space-y-5 text-[#2f2208] text-base md:text-lg leading-8">
                    {(content?.afterPoints ?? []).map((point: string) => (
                      <li key={point}>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}


          {/* Why Softserve Hub */}
          <div className="rounded-[32px] bg-white/70 border border-[#D4AF37]/30 p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8a6b18]">
              {content?.whyChooseTitle ?? "Why Softserve Hub"}
            </h2>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {(content?.whyChoose ?? []).map(
                (w: { title: string; desc: string }, idx: number) => (
                <div
                  key={w.title}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[#D4AF37]/30 bg-white/75 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#f6df9a]/50 hover:shadow-[0_0_35px_rgba(212,175,55,0.18)] active:-translate-y-1 active:border-[#f6df9a]/60"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100" />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f6df9a]/60 to-transparent" />
                  <div className="text-sm font-semibold text-[#92400e]">
                    0{idx + 1}
                  </div>
                  <h3 className="relative mt-4 text-xl font-bold text-[#b45309] transition-colors duration-300 group-hover:text-[#1f1605]">
                    {w.title}
                  </h3>
                  <p className="relative mt-3 text-base md:text-lg leading-7 text-[#67552b] transition-colors duration-300 group-hover:text-[#2f2208]">
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
            className="rounded-[32px] border border-[#D4AF37]/30 bg-[#fffbeb] p-8 md:p-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#b45309]">
              {content?.contactTitle ?? "Tell us about your project"}
            </h2>

            <p className="text-[#5b4520] mt-4 max-w-4xl text-base md:text-lg leading-8">
              {content?.contactSubtitle ??
                "Share your requirements and our team will reach out."}
            </p>

            <form onSubmit={onSubmit} className="mt-8 grid md:grid-cols-2 gap-6">
              <input
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) =>
                  setForm((p) => ({ ...p, name: e.target.value }))
                }
                className="px-4 py-3 rounded-xl bg-white/75 border border-[#D4AF37]/30 outline-none text-base placeholder:text-gray-500"
              />

              <input
                type="email"
                required
                placeholder="Your email"
                value={form.email}
                onChange={(e) =>
                  setForm((p) => ({ ...p, email: e.target.value }))
                }
                className="px-4 py-3 rounded-xl bg-white/75 border border-[#D4AF37]/30 outline-none text-base placeholder:text-gray-500"
              />

              <textarea
                rows={5}
                placeholder={content?.messageLabel ?? "Tell us about your project..."}
                value={form.message}
                onChange={(e) =>
                  setForm((p) => ({ ...p, message: e.target.value }))
                }
                className="md:col-span-2 px-4 py-3 rounded-xl bg-white/75 border border-[#D4AF37]/30 outline-none text-base placeholder:text-gray-500"
              />

              <div className="md:col-span-2 flex gap-4 flex-wrap">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 rounded-2xl bg-[#BFA45F] hover:bg-[#BFA45F] transition font-semibold disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : content?.submitLabel ?? "Submit Project"}
                </button>

                <Link
                  to={`/services/non-it/${category.slug}`}
                  className="px-8 py-4 rounded-2xl bg-white/70 border border-[#D4AF37]/30 hover:bg-white/80 transition font-semibold"
                >
                  Back to {category.title}
                </Link>
              </div>

              {submitStatus ? (
                <div
                  className={`md:col-span-2 rounded-2xl border px-4 py-3 text-sm md:text-base ${
                    submitStatus.type === "success"
                      ? "border-[#f6df9a]/20 bg-[#8a6b18]/10 text-[#3b2a08]"
                      : "border-red-300/20 bg-red-500/10 text-red-100"
                  }`}
                >
                  {submitStatus.message}
                </div>
              ) : null}
            </form>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default NonItBusinessStrategyConsultingOperationalEfficiencyConsulting;
