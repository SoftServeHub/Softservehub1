import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const category = {
  slug: "branding-creative-services",
  title: "Branding & Creative Services",
};

const item = {
  slug: "ui-ux-creative-design",
  title: "UI/UX Design Services",
  shortDesc:
    "User-focused digital experiences that improve usability, engagement, conversions and brand perception.",
};

const heroImage = "/non-it-hero/ui-ux-creative-design.webp";

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
  heroTitle: "UI/UX Design Services",
  heroSubtitle:
    "Softserve Hub delivers UI/UX design services that help businesses create intuitive, engaging and conversion-focused digital experiences. Our approach improves usability, simplifies user journeys, strengthens customer satisfaction and enhances brand perception across websites, web applications, mobile apps and other digital platforms.",

  primaryCta: "Explore UI/UX Services",
  secondaryCta: "Talk to Us",

  topBlocks: [
    {
      title: "User Research & Analysis",
      desc: "We study user behavior, audience expectations, navigation patterns, pain points and market trends to create experience strategies that are rooted in real user needs and business goals.",
    },
    {
      title: "Interface Design",
      desc: "We design visually engaging, easy-to-use and brand-aligned digital interfaces that improve clarity, strengthen usability and create smoother interactions across every important touchpoint.",
    },
    {
      title: "Usability Testing",
      desc: "We validate design decisions through structured testing, feedback loops and iterative refinement to improve usability, reduce friction and deliver more effective user experiences.",
    },
  ],

  overview:
    "Our UI/UX design services combine research, strategy, user-centered thinking and creative execution to build seamless digital experiences across web and mobile platforms. We help businesses improve usability, reduce user friction, strengthen digital engagement and increase conversions through interfaces that are functional, attractive and aligned with business objectives. From wireframes and workflows to prototypes and polished visual design, our process focuses on creating digital experiences that are easy to understand, enjoyable to use and built to support long-term product growth.",

  projectDuration: {
    title: "Project Execution Excellence",
    subtitle:
      "We deliver strategy-led UI/UX solutions focused on usability improvement, seamless user journeys and scalable digital growth.",
    cards: [
      {
        title: "Fast & Strategic Execution",
        label: "Best suited for",
        desc:
          "Structured execution that helps businesses improve usability faster and launch stronger digital experiences.",
      },
      {
        title: "What Our Execution Covers",
        label: "What is Included",
        desc:
          "User research, journey mapping, interface design, prototyping and testing for focused design delivery.",
      },
      {
        title: "Why Businesses Choose Softserve Hub",
        label: "Requirement Condition",
        desc:
          "Expert UI/UX guidance, transparent collaboration and scalable design systems built for long-term product growth.",
      },
    ],
  },

  deliverTitle: "Our UI/UX Design Process",
  deliverySteps: [
    {
      title: "Research — User & Market Insights",
      desc: "We analyze users, competitors, business objectives, user journeys and digital behavior patterns to define a strong design direction that supports both usability and business performance.",
    },
    {
      title: "Design — Wireframes & Visual Design",
      desc: "We create structured wireframes, interactive prototypes, layout systems and high-fidelity interface designs that improve navigation clarity, visual consistency and overall user experience.",
    },
    {
      title: "Validate — Testing & Refinement",
      desc: "We test flows, gather feedback, identify usability gaps and refine the design to ensure the final experience performs better in terms of engagement, accessibility and conversion outcomes.",
    },
  ],

  whoWeAreTitle: "Who We Are",
  whoWeAreText:
    "Softserve Hub delivers structured non-IT UI/UX and creative design services that improve usability, digital clarity and long-term customer experience. We combine research, strategy, interface design and practical execution to build experiences that perform across digital touchpoints.",
  whoWeAreCards: [
    {
      title: "User-Centered Execution",
      desc:
        "We align every design engagement with user needs, business objectives and measurable experience outcomes.",
    },
    {
      title: "Research & Interface Expertise",
      desc:
        "Our team combines UX strategy, interaction thinking and visual design to create intuitive and scalable digital experiences.",
    },
    {
      title: "Long-Term Experience Improvement",
      desc:
        "We support sustainable product growth through testing, refinement, consistency and practical design guidance.",
    },
  ],

  technologiesTitle: "Business Analysis, Platforms & Operational Tools",
  technologiesSubtitle:
    "We use proven UX research methods, interface design platforms, collaboration tools and analytics systems to deliver practical, scalable and measurable digital experiences.",
  technologies: [
    {
      icon: "strategy",
      title: "UX Research & Strategy Tools",
      desc:
        "We use structured discovery and research frameworks to evaluate user behavior, design direction and digital experience priorities.",
      items: ["User Journey Mapping", "Persona Development", "Heuristic Evaluation"],
    },
    {
      icon: "design",
      title: "UI Design & Prototyping Platforms",
      desc:
        "We build wireframes, interface systems and interactive prototypes using modern design and collaboration platforms.",
      items: ["Figma", "Adobe XD", "Sketch"],
    },
    {
      icon: "marketing",
      title: "Behavior & Engagement Platforms",
      desc:
        "We align design decisions with analytics and engagement platforms that reveal how users interact with digital products.",
      items: ["Google Analytics", "Hotjar", "Meta Ads Manager"],
    },
    {
      icon: "content",
      title: "Content & Experience Systems",
      desc:
        "We organize content structure, message hierarchy and interface clarity through practical UX content planning methods.",
      items: ["Information Architecture", "Content Flow Mapping", "UX Writing Guidelines"],
    },
    {
      icon: "operations",
      title: "Design Operations & Collaboration",
      desc:
        "We use delivery and collaboration systems that keep design reviews, handoffs and team coordination clear and efficient.",
      items: ["Notion", "Trello", "Asana"],
    },
    {
      icon: "analytics",
      title: "Reporting & UX Insights",
      desc:
        "We track usability, engagement and design performance through insight systems that support better product decisions.",
      items: ["Usability Reports", "Engagement Dashboards", "Conversion Tracking"],
    },
  ],

  architecture: {
    title: "Non-IT Service Delivery Framework",
    intro:
      "Our structured delivery model helps businesses move from UX discovery to design execution, validation and ongoing experience improvement with clear milestones and measurable progress.",
    processSteps: [
      {
        icon: "01",
        title: "Requirement gathering",
        desc: "Understand product goals, user expectations, business objectives and experience challenges",
      },
      {
        icon: "02",
        title: "Analysis",
        desc: "Assess current journeys, usability gaps, competitor patterns and key user experience priorities",
      },
      {
        icon: "03",
        title: "Planning & strategy",
        desc: "Define design direction, user flows, visual hierarchy and structured execution priorities",
      },
      {
        icon: "04",
        title: "Resource allocation",
        desc: "Assign the right UX strategists, UI designers and creative delivery resources",
      },
    ],
    deliveryCards: [
      {
        icon: "05",
        title: "Execution",
        desc: "Create wireframes, prototypes and interface systems with structured design implementation",
      },
      {
        icon: "06",
        title: "Monitoring & optimization",
        desc: "Review usability, feedback and design performance to refine the final experience",
      },
    ],
    closureCard: {
      icon: "07",
      title: "Reporting & support",
      desc: "Provide design documentation, usability insights and ongoing support for experience improvement",
    },
  },

  maintenanceSupport: {
    title: "Continuous Business Growth & Support",
    subtitle:
      "We support long-term digital growth through continuous UX refinement, performance improvement and strategic guidance that strengthens usability and customer engagement.",
    cards: [
      {
        title: "Usability Optimization & Experience Quality",
        desc:
          "Improve interface clarity, reduce friction and strengthen user experience quality across digital touchpoints.",
      },
      {
        title: "Strategic Refinement & Product Alignment",
        desc:
          "Refine design decisions based on feedback, goals and user behavior to support product growth and adaptation.",
      },
      {
        title: "Performance Monitoring & UX Insights",
        desc:
          "Track user behavior, engagement patterns and usability outcomes to support better digital decisions.",
      },
      {
        title: "Consultation & Design Excellence",
        desc:
          "Provide expert UX guidance to improve product direction, interaction quality and design consistency.",
      },
      {
        title: "Engagement & Conversion Support",
        desc:
          "Support experience improvements that strengthen customer trust, engagement and conversion performance.",
      },
    ],
  },

  frameworkTitle: "From Friction to Better User Experience",
  frameworkSubtitle:
    "Transforming confusing digital interactions into intuitive, engaging and high-performing user experiences that support usability, trust and conversion growth.",

  beforePoints: [
    "Confusing user interfaces that make navigation difficult",
    "Poor user engagement and weak interaction flow",
    "High bounce rates caused by friction and unclear experience design",
    "Low conversion rates due to weak usability and inconsistent journeys",
  ],

  afterPoints: [
    "Improved usability with clearer and more intuitive interfaces",
    "Higher user engagement through better experience design",
    "Stronger conversion performance with optimized user journeys",
    "A more consistent and memorable digital brand experience",
  ],

  whyChooseTitle: "Why Softserve Hub",
  whyChoose: [
    {
      title: "Scalable & Business-Aligned Solutions",
      desc:
        "We create scalable UI/UX systems aligned with business goals, user expectations and long-term product growth.",
    },
    {
      title: "Structured & Transparent Execution",
      desc:
        "Our process combines milestone-based delivery, research-backed design and quality-driven execution for dependable outcomes.",
    },
    {
      title: "Long-Term Growth & Partnership",
      desc:
        "We support continuous improvement, usability refinement and sustainable product success through a customer-focused approach.",
    },
  ],

  contactTitle: "Create Better User Experiences",
  contactSubtitle:
    "Ready to improve your website, application, or digital platform with better UI/UX design? Let’s create intuitive, engaging and user-focused experiences that support usability, strengthen brand perception and drive better business results.",
  messageLabel: "Tell us about your product or design needs...",
  submitLabel: "Request UI/UX Consultation",
};

const NonItBrandingCreativeServicesUiUxCreativeDesign: React.FC = () => {
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
            {/* ✅ IMAGE BANNER */}
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

          {/* How we deliver */}
          <div className="rounded-3xl bg-white/70 border border-[#D4AF37]/30 p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#b45309]">
              {content?.deliverTitle ?? "How We Deliver"}
            </h2>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {(content?.deliverySteps ?? []).map((s: { title: string; desc: string }, idx: number) => (
                <div
                  key={s.title}
                  className="group relative overflow-hidden p-7 rounded-2xl bg-white/75 border border-[#D4AF37]/30 transition-all duration-300 hover:-translate-y-2 hover:border-[#f6df9a]/50 hover:shadow-[0_0_35px_rgba(212,175,55,0.18)]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative w-10 h-10 rounded-xl bg-[#BFA45F] flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="relative mt-5 font-bold text-[#0f172a] transition-colors duration-300 group-hover:text-[#1f1605]">
                    {s.title}
                  </h3>
                  <p className="relative text-[#67552b] mt-2 leading-relaxed transition-colors duration-300 group-hover:text-[#2f2208]">
                    {s.desc}
                  </p>
                </div>
              ))}
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

          {/* Framework (optional) */}
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
                      <li key={p} className="flex gap-3">
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
                      Research <br />
                      Design <br />
                      Validate
                    </div>
                    <div className="mt-4 text-lg md:text-xl text-[#2f2208]/90">
                      Governance + measurable KPIs
                    </div>
                  </div>
                </div>

                <div className="rounded-[26px] border border-[#D4AF37]/30 bg-[#071224] p-7 shadow-[0_10px_24px_rgba(15,23,42,0.2)]">
                  <h3 className="text-2xl font-bold text-[#8dffbf]">After</h3>
                  <ul className="mt-6 space-y-5 text-[#2f2208] text-base md:text-lg leading-8">
                    {(content?.afterPoints ?? []).map((p: string) => (
                      <li key={p} className="flex gap-3">
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

export default NonItBrandingCreativeServicesUiUxCreativeDesign;
