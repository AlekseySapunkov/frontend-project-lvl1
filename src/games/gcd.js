import start from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const game = () => {
  let firstNumber = getRandomInt(1, 50);
  let secondNumber = getRandomInt(1, 50);
  const question = `${firstNumber} ${secondNumber}`;
  while (firstNumber && secondNumber) { // нахождение наивысшего общего делителя
    if (firstNumber > secondNumber) {
      firstNumber %= secondNumber;
    } else {
      secondNumber %= firstNumber;
    }
  }
  const answer = String(firstNumber + secondNumber);
  return [question, answer];
};

export default function startGame() {
  start(game, description);
}
