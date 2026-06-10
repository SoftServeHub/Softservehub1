import { useLocation } from "react-router-dom";
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
