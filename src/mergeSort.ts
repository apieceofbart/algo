function merge(leftArray: number[], rightArray: number[]): number[] {
  const resultArray: number[] = [];

  let leftIndex = 0;
  let rightIndex = 0;
  let leftArrayLength = leftArray.length;
  let rightArrayLength = rightArray.length;
  let resultIndex = 0;

  while (leftIndex < leftArrayLength && rightIndex < rightArrayLength) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      resultArray[resultIndex] = leftArray[leftIndex];
      leftIndex++;
    } else {
      resultArray[resultIndex] = rightArray[rightIndex];
      rightIndex++;
    }
    resultIndex++;
  }

  while (leftIndex < leftArrayLength) {
    resultArray[resultIndex] = leftArray[leftIndex];
    leftIndex++;
    resultIndex++;
  }

  while (rightIndex < rightArrayLength) {
    resultArray[resultIndex] = rightArray[rightIndex];
    rightIndex++;
    resultIndex++;
  }

  return resultArray;
}

export function mergeSort(array: number[]): number[] {
  const left = 0;
  const right = array.length - 1;
  if (left >= right) {
    return array;
  }
  const middle = Math.floor((left + right) / 2);
  const leftSorted = mergeSort(array.slice(left, middle + 1));
  const rightSorted = mergeSort(array.slice(middle + 1, right + 1));
  const res = merge(leftSorted, rightSorted);
  return res;
}
