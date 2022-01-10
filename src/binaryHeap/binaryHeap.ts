// binary heap as an array
// needed for impleneting the priority queue

type Comparator<T> = (a: T, b: T) => -1 | 0 | 1;

export class BinaryHeap<T> {
  #items: T[] = [];
  comparator: Comparator<T> = (a: T, b: T) => (a > b ? 1 : a < b ? -1 : 0);

  constructor(items?: T[], comparator?: Comparator<T>) {
    if (comparator) {
      this.comparator = comparator;
    }
    if (items) {
      this.#items = items;
    }
  }

  get items() {
    return [...this.#items];
  }

  #getParentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }

  #getChildrenIndexes(index: number) {
    return [2 * index + 1, 2 * index + 2];
  }

  #swap(index1: number, index2: number) {
    let temp: T = this.#items[index1];
    this.#items[index1] = this.#items[index2];
    this.#items[index2] = temp;
  }

  #swim(index: number) {
    if (index === 0) {
      return;
    }
    const parentIndex = this.#getParentIndex(index);
    const parent = this.#items[parentIndex];
    const value = this.#items[index];
    const shouldKeepSwimming = this.comparator(value, parent) === 1;
    if (shouldKeepSwimming) {
      this.#swap(index, parentIndex);
      this.#swim(parentIndex);
    }
  }

  #getIndexOfBiggerElement(index1: number, index2: number) {
    const leftChild = this.#items[index1];
    const righChild = this.#items[index2];
    if (this.comparator(leftChild, righChild) === 1) {
      return index1;
    }
    return index2;
  }

  #sink(index: number) {
    const [leftChildIndex, rightChildIndex] = this.#getChildrenIndexes(index);
    const leftChild = this.#items[leftChildIndex];
    const righChild = this.#items[rightChildIndex];
    const value = this.#items[index];
    if (!leftChild && !righChild) {
      return;
    }
    const biggerChildIndex = this.#getIndexOfBiggerElement(
      leftChildIndex,
      rightChildIndex
    );

    if (value < this.#items[biggerChildIndex]) {
      this.#swap(index, biggerChildIndex);
      this.#sink(biggerChildIndex);
    }
  }

  insert(el: T) {
    this.#items.push(el);
    this.#swim(this.#items.length - 1);
  }

  removeMax() {
    const max = this.#items[0];
    this.#swap(0, this.#items.length - 1);
    this.#items.pop();
    this.#sink(0);
    return max;
  }
}
