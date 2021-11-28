import { QuickUnion } from "./quickUnion";
import * as chai from "chai";
const { expect } = chai;

describe("quick union", () => {
  it("should work :)", () => {
    const qu = new QuickUnion(10);
    qu.union(4, 3);
    qu.union(3, 8);
    qu.union(6, 5);
    qu.union(9, 4);
    qu.union(2, 1);
    expect(qu.connected(0, 7)).to.be.false;
    expect(qu.connected(8, 9)).to.be.true;
    qu.union(5, 0);
    qu.union(7, 2);
    qu.union(1, 0);
    qu.union(6, 1);
    expect(qu.connected(0, 7)).to.be.true;
  });
});
