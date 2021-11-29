// https://www.coursera.org/learn/algorithms-part1/quiz/SCxqJ/interview-questions-union-find-ungraded/attempt

// Social network connectivity.

// Given a social network containing n members and a log file containing m timestamps at which times pairs of members formed friendships,
// design an algorithm to determine the earliest time at which all members are connected (i.e., every member is a friend of a friend of a friend ... of a friend).
// Assume that the log file is sorted by timestamp and that friendship is an equivalence relation.
// The running time of your algorithm should be mlogn or better and use extra space proportional to n

// https://www.coursera.org/learn/algorithms-part1/lecture/ZgecU/quick-union
export class QuickUnionQ1 {
  id: number[] = [];
  treeSize: number[] = [];
  constructor(n: number) {
    for (let i = 0; i < n; i++) {
      this.id[i] = i;
      this.treeSize[i] = 1;
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

  union(p: number, q: number, timestamp: number): number | undefined {
    const qRoot = this.findRoot(q);
    const pRoot = this.findRoot(p);
    if (this.treeSize[pRoot] < this.treeSize[qRoot]) {
      this.id[pRoot] = qRoot;
      this.treeSize[qRoot] += this.treeSize[pRoot];
    } else {
      this.id[qRoot] = pRoot;
      this.treeSize[pRoot] += this.treeSize[qRoot];
    }
    if (
      this.treeSize[pRoot] === this.id.length ||
      this.treeSize[qRoot] === this.id.length
    ) {
      //   console.log("Earliest timestamp:", timestamp);
      return timestamp;
    }
  }
}
