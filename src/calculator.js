import { getRandomOperator, getRandomInt } from './random.js';
import questAnswer from './greeting.js';

export default function randomCalculator() {
  const task = 'What is the result of the expression?';
  const result = [];
  const question = [];
  let elementOfResult;
  let elementOfQuestion;
  for (let i = 0; i < 3; i += 1) {
    const firstOperand = getRandomInt(1, 50);
    const secondOperand = getRandomInt(1, 50);
    const operator = getRandomOperator();
    switch (operator) {
      case '+':
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
  questAnswer(question, result, task);
}
