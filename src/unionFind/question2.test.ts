import { expect } from "chai";
import { QuickUnionQ2 } from "./question2";

describe("question2", () => {
  it("should find max for 4 elements unioned", () => {
    const qf = new QuickUnionQ2(10);
    qf.union(1, 9);

    expect(qf.find(1)).to.equal(9);

    qf.union(2, 1);

    expect(qf.find(1)).to.equal(9);
    expect(qf.find(2)).to.equal(9);

    qf.union(9, 6);

    [1, 2, 6, 9].forEach((i) => {
      expect(qf.find(i)).to.equal(9);
    });
  });
});
