// https://www.coursera.org/learn/algorithms-part1/quiz/SCxqJ/interview-questions-union-find-ungraded/attempt

// Successor with delete.

// Given a set of n integers S={0,1,...,n−1} and a sequence of requests of the following form:

// 1. Remove x from S

// 2. Find the successor of x: the smallest y in S such that y≥x.

// design a data type so that all operations (except construction) take logarithmic time or better in the worst case.

export class SuccessorWithDelete {
  id: number[] = [];
  treeSize: number[] = [];
  rootMax: number[] = [];
  constructor(n: number) {
    for (let i = 0; i <= n; i++) {
      this.id[i] = i;
      this.treeSize[i] = 1;
      this.rootMax[i] = i;
      if (i === n) {
        this.rootMax[i] = Infinity;
      }
    }
  }

  private findRoot(p: number): number {
    let root = this.id[p];
    while (root !== this.id[root]) {
      this.id[root] = this.id[this.id[root]];
      root = this.id[root];
    }
    return root;
  }

  successor(p: number): number {
    const pRoot = this.findRoot(p);
    return this.rootMax[pRoot];
  }

  remove(p: number): void {
    const q = p + 1;
    const qRoot = this.findRoot(q);
    const pRoot = this.findRoot(p);
    if (this.treeSize[pRoot] < this.treeSize[qRoot]) {
      this.id[pRoot] = qRoot;
      this.treeSize[qRoot] += this.treeSize[pRoot];
      this.rootMax[qRoot] = Math.max(this.rootMax[qRoot], this.rootMax[pRoot]);
    } else {
      this.id[qRoot] = pRoot;
      this.treeSize[pRoot] += this.treeSize[qRoot];
      this.rootMax[pRoot] = Math.max(this.rootMax[qRoot], this.rootMax[pRoot]);
    }
  }
}
