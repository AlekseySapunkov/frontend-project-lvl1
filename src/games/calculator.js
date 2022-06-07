import getRandomInt from '../utils.js';
import start from '../index.js';

const getRandomOperator = () => {
  const arrayOfOperator = ['+', '-', '*'];
  return arrayOfOperator[getRandomInt(0, 2)];
};

const description = 'What is the result of the expression?';

const calculator = (operator, firstOperand, secondOperand) => {
  let question;
  let answer;
  switch (operator) {
    case '+':// проверяем  какая операция и делаем соответствующие вычисления
      answer = String(firstOperand + secondOperand);
      question = `${firstOperand} + ${secondOperand}`;
      break;
    case '-':
      answer = String(firstOperand - secondOperand);
      question = `${firstOperand} - ${secondOperand}`;
      break;
    case '*':
      answer = String(firstOperand * secondOperand);
      question = `${firstOperand} * ${secondOperand}`;
      break;
    default:
      break;
  }
  return [question, answer];
};

const playRound = () => {
  const firstOperand = getRandomInt(1, 50);
  const secondOperand = getRandomInt(1, 50);
  const operator = getRandomOperator();
  const round = calculator(operator, firstOperand, secondOperand);
  return round;
};

export default function playGame() {
  start(playRound, description);
}
