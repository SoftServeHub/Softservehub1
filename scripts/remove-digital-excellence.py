from pathlib import Path

p = Path(__file__).resolve().parents[1] / "src/components/dimensions/DimensionsPage.jsx"
text = p.read_text(encoding="utf-8")

start = text.index("export function SplitTextReveal")
end = text.index("function ParallaxCard", start)
text = text[:start] + text[end:]

text = text.replace(
    """export default function DimensionsPage({
  heroTitle = "DIGITAL",
  heroSubtitle = "EXCELLENCE",
  images = DEFAULT_IMAGES,
  servicesWeProvide = SERVICES_WE_PROVIDE,
} = {})""",
    """export default function DimensionsPage({
  images = DEFAULT_IMAGES,
  servicesWeProvide = SERVICES_WE_PROVIDE,
} = {})""",
)

text = text.replace(
    "        <DimensionsHero title={heroTitle} subtitle={heroSubtitle} />\n        ",
    "",
)

p.write_text(text, encoding="utf-8")
print("removed Digital Excellence hero")
