import { useLocation } from "react-router-dom";
import StoryTunnel from "./cinematic/StoryTunnel.jsx";
import UiloraChainex from "./testimonials/UiloraChainex.jsx";
import FooterLegacy from "./FooterLegacy.jsx";

export default function Footer() {
  const { pathname } = useLocation();
  const showStoryTunnel = pathname === "/";

  return (
    <>
      {showStoryTunnel && <StoryTunnel />}
      <UiloraChainex />
      <FooterLegacy />
    </>
  );
}
