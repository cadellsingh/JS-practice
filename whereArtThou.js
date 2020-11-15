// Make a function that looks through an array of objects (first argument)
// and returns an array of all objects that have matching name and value pairs
// Each name and value pair of the source object has to be present in the object from the collection
// if it is to be included in the returned array.

const whatIsInAName = (collection, source) => {
  source = Object.entries(source);

  return collection.filter((obj) => {
    return source.every(([key, value]) => {
      return obj[key] === value;
    });
  });
};

let results = whatIsInAName(
  [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, bat: 2 }
);

// results = whatIsInAName(
//   [
//     { first: "Romeo", last: "Montague" },
//     { first: "Mercutio", last: null },
//     { first: "Tybalt", last: "Capulet" },
//   ],
//   { last: "Capulet" }
// );

console.log(results);
