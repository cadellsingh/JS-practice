let value = "e7a9";

const reverseString = (string) => {
  return string.split("").reverse().join("");
};

const binaryValue = (letter) => {
  return {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
  }[letter.toUpperCase()];
};

const hexadecimalToDecimal = (hexadecimal) => {
  let counter = hexadecimal.length - 1;
  let total = 0;

  for (const value of hexadecimal) {
    let sum = isNaN(value) ? binaryValue(value) : parseInt(value, 10);

    let multiplier = Math.pow(16, counter);
    total += sum * multiplier;

    counter--;
  }

  return total;
};

// console.log(hexadecimalToDecimal(value));

// calculation for hexadecimal to decimal

const calculation = (hexadecimal) => {
  let hexaArray = reverseString(hexadecimal)
    .split("")
    .map((alpha) => (isNaN(alpha) ? binaryValue(alpha) : parseInt(alpha)));

  hexaArray.forEach((digit, index) => {
    let sum = digit * Math.pow(16, index);
    console.log(`${digit} * 16 ^ ${index}: ${sum}`);
  });
};

calculation(value);
