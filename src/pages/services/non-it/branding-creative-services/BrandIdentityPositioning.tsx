import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const category = {
  slug: "branding-creative-services",
  title: "Branding & Creative Services",
};

const item = {
  slug: "brand-identity-positioning",
  title: "Brand Identity Design",
  shortDesc:
    "Create distinctive, memorable and scalable brand identities with strategic positioning, visual consistency and long-term brand recognition.",
};

const heroImage = "/non-it-hero/brand-identity-positioning.webp";

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
    case "marketing":
      return (
        <svg {...commonProps}>
          <path d="M4.5 14.5V9.8a1.8 1.8 0 0 1 1.8-1.8h2.1l6.9-3v14l-6.9-3H6.3a1.8 1.8 0 0 1-1.8-1.8Z" />
          <path d="M8.5 16.2 10 20" />
          <path d="M17.5 9.5a3.5 3.5 0 0 1 0 5" />
          <path d="M19.2 8a6 6 0 0 1 0 8" />
        </svg>
      );
    case "design":
      return (
        <svg {...commonProps}>
          <path d="m4.5 15.5 6.5-6.5 4 4 4.5-4.5" />
          <path d="m14.5 8.5 1.8-1.8a1.8 1.8 0 1 1 2.5 2.5L17 11" />
          <path d="M6.5 17.5h11" />
        </svg>
      );
    case "content":
      return (
        <svg {...commonProps}>
          <rect x="4.5" y="4.5" width="15" height="15" rx="2.5" />
          <path d="M8 9h8" />
          <path d="M8 12.5h8" />
          <path d="M8 16h5" />
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
  heroTitle: "Brand Identity Design",
  heroSubtitle:
    "Softserve Hub helps businesses create distinctive, memorable and consistent brand identities that improve recognition, strengthen trust, communicate brand values clearly and help businesses stand out in competitive markets across digital, print and customer-facing touchpoints.",

  primaryCta: "Explore Branding Services",
  secondaryCta: "Talk to Us",

  topBlocks: [
    {
      title: "Logo & Visual Identity",
      desc: "We design professional logos, color systems, typography and visual brand elements that create a strong first impression, improve recognition and build a consistent brand presence across every customer touchpoint.",
    },
    {
      title: "Brand Strategy",
      desc: "Our brand strategy services define positioning, messaging, tone of voice, value communication and market differentiation to help businesses present a clear and compelling identity to their target audience.",
    },
    {
      title: "Brand Guidelines",
      desc: "We create scalable brand guidelines that help teams maintain consistency across websites, social media, presentations, packaging, marketing materials and future business communications.",
    },
  ],

  overview:
    "Our brand identity design services combine brand strategy, creative direction and visual design to build brands that are recognizable, meaningful and scalable across every platform. We help businesses create a strong visual foundation that communicates credibility, strengthens market presence, improves customer trust and supports long-term brand growth. From logo systems and color palettes to typography, messaging alignment and consistency standards, our approach ensures your brand identity is not only attractive but also strategically built for business impact, recall and competitive differentiation.",

  projectDuration: {
    title: "Project Execution Excellence",
    subtitle:
      "We deliver strategy-led brand identity solutions focused on clear positioning, visual consistency and scalable brand growth.",
    cards: [
      {
        title: "Fast & Strategic Execution",
        label: "Best suited for",
        desc:
          "Structured execution that helps brands launch faster, sharpen positioning and improve market visibility.",
      },
      {
        title: "What Our Execution Covers",
        label: "What is Included",
        desc:
          "Brand discovery, identity strategy, visual design systems and rollout planning for consistent delivery.",
      },
      {
        title: "Why Businesses Choose Softserve Hub",
        label: "Requirement Condition",
        desc:
          "Expert branding guidance, transparent collaboration and scalable identity systems built for long-term growth.",
      },
    ],
  },

  deliverTitle: "How We Deliver",
  deliverySteps: [
    {
      title: "Requirement Gathering",
      desc:
        "Understand brand vision, target audience, business goals and positioning challenges from the start.",
    },
    {
      title: "Analysis",
      desc:
        "Review market context, competitors, customer perception and brand gaps to shape the right identity direction.",
    },
    {
      title: "Planning & Strategy",
      desc:
        "Define brand strategy, creative direction, tone and a structured identity roadmap for execution.",
    },
  ],

  whoWeAreTitle: "Who We Are",
  whoWeAreText:
    "Softserve Hub delivers structured non-IT branding and creative services that strengthen market presence, brand consistency and long-term business recognition. We combine strategic thinking, creative execution and practical implementation to build identity systems that perform across every touchpoint.",
  whoWeAreCards: [
    {
      title: "Strategy-Led Branding",
      desc:
        "We align every branding engagement with business goals, target audience expectations and measurable market impact.",
    },
    {
      title: "Creative & Positioning Expertise",
      desc:
        "Our team combines brand strategy, messaging clarity and visual design to create distinctive and scalable brand systems.",
    },
    {
      title: "Long-Term Brand Consistency",
      desc:
        "We support sustainable brand growth through guidelines, rollout structure and consistency across customer touchpoints.",
    },
  ],

  technologiesTitle: "Business Analysis, Platforms & Operational Tools",
  technologiesSubtitle:
    "We use proven brand strategy frameworks, design platforms, research tools and reporting methods to deliver practical, scalable and measurable branding solutions.",
  technologies: [
    {
      icon: "strategy",
      title: "Brand Analysis & Strategy Tools",
      desc:
        "We use structured brand discovery and positioning frameworks to evaluate audience fit, differentiation and growth direction.",
      items: ["SWOT Analysis", "Brand Positioning Framework", "Audience Persona Mapping"],
    },
    {
      icon: "marketing",
      title: "Marketing & Branding Platforms",
      desc:
        "We align branding decisions with campaign platforms and digital channels used for visibility, communication and performance.",
      items: ["Google Ads", "Meta Ads Manager", "Google Analytics"],
    },
    {
      icon: "design",
      title: "Creative Design Tools",
      desc:
        "We use modern creative platforms to build logo systems, visual assets, presentations and scalable brand collateral.",
      items: ["Adobe Illustrator", "Adobe Photoshop", "Canva"],
    },
    {
      icon: "content",
      title: "Content & Messaging Systems",
      desc:
        "We shape brand voice, message consistency and communication standards using structured content planning methods.",
      items: ["Brand Messaging Framework", "Tone of Voice Guidelines", "Content Strategy Templates"],
    },
    {
      icon: "operations",
      title: "Brand Governance & Rollout",
      desc:
        "We build practical governance systems that help teams maintain consistency across campaigns, internal teams and external partners.",
      items: ["Brand Guidelines", "Asset Management Systems", "Approval Workflow Templates"],
    },
    {
      icon: "analytics",
      title: "Reporting & Brand Insights",
      desc:
        "We track visibility, engagement and brand consistency signals through reporting structures that support better decisions.",
      items: ["Performance Dashboards", "Brand Audit Reports", "Engagement Tracking"],
    },
  ],

  architecture: {
    title: "Non-IT Service Delivery Framework",
    intro:
      "Our structured delivery model helps businesses move from brand discovery to rollout, consistency management and ongoing brand support with clear milestones and measurable progress.",
    processSteps: [
      {
        icon: "01",
        title: "Requirement gathering",
        desc: "Understand brand vision, business goals, audience expectations and identity requirements",
      },
      {
        icon: "02",
        title: "Analysis",
        desc: "Assess current brand perception, competitor positioning and key communication gaps",
      },
      {
        icon: "03",
        title: "Planning & strategy",
        desc: "Define brand positioning, creative direction, messaging and rollout priorities",
      },
      {
        icon: "04",
        title: "Resource allocation",
        desc: "Assign the right brand strategists, designers and creative delivery resources",
      },
    ],
    deliveryCards: [
      {
        icon: "05",
        title: "Execution",
        desc: "Develop brand assets, identity systems and communication materials with structured implementation",
      },
      {
        icon: "06",
        title: "Monitoring & optimization",
        desc: "Review consistency, audience response and rollout quality to refine brand delivery",
      },
    ],
    closureCard: {
      icon: "07",
      title: "Reporting & support",
      desc: "Provide brand documentation, rollout guidance and ongoing support for brand consistency",
    },
  },

  maintenanceSupport: {
    title: "Continuous Business Growth & Support",
    subtitle:
      "We support long-term brand growth through continuous refinement, consistency improvement and strategic guidance that strengthens visibility and business impact.",
    cards: [
      {
        title: "Brand Consistency & Visual Refinement",
        desc:
          "Strengthen visual identity systems, improve consistency and maintain a professional brand presence across channels.",
      },
      {
        title: "Strategic Positioning & Growth Alignment",
        desc:
          "Refine brand strategy based on business goals, audience shifts and market positioning opportunities.",
      },
      {
        title: "Performance Monitoring & Brand Insights",
        desc:
          "Track brand engagement, visibility trends and communication effectiveness to support better decisions.",
      },
      {
        title: "Consultation & Creative Excellence",
        desc:
          "Provide expert branding guidance to improve execution quality, message clarity and creative consistency.",
      },
      {
        title: "Market Presence & Trust Building",
        desc:
          "Support brand communication and positioning efforts that improve recognition, trust and long-term credibility.",
      },
    ],
  },

  frameworkTitle: "Brand Identity Transformation Framework",
  frameworkSubtitle:
    "From inconsistent visuals and unclear messaging to a strategic, memorable and scalable brand identity that supports long-term recognition and business growth.",

  beforePoints: [
    "Inconsistent brand visuals across digital and offline touchpoints",
    "Low brand recognition and weak customer recall",
    "Unclear brand messaging and inconsistent communication style",
    "Limited market differentiation in competitive industries",
  ],

  afterPoints: [
    "Strong and consistent brand presence across all channels",
    "Improved trust, recognition and professional brand perception",
    "Clear brand positioning and stronger message alignment",
    "Scalable visual identity system for long-term growth",
  ],

  whyChooseTitle: "Why Softserve Hub",
  whyChoose: [
    {
      title: "Scalable & Business-Aligned Solutions",
      desc:
        "We create scalable brand systems aligned with business goals, market positioning and long-term brand growth.",
    },
    {
      title: "Structured & Transparent Execution",
      desc:
        "Our process combines milestone-based delivery, creative clarity and quality-driven execution for dependable outcomes.",
    },
    {
      title: "Long-Term Growth & Partnership",
      desc:
        "We support ongoing brand consistency, refinement and strategic growth through a customer-focused partnership approach.",
    },
  ],

  contactTitle: "Build a Brand That Stands Out",
  contactSubtitle:
    "Ready to create, refresh, or strengthen your brand identity? Let’s design a distinctive brand system that reflects your business values, connects with your audience and supports long-term brand visibility across every platform.",
  messageLabel: "Tell us about your brand or design needs...",
  submitLabel: "Request Branding Consultation",
};

const NonItBrandingCreativeServicesBrandIdentityPositioning: React.FC = () => {
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
            {/* IMAGE BANNER */}
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
            {(content?.topBlocks ?? []).map((b: { title: string; desc: string }) => (
              <div
                key={b.title}
                className="p-7 rounded-2xl bg-white/70 border border-[#D4AF37]/30"
              >
                <h3 className="text-xl font-bold text-[#b45309]">{b.title}</h3>
                <p className="text-[#67552b] mt-3 leading-relaxed">{b.desc}</p>
              </div>
            ))}
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

          {/* Project Execution Excellence */}
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
                    <p className="relative mt-5 text-base md:text-lg leading-8 text-[#67552b]">
                      {card.desc}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* How We Deliver */}
          <div className="rounded-[32px] border border-[#D4AF37]/30 bg-[linear-gradient(180deg,rgba(18,20,39,0.96),rgba(10,16,28,0.98))] p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#b45309]">
              {content?.deliverTitle}
            </h2>

            <div className="mt-10 grid md:grid-cols-3 gap-6 items-stretch">
              {(content?.deliverySteps ?? []).map(
                (step: { title: string; desc: string }, idx: number) => (
                  <div
                    key={step.title}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[#D4AF37]/30 bg-white/75 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#f6df9a]/50 hover:shadow-[0_0_35px_rgba(212,175,55,0.18)]"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-[#8a6b18] to-[#BFA45F] text-sm font-bold text-[#1f1605]">
                      {idx + 1}
                    </div>
                    <h3 className="relative mt-6 text-2xl font-bold text-[#1f1605]">
                      {step.title}
                    </h3>
                    <p className="relative mt-4 text-base md:text-lg leading-8 text-[#67552b]">
                      {step.desc}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Who We Are */}
          <div className="rounded-[32px] border border-[#D4AF37]/30 bg-[linear-gradient(180deg,rgba(18,20,39,0.96),rgba(10,16,28,0.98))] p-8 md:p-10">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#8a6b18]">
                {content?.whoWeAreTitle}
              </h2>
              <p className="text-[#5b4520] mt-5 max-w-5xl mx-auto text-base md:text-lg leading-8">
                {content?.whoWeAreText}
              </p>
            </div>

            <div className="mt-10 grid md:grid-cols-3 gap-6 items-stretch">
              {(content?.whoWeAreCards ?? []).map(
                (card: { title: string; desc: string }) => (
                  <div
                    key={card.title}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[#D4AF37]/30 bg-white/75 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#f6df9a]/50 hover:shadow-[0_0_35px_rgba(212,175,55,0.18)]"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <h3 className="relative text-2xl font-bold text-[#8a6b18]">
                      {card.title}
                    </h3>
                    <p className="relative mt-4 text-base md:text-lg leading-8 text-[#67552b]">
                      {card.desc}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Technologies */}
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
                  const accent = "blue" as const;
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
                          {renderTechnologyIcon(tech.icon, accent)}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold leading-tight text-[#b45309]">
                          {tech.title}
                        </h3>
                      </div>

                      <div
                        className={`grid transition-all duration-300 ease-out ${
                          isOpen ? "grid-rows-[1fr] opacity-100 mt-5" : "grid-rows-[0fr] opacity-0 mt-0"
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

          {/* Architecture */}
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
                      <div className="rounded-[22px] border border-[#D4AF37]/30 bg-white/75 p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#f6df9a]/20 bg-[#8a6b18]/10 text-sm font-bold text-[#b45309]">
                            {step.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-[#3b2a08]">
                              {step.title}
                            </h3>
                            <p className="mt-2 text-base leading-7 text-[#67552b]">
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

                    <div className="mt-6 border-t border-dashed border-[#D4AF37]/30 pt-3 text-center text-[16px] text-[#b45309]/70">
                      review & updates
                    </div>
                    <div className="text-center text-[28px] text-[#b45309]">↓</div>
                  </div>

                  <div className="rounded-[30px] border border-[#D4AF37]/30 bg-white/75 p-6">
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

          {/* Continuous Business Growth & Support */}
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
                    className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[#D4AF37]/30 bg-white/75 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#f6df9a]/50 hover:shadow-[0_0_35px_rgba(212,175,55,0.18)] ${
                      idx < 3 ? "xl:col-span-2" : "xl:col-span-3"
                    }`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <h3 className="relative text-xl md:text-2xl font-bold text-[#b45309]">
                      {card.title}
                    </h3>
                    <p className="relative mt-4 text-base md:text-lg leading-7 text-[#67552b]">
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
            <div className="rounded-[32px] border border-[#D4AF37]/30 bg-[linear-gradient(180deg,rgba(18,20,39,0.96),rgba(10,16,28,0.98))] p-8 md:p-10">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#8a6b18]">
                  {content?.frameworkTitle ?? "Framework"}
                </h2>
                {content?.frameworkSubtitle && (
                  <p className="text-[#5b4520] mt-5 max-w-4xl mx-auto text-base md:text-lg leading-8">
                    {content.frameworkSubtitle}
                  </p>
                )}
              </div>

              <div className="mt-10 grid md:grid-cols-3 gap-6 items-stretch">
                <div className="rounded-[26px] border border-[#D4AF37]/30 bg-[#071224] p-7 shadow-[0_10px_24px_rgba(15,23,42,0.2)]">
                  <h3 className="text-2xl font-bold text-[#ff9d9d]">Before</h3>
                  <ul className="mt-6 space-y-5 text-[#2f2208] text-base md:text-lg leading-8">
                    {(content?.beforePoints ?? []).map((p: string) => (
                      <li key={p} className="flex items-start gap-3">
                        <span className="text-[#ff9d9d] leading-8">•</span>
                        <span>{p}</span>
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
                      Strategy <br />
                      Visual Identity <br />
                      Consistency
                    </div>
                    <div className="mt-4 text-lg md:text-xl text-[#2f2208]/90">
                      Recognition + trust + scalable brand presence
                    </div>
                  </div>
                </div>

                <div className="rounded-[26px] border border-[#D4AF37]/30 bg-[#071224] p-7 shadow-[0_10px_24px_rgba(15,23,42,0.2)]">
                  <h3 className="text-2xl font-bold text-[#8dffbf]">After</h3>
                  <ul className="mt-6 space-y-5 text-[#2f2208] text-base md:text-lg leading-8">
                    {(content?.afterPoints ?? []).map((p: string) => (
                      <li key={p} className="flex items-start gap-3">
                        <span className="text-[#8dffbf] leading-8">•</span>
                        <span>{p}</span>
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
              {content?.whyChooseTitle}
            </h2>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {(content?.whyChoose ?? []).map(
                (w: { title: string; desc: string }, idx: number) => (
                  <div
                    key={w.title}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[#D4AF37]/30 bg-white/75 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#f6df9a]/50 hover:shadow-[0_0_35px_rgba(212,175,55,0.18)]"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="text-sm font-semibold text-[#92400e]">
                      0{idx + 1}
                    </div>
                    <h3 className="relative mt-4 text-xl font-bold text-[#b45309]">
                      {w.title}
                    </h3>
                    <p className="relative mt-3 text-base md:text-lg leading-7 text-[#67552b]">
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

export default NonItBrandingCreativeServicesBrandIdentityPositioning;
