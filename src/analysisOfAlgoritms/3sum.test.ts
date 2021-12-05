import * as chai from "chai";
const { expect } = chai;
import { threeSum, twoSum } from "./3sum";
describe("2sum", () => {
  it("should not find the elements", () => {
    const input = [-1, 0, 5, 2, -1, -4];
    const sum = 0;

    expect(twoSum(input, sum)).to.deep.equal([]);
  });

  it("should find the elements", () => {
    const input = [-1, 0, 5, 1, 2, -1, -4];
    const sum = 0;

    expect(twoSum(input, sum)).to.deep.equal([
      [-1, 1],
      [1, -1],
    ]);
  });
});

describe("3sum", () => {
  it("should find the triple", () => {
    const input = [30, -40, -20, -10, 40, 0, 10, 5];
    const sum = 0;
    expect(threeSum(input, sum)).to.deep.equal([
      [-40, 10, 30],
      [-40, 0, 40],
      [-20, -10, 30],
      [-10, 0, 10],
    ]);
  });
});
