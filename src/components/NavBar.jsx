import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import {
  FaCode,
  FaPaintBrush,
  FaRobot,
  FaChartBar,
  FaProjectDiagram,
  FaGraduationCap,
  FaBook,
} from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import navLogo from "../images/logo.webp";
import {
  NavbarCtaButton,
  NavbarLinkButton,
  NavbarMobileLinkButton,
} from "./nav/NavbarButton";

// Service data
const services = [
  { title: "Website Development & Hosting", desc: "Modern, scalable, and secure websites with hosting, deployment, and maintenance support.", icon: <FaCode /> },
  { title: "UI / UX Design", desc: "User-focused designs with wireframes, prototypes, and smooth interactions.", icon: <FaPaintBrush /> },
  { title: "AI, ML & Data Science Projects", desc: "Real-world AI and ML projects using industry-grade tools and datasets.", icon: <FaRobot /> },
  { title: "Power BI Dashboards", desc: "Interactive dashboards and advanced data visualization for business insights.", icon: <FaChartBar /> },
  { title: "n8n Workflow Automation", desc: "Automate processes and integrate apps using n8n workflows.", icon: <FaProjectDiagram /> },
  { title: "IEEE Paper Publication Support", desc: "Complete assistance for IEEE paper writing, review, and submission.", icon: <FaBook /> },
  { title: "UG & PG Final Year Projects", desc: "End-to-end guidance from topic selection to final submission.", icon: <FaGraduationCap /> },
  { title: "AI / ML Research Projects", desc: "Research-oriented AI & ML projects aligned with academic standards.", icon: <FaRobot /> },
  { title: "Research Methodology Support", desc: "Support for problem formulation, literature review, and methodology.", icon: <FaBook /> },
  { title: "Data Analysis & Visualization", desc: "Advanced data analysis and visualization techniques for business insights.", icon: <FaChartBar /> },
  { title: "Custom Software Solutions", desc: "Tailored software solutions to meet specific business requirements.", icon: <FaCode /> },
  { title: "Technical Consultation", desc: "Expert technical consultation for project planning and implementation.", icon: <FaGraduationCap /> },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [heroOrbProgress, setHeroOrbProgress] = useState(0);
  const [morphProgress, setMorphProgress] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onHero = (e) => {
      const p = typeof e.detail?.progress === "number" ? e.detail.progress : 0;
      setHeroOrbProgress(p);
      if (p > 0.02) setOpen(false);
    };
    const onMorph = (e) => {
      const p = typeof e.detail?.progress === "number" ? e.detail.progress : 0;
      setMorphProgress(p);
      if (p > 0.02) setOpen(false);
    };
    window.addEventListener("hero-orbit-progress", onHero);
    window.addEventListener("hero-morph-progress", onMorph);
    return () => {
      window.removeEventListener("hero-orbit-progress", onHero);
      window.removeEventListener("hero-morph-progress", onMorph);
    };
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") {
      setMorphProgress(1);
    }
  }, [location.pathname]);

  const [isDesktopNav, setIsDesktopNav] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches,
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktopNav(mq.matches);
    mq.addEventListener("change", update);
    update();
    return () => mq.removeEventListener("change", update);
  }, []);

  const hideNavDesktopAtHeroStart =
    location.pathname === "/" && isDesktopNav && morphProgress < 0.28;

  const hideNavForHeroOrb =
    location.pathname === "/" && heroOrbProgress > 0.015 && heroOrbProgress < 0.995;

  const isNavActive = (to) =>
    to === "/services"
      ? location.pathname.startsWith("/services")
      : to === "/products"
        ? location.pathname.startsWith("/products")
        : location.pathname === to;

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full overflow-visible border-b border-[#e2e8f0] bg-white transition-[opacity,transform] duration-300 will-change-transform ${
        hideNavDesktopAtHeroStart
          ? "lg:pointer-events-none lg:-translate-y-full lg:opacity-0"
          : ""
      } ${
        hideNavForHeroOrb
          ? "max-lg:pointer-events-none max-lg:-translate-y-full max-lg:opacity-0"
          : ""
      }`}
    >
      <div className="w-full max-w-8xl pl-0 pr-3 sm:pr-6">
        <div className="flex h-16 items-center justify-between gap-3 overflow-visible sm:gap-4">

          {/* LOGO — larger than bar height; navbar row stays h-16 */}
          <Link to="/" className="relative z-10 -ml-0.5 flex shrink-0 items-center pl-1 sm:pl-2">
            <img
              src={navLogo}
              alt="SoftServe Hub"
              className="h-[7rem] w-auto min-w-[11.5rem] object-contain object-left sm:h-[8rem] sm:min-w-[13.5rem]"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden items-center gap-2 lg:flex">

            <NavbarCtaButton onClick={() => navigate("/contact")}>Book Consult</NavbarCtaButton>

            <NavbarLinkButton to="/" label="Home" active={isNavActive("/")} onClick={() => setOpen(false)} />
            <NavbarLinkButton
              to="/products"
              label="Products"
              active={isNavActive("/products")}
              onClick={() => setOpen(false)}
            />
            <NavbarLinkButton
              to="/services"
              label="Services"
              active={isNavActive("/services")}
              onClick={() => setOpen(false)}
            />
            <NavbarLinkButton
              to="/about"
              label="About"
              active={isNavActive("/about")}
              onClick={() => setOpen(false)}
            />
            <NavbarLinkButton
              to="/contact"
              label="Contact Us"
              active={isNavActive("/contact")}
              onClick={() => setOpen(false)}
            />
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-black text-xl"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-white text-black max-h-[90vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-4 p-6 font-semibold">
              <NavbarMobileLinkButton
                to="/"
                label="Home"
                active={isNavActive("/")}
                onClick={() => setOpen(false)}
              />

              <NavbarMobileLinkButton
                to="/products"
                label="Products"
                active={isNavActive("/products")}
                onClick={() => setOpen(false)}
              />

              <div>
                <NavbarLinkButton
                  label="Services"
                  active={isNavActive("/services")}
                  onClick={() => {
                    navigate("/services");
                    setOpen(false);
                  }}
                />

                <button
                  onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                  className="ml-4 text-sm text-gray-600"
                >
                  {mobileServiceOpen ? "▲ Hide Services" : "▼ View All Services"}
                </button>

                {mobileServiceOpen && (
                  <div className="flex flex-col gap-4 pl-4 mt-4">
                    {services.map((s, i) => (
                      <div 
                        key={i} 
                        className="flex gap-3 text-sm cursor-pointer"
                        onClick={() => {
                          navigate("/services/it");
                          setOpen(false);
                        }}
                      >
                        <span className="text-[#D4AF37] mt-1">{s.icon}</span>
                        <span>{s.title}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <NavbarMobileLinkButton
                to="/about"
                label="About"
                active={isNavActive("/about")}
                onClick={() => setOpen(false)}
              />
              <NavbarMobileLinkButton
                to="/contact"
                label="Contact Us"
                active={isNavActive("/contact")}
                onClick={() => setOpen(false)}
              />

              <NavbarCtaButton
                className="w-fit"
                onClick={() => {
                  navigate("/contact");
                  setOpen(false);
                }}
              >
                Book Consult
              </NavbarCtaButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}