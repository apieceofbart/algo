// binary heap as an array
// needed for impleneting the priority queue

type Comparator<T> = (a: T, b: T) => -1 | 0 | 1;

export class HeapSort<T> {
  #items: T[] = [];
  size = 0;
  comparator: Comparator<T> = (a: T, b: T) => (a > b ? 1 : a < b ? -1 : 0);

  constructor(items: T[], comparator?: Comparator<T>) {
    if (comparator) {
      this.comparator = comparator;
    }
    this.#items = items;
    this.size = this.#items.length;
    this.#constructHeap();
  }

  get items() {
    return [...this.#items];
  }

  #constructHeap() {
    for (let i = Math.floor(this.size / 2) - 1; i >= 0; i--) {
      this.#sink(i);
    }
  }

  #getChildrenIndexes(index: number) {
    return [2 * index + 1, 2 * index + 2];
  }

  #swap(index1: number, index2: number) {
    let temp: T = this.#items[index1];
    this.#items[index1] = this.#items[index2];
    this.#items[index2] = temp;
  }

  // we also check if the index is within the bounds of the array
  #getIndexOfBiggerElement(index1: number, index2: number) {
    const leftChild = this.#items[index1];
    const righChild = this.#items[index2];
    if (this.comparator(leftChild, righChild) > -1 && index1 < this.size) {
      return index1;
    }
    return index2;
  }

  #sink(index: number) {
    const [leftChildIndex, rightChildIndex] = this.#getChildrenIndexes(index);
    const leftChild = this.#items[leftChildIndex];
    const rightChild = this.#items[rightChildIndex];
    const value = this.#items[index];
    if (!leftChild && !rightChild) {
      return;
    }
    const biggerChildIndex = this.#getIndexOfBiggerElement(
      leftChildIndex,
      rightChildIndex
    );

    if (value < this.#items[biggerChildIndex] && biggerChildIndex < this.size) {
      this.#swap(index, biggerChildIndex);
      this.#sink(biggerChildIndex);
    }
  }

  removeMax() {
    this.#swap(0, this.size - 1);
    this.size--;
    this.#sink(0);
  }

  sort() {
    while (this.size > 0) {
      this.removeMax();
    }
  }
}
