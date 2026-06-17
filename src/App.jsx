import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop.jsx";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ContactPage from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import ITServices from "./pages/services/it/index";
import NonITServices from "./pages/services/non-it/index";
import ITServiceCategoryPage from "./pages/services/it/CategoryPage";
import ITServiceItemPage from "./pages/services/it/ItemPage";
import NonITServiceCategoryPage from "./pages/services/non-it/CategoryPage";
import NonITServiceItemPage from "./pages/services/non-it/ItemPage";
import ZoraProducts from "./pages/ZoraProducts.jsx";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 3600);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/*" element={<ZoraProducts />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/it" element={<ITServices />} />
              <Route path="/services/it/:categorySlug" element={<ITServiceCategoryPage />} />
              <Route path="/services/it/:categorySlug/:itemSlug" element={<ITServiceItemPage />} />
              <Route path="/services/non-it" element={<NonITServices />} />
              <Route path="/services/non-it/:categorySlug" element={<NonITServiceCategoryPage />} />
              <Route path="/services/non-it/:categorySlug/:itemSlug" element={<NonITServiceItemPage />} />
              <Route path="/Blogs" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/about" element={<About />} />
              <Route path="/Contact" element={<ContactPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </BrowserRouter>
  );
}
