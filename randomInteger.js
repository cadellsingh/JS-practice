const rand7 = () => {
  const randNum = rand5();
  let arrValues = [randNum];

  for (let i = 1; i <= 7; i++) {
    i !== randNum && arrValues.push(i);
  }

  return arrValues;
};

const rand5 = () => {
  return Math.floor(Math.random() * 5) + 1;
};

console.log(rand5());
