// Run-length encoding is a fast and simple method of encoding strings.
// The basic idea is to represent repeated successive characters as a single count and character.
// For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".

const runLengthEncoding = (string) => {
  string = string.toUpperCase().split("");
  let newString = "";

  while (true) {
    const char = string[0];

    let index = string.findIndex((i) => char !== i);
    let newArray = string.slice(0, index);

    let charLength = index === -1 ? string.length : newArray.length;

    string = string.slice(newArray.length, string.length);

    newString += `${charLength}${char}`;

    if (index === -1) {
      break;
    }
  }

  console.log(newString);
};

let string = "AAAABBBCCDAA";
runLengthEncoding(string);
