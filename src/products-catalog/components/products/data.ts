import {
  MessageSquare, Phone, Bot, Workflow, Mail, MessageCircle,
  BarChart3, Sparkles, Brain, Shield,
} from "lucide-react";
import securemessenger from "../../assets/secure-messenger.webp";
import emailauto from "../../assets/email-automation.webp";
import chatbot from "../../assets/chat-bot.webp";
import aiintelligencehubpage from "../../assets/ai-intelligence-hub.webp";
import securityshield from "../../assets/security-shield.webp";
import smartassistant from "../../assets/smart-assistant.webp";
import whatsapp from "../../assets/whatsapp-automation.webp";
import workflow from "../../assets/workflow-automation.webp";
import telecom from "../../assets/telecom-bot.webp";
export interface ProductFeature {
  title: string;
  desc: string;
}

export interface ProductStat {
  value: string;
  label: string;
}

export interface UseCase {
  title: string;
  desc: string;
}

export interface Product {
  id: string;
  title: string;
  icon: React.ElementType;
  image: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  color: string;           // tailwind gradient
  accentColor: string;     // hex for canvas/SVG
  bgPattern: string;       // unique bg design key
  features: ProductFeature[];
  stats: ProductStat[];
  useCases: UseCase[];
  techStack: string[];
}

export const products: Product[] = [
  {
    id: "secure-messenger",
    title: "Secure Messenger",
    icon: MessageSquare,
    image: securemessenger,
    tagline: "Military-Grade Encrypted Team Communication",
    shortDesc: "Enterprise-grade encrypted messaging.",
    fullDesc:
      "A powerful encrypted messaging platform built for enterprise security Enable seamless team communication with end-to-end encryption, ensuring sensitive data stays protected Perfect for organizations handling confidential information across departments, borders and regulated industries",
    color: "from-blue-500 to-cyan-500",
    accentColor: "#06b6d4",
    bgPattern: "hex",
    features: [
      { title: "End-to-End Encryption", desc: "AES-256 encryption ensures every message, file and call is fully protected from endpoint to endpoint." },
      { title: "Team Collaboration", desc: "Channels, threads, DMs and group workspaces designed for high-velocity enterprise teams." },
      { title: "Advanced Message Search", desc: "Full-text search across encrypted messages with instant, compliant retrieval." },
      { title: "Secure File Sharing", desc: "Transfer documents with zero storage on third-party servers — your data stays yours." },
      { title: "Compliance Ready", desc: "GDPR, HIPAA, SOC 2 ready with full audit log and retention controls." },
      { title: "Self-Hosted Option", desc: "Deploy on your own infrastructure for maximum data sovereignty and control." },
    ],
    stats: [
      { value: "256-bit", label: "AES Encryption" },
      { value: "10ms", label: "Avg. Message Latency" },
      { value: "99.99%", label: "Uptime SLA" },
      { value: "0", label: "Third-Party Data Storage" },
    ],
    useCases: [
      { title: "Legal & Finance", desc: "Secure exchange of privileged counsel, contracts and financial data." },
      { title: "Healthcare", desc: "HIPAA-compliant patient communication and clinical team coordination." },
      { title: "Government & Defense", desc: "Classified communications with self-hosted, air-gapped deployment options." },
    ],
    techStack: ["AES-256", "WebRTC", "Signal Protocol", "Zero-Knowledge Architecture", "SOC 2 Type II"],
  },
  {
    id: "telecom-bot",
    title: "Telecom Bot",
    icon: Phone,
    image: telecom,
    tagline: "AI-Powered Voice & SMS Automation at Scale",
    shortDesc: "AI-powered telecom automation.",
    fullDesc:
      "Revolutionize customer service with intelligent voice and SMS automation. Handle thousands of customer interactions simultaneously with AI-powered responses, reducing operational costs while dramatically improving satisfaction rates across all telecom channels.",
    color: "from-purple-500 to-pink-500",
    accentColor: "#a855f7",
    bgPattern: "wave",
    features: [
      { title: "Intelligent IVR", desc: "Natural language IVR that understands intent — no menu trees, no frustration." },
      { title: "SMS Automation", desc: "Automated SMS campaigns, replies and OTP flows at enterprise scale." },
      { title: "Voice AI Agent", desc: "Human-like voice agents that resolve queries without human intervention." },
      { title: "Call Analytics", desc: "Real-time sentiment analysis, call scoring and agent performance dashboards." },
      { title: "CRM Integration", desc: "Bi-directional sync with Salesforce, HubSpot and custom CRMs." },
      { title: "Multi-Region Routing", desc: "Smart call routing across geographies with low-latency local numbers." },
    ],
    stats: [
      { value: "10k+", label: "Concurrent Calls" },
      { value: "94%", label: "Query Resolution Rate" },
      { value: "60%", label: "Cost Reduction" },
      { value: "<1s", label: "AI Response Time" },
    ],
    useCases: [
      { title: "Telecom Operators", desc: "Automate billing inquiries, plan changes and technical support at scale." },
      { title: "E-Commerce", desc: "Order tracking, delivery alerts and return flows via automated voice and SMS." },
      { title: "Banking", desc: "Secure OTP delivery, fraud alerts and account notification automation." },
    ],
    techStack: ["NLP Engine", "WebRTC", "SIP Protocol", "Twilio-Compatible", "Real-time ASR"],
  },
  {
    id: "chat-bot",
    title: "Chat Bot",
    icon: Bot,
    image: chatbot,
    tagline: "Conversational AI That Feels Genuinely Human",
    shortDesc: "Advanced conversational AI.",
    fullDesc:
      "Deploy intelligent chatbots that understand context and deliver human-like conversations. Reduce support tickets, answer FAQs instantly and provide 24/7 customer support. Our AI continuously learns from interactions to improve accuracy over time.",
    color: "from-emerald-500 to-teal-500",
    accentColor: "#10b981",
    bgPattern: "bubble",
    features: [
      { title: "Contextual NLP", desc: "Understands full conversation context, not just individual messages — resulting in natural dialogue." },
      { title: "Multi-Language Support", desc: "Converse fluently in 50+ languages with automatic language detection." },
      { title: "Live Handoff", desc: "Seamlessly escalate complex queries to human agents with full conversation history." },
      { title: "Custom Personas", desc: "Design branded bot personalities that match your company voice and tone." },
      { title: "Knowledge Base Sync", desc: "Auto-ingests your documentation, FAQs and policies to stay always up-to-date." },
      { title: "Analytics & Insights", desc: "Deep conversation analytics to continuously improve bot performance." },
    ],
    stats: [
      { value: "50+", label: "Languages Supported" },
      { value: "80%", label: "Ticket Deflection Rate" },
      { value: "24/7", label: "Availability" },
      { value: "3s", label: "Avg. Response Time" },
    ],
    useCases: [
      { title: "Customer Support", desc: "Resolve 80% of support queries automatically, around the clock." },
      { title: "E-Commerce", desc: "Product recommendations, order tracking and checkout assistance." },
      { title: "HR & Internal", desc: "Handle employee onboarding, IT helpdesk and policy Q&A automatically." },
    ],
    techStack: ["GPT-4 Turbo", "RAG Architecture", "WebSocket", "REST API", "Webhook Integrations"],
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    icon: Workflow,
    image: workflow,
    tagline: "Transform Repetitive Processes into Intelligent Flows",
    shortDesc: "Streamline business processes.",
    fullDesc:
      "Automate repetitive business workflows and reclaim countless hours every week. From document processing to multi-step approval systems, streamline operations so your teams can focus on strategic, high-value work.",
    color: "from-orange-500 to-red-500",
    accentColor: "#f97316",
    bgPattern: "flow",
    features: [
      { title: "Visual Workflow Builder", desc: "Drag-and-drop builder with 200+ pre-built action blocks — no code required." },
      { title: "Smart Triggers", desc: "Event-based, time-based and AI-inferred triggers that react to real-world conditions." },
      { title: "Approval Chains", desc: "Multi-level approval workflows with escalation paths and SLA monitoring." },
      { title: "Document Processing", desc: "AI-powered OCR and extraction from invoices, contracts and forms." },
      { title: "Error Recovery", desc: "Automatic retry logic, fallback paths and intelligent error routing." },
      { title: "Audit Trail", desc: "Complete, tamper-proof audit logs for every workflow execution." },
    ],
    stats: [
      { value: "200+", label: "Action Blocks" },
      { value: "70%", label: "Time Saved per Process" },
      { value: "5min", label: "Avg Setup Time" },
      { value: "0", label: "Code Required" },
    ],
    useCases: [
      { title: "Finance & Accounting", desc: "Automate invoice processing, payment approvals and reconciliation." },
      { title: "HR Operations", desc: "Streamline onboarding, leave approvals and performance review cycles." },
      { title: "Sales Ops", desc: "Automate lead routing, proposal generation and CRM updates." },
    ],
    techStack: ["Visual Builder", "REST / GraphQL", "Webhooks", "BPMN 2.0", "99.9% Uptime SLA"],
  },
  {
    id: "email-automation",
    title: "Email Automation",
    icon: Mail,
    image: emailauto,
    tagline: "AI-Driven Campaigns That Convert",
    shortDesc: "AI-driven email marketing engine.",
    fullDesc:
      "Create intelligent email campaigns that adapt to individual customer behavior. AI-powered segmentation, dynamic personalization and optimal send-time delivery work together to maximize open rates, click-throughs and conversions.",
    color: "from-pink-500 to-rose-500",
    accentColor: "#ec4899",
    bgPattern: "mail",
    features: [
      { title: "AI Segmentation", desc: "Behavior-based audience segmentation that updates in real-time as customers act." },
      { title: "Dynamic Personalization", desc: "Personalize subject lines, content blocks and CTAs individually for every recipient." },
      { title: "Optimal Send Time", desc: "AI predicts the exact moment each subscriber is most likely to open." },
      { title: "A/B Testing Engine", desc: "Multi-variant testing across subjects, content and send times with statistical significance alerts." },
      { title: "Deliverability Suite", desc: "Dedicated IP warming, DMARC/DKIM support and real-time blacklist monitoring." },
      { title: "Revenue Attribution", desc: "Link every email touchpoint to revenue with end-to-end conversion tracking." },
    ],
    stats: [
      { value: "42%", label: "Avg. Open Rate (vs 21% industry)" },
      { value: "3.2x", label: "Click-Through Improvement" },
      { value: "98%", label: "Deliverability Rate" },
      { value: "1M+", label: "Emails Sent per Hour" },
    ],
    useCases: [
      { title: "E-Commerce", desc: "Abandoned cart recovery, product launches and re-engagement flows." },
      { title: "SaaS", desc: "Onboarding sequences, feature announcements and churn prevention campaigns." },
      { title: "B2B Sales", desc: "Warm lead nurturing, deal acceleration and executive outreach sequences." },
    ],
    techStack: ["AI Optimization Engine", "SMTP / API", "DMARC / DKIM / SPF", "Webhooks", "GDPR Compliant"],
  },
  {
    id: "whatsapp-automation",
    title: "WhatsApp Automation",
    icon: MessageCircle,
    image: whatsapp,
    tagline: "CRM-Integrated WhatsApp at Enterprise Scale",
    shortDesc: "CRM-integrated WhatsApp automation.",
    fullDesc:
      "Connect with customers on the world's most popular messaging platform. Deep CRM integration enables personalized conversations, automated flows and comprehensive customer tracking at scale — all through the WhatsApp Business API.",
    color: "from-green-500 to-emerald-500",
    accentColor: "#22c55e",
    bgPattern: "chat",
    features: [
      { title: "WhatsApp Business API", desc: "Official Meta Business API integration for verified, trusted business messaging." },
      { title: "Broadcast Campaigns", desc: "Send targeted messages to segmented audiences with media, buttons and templates." },
      { title: "Two-Way Automation", desc: "Automated flows that respond intelligently based on customer replies." },
      { title: "CRM Sync", desc: "Real-time sync with your CRM — every conversation logged and attributed automatically." },
      { title: "Chatbot Integration", desc: "Connect our Chat Bot to WhatsApp for seamless AI-powered support." },
      { title: "Rich Media Support", desc: "Send images, PDFs, videos, location pins and interactive buttons." },
    ],
    stats: [
      { value: "98%", label: "Message Open Rate" },
      { value: "5x", label: "More Replies vs Email" },
      { value: "2B+", label: "Active WhatsApp Users" },
      { value: "60s", label: "Avg Customer Response" },
    ],
    useCases: [
      { title: "Customer Engagement", desc: "Drip campaigns, re-engagement flows and loyalty program notifications." },
      { title: "Logistics & Delivery", desc: "Real-time order updates, delivery confirmations and delivery slot selection." },
      { title: "Healthcare", desc: "Appointment reminders, medication alerts and teleconsult scheduling." },
    ],
    techStack: ["Meta Business API", "WhatsApp Cloud API", "Webhook Flows", "CRM Integrations", "End-to-End Encryption"],
  },
  {
    id: "smart-assistant",
    title: "Smart Assistant",
    icon: Sparkles,
    image: smartassistant,
    tagline: "Your Personal AI that Gets Smarter Every Day",
    shortDesc: "Intelligent personal AI assistant.",
    fullDesc:
      "An AI assistant that learns your preferences, automates routine tasks and surfaces the right information at the right moment. From intelligent scheduling to deep research, your Smart Assistant adapts to how you work.",
    color: "from-yellow-500 to-orange-500",
    accentColor: "#f59e0b",
    bgPattern: "glow",
    features: [
      { title: "Smart Scheduling", desc: "AI understands context and calendar patterns to book meetings intelligently." },
      { title: "Task Automation", desc: "Create and delegate tasks using natural language — the assistant executes them." },
      { title: "Research Mode", desc: "Deep-dive research with summarized, cited insights from across the web." },
      { title: "Voice Control", desc: "Hands-free voice interaction with natural wake-word activation." },
      { title: "Cross-Platform Sync", desc: "Seamless experience across desktop, mobile and wearables." },
      { title: "Personalization Engine", desc: "Continuously adapts to your communication style, priorities and preferences." },
    ],
    stats: [
      { value: "3hrs", label: "Saved per Person Daily" },
      { value: "10k+", label: "Tasks Automated" },
      { value: "50+", label: "App Integrations" },
      { value: "98%", label: "Accuracy Rate" },
    ],
    useCases: [
      { title: "Executives & Leaders", desc: "Prepare for meetings, draft communications and monitor priorities automatically." },
      { title: "Sales Teams", desc: "Auto-generate call notes, follow-up emails and CRM updates after every meeting." },
      { title: "Developers", desc: "Code review assistance, documentation drafting and ticket management." },
    ],
    techStack: ["LLM Orchestration", "Vector Memory", "OAuth 2.0", "WebRTC Voice", "Calendar / Email APIs"],
  },
  {
    id: "ai-intelligence-hub",
    title: "AI Intelligence Hub",
    icon: Brain,
    image: aiintelligencehubpage,
    tagline: "The Central Nervous System for All Your AI",
    shortDesc: "Central AI processing & orchestration.",
    fullDesc:
      "One unified platform to manage, orchestrate and govern all your AI workflows. Integrate multiple models, manage pipelines, monitor performance and control access — the command center for enterprise AI operations.",
    color: "from-violet-500 to-purple-500",
    accentColor: "#8b5cf6",
    bgPattern: "neural",
    features: [
      { title: "Multi-Model Orchestration", desc: "Route tasks to the best AI model automatically — GPT-4, Claude, Gemini, or custom fine-tuned models." },
      { title: "Pipeline Management", desc: "Build, test and deploy complex multi-step AI pipelines with visual tooling." },
      { title: "Model Versioning", desc: "Full version control for prompts, configs and model checkpoints." },
      { title: "API Gateway", desc: "Unified API layer with rate limiting, authentication and usage monitoring." },
      { title: "Cost Optimization", desc: "Intelligent token routing minimizes AI costs across model providers." },
      { title: "Governance & Compliance", desc: "Role-based access, usage auditing and output moderation built in." },
    ],
    stats: [
      { value: "20+", label: "AI Models Supported" },
      { value: "40%", label: "AI Cost Reduction" },
      { value: "1M+", label: "API Calls / Day" },
      { value: "Sub-100ms", label: "Gateway Latency" },
    ],
    useCases: [
      { title: "Platform Engineering", desc: "Centralize AI access across all teams with unified governance." },
      { title: "AI Product Teams", desc: "Rapid prototyping, A/B testing of models and production deployment." },
      { title: "Enterprise IT", desc: "Enforce AI policies, monitor usage and control costs organization-wide." },
    ],
    techStack: ["LLM Gateway", "Vector Database", "Kubernetes", "OpenAI / Anthropic / Google APIs", "gRPC / REST"],
  },
  {
    id: "security-shield",
    title: "Security Shield",
    icon: Shield,
    image: securityshield,
    tagline: "Adaptive AI Security for the Modern Enterprise",
    shortDesc: "Enterprise-level AI security solution.",
    fullDesc:
      "Protect your entire digital surface with AI-powered threat detection and response. Real-time monitoring, behavioral anomaly detection and automated incident response work together to stay ahead of evolving threats.",
    color: "from-red-500 to-pink-500",
    accentColor: "#ef4444",
    bgPattern: "radar",
    features: [
      { title: "Threat Detection", desc: "Behavioral AI analyzes millions of signals per second to detect novel attack patterns." },
      { title: "Zero-Day Defense", desc: "Heuristic modeling identifies unknown threats before signatures exist." },
      { title: "Automated Response", desc: "Self-healing playbooks contain and neutralize threats without human intervention." },
      { title: "Compliance Audit", desc: "Continuous compliance monitoring for ISO 27001, SOC 2, NIST and GDPR." },
      { title: "Access Intelligence", desc: "AI-powered identity and privilege management with anomaly-triggered lockouts." },
      { title: "Incident Forensics", desc: "Deep-dive post-incident analysis with full attack chain reconstruction." },
    ],
    stats: [
      { value: "<2min", label: "Mean Threat Response Time" },
      { value: "99.7%", label: "Threat Detection Rate" },
      { value: "0-Day", label: "Zero-Day Coverage" },
      { value: "24/7", label: "AI-Powered Monitoring" },
    ],
    useCases: [
      { title: "Financial Services", desc: "Fraud prevention, insider threat detection and regulatory compliance." },
      { title: "Critical Infrastructure", desc: "OT/IT convergence security for utilities, manufacturing and transport." },
      { title: "Cloud-Native Companies", desc: "Container security, cloud posture management and API threat protection." },
    ],
    techStack: ["Behavioral AI", "SIEM Integration", "SOAR Playbooks", "Zero Trust Architecture", "MITRE ATT&CK Framework"],
  },
];

export default products;
