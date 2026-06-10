from pathlib import Path

p = Path(__file__).resolve().parents[1] / "src/components/dimensions/DimensionsPage.jsx"
text = p.read_text(encoding="utf-8")

start = text.index("function ParallaxMasonry")
end = text.index("function ExplodingBento", start)
text = text[:start] + text[end:]

text = text.replace("</motion.div>\n\n        <motion.div className=\"bento-item md:col-span-2", "</motion.div>\n\n        <motion.div className=\"bento-item md:col-span-2")
text = text.replace(
    "        </motion.div>\n\n        <motion.div className=\"bento-item md:col-span-2 md:row-span-1 rounded-[2rem] border border-[#e2e8f0] bg-white",
    "        </motion.div>\n\n        <motion.div className=\"bento-item md:col-span-2 md:row-span-1 rounded-[2rem] border border-[#e2e8f0] bg-white",
)

# fix certified delivery close tag
text = text.replace(
    """          <p className="mt-2 text-xs leading-relaxed text-[#64748b]">
            Structured handoffs and accountable execution
          </p>
        </motion.div>

        <motion.div className="bento-item md:col-span-2""",
    """          <p className="mt-2 text-xs leading-relaxed text-[#64748b]">
            Structured handoffs and accountable execution
          </p>
        </motion.div>

        <motion.div className="bento-item md:col-span-2""",
)

text = text.replace(
    """          <p className="mt-2 text-xs leading-relaxed text-[#64748b]">
            Structured handoffs and accountable execution
          </p>
        </motion.div>

        <motion.div className="bento-item md:col-span-2""",
    """          <p className="mt-2 text-xs leading-relaxed text-[#64748b]">
            Structured handoffs and accountable execution
          </p>
        </motion.div>

        <motion.div className="bento-item md:col-span-2""",
)

# actual fix - div not motion
text = text.replace(
    """          <p className="mt-2 text-xs leading-relaxed text-[#64748b]">
            Structured handoffs and accountable execution
          </p>
        </motion.div>

        <motion.div className="bento-item md:col-span-2 md:row-span-1 rounded-[2rem] border border-[#e2e8f0] bg-white p-8 flex items-center gap-8 hover:bg-[#fafafa]""",
    """          <p className="mt-2 text-xs leading-relaxed text-[#64748b]">
            Structured handoffs and accountable execution
          </p>
        </motion.div>

        <motion.div className="bento-item md:col-span-2 md:row-span-1 rounded-[2rem] border border-[#e2e8f0] bg-white p-8 flex items-center gap-8 hover:bg-[#fafafa]""",
)

# Remove lenis block from export default
lenis_block = """  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

"""
if lenis_block in text:
    text = text.replace(lenis_block, "")

# Remove unused imports if Lenis only used there
if "new Lenis" not in text:
    text = text.replace("import Lenis from \"lenis\";\n", "")

# Remove CORE_SERVICE_CARD_HEIGHTS if unused
if "CORE_SERVICE_CARD_HEIGHTS" not in text.split("const CORE_SERVICE_CARD_HEIGHTS")[1].split("function")[0] if "CORE_SERVICE_CARD_HEIGHTS" in text else True:
    pass

p.write_text(text, encoding="utf-8")
print("done")
