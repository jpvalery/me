"""Subset local JetBrains Mono fonts, retaining Latin text, punctuation and symbols.

Requires fonttools[woff] (tested with 4.60.2). Run after replacing the fonts with
full upstream files to regenerate or extend the subset. Existing subsets can be
processed again, but removed glyphs require the full originals to restore.
"""

from pathlib import Path

from fontTools import subset
from fontTools.ttLib import TTFont

ROOT = Path(__file__).resolve().parents[1]
RANGES = [
    (0x0000, 0x036F),  # Latin, IPA, spacing and combining accent marks
    (0x1E00, 0x1EFF),  # Latin Extended Additional
    (0x2000, 0x2BFF),  # Punctuation, currency, arrows, math and symbols
]
UNICODES = {code for start, end in RANGES for code in range(start, end + 1)}

for path in sorted((ROOT / "src/fonts").glob("JetBrainsMono-*.woff2")):
    before = path.stat().st_size
    font = TTFont(path, recalcTimestamp=False)
    options = subset.Options()
    options.layout_features = ["*"]
    options.name_IDs = ["*"]  # Retain attribution, license and font metadata.
    subsetter = subset.Subsetter(options=options)
    subsetter.populate(unicodes=UNICODES)
    subsetter.subset(font)
    font.save(path)
    print(f"{path.name}: {before:,} → {path.stat().st_size:,} bytes")
