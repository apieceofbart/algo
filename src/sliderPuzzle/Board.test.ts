import * as chai from "chai";
import { Board } from "./Board";
const { expect } = chai;
describe.only("Board", () => {
  it("should throw error if Board is smaller than 2 x 2", () => {
    expect(() => {
      new Board([[1]]);
    }).to.throw("Board must be at least 2x2");
  });

  it("should throw error if Board is not square", () => {
    expect(() => {
      new Board([
        [1, 2],
        [3, 4, 5],
      ]);
    }).to.throw("Board must be square");
  });

  it("should check if board is solved", () => {
    const solvedBoard = new Board([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 0],
    ]);
    expect(solvedBoard.isGoal()).to.be.true;

    const unsolvedBoard = new Board([
      [8, 0, 2],
      [4, 7, 1],
      [6, 3, 5],
    ]);
    expect(unsolvedBoard.isGoal()).to.be.false;
  });

  it("should calculate Hamming distance", () => {
    const board = new Board([
      [8, 1, 3],
      [4, 0, 2],
      [7, 6, 5],
    ]);
    expect(board.hamming).to.equal(5);
  });

  it("should calculate Manhattan distance", () => {
    const board = new Board([
      [8, 1, 3],
      [4, 0, 2],
      [7, 6, 5],
    ]);
    expect(board.manhattan).to.equal(10);
  });
});
