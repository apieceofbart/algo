import { expect } from "chai";
import { QuickUnionQ1 } from "./question1";

describe("question1", () => {
  it("should find earliest timestamp for n = 2", () => {
    const qf = new QuickUnionQ1(2);
    const timestamp = qf.union(0, 1, 0);

    expect(timestamp).to.equal(0);
  });

  it("should find earliest timestamp for n = 3", () => {
    const qf = new QuickUnionQ1(3);

    let timestamp = qf.union(0, 1, 0);

    expect(timestamp).to.equal(undefined);

    timestamp = qf.union(1, 2, 1);

    expect(timestamp).to.equal(1);
  });
});
