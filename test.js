const swap = (str) => {
  return str
    .split("")
    .map((char) => (char === "1" ? "0" : "1"))
    .join("");
};

let bits = "11100010";

console.log(swap(bits));
