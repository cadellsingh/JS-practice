// Given an array of integers where every integer occurs three times except for one integer,
// which only occurs once, find and return the non-duplicated integer.

const nonDuplicatedInteger = (array) => {
  return array.filter((value) => {
    return 3 !== array.reduce((acc, num) => (acc += value === num && 1), 0);
  });
};

array = [13, 19, 13, 13];

console.log(nonDuplicatedInteger(array));
