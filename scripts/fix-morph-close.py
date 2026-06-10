from pathlib import Path

p = Path(__file__).resolve().parents[1] / "src/components/hero/MagneticMorphStack.jsx"
lines = p.read_text(encoding="utf-8").splitlines()
if lines[-3].strip().startswith("</"):
    lines[-3] = "    </motion.div>".replace("motion.", "")
lines[-3] = "    </motion.div>"
# force div close for outer container
for i, line in enumerate(lines):
    if line.strip() == "</motion.div>" and i > 100:
        lines[i] = "    </motion.div>"
        break
for i, line in enumerate(lines):
    if "bottom-0 left-1/2" in line and i + 1 < len(lines):
        lines[i + 1] = "    </motion.div>"
        lines[i + 1] = "    </motion.div>"
        break

p.write_text("\n".join(lines) + "\n", encoding="utf-8")
