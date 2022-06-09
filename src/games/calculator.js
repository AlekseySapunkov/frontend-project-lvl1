import getRandomInt from '../utils.js';
import start from '../index.js';

const operators = ['+', '-', '*'];

const getRandomOperator = () => {
  return operators[getRandomInt(0, 2)];
};

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
  const operator = getRandomOperator();
  const answer = String(calculate(operator, firstOperand, secondOperand));
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  return [question, answer];
};

export default function playGame() {
  start(generateRound, description);
}
