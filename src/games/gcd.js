import start from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (number1, number2) => {
  const modulo = number1 % number2;
  if (modulo === 0) {
    return number2;
  } 
  return findGcd(number2, modulo);
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
