let value = "111001";

const reverseString = (string) => {
  return string.split("").reverse().join("");
};

const binaryToDecimal = (binary) => {
  binary = reverseString(binary);
  let sum = 0;

  for (let i = 0; i < binary.length; i++) {
    sum += binary[i] === "1" && Math.pow(2, i);
  }

  return sum;
};

console.log(binaryToDecimal(value));

// calculation for binary to decimal

const calculation = (binary) => {
  reverseString(binary)
    .split("")
    .forEach((digit, index) => {
      let num = digit * Math.pow(2, index);
      console.log(`${digit} * 2 ^ ${index}: ${num}`);
    });
};

// calculation(value);
