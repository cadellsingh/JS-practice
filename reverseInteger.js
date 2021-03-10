const reverseInteger = (num) => {
  const multiplier = num < 0 ? -1 : 1;
  num = Math.abs(num);
  const newNumber = Number(num.toString().split("").reverse().join(""));
  return newNumber * multiplier;
};

let num = -123;
console.log(reverseInteger(num));
