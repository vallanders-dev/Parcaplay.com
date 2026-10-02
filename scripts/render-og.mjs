#!/usr/bin/env node
/**
 * Render public/og-image.svg -> <dist>/og-image.png (1200x630).
 * Run as a subprocess (see src/integrations/og-image.ts) so it never
 * depends on Astro's Vite module runner. Exits non-zero on failure.
 */
import { Resvg } from "@resvg/resvg-js";
import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const distDir = process.argv[2];
if (!distDir) {
  console.error("usage: render-og.mjs <dist-dir>");
  process.exit(1);
}
const svg = await readFile(
  new URL("../public/og-image.svg", import.meta.url),
  "utf8"
);
const png = new Resvg(svg, { fit: { mode: "width", value: 1200 } })
  .render()
  .asPng();
await writeFile(join(distDir, "og-image.png"), png);
console.log("og-image.png rendered");
