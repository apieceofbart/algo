import { HeapSort } from "./heapSort";
import * as chai from "chai";
const { expect } = chai;
describe("heap sort", () => {
  // example from the video
  it("should construct heap in order and sort", () => {
    const sh = new HeapSort<string>([
      "S",
      "O",
      "R",
      "T",
      "E",
      "X",
      "A",
      "M",
      "P",
      "L",
      "E",
    ]);
    expect(sh.items).to.deep.equal([
      "X",
      "T",
      "S",
      "P",
      "L",
      "R",
      "A",
      "M",
      "O",
      "E",
      "E",
    ]);

    sh.sort();

    expect(sh.items).to.deep.equal([
      "A",
      "E",
      "E",
      "L",
      "M",
      "O",
      "P",
      "R",
      "S",
      "T",
      "X",
    ]);
  });
});
