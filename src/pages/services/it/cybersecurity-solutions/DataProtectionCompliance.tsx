import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const category = {
  slug: "cybersecurity-solutions",
  title: "Cybersecurity Solutions",
};

const item = {
  slug: "data-protection-compliance",
  title: "Data Protection & Compliance",
};

const heroImage = "/it-hero/data-protection.webp";

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
    default:
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="7" />
        </svg>
      );
  }
};

const content: any = {
  heroTitle: "Data Protection & Compliance Services",
  heroSubtitle:
    "Safeguard sensitive data, ensure regulatory compliance and build customer trust with advanced security frameworks, encryption strategies and continuous governance models.",
  primaryCta: "Get Started",
  secondaryCta: "Talk to Us",

  topBlocks: [
    {
      title: "Data Privacy & Protection",
      desc: "End-to-end encryption, role-based access control, secure storage and data lifecycle management to protect sensitive information across systems and business workflows.",
    },
    {
      title: "Compliance Readiness",
      desc: "Prepare for GDPR, ISO, HIPAA and other regulatory frameworks with structured audits, documentation practices, control mapping and compliance-focused implementation strategies.",
    },
    {
      title: "Risk Testing & Management",
      desc: "Continuous risk assessments, vulnerability validation, policy checks and security testing to proactively reduce exposure and strengthen long-term defense mechanisms.",
    },
  ],

  overview:
    "Our data protection and compliance services help organizations secure critical business data while aligning with global and industry-specific regulations. We combine technical controls, governance frameworks, secure access models and continuous monitoring to ensure your systems remain protected, compliant and resilient against evolving cyber threats. From policy alignment to implementation and reporting, we support organizations in building a stronger security and compliance posture.",

  projectDuration: {
    title: "Project Duration",
    subtitle:
      "For fast-launch website requirements, our standard delivery timeline can be completed within 48 hours based on finalized content and clear scope.",
    cards: [
      {
        title: "48 Hours",
        label: "Standard Fast Delivery",
        desc:
          "Best suited for business websites, service pages, company profiles and launch-ready websites with finalized requirements.",
      },
      {
        title: "Design + Development",
        label: "What is Included",
        desc:
          "Responsive layout, structured content sections, contact forms, SEO-ready structure and deployment-ready frontend implementation.",
      },
      {
        title: "Finalized Content",
        label: "Requirement Condition",
        desc:
          "Timeline applies when content, branding and scope are clearly defined and approved before development begins.",
      },
    ],
  },

  deliverySteps: [
    {
      title: "Assessment & Gap Analysis",
      desc: "Analyze current systems, data flows, policies and business processes to identify compliance gaps, data protection risks and security weaknesses.",
    },
    {
      title: "Implementation & Controls",
      desc: "Deploy encryption, access controls, governance policies, monitoring tools and compliance-driven processes tailored to your operational environment.",
    },
    {
      title: "Monitoring & Governance",
      desc: "Continuous monitoring, auditing, reporting and policy reviews help maintain compliance, detect threats early and improve long-term security posture.",
    },
  ],

  technologiesTitle: "Technologies We Use",
  technologiesSubtitle:
    "We use modern, reliable and scalable technologies to deliver strong data protection, policy enforcement, secure access control, compliance readiness and continuous governance across enterprise systems, business applications, cloud platforms and digital infrastructure.",

  technologies: [
    {
      icon: "frontend",
      title: "Application & Access Security",
      desc:
        "We secure business applications, interfaces and user access points to protect sensitive information and reduce exposure across digital environments.",
      items: [
        "Access Control",
        "Role-Based Access",
        "User Protection",
        "Application Security",
        "Portal Security",
        "Policy Enforcement",
      ],
    },
    {
      icon: "backend",
      title: "Governance & Control Frameworks",
      desc:
        "We implement backend security controls, governance models, process rules and audit-driven systems that support compliance and operational accountability.",
      items: [
        "Control Mapping",
        "Governance Logic",
        "Compliance Workflows",
        "Audit Controls",
        "Policy Validation",
        "Security Processes",
      ],
    },
    {
      icon: "database",
      title: "Secure Data Storage",
      desc:
        "We protect structured and sensitive business data with secure storage practices, access restrictions, backup strategy and controlled data handling.",
      items: [
        "MySQL",
        "PostgreSQL",
        "MS SQL",
        "MongoDB",
        "Secure Storage",
        "Data Governance",
      ],
    },
    {
      icon: "cloud",
      title: "Cloud & Infrastructure Compliance",
      desc:
        "We secure cloud-hosted workloads, infrastructure environments and connected systems while supporting monitoring, governance and compliance requirements.",
      items: [
        "AWS",
        "Azure",
        "GCP",
        "Cloud Security",
        "Infrastructure Controls",
        "Compliance Monitoring",
      ],
    },
    {
      icon: "mobile",
      title: "Endpoint & Device Security",
      desc:
        "We strengthen endpoint visibility and device-level control to ensure business data remains protected across user systems and connected platforms.",
      items: [
        "Endpoint Controls",
        "Device Access",
        "Secure Connectivity",
        "User Device Security",
        "Platform Visibility",
        "Protection Policies",
      ],
    },
    {
      icon: "ai",
      title: "Risk Intelligence & Monitoring",
      desc:
        "We combine intelligent analysis, monitoring insights and security validation to support better risk awareness, compliance visibility and protection strategy.",
      items: [
        "Risk Analysis",
        "Threat Insights",
        "Monitoring",
        "Compliance Visibility",
        "Security Validation",
        "Continuous Improvement",
      ],
    },
  ],

  architecture: {
    title: "Data Protection & Compliance Architecture",
    intro:
      "We design structured data protection and compliance architectures that help organizations secure sensitive information, enforce governance controls, align with regulatory frameworks and maintain long-term operational trust. This approach supports visibility, policy enforcement, secure access, monitoring and continuous compliance improvement across enterprise systems.",
    processSteps: [
      {
        icon: "01",
        title: "Data Discovery",
        desc: "Identify sensitive data, critical assets and compliance scope",
      },
      {
        icon: "02",
        title: "Control Mapping",
        desc: "Define policies, access rules and protection requirements",
      },
      {
        icon: "03",
        title: "Security Implementation",
        desc: "Apply encryption, controls and monitoring mechanisms",
      },
      {
        icon: "04",
        title: "Audit & Governance",
        desc: "Validate readiness and maintain compliance over time",
      },
    ],
    layers: {
      top: {
        icon: "</>",
        title: "Applications & Access Layer",
        stack: "User / App / Portal Layer",
        desc: "Business applications and user access points are secured to protect regulated and sensitive data.",
      },
      middle: [
        {
          icon: "[]",
          title: "Infrastructure Controls",
          desc: "System, endpoint, cloud and infrastructure-level protection controls support secure operations.",
        },
        {
          icon: "{}",
          title: "Compliance Engine",
          desc: "Policies, control logic, audit requirements and governance workflows drive compliance alignment.",
        },
        {
          icon: "O",
          title: "Identity & Access Governance",
          desc: "Authentication, permissions and role-based access protect data and reduce unauthorized exposure.",
        },
      ],
      services: {
        icon: "++",
        title: "Risk Management & Reporting",
        desc: "Continuous reviews, monitoring insights and compliance reporting help reduce risk and support accountability.",
      },
      database: {
        icon: "()",
        title: "Protected Data Repository",
        stack: "Secure Storage / Logs / Audit Trails",
        desc: "Sensitive data, compliance records and audit evidence are stored in structured and secure environments.",
      },
      bottom: {
        icon: "<>",
        title: "Monitoring, Audit & Improvement",
        desc: "Ongoing reviews, reporting, remediation and control updates maintain compliance and strengthen resilience.",
      },
      sideCards: [
        {
          icon: "CDN",
          title: "Policy Enforcement",
          desc: "Security policies and control standards are applied consistently across environments.",
        },
        {
          icon: "R",
          title: "Risk Reduction",
          desc: "Risks are identified, prioritized and addressed through structured compliance and protection measures.",
        },
        {
          icon: "M",
          title: "Monitoring & Governance",
          desc: "Continuous oversight supports reporting, accountability and long-term compliance readiness.",
        },
      ],
    },
  },

  maintenanceSupport: {
    title: "Maintenance Support",
    subtitle: "6 Months Website Maintenance Support Included",
    cards: [
      {
        title: "Bug Fixing",
        desc:
          "Quick identification and resolution of issues to ensure smooth functionality.",
      },
      {
        title: "Minor Technical Corrections",
        desc:
          "Small updates and adjustments to maintain system stability and performance.",
      },
      {
        title: "Performance Monitoring",
        desc:
          "Continuous monitoring to ensure speed, uptime and optimal performance.",
      },
      {
        title: "Basic Support Assistance",
        desc:
          "Guidance and support for minor updates and operational queries.",
      },
      {
        title: "Ongoing Technical Support",
        desc:
          "Reliable and responsive support to ensure your website continues to perform effectively.",
      },
    ],
  },

  whyChoose: [
    {
      title: "Security + Compliance Expertise",
      desc:
        "A balanced approach combining strong cybersecurity practices with regulatory compliance strategies to ensure complete business protection.",
    },
    {
      title: "Standards & Framework Driven",
      desc:
        "Aligned with global standards like GDPR, ISO 27001, SOC 2, HIPAA and industry-specific compliance requirements.",
    },
    {
      title: "End-to-End Protection",
      desc:
        "From assessment to monitoring, we provide full lifecycle data protection, governance support and compliance management.",
    },
  ],

  contactTitle: "Contact Softserve Hub",
  contactSubtitle:
    "Secure your data and stay compliant — tell us your requirements today.",
  messageLabel: "Tell us about your data protection and compliance needs...",
  submitLabel: "Submit Project",
};

const ItCybersecuritySolutionsDataProtectionCompliance: React.FC = () => {
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

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ Submitted (frontend demo). Connect backend/API later.");
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

            <Link to="/services/it" className="hover:text-[#D4AF37] transition">
              IT Services
            </Link>
            <span className="mx-2">/</span>

            <Link
              to={"/services/it/" + category.slug}
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
                  (e.currentTarget as HTMLImageElement).src =
                    "/it-hero/default.png";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#fffCF0]/25 via-[#fffCF0]/55 to-[#fffCF0]/95" />
            </div>

            {/* Hero Content */}
            <div className="relative px-8 py-16 md:px-14 md:py-20 text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                {content?.heroTitle ?? item.title}
              </h1>

              <p className="text-[#5b4520] mt-6 max-w-4xl mx-auto text-lg leading-relaxed">
                {content?.heroSubtitle}
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/book-appointment"
                  className="px-8 py-4 rounded-2xl font-semibold bg-[#8a6b18] hover:bg-[#8a6b18] transition shadow-[0_0_40px_rgba(138,107,24,0.35)]"
                >
                  {content?.primaryCta}
                </Link>

                <a
                  href="#contact"
                  className="px-8 py-4 rounded-2xl font-semibold bg-white/70 border border-[#D4AF37]/30 hover:bg-white/80 transition"
                >
                  {content?.secondaryCta}
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
                <h3 className="relative text-xl font-bold text-[#b45309] transition-colors duration-300 group-hover:text-[#1f1605] group-active:text-[#1f1605]">
                  {b.title}
                </h3>
                <p className="relative text-[#67552b] mt-3 leading-relaxed transition-colors duration-300 group-hover:text-[#2f2208] group-active:text-[#2f2208]">
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
          <div className="rounded-3xl bg-white/70 border border-[#D4AF37]/30 p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#8a6b18]">
              Overview
            </h2>
            <p className="text-[#5b4520] mt-4 leading-relaxed text-lg">
              {content?.overview}
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
          <div className="rounded-3xl bg-white/70 border border-[#D4AF37]/30 p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#b45309]">
              How We Deliver
            </h2>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {(content?.deliverySteps ?? []).map(
                (s: { title: string; desc: string }, idx: number) => (
                  <div
                    key={s.title}
                    className="group relative overflow-hidden p-7 rounded-[28px] bg-white/75 border border-[#D4AF37]/30 transition-all duration-300 hover:-translate-y-2 hover:border-[#f6df9a]/50 hover:shadow-[0_0_35px_rgba(212,175,55,0.18)] active:-translate-y-1 active:border-[#f6df9a]/60 active:shadow-[0_0_40px_rgba(96,165,250,0.24)]"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100" />
                    <div className="absolute top-0 left-7 right-7 h-px bg-gradient-to-r from-[#D4AF37]/40 via-[#D4AF37]/70 to-transparent" />
                    <div className="relative w-10 h-10 rounded-xl bg-[#BFA45F] flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    <h3 className="relative mt-5 font-bold text-[#0f172a] transition-colors duration-300 group-hover:text-[#1f1605] group-active:text-[#1f1605]">
                      {s.title}
                    </h3>
                    <p className="relative text-[#67552b] mt-2 leading-relaxed transition-colors duration-300 group-hover:text-[#2f2208] group-active:text-[#2f2208]">
                      {s.desc}
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
                          <h3 className="text-lg font-extrabold leading-tight text-[#b45309] transition-colors">
                            {tech.title}
                          </h3>
                        </div>
                      </div>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isActive
                            ? "mt-5 max-h-[36rem] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-[#67552b] leading-7 text-base md:text-lg">
                          {tech.desc}
                        </p>

                        <div className="mt-6 grid grid-cols-2 gap-3">
                          {tech.items.map((itemName: string) => (
                            <span
                              key={itemName}
                              className="flex items-center justify-center rounded-xl border border-[#D4AF37]/30 bg-white/70 px-3 py-2 text-center text-sm leading-5 text-[#2f2208]"
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

          {/* Architecture */}
          <div className="rounded-[32px] bg-white/70 border border-[#D4AF37]/30 p-8 md:p-10">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-[#8a6b18]">
                {content?.architecture?.title}
              </h2>
              <p className="text-[#5b4520] mt-5 max-w-4xl mx-auto text-base md:text-xl leading-8">
                {content?.architecture?.intro}
              </p>
            </div>

            <div className="mt-8 hidden xl:block">
              <div className="mx-auto max-w-[1280px] rounded-[34px] border border-[#D4AF37]/30 bg-[#fffbeb] p-7 text-[#1f1605] shadow-[0_20px_60px_rgba(212,175,55,0.12)]">
                <div className="grid grid-cols-[0.96fr_1.04fr] gap-5">
                  <div className="space-y-4">
                    {(content?.architecture?.processSteps ?? []).map(
                      (
                        step: { icon: string; title: string; desc: string },
                        idx: number
                      ) => (
                        <React.Fragment key={step.title}>
                          <div className="rounded-[26px] border border-[#D4AF37]/30 bg-[#fffbeb] px-6 py-4 shadow-[0_6px_18px_rgba(212,175,55,0.14)]">
                            <div className="flex items-center gap-4">
                              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[18px] border border-[#f6df9a]/20 bg-[#8a6b18]/10 text-lg font-bold text-[#b45309]">
                                {step.icon}
                              </div>
                              <div>
                                <div className="text-[19px] font-bold leading-tight text-[#1f1605]">
                                  {step.title}
                                </div>
                                <div className="mt-1 text-[16px] leading-6 text-[#67552b]">
                                  {step.desc}
                                </div>
                              </div>
                            </div>
                          </div>
                          {idx < (content?.architecture?.processSteps?.length ?? 0) - 1 ? (
                            <div className="flex justify-start pl-8 text-[28px] leading-none text-[#b45309]">
                              ↓
                            </div>
                          ) : null}
                        </React.Fragment>
                      )
                    )}
                  </div>

                  <div className="space-y-4">
                    <div className="mx-auto w-fit rounded-full bg-gradient-to-r from-[#8a6b18] to-[#BFA45F] px-10 py-2.5 text-xl font-bold text-[#1f1605]">
                      Compliance Security Flow
                    </div>

                    <div className="rounded-[26px] border border-[#D4AF37]/30 bg-[#fffbeb] p-4 shadow-[0_6px_18px_rgba(212,175,55,0.14)]">
                      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                        <div>
                          <div className="mb-3 text-center text-[17px] font-semibold text-[#92400e]">
                            Secure Access Layer
                          </div>
                          <div className="rounded-[22px] border border-[#f6df9a]/20 bg-white px-6 py-5 text-center">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[16px] bg-[#8a6b18]/10 text-base font-bold text-[#b45309]">
                              {content?.architecture?.layers?.top?.icon}
                            </div>
                            <div className="mt-3 text-[34px] font-bold leading-none text-[#1f1605]">
                              {content?.architecture?.layers?.top?.title}
                            </div>
                            <div className="mt-1 text-[16px] text-[#64748b]">
                              {content?.architecture?.layers?.top?.stack}
                            </div>
                          </div>
                        </div>

                        <div className="pt-8 text-3xl text-[#b45309]">→</div>

                        <div>
                          <div className="mb-3 text-center text-[17px] font-semibold text-[#92400e]">
                            Governance Core
                          </div>
                          <div className="rounded-[22px] border border-[#f6df9a]/20 bg-white px-6 py-5 text-center">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[16px] bg-[#8a6b18]/10 text-base font-bold text-[#b45309]">
                              {content?.architecture?.layers?.middle?.[1]?.icon}
                            </div>
                            <div className="mt-3 text-[34px] font-bold leading-none text-[#1f1605]">
                              Compliance
                            </div>
                            <div className="mt-1 text-[16px] text-[#64748b]">
                              Controls & policy logic
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 flex items-center justify-center gap-3 text-[15px] text-[#64748b]">
                        <span className="text-[#b45309]">•</span>
                        <span>- -</span>
                        <span>Protection & reporting</span>
                        <span>- -</span>
                        <span className="text-[#b45309]">•</span>
                      </div>
                      <div className="mt-0.5 text-center text-[28px] text-[#b45309]">↓</div>
                    </div>

                    <div className="mx-auto w-fit rounded-full bg-gradient-to-r from-[#8a6b18] to-[#BFA45F] px-10 py-2.5 text-xl font-bold text-[#1f1605]">
                      Audit & Monitoring
                    </div>

                    <div className="rounded-[26px] border border-[#D4AF37]/30 bg-[#fffbeb] p-4 shadow-[0_6px_18px_rgba(212,175,55,0.14)]">
                      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                        <div className="rounded-[22px] border border-[#f6df9a]/20 bg-white px-5 py-4">
                          <div className="text-[17px] font-bold text-[#1f1605]">
                            {content?.architecture?.layers?.bottom?.title}
                          </div>
                          <div className="mt-1 text-[15px] text-[#64748b]">
                            Audit and governance
                          </div>
                        </div>

                        <div className="text-3xl text-[#b45309]">→</div>

                        <div className="rounded-[22px] border border-[#f6df9a]/20 bg-white px-5 py-4">
                          <div className="text-[17px] font-bold text-[#1f1605]">
                            Continuous compliance
                          </div>
                          <div className="mt-1 text-[15px] text-[#64748b]">
                            Reviews and improvement
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 rounded-[26px] border border-[#D4AF37]/30 bg-[#fffbeb] px-6 py-4 shadow-[0_6px_18px_rgba(212,175,55,0.14)]">
                  <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-[#8a6b18]/10 text-base font-bold text-[#b45309]">
                        01
                      </div>
                      <div className="text-[17px] font-medium text-[#1f1605]">
                        Data discovery
                      </div>
                    </div>

                    <div className="text-3xl text-[#b45309]">→</div>

                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-[#8a6b18]/10 text-base font-bold text-[#b45309]">
                        {content?.architecture?.layers?.bottom?.icon}
                      </div>
                      <div>
                        <div className="text-[17px] font-medium text-[#1f1605]">
                          Monitoring
                        </div>
                        <div className="text-[15px] text-[#64748b]">
                          audit / governance
                        </div>
                      </div>
                    </div>

                    <div className="text-3xl text-[#b45309]">→</div>

                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-[#BFA45F]/10 text-base font-bold text-[#8a6b18]">
                        M
                      </div>
                      <div className="text-[17px] font-medium text-[#1f1605]">
                        Maintenance & support
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 xl:hidden">
              <div className="space-y-4">
                {(content?.architecture?.processSteps ?? []).map(
                  (
                    step: { icon: string; title: string; desc: string },
                    idx: number
                  ) => (
                    <React.Fragment key={step.title}>
                      <div className="rounded-[22px] border border-[#D4AF37]/25 bg-[#f8fafc] p-5">
                        <div className="flex items-start gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-400/10 text-sm font-bold text-cyan-200">
                            {step.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-[#1f1605]">
                              {step.title}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-[#67552b]">
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                      {idx < (content?.architecture?.processSteps?.length ?? 0) - 1 ? (
                        <div className="text-center text-xl text-cyan-200">↓</div>
                      ) : null}
                    </React.Fragment>
                  )
                )}
              </div>

              <div className="space-y-5 mt-5">
                <div className="group rounded-[26px] border border-[#D4AF37]/30 bg-white/75 p-6 transition-all duration-300 hover:border-[#f6df9a]/40 hover:shadow-[0_0_28px_rgba(212,175,55,0.18)]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#f6df9a]/20 bg-[#8a6b18]/10 text-base font-bold text-[#b45309]">
                      {content?.architecture?.layers?.top?.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#3b2a08]">
                        {content?.architecture?.layers?.top?.title}
                      </div>
                      <div className="text-base text-[#92400e]">
                        {content?.architecture?.layers?.top?.stack}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-base leading-7 text-[#67552b]">
                    {content?.architecture?.layers?.top?.desc}
                  </p>
                </div>

                <div className="text-center text-2xl text-[#b45309]">↓</div>

                <div className="grid gap-4 md:grid-cols-3">
                  {(content?.architecture?.layers?.middle ?? []).map(
                    (
                      itemData: { icon: string; title: string; desc: string },
                      idx: number
                    ) => (
                      <div
                        key={itemData.title}
                        className={`rounded-[22px] border bg-white/75 p-6 ${
                          idx === 1 ? "border-[#D4AF37]/20" : "border-[#D4AF37]/30"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4AF37]/30 bg-white/70 text-sm font-bold text-[#b45309]">
                            {itemData.icon}
                          </div>
                          <div className="text-xl font-semibold text-[#1f1605]">
                            {itemData.title}
                          </div>
                        </div>
                        <p className="mt-3 text-base leading-7 text-[#67552b]">
                          {itemData.desc}
                        </p>
                      </div>
                    )
                  )}
                </div>

                <div className="text-center text-2xl text-[#b45309]">↓</div>

                <div className="rounded-[26px] border border-[#D4AF37]/30 bg-white/75 p-6 text-center">
                  <div className="text-2xl font-bold text-[#1f1605]">
                    {content?.architecture?.layers?.services?.title}
                  </div>
                  <p className="mt-3 text-base leading-7 text-[#67552b]">
                    {content?.architecture?.layers?.services?.desc}
                  </p>
                </div>

                <div className="text-center text-2xl text-[#b45309]">↓</div>

                <div className="rounded-[26px] border border-[#D4AF37]/30 bg-white/75 p-6 text-center">
                  <div className="text-2xl font-bold text-[#1f1605]">
                    {content?.architecture?.layers?.database?.title}
                  </div>
                  <div className="mt-1 text-base text-[#8a6b18]/80">
                    {content?.architecture?.layers?.database?.stack}
                  </div>
                  <p className="mt-3 text-base leading-7 text-[#67552b]">
                    {content?.architecture?.layers?.database?.desc}
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#D4AF37]/30 bg-white/75/90 p-4">
                  <div className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#64748b]">
                    Support Infrastructure
                  </div>
                  <div className="mt-4 grid gap-4 md:grid-cols-3">
                    {(content?.architecture?.layers?.sideCards ?? []).map(
                      (card: { icon: string; title: string; desc: string }) => (
                        <div
                          key={card.title}
                          className="rounded-[20px] border border-[#D4AF37]/30 bg-white/75 p-4"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#D4AF37]/30 bg-white/70 text-xs font-bold text-[#b45309]">
                              {card.icon}
                            </div>
                            <div className="text-base font-semibold text-[#3b2a08]">
                              {card.title}
                            </div>
                          </div>
                          <p className="mt-3 text-sm leading-6 text-[#67552b]">
                            {card.desc}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="text-center text-2xl text-[#b45309]">↓</div>

                <div className="rounded-[26px] border border-[#D4AF37]/30 bg-white/75 p-6 text-center">
                  <div className="text-2xl font-bold text-[#3b2a08]">
                    {content?.architecture?.layers?.bottom?.title}
                  </div>
                  <p className="mt-3 text-base leading-7 text-[#67552b]">
                    {content?.architecture?.layers?.bottom?.desc}
                  </p>
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

          {/* Why Choose */}
          <div className="rounded-3xl bg-white/70 border border-[#D4AF37]/30 p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#8a6b18]">
              Why Choose Us
            </h2>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {(content?.whyChoose ?? []).map(
                (w: { title: string; desc: string }, idx: number) => (
                  <div
                    key={w.title}
                    className="group relative overflow-hidden rounded-[28px] border border-[#D4AF37]/30 bg-white/75 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#f6df9a]/50 hover:shadow-[0_0_35px_rgba(212,175,55,0.18)] active:-translate-y-1 active:border-[#f6df9a]/60"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f6df9a]/60 to-transparent" />
                    <div className="text-sm font-semibold text-[#92400e]">
                      0{idx + 1}
                    </div>
                    <h3 className="relative mt-4 text-lg font-bold text-[#b45309] transition-colors duration-300 group-hover:text-[#1f1605]">
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#b45309]">
              {content?.contactTitle}
            </h2>

            <p className="text-[#67552b] mt-3">{content?.contactSubtitle}</p>

            <form onSubmit={onSubmit} className="mt-8 grid md:grid-cols-2 gap-6">
              <input
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) =>
                  setForm((p) => ({ ...p, name: e.target.value }))
                }
                className="px-4 py-3 rounded-xl bg-white/75 border border-[#D4AF37]/30"
              />

              <input
                type="email"
                required
                placeholder="Your email"
                value={form.email}
                onChange={(e) =>
                  setForm((p) => ({ ...p, email: e.target.value }))
                }
                className="px-4 py-3 rounded-xl bg-white/75 border border-[#D4AF37]/30"
              />

              <textarea
                rows={5}
                placeholder={content?.messageLabel}
                value={form.message}
                onChange={(e) =>
                  setForm((p) => ({ ...p, message: e.target.value }))
                }
                className="md:col-span-2 px-4 py-3 rounded-xl bg-white/75 border border-[#D4AF37]/30"
              />

              <div className="md:col-span-2 flex gap-4 flex-wrap">
                <button className="px-8 py-4 rounded-2xl bg-[#BFA45F] hover:bg-[#BFA45F] transition font-semibold">
                  {content?.submitLabel}
                </button>

                <Link
                  to={"/services/it/" + category.slug}
                  className="px-8 py-4 rounded-2xl bg-white/70 border border-[#D4AF37]/30 hover:bg-white/80 transition font-semibold"
                >
                  Back to {category.title}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItCybersecuritySolutionsDataProtectionCompliance;
