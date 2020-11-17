// Given an array of integers, return a new array such that each element at index i of the
// new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
// If our input was [3, 2, 1], the expected output would be [2, 3, 6].

const productExceptOne = (arr) => {
  const product = arr.reduce((multiplier, el) => multiplier * el, 1);

  return arr.map((el) => product / el);
};

// What if you cant use division ?
// const productExceptOne = (arr) => {
//   let newArr = [];
//
//   for (const value of arr) {
//     let multiplier = 1;
//
//     for (const el of arr) {
//       value !== el ? (multiplier *= el) : null;
//     }
//
//     newArr.push(multiplier);
//   }
//   return newArr;
// };

let results = productExceptOne([1, 2, 3, 4, 5]);
//Outputs -> [120, 60, 40, 30, 24]

// results = productExceptOne([3, 2, 1]);

console.log(results);
