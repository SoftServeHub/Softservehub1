import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, X } from "lucide-react";
import logo from "../images/logo.webp";

function ContactRow({ icon: Icon, iconClass, children, href }) {
  const content = (
    <>
      <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${iconClass}`} aria-hidden />
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <li>
        <a
          href={href}
          className="flex items-start gap-2.5 text-sm text-[#64748b] transition-colors hover:text-[#0f172a]"
        >
          {content}
        </a>
      </li>
    );
  }

  return (
    <li className="flex items-start gap-2.5 text-sm text-[#64748b]">
      {content}
    </li>
  );
}

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/softserve-hub/",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/softservehub/",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/SoftServe-Hub/61580467110969/",
    icon: Facebook,
  },
  {
    label: "X",
    href: "https://x.com/SoftserveHub",
    icon: X,
  },
];

const OUR_PRODUCTS = [
  { title: "Orbileads", to: "/products/orbileads" },
  { title: "HRMS", to: "/products/hrms" },
  { title: "CRMS", to: "/products/crms" },
  { title: "AI Intelligence Hub", to: "/products/ai-intelligence-hub" },
  { title: "Security Shield", to: "/products/security-shield" },
];

const CORE_SERVICES = [
  {
    title: "Website & Web Application Development",
    to: "/services/it/website-web-application-services/website-design-development",
  },
  {
    title: "Mobile Application Development",
    to: "/services/it/mobile-application-development/android-app-development",
  },
  {
    title: "Custom & Enterprise Software",
    to: "/services/it/custom-enterprise-software/custom-enterprise-software-development",
  },
  {
    title: "AI & Automation Solutions",
    to: "/services/it/ai-automation-solutions/aiot-solutions",
  },
  {
    title: "Digital Marketing Services",
    to: "/services/non-it/digital-marketing-services/lead-generation-campaigns",
  },
];

export default function FooterLegacy() {
  return (
    <footer className="border-t border-[#e2e8f0] bg-white pt-16 text-[#0f172a] md:pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 border-b border-[#e2e8f0] pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:pb-16">
          <div>
            <div className="mb-5">
              <img
                src={logo}
                alt="SoftServe Hub"
                className="h-20 w-auto min-w-[8rem] object-contain object-left sm:h-24 sm:min-w-[10rem]"
              />
            </div>

            <p className="mb-6 max-w-md text-sm leading-relaxed text-[#64748b]">
              Transforming ideas into scalable digital solutions with cutting-edge technology
              and strategic innovation.
            </p>

            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e2e8f0] text-[#64748b] transition-colors hover:border-[#d4af37] hover:text-[#d4af37]"
                >
                  <s.icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold tracking-wide text-[#0f172a]">
              INDIA ADDRESS
            </h4>
            <ul className="space-y-3">
              <ContactRow icon={MapPin} iconClass="text-rose-500">
                Chennai, India
              </ContactRow>
              <ContactRow icon={Phone} iconClass="text-rose-500" href="tel:+916380207061">
                +91 63802 07061
              </ContactRow>
              <ContactRow
                icon={Mail}
                iconClass="text-[#94a3b8]"
                href="mailto:contact@softservehub.com"
              >
                contact@softservehub.com
              </ContactRow>
            </ul>

            <div className="mt-5 overflow-hidden rounded-xl border border-[#e2e8f0]">
              <iframe
                src="https://www.google.com/maps?q=12.9646836,80.2468603&output=embed"
                width="100%"
                height="140"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SoftServe Hub location"
              />
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold tracking-wide text-[#0f172a]">
              CORE SERVICES
            </h4>
            <ul className="space-y-3">
              {CORE_SERVICES.map((service) => (
                <li key={service.title}>
                  <Link
                    to={service.to}
                    className="text-sm text-[#64748b] transition-colors hover:text-[#0f172a]"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold tracking-wide text-[#0f172a]">
              OUR PRODUCTS
            </h4>
            <ul className="space-y-3">
              {OUR_PRODUCTS.map((product) => (
                <li key={product.title}>
                  <Link
                    to={product.to}
                    className="text-sm text-[#64748b] transition-colors hover:text-[#0f172a]"
                  >
                    {product.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/products"
                  className="text-sm font-semibold text-[#d4af37] transition-colors hover:text-[#b45309]"
                >
                  View all products →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#e2e8f0] py-6 text-sm text-[#64748b] md:flex-row">
          <p>© {new Date().getFullYear()} SoftServe Hub Technologies Pvt. Ltd.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-end">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
