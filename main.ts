// Everyday Things, Two Lines — make.fun entry
// Writes the two-line entry to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line1 =
  "Rain is the sky doing its watering-can job upside down: clouds fill up with tiny drops until they get too heavy, then sprinkle them all over the ground below.";
const line2 =
  "The watering can fits because both hold water up high and let it fall in drops, but it leaves out that no giant hand tips the cloud \u2014 the drops grow heavy and fall on their own.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line1 + "\n" + line2 + "\n", "utf8");
