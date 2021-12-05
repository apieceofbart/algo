// 3-SUM in quadratic time. Design an algorithm for the 3-SUM problem that takes time proportional to n^2
//   in the worst case. You may assume that you can sort the nn integers in time proportional to n^2
//   or better.

// we need to get the 2 sum in linear time and them for each element in the array find to elements that sum to that element

export function twoSum(array: number[], sum: number) {
  const map: Record<number, number> = {};
  const found: number[][] = [];
  for (let i = 0; i < array.length; i++) {
    const missing = sum - array[i];
    if (map[missing] !== undefined) {
      found.push([missing, array[i]]);
    }
    map[array[i]] = i;
  }
  return found.length ? found : [];
}

export function threeSum(array: number[], sum: number) {
  array.sort((a, b) => a - b);
  const results: number[][] = [];
  for (let i = 0; i < array.length; i++) {
    const arraySliced = array.slice(i + 1);
    const found = twoSum(arraySliced, sum - array[i]);
    if (found.length) {
      for (let j = 0; j < found.length; j++) {
        results.push([array[i], found[j][0], found[j][1]]);
      }
    }
  }
  return results.length ? results : [];
}
