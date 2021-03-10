const palindromeNumber = (num) => {
  const temp = num.toString().split("").reverse().join("");
  return num === Number(temp);
};

const num = -121;
console.log(palindromeNumber(num));
