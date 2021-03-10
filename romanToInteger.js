const romanToInteger = (roman) => {
  let count = 0;
  const arr = roman.split("");

  for (let i = 0; i < arr.length; i++) {
    const current = symbolToInteger(arr[i]);
    const next = symbolToInteger(arr[i + 1]);

    if (current < next) {
      count -= current;
    }

    if (current >= next) {
      count += current;
    }
  }

  count += symbolToInteger(arr[arr.length - 1]);
  return count;
};

const symbolToInteger = (symbol) => {
  return {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }[symbol];
};

const integer = romanToInteger("LVIII");
console.log(integer);
