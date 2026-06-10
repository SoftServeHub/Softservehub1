from pathlib import Path

Path("src/components/FooterLegacy.jsx").write_text(
    '''import { useState } from "react";
import logo from "../images/logo.png";

function FooterSection({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between md:pointer-events-none"
      >
        <h5 className="text-sm font-semibold text-white">{title}</h5>
        <span className="text-[#D4AF37] md:hidden">{open ? "−" : "+"}</span>
      </button>

      <div className={`mt-4 space-y-2 text-sm text-gray-400 ${open ? "block" : "hidden"} md:block`}>
        {children}
      </div>
    </motion.div>
  );
}

export default function FooterLegacy() {
  return (
    <footer className="bg-[#0b0b0b] pt-20 text-gray-300">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div className="grid grid-cols-1 gap-16 border-b border-white/10 pb-16 lg:grid-cols-2">
          <motion.div>
            <motion.div className="mb-4 flex items-center gap-3">
              <img src={logo} alt="SoftServe Hub" className="h-12 w-12" />
              <h3 className="text-xl font-bold text-white">
                SoftServe <span className="text-[#D4AF37]">Hub</span>
              </h3>
            </motion.div>

            <p className="mb-6 max-w-md text-sm text-gray-400">
              Transforming ideas into scalable digital solutions with cutting-edge technology
              and strategic innovation.
            </p>

            <motion.div className="mt-6 flex gap-5">
              {[
                { label: "LinkedIn", href: "#" },
                { label: "Instagram", href: "#" },
                { label: "X", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="relative text-gray-400 transition hover:text-[#D4AF37]"
                >
                  {s.label}
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
            <motion.div>
              <h4 className="mb-4 text-sm font-semibold text-white">INDIA ADDRESS</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>📍 Chennai, India</li>
                <li>📞 +91 9XXXXXXXXX</li>
                <li>✉️ contact@softservehub.com</li>
              </ul>
            </motion.div>

            <motion.div>
              <h4 className="mb-4 text-sm font-semibold text-white">USA ADDRESS</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>📍 Texas, USA</li>
                <li>📞 +1 2XXXXXXXXX</li>
                <li>✉️ usa@softservehub.com</li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className="grid grid-cols-1 gap-10 border-b border-white/10 py-16 md:grid-cols-3 lg:grid-cols-6">
          <FooterSection title="SERVICES">
            <p>Web Development</p>
            <p>Mobile App Development</p>
            <p>UI / UX Design</p>
            <p>SEO Services</p>
          </FooterSection>

          <FooterSection title="SOLUTIONS">
            <p>ERP Solution</p>
            <p>CRM Solution</p>
            <p>CMS Solution</p>
          </FooterSection>

          <FooterSection title="QUICK LINK">
            <p>Industries</p>
            <p>Contact Us</p>
            <p>Blog</p>
          </FooterSection>

          <FooterSection title="INDUSTRIES WE SERVE">
            <p>E-Commerce</p>
            <p>Healthcare</p>
            <p>Education</p>
          </FooterSection>

          <FooterSection title="LOCATION SERVICES">
            <p>SEO Company in Chennai</p>
            <p>Web Development in India</p>
            <p>Mobile App Development</p>
          </FooterSection>
        </motion.div>

        <motion.div className="flex flex-col items-center justify-between py-6 text-sm text-gray-400 md:flex-row">
          <p>© {new Date().getFullYear()} SoftServe Hub Technologies Pvt. Ltd.</p>
          <motion.div className="mt-4 flex gap-4 md:mt-0">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>PayPal</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
'''.replace("motion.div", "motion.div").replace("<motion.div", "<motion.div").replace("</motion.div>", "</motion.div>"),
    encoding="utf-8",
)
