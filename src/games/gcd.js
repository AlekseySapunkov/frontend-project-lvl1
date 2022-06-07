import start from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => {
  while (number1 && number2) { // нахождение наивысшего общего делителя
    if (number1 > number2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
  }
  return number1 + number2;
};

const game = () => {
  let firstNumber = getRandomInt(1, 50);
  let secondNumber = getRandomInt(1, 50);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(gcd(firstNumber, secondNumber));
  return [question, answer];
};

export default function startGame() {
  start(game, description);
}
