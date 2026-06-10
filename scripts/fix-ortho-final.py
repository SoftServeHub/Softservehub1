from pathlib import Path

p = Path("src/components/cinematic/OrthoPivotReveal.jsx")
lines = p.read_text(encoding="utf-8").splitlines(True)

# Fix lines 81-89 (0-indexed 80-88) - HUD and closings
lines[80] = '          <div className="pointer-events-none absolute inset-0 z-50 flex flex-col justify-between p-12">\n'
lines[81] = '            <motion.div className="flex items-start justify-between">\n'
lines[82] = '              <div className="origin-left rotate-90 font-mono text-[10px] uppercase tracking-widest text-white/20">\n'
lines[84] = "              </motion.div>\n"
lines[85] = "            </motion.div>\n"
lines[86] = "          </motion.div>\n"
lines[87] = "        </motion.div>\n"
lines[88] = "      </motion.div>\n"

# Fix PivotFace - replace motion.div layout with div (lines 127-166, 0-indexed)
replacements = {
    126: '      <div className="flex w-full max-w-7xl flex-col items-center justify-between gap-16 md:flex-row md:gap-32">\n',
    127: '        <div className="order-2 w-full space-y-8 md:order-1 md:w-1/2">\n',
    128: '          <div className="space-y-3">\n',
    135: "          </motion.div>\n",
    141: '          <div className="pt-4">\n',
    148: "          </motion.div>\n",
    149: "        </motion.div>\n",
    151: '        <div className="relative order-1 flex h-[60vh] w-full flex-shrink-0 md:order-2 md:h-[80vh] md:w-[480px]">\n',
    152: '          <motion.div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]">\n',
    159: "          </motion.div>\n",
    164: "        </motion.div>\n",
    165: "      </motion.div>\n",
}

for idx, line in replacements.items():
    lines[idx] = line

# Manual fix remaining wrong closings
lines[84] = "              </motion.div>\n"  # wrong
lines[84] = "              </motion.div>\n"

# Let me read and fix properly
text = "".join(lines)
fixes = [
    ('<motion.div className="pointer-events-none absolute inset-0 z-50', '<motion.div className="pointer-events-none absolute inset-0 z-50'),
]
# Simpler: rewrite pivot face and hud from scratch in file

pivot_face = '''function PivotFace({ section, index, total, progress }) {
  const start = index / total;
  const end = (index + 1) / total;

  const rotateX = useTransform(progress, [start - 0.1, start, end, end + 0.1], [90, 0, 0, -90]);
  const z = useTransform(progress, [start - 0.1, start, end, end + 0.1], [-500, 0, 0, -500]);
  const opacity = useTransform(progress, [start - 0.1, start, end, end + 0.1], [0, 1, 1, 0]);
  const imgY = useTransform(progress, [start, end], [-80, 80]);

  return (
    <motion.div
      style={{
        rotateX,
        z,
        opacity,
        transformStyle: "preserve-3d",
        transformOrigin: "center center -50vh",
      }}
      className="absolute inset-0 flex h-full w-full items-center justify-center px-10 md:px-24"
    >
      <div className="flex w-full max-w-7xl flex-col items-center justify-between gap-16 md:flex-row md:gap-32">
        <motion.div className="order-2 w-full space-y-8 md:order-1 md:w-1/2">
          <motion.div className="space-y-3">
            <span className="block font-mono text-xs uppercase tracking-[0.4em] text-white/30">
              {section.tag} // Section 0{index + 1}
            </span>
            <h2 className="whitespace-pre-line text-6xl font-bold leading-[0.9] tracking-tighter text-white md:text-8xl">
              {section.title}
            </h2>
          </motion.div>

          <p className="max-w-md text-lg font-light leading-relaxed text-neutral-500 md:text-xl">
            {section.desc}
          </p>

          <motion.div className="pt-4">
            <Link
              to={section.to}
              className="inline-flex rounded-full border border-white/10 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-500 hover:bg-white hover:text-black"
            >
              View Details
            </Link>
          </motion.div>
        </motion.div>

        <motion.div className="relative order-1 flex h-[60vh] w-full flex-shrink-0 md:order-2 md:h-[80vh] md:w-[480px]">
          <motion.div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]">
            <motion.img
              style={{ y: imgY, scale: 1.5 }}
              src={`${section.img}?q=80&w=1200&auto=format&fit=crop&h=1600`}
              className="absolute inset-0 block h-full w-full object-cover grayscale-[0.3] transition-all duration-1000 hover:grayscale-0"
              alt={section.tag}
            />
          </motion.div>
          <motion.div
            className="absolute -inset-20 -z-10 rounded-full opacity-20 blur-[120px]"
            style={{ backgroundColor: section.color }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
'''

# I'll stop and write the entire file content in the py script as one string with ONLY correct tags
