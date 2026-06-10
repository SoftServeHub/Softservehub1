import { Mail, MapPin, Phone } from "lucide-react";
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
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/softservehub/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/SoftServe-Hub/61580467110969/",
  },
  {
    label: "X",
    href: "https://x.com/SoftserveHub",
  },
];

export default function FooterLegacy() {
  return (
    <footer className="border-t border-[#e2e8f0] bg-white pt-16 text-[#0f172a] md:pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 border-b border-[#e2e8f0] pb-12 lg:grid-cols-2 lg:gap-16 lg:pb-16">
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

            <div className="flex flex-wrap gap-5">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-sm text-[#64748b] transition-colors hover:text-[#d4af37]"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
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
            </div>

            <div>
              <h4 className="mb-4 text-xs font-bold tracking-wide text-[#0f172a]">USA ADDRESS</h4>
              <ul className="space-y-3">
                <ContactRow icon={MapPin} iconClass="text-rose-500">
                  Texas, USA
                </ContactRow>
                <ContactRow icon={Phone} iconClass="text-rose-500" href="tel:+12000000000">
                  +1 2XXXXXXXXX
                </ContactRow>
                <ContactRow icon={Mail} iconClass="text-[#94a3b8]" href="mailto:usa@softservehub.com">
                  usa@softservehub.com
                </ContactRow>
              </ul>
            </div>
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
