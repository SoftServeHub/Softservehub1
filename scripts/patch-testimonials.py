from pathlib import Path

lines = Path("src/components/testimonials/UiloraChainex.jsx").read_text(encoding="utf-8").splitlines(True)

# Fix carousel closing tag line 282 (index 281): </div> -> </motion.div>
for i, line in enumerate(lines):
    if line.strip() == "</div>" and i > 0 and "})}" in lines[i - 1]:
        lines[i] = line.replace("</motion.div>", "</motion.div>")
        break

# Replace nav opening div with motion.div + props
for i, line in enumerate(lines):
    if 'className="mt-8 flex items-center justify-center gap-3 px-8"' in line:
        indent = "        "
        lines[i : i + 1] = [
            f'{indent}<motion.div\n',
            f'{indent}  className="mt-8 flex items-center justify-center gap-3 px-8"\n',
            f'{indent}  initial={{ opacity: 0, y: 20 }}\n',
            f'{indent}  whileInView={{ opacity: 1, y: 0 }}\n',
            f'{indent}  viewport={{ once: true }}\n',
            f'{indent}  transition={{ duration: 0.55, delay: 0.35, ease: "easeOut" }}\n',
            f'{indent}>\n',
        ]
        break

# Fix nav closing before outer motion.div
for i in range(len(lines) - 1, -1, -1):
    if lines[i].strip() == "</motion.div>" and i > 0 and lines[i - 1].strip() == "</motion.div>":
        # nav closes with </div> before </motion.div>
        if lines[i - 1].strip() == "</motion.div>":
            pass
    if lines[i].strip() == "</motion.div>" and "Next" in "".join(lines[max(0, i - 15) : i]):
        lines[i] = lines[i].replace("</motion.div>", "</motion.div>")
        break

Path("src/components/testimonials/UiloraChainex.jsx").write_text("".join(lines), encoding="utf-8")
print("patched")
