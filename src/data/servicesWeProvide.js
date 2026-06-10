import heroImg from "../images/hero1.webp";
import webDevImg from "../images/websiteandwebapplicationdevelopment.webp";
import mobileDevImg from "../images/mobileapplicationdevelopment.webp";
import enterpriseImg from "../images/customenterprisessoftwaredevelopment.webp";
import aiAutomationImg from "../images/aiandautomation.webp";
import digitalMarketingImg from "../images/digitalmarketingservices.webp";

/** Services showcased in the Dimensions marquee — each links to its service page. */
export const SERVICES_WE_PROVIDE = [
  {
    id: "01",
    title: "Website Design & Development",
    description:
      "Modern, responsive websites designed to build trust and convert visitors into customers.",
    coverSrc: webDevImg,
    fallbackSrc: heroImg,
    to: "/services/it/website-web-application-services/website-design-development",
  },
  {
    id: "02",
    title: "Mobile Application Development",
    description:
      "Native and cross-platform apps with polished UX and dependable releases.",
    coverSrc: mobileDevImg,
    fallbackSrc: heroImg,
    to: "/services/it/mobile-application-development/android-app-development",
  },
  {
    id: "03",
    title: "Custom Enterprise Software",
    description:
      "Bespoke systems and integrations aligned with your workflows and governance.",
    coverSrc: enterpriseImg,
    fallbackSrc: heroImg,
    to: "/services/it/custom-enterprise-software/custom-enterprise-software-development",
  },
  {
    id: "04",
    title: "AI & Automation Solutions",
    description:
      "Intelligent automation and AI-assisted workflows that save time and reduce error.",
    coverSrc: aiAutomationImg,
    fallbackSrc: heroImg,
    to: "/services/it/ai-automation-solutions/aiot-solutions",
  },
  {
    id: "05",
    title: "Digital Marketing Services",
    description:
      "Brand presence, campaigns and analytics tuned to measurable growth.",
    coverSrc: digitalMarketingImg,
    fallbackSrc: heroImg,
    to: "/services/non-it/digital-marketing-services/lead-generation-campaigns",
  },
  {
    id: "06",
    title: "Web Application Development",
    description:
      "Secure, scalable web applications tailored to your business workflows and customer journeys.",
    coverSrc: webDevImg,
    fallbackSrc: heroImg,
    to: "/services/it/website-web-application-services/web-application-development",
  },
  {
    id: "07",
    title: "Chatbot Development",
    description:
      "Conversational assistants that improve support, lead capture and customer engagement.",
    coverSrc: aiAutomationImg,
    fallbackSrc: heroImg,
    to: "/services/it/ai-automation-solutions/chatbot-development",
  },
  {
    id: "08",
    title: "Cloud Migration Services",
    description:
      "Smooth migration to cloud platforms with performance, reliability and security in mind.",
    coverSrc: enterpriseImg,
    fallbackSrc: heroImg,
    to: "/services/it/cloud-infrastructure-services/cloud-migration-services",
  },
  {
    id: "09",
    title: "Cybersecurity Solutions",
    description:
      "Security audits, compliance support, monitoring and assessments to protect digital assets.",
    coverSrc: enterpriseImg,
    fallbackSrc: heroImg,
    to: "/services/it/cybersecurity-solutions/security-audits",
  },
  {
    id: "10",
    title: "Brand Identity & Positioning",
    description:
      "Build a clear brand identity, voice and market position that customers remember.",
    coverSrc: digitalMarketingImg,
    fallbackSrc: heroImg,
    to: "/services/non-it/branding-creative-services/brand-identity-positioning",
  },
  {
    id: "11",
    title: "Business Process Optimisation",
    description:
      "Improve workflows, remove operational friction and build more efficient business systems.",
    coverSrc: enterpriseImg,
    fallbackSrc: heroImg,
    to: "/services/non-it/business-strategy-consulting/business-process-optimisation",
  },
  {
    id: "12",
    title: "SEO & Content Growth",
    description:
      "Search and content systems that improve visibility, authority and organic traffic.",
    coverSrc: digitalMarketingImg,
    fallbackSrc: heroImg,
    to: "/services/non-it/digital-marketing-services/seo-content-growth",
  },
];
