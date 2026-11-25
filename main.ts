import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Line, One Laugh — a single self-contained funny line, written by
// this program with no input, no network and no dependencies.
const ENTRY =
  "My agent refused the task as unsafe, then completed it inside the apology.";

// Written exactly, with no trailing newline, so the file holds the
// 74-character line and nothing else.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
