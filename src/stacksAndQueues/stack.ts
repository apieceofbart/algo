import { Node } from "./node";

export class StackLinkedList<T> {
  private first: Node<T> | null = null;
  push(value: T): void {
    const node = new Node<T>(value);
    const oldFirst = this.first;
    this.first = node;
    node.next = oldFirst;
  }

  pop(): T | null {
    if (this.isEmpty()) {
      return null;
    } else {
      const value = this.first!.value;

      this.first = this.first!.next;

      return value;
    }
  }

  // this type guard does not work, hence the ! above
  // google that in spare moment
  isEmpty(): this is { first: null } {
    return this.first === null;
  }
}

export class StackArray<T> {
  private items: T[] = [];

  push(value: T): void {
    // is this cheating?
    this.items.push(value);
  }

  pop(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    // this is definitely cheating
    return this.items.pop() as T;
  }

  isEmpty(): this is { items: [] } {
    return this.items.length === 0;
  }
}
