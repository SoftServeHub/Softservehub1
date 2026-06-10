from pathlib import Path

from PIL import Image

IMG_DIR = Path(__file__).resolve().parent.parent / "src" / "images"
RASTER = {".png", ".jpg", ".jpeg", ".PNG", ".JPG", ".JPEG"}


def settings(name: str):
    lower = name.lower()
    if lower in {"logo.png", "hero.png", "google.png"}:
        return 640, 88
    if "msme" in lower:
        return 1200, 82
    if lower.startswith("delivery-"):
        return 1600, 78
    if any(x in lower for x in ("hero1", "hero2", "hero3")):
        return 1600, 76
    if "5star" in lower or "120+" in lower or "80+" in lower or "happy" in lower:
        return 1400, 80
    return 1400, 78


def main():
    total_before = 0
    total_after = 0
    converted = []

    for src in sorted(IMG_DIR.iterdir()):
        if not src.is_file() or src.suffix not in RASTER:
            continue

        max_edge, quality = settings(src.name)
        out = src.with_suffix(".webp")
        before = src.stat().st_size
        total_before += before

        with Image.open(src) as im:
            if im.mode in ("RGBA", "LA") or (
                im.mode == "P" and "transparency" in im.info
            ):
                im = im.convert("RGBA")
            else:
                im = im.convert("RGB")

            w, h = im.size
            scale = min(1.0, max_edge / max(w, h))
            if scale < 1.0:
                im = im.resize(
                    (int(w * scale), int(h * scale)),
                    Image.Resampling.LANCZOS,
                )

            im.save(out, format="WEBP", quality=quality, method=6)

        after = out.stat().st_size
        total_after += after
        converted.append((src.name, before, after))
        src.unlink()

    print(f"Converted {len(converted)} files")
    if total_before:
        pct = 100 * total_after / total_before
        print(
            f"Total: {total_before / 1024 / 1024:.2f} MB -> "
            f"{total_after / 1024 / 1024:.2f} MB ({pct:.1f}%)"
        )
    for name, before, after in converted:
        print(f"  {name}: {before / 1024:.0f} KB -> {after / 1024:.0f} KB")


if __name__ == "__main__":
    main()
