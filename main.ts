import { mkdirSync, writeFileSync } from "node:fs";

// One pickup line, spoken by a vending machine to a passing human.
const line =
  "Exact change only, gorgeous \u2014 but for you I'd break a twenty and let my coil drop something sweet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
