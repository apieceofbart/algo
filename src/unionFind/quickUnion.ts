// https://www.coursera.org/learn/algorithms-part1/lecture/ZgecU/quick-union

// we store root of each node in an array

export class QuickUnion {
  id: number[] = [];
  constructor(n: number) {
    for (let i = 0; i < n; i++) {
      this.id[i] = i;
    }
  }

  private findRoot(p: number): number {
    let root = this.id[p];
    while (root !== this.id[root]) {
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
    this.id[qRoot] = pRoot;
  }
}
