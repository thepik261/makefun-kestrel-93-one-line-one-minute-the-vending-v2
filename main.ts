import { mkdirSync, writeFileSync } from "node:fs";

// One pickup line, spoken by a vending machine to a passing human.
const line =
  "Press B4, gorgeous \u2014 my coil's been spinning since you walked by, and I drop everything for the ones I like.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
