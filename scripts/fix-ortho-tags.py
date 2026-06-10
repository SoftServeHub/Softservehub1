from pathlib import Path

p = Path("src/components/cinematic/OrthoPivotReveal.jsx")
lines = p.read_text(encoding="utf-8").splitlines(True)

d = "div"
lines[75] = f'        <{d} className="sticky top-0 h-screen w-full overflow-hidden perspective-[2000px]">\n'
lines[76] = (
    f'          <{d} className="pointer-events-none absolute inset-0 '
    'bg-[radial-gradient(ellipse_70%_50%_at_20%_0%,rgba(212,175,55,0.12),transparent_55%)]" />\n'
)
lines[87] = (
    f'          <{d} className="pointer-events-none absolute inset-0 z-50 '
    'flex flex-col justify-between p-12">\n'
)
lines[88] = f'            <{d} className="flex items-start justify-between">\n'
lines[89] = (
    f'              <{d} className="origin-left rotate-90 font-mono text-[10px] '
    'uppercase tracking-widest text-[#92400e]/35">\n'
)
lines[91] = f"              </{d}>\n"
lines[92] = f"            </{d}>\n"
lines[93] = f"          </{d}>\n"
lines[94] = f"        </{d}>\n"
lines[95] = f"      </{d}>\n"

p.write_text("".join(lines), encoding="utf-8")
print("fixed scroll wrapper tags")
