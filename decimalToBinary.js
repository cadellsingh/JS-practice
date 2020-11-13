let testValue = 174;

const reverseString = (string) => {
  return string.split("").reverse().join("");
};

const decimalToBinary = (decimal) => {
  let binary = "";

  while (decimal > 0) {
    binary += decimal % 2;
    decimal = Math.floor(decimal / 2);
  }

  return reverseString(binary);
};

console.log(decimalToBinary(testValue));

// calculation for decimal to binary

const calculation = (decimal) => {
  let bitNum = 0;

  while (decimal > 0) {
    let quotient = Math.floor(decimal / 2);
    let remainder = decimal % 2;

    console.log(`Division by 2: ${decimal} / 2`);
    console.log(`Quotient: ${quotient}`);
    console.log(`Remainder: ${remainder}`);
    console.log(`Bit Number: ${bitNum}`);

    console.log("======");

    bitNum++;
    decimal = quotient;
  }

  return "";
};

console.log(calculation(testValue));
