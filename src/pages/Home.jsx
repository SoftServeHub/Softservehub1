import { useLocation } from "react-router-dom";
import PageSEO from "../components/PageSEO";
import HeroSection from "../components/HeroSection";
import GlobalImpact from "../components/home/GlobalImpact";
import StatsSection from "../components/StatsSection";
import DimensionsPage from "../components/dimensions/DimensionsPage.jsx";
import OrthoPivotReveal from "../components/cinematic/OrthoPivotReveal.jsx";

export default function Home() {
  const { pathname } = useLocation();
  const isRootHome = pathname === "/";

  return (
    <>
      <PageSEO
        title="SoftServe Hub — Innovate. Integrate. Inspire."
        description="SoftServe Hub builds AI automation, enterprise software and scalable digital platforms for IT and business needs, trusted by 80+ clients worldwide."
        canonical="/"
      />
      <HeroSection />
      <GlobalImpact />
      {isRootHome ? (
        <>
          <DimensionsPage />
          <OrthoPivotReveal />
        </>
      ) : (
        <StatsSection />
      )}
    </>
  );
}
