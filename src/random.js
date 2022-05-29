export function getRandomInt(min = 0, max = 50) {
  const minimal = Math.ceil(min);
  const maximal = Math.floor(max);
  return Math.floor(Math.random() * (maximal - minimal)) + minimal;
}

export function getRandomOperator() {
  const arrayOfOperator = ['+', '-', '*'];
  return arrayOfOperator[getRandomInt(0, 2)];
}

export function getRandomMis(array, len) {
  const mis = '..';
  const arrayMis = array;
  const i = getRandomInt(1, (len - 1));
  arrayMis[i] = mis;
  return arrayMis;
}
