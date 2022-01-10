import { BinaryHeap } from "./binaryHeap";
import * as chai from "chai";
const { expect } = chai;
describe("binarHeap", () => {
  describe("when items are numbers", () => {
    it("should insert some elements", () => {
      const bh = new BinaryHeap<number>();

      bh.insert(1);
      bh.insert(4);
      bh.insert(2);
      bh.insert(3);

      expect(bh.items).to.deep.equal([4, 3, 2, 1]);
    });

    it("should return max", () => {
      const bh = new BinaryHeap<number>();

      bh.insert(1);
      bh.insert(4);
      bh.insert(2);
      bh.insert(3);

      const max = bh.removeMax();

      expect(max).to.equal(4);

      expect(bh.items).to.deep.equal([3, 1, 2]);
    });
  });

  describe("when items are letters", () => {
    const bh = new BinaryHeap<string>([
      "T",
      "P",
      "R",
      "N",
      "H",
      "O",
      "A",
      "E",
      "I",
      "G",
    ]);

    // example from the video
    it("should work with insert and remove max operations", () => {
      bh.insert("S");
      expect(bh.items).to.deep.equal([
        "T",
        "S",
        "R",
        "N",
        "P",
        "O",
        "A",
        "E",
        "I",
        "G",
        "H",
      ]);
      let max = bh.removeMax();

      expect(max).to.equal("T");
      expect(bh.items).to.deep.equal([
        "S",
        "P",
        "R",
        "N",
        "H",
        "O",
        "A",
        "E",
        "I",
        "G",
      ]);

      max = bh.removeMax();

      expect(max).to.equal("S");
      expect(bh.items).to.deep.equal([
        "R",
        "P",
        "O",
        "N",
        "H",
        "G",
        "A",
        "E",
        "I",
      ]);

      bh.insert("S");

      expect(bh.items).to.deep.equal([
        "S",
        "R",
        "O",
        "N",
        "P",
        "G",
        "A",
        "E",
        "I",
        "H",
      ]);
    });
  });
});
