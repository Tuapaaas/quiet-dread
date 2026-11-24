// Two Days of Quiet Dread — a one-line code review comment that approves
// a pull request while carrying quiet existential dread.
//
// The comment is written to <MAKEFUN_OUTPUT_DIR>/entry.txt (default /output).
// The gate requires UTF-8 text of 1 to 140 characters, a single line.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const comment =
  "LGTM. The code is clean, the tests pass, and I have accepted that this will outlive me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), comment, "utf8");
