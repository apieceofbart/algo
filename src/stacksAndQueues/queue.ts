import { Node } from "./node";

export class QueueLinkedList<T> {
  private first: Node<T> | null = null;
  private last: Node<T> | null = null;
  enqueue(value: T): void {
    const oldLast = this.last;
    this.last = new Node<T>(value);
    if (this.isEmpty()) {
      this.first = this.last;
    } else {
      oldLast!.next = this.last;
    }
  }

  dequeue(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.first!.value;
    this.first = this.first!.next;
    if (this.isEmpty()) {
      this.last = null;
    }
    return value;
  }

  isEmpty(): boolean {
    return this.first === null;
  }
}

export class QueueArray<T> {
  private items: T[] = [];
  enqueue(value: T): void {
    this.items.push(value);
  }

  dequeue(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift()!;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}
