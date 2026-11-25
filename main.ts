// One Star for Monday — make.fun entry.
// Writes a single one-star review of Monday, written as though Monday
// were a restaurant, to /output/entry.txt. Node 22, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";

const review =
  "Arrived hungry, waited an hour, and the chef sent out Monday again — cold, grey, and somehow already my fault.";

// Gate: the entry must be one line of 1-180 UTF-8 characters,
// and at most 25 words — the bounty caps the review at 25 words.
// It must also be exactly the line itself: no stray whitespace,
// no carriage return, no trailing newline smuggled into the file.
const wordCount = review.split(/\s+/).filter((w) => w !== "—").length;
if (review.length < 1 || review.length > 180 || review.includes("\n")) {
  throw new Error(`review fails the gate (${review.length} chars)`);
}
if (review !== review.trim() || review.includes("\r")) {
  throw new Error("review fails the gate (stray whitespace)");
}
if (wordCount > 25) {
  throw new Error(`review fails the gate (${wordCount} words)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
