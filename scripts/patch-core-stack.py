from pathlib import Path

p = Path(__file__).resolve().parents[1] / "src/components/dimensions/DimensionsPage.jsx"
text = p.read_text(encoding="utf-8")
start = text.index("      {/* Mobile: one full-viewport card per scroll leg")
end = text.index("      {/* Desktop: three-column masonry + quote tile */}", start)

new = """      {/* Mobile: sticky stack — each card scrolls up and covers the one below */}
      <motion.div className="relative isolate mx-auto max-w-lg pb-32 lg:hidden">
        {[0, 1, 2, 3, 4].map((idx, i) => (
          <motion.div
            key={`core-stack-${idx}`}
            className={cn(
              "relative min-h-[130svh]",
              i > 0 && "-mt-[calc(100svh-5.25rem)]",
            )}
            style={{ zIndex: 20 + i }}
          >
            <motion.div
              className="sticky top-[5.25rem] z-10 flex h-[calc(100svh-5.25rem)] items-stretch pb-2"
              initial={{ opacity: 0, y: 56, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <ParallaxCard
                {...slot(idx)}
                className={cn(
                  "h-full min-h-[280px] w-full bg-white",
                  "shadow-[0_28px_70px_rgba(15,23,42,0.28)] ring-1 ring-black/10",
                )}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

"""

p.write_text(text[:start] + new + text[end:], encoding="utf-8")
print("patched mobile core stack")
