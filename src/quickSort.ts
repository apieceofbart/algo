export function quickSort(array: number[]): number[] {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[array.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

function swap(array: unknown[], i: number, j: number) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

let c = 0;

export function quickSortInPlace(
  array: number[],
  lowInit?: number,
  highInit?: number
) {
  if (array.length <= 1) {
    return array;
  }

  const low = lowInit || 0;
  const high = highInit ?? array.length - 1;
  if (low >= high) {
    return;
  }

  let i = low - 1;
  let pivot = array[high];

  for (let j = low; j < high; j++) {
    if (array[j] < pivot) {
      i++;
      swap(array, i, j);
    }
  }

  swap(array, i + 1, high);

  quickSortInPlace(array, low, i);
  quickSortInPlace(array, i + 2, high);

  return array;
}
