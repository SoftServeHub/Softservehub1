import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import HeroSection from "./HeroSection";
import ProductGrid from "./ProductGrid";
import TopProductsSection from "./TopProductsSection";
import CTASection from "./CTASection";
import type { Product } from "./data";
import type { TopProduct } from "./topdata";

// Elegant split line divider component
const SplitLine = () => (
  <div className="relative py-8 md:py-12">
    <div className="max-w-6xl mx-auto px-6">
      <div className="relative flex items-center justify-center">
        {/* Left gradient line */}
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-purple-500/50" />
        
        {/* Center diamond */}
        <div className="mx-4 w-2 h-2 rotate-45 bg-purple-500/60 shadow-lg shadow-purple-500/30" />
        
        {/* Right gradient line */}
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-purple-500/30 to-purple-500/50" />
      </div>
    </div>
  </div>
);

interface ProductsPageProps {
  onProductClick: (product: Product) => void;
  onTopProductClick?: (product: TopProduct) => void;
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

const ProductsPage = ({ 
  onProductClick, 
  onTopProductClick, 
  onHome, 
  onAbout, 
  onProducts, 
  onContact,
  onDocumentation,
  onBlog,
  onFAQ,
  onPrivacy,
  onTerms,
  onCookie
}: ProductsPageProps) => {
  // Lenis smooth scroll
  useEffect(() => {
    window.scrollTo(0, 0);
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenis.scrollTo(0, { immediate: true });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar onHomeClick={onHome} onAboutClick={onAbout} onProductClick={onProducts} onBlogClick={onBlog} onContactClick={onContact} currentPage="products" />
      <HeroSection onContact={onContact} />
      <TopProductsSection onProductClick={onTopProductClick} />
      <SplitLine />
      <ProductGrid onProductClick={onProductClick} />
      <SplitLine />
      <CTASection />
      <div className="pointer-events-none inset-x-0 z-[5] h-16 bg-gradient-to-b from-transparent to-purple-900/60" />
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
    </div>
  );
};

export default ProductsPage;
