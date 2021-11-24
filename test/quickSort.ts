import { quickSort } from "../src/quickSort";
import * as chai from "chai";
const { expect } = chai;

it("should return empty array", () => {
  expect(quickSort([])).to.deep.equal([]);
});

it("should return same array", () => {
  expect(quickSort([1])).to.deep.equal([1]);
});

it("should sort array", () => {
  expect(quickSort([5, 4, 7, 2])).to.deep.equal([2, 4, 5, 7]);
});
