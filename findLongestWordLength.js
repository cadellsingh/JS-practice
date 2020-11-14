// Return the length of the longest word in the provided sentence

const findLongestWordLength = (str) => {
  const wordLength = str.split(" ").map((word) => word.length);

  return Math.max(...wordLength);
};

let result = findLongestWordLength(
  "The quick brown fox jumped over the lazy dog"
);

result = findLongestWordLength(
  "What if we try a super-long word such as otorhinolaryngology"
);
console.log(result);
