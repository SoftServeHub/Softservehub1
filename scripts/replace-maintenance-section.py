import re
from pathlib import Path


def div_depth_change(line: str) -> int:
    self_closing = len(re.findall(r"<div[^>]*/>", line))
    opens = line.count("<div") - self_closing
    closes = line.count("</div>")
    return opens - closes

SERVICES_ROOT = Path(__file__).resolve().parent.parent / "src" / "pages" / "services"

REPLACEMENT = """          {/* Maintenance Support */}
          <MaintenanceSupportSection
            title={content?.maintenanceSupport?.title}
            subtitle={content?.maintenanceSupport?.subtitle}
            cards={content?.maintenanceSupport?.cards}
          />"""

IMPORT_PATTERN = re.compile(
    r'import MaintenanceSupportSection from[^\n]+\n'
)


def depth_import_path(file_path: Path) -> str:
    rel = file_path.relative_to(SERVICES_ROOT)
    depth = len(rel.parts) - 1
    prefix = "/".join([".."] * (depth + 2))
    return (
        f'import MaintenanceSupportSection from '
        f'"{prefix}/components/services/MaintenanceSupportSection";'
    )


def ensure_import(text: str, import_line: str) -> str:
    if "MaintenanceSupportSection" in text:
        if IMPORT_PATTERN.search(text):
            return IMPORT_PATTERN.sub(import_line + "\n", text, count=1)
        return text
    last_import = 0
    for m in re.finditer(r"^import .+;$", text, re.MULTILINE):
        last_import = m.end() + 1
    return text[:last_import] + import_line + "\n" + text[last_import:]


def find_block_start(lines: list[str], title_idx: int) -> int:
    for i in range(title_idx, max(-1, title_idx - 30), -1):
        if "{/* Maintenance Support */}" in lines[i]:
            for j in range(i, min(i + 6, len(lines))):
                if lines[j].strip().startswith("<div"):
                    return j
            return i + 1
    for i in range(title_idx, max(-1, title_idx - 15), -1):
        if lines[i].strip().startswith("<div"):
            return i
    return title_idx - 2


def find_block_end(lines: list[str], start: int) -> int:
    depth = 0
    for i in range(start, len(lines)):
        line = lines[i]
        depth += div_depth_change(line)
        if depth == 0 and "</div>" in line:
            return i
    return start


def replace_in_file(path: Path) -> bool:
    text = path.read_text(encoding="utf-8")
    if "maintenanceSupport?.title" not in text:
        return False
    if "MaintenanceSupportSection" in text and "maintenanceSupport?.title" in text:
        # Already migrated unless duplicate inline block remains
        if "bg-[linear-gradient(180deg,rgba(18,20,39" not in text:
            return False

    lines = text.splitlines(keepends=True)
    title_idx = next(
        (i for i, line in enumerate(lines) if "maintenanceSupport?.title" in line),
        None,
    )
    if title_idx is None:
        return False

    start = find_block_start(lines, title_idx)
    end = find_block_end(lines, start)
    if end <= start:
        return False

    new_lines = lines[:start] + [REPLACEMENT + "\n"] + lines[end + 1 :]
    new_text = "".join(new_lines)
    new_text = ensure_import(new_text, depth_import_path(path))
    if new_text != text:
        path.write_text(new_text, encoding="utf-8")
        return True
    return False


def main():
    updated = 0
    for path in SERVICES_ROOT.rglob("*.tsx"):
        if replace_in_file(path):
            updated += 1
            print(f"OK: {path.relative_to(SERVICES_ROOT)}")
    print(f"\nUpdated {updated} files.")


if __name__ == "__main__":
    main()
