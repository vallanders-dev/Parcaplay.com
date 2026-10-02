#!/usr/bin/env python3
"""Generate public/og-image.svg — the Parça link-preview source artwork.

1200x630. Dark background, coral orb (brand mark), wordmark + tagline as
vector paths (converted from Noto Sans with fontTools, so no font is needed
wherever the SVG is rendered). Regenerate with: python3 scripts/og-svg.py
"""
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen

W, H = 1200, 630
BOLD = "/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf"
REGULAR = "/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf"


def text_paths(text, font_path, size, x, baseline, fill):
    font = TTFont(font_path)
    glyphset = font.getGlyphSet()
    cmap = font.getBestCmap()
    upm = font["head"].unitsPerEm
    scale = size / upm
    dx = 0.0
    parts = []
    for ch in text:
        gname = cmap.get(ord(ch))
        if gname is None:
            dx += 0.5 * upm
            continue
        pen = SVGPathPen(glyphset)
        glyphset[gname].draw(pen)
        d = pen.getCommands()
        if d and d.strip():
            tx = x + dx * scale
            parts.append(
                f'<path d="{d}" transform="translate({tx:.2f},{baseline:.2f})'
                f' scale({scale:.6f},{-scale:.6f})" fill="{fill}"/>'
            )
        dx += glyphset[gname].width
    return "\n    ".join(parts), dx * scale


wordmark, _ = text_paths("Parça", BOLD, 148, 90, 322, "#ffffff")
tagline, _ = text_paths(
    "Seu parça gamer, que responde por voz.", REGULAR, 41, 94, 402, "#a7aeb9"
)

svg = f"""<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">
  <defs>
    <radialGradient id="orb" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.7"/>
      <stop offset="34%" stop-color="#ff6b4a"/>
      <stop offset="80%" stop-color="#15171d"/>
      <stop offset="100%" stop-color="#15171d" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ff6b4a" stop-opacity="0.20"/>
      <stop offset="100%" stop-color="#ff6b4a" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="vignette" cx="30%" cy="45%" r="90%">
      <stop offset="0%" stop-color="#14161c"/>
      <stop offset="100%" stop-color="#0c0e12"/>
    </radialGradient>
  </defs>
  <rect width="{W}" height="{H}" fill="url(#vignette)"/>
  <circle cx="925" cy="315" r="310" fill="url(#glow)"/>
  <circle cx="925" cy="315" r="195" fill="url(#orb)"/>
  <rect x="90" y="440" width="72" height="8" rx="4" fill="#ff6b4a"/>
    {wordmark}
    {tagline}
</svg>
"""

with open("public/og-image.svg", "w", encoding="utf-8") as f:
    f.write(svg)
print("wrote public/og-image.svg")
