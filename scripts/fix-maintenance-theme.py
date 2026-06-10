"""Fix maintenance section theme: syntax, wrong sections, missed files."""
import re
from pathlib import Path

SERVICES_ROOT = Path(__file__).resolve().parent.parent / "src" / "pages" / "services"

THEME_DIV = (
    '<div className="service-maintenance-theme rounded-[32px] border border-[#d4af37]/30 '
    'bg-gradient-to-br from-[#fffbeb] via-white to-[#fef3c7]/50 p-8 md:p-10 '
    'shadow-[0_20px_60px_rgba(212,175,55,0.1)]">'
)
PROJECT_DIV = '<div className="rounded-3xl bg-white/70 border border-[#D4AF37]/30 p-10">'

PROJECT_WRONG = re.compile(
    r'<div className="service-maintenance-theme[^"]*"?\s*>'
    r'(?=\s*<div className="text-center">\s*<h2[^>]*>\s*\{content\?\.projectDuration\?\.title\})',
    re.DOTALL,
)

MAINTENANCE_DARK = re.compile(
    r'<div className="rounded-\[32px\] border border-\[#D4AF37\]/30 '
    r"bg-\[linear-gradient\(180deg,rgba\(18,20,39,0\.96\),rgba\(10,16,28,0\.98\)\)\] "
    r'p-8 md:p-10">'
    r'(?=\s*<div className="text-center">\s*<h2[^>]*>\s*\{content\?\.maintenanceSupport\?\.title\})',
    re.DOTALL,
)

MAINTENANCE_WHITE = re.compile(
    r'<div className="rounded-3xl bg-white/70 border border-\[#D4AF37\]/30 p-10">'
    r'(?=\s*<div className="text-center">\s*<h2[^>]*>\s*\{content\?\.maintenanceSupport\?\.title\})',
    re.DOTALL,
)


def main():
    updated = []
    for path in sorted(SERVICES_ROOT.rglob("*.tsx")):
        text = path.read_text(encoding="utf-8")
        if "maintenanceSupport?.title" not in text:
            continue
        original = text

        text = text.replace(
            "shadow-[0_20px_60px_rgba(212,175,55,0.1)]>",
            'shadow-[0_20px_60px_rgba(212,175,55,0.1)]">',
        )
        text = PROJECT_WRONG.sub(PROJECT_DIV, text)
        text = MAINTENANCE_DARK.sub(THEME_DIV, text)
        text, _ = MAINTENANCE_WHITE.subn(THEME_DIV, text, count=1)

        if text != original:
            path.write_text(text, encoding="utf-8")
            updated.append(path.relative_to(SERVICES_ROOT).as_posix())

    print(f"Updated {len(updated)} files:")
    for name in updated:
        print(f"  {name}")


if __name__ == "__main__":
    main()
