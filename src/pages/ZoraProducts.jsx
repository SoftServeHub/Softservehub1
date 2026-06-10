import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Routes, Route, useNavigate, useParams, Navigate } from "react-router-dom";
import { ZoraEmbedContext } from "../products-catalog/context/EmbedContext";
import "../styles/products-theme.css";

import ScrollReveal from "../components/products/ScrollReveal";
import Hero from "../products-catalog/components/section/Hero";
import TopProducts from "../products-catalog/components/section/TopProducts";
import AllProducts from "../products-catalog/components/section/AllProducts";
import NexusPricing from "../products-catalog/components/section/NexusPricing";
import WhyChoose from "../products-catalog/components/section/WhyChoose";
import Tools from "../products-catalog/components/section/Tools";
import CTA from "../products-catalog/components/section/CTA";
import ProductsPage from "../products-catalog/components/products";
import { products } from "../products-catalog/components/products/data";
import { topProducts } from "../products-catalog/components/products/topdata";

import SecureMessengerPage from "../products-catalog/components/products/detail/secure-messenger";
import TelecomBotPage from "../products-catalog/components/products/detail/telecom-bot";
import ChatBotPage from "../products-catalog/components/products/detail/chat-bot";
import WorkflowAutomationPage from "../products-catalog/components/products/detail/workflow-automation";
import EmailAutomationPage from "../products-catalog/components/products/detail/email-automation";
import WhatsappAutomationPage from "../products-catalog/components/products/detail/whatsapp-automation";
import AnalyticsEnginePage from "../products-catalog/components/products/detail/analytics-engine";
import SmartAssistantPage from "../products-catalog/components/products/detail/smart-assistant";
import AIIntelligenceHubPage from "../products-catalog/components/products/detail/ai-intelligence-hub";
import SecurityShieldPage from "../products-catalog/components/products/detail/security-shield";
import OrbiLeadsPage from "../products-catalog/components/products/detail/orbileads";
import HRMSPage from "../products-catalog/components/products/detail/hrms";
import CRMSPage from "../products-catalog/components/products/detail/crms";

function useProductsNav() {
  const navigate = useNavigate();
  return {
    onHome: () => navigate("/"),
    onAbout: () => navigate("/about"),
    onProducts: () => navigate("/products"),
    onContact: () => navigate("/contact"),
    onDocumentation: () => navigate("/contact"),
    onBlog: () => navigate("/products"),
    onFAQ: () => navigate("/contact"),
    onPrivacy: () => navigate("/contact"),
    onTerms: () => navigate("/contact"),
    onCookie: () => navigate("/contact"),
    goProduct: (id) => navigate(`/products/${id}`),
  };
}

function findProductById(id) {
  if (!id) return null;
  return products.find((p) => p.id === id) ?? topProducts.find((p) => p.id === id) ?? null;
}

function ProductsHome() {
  const nav = useProductsNav();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div className="softserve-products min-h-screen overflow-x-hidden bg-[#f7f8fa] pt-16 text-[#0f172a]">
      <ScrollReveal y={32}>
        <Hero onProductClick={nav.onProducts} />
      </ScrollReveal>
      <ScrollReveal delay={0.05}>
        <TopProducts onProductClick={(p) => nav.goProduct(p.id)} />
      </ScrollReveal>
      <ScrollReveal delay={0.08}>
        <AllProducts onProductClick={(p) => nav.goProduct(p.id)} />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <NexusPricing />
      </ScrollReveal>
      <ScrollReveal delay={0.12}>
        <WhyChoose />
      </ScrollReveal>
      <ScrollReveal delay={0.14}>
        <Tools />
      </ScrollReveal>
      <ScrollReveal delay={0.16}>
        <CTA />
      </ScrollReveal>
    </motion.div>
  );
}

function ProductsCatalog() {
  const nav = useProductsNav();

  return (
    <motion.div className="softserve-products min-h-screen overflow-x-hidden bg-[#f7f8fa] pt-16">
      <ScrollReveal>
        <ProductsPage
          onProductClick={(p) => nav.goProduct(p.id)}
          onTopProductClick={(p) => nav.goProduct(p.id)}
          onHome={nav.onHome}
          onAbout={nav.onAbout}
          onProducts={nav.onProducts}
          onContact={nav.onContact}
          onDocumentation={nav.onDocumentation}
          onBlog={nav.onBlog}
          onFAQ={nav.onFAQ}
          onPrivacy={nav.onPrivacy}
          onTerms={nav.onTerms}
          onCookie={nav.onCookie}
        />
      </ScrollReveal>
    </motion.div>
  );
}

function ProductDetailRoute() {
  const { productId } = useParams();
  const nav = useProductsNav();
  const selected = useMemo(() => findProductById(productId), [productId]);

  const commonProps = {
    onBack: nav.onProducts,
    onHome: nav.onHome,
    onAbout: nav.onAbout,
    onProducts: nav.onProducts,
    onContact: nav.onContact,
    onDocumentation: nav.onDocumentation,
    onBlog: nav.onBlog,
    onFAQ: nav.onFAQ,
    onPrivacy: nav.onPrivacy,
    onTerms: nav.onTerms,
    onCookie: nav.onCookie,
  };

  if (!selected) {
    return <Navigate to="/products" replace />;
  }

  const wrap = (Page) => (
    <motion.div className="softserve-products min-h-screen bg-[#f7f8fa] pt-16">
      <ScrollReveal y={24}>
        <Page {...commonProps} />
      </ScrollReveal>
    </motion.div>
  );

  if ("accentColor" in selected && !("bgPattern" in selected)) {
    switch (selected.id) {
      case "orbileads":
        return wrap(OrbiLeadsPage);
      case "hrms":
        return wrap(HRMSPage);
      case "crms":
        return wrap(CRMSPage);
      default:
        break;
    }
  }

  switch (selected.id) {
    case "secure-messenger":
      return wrap(SecureMessengerPage);
    case "telecom-bot":
      return wrap(TelecomBotPage);
    case "chat-bot":
      return wrap(ChatBotPage);
    case "workflow-automation":
      return wrap(WorkflowAutomationPage);
    case "email-automation":
      return wrap(EmailAutomationPage);
    case "whatsapp-automation":
      return wrap(WhatsappAutomationPage);
    case "analytics-engine":
      return wrap(AnalyticsEnginePage);
    case "smart-assistant":
      return wrap(SmartAssistantPage);
    case "ai-intelligence-hub":
      return wrap(AIIntelligenceHubPage);
    case "security-shield":
      return wrap(SecurityShieldPage);
    default:
      return <Navigate to="/products" replace />;
  }
}

export default function ZoraProducts() {
  return (
    <ZoraEmbedContext.Provider value={true}>
      <Routes>
        <Route index element={<ProductsHome />} />
        <Route path="catalog" element={<ProductsCatalog />} />
        <Route path=":productId" element={<ProductDetailRoute />} />
      </Routes>
    </ZoraEmbedContext.Provider>
  );
}
