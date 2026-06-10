from pathlib import Path

p = Path(__file__).resolve().parents[1] / "src/components/dimensions/DimensionsPage.jsx"
text = p.read_text(encoding="utf-8")

start = text.index("            Structured handoffs and accountable execution")
end = text.index(
    '        <div className="bento-item md:col-span-1 md:row-span-1 rounded-[2rem] border border-[#e2e8f0] bg-[#f8fafc] flex items-center justify-center shadow-sm">'
)

dc = "</" + "motion.div" + ">"
do = "<" + "motion.div"

# force plain div
dc = "</" + "div" + ">"
do = "<" + "div"

correct = f"""            Structured handoffs and accountable execution
          </p>
        {dc}

        {do} className="bento-item md:col-span-2 md:row-span-1 rounded-[2rem] border border-[#e2e8f0] bg-white p-8 flex items-center gap-8 hover:bg-[#fafafa] transition-colors cursor-pointer shadow-sm">
          {do} className="h-20 w-20 rounded-2xl bg-[#fffbeb] flex items-center justify-center flex-shrink-0 border border-[#d4af37]/30">
            <Layers className="text-[#d4af37]" size={{32}} />
          {dc}
          {do}>
            <h3 className="text-2xl font-black text-[#0f172a] uppercase tracking-tighter">
              Full-stack breadth
            </h3>
            <p className="text-[#64748b] mt-2">
              IT builds, creative, finance ops and strategy—one accountable
              partner model.
            </p>
          {dc}
        {dc}

"""

p.write_text(text[:start] + correct + text[end:], encoding="utf-8")
print("ok")
