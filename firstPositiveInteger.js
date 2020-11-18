// Given an array of integers, find the first missing positive integer
// In other words, find the lowest positive integer that does not exist in the array.
// The array can contain duplicates and negative numbers as well.

const firstPositiveInteger = (arr) => {
  const sortedArr = arr.sort();

  for (const element of sortedArr) {
    if (element >= 0 && !sortedArr.includes(element + 1)) {
      return element + 1;
    }
  }
};

let results = firstPositiveInteger([3, 4, -1, 1]);
// results = firstPositiveInteger([1, 2, 0]);

console.log(results);
