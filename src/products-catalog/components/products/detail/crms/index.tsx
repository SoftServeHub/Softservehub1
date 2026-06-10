import { useLayoutEffect } from "react";
import Lenis from "lenis";
import { motion } from "framer-motion";
import Navbar from "../../../layout/Navbar";
import Footer from "../../../layout/Footer";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import OverviewSection from "./OverviewSection";

interface Props { 
  onBack: () => void; 
  onHome: () => void;
  onAbout: () => void;
  onProducts: () => void;
  onContact: () => void;
  onDocumentation?: () => void;
  onBlog?: () => void;
  onFAQ?: () => void;
  onPrivacy?: () => void;
  onTerms?: () => void;
  onCookie?: () => void;
}

const CRMSPage = ({ onBack, onHome, onAbout, onProducts, onContact, onDocumentation, onBlog, onFAQ, onPrivacy, onTerms, onCookie }: Props) => {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    const lenis = new Lenis({ duration: 1.3, smoothWheel: true });
    lenis.scrollTo(0, { immediate: true });
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      lenis.scrollTo(0, { immediate: true });
    });
    const raf = (t: number) => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
      className="bg-black text-white overflow-x-hidden">
      <Navbar onHomeClick={onHome} onAboutClick={onAbout} onProductClick={onProducts} onBlogClick={onBlog} onContactClick={onContact} currentPage="product-detail" />
      <HeroSection />
      <FeaturesSection />
      <OverviewSection onContact={onContact} />
      <Footer 
          onHomeClick={onHome}
          onAboutClick={onAbout} 
          onProductClick={onProducts}
        onContactClick={onContact}
          onDocumentationClick={onDocumentation}
          onBlogClick={onBlog}
          onFAQClick={onFAQ}
          onPrivacyClick={onPrivacy}
          onTermsClick={onTerms}
          onCookieClick={onCookie}
        />
    </motion.div>
  );
};

export default CRMSPage;
