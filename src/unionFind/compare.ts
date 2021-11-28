// we're going to compare quick-find, regular quick-union and optimized quick-union
// to run this file: "npx ts-node ./src/unionFind/compare.ts"

// Results for n = 100_000
// quickFind: 13.218s
// quickUnion: 12.014s
// quickUnionOptimized: 38.724ms !!!

// for n = 100_000_000 it takes optimized version 45s the other algoritms don't finish in reasonable time :)

import { algos } from ".";
import { QuickFind } from "./quickFind";
import { QuickUnion } from "./quickUnion";
import { QuickUnionOptimized } from "./quickUnionOptimized";
import { AbstractQuickFind } from "./types";

function getRandomNumber(n: number) {
  return Math.floor(Math.random() * n);
}

function runForRandomData(n: number, Qf: AbstractQuickFind) {
  const qf = new Qf(n);

  // generate n unions
  for (let i = 0; i < n; i++) {
    qf.union(getRandomNumber(n), getRandomNumber(n));
  }

  // check n connections
  for (let i = 0; i < n; i++) {
    qf.connected(getRandomNumber(n), getRandomNumber(n));
  }
}

const n = 10_000;

console.log(`${n} unions and ${n} connections checks`);

algos.forEach(({ name, className }) => {
  console.time(name);
  runForRandomData(n, className);
  console.timeEnd(name);
});
