import { expect } from "chai";
import { SuccessorWithDelete } from "./question3";

describe("Successor with delete", () => {
  it("should work", () => {
    const s = new SuccessorWithDelete(6);
    s.remove(1);

    expect(s.successor(1)).to.equal(2);

    s.remove(2);

    expect(s.successor(1)).to.equal(3);
    expect(s.successor(2)).to.equal(3);

    s.remove(4);

    expect(s.successor(4)).to.equal(5);

    s.remove(3);

    [1, 2, 3, 4, 5].forEach((i) => {
      expect(s.successor(i)).to.equal(5);
    });

    expect(s.successor(0)).to.equal(0);

    s.remove(0);

    s.remove(5);

    expect(s.successor(5)).to.equal(Infinity);

    [0, 1, 2, 3, 4, 5].forEach((i) => {
      expect(s.successor(i)).to.equal(Infinity);
    });
  });
});
