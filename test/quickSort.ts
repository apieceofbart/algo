import { quickSort, quickSortInPlace } from "../src/quickSort";
import * as chai from "chai";
const { expect } = chai;

describe("quick sort", () => {
  it("should return empty array", () => {
    expect(quickSort([])).to.deep.equal([]);
  });

  it("should return same array", () => {
    expect(quickSort([1])).to.deep.equal([1]);
  });

  it("should sort array", () => {
    expect(quickSort([5, 4, 7, 2])).to.deep.equal([2, 4, 5, 7]);
  });

  describe("in place", () => {
    it("should return empty array", () => {
      expect(quickSortInPlace([])).to.deep.equal([]);
    });

    it("should return same array", () => {
      expect(quickSortInPlace([1])).to.deep.equal([1]);
    });

    it("should sort array and return the same array", () => {
      const arr = [5, 4, 7, 2];
      const actual = quickSortInPlace(arr);
      expect(actual).to.deep.equal([2, 4, 5, 7]);
      expect(arr).to.equal(actual);
    });
  });
});
