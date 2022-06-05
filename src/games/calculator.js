import getRandomInt from '../utils.js';
import { amountOfRounds, start } from '../index.js';

export default function playGame() {
  const getRandomOperator = () => {
    const arrayOfOperator = ['+', '-', '*'];
    return arrayOfOperator[getRandomInt(0, 2)];
  };
  const task = 'What is the result of the expression?';
  const result = [];
  let answer;
  let question;
  for (let i = 0; i < amountOfRounds; i += 1) { // для задачи выбираем рандомно два числа и операцию
    const firstOperand = getRandomInt(1, 50);
    const secondOperand = getRandomInt(1, 50);
    const operator = getRandomOperator();
    switch (operator) {
      case '+':// проверяем  какая операция и делаем соответствующие вычисления
        answer = firstOperand + secondOperand;
        question = `${firstOperand} + ${secondOperand}`;
        break;
      case '-':
        answer = firstOperand - secondOperand;
        question = `${firstOperand} - ${secondOperand}`;
        break;
      case '*':
        answer = firstOperand * secondOperand;
        question = `${firstOperand} * ${secondOperand}`;
        break;
      default:
        break;
    }
    result.push([question, answer]);
  }
  start(result, task);
}
