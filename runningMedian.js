// Compute the running median of a sequence of numbers. That is, given a stream of numbers, print out the median of the list so far on each new element.
// Recall that the median of an even-numbered list is the average of the two middle numbers.

const runningMedian = (array) => {
  let count = 1;
  const length = array.length;

  while (count <= length) {
    // gets the running array & sorts it in ascending order
    const runningArray = array.slice(0, count).sort((a, b) => a - b);
    const index = Math.floor(runningArray.length / 2);

    if (runningArray.length % 2 === 0) {
      const average = (runningArray[index] + runningArray[index - 1]) / 2;
      console.log(average);
    } else {
      console.log(runningArray[index]);
    }

    count++;
  }
};

let array = [2, 1, 5, 7, 2, 0, 5];

runningMedian(array);
