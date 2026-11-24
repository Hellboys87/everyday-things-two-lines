// Everyday Things, Two Lines — make.fun entry
// Writes the two-line entry to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line1 =
  "Rain is a cloud squeezing itself out like a wet sponge over your head: it soaks up water slowly until it is too full to hold, then drips and pours onto everything below.";
const line2 =
  "The sponge fits because both soak up water and let it go once full, but it leaves out that no hand squeezes a cloud \u2014 its drops just grow heavy enough to fall, and wind can shove the whole sponge sideways.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line1 + "\n" + line2 + "\n", "utf8");
