import { QueueArray, QueueLinkedList } from "./queue";
import * as chai from "chai";
const { expect } = chai;

describe("Queue ", () => {
  it("using linked list", () => {
    const s = new QueueLinkedList<number>();
    expect(s.isEmpty()).to.be.true;
    s.enqueue(1);
    s.enqueue(2);
    s.enqueue(3);
    expect(s.dequeue()).to.equal(1);
    expect(s.dequeue()).to.equal(2);
    expect(s.dequeue()).to.equal(3);
    expect(s.dequeue()).to.be.null;
  });

  it("using array", () => {
    const s = new QueueArray<number>();
    expect(s.isEmpty()).to.be.true;
    s.enqueue(1);
    s.enqueue(2);
    s.enqueue(3);
    expect(s.dequeue()).to.equal(1);
    expect(s.dequeue()).to.equal(2);
    expect(s.dequeue()).to.equal(3);
    expect(s.dequeue()).to.be.null;
  });
});
