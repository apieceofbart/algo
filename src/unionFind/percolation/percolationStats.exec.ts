import { PercolationStats } from "./percolationStats";

const stats = new PercolationStats(200, 100);

console.log(stats.mean());
console.log(stats.stddev());
console.log(stats.confidenceLo());
console.log(stats.confidenceHi());
