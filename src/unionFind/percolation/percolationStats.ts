import { Percolation } from "./percolation";

export class PercolationStats {
  openSitesFractions: number[] = [];
  trialsNumber: number;
  gridSize: number;
  public runTrials(n: number, trials: number): void {
    for (let i = 0; i < trials; i++) {
      this.openSitesFractions[i] = this.runTrial() / (n * n);
    }
  }

  constructor(trials: number, gridSize: number) {
    this.gridSize = gridSize;
    this.trialsNumber = trials;
    this.runTrials(gridSize, trials);
  }

  private getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max) + 1);
  }

  // return number of open sites required for the system to percolate
  private runTrial(): number {
    const per = new Percolation(this.gridSize);
    while (!per.percolates()) {
      const x = this.getRandomInt(this.gridSize);
      const y = this.getRandomInt(this.gridSize);
      if (!per.isOpen(x, y)) {
        per.open(x, y);
      }
    }
    return per.numberOfOpenSites();
  }

  public mean(): number {
    return (
      this.openSitesFractions.reduce((a, b) => a + b, 0) / this.trialsNumber
    );
  }

  public stddev(): number {
    const mean = this.mean();
    return Math.sqrt(
      this.openSitesFractions.reduce((a, b) => a + Math.pow(b - mean, 2), 0) /
        (this.trialsNumber - 1)
    );
  }

  public confidenceLo(): number {
    const mean = this.mean();
    return mean - (1.96 * this.stddev()) / Math.sqrt(this.trialsNumber);
  }

  public confidenceHi(): number {
    const mean = this.mean();
    return mean + (1.96 * this.stddev()) / Math.sqrt(this.trialsNumber);
  }
}
