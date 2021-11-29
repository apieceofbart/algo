// https://www.coursera.org/learn/algorithms-part1/quiz/SCxqJ/interview-questions-union-find-ungraded/attempt

// Union-find with specific canonical element.

// Add a method find() to the union-find data type so that find(i) returns the largest element in the connected component containing i.
// The operations, union(), connected(), and find() should all take logarithmic time or better.

// For example, if one of the connected components is {1,2,6,9}, then the find() method should return 9 for each of the four elements in the connected components.

export class QuickUnionQ2 {
  id: number[] = [];
  treeSize: number[] = [];
  rootMax: number[] = [];
  constructor(n: number) {
    for (let i = 0; i < n; i++) {
      this.id[i] = i;
      this.treeSize[i] = 1;
      this.rootMax[i] = i;
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

  find(p: number): number {
    return this.rootMax[this.findRoot(p)];
  }

  union(p: number, q: number): void {
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
