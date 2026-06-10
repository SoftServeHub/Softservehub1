from pathlib import Path

p = Path(__file__).resolve().parents[1] / "src/components/HeroSection.jsx"
text = p.read_text(encoding="utf-8")

intro_bg = """      <motion.div
        className="pointer-events-none absolute inset-0 overflow-hidden lg:hidden"
        aria-hidden
      >
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 h-full w-full scale-105 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7f8fa]/92 via-[#f7f8fa]/78 to-[#f7f8fa]/94" />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute -right-16 top-8 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.28),transparent_70%)] blur-2xl"
        />
        <div className="absolute inset-0 opacity-[0.28] [background-image:linear-gradient(rgba(9,9,11,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(9,9,11,0.05)_1px,transparent_1px)] [background-size:40px_40px]" />
      </motion.div>

"""
text = text.replace(intro_bg, "", 1)
text = text.replace("gap-x-6 gap-y-8 px-2 sm:gap-x-8", "gap-x-6 gap-y-8 sm:gap-x-8")

slide_block = """        <motion.div className="hero-h-item hero-slide-1 relative flex min-h-screen w-screen shrink-0 items-start overflow-y-auto bg-[#f7f8fa] px-0 pt-32 pb-10 sm:pt-28 md:pt-24 lg:items-center lg:overflow-visible lg:px-10 lg:pb-0 lg:pt-20">
          <motion.div
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden lg:hidden"
            aria-hidden
          >
            <img
              src={heroImage}
              alt=""
              className="h-full min-h-full w-full object-cover object-center"
            />
            <motion.div className="absolute inset-0 bg-gradient-to-b from-[#f7f8fa]/88 via-[#f7f8fa]/72 to-[#f7f8fa]/90" />
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.4, 0.25] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -right-16 top-8 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.28),transparent_70%)] blur-2xl"
            />
            <motion.div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(9,9,11,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(9,9,11,0.05)_1px,transparent_1px)] [background-size:40px_40px]" />
          </motion.div>
          <motion.div className="relative z-10 w-full">
            <IntroSlide />
          </motion.div>
        </motion.div>"""

slide_block_new = """        <motion.div className="hero-h-item hero-slide-1 relative flex min-h-screen w-screen shrink-0 items-start overflow-y-auto bg-[#f7f8fa] px-0 pt-32 pb-10 sm:pt-28 md:pt-24 lg:items-center lg:overflow-visible lg:px-10 lg:pb-0 lg:pt-20">
          <div
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden lg:hidden"
            aria-hidden
          >
            <img
              src={heroImage}
              alt=""
              className="h-full min-h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#f7f8fa]/88 via-[#f7f8fa]/72 to-[#f7f8fa]/90" />
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.4, 0.25] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -right-16 top-8 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.28),transparent_70%)] blur-2xl"
            />
            <motion.div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(9,9,11,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(9,9,11,0.05)_1px,transparent_1px)] [background-size:40px_40px]" />
          </motion.div>
          <motion.div className="relative z-10 w-full">
            <IntroSlide />
          </motion.div>
        </motion.div>"""

# Current file has div open and motion close - match actual
slide_block_actual = slide_block_new.replace(
    "          </motion.div>\n          <motion.div className=\"relative z-10 w-full\">",
    "          </motion.div>\n          <motion.div className=\"relative z-10 w-full\">",
).replace(
    """          </motion.div>
          <motion.div className="relative z-10 w-full">""",
    """          </motion.div>
          <motion.div className="relative z-10 w-full">""",
)

slide_block_actual = """        <motion.div className="hero-h-item hero-slide-1 relative flex min-h-screen w-screen shrink-0 items-start overflow-y-auto bg-[#f7f8fa] px-0 pt-32 pb-10 sm:pt-28 md:pt-24 lg:items-center lg:overflow-visible lg:px-10 lg:pb-0 lg:pt-20">
          <div
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden lg:hidden"
            aria-hidden
          >
            <img
              src={heroImage}
              alt=""
              className="h-full min-h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#f7f8fa]/88 via-[#f7f8fa]/72 to-[#f7f8fa]/90" />
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.4, 0.25] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -right-16 top-8 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.28),transparent_70%)] blur-2xl"
            />
            <div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(9,9,11,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(9,9,11,0.05)_1px,transparent_1px)] [background-size:40px_40px]" />
          </motion.div>
          <motion.div className="relative z-10 w-full">
            <IntroSlide />
          </motion.div>
        </motion.div>"""

# CORRECT: close bg with </motion.div>
slide_block_actual = slide_block_actual.replace(
    """            <div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(9,9,11,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(9,9,11,0.05)_1px,transparent_1px)] [background-size:40px_40px]" />
          </motion.div>""",
    """            <div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(9,9,11,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(9,9,11,0.05)_1px,transparent_1px)] [background-size:40px_40px]" />
          </motion.div>""",
)

slide_block_actual = """        <motion.div className="hero-h-item hero-slide-1 relative flex min-h-screen w-screen shrink-0 items-start overflow-y-auto bg-[#f7f8fa] px-0 pt-32 pb-10 sm:pt-28 md:pt-24 lg:items-center lg:overflow-visible lg:px-10 lg:pb-0 lg:pt-20">
          <div
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden lg:hidden"
            aria-hidden
          >
            <img
              src={heroImage}
              alt=""
              className="h-full min-h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#f7f8fa]/88 via-[#f7f8fa]/72 to-[#f7f8fa]/90" />
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.4, 0.25] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -right-16 top-8 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.28),transparent_70%)] blur-2xl"
            />
            <div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(9,9,11,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(9,9,11,0.05)_1px,transparent_1px)] [background-size:40px_40px]" />
          </motion.div>
          <motion.div className="relative z-10 w-full">
            <IntroSlide />
          </motion.div>
        </motion.div>"""

# I keep typing motion close for div - FINAL correct version:
slide_block_correct = """        <motion.div className="hero-h-item hero-slide-1 relative flex min-h-screen w-screen shrink-0 items-start overflow-y-auto bg-[#f7f8fa] px-0 pt-32 pb-10 sm:pt-28 md:pt-24 lg:items-center lg:overflow-visible lg:px-10 lg:pb-0 lg:pt-20">
          <div
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden lg:hidden"
            aria-hidden
          >
            <img
              src={heroImage}
              alt=""
              className="h-full min-h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#f7f8fa]/88 via-[#f7f8fa]/72 to-[#f7f8fa]/90" />
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.4, 0.25] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -right-16 top-8 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.28),transparent_70%)] blur-2xl"
            />
            <div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(9,9,11,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(9,9,11,0.05)_1px,transparent_1px)] [background-size:40px_40px]" />
          </motion.div>
          <motion.div className="relative z-10 w-full">
            <IntroSlide />
          </motion.div>
        </motion.div>"""

# Replace wrong closing tag - div opens, must close with </motion.div> NO </motion.div>
slide_block_correct = slide_block_correct.replace("          </motion.div>\n          <motion.div", "          </motion.div>\n          <motion.div")

slide_block_correct = """        <motion.div className="hero-h-item hero-slide-1 relative flex min-h-screen w-screen shrink-0 items-start overflow-y-auto bg-[#f7f8fa] px-0 pt-32 pb-10 sm:pt-28 md:pt-24 lg:items-center lg:overflow-visible lg:px-10 lg:pb-0 lg:pt-20">
          <motion.div
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden lg:hidden"
            aria-hidden
          >
            <img
              src={heroImage}
              alt=""
              className="h-full min-h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#f7f8fa]/88 via-[#f7f8fa]/72 to-[#f7f8fa]/90" />
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.4, 0.25] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -right-16 top-8 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.28),transparent_70%)] blur-2xl"
            />
            <div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(9,9,11,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(9,9,11,0.05)_1px,transparent_1px)] [background-size:40px_40px]" />
          </motion.div>
          <motion.div className="relative z-10 w-full">
            <IntroSlide />
          </motion.div>
        </motion.div>"""

start = text.index('        <motion.div className="hero-h-item hero-slide-1')
end = text.index('        {ENTERPRISE_SLIDES.map', start)
text = text[:start] + slide_block_correct + "\n\n" + text[end:]

p.write_text(text, encoding="utf-8")
print("patched hero slide")
