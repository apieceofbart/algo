import * as chai from "chai";
import { algos } from ".";
const { expect } = chai;
describe("union find", () => {
  algos.forEach(({ name, className }) => {
    it(`${name} should work :)`, () => {
      const qf = new className(10);
      qf.union(4, 3);
      qf.union(3, 8);
      qf.union(6, 5);
      qf.union(9, 4);
      qf.union(2, 1);
      expect(qf.connected(0, 7)).to.be.false;
      expect(qf.connected(8, 9)).to.be.true;
      qf.union(5, 0);
      qf.union(7, 2);
      qf.union(1, 0);
      qf.union(6, 1);
      expect(qf.connected(0, 7)).to.be.true;
    });
  });
});
