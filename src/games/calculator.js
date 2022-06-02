import { getRandomOperator, getRandomInt } from '../random.js';// логика вычислений рандомных величин
import questAnswer from '../index.js';

export default function playGame() {
  const task = 'What is the result of the expression?';
  const result = [];
  const question = [];
  let elementOfResult;
  let elementOfQuestion;
  for (let i = 0; i < 3; i += 1) { // для задачи выбираем рандомно два числа и операцию
    const firstOperand = getRandomInt(1, 50);
    const secondOperand = getRandomInt(1, 50);
    const operator = getRandomOperator();
    switch (operator) {
      case '+':// проверяем  какая операция и делаем соответствующие вычисления
        elementOfResult = firstOperand + secondOperand;
        elementOfQuestion = `${firstOperand} + ${secondOperand}`;
        result.push(elementOfResult);
        question.push(elementOfQuestion);
        break;
      case '-':
        elementOfResult = firstOperand - secondOperand;
        elementOfQuestion = `${firstOperand} - ${secondOperand}`;
        result.push(elementOfResult);
        question.push(elementOfQuestion);
        break;
      case '*':
        elementOfResult = firstOperand * secondOperand;
        elementOfQuestion = `${firstOperand} * ${secondOperand}`;
        result.push(elementOfResult);
        question.push(elementOfQuestion);
        break;
      default:
        break;
    }
  }
  start(question, result, task);
}
