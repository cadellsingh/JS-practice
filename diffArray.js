// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
// In other words, return the symmetric difference of the two arrays.

const diffArray = (arr1, arr2) => {
  return [...arr1, ...arr2].filter(
    (number, _, array) => count(array, number) === 1
  );
};

const count = (arr, num) => {
  return arr.filter((number) => number === num).length;
};

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);

console.log(
  diffArray(
    ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);
