import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const category = {
  slug: "accounting-financial-operations",
  title: "Accounting & Financial Operations",
};

const item = {
  slug: "accounting-management",
  title: "Accounting Management",
  shortDesc:
    "End-to-end accounting management services for bookkeeping, financial reporting, compliance, reconciliations and audit-ready financial operations.",
};

const heroImage = "/non-it-hero/accounting-management.webp";

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
    case "finance":
      return (
        <svg {...commonProps}>
          <rect x="4.5" y="5" width="15" height="14" rx="2.5" />
          <path d="M8 9.5h8" />
          <path d="M8 13h3" />
          <path d="M14.5 12.5c0-1 .8-1.8 1.8-1.8s1.7.5 1.7 1.3c0 .7-.4 1.1-1.1 1.4l-1.2.4c-.8.3-1.2.7-1.2 1.4 0 .9.7 1.6 1.8 1.6s1.8-.7 1.8-1.7" />
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
    case "compliance":
      return (
        <svg {...commonProps}>
          <path d="M12 3.5 6 6v5.5c0 4 2.8 6.8 6 8 3.2-1.2 6-4 6-8V6Z" />
          <path d="m9.5 11.8 1.6 1.6 3.4-3.8" />
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
    default:
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="7" />
        </svg>
      );
  }
};

const content: any = {
  heroTitle: "Accounting Management Services",
  heroSubtitle:
    "Softserve Hub delivers professional accounting management services that help businesses maintain accurate books, streamline financial operations, improve reporting accuracy and stay compliant with day-to-day accounting and regulatory requirements.",

  primaryCta: "Get Accounting Support",
  secondaryCta: "Talk to Us",

  topBlocks: [
    {
      title: "Bookkeeping & General Ledger Management",
      desc: "We manage day-to-day bookkeeping, journal entries, ledger updates and account categorization to keep your financial records accurate, organized and ready for reporting.",
    },
    {
      title: "Accounts Payable & Receivable Support",
      desc: "Our accounting team handles invoice tracking, receivables follow-up, payment processing, vendor coordination and cash flow-related accounting tasks with better control and visibility.",
    },
    {
      title: "Financial Reporting & Compliance Support",
      desc: "We prepare structured financial reports, maintain documentation, support reconciliations and help businesses stay aligned with compliance, audit and internal accounting standards.",
    },
  ],

  overview:
    "Our accounting management services are designed to support businesses with reliable, structured and scalable financial operations. From bookkeeping and ledger maintenance to reconciliations, payable and receivable management, reporting and compliance support, we help organizations improve financial accuracy and operational efficiency. With disciplined accounting workflows and timely financial visibility, businesses can reduce errors, strengthen control, support audits and make better financial decisions with confidence.",

  projectDuration: {
    title: "Project Execution Excellence",
    subtitle:
      "We deliver strategy-led accounting solutions focused on financial accuracy, compliance and scalable operational control.",
    cards: [
      {
        title: "Fast & Strategic Execution",
        label: "Best suited for",
        desc:
          "Structured execution that helps businesses improve accounting control, reduce errors and strengthen reporting speed.",
      },
      {
        title: "What Our Execution Covers",
        label: "What is Included",
        desc:
          "Bookkeeping, reconciliations, payable and receivable support, compliance workflows and reporting delivery.",
      },
      {
        title: "Why Businesses Choose Softserve Hub",
        label: "Requirement Condition",
        desc:
          "Expert financial operations guidance, transparent delivery and scalable accounting systems built for long-term reliability.",
      },
    ],
  },

  deliverTitle: "How We Deliver",
  deliverySteps: [
    {
      title: "Requirement Gathering",
      desc:
        "Understand business operations, accounting structure, reporting needs and compliance requirements from the start.",
    },
    {
      title: "Analysis",
      desc:
        "Review current accounting gaps, process issues, financial controls and reporting priorities to shape the right support model.",
    },
    {
      title: "Planning & Strategy",
      desc:
        "Define accounting workflows, review structure, control checkpoints and a clear execution roadmap for delivery.",
    },
  ],

  whoWeAreTitle: "Who We Are",
  whoWeAreText:
    "Softserve Hub delivers structured non-IT accounting and financial operations services that improve control, reporting accuracy and long-term business reliability. We combine financial discipline, operational clarity and practical execution to support stronger accounting performance.",
  whoWeAreCards: [
    {
      title: "Finance-Led Execution",
      desc:
        "We align every accounting engagement with business requirements, compliance needs and measurable financial outcomes.",
    },
    {
      title: "Reporting & Control Expertise",
      desc:
        "Our team combines bookkeeping accuracy, reconciliation discipline and reporting structure to support dependable financial management.",
    },
    {
      title: "Long-Term Operational Stability",
      desc:
        "We support sustainable finance operations through process discipline, documentation and continuous accounting improvement.",
    },
  ],

  technologiesTitle: "Business Analysis, Platforms & Operational Tools",
  technologiesSubtitle:
    "We use proven accounting systems, compliance workflows, reporting tools and operational methods to deliver practical, scalable and measurable financial management solutions.",
  technologies: [
    {
      icon: "finance",
      title: "Accounting & Bookkeeping Tools",
      desc:
        "We use practical accounting systems to manage ledgers, bookkeeping, transaction control and financial records with accuracy.",
      items: ["Tally", "Zoho Books", "QuickBooks"],
    },
    {
      icon: "analytics",
      title: "Reporting & Financial Insight Tools",
      desc:
        "We build reporting structures and dashboards that improve visibility into financial performance, liabilities and cash flow.",
      items: ["Excel Reports", "MIS Dashboards", "Financial Statement Templates"],
    },
    {
      icon: "compliance",
      title: "Compliance & Documentation Systems",
      desc:
        "We support financial documentation, reconciliation workflows and audit-ready record management through structured control systems.",
      items: ["Reconciliation Checklists", "Audit Support Files", "Compliance Documentation"],
    },
    {
      icon: "operations",
      title: "Process Control & Workflow Tools",
      desc:
        "We use accounting process workflows and review checkpoints that help businesses improve accuracy and reduce manual risk.",
      items: ["Approval Workflows", "SOPs", "Control Checklists"],
    },
    {
      icon: "strategy",
      title: "Financial Planning & Analysis Tools",
      desc:
        "We use structured planning and review methods to support budgeting, cost control and better financial decision-making.",
      items: ["Budget Models", "Cost Tracking Systems", "Variance Analysis"],
    },
    {
      icon: "collaboration",
      title: "Team Coordination & Review Systems",
      desc:
        "We use shared workflows and review systems that keep accounting teams, approvers and business stakeholders aligned.",
      items: ["Google Workspace", "Microsoft Office", "Shared Review Templates"],
    },
  ],

  architecture: {
    title: "Non-IT Service Delivery Framework",
    intro:
      "Our structured delivery model helps businesses move from accounting assessment to execution, reporting, control and ongoing support with clear milestones and measurable progress.",
    processSteps: [
      {
        icon: "01",
        title: "Requirement gathering",
        desc: "Understand accounting needs, business structure, reporting priorities and compliance expectations",
      },
      {
        icon: "02",
        title: "Analysis",
        desc: "Assess current records, control gaps, reporting delays and accounting workflow issues",
      },
      {
        icon: "03",
        title: "Planning & strategy",
        desc: "Define workflow structure, review process, reporting cycle and financial control priorities",
      },
      {
        icon: "04",
        title: "Resource allocation",
        desc: "Assign the right accounting specialists, reporting resources and review support",
      },
    ],
    deliveryCards: [
      {
        icon: "05",
        title: "Execution",
        desc: "Execute bookkeeping, reconciliations, reporting and accounting control tasks efficiently",
      },
      {
        icon: "06",
        title: "Monitoring & optimization",
        desc: "Continuously review reporting quality, compliance alignment and process efficiency",
      },
    ],
    closureCard: {
      icon: "07",
      title: "Reporting & support",
      desc: "Provide financial insights, documentation and ongoing support for stable accounting operations",
    },
  },

  maintenanceSupport: {
    title: "Continuous Business Growth & Support",
    subtitle:
      "We support long-term financial stability through continuous accounting refinement, reporting improvement and strategic guidance that strengthens control and business confidence.",
    cards: [
      {
        title: "Accounting Optimization & Financial Accuracy",
        desc:
          "Improve financial workflows, reduce reporting errors and maintain high accounting accuracy across operations.",
      },
      {
        title: "Strategic Refinement & Financial Alignment",
        desc:
          "Refine accounting workflows based on business needs, reporting demands and compliance priorities.",
      },
      {
        title: "Performance Monitoring & Financial Insights",
        desc:
          "Track reporting quality, financial trends and accounting performance to support better decisions.",
      },
      {
        title: "Consultation & Operational Excellence",
        desc:
          "Provide expert accounting guidance to improve execution quality, documentation and financial process strength.",
      },
      {
        title: "Compliance & Control Support",
        desc:
          "Support reconciliations, documentation and control systems that improve readiness, reliability and audit confidence.",
      },
    ],
  },

  whyChooseTitle: "Accounting Management Transformation",
  whyChoose: [
    {
      title: "Accurate books and stronger financial control",
      desc: "We help maintain clean and well-structured accounting records that improve internal control, reduce manual errors and support stable day-to-day financial operations.",
    },
    {
      title: "Compliance-focused accounting support",
      desc: "Our structured accounting processes support documentation, reconciliations, reporting consistency and readiness for internal reviews, audits and regulatory expectations.",
    },
    {
      title: "Clear reporting for smarter decisions",
      desc: "With timely financial statements and organized accounting data, your business gets better visibility into performance, cash flow, liabilities and overall financial health.",
    },
  ],

  softservehubWhyTitle: "Why Softserve Hub",
  softservehubWhy: [
    {
      title: "Scalable & Business-Aligned Solutions",
      desc:
        "We deliver scalable accounting solutions aligned with business needs, financial controls and long-term operational stability.",
    },
    {
      title: "Structured & Transparent Execution",
      desc:
        "Our process combines milestone-based delivery, reporting clarity and quality-driven execution for dependable outcomes.",
    },
    {
      title: "Long-Term Growth & Partnership",
      desc:
        "We support continuous accounting improvement, operational reliability and long-term business confidence through a customer-focused approach.",
    },
  ],

  frameworkTitle: "Accounting Management Transformation",
  frameworkSubtitle:
    "From disconnected accounting activities and reporting delays to accurate, compliant and insight-driven financial management.",

  beforePoints: [
    "Inconsistent bookkeeping and record maintenance",
    "Delayed reconciliations and reporting cycles",
    "Vendor payment and receivable tracking issues",
    "Higher compliance and audit preparation risk",
    "Limited visibility into financial performance",
  ],

  afterPoints: [
    "Accurate books and organized accounting records",
    "Timely reconciliations and financial reporting",
    "Improved payable and receivable management",
    "Stronger compliance and audit readiness",
    "Better financial visibility for decision-making",
  ],

  contactTitle: "Talk to Our Accounting Experts",
  contactSubtitle:
    "Looking for reliable accounting management services for your business? Share your requirements and our team will help you build a more accurate, compliant and efficient finance operation.",

  messageLabel: "Tell us about your accounting requirements...",
  submitLabel: "Request Accounting Consultation",
};

const NonItAccountingFinancialOperationsAccountingManagement: React.FC = () => {
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
                  className="group relative overflow-hidden p-7 rounded-2xl bg-white/70 border border-[#D4AF37]/30 transition-all duration-300 hover:-translate-y-2 hover:border-[#f6df9a]/50 hover:shadow-[0_0_35px_rgba(212,175,55,0.18)]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <h3 className="relative text-xl font-bold text-[#b45309] transition-colors duration-300 group-hover:text-[#1f1605]">{b.title}</h3>
                  <p className="relative text-[#67552b] mt-3 leading-relaxed transition-colors duration-300 group-hover:text-[#2f2208]">{b.desc}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#b45309]">
                {content?.projectDuration?.title}
              </h2>
              <p className="text-[#5b4520] mt-5 max-w-4xl mx-auto text-base md:text-lg leading-8">
                {content?.projectDuration?.subtitle}
              </p>
            </div>

            <div className="mt-10 grid md:grid-cols-3 gap-6 items-stretch">
              {(content?.projectDuration?.cards ?? []).map(
                (card: { title: string; desc: string }) => (
                  <div
                    key={card.title}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[#D4AF37]/30 bg-white/75 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#f6df9a]/50 hover:shadow-[0_0_35px_rgba(212,175,55,0.18)]"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <h3 className="relative text-2xl md:text-[2rem] font-bold leading-tight text-[#1f1605]">
                      {card.title}
                    </h3>
                    <p className="relative mt-5 text-base md:text-lg leading-8 text-[#67552b] transition-colors duration-300 group-hover:text-[#2f2208]">
                      {card.desc}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="rounded-[32px] border border-[#D4AF37]/30 bg-[linear-gradient(180deg,rgba(18,20,39,0.96),rgba(10,16,28,0.98))] p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#b45309]">
              {content?.deliverTitle}
            </h2>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {(content?.deliverySteps ?? []).map(
                (step: { title: string; desc: string }, idx: number) => (
                  <div
                    key={step.title}
                    className="group relative overflow-hidden rounded-[28px] border border-[#D4AF37]/30 bg-white/75 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#f6df9a]/50 hover:shadow-[0_0_35px_rgba(212,175,55,0.18)]"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-[#8a6b18] to-[#BFA45F] text-sm font-bold text-[#1f1605]">
                      {idx + 1}
                    </div>
                    <h3 className="relative mt-6 text-2xl font-bold text-[#1f1605]">
                      {step.title}
                    </h3>
                    <p className="relative mt-4 text-base md:text-lg leading-8 text-[#67552b] transition-colors duration-300 group-hover:text-[#2f2208]">
                      {step.desc}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="rounded-[32px] border border-[#D4AF37]/30 bg-[linear-gradient(180deg,rgba(18,20,39,0.96),rgba(10,16,28,0.98))] p-8 md:p-10">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#8a6b18]">
                {content?.whoWeAreTitle}
              </h2>
              <p className="text-[#5b4520] mt-5 max-w-5xl mx-auto text-base md:text-lg leading-8">
                {content?.whoWeAreText}
              </p>
            </div>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {(content?.whoWeAreCards ?? []).map(
                (card: { title: string; desc: string }) => (
                  <div
                    key={card.title}
                    className="group relative overflow-hidden rounded-[28px] border border-[#D4AF37]/30 bg-white/75 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#f6df9a]/50 hover:shadow-[0_0_35px_rgba(212,175,55,0.18)]"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <h3 className="relative text-2xl font-bold text-[#8a6b18] transition-colors duration-300 group-hover:text-[#1f1605]">
                      {card.title}
                    </h3>
                    <p className="relative mt-4 text-base md:text-lg leading-8 text-[#67552b] transition-colors duration-300 group-hover:text-[#2f2208]">
                      {card.desc}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="rounded-[32px] border border-[#D4AF37]/30 bg-[linear-gradient(180deg,rgba(18,20,39,0.96),rgba(10,16,28,0.98))] p-8 md:p-10">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#b45309]">
                {content?.technologiesTitle}
              </h2>
              <p className="text-[#5b4520] mt-5 max-w-5xl mx-auto text-base md:text-lg leading-8">
                {content?.technologiesSubtitle}
              </p>
            </div>

            <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6 items-start">
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
                  const isOpen = activeTechnology === idx;

                  return (
                    <div
                      key={tech.title}
                      onMouseEnter={() => setActiveTechnology(idx)}
                      onMouseLeave={() =>
                        setActiveTechnology((current) =>
                          current === idx ? null : current
                        )
                      }
                      onClick={() =>
                        setActiveTechnology((current) =>
                          current === idx ? null : idx
                        )
                      }
                      className={`group relative self-start overflow-hidden rounded-[28px] border bg-white/75 p-5 md:p-6 transition-all duration-300 cursor-pointer ${
                        isOpen
                          ? "border-[#f6df9a]/60 shadow-[0_0_35px_rgba(212,175,55,0.18)]"
                          : "border-[#D4AF37]/30 hover:border-[#f6df9a]/40"
                      }`}
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] border border-[#f6df9a]/20 bg-[#8a6b18]/10">
                          {renderTechnologyIcon(tech.icon, "blue")}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold leading-tight text-[#b45309]">
                          {tech.title}
                        </h3>
                      </div>

                      <div
                        className={`grid transition-all duration-300 ease-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100 mt-5"
                            : "grid-rows-[0fr] opacity-0 mt-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-base md:text-lg leading-8 text-[#67552b]">
                            {tech.desc}
                          </p>
                          <div className="mt-5 grid grid-cols-2 gap-3">
                            {tech.items.map((tool) => (
                              <span
                                key={tool}
                                className="rounded-2xl border border-[#D4AF37]/30 bg-white/70 px-4 py-3 text-center text-sm md:text-base text-[#1f1605]"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          <div className="rounded-[32px] border border-[#D4AF37]/30 bg-[linear-gradient(180deg,rgba(18,20,39,0.96),rgba(10,16,28,0.98))] p-8 md:p-10">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#b45309]">
                {content?.architecture?.title}
              </h2>
              <p className="text-[#5b4520] mt-5 max-w-5xl mx-auto text-base md:text-lg leading-8">
                {content?.architecture?.intro}
              </p>
            </div>

            <div className="mt-10 grid xl:grid-cols-[1.1fr_1.2fr] gap-8 items-start">
              <div className="space-y-4">
                {(content?.architecture?.processSteps ?? []).map(
                  (step: { icon: string; title: string; desc: string }, idx: number) => (
                    <React.Fragment key={step.title}>
                      <div className="group relative overflow-hidden rounded-[22px] border border-[#D4AF37]/30 bg-white/75 p-6 transition-all duration-300 hover:border-[#f6df9a]/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.14)]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="flex items-start gap-4">
                          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#f6df9a]/20 bg-[#8a6b18]/10 text-sm font-bold text-[#b45309]">
                            {step.icon}
                          </div>
                          <div className="relative">
                            <h3 className="text-xl font-bold text-[#3b2a08] transition-colors duration-300 group-hover:text-[#1f1605]">
                              {step.title}
                            </h3>
                            <p className="mt-2 text-base leading-7 text-[#67552b] transition-colors duration-300 group-hover:text-[#2f2208]">
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                      {idx < (content?.architecture?.processSteps?.length ?? 0) - 1 ? (
                        <div className="text-center text-2xl text-[#b45309]">↓</div>
                      ) : null}
                    </React.Fragment>
                  )
                )}
              </div>

              <div className="space-y-8">
                <div className="rounded-[30px] border border-[#D4AF37]/30 bg-white/75 p-6">
                  <div className="w-fit rounded-full bg-gradient-to-r from-[#8a6b18] to-[#BFA45F] px-6 py-2 text-base font-bold text-[#1f1605]">
                    Delivery
                  </div>
                  <div className="mt-6 grid md:grid-cols-2 gap-4">
                    {(content?.architecture?.deliveryCards ?? []).map(
                      (card: { icon: string; title: string; desc: string }) => (
                        <div
                          key={card.title}
                          className="group relative overflow-hidden rounded-[22px] border border-[#D4AF37]/30 bg-[linear-gradient(180deg,rgba(255,248,230,0.95),rgba(255,252,240,0.98))] p-5 transition-all duration-300 hover:border-[#D4AF37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.14)]"
                        >
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_58%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          <div className="relative text-base font-bold text-[#8a6b18]">{card.icon}</div>
                          <div className="relative mt-3 text-xl font-bold text-[#3b2a08] transition-colors duration-300 group-hover:text-[#1f1605]">
                            {card.title}
                          </div>
                          <p className="relative mt-2 text-base leading-7 text-[#67552b] transition-colors duration-300 group-hover:text-[#2f2208]">
                            {card.desc}
                          </p>
                        </div>
                      )
                  )} 
                  </div>

                    <div className="mt-6 border-t border-dashed border-[#D4AF37]/30 pt-3 text-center text-[16px] text-[#b45309]/70">
                      review & updates
                    </div>
                    <div className="text-center text-[28px] text-[#b45309]">↓</div>
                  </div>

                  <div className="rounded-[30px] border border-[#D4AF37]/30 bg-white/75 p-6">
                  <div className="w-fit rounded-full bg-gradient-to-r from-[#BFA45F] to-[#D4AF37] px-6 py-2 text-base font-bold text-slate-950">
                    Closure
                  </div>
                  <div className="group relative mt-5 overflow-hidden rounded-[22px] border border-[#D4AF37]/30 bg-[linear-gradient(180deg,rgba(255,248,230,0.95),rgba(255,252,240,0.98))] p-5 transition-all duration-300 hover:border-[#f6df9a]/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.14)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative text-base font-bold text-[#b45309]">
                      {content?.architecture?.closureCard?.icon}
                    </div>
                    <div className="relative mt-3 text-xl font-bold text-[#3b2a08] transition-colors duration-300 group-hover:text-[#1f1605]">
                      {content?.architecture?.closureCard?.title}
                    </div>
                    <p className="relative mt-2 text-base leading-7 text-[#67552b] transition-colors duration-300 group-hover:text-[#2f2208]">
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
              <p className="text-[#5b4520] mt-5 max-w-4xl mx-auto text-base md:text-lg leading-8">
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
                <div className="group relative overflow-hidden rounded-2xl bg-white/75 border border-[#D4AF37]/30 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#f6df9a]/50 hover:shadow-[0_0_35px_rgba(212,175,55,0.18)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <h3 className="text-lg font-bold text-red-300">Before</h3>
                  <ul className="relative mt-4 space-y-3 text-[#5b4520] transition-colors duration-300 group-hover:text-[#2f2208]">
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
                      <span>Accuracy</span>
                      <span>Compliance</span>
                      <span>Visibility</span>
                    </div>
                    <div className="mt-4 text-lg md:text-xl text-[#2f2208]/90">
                      Structured accounting with measurable control
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl bg-white/75 border border-[#D4AF37]/30 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#f6df9a]/50 hover:shadow-[0_0_35px_rgba(212,175,55,0.18)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <h3 className="text-lg font-bold text-green-300">After</h3>
                  <ul className="relative mt-4 space-y-3 text-[#5b4520] transition-colors duration-300 group-hover:text-[#2f2208]">
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
                    className="group relative overflow-hidden p-7 rounded-2xl bg-white/75 border border-[#D4AF37]/30 transition-all duration-300 hover:-translate-y-2 hover:border-[#f6df9a]/50 hover:shadow-[0_0_35px_rgba(212,175,55,0.18)]"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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

          <div className="rounded-[32px] bg-white/70 border border-[#D4AF37]/30 p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8a6b18]">
              {content?.softservehubWhyTitle}
            </h2>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {(content?.softservehubWhy ?? []).map(
                (w: { title: string; desc: string }, idx: number) => (
                  <div
                    key={w.title}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[#D4AF37]/30 bg-white/75 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#f6df9a]/50 hover:shadow-[0_0_35px_rgba(212,175,55,0.18)]"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative text-sm font-semibold text-[#92400e]">
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

export default NonItAccountingFinancialOperationsAccountingManagement;
