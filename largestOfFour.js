// Return an array consisting of the largest number from each provided sub-array.
//     For simplicity, the provided array will contain exactly 4 sub-arrays.

const largestOfFour = (arr) => {
  return arr.map((data) => Math.max(...data));
};

let result = largestOfFour([
  [13, 27, 18, 26],
  [4, 5, 1, 3],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

result = largestOfFour([
  [17, 23, 25, 12],
  [25, 7, 34, 48],
  [4, -10, 18, 21],
  [-72, -3, -17, -10],
]);

console.log(result);
