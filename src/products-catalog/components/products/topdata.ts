import { Zap, Users, BarChart3 } from "lucide-react";
import crms from "../../assets/crms.webp";
import hrms from "../../assets/hrms.webp";
import orbileads from "../../assets/orbileads.webp";

export interface TopProductFeature {
  title: string;
  desc: string;
}

export interface TopProductStat {
  value: string;
  label: string;
}

export interface TopProductUseCase {
  title: string;
  desc: string;
}

export interface TopProduct {
  id: string;
  title: string;
  icon: React.ElementType;
  image: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  color: string;
  accentColor: string;
  features: TopProductFeature[];
  stats: TopProductStat[];
  useCases: TopProductUseCase[];
  techStack: string[];
}

export const topProducts: TopProduct[] = [
  {
    id: "orbileads",
    title: "Orbileads",
    icon: Zap,
    image: orbileads,
    tagline: "AI-Powered Lead Generation & Customer Acquisition Engine",
    shortDesc: "AI-powered lead generation and customer acquisition engine",
    fullDesc:
      "Revolutionize your sales pipeline with intelligent lead generation and acquisition. Orbileads combines AI-driven targeting, real-time analytics and automated follow-up to turn prospects into customers at scale. Get high-quality leads while your competitors are still manually searching.",
    color: "from-[#92400e] to-[#d4af37]",
    accentColor: "#d4af37",
    features: [
      { title: "AI Smart Targeting", desc: "Machine learning identifies ideal customer profiles and finds matching prospects across the web." },
      { title: "Real-time Lead Scoring", desc: "Automatically rank leads by conversion probability based on engagement and behavioral signals." },
      { title: "Auto Follow-up Sequences", desc: "Trigger personalized email and SMS sequences when leads show buying signals." },
      { title: "Multi-Channel Prospecting", desc: "Find leads across LinkedIn, Twitter, email and custom databases simultaneously." },
      { title: "Enrichment & Verification", desc: "Real-time contact data enrichment ensures you have accurate, up-to-date prospect information." },
      { title: "Pipeline Analytics", desc: "Track lead quality, conversion rates and ROI by source with detailed attribution." },
    ],
    stats: [
      { value: "10x", label: "More Leads Generated" },
      { value: "45%", label: "Faster Sales Cycle" },
      { value: "3.2x", label: "Higher Conversion Rate" },
      { value: "1M+", label: "Leads Processed Daily" },
    ],
    useCases: [
      { title: "SaaS Sales", desc: "Find decision-makers at high-intent companies and nurture them automatically." },
      { title: "B2B Services", desc: "Generate qualified leads for consulting, design and professional services." },
      { title: "Enterprise Sales", desc: "Target by company size, industry, tech stack and 100+ other firmographics." },
    ],
    techStack: ["Machine Learning", "Data Enrichment API", "Real-time Webhooks", "CRM Integration", "LinkedIn Scraping"],
  },
  {
    id: "hrms",
    title: "HRMS",
    icon: Users,
    image: hrms,
    tagline: "Intelligent Human Resource Management System",
    shortDesc: "Intelligent Human Resource Management System",
    fullDesc:
      "Streamline every aspect of human resources with an intelligent, end-to-end HRMS platform. From employee onboarding and payroll to talent analytics and succession planning, HRMS automates routine tasks and gives you insights to build a better workplace.",
    color: "from-[#b45309] to-[#f6df9a]",
    accentColor: "#d4af37",
    features: [
      { title: "Employee Portal", desc: "Self-service portal for leave requests, expense reimbursements, personal data updates and document access." },
      { title: "Smart Payroll", desc: "Automated payroll processing with tax calculation, deductions, overtime and compliance for all regions." },
      { title: "Talent Analytics", desc: "Deep insights on employee performance, engagement, flight risk and retention predictions." },
      { title: "Performance Management", desc: "Structured goal-setting, continuous feedback, 360 reviews and development plans." },
      { title: "Recruitment Suite", desc: "Job posting, applicant tracking, AI resume screening and interview scheduling in one place." },
      { title: "Compliance & Audit", desc: "Automatic compliance checks, audit trails and reporting for labor laws and regulations." },
    ],
    stats: [
      { value: "80%", label: "HR Time Saved" },
      { value: "40%", label: "Faster Hiring" },
      { value: "25%", label: "Better Retention" },
      { value: "100+", label: "Global Payroll Rules" },
    ],
    useCases: [
      { title: "Growing Startups", desc: "Build your HR infrastructure without dedicated HR team for years." },
      { title: "Enterprises", desc: "Manage thousands of employees with complex policies across multiple countries." },
      { title: "Staffing Agencies", desc: "Handle contingent workforce management and compliance at scale." },
    ],
    techStack: ["HRIS Platform", "Payroll Engine", "Compliance DB", "Employee Portal", "API-First Architecture"],
  },
  {
    id: "crms",
    title: "CRMS",
    icon: BarChart3,
    image: crms,
    tagline: "Advanced Customer Relationship Intelligence Platform",
    shortDesc: "Advanced customer relationship intelligence platform",
    fullDesc:
      "Transform customer relationships with enterprise-grade CRM powered by AI. CRMS provides a 360-degree view of every customer, automates sales processes and delivers predictive insights that accelerate deals and reduce churn.",
    color: "from-[#0f172a] to-[#d4af37]",
    accentColor: "#f97316",
    features: [
      { title: "360° Customer View", desc: "Single unified profile combining interactions, transactions, support tickets and engagement history." },
      { title: "AI Deal Insights", desc: "Predictive analytics reveal next best actions, risk signals and deal acceleration opportunities." },
      { title: "Pipeline Acceleration", desc: "Smart workflows, task automation and timeline tracking to move deals faster through your pipeline." },
      { title: "Sales Forecasting", desc: "AI-powered revenue forecasting with win probability scoring and territory management." },
      { title: "Customer Health Scoring", desc: "Automatic engagement scoring predicts churn risk and identifies upsell opportunities." },
      { title: "Seamless Integration", desc: "Native integrations with 500+ business tools — data flows automatically." },
    ],
    stats: [
      { value: "360°", label: "Customer Visibility" },
      { value: "35%", label: "Faster Deal Closure" },
      { value: "28%", label: "Churn Reduction" },
      { value: "2.5x", label: "Revenue Growth" },
    ],
    useCases: [
      { title: "Enterprise Sales", desc: "Manage complex, multi-stakeholder deals with full visibility from prospect to advocate." },
      { title: "SaaS Companies", desc: "Reduce churn, identify expansion opportunities and manage customer lifecycle." },
      { title: "Account-Based Marketing", desc: "Execute ABM strategies with deep account intelligence and multi-touch attribution." },
    ],
    techStack: ["AI Engine", "Data Pipeline", "REST API", "Real-time Sync", "Advanced Analytics"],
  },
];
