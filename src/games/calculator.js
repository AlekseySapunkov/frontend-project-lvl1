import getRandomInt from '../utils.js';
import start from '../index.js';

const operators = ['+', '-', '*'];
const RandomOperator = operators[getRandomInt(0, (operators.length - 1))];

const description = 'What is the result of the expression?';

const calculate = (operator, firstOperand, secondOperand) => {
  switch (operator) {
    case '+':// проверяем  какая операция и делаем соответствующие вычисления
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const generateRound = () => {
  const firstOperand = getRandomInt(1, 50);
  const secondOperand = getRandomInt(1, 50);
  const answer = String(calculate(RandomOperator, firstOperand, secondOperand));
  const question = `${firstOperand} ${RandomOperator} ${secondOperand}`;
  return [question, answer];
};

export default function playGame() {
  start(generateRound, description);
}
