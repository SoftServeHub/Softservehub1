import re
from pathlib import Path

SERVICES_ROOT = Path(__file__).resolve().parent.parent / "src" / "pages" / "services"

THEME_OUTER = (
    'className="service-maintenance-theme rounded-[32px] border border-[#d4af37]/30 '
    "bg-gradient-to-br from-[#fffbeb] via-white to-[#fef3c7]/50 p-8 md:p-10 shadow-[0_20px_60px_rgba(212,175,55,0.1)]"
)

REPLACEMENTS = [
    (
        'className="rounded-[32px] border border-[#D4AF37]/30 bg-[linear-gradient(180deg,rgba(18,20,39,0.96),rgba(10,16,28,0.98))] p-8 md:p-10"',
        THEME_OUTER,
    ),
    (
        'className="rounded-3xl border border-[#D4AF37]/30 bg-[linear-gradient(180deg,rgba(18,20,39,0.96),rgba(10,16,28,0.98))] p-10"',
        'className="service-maintenance-theme rounded-[32px] border border-[#d4af37]/30 bg-gradient-to-br from-[#fffbeb] via-white to-[#fef3c7]/50 p-8 md:p-10 shadow-[0_20px_60px_rgba(212,175,55,0.1)]"',
    ),
]

TITLE_PATTERN = re.compile(
    r"(\{/\* Maintenance Support \*/\}\s*)"
    r'(<div className=")([^"]*)(">\s*'
    r'<div className="text-center">\s*'
    r'<h2[^>]*>\s*\{content\?\.maintenanceSupport\?\.title\})',
    re.DOTALL,
)


def theme_light_outer(attrs: str) -> str:
    if "service-maintenance-theme" in attrs:
        return attrs
    if "bg-[linear-gradient(180deg,rgba(18,20,39" in attrs:
        return (
            "service-maintenance-theme rounded-[32px] border border-[#d4af37]/30 "
            "bg-gradient-to-br from-[#fffbeb] via-white to-[#fef3c7]/50 p-8 md:p-10 "
            "shadow-[0_20px_60px_rgba(212,175,55,0.1)]"
        )
    if "bg-white/70" in attrs or "bg-white" in attrs:
        return (
            f"service-maintenance-theme {attrs} "
            "bg-gradient-to-br from-[#fffbeb] via-white to-[#fef3c7]/50 "
            "shadow-[0_20px_60px_rgba(212,175,55,0.1)]"
        )
    return f"service-maintenance-theme {attrs}"


def update_file(path: Path) -> bool:
    text = path.read_text(encoding="utf-8")
    if "maintenanceSupport?.title" not in text:
        return False

    new_text, count = TITLE_PATTERN.subn(
        lambda m: f'{m.group(1)}{m.group(2)}{theme_light_outer(m.group(3))}{m.group(4)}',
        text,
        count=1,
    )
    if count == 0:
        for old, new in REPLACEMENTS:
            if old in new_text:
                new_text = new_text.replace(old, new, 1)
                count += 1
                break

    if new_text == text:
        return False
    path.write_text(new_text, encoding="utf-8")
    return True


def main():
    updated = 0
    for path in SERVICES_ROOT.rglob("*.tsx"):
        if update_file(path):
            updated += 1
            print(path.relative_to(SERVICES_ROOT))
    print(f"\nUpdated {updated} files.")


if __name__ == "__main__":
    main()
