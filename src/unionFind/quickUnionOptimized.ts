// https://www.coursera.org/learn/algorithms-part1/lecture/ZgecU/quick-union

import { AbstractQuickFindClass } from "./types";

// there are two opimizations:
// 1. path compression and
// 2. keeping track of tree size and then attach smaller tree to bigger tree

export class QuickUnionOptimized implements AbstractQuickFindClass {
  id: number[] = [];
  treeSize: number[] = [];
  constructor(n: number) {
    for (let i = 0; i < n; i++) {
      this.id[i] = i;
      this.treeSize[i] = 1; // 2
    }
  }

  private findRoot(p: number): number {
    let root = this.id[p];
    while (root !== this.id[root]) {
      this.id[root] = this.id[this.id[root]]; // 1
      root = this.id[root];
    }
    return root;
  }

  connected(p: number, q: number): boolean {
    return this.findRoot(p) === this.findRoot(q);
  }

  union(p: number, q: number): void {
    const qRoot = this.findRoot(q);
    const pRoot = this.findRoot(p);
    if (this.treeSize[pRoot] < this.treeSize[qRoot]) { // 2
      this.id[pRoot] = qRoot;
      this.treeSize[qRoot] += this.treeSize[pRoot];
    } else {
      this.id[qRoot] = pRoot;
      this.treeSize[pRoot] += this.treeSize[qRoot];
    }
  }
}
