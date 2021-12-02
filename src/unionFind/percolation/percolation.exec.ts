import { Percolation } from "./percolation";
let n = 5;

const per = new Percolation(n);

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max) + 1);
}

const sitesToOpen = 13;

async function main() {
  console.clear();
  while (!per.percolates()) {
    const x = getRandomInt(n);
    const y = getRandomInt(n);
    if (!per.isOpen(x, y)) {
      per.open(x, y);
      per.drawGrid();
      await sleep(100);
      console.clear();
    }
  }
  // per.runFlow();
  per.drawGrid();
  console.log(per.numberOfOpenSites());
}

main();
