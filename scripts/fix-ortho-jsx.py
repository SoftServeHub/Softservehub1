p = r"src/components/cinematic/OrthoPivotReveal.jsx"
lines = open(p, encoding="utf-8").readlines()
lines[149] = "        </motion.div>\n"
lines[81] = '          <div className="pointer-events-none absolute inset-0 z-50 flex flex-col justify-between p-12">\n'
lines[82] = '            <motion.div className="flex items-start justify-between">\n'
lines[85] = "            </motion.div>\n"
lines[86] = "          </motion.div>\n"
open(p, "w", encoding="utf-8").writelines(lines)
print("fixed", repr(lines[127]), repr(lines[149]))
