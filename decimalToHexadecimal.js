let testValue = 7562;

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

const decimalToHexadecimal = (decimal) => {
  let hexadecimal = "";

  while (decimal > 0) {
    let remainder = decimal % 16;
    decimal = Math.floor(decimal / 16);

    hexadecimal += remainder > 9 ? binaryLetter(remainder) : remainder;
  }

  return reverseString(hexadecimal);
};

// console.log(decimalToHexadecimal(testValue));

// calculation for decimal to hexadecimal
const calculation = (decimal) => {
  let bitNum = 0;

  while (decimal > 0) {
    let quotient = Math.floor(decimal / 16);
    let remainder = decimal % 16;
    let remainderHex = remainder > 9 ? binaryLetter(remainder) : remainder;

    console.log(`Division by 16: ${decimal} / 2`);
    console.log(`Quotient: ${quotient}`);
    console.log(`Remainder (decimal): ${remainder}`);
    console.log(`Remainder (hexadecimal): ${remainderHex}`);
    console.log(`Bit Number: ${bitNum}`);

    console.log("======");

    bitNum++;
    decimal = quotient;
  }

  return "";
};

console.log(calculation(testValue));
