export type ServiceItem = {
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  tags: string[];
};

export type ServiceCategory = {
  slug: string;
  title: string;
  desc: string;
  items: ServiceItem[];
};

const item = (
  slug: string,
  title: string,
  shortDesc: string,
  tags: string[] = ["Strategy", "Design", "Delivery"]
): ServiceItem => ({
  slug,
  title,
  shortDesc,
  description: shortDesc,
  tags,
});

export const IT_SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "website-web-application-services",
    title: "Website & Web Application Services",
    desc: "Premium websites, web applications, SaaS platforms and ecommerce systems built for performance, conversion and scale.",
    items: [
      item("website-design-development", "Website Design & Development", "Modern, responsive websites designed to build trust and convert visitors into customers.", ["UI/UX", "Responsive", "SEO"]),
      item("web-application-development", "Web Application Development", "Secure, scalable web applications tailored to your business workflows and customer journeys.", ["React", "APIs", "Dashboards"]),
      item("saas-application-development", "SaaS Application Development", "Cloud-ready SaaS products with subscription workflows, user portals and scalable architecture.", ["SaaS", "Cloud", "Product"]),
      item("ecommerce-platform-development", "Ecommerce Platform Development", "Conversion-focused ecommerce platforms with catalog, payment and order management support.", ["Commerce", "Payments", "Growth"]),
    ],
  },
  {
    slug: "mobile-application-development",
    title: "Mobile Application Development",
    desc: "Native and cross-platform mobile applications with polished interfaces, reliable performance and scalable foundations.",
    items: [
      item("android-app-development", "Android App Development", "Android applications built for usability, stability and long-term maintainability.", ["Android", "Mobile", "Kotlin"]),
      item("ios-app-development", "iOS App Development", "Premium iOS applications designed for Apple users and business-critical workflows.", ["iOS", "Mobile", "Swift"]),
      item("cross-platform-app-development", "Cross Platform App Development", "Efficient mobile applications delivered across Android and iOS with shared codebases.", ["React Native", "Flutter", "Mobile"]),
    ],
  },
  {
    slug: "ai-automation-solutions",
    title: "AI & Automation Solutions",
    desc: "AI, automation and machine-learning solutions that reduce manual work and unlock smarter decisions.",
    items: [
      item("aiot-solutions", "AIoT Solutions", "Connected AI and IoT solutions for intelligent devices, monitoring and automation.", ["AIoT", "IoT", "Automation"]),
      item("chatbot-development", "Chatbot Development", "Conversational assistants that improve support, lead capture and customer engagement.", ["Chatbots", "NLP", "Support"]),
      item("computer-vision-solutions", "Computer Vision Solutions", "Vision systems for detection, recognition, inspection and analytics use cases.", ["Vision", "AI", "Analytics"]),
      item("machine-learning-solutions", "Machine Learning Solutions", "Custom ML models and workflows for prediction, classification and optimization.", ["ML", "Data", "Prediction"]),
      item("recommendation-engine-development", "Recommendation Engine Development", "Personalized recommendation systems that improve discovery and conversion.", ["Personalization", "ML", "Growth"]),
      item("workflow-automation-rpa", "Workflow Automation & RPA", "Automation workflows that connect systems, remove repetitive work and improve speed.", ["RPA", "n8n", "Automation"]),
    ],
  },
  {
    slug: "custom-enterprise-software",
    title: "Custom & Enterprise Software",
    desc: "Business software, CRM systems and staff augmentation support for teams that need tailored execution.",
    items: [
      item("crm-services", "CRM Services", "CRM setup, customization and automation to strengthen sales and customer operations.", ["CRM", "Sales", "Automation"]),
      item("custom-enterprise-software-development", "Custom Enterprise Software Development", "Tailored enterprise software designed around your operations and reporting needs.", ["Enterprise", "ERP", "Workflow"]),
      item("it-staff-augmentation", "IT Staff Augmentation", "Skilled IT professionals to extend your team and accelerate delivery.", ["Hiring", "Teams", "Delivery"]),
    ],
  },
  {
    slug: "cloud-infrastructure-services",
    title: "Cloud & Infrastructure Services",
    desc: "Cloud migration, integrations and infrastructure solutions for reliable modern systems.",
    items: [
      item("application-integrations", "Application Integrations", "Reliable integrations between business tools, APIs and internal systems.", ["API", "Integrations", "Automation"]),
      item("cloud-migration-services", "Cloud Migration Services", "Smooth migration to cloud platforms with performance, reliability and security in mind.", ["Cloud", "Migration", "DevOps"]),
    ],
  },
  {
    slug: "cybersecurity-solutions",
    title: "Cybersecurity Solutions",
    desc: "Security audits, compliance support, monitoring and assessments to protect digital assets.",
    items: [
      item("data-protection-compliance", "Data Protection & Compliance", "Privacy, governance and compliance support for secure business operations.", ["Compliance", "Privacy", "Security"]),
      item("security-audits", "Security Audits", "Structured security reviews to identify risks and improve system resilience.", ["Audits", "Risk", "Security"]),
      item("threat-monitoring", "Threat Monitoring", "Continuous monitoring and response practices for better protection.", ["Monitoring", "Alerts", "Defense"]),
      item("vulnerability-assessment", "Vulnerability Assessment", "Assessment and remediation planning for application and infrastructure weaknesses.", ["VAPT", "Testing", "Hardening"]),
    ],
  },
  {
    slug: "staff-augmentation-it-consulting",
    title: "Staff Augmentation & IT Consulting",
    desc: "Flexible IT consulting and resource support to help teams plan, build and scale faster.",
    items: [
      item("it-staff-augmentation", "IT Staff Augmentation", "Dedicated IT talent to support delivery, maintenance and technical execution.", ["Talent", "Consulting", "Delivery"]),
    ],
  },
];
