import start from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (number1, number2) => {
  const modulo = number1 % number2;
  let gcd;
  if (modulo === 0) {
    gcd = number2;
  } else {
    gcd = findGcd(number2, modulo);
  }
  return gcd;
};

const generateRound = () => {
  const firstNumber = getRandomInt(1, 50);
  const secondNumber = getRandomInt(1, 50);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(findGcd(firstNumber, secondNumber));
  return [question, answer];
};

export default function startGame() {
  start(generateRound, description);
}
