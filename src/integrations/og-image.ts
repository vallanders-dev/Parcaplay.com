import type { AstroIntegration } from "astro";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const execFileAsync = promisify(execFile);

/**
 * Renders public/og-image.svg to dist/og-image.png (1200x630) at build time,
 * so link previews (og:image) work without committing a binary to the repo.
 * Runs the renderer in a subprocess (Astro's module runner is closed by the
 * time this hook fires). Fault-tolerant: a failure only logs a warning.
 */
export function ogImage(): AstroIntegration {
  return {
    name: "og-image",
    hooks: {
      "astro:build:done": async ({ dir, logger }) => {
        try {
          const root = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
          await execFileAsync(process.execPath, [
            join(root, "scripts", "render-og.mjs"),
            fileURLToPath(dir),
          ]);
          logger.info("og-image.png rendered");
        } catch (err) {
          logger.warn(`og-image.png skipped: ${(err as Error).message}`);
        }
      },
    },
  };
}
