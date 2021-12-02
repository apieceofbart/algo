// https://coursera.cs.princeton.edu/algs4/assignments/percolation/specification.php

import { QuickUnionOptimized as UnionFind } from "./quickUnionOptimized";

type SiteState = "blocked" | "open" | "full";

//                 0
//  1   2   3   4   5   6   7   8   ...   n
// n+1 n+2 n+3 n+4 n+5 n+6 n+7 n+8  ...  2n
// 2n+1
//
//
//
// (n-1)n+1 (n-1)n+2  (n-1)n+3  ...  n*n
//               n*n + 1

type Coords = [number, number];
type Neighbors = Coords[];

export class Percolation {
  n: number;
  grid: SiteState[][];
  unionFind: UnionFind;
  didYouRunTheFlow: boolean = false;
  constructor(n: number) {
    if (n <= 0) {
      throw new Error("n must be greater than 0");
    }
    this.n = n;
    this.grid = new Array(n);
    this.unionFind = new UnionFind(n * n + 2);
    for (let i = 1; i <= n; i++) {
      this.grid[i] = new Array(n);
      for (let j = 1; j <= n; j++) {
        this.grid[i][j] = "blocked";
        // connect top and bottom to grid
        if (i === 1) {
          this.unionFind.union(0, this.coordinatesToIndex(i, j));
        }
        if (i === n) {
          this.unionFind.union(n * n + 1, this.coordinatesToIndex(i, j));
        }
      }
    }
  }

  coordinatesToIndex(row: number, col: number): number {
    // i = 0 is top row
    // i = n * n + 1  is bottom row
    return (row - 1) * this.n + col;
  }

  indexToCoordinates(i: number): [number, number] {
    return [Math.floor((i - 1) / this.n) + 1, ((i - 1) % this.n) + 1];
  }

  private validate(row: number, col: number): void {
    if (row < 0 || row > this.n || col < 0 || col > this.n) {
      throw new Error(
        `row and col must be between 0 and ${this.n} but got ${row} and ${col}`
      );
    }
  }

  public open(row: number, col: number): void {
    this.validate(row, col);
    this.grid[row][col] = "open";

    const neighbors = this.getNeighbors(row, col);
    for (const neighbor of neighbors) {
      const [neighborRow, neighborCol] = neighbor;
      if (this.grid[neighborRow][neighborCol] === "open") {
        this.unionFind.union(
          this.coordinatesToIndex(row, col),
          this.coordinatesToIndex(neighborRow, neighborCol)
        );
      }
    }
  }

  private getNeighbors(row: number, col: number): Neighbors {
    const neighbors: Neighbors = [];
    if (row > 1) {
      neighbors.push([row - 1, col]);
    }
    if (row < this.n) {
      neighbors.push([row + 1, col]);
    }
    if (col > 1) {
      neighbors.push([row, col - 1]);
    }
    if (col < this.n) {
      neighbors.push([row, col + 1]);
    }
    return neighbors;
  }

  public isOpen(row: number, col: number): boolean {
    this.validate(row, col);
    return this.grid[row][col] === "open";
  }

  public isFull(row: number, col: number): boolean {
    if (!this.didYouRunTheFlow) {
      throw Error("You have to run the flow first!");
    }
    this.validate(row, col);
    return this.grid[row][col] === "full";
  }

  numberOfOpenSites(): number {
    let openSites = 0;
    for (let i = 1; i <= this.n; i++) {
      for (let j = 1; j <= this.n; j++) {
        if (this.grid[i][j] === "open") {
          openSites++;
        }
      }
    }
    return openSites;
  }

  public runFlow(): void {
    for (let i = 1; i <= this.n * this.n; i++) {
      const [row, col] = this.indexToCoordinates(i);
      if (this.unionFind.connected(0, i) && this.grid[row][col] === "open") {
        this.grid[row][col] = "full";
      }
    }
    this.didYouRunTheFlow = true;
  }

  percolates(): boolean {
    return this.unionFind.connected(0, this.n * this.n + 1);
    // or we could run the flow and check if any of the bottom row is full
  }

  drawGrid(): void {
    for (let i = 1; i <= this.n; i++) {
      let row = "";
      for (let j = 1; j <= this.n; j++) {
        if (this.grid[i][j] === "open") {
          row += "O";
        } else if (this.grid[i][j] === "full") {
          row += "X";
        } else {
          row += ".";
        }
      }
      console.log(row);
    }
  }
}
