// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

const addUpTo = (arr, num) => {
  let bool = false;

  for (const value of arr) {
    bool = arr.some((el) => value + el === num);
    if (bool) break;
  }

  return bool;
};

let results = addUpTo([10, 15, 3, 7], 17);

console.log(results);
