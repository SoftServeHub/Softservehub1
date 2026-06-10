import re
from pathlib import Path

SERVICES_ROOT = Path(__file__).resolve().parent.parent / "src" / "pages" / "services"


def depth_import_path(file_path: Path) -> str:
    rel = file_path.relative_to(SERVICES_ROOT)
    depth = len(rel.parts) - 1
    prefix = "/".join([".."] * (depth + 2))
    return (
        f'import MaintenanceSupportSection from '
        f'"{prefix}/components/services/MaintenanceSupportSection";'
    )


def cleanup(text: str) -> str:
    lines = text.splitlines(keepends=True)
    out: list[str] = []
    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        if stripped == "{/* Maintenance Support */}":
            if out and out[-1].strip() == "{/* Maintenance Support */}":
                i += 1
                continue

        if (
            "bg-[linear-gradient(180deg,rgba(18,20,39" in line
            and stripped.startswith("<div")
        ):
            j = i + 1
            while j < len(lines) and not lines[j].strip():
                j += 1
            if j < len(lines) and (
                "Maintenance Support" in lines[j]
                or "MaintenanceSupportSection" in lines[j]
            ):
                i += 1
                continue

        if (
            stripped == ")}" 
            and out
            and out[-1].strip() == "/>"
            and any("MaintenanceSupportSection" in l for l in out[-8:])
        ):
            i += 1
            continue

        out.append(line)
        i += 1

    return "".join(out)


def ensure_import(text: str, import_line: str) -> str:
    if import_line in text:
        return text
    if "MaintenanceSupportSection" not in text:
        return text
    last_import = 0
    for m in re.finditer(r"^import .+;$", text, re.MULTILINE):
        last_import = m.end() + 1
    return text[:last_import] + import_line + "\n" + text[last_import:]


def main():
    fixed = 0
    for path in SERVICES_ROOT.rglob("*.tsx"):
        original = path.read_text(encoding="utf-8")
        text = cleanup(original)
        if "MaintenanceSupportSection" in text:
            text = ensure_import(text, depth_import_path(path))
        if text != original:
            path.write_text(text, encoding="utf-8")
            fixed += 1
            print(f"fixed: {path.relative_to(SERVICES_ROOT)}")

    print(f"\nFixed {fixed} files.")


if __name__ == "__main__":
    main()
