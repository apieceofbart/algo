import { mergeSort } from "./mergeSort";
import * as chai from "chai";
const { expect } = chai;
describe("merge sort", () => {
  it("should return empty array", () => {
    expect(mergeSort([])).to.deep.equal([]);
  });

  it("should return same array", () => {
    expect(mergeSort([1])).to.deep.equal([1]);
  });

  it("should sort array", () => {
    expect(mergeSort([5, 4, 7, 2])).to.deep.equal([2, 4, 5, 7]);
  });
});
