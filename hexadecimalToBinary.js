let value = "4e";

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

const reverseString = (string) => {
  return string.split("").reverse().join("");
};

const decimalToBinary = (decimal) => {
  let binary = "";

  while (decimal > 0) {
    binary += decimal % 2;
    decimal = Math.floor(decimal / 2);
  }

  while (binary.length < 4) {
    binary += "0";
  }

  return reverseString(binary);
};

const hexadecimalToBinary = (hexadecimal) => {
  let binary = "";

  for (const value of hexadecimal.split("")) {
    let decimal = isNaN(value) ? binaryValue(value) : value;

    binary += decimalToBinary(decimal);
  }

  return binary;
};

// console.log(hexadecimalToBinary(value));

// calculation for hexadecimal to binary
const calculation = (hexadecimal) => {
  hexadecimal.split("").forEach((alpha) => {
    let hex = isNaN(alpha) ? binaryValue(alpha) : alpha;
    let binary = decimalToBinary(hex);

    console.log(`${alpha}: ${binary}`);
  });
};

calculation(value);
