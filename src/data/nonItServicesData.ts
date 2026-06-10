import type { ServiceCategory } from "./itServicesData";

const item = (
  slug: string,
  title: string,
  shortDesc: string,
  tags: string[] = ["Strategy", "Operations", "Growth"]
) => ({
  slug,
  title,
  shortDesc,
  description: shortDesc,
  tags,
});

export const NON_IT_SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "business-strategy-consulting",
    title: "Business & Strategy Consulting",
    desc: "Strategic advisory services to optimize operations, efficiency and long-term growth.",
    items: [
      item("business-process-optimisation", "Business Process Optimisation", "Improve workflows, remove operational friction and build more efficient business systems.", ["Process", "Efficiency", "Scale"]),
      item("digital-transformation-consulting", "Digital Transformation Consulting", "Modernize operations through practical digital strategy, tools and change planning.", ["Digital", "Strategy", "Transformation"]),
      item("operational-efficiency-consulting", "Operational Efficiency Consulting", "Identify bottlenecks and improve performance across teams, processes and systems.", ["Operations", "Performance", "Planning"]),
    ],
  },
  {
    slug: "branding-creative-services",
    title: "Branding & Creative Services",
    desc: "Creative solutions that strengthen brand identity and market presence.",
    items: [
      item("brand-identity-positioning", "Brand Identity & Positioning", "Build a clear brand identity, voice and market position that customers remember.", ["Brand", "Identity", "Positioning"]),
      item("content-management-support", "Content Management Support", "Keep digital content organized, consistent and aligned across your channels.", ["Content", "Support", "CMS"]),
      item("creative-assets-marketing-design", "Creative Assets & Marketing Design", "Marketing visuals and creative assets designed for campaigns, social and sales use.", ["Creative", "Design", "Campaigns"]),
      item("ui-ux-creative-design", "UI/UX Creative Design", "User-centered digital design that improves clarity, usability and customer trust.", ["UI/UX", "Design", "Experience"]),
      item("website-corporate-content", "Website & Corporate Content", "Professional website and business content that communicates value clearly.", ["Website", "Copy", "Corporate"]),
    ],
  },
  {
    slug: "accounting-financial-operations",
    title: "Accounting & Financial Operations",
    desc: "Reliable financial management and operational accounting services.",
    items: [
      item("accounting-management", "Accounting Management", "Structured accounting support for accurate records and confident financial operations.", ["Accounting", "Management", "Reports"]),
      item("bookkeeping-ledger-handling", "Bookkeeping & Ledger Handling", "Reliable bookkeeping and ledger maintenance for clean financial data.", ["Bookkeeping", "Ledger", "Accuracy"]),
      item("financial-operations-support", "Financial Operations Support", "Operational finance support for smoother invoicing, reconciliation and reporting.", ["Finance", "Operations", "Support"]),
      item("financial-reporting", "Financial Reporting", "Clear financial reports that support compliance, planning and decision-making.", ["Reports", "Insights", "Compliance"]),
    ],
  },
  {
    slug: "digital-marketing-services",
    title: "Digital Marketing Services",
    desc: "Performance-driven digital marketing and growth strategies.",
    items: [
      item("lead-generation-campaigns", "Lead Generation Campaigns", "Campaigns built to attract qualified prospects and create measurable pipeline.", ["Leads", "Campaigns", "Growth"]),
      item("performance-marketing", "Performance Marketing", "Paid marketing programs optimized for conversions, ROI and scalable growth.", ["Ads", "ROI", "Performance"]),
      item("seo-content-growth", "SEO & Content Growth", "Search and content systems that improve visibility, authority and organic traffic.", ["SEO", "Content", "Organic"]),
      item("social-media-branding", "Social Media Branding", "Social media branding and content support to strengthen engagement and recognition.", ["Social", "Branding", "Content"]),
    ],
  },
  {
    slug: "staff-augmentation-workforce-solutions",
    title: "Staff Augmentation & Workforce Solutions",
    desc: "Flexible staffing solutions to help businesses scale non-IT teams quickly with qualified professionals.",
    items: [
      item("non-it-staff-augmentation", "Non-IT Staff Augmentation", "Qualified non-IT professionals to support business operations and team growth.", ["Staffing", "Workforce", "Hiring"]),
    ],
  },
];
