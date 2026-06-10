from pathlib import Path

content = r"""import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import logo from "../images/logo.png";

const FOOTER_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/zora-global-ai-technologies/?viewAsMember=true", external: true },
  { label: "Services", to: "/services", external: false },
  { label: "Contact", to: "/contact", external: false },
  { label: "Products", to: "/products", external: false },
];

export function CurtainFooter() {
  return (
    <motion.div
      className="relative h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <motion.div className="fixed bottom-0 h-[800px] w-full">
        <motion.div className="relative flex h-full flex-col justify-between bg-[#0f172a] p-12 text-[#e2e8f0] md:p-24">
          <motion.div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_10%_0%,rgba(212,175,55,0.14),transparent_55%)]" />
          <motion.div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(212,175,55,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.15)_1px,transparent_1px)] [background-size:48px_48px]" />

          <motion.div className="relative z-10 flex items-start justify-between">
            <motion.div>
              <motion.div className="mb-8 flex items-center gap-3">
                <motion.img src={logo} alt="SoftServe Hub" className="h-12 w-12 rounded-lg object-contain" />
                <motion.span className="text-sm font-bold uppercase tracking-[0.2em] text-[#d4af37]">
                  SoftServe Hub
                </motion.span>
              </motion.div>
              <h2 className="text-[10vw] font-thin leading-[0.8] tracking-tighter text-[#f7f8fa]">
                SOFTSERVE
                <br />
                <motion.span className="font-bold italic text-[#d4af37]">HUB.</motion.span>
              </h2>
            </motion.div>
            <motion.div className="hidden space-y-2 text-right md:block">
              <p className="text-xl text-[#f1f5f9]">Chennai, India</p>
              <p className="text-xl text-[#94a3b8]">Texas, USA</p>
            </motion.div>
          </motion.div>

          <motion.div className="relative z-10 grid grid-cols-2 gap-8 border-t border-[#d4af37]/20 pt-8 md:grid-cols-4">
            {FOOTER_LINKS.map((item) => {
              const content = (
                <>
                  {item.label}
                  <ArrowUpRight className="opacity-0 transition-opacity group-hover:opacity-100" />
                </>
              );
              const className =
                "group flex items-center justify-between text-xl text-[#cbd5e1] transition-colors hover:text-[#d4af37] md:text-2xl";

              if (item.external) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {content}
                  </a>
                );
              }

              return (
                <Link key={item.label} to={item.to} className={className}>
                  {content}
                </Link>
              );
            })}
          </motion.div>

          <p className="relative z-10 text-center text-xs uppercase tracking-[0.2em] text-[#64748b] md:text-left">
            © {new Date().getFullYear()} SoftServe Hub Technologies Pvt. Ltd.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default CurtainFooter;
"""

content = content.replace("motion.div", "div").replace("motion.img", "img").replace("motion.span", "span")
Path("src/components/CurtainFooter.jsx").write_text(content, encoding="utf-8")
print("written")
