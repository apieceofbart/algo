// https://www.coursera.org/learn/algorithms-part1/lecture/EcF3P/quick-find

export class QuickFind {
  id: number[] = [];
  constructor(n: number) {
    for (let i = 0; i < n; i++) {
      this.id[i] = i;
    }
  }

  connected(p: number, q: number): boolean {
    return this.id[p] === this.id[q];
  }

  union(p: number, q: number): void {
    let pid = this.id[p];
    let qid = this.id[q];
    for (let i = 0; i < this.id.length; i++) {
      if (this.id[i] === pid) {
        this.id[i] = qid;
      }
    }
  }
}
