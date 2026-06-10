import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaFacebook,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import softserveLogo from "../../../images/logo.webp";
import { useZoraEmbedded } from "../../context/EmbedContext";

interface FooterProps {
  onAboutClick?: () => void;
  onProductClick?: () => void;
  onProductSelect?: (productId: string) => void;
  onContactClick?: () => void;
  onHomeClick?: () => void;
  onDocumentationClick?: () => void;
  onBlogClick?: () => void;
  onFAQClick?: () => void;
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
  onCookieClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({
  onAboutClick,
  onProductClick,
  onProductSelect,
  onContactClick,
  onHomeClick,
  onDocumentationClick,
  onBlogClick,
  onFAQClick,
  onPrivacyClick,
  onTermsClick,
  onCookieClick
}) => {
  const embedded = useZoraEmbedded();
  const gmailComposeUrl = "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=contact@softservehub.com";

  if (embedded) return null;

  const handleProductLinkClick = (productId: string) => {
    if (onProductSelect) {
      onProductSelect(productId);
      return;
    }

    const nextState = { page: "product-detail", productId };
    window.history.pushState(nextState, "", `/products/${productId}`);
    window.dispatchEvent(new PopStateEvent("popstate", { state: nextState }));
  };

  const mainLinks = [
    { label: "Home", onClick: onHomeClick },
    { label: "About", onClick: onAboutClick },
    { label: "Products", onClick: onProductClick },
    { label: "Contact", onClick: onContactClick },
  ];

  const productLinks = [
    { label: "CRMS", productId: "crms" },
    { label: "HRMS", productId: "hrms" },
    { label: "Chat Bot", productId: "chat-bot" },
    { label: "Email Automation", productId: "email-automation" },
    { label: "Security Shield", productId: "security-shield" },
  ];

  // const resourceLinks = [
  //   { label: "Documentation", onClick: onDocumentationClick },
  //   { label: "Blog", onClick: onHomeClick }, // Temporary - redirects to home
  //   { label: "Support", onClick: onContactClick },
  //   { label: "FAQ", onClick: onFAQClick },
  // ];

  const legalLinks = [
    { label: "Privacy Policy", onClick: onHomeClick }, // Temporary - redirects to home
    { label: "Terms of Service", onClick: onHomeClick }, // Temporary - redirects to home
    { label: "Cookie Policy", onClick: onHomeClick }, // Temporary - redirects to home
  ];

  const socials = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/company/zora-global-ai-technologies/?viewAsMember=true", label: "LinkedIn" },
    { icon: FaXTwitter, href: "https://x.com/softservehub", label: "X" },
    { icon: FaFacebook, href: "https://www.facebook.com/SoftServe HubGlobalAiTechnologies/", label: "Facebook" },
    { icon: FaYoutube, href: "https://www.youtube.com/@softservehubtechnologies", label: "YouTube" },
  ];

  const officeLocations = [
    {
      title: "Headquarters",
      address: "128 City Road, London, United Kingdom, EC1V 2NX",
    },
    {
      title: "Regional Office",
      address:
        "No:12,Gandhi Salai, Srinivasa Nagar, Kandhanchavadi, Perungudi, Chennai, Tamil Nadu-600096",
    },
  ];

  return (
    <footer className="relative bg-black overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-16 bg-gradient-to-b from-purple-900/60 to-transparent" />

      {/* Floating gradient orbs */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[700px] h-[700px] bg-gradient-to-br from-purple-600/15 to-transparent blur-[150px] rounded-full top-[-200px] left-[-200px] -z-30 pointer-events-none"
      />

      <div
        className="absolute w-[600px] h-[600px] bg-gradient-to-tl from-cyan-600/10 to-transparent blur-[150px] rounded-full bottom-[-200px] right-[-200px] -z-30 pointer-events-none"
      />

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -Math.random() * 60, 0],
            x: [0, Math.sin(i) * 40, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 py-10 md:py-16 xl:py-20">

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8 md:mb-16" />

        {/* Main Footer Content with Map */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(280px,360px)] lg:items-start xl:gap-12 mb-8 md:mb-16">

          {/* Left Side - Links Grid */}
          <div className="grid gap-8 min-[520px]:grid-cols-[minmax(0,1.35fr)_minmax(0,0.8fr)_minmax(0,0.9fr)] min-[520px]:gap-x-5 md:grid-cols-[minmax(0,1.5fr)_minmax(0,0.9fr)_minmax(0,1fr)] md:gap-x-8 md:gap-y-10 text-center min-[520px]:text-left">

            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full flex flex-col items-center min-[520px]:items-start min-[520px]:max-w-[240px] md:max-w-sm"
            >
              <img
                src={softserveLogo}
                alt="SoftServe Hub"
                className="h-16 w-auto object-contain sm:h-[4.5rem]"
              />
              <p className="text-gray-400 text-xs md:text-sm font-medium leading-relaxed mt-2 md:mt-3">
                Empowering enterprises with AI-driven solutions, cloud transformation and strategic consulting
              </p>

              <div className="mt-3.5 md:mt-4 space-y-3 md:space-y-3.5 w-full max-w-[18rem] mx-auto min-[520px]:max-w-none min-[520px]:mx-0">
                {officeLocations.map((office) => (
                  <div
                    key={office.title}
                    className="grid grid-cols-[16px_minmax(0,1fr)] items-start gap-x-2.5 text-left"
                  >
                    <FaMapMarkerAlt className="w-3.5 h-3.5 text-purple-400 mt-1 shrink-0" />
                    <div className="min-w-0">
                      <h5 className="font-semibold text-white text-xs md:text-base">{office.title}</h5>
                      <p className="mt-1 text-gray-400 text-xs md:text-sm font-medium leading-relaxed break-words">
                        {office.address}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 md:mt-5 flex flex-col items-center min-[520px]:items-start w-full">
                <h5 className="font-semibold text-white text-sm md:text-base">Contact</h5>
                <div className="mt-2 md:mt-3 space-y-1.5 md:space-y-2">
                  <a
                    href={gmailComposeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center justify-center min-[520px]:justify-start gap-1.5 text-gray-400 hover:text-purple-300 transition-colors text-xs md:text-sm font-medium break-all"
                  >
                    <FaEnvelope className="w-3 h-3 text-purple-400 shrink-0" />
                    <span> contact@softservehub.com</span>
                  </a>
                  <br />
                  <a
                    href="tel:+916380207061"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center justify-center min-[520px]:justify-start gap-1.5 text-gray-400 hover:text-purple-300 transition-colors text-xs md:text-sm font-medium"
                  >
                    <FaPhoneAlt className="w-3 h-3 text-purple-400 shrink-0" />
                    <span>Phn No : 6380207061</span>
                  </a>
                  <br />
                  <a
                    href="tel:+914446254744"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center justify-center min-[520px]:justify-start gap-1.5 text-gray-400 hover:text-purple-300 transition-colors text-xs md:text-sm font-medium"
                  >
                    <FaPhoneAlt className="w-3 h-3 text-purple-400 shrink-0" />
                    <span>Tel No : 044-4625 4744</span>
                  </a>
                </div>
              </div>

              <div className="mt-3.5 flex flex-wrap justify-center min-[520px]:justify-start gap-2">
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.label}
                      className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:border-purple-500/50 hover:text-purple-400 transition-all duration-200"
                      onClick={e => e.stopPropagation()}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="min-[520px]:justify-self-start min-[520px]:mt-[4.25rem] md:mt-[4.75rem]"
            >
              <h4 className="font-semibold text-white text-sm md:text-base mb-2 md:mb-4">Company</h4>
              <div className="mt-3 md:mt-4 space-y-1.5 md:space-y-2.5">
                {mainLinks.map((link) => (
                  <motion.button
                    key={link.label}
                    onClick={link.onClick}
                    whileHover={{ x: 4 }}
                    className="block w-full text-center min-[520px]:text-left text-gray-400 hover:text-white transition-colors duration-200 text-xs md:text-sm font-medium cursor-pointer"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Products Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="min-[520px]:justify-self-start min-[520px]:mt-[4.25rem] md:mt-[4.75rem]"
            >
              <h4 className="font-semibold text-white text-sm md:text-base mb-2 md:mb-4">Products</h4>
              <div className="mt-3 md:mt-4 space-y-1.5 md:space-y-2.5">
                {productLinks.map((link) => (
                  <motion.button
                    key={link.label}
                    onClick={() => handleProductLinkClick(link.productId)}
                    whileHover={{ x: 4 }}
                    className="block w-full text-center min-[520px]:text-left text-gray-400 hover:text-white transition-colors duration-200 text-xs md:text-sm font-medium cursor-pointer"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Resources Links */}
            {/*<motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden sm:block"
            >
              <h4 className="font-semibold text-white text-sm md:text-base mb-2 md:mb-4">Resources</h4>
              <div className="space-y-1.5 md:space-y-2.5">
                {resourceLinks.map((link) => (
                  <motion.button
                    key={link.label}
                    onClick={link.onClick}
                    whileHover={{ x: 4 }}
                    className="block text-gray-400 hover:text-white transition-colors duration-200 text-xs md:text-sm font-medium cursor-pointer"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div> 
            </motion.div>*/}
          </div>

          {/* Right Side - Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md mx-auto lg:mx-0 lg:w-full flex flex-col items-center lg:items-start text-center lg:text-left mt-2 lg:mt-[4.75rem]"
            >
            <h4 className="text-sm md:text-base font-semibold text-white mb-2 md:mb-3">Our Location</h4>
            <div className="w-full h-48 sm:h-56 lg:h-48 rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.3275462737747!2d80.2468603!3d12.9646836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525de935894505%3A0x58f547fe15e57e7e!2sSoftServe Hub%20Global%20Ai%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SoftServe Hub Technologies Location"
              />
            </div>
            <p className="text-gray-400 text-xs mt-2 max-w-xs sm:max-w-none">SoftServe Hub Technologies Private Limited</p>
            <motion.a
              href="https://www.google.com/maps/place/SoftServe Hub+Global+Ai+Technologies+Private+Limited/@12.9646836,80.2468603,17z/data=!3m1!4b1!4m6!3m5!1s0x3a525de935894505:0x58f547fe15e57e7e!8m2!3d12.9646836!4d80.2468603!16s%2Fg%2F11yzxyxwnz?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition text-xs mt-2"
            >
              View on Google Maps <FaArrowRight className="w-3 h-3" />
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent origin-center mb-4 md:mb-8"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col lg:flex-row justify-between items-center lg:items-center gap-4 md:gap-6"
        >
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-xs">
              &copy; {new Date().getFullYear()} SoftServe Hub. All rights reserved.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {legalLinks.map((link) => (
              <motion.button
                key={link.label}
                onClick={link.onClick}
                whileHover={{ y: -2 }}
                className="text-gray-500 hover:text-white transition-colors duration-200 text-xs cursor-pointer"
              >
                {link.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
