import { StackArray, StackLinkedList } from "./stack";
import * as chai from "chai";
const { expect } = chai;

describe("stack ", () => {
  it("using linked list", () => {
    const s = new StackLinkedList<number>();
    expect(s.isEmpty()).to.be.true;
    s.push(1);
    s.push(2);
    s.push(3);
    expect(s.pop()).to.equal(3);
    expect(s.pop()).to.equal(2);
    expect(s.pop()).to.equal(1);
    expect(s.pop()).to.be.null;
  });

  it("using array", () => {
    const s = new StackArray<number>();
    expect(s.isEmpty()).to.be.true;
    s.push(1);
    s.push(2);
    s.push(3);
    expect(s.pop()).to.equal(3);
    expect(s.pop()).to.equal(2);
    expect(s.pop()).to.equal(1);
    expect(s.pop()).to.be.null;
  });
});
