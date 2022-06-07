import start from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => {
  let firstOperand = number1;
  let secondOperand = number2;
  while (firstOperand && secondOperand) { // нахождение наивысшего общего делителя
    if (firstOperand > secondOperand) {
      firstOperand %= secondOperand;
    } else {
      secondOperand %= firstOperand;
    }
  }
  return firstOperand + secondOperand;
};

const game = () => {
  const firstNumber = getRandomInt(1, 50);
  const secondNumber = getRandomInt(1, 50);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(gcd(firstNumber, secondNumber));
  return [question, answer];
};

export default function startGame() {
  start(game, description);
}
