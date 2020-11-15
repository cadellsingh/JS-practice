// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
  let argArray = [];

  for (let i = 1; i < arguments.length; i++) {
    argArray.push(arguments[i]);
  }

  return arr.filter((element) => !argArray.includes(element));
}

let result = destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);

console.log(result);
