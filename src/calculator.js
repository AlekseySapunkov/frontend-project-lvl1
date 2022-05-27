import { getRandomOperator, getRandomInt } from './random.js';
import questAnswer from './greeting.js';

export default function randomCalculator() {
  const task = 'What is the result of the expression?';
  let result = [];
  let question = [];
  let resultation;
  let questation;
  for (let i = 0; i < 3; i += 1) {
    const firstOperand = getRandomInt(1, 50);
    const secondOperand = getRandomInt(1, 50);
    const operator = getRandomOperator();
    switch (operator) {
      case '+' :
        resultation = firstOperand + secondOperand;
        questation = `${firstOperand} + ${secondOperand}`;
        result.push(resultation);
        question.push(questation);
        break;
      case '-' :
        resultation = firstOperand - secondOperand;
        questation = `${firstOperand} - ${secondOperand}`;
        result.push(resultation);
        question.push(questation);
        break;
      case '*' :
        resultation = firstOperand * secondOperand;
        questation = `${firstOperand} * ${secondOperand}`;
        result.push(resultation);
        question.push(questation);
        break;
      default:
        break;
    }
  }
  questAnswer(question, result, task);
}
