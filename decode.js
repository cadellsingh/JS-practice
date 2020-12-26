const decode = (str) => {
  let possibleCombinations = [];

  for (const value of str.split("")) {
    for (const secondValue of str.split("")) {
      possibleCombinations.push(secondValue);
    }
  }

  return possibleCombinations;
};

let results = decode("123");

console.log(results);
