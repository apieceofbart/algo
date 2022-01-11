// assumptions:
// grid is n x n and 2<=n<=128
// 0 is blank

export class Board {
  tiles: number[][];
  dimension: number;
  constructor(tiles: number[][]) {
    this.invalidate(tiles);
    this.tiles = tiles;
    this.dimension = tiles.length;
  }

  invalidate(tiles: number[][]) {
    if (tiles.length < 2) {
      throw new Error("Board must be at least 2x2");
    }
    const dimension = tiles.length;
    for (let i = 0; i < dimension; i++) {
      if (tiles[i].length !== dimension) {
        throw new Error("Board must be square");
      }
    }
  }

  // string representation of this board
  toString(): string {
    let boardStr = "";
    boardStr += `N = ${this.dimension}\n`;
    for (let i = 0; i < this.dimension; i++) {
      for (let j = 0; j < this.dimension; j++) {
        boardStr += this.tiles[i][j] + " ";
      }
      boardStr += "\n";
    }
    return boardStr;
  }

  print() {
    console.log(this.toString());
  }

  correctNumber(x: number, y: number) {
    if (x === this.dimension - 1 && y === this.dimension - 1) {
      return 0;
    }
    return x * this.dimension + y + 1;
  }

  correctPositionForNumber(n: number) {
    if (n === 0) {
      return [this.dimension - 1, this.dimension - 1];
    }
    const x = Math.floor((n - 1) / this.dimension);
    const y = (n - 1) % this.dimension;
    return [x, y];
  }

  // number of tiles out of place
  get hamming(): number {
    let hamming = 0;
    for (let i = 0; i < this.dimension; i++) {
      for (let j = 0; j < this.dimension; j++) {
        if (
          this.tiles[i][j] != 0 &&
          this.tiles[i][j] != this.correctNumber(i, j)
        ) {
          hamming++;
        }
      }
    }
    return hamming;
  }

  // sum of Manhattan distances between tiles and goal
  get manhattan(): number {
    let manhattan = 0;
    for (let i = 0; i < this.dimension; i++) {
      for (let j = 0; j < this.dimension; j++) {
        const value = this.tiles[i][j];
        if (value !== 0) {
          const [correctX, correctY] = this.correctPositionForNumber(value);
          let d = Math.abs(correctX - i) + Math.abs(correctY - j);
          manhattan += d;
        }
      }
    }
    return manhattan;
  }

  // is this board the goal board?
  isGoal(): boolean {
    let isGoal = true;
    outerLoop: for (let i = 0; i < this.dimension; i++) {
      for (let j = 0; j < this.dimension; j++) {
        const value = this.tiles[i][j];
        const correctNumber = this.correctNumber(i, j);
        if (value !== correctNumber) {
          isGoal = false;
          break outerLoop;
        }
      }
    }
    return isGoal;
  }

  // does this board equal y?
  equals(board: Board): boolean {
    return false;
  }

  neighbors(): Board[] {
    return [];
  }

  // a board that is obtained by exchanging any pair of tiles
  twin() {
    return new Board([]);
  }
}
