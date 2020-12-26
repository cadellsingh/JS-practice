// Given a list of integers S and a target number k, write a function that returns a subset of S that adds up to k.
//     If such a subset cannot be made, then return null.

const subsetSum = (array, sum) => {
  array = array.filter((num) => num < sum);
  let validArray = null;

  array.forEach((_, index) => {
    let filteredArray = array.filter((_, idx) => {
      return index !== idx;
    });

    let newSum = filteredArray.reduce((acc, num) => (acc += num), 0);

    if (newSum === sum) {
      validArray = filteredArray;
    }
  });

  return validArray;
};

let array = [12, 1, 61, 5, 9, 2];
let sum = 24;

console.log(subsetSum(array, sum));
