const longestCommonPrefix = (strs) => {
  const strsLen = strs.map((str) => str.length);
  const shortestLen = Math.min(...strsLen);

  let longestPrefix = [];
  for (let i = 0; i < shortestLen; i++) {
    const char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (char === strs[j][i]) {
        longestPrefix.push(char);
      }
    }
  }

  return getDuplicates(longestPrefix);
};

const getDuplicates = (arr) => {
  let results = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] === arr[i]) results += arr[i];
  }

  return results;
};
