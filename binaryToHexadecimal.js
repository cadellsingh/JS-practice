let value = "1110101";

const reverseString = (string) => {
  return string.split("").reverse().join("");
};

const binaryLetter = (sum) => {
  return {
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
  }[sum];
};

const splitString = (string) => {
  string = string === "" ? " " : string;
  return string.match(/.{1,4}/g);
};

const binarySum = (currentBinary) => {
  const binaryValues = [1, 2, 4, 8];
  let sum = currentBinary === "" ? "" : 0;

  for (let i = 0; i < currentBinary.length; i++) {
    sum += currentBinary[i] === "1" && binaryValues[i];
  }

  return sum;
};

const binaryToHexadecimal = (binary) => {
  const binarySplit = splitString(reverseString(binary));
  let hexadecimal = "";

  for (const value of binarySplit) {
    let sum = binarySum(value.trim());

    hexadecimal += sum <= 9 ? sum : binaryLetter(sum);
  }

  return reverseString(hexadecimal);
};

console.log(binaryToHexadecimal(value));

// calculation for binary to hexadecimal
const calculation = (value) => {
  for (const binary of splitString(value)) {
    const binaryValues = [1, 2, 4, 8];
    let sum = 0;

    reverseString(binary)
      .split("")
      .forEach((digit, index) => {
        sum += digit === "1" && binaryValues[index];
      });

    let hexadecimal = sum <= 9 ? sum : binaryLetter(sum);
    console.log(`${binary}: ${hexadecimal}`);
  }

  return "";
};

// console.log(calculation(value));
