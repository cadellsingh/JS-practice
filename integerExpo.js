const integerExpo = (x, y) => {
  let pow = x;

  for (let i = 1; i < y; i++) {
    pow *= x;
  }

  return pow;
};

integerExpo(2, 3);
